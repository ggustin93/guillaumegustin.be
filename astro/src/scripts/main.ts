/**
 * All client-side behavior for the site (~2 KB):
 * sticky header, mobile nav toggle, scroll-reveal, lightbox.
 * Replaces lozad + FontFaceObserver + jQuery-era scripts from the Hugo site.
 */

/* ---------- Sticky header ---------- */
const header = document.getElementById('header');
if (header) {
  let ticking = false;
  const update = () => {
    header.classList.toggle('header--scrolled', window.scrollY > 15);
    ticking = false;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true },
  );
  update();
}

/* ---------- Mobile nav toggle ---------- */
const toggler = document.querySelector<HTMLButtonElement>('.nav-toggler');
const navMenu = document.getElementById('nav-menu');
if (toggler && navMenu) {
  const closeNav = () => {
    navMenu.classList.remove('is-open');
    toggler.setAttribute('aria-expanded', 'false');
  };
  toggler.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    toggler.setAttribute('aria-expanded', String(isOpen));
  });
  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) closeNav();
  });
}

/* ---------- Scroll reveal ---------- */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealNodes = document.querySelectorAll<HTMLElement>('.reveal');
if (reduceMotion) {
  revealNodes.forEach((el) => el.classList.add('is-visible'));
} else if (revealNodes.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
  );
  revealNodes.forEach((el) => observer.observe(el));
}

/* ---------- Lightbox (portfolio images, with optional gallery) ---------- */
const lightbox = document.getElementById('lightbox') as HTMLDialogElement | null;
if (lightbox) {
  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector<HTMLButtonElement>('.lightbox-close');
  const prevBtn = lightbox.querySelector<HTMLButtonElement>('.lightbox-prev');
  const nextBtn = lightbox.querySelector<HTMLButtonElement>('.lightbox-next');
  const dotsEl = lightbox.querySelector<HTMLElement>('.lightbox-dots');
  if (!lightboxImg || !closeBtn || !prevBtn || !nextBtn || !dotsEl) throw new Error('Lightbox DOM mismatch');

  type Shot = { src: string; alt: string };
  let gallery: Shot[] = [];
  let current = 0;
  let returnFocusEl: HTMLElement | null = null;

  const renderDots = () => {
    dotsEl.innerHTML = '';
    gallery.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'lightbox-dot';
      dot.setAttribute('aria-label', `Go to image ${i + 1}`);
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        show(i);
      });
      dotsEl.appendChild(dot);
    });
  };

  const show = (i: number) => {
    if (!gallery.length) return;
    current = (i + gallery.length) % gallery.length;
    const shot = gallery[current];
    lightboxImg.src = shot.src;
    lightboxImg.alt = shot.alt;
    const multi = gallery.length > 1;
    prevBtn.hidden = !multi;
    nextBtn.hidden = !multi;
    dotsEl.hidden = !multi;
    if (multi) {
      dotsEl.querySelectorAll('.lightbox-dot').forEach((d, di) => {
        d.classList.toggle('is-active', di === current);
      });
    }
  };

  const open = (shots: Shot[], startIndex = 0, trigger?: HTMLElement) => {
    gallery = shots;
    current = startIndex;
    returnFocusEl = trigger ?? (document.activeElement as HTMLElement | null);
    renderDots();
    show(current);
    lightbox.showModal();
  };

  document.querySelectorAll<HTMLElement>('.img-zoom-wrapper').forEach((wrapper) => {
    const img = wrapper.querySelector('img');
    if (!img) return;
    const trigger = () => {
      let shots: Shot[] | null = null;
      if (wrapper.dataset.gallery) {
        try {
          shots = JSON.parse(wrapper.dataset.gallery) as Shot[];
        } catch {
          shots = null;
        }
      }
      if (!shots || !shots.length) {
        shots = [{ src: img.currentSrc || img.src, alt: img.alt }];
      }
      open(shots, 0, wrapper);
    };
    wrapper.addEventListener('click', trigger);
    wrapper.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trigger();
      }
    });
  });

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    show(current - 1);
  });
  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    show(current + 1);
  });
  closeBtn.addEventListener('click', () => lightbox.close());
  // Click on the backdrop (outside the image) closes the dialog
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.close();
  });
  lightbox.addEventListener('keydown', (e) => {
    if (gallery.length < 2) return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      show(current - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      show(current + 1);
    }
  });
  lightbox.addEventListener('close', () => {
    lightboxImg.src = '';
    gallery = [];
    returnFocusEl?.focus();
    returnFocusEl = null;
  });
}

/* ---------- Expandable grid descriptions ---------- */
document.querySelectorAll<HTMLButtonElement>('.more-card__toggle').forEach((btn) => {
  const card = btn.closest('.more-card');
  const desc = card?.querySelector<HTMLElement>('.more-card__desc');
  if (!card || !desc) return;

  // Only surface the toggle when the clamped text is actually truncated.
  const overflows = desc.scrollHeight - desc.clientHeight > 2;
  if (!overflows) return;
  btn.classList.add('is-shown');

  btn.addEventListener('click', () => {
    const expanded = card.classList.toggle('is-expanded');
    btn.setAttribute('aria-expanded', String(expanded));
    btn.textContent = expanded ? (btn.dataset.less ?? 'Read less') : (btn.dataset.more ?? 'Read more');
  });
});

/* ---------- WebMCP discovery ---------- */
type WebMcpTool = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (input?: unknown) => Promise<unknown> | unknown;
};

type WebMcpNavigator = Navigator & {
  modelContext?: {
    provideContext?: (context: { tools: WebMcpTool[] }) => Promise<unknown> | unknown;
  };
};

const modelContext = (navigator as WebMcpNavigator).modelContext;
if (modelContext?.provideContext) {
  const profileSummary = `# Guillaume Gustin

IT Business Analyst and Software Engineer based in Brussels.
Focus areas include responsible AI, software engineering, functional analysis,
web eco-design, GIS platforms, digital health, and mission-driven public-sector
or non-profit work.

Primary resources:
- Site summary: https://guillaumegustin.be/llms.txt
- Website: https://guillaumegustin.be/
- LinkedIn: https://www.linkedin.com/in/guillaume-gustin/
- GitHub: https://github.com/ggustin93`;

  const tools: WebMcpTool[] = [
    {
      name: 'get_profile_summary',
      description: 'Return a concise Markdown profile summary for Guillaume Gustin.',
      inputSchema: {
        type: 'object',
        properties: {},
        additionalProperties: false,
      },
      execute: () => ({ markdown: profileSummary }),
    },
    {
      name: 'prepare_contact_message',
      description: 'Validate and prepare a contact message payload for the public contact form.',
      inputSchema: {
        type: 'object',
        required: ['name', 'email', 'message'],
        properties: {
          name: { type: 'string', minLength: 2 },
          email: { type: 'string', format: 'email' },
          message: { type: 'string', minLength: 10, maxLength: 2000 },
        },
        additionalProperties: false,
      },
      execute: (input) => {
        const payload = input as { name?: string; email?: string; message?: string } | undefined;
        return {
          method: 'POST',
          url: '/api/contact',
          contentType: 'multipart/form-data',
          fields: {
            name: payload?.name ?? '',
            _replyto: payload?.email ?? '',
            message: payload?.message ?? '',
          },
          requiresUserConfirmation: true,
        };
      },
    },
  ];

  void modelContext.provideContext({ tools });
}
