import type { HomepageData } from './types';

export const fr = {
  head: {
    title: 'Guillaume Gustin - IT Business Analyst & Software Engineer',
    description:
      "IT Business Analyst au socle software engineering. J'aide les organisations à impact à traduire leurs besoins en solutions numériques pragmatiques.",
  },

  nav: [
    { label: 'HOME', href: '/fr' },
    { label: 'À PROPOS', href: '#about' },
    { label: 'EXPÉRIENCE', href: '#experience' },
    { label: 'PORTFOLIO', href: '#portfolio' },
    { label: 'CONTACT', href: '#contact' },
  ],

  showcase: {
    // Job title kept in English on both locales — a recognised, brand-level
    // intitulé rather than content to translate (avoids the FR calque, keeps
    // EN/FR parity). The rest of the FR showcase stays localised.
    title: 'IT Business Analyst',
    subtitle: '& Software Engineer',
    description:
      "J'aide les organisations à impact à traduire leurs besoins en solutions numériques pragmatiques. Ingénieur biomédical (UCLouvain) de formation, avec dix ans d'expérience dans le numérique, je me concentre sur l'analyse fonctionnelle, la discovery produit et le design de solution, avec un intérêt croissant pour l'IA responsable — et je reste hands-on quand c'est utile, pour prototyper une idée ou mener une solution jusqu'à la production.",
    location: 'Bruxelles, Belgique',
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/guillaume-gustin/', icon: 'linkedin' as const, external: true },
      { label: 'GitHub', url: 'https://github.com/ggustin93', icon: 'github' as const, external: true },
      {
        label: 'CV',
        url: 'https://pwablo.be/partners/guillaume-gustin/',
        icon: 'download' as const,
        primary: true,
        external: true,
      },
      { label: 'Contact', url: '#contact', icon: 'mail' as const, primary: true },
    ],
  },

  about: {
    title: 'Qui suis-je ?',
    contentHtml: `
      <p class="lead">
      J'ai commencé par l'ingénierie biomédicale à l'UCLouvain, où le logiciel est devenu pour moi une manière de rendre les systèmes de santé plus utiles aux personnes. Depuis, j'ai construit des outils de suivi patient, cofondé la startup medtech MedC2, accompagné des associations dans leur transformation numérique et contribué à des plateformes pour le secteur public. Aujourd'hui chez Gate 16, je travaille sur des solutions GIS pour Bruxelles Mobilité et j'approfondis ma pratique de l'ingénierie IA responsable. En parallèle, je pilote Pwablo, un studio web durable pour les organisations à mission sociale.
      </p>`,
    focusTitle: 'Mes domaines',
    focus: [
      { icon: 'bar-chart' as const, label: 'Analyse métier IT' },
      { icon: 'code' as const, label: 'Ingénierie logicielle' },
      { icon: 'cpu' as const, label: 'Ingénierie IA responsable' },
      { icon: 'leaf' as const, label: 'Numérique responsable' },
    ],
  },

  techStack: {
    description: 'Stack technique',
  },

  education: {
    title: 'Formation',
    items: [
      {
        school: 'MIT Global Startup Labs',
        year: '2018',
        degree: 'Certificat en Entrepreneuriat et Innovation',
      },
      {
        school: 'Catholic University of Louvain',
        year: '2017',
        degree: 'Développement de Projets Innovants et Transmédias',
      },
      {
        school: 'Louvain School of Engineering',
        year: '2014-2016',
        degree: 'Master en Ingénierie Biomédicale > Bio-informatique',
        badge: 'Cum Laude',
        noteHtml:
          'Mémoire de master : "<i>Gestion du diabète par intelligence artificielle et gamification : Modèles de prédiction de la glycémie et considérations de conception mHealth.</i>" <a href="https://thesis.dial.uclouvain.be/entities/masterthesis/4a51c593-7a6b-425a-ab4e-62482fe6cb34" target="_blank" rel="noopener">(Lire le mémoire)</a>',
      },
      {
        school: 'Louvain School of Engineering',
        year: '2010-2014',
        degree: 'Bachelier en Ingénierie - Sciences Biomédicales et Informatiques',
      },
    ],
  },

  experience: {
    title: 'Expérience',
    description:
      "Un parcours de terrain entre santé numérique, services publics, numérique responsable et IA appliquée.",
    badges: [
      'Développement full-stack',
      'Ingénierie IA responsable',
      'Santé numérique',
      'Secteur public & associatif',
      'Ingénierie biomédicale',
    ],
    linkedin: {
      text: 'LinkedIn',
      url: 'https://www.linkedin.com/in/guillaume-gustin/',
      icon: 'linkedin' as const,
    },
    resume: {
      text: 'CV',
      url: 'https://pwablo.be/partners/guillaume-gustin/',
      icon: 'download' as const,
    },
    items: [
      {
        title: 'Analyste fonctionnel & ingénieur logiciel',
        company: 'Gate 16 · Bruxelles Mobilité',
        duration: 'Oct 2025 - Actuel',
        logo: 'bm',
      },
      {
        title: 'Chargé de recherche en ingénierie logicielle',
        company: 'Vrije Universiteit Brussel · Ghostly+',
        duration: '2025 - 2026',
        logo: 'vub',
      },
      {
        title: 'Fondateur & web designer',
        company: 'Pwablo | Sustainable Web Agency',
        duration: 'Jan 2022 - Actuel',
        logo: 'pwablo',
      },
      {
        title: 'Conseiller en transformation numérique',
        company: 'BRUXEO',
        duration: 'Nov 2022 - Oct 2024',
        logo: 'bruxeo',
      },
      {
        title: 'Cofondateur & développeur principal',
        company: 'The Medical Cloud Company',
        duration: 'Fév 2019 - Jan 2021',
        logo: 'medc2',
      },
      {
        title: "Assistant de recherche & d'enseignement",
        company: 'Catholic University of Louvain',
        duration: 'Jan 2017 - Jan 2019',
        logo: 'uclouvain',
      },
    ],
  },

  publications: {
    title: 'Recherche et contributions',
    items: [
      {
        title: 'Publication scientifique',
        organization: 'UCLouvain & SIPAIM Conference',
        year: '2017',
        descriptionHtml:
          'Premier auteur de <i>"Empowerment of diabetic patients through mHealth technologies and education: Development of a pilot self-management application"</i> présenté à la 13e Conférence Internationale sur le Traitement et l\'Analyse de l\'Information Médicale. A également contribué au développement de la plateforme de suivi du diabète décrite dans la recherche. (Cité 9 fois)',
        link: {
          url: 'https://dial.uclouvain.be/pr/boreal/object/boreal%3A192456/datastream/PDF_01/view',
          text: "Lire l'article",
        },
        link2: {
          url: 'https://scholar.google.fr/citations?view_op=view_citation&hl=fr&user=PaToxwcAAAAJ&citation_for_view=PaToxwcAAAAJ:u5HHmVD_uO8C',
          text: 'Google Scholar',
        },
      },
      {
        title: 'Contribution à un financement européen',
        organization: 'DRAGON Project Consortium',
        year: '2020',
        descriptionHtml:
          "En tant que cofondateur de MedC2 (acquise par la suite par <a href='https://www.comunicare.be' target='_blank' rel='noopener'>Comunicare</a>), a contribué à la rédaction de la demande de subvention européenne DRAGON axée sur les applications d'IA pour la COVID-19. La candidature a permis d'obtenir 860 000 € de financement de la Commission européenne pour MedC2.",
        link: {
          url: 'https://www.prnewswire.com/nl/persberichten/the-belgian-start-up-the-medical-cloud-company-medc2-supported-by-860-000-euros-from-the-european-commission-to-develop-tools-supporting-decision-making-for-citizens-and-doctors-in-the-covid-19-crisis-884780042.html',
          text: 'Communiqué de presse',
        },
      },
    ],
  },

  portfolio: {
    title: 'Travaux sélectionnés',
    clients: [
      { image: 'bruxeo', alt: 'BRUXEO' },
      { image: 'medc2', alt: 'MedC2' },
      { image: 'ucl', alt: 'UCLouvain' },
      { image: 'cusl', alt: 'Cliniques Saint-Luc' },
      { image: 'vub', alt: 'VUB' },
      { image: 'bm', alt: 'Bruxelles Mobilité', noInvert: true },
    ],
    works: [
      {
        title: 'Tableau de bord GHOSTLY+',
        stack: ['React / TypeScript', 'FastAPI / Python', 'PostgreSQL / Supabase', 'NumPy / SciPy', 'Docker'],
        descriptionHtml:
          'Tableau de bord clinique de recherche pour le projet de rééducation par jeu sérieux <a href="https://rere.research.vub.be/ghostly-project" target="_blank" rel="noopener noreferrer">GHOSTLY+</a> de la Vrije Universiteit Brussel. Il transforme les données d\'électromyographie (EMG) issues de fichiers C3D en mesures d\'activité musculaire, scores d\'adhérence et analyses de séance pour les thérapeutes, avec accès par rôles, données pseudonymisées et journalisation d\'audit. L\'étude de faisabilité de l\'essai a été publiée dans <a href="https://doi.org/10.2196/69400" target="_blank" rel="noopener noreferrer">JMIR Serious Games (2025)</a>. <a href="https://vimeo.com/1119476263" target="_blank" rel="noopener noreferrer">Voir la démo (2 min)</a>.',
        image: 'ghostlyPerf',
        gallery: [
          { image: 'ghostlyEmg', alt: 'Analyse du signal EMG : détection des contractions et seuils MVC' },
          { image: 'ghostlySessions', alt: 'Historique des sessions : navigateur de fichiers C3D et filtres avancés' },
        ],
        isEven: true,
        featured: true,
      },
      {
        title: 'Plateforme de collecte ePRO',
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
          "Plateforme de résultats rapportés par les patients (ePRO) développée pour l'essai clinique ImmunoSABR. Cette PWA mobile-first permettait aux patients de signaler leurs symptômes entre deux visites, offrait aux cliniciens un tableau de bord sécurisé et générait des rapports PDF pour les équipes de soins, avec authentification, notifications et flux de données adaptés au contexte médical.",
        image: 'immuno',
        isEven: false,
        featured: true,
      },
      {
        title: 'Aides à la décision patient',
        stack: ['Progressive Web App', 'Ionic 4', 'Angular 8', 'Firestore', 'Cloud Functions', 'Cloud Storage'],
        descriptionHtml:
          "Application d'aide à la décision conçue pour soutenir la décision médicale partagée avec des patients atteints de cancer. Elle présente des informations de traitement personnalisées à travers des modules interactifs et des questions de réflexion guidées, puis génère des rapports PDF pour préparer des échanges plus clairs avec les cliniciens. Développée dans le cadre d'un <a href=\"https://clinicaltrials.gov/ct2/show/NCT04375566\" target=\"_blank\" rel=\"noopener noreferrer\">essai clinique enregistré</a>.",
        image: 'ipda',
        isEven: true,
        featured: true,
      },
      {
        title: 'DEC!DE Design',
        stack: ['Figma'],
        descriptionHtml:
          "Contribution bénévole en UX/UI pour l'association DEC!DE, menée avec le mouvement EPBL (Ensemble Biodiversité). Le travail traduisait des concepts écologiques en outils numériques accessibles et en formats d'engagement culturel, jusqu'à un dossier conceptuel soumis à un appel à projets Innoviris.",
        image: 'decide',
        isEven: false,
      },
      {
        title: 'Pwablo',
        stack: ['Astro', 'Éco-conception (GR491)', 'n8n', 'IA', 'Figma'],
        descriptionHtml:
          "<a href=\"https://www.pwablo.be/\" target=\"_blank\" rel=\"noopener noreferrer\">Pwablo</a> est le studio numérique responsable que je pilote pour des organisations à impact : universités, équipes de santé, associations et projets d'intérêt public. Ses missions couvrent les applications web et mobiles, les sites en écoconception (GR491), l'automatisation et les flux IA avec n8n, ainsi que les ateliers sur l'empreinte environnementale des services numériques.",
        image: 'pwablo',
        isEven: true,
      },
      {
        title: 'MyPatientCheck',
        stack: ['Progressive Web App', 'Angular 9', 'Ionic 5', 'Ionic Storage', 'Cloud Functions'],
        descriptionHtml:
          "Prototype de triage COVID-19 conçu pour des professionnels de santé sous forte pression. L'application combinait parcours d'évaluation des risques et simulations de modèles prédictifs afin d'aider à prendre des décisions cliniques plus lisibles dans des contextes à ressources limitées.",
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
          "Prototype de découverte d'événements locaux développé avec B. Vander Stappen. Il combinait cartographie, évaluations en direct et filtres pour aider les passionnés de musique à trouver des événements proches, tout en explorant des outils de promotion numérique plus utiles pour les organisateurs et les lieux culturels.",
        image: 'wadaff',
        isEven: true,
      },
    ],
  },

  contact: {
    title: 'Me contacter',
    subtitle: "Je suis toujours ouvert aux collaborations où le logiciel peut rendre les services publics, la santé ou les organisations à impact plus utiles.",
    form: {
      action: '/api/contact',
      namePlaceholder: 'Votre Nom',
      emailPlaceholder: 'Votre Email',
      messagePlaceholder: 'Parlez-moi de votre projet...',
      submitText: 'Envoyer le message',
    },
    scheduleCallText: 'Planifier un appel',
  },

  footer: {
    copyright: '© Guillaume Gustin.',
    carbonText: 'Site écoresponsable',
    nav: [
      { label: 'HOME', href: '/fr' },
      { label: 'À PROPOS', href: '#about' },
      { label: 'PORTFOLIO', href: '#portfolio' },
      { label: 'CONTACT', href: '#contact' },
    ],
  },
} satisfies HomepageData;
