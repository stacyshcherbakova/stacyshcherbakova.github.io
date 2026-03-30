export const site = {
  name: 'Stacy Shcherbakova',
  title: 'Research Software Engineer',
  tagline: 'Building software @ The Institute of Cancer Reseach',
  intro:
    'Research Software Engineer focused on accelerating biological discovery through AI since 2022, with a strong biomedical foundation.',
  location: 'London, UK',
  contact: {
    email: 'stacy.shcherbakova@icr.ac.uk',
    socials: [
      { label: 'Email', href: 'mailto:stacy.shcherbakova@icr.ac.uk' },
      { label: 'GitHub', href: 'https://github.com/stacyshcherbakova' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/stacy-shcherbakova-684552127/' },
      { label: 'X', href: 'https://x.com/segvoid' },
      { label: 'ORCID', href: 'https://orcid.org/0009-0002-1139-6787' },
    ],
  },
};

export const cvSummary = {
  headline:
    'Research Software Engineer focused on accelerating biological discovery through AI since 2022, with a strong biomedical foundation.',
  blurb:
    'Experienced in collaborating closely with researchers to develop and deploy scalable computational tools for genomics and cancer research, from HPC-enabled pipelines to full-stack applications. Skilled in Python, machine learning, containerized infrastructure, CI/CD automation, and interdisciplinary teamwork.',
  contact: 'London, UK · stacy.shcherbakova@icr.ac.uk',
};

export const experience = [
  {
    role: 'Research Software Engineer',
    org: 'Institute of Cancer Research',
    dates: 'October 2024 – Present',
    bullets: [
      'Partnered directly with researchers to gather requirements and develop software solutions supporting cancer research, ranging from data-processing pipelines to full-stack Flask/MySQL web applications.',
      'Built and maintained deployment infrastructure for internal research applications using Docker, NGINX, MySQL, and CI/CD automation.',
      'Optimized computational performance of large-scale workflows, reducing HPC resource usage and improving reproducibility for publication-ready analyses.',
      'Delivered Carpentries-style training and provided ongoing support in software engineering best practices, code optimization, and effective use of HPC environments.',
    ],
  },
];

export const education = [
  {
    degree: 'MSc Computer Science',
    place: 'University College London, UK',
    dates: 'September 2023 – September 2024',
    notes:
      'Relevant modules: Database Fundamentals, Algorithms, Computer Architecture, App Engineering, Software Engineering, Functional Programming, Applied Deep Learning.',
  },
  {
    degree: 'BSc Biomedical Sciences',
    place: 'University College London, UK',
    dates: 'September 2020 – May 2023',
    notes:
      'Relevant modules: Introductory Statistical Methods and Computing, Linear Algebra for Data Science, Advanced Statistics and Machine Learning for Biosciences.',
  },
];

export const skills = [
  'Python (Flask, FastAPI)',
  'R',
  'C++',
  'Julia',
  'Bash',
  'SQL',
  'Git',
  'CI/CD (GitLab pipelines, self-hosted runners)',
  'Docker',
  'NGINX',
  'Linux',
  'HPC / SLURM',
  'MySQL',
  'Machine Learning (VAEs, GANs, transformers, transfer learning)',
  'Shiny',
  'ShinyProxy',
];

export const publications = [
  {
    title: 'Designing Minimal E. coli Genomes Using Variational Autoencoders',
    note: 'bioRxiv (2025), submitted to Cell Systems',
    href: 'https://www.biorxiv.org/content/10.1101/2024.10.22.619620v2',
  },
  {
    title: 'Generative Design and Construction of Functional Plasmids with a DNA Language Model',
    note: 'bioRxiv (2025), submitted to Nature Biotechnology',
    href: 'https://www.biorxiv.org/content/10.64898/2025.12.06.692736v1',
  },
];

export const projects = [
  {
    name: 'Genome Minimizer 2 UI',
    description: 'A local interface for running the genome-minimizer-2 pipeline, inspecting logs, and browsing generated artifacts.',
    tags: ['React', 'FastAPI', 'Synthetic Biology'],
  },
  {
    name: 'Minimal Bacterial Genomes using Generative Machine Learning Models',
    description: 'Master’s thesis work on building a VAE model to generate new bacterial genomes and additional pipelines to assess genome viability.',
    tags: ['VAEs', 'Research Software', 'Synthetic Biology'],
  },
];

export const researchProjects = [
  {
    title: 'Master’s Thesis at Prof Chris Barnes’ Lab',
    dates: 'June 2024 – September 2024',
    description:
      'Minimal Bacterial Genomes using Generative Machine Learning Models. Built a VAE model to generate new bacterial genomes and developed additional pipelines to assess genome viability.',
  },
  {
    title: 'Summer project at Dr Charles Swanton’s Lab',
    dates: 'June 2023 – July 2023',
    description:
      'Studied applications of autoencoders on genetic data for cancer classification and investigated VAE models on gene expression data. Also pre-processed and organized a 300-page document with cancer gene information into a dataframe for future diagnostic pipelines.',
  },
  {
    title: 'Bachelor’s Thesis at Prof Chris Barnes’ Lab',
    dates: 'September 2022 – March 2023',
    description:
      'Exploration of Variant Importance in Cancer Diagnostics using Machine Learning. Built machine learning models for prediction of cancer types using genomic data and analyzed the impact of SNVs, CNVs, and SVs on prediction accuracy.',
  },
  {
    title: 'Summer project at Prof Richard Mott’s Lab',
    dates: 'May 2022 – September 2022',
    description:
      'Conducted large-scale rat RNA-sequencing gene expression analysis to identify dominance signatures in alternative splicing across liver and fat tissues. This work highlighted computational bottlenecks that motivated a transition into AI and research software engineering.',
  },
];

export const certificates = [
  {
    title: 'Data Scientists Professional Training Course',
    issuer: 'Yandex School of Data Analysis',
    kind: 'certificate',
    details: 'Issued Oct 2021 · Credential ID 20212DS00828',
  },
  {
    title: 'Fundamentals of Deep Learning',
    issuer: 'NVIDIA',
    kind: 'certificate',
    details: 'Issued Sep 2022 · Credential ID 1tO0Ys3ITkGJkXM3sgBKrQ',
  },
  {
    title: 'C++ for Game Development',
    issuer: 'XYZ School',
    kind: 'course',
    details: 'Ongoing',
  },
  {
    title: 'Программа дополнительного образования "Подготовка абитуриента" по биологии Московского Государственного Университета',
    issuer: 'Moscow State University',
    kind: 'course',
    details: '2017–2019',
  },
];
