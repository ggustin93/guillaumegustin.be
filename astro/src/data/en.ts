import type { HomepageData } from './types';

export const en = {
  head: {
    title: 'Guillaume Gustin - IT Business Analyst & Software Engineer',
    description:
      'IT Business Analyst with a software engineering background. I help mission-driven organisations translate their needs into pragmatic digital solutions.',
  },

  nav: [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '#about' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'PORTFOLIO', href: '#portfolio' },
    { label: 'CONTACT', href: '#contact' },
  ],

  showcase: {
    title: 'IT Business Analyst',
    subtitle: '& Software Engineer',
    description:
      'I help mission-driven organisations translate their needs into pragmatic digital solutions. A biomedical engineer (UCLouvain) by training with 10 years in ICT, I focus on functional analysis, product discovery and solution design, with a growing emphasis on responsible AI — and stay hands-on when useful, whether to prototype an idea or carry a solution through to production.',
    location: 'Brussels, Belgium',
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/guillaume-gustin/', icon: 'linkedin' as const, external: true },
      { label: 'GitHub', url: 'https://github.com/ggustin93', icon: 'github' as const, external: true },
      {
        label: 'Résumé / CV',
        url: 'https://pwablo.be/partners/guillaume-gustin/',
        icon: 'download' as const,
        primary: true,
        external: true,
      },
      { label: 'Contact', url: '#contact', icon: 'mail' as const, primary: true },
    ],
  },

  about: {
    title: 'Who am I?',
    contentHtml: `
      <p class="lead">
      I started in biomedical engineering at UCLouvain, where software first became a way to make health systems more useful to people. Since then, I have built patient-monitoring tools, co-founded the medtech startup MedC2, supported non-profits through digital transformation, and contributed to public-sector platforms. Today at Gate 16, I work on GIS solutions for Brussels Mobility and deepen my practice in responsible AI engineering. In parallel, I run Pwablo, a sustainable web studio for organisations with a social mission.
      </p>`,
    focusTitle: 'Where I focus',
    focus: [
      { icon: 'bar-chart' as const, label: 'IT Business Analysis' },
      { icon: 'code' as const, label: 'Software Engineering' },
      { icon: 'cpu' as const, label: 'Responsible AI Engineering' },
      { icon: 'leaf' as const, label: 'Responsible IT' },
    ],
  },

  techStack: {
    description: 'Tech Stack',
  },

  education: {
    title: 'Education',
    items: [
      {
        school: 'MIT Global Startup Labs',
        year: '2018',
        degree: 'Entrepreneurship & Innovation Certificate',
      },
      {
        school: 'Catholic University of Louvain',
        year: '2017',
        degree: 'Innovation and Transmedia Project Development',
      },
      {
        school: 'Louvain School of Engineering',
        year: '2014-2016',
        degree: 'Master in Biomedical Engineering > Bioinformatics',
        badge: 'Cum Laude',
        noteHtml:
          'Master thesis: "<i>Diabetes management through artificial intelligence and gamification: Blood glucose prediction models and mHealth design considerations.</i>" <a href="https://thesis.dial.uclouvain.be/entities/masterthesis/4a51c593-7a6b-425a-ab4e-62482fe6cb34" target="_blank" rel="noopener">(Read thesis)</a>',
      },
      {
        school: 'Louvain School of Engineering',
        year: '2010-2014',
        degree: 'Bachelor of Engineering - Biomedical and Computer Sciences',
      },
    ],
  },

  experience: {
    title: 'Experience',
    description:
      'A hands-on path through digital health, public services, responsible IT, and applied AI.',
    badges: [
      'Full-stack Software Engineering',
      'Responsible AI Engineering',
      'Digital Health',
      'Public & Non-profit Sector',
      'Biomedical Engineering',
    ],
    linkedin: {
      text: 'Connect on LinkedIn',
      url: 'https://www.linkedin.com/in/guillaume-gustin/',
      icon: 'linkedin' as const,
    },
    resume: {
      text: 'Download Resume',
      url: 'https://pwablo.be/partners/guillaume-gustin/',
      icon: 'download' as const,
    },
    items: [
      {
        title: 'Functional Analyst & Software Engineer',
        company: 'Gate 16 · Brussels Mobility',
        duration: 'Oct 2025 - Current',
        logo: 'bm',
      },
      {
        title: 'Research Software Engineer',
        company: 'Vrije Universiteit Brussel · Ghostly+',
        duration: '2025 - 2026',
        logo: 'vub',
      },
      {
        title: 'Founder & Web Designer',
        company: 'Pwablo | Sustainable Web Agency',
        duration: 'Jan 2022 - Current',
        logo: 'pwablo',
      },
      {
        title: 'Digital Transformation Advisor',
        company: 'BRUXEO',
        duration: 'Nov 2022 - Oct 2024',
        logo: 'bruxeo',
      },
      {
        title: 'Co-founder & Lead developer',
        company: 'The Medical Cloud Company',
        duration: 'Feb 2019 - Jan 2021',
        logo: 'medc2',
      },
      {
        title: 'Research & Teaching Assistant',
        company: 'Catholic University of Louvain',
        duration: 'Jan 2017 - Jan 2019',
        logo: 'uclouvain',
      },
    ],
  },

  publications: {
    title: 'Research & contributions',
    items: [
      {
        title: 'Scientific Publication',
        organization: 'UCLouvain & SIPAIM Conference',
        year: '2017',
        descriptionHtml:
          'First author of <i>"Empowerment of diabetic patients through mHealth technologies and education: Development of a pilot self-management application"</i> presented at the 13th International Conference on Medical Information Processing and Analysis. Also contributed to developing the diabetes monitoring platform described in the research. (Cited 9 times)',
        link: {
          url: 'https://dial.uclouvain.be/pr/boreal/object/boreal%3A192456/datastream/PDF_01/view',
          text: 'Read paper',
        },
        link2: {
          url: 'https://scholar.google.fr/citations?view_op=view_citation&hl=fr&user=PaToxwcAAAAJ&citation_for_view=PaToxwcAAAAJ:u5HHmVD_uO8C',
          text: 'Google Scholar',
        },
      },
      {
        title: 'EU Grant Contribution',
        organization: 'DRAGON Project Consortium',
        year: '2020',
        descriptionHtml:
          "As co-founder of MedC2 (later acquired by <a href='https://www.comunicare.be' target='_blank' rel='noopener'>Comunicare</a>), contributed to writing the DRAGON European grant application focused on AI applications for COVID-19. The application successfully secured €860,000 in funding from the European Commission for MedC2.",
        link: {
          url: 'https://www.prnewswire.com/nl/persberichten/the-belgian-start-up-the-medical-cloud-company-medc2-supported-by-860-000-euros-from-the-european-commission-to-develop-tools-supporting-decision-making-for-citizens-and-doctors-in-the-covid-19-crisis-884780042.html',
          text: 'Press release',
        },
      },
    ],
  },

  portfolio: {
    title: 'Featured Works',
    clients: [
      { image: 'bruxeo', alt: 'BRUXEO' },
      { image: 'medc2', alt: 'MedC2' },
      { image: 'ucl', alt: 'UCLouvain' },
      { image: 'cusl', alt: 'Cliniques Saint-Luc' },
      { image: 'vub', alt: 'VUB' },
      { image: 'bm', alt: 'Brussels Mobility', noInvert: true },
    ],
    works: [
      {
        title: 'GHOSTLY+ Rehabilitation Dashboard',
        stack: ['React / TypeScript', 'FastAPI / Python', 'PostgreSQL / Supabase', 'NumPy / SciPy', 'Docker'],
        descriptionHtml:
          'A clinical-research dashboard for the <a href="https://rere.research.vub.be/ghostly-project" target="_blank" rel="noopener noreferrer">GHOSTLY+</a> serious-game rehabilitation project at the Vrije Universiteit Brussel. It turns electromyography (EMG) data from C3D motion-capture files into muscle-activity metrics, adherence scores and session analytics for therapists, with role-based access, pseudonymised data and audit logging. The trial\'s feasibility study was published in <a href="https://doi.org/10.2196/69400" target="_blank" rel="noopener noreferrer">JMIR Serious Games (2025)</a>. <a href="https://vimeo.com/1119476263" target="_blank" rel="noopener noreferrer">Watch the 2-min demo</a>.',
        image: 'ghostlyPerf',
        gallery: [
          { image: 'ghostlyEmg', alt: 'EMG signal analysis with contraction detection and MVC thresholds' },
          { image: 'ghostlySessions', alt: 'Session history: C3D file browser with advanced filters' },
        ],
        isEven: true,
        featured: true,
      },
      {
        title: 'ePRO Collection Platform',
        stack: [
          'Progressive Web App',
          'Ionic 4',
          'Angular 8',
          'GCP Authentication',
          'Firestore',
          'Cloud Functions',
          'Cloud Messaging',
          'Cloud Storage',
        ],
        descriptionHtml:
          'An electronic patient-reported outcomes (ePRO) platform developed for the ImmunoSABR clinical trial. The mobile-first PWA helped patients report symptoms between visits, gave clinicians a secure dashboard, and generated PDF reports for care teams, with authentication, notifications, and healthcare-grade data flows.',
        image: 'immuno',
        isEven: false,
        featured: true,
      },
      {
        title: 'Patient Decision Aids',
        stack: ['Progressive Web App', 'Ionic 4', 'Angular 8', 'Firestore', 'Cloud Functions', 'Cloud Storage'],
        descriptionHtml:
          'A cancer patient decision-aid application built to support shared medical decision-making. It presents personalised treatment information through interactive modules and guided reflection questions, then generates PDF reports that help patients prepare clearer conversations with their clinicians. Developed as part of a <a href="https://clinicaltrials.gov/ct2/show/NCT04375566" target="_blank" rel="noopener noreferrer">registered clinical trial</a>.',
        image: 'ipda',
        isEven: true,
        featured: true,
      },
      {
        title: 'DEC!DE Design',
        stack: ['Figma'],
        descriptionHtml:
          'Volunteer UX/UI contribution for the non-profit DEC!DE, developed with EPBL (Ensemble Biodiversité). The work translated ecological concepts into approachable digital tools and cultural engagement formats, culminating in a concept brief submitted to an Innoviris call for projects.',
        image: 'decide',
        isEven: false,
      },
      {
        title: 'Pwablo',
        stack: ['Astro', 'Eco-design (GR491)', 'n8n', 'AI', 'Figma'],
        descriptionHtml:
          '<a href="https://www.pwablo.be/" target="_blank" rel="noopener noreferrer">Pwablo</a> is the responsible-digital studio I run for mission-driven organisations: universities, healthcare teams, non-profits, and public-interest projects. Its work spans web and mobile apps, eco-designed websites (GR491), automation and AI workflows with n8n, and workshops on the environmental footprint of digital services.',
        image: 'pwablo',
        isEven: true,
      },
      {
        title: 'MyPatientCheck',
        stack: ['Progressive Web App', 'Angular 9', 'Ionic 5', 'Ionic Storage', 'Cloud Functions'],
        descriptionHtml:
          'An early COVID-19 triage prototype for healthcare professionals working under pressure. The application combined risk-assessment flows with predictive-model simulations to support clearer clinical decisions in resource-constrained settings.',
        image: 'mypc',
        isEven: false,
      },
      {
        title: 'Wadaff',
        stack: [
          'Google Maps API',
          'Angular 8',
          'Ionic 4',
          'Firestore',
          'Progressive Web App',
          'Gitlab CD/CI',
          'Facebook API',
        ],
        descriptionHtml:
          'A local-events discovery prototype built with B. Vander Stappen. It combined mapping, live ratings, and filters to help music enthusiasts find nearby events, while exploring more useful digital promotion tools for organisers and venues.',
        image: 'wadaff',
        isEven: true,
      },
    ],
  },

  contact: {
    title: 'Get in touch',
    subtitle: 'I am always open to thoughtful collaborations where software can make public services, healthcare, or mission-driven work more useful.',
    form: {
      action: '/api/contact',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Tell me about your project...',
      submitText: 'Send Message',
    },
    scheduleCallText: 'Schedule a call',
  },

  footer: {
    copyright: '© Guillaume Gustin.',
    carbonText: 'Site écoresponsable',
    nav: [
      { label: 'HOME', href: '/' },
      { label: 'ABOUT', href: '#about' },
      { label: 'PORTFOLIO', href: '#portfolio' },
      { label: 'CONTACT', href: '#contact' },
    ],
  },
} satisfies HomepageData;
