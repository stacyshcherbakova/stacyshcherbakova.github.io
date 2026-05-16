export const site = {
  name: 'Stacy Shcherbakova',
  title: 'Research Software Engineer',
  tagline: 'Building software @ The Institute of Cancer Reseach',
  intro:
    'Research Software Engineer focused on accelerating biological discovery through AI since 2022, with a strong biomedical foundation. Experienced in collaborating closely with researchers to develop and deploy scalable computational tools for genomics and cancer research, from HPC-enabled pipelines to full-stack applications. Skilled in Python, machine learning, containerized infrastructure, CI/CD automation, and interdisciplinary teamwork.',
  currently: 'Participating in the Nucleate UK Catalyse programme as a contributor.',
  interests: 'Passionate about AI for science — using machine learning to accelerate scientific discovery, particularly in biology and medicine. Keen to contribute to and grow the AI for science and biotech community.',
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
    'Experienced in collaborating closely with researchers to develop and deploy scalable computational tools for genomics and cancer research, from HPC-enabled pipelines to full-stack applications. Skilled in Python, machine learning, containerized infrastructure, CI/CD automation, and interdisciplinary teamwork. Interested in building AI Scientists and Robot Scientists to accelerate scientific discovery, while also exploring how AI can partially automate web-based research and operational workflows.',
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
      'Optimised computational performance of large-scale workflows, reducing HPC resource usage and improving reproducibility for publication-ready analyses.',
      'Delivered Carpentries-style training and provided ongoing support in software engineering best practices, code optimisation, and effective use of HPC environments.',
      'Created written and video tutorials (YouTube) to help researchers run software on the Alma HPC cluster at ICR.',
    ],
  },
];

export const education = [
  {
    degree: 'MSc Computer Science',
    place: 'University College London, UK',
    dates: 'September 2023 – September 2024',
    notes:
      'Modules: Introduction to Programming · Database Fundamentals · Algorithms · Computer Architecture · App Engineering · Software Engineering · Functional Programming · Applied Deep Learning · Computer Science Project · Overall: Merit',
  },
  {
    degree: 'BSc Biomedical Sciences: Cells and Molecules',
    place: 'University College London, UK',
    dates: 'September 2020 – May 2023',
    notes:
      'Relevant Modules: Introductory Statistical Methods and Computing · Introduction to Coding for Biosciences Research · Linear Algebra for Data Science · Advanced Statistics and Machine Learning for Biosciences · Overall: First Class',
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
  'CI/CD (GitLab runners, automated testing/deployment)',
  'HPC',
  'SLURM',
  'Docker',
  'Linux',
  'Virtual Machines',
  'Data Analysis',
  'Machine Learning (VAEs, GANs)',
  'Data Structures & Algorithms',
];

export const publications = [
  {
    title: 'Designing minimal E. coli genomes using variational autoencoders (2024)',
    note: 'First author — Submitted to Cell Systems',
    href: 'https://www.biorxiv.org/content/10.1101/2024.10.22.619620v2',
  },
  {
    title: 'Generative design and construction of functional plasmids with a DNA language model (2025)',
    note: 'Co-author — Submitted to Nature Biotechnology',
    href: 'https://www.biorxiv.org/content/10.64898/2025.12.06.692736v1',
  },
];

export const projects = [
  {
    name: 'Genome Minimizer 2 UI',
    description: 'A local interface for running the genome-minimizer-2 pipeline, inspecting logs, and browsing generated artifacts.',
    tags: ['React', 'FastAPI', 'Synthetic Biology'],
    href: 'https://github.com/stacyshcherbakova/genome-minimizer-ui',
  },
  {
    name: 'Genome Minimizer 2',
    description: "Master's thesis work on building a VAE model to generate new bacterial genomes and additional pipelines to assess genome viability.",
    tags: ['VAEs', 'Research Software', 'Synthetic Biology'],
    href: 'https://github.com/ucl-cssb/genome-minimizer-2',
  },
  {
    name: 'Chemistry Agent',
    description: 'A science agent built with the FutureHouse Aviary and LDP (Language Decision Processes) frameworks, capable of solving GCSE-level chemistry problems. The agent selects domain-specific tools, maintains a reasoning chain across calls, and evaluates multi-step calculations.',
    tags: ['Python', 'AI Agents', 'FutureHouse', 'LDP', 'Chemistry'],
    href: 'https://github.com/stacyshcherbakova/chemistry-agent',
  },
];

export const researchProjects = [
  {
    title: "Master's Thesis at Prof. Chris Barnes' Lab",
    dates: 'June 2024 – September 2024',
    description:
      "Title: Minimal Bacterial Genomes using Generative Machine Learning Model. Working with collaborators at the University of Bristol, built a variational autoencoder (VAE) to generate reduced E. coli genomes, stripped to only essential genes. Outputs were validated using Bristol's whole-cell model. The project resulted in a first-author preprint submitted to Cell Systems. The generative approach developed here directly opened a follow-on direction in plasmid design, subsequently developed into a separate preprint submitted to Nature Biotechnology.",
  },
  {
    title: "Summer Project at Dr. Charles Swanton's Lab",
    dates: 'June – July 2023',
    description:
      'Studied ways of applying autoencoders on genetic data for cancer classification and investigated VAE models on gene expression data. Additionally, pre-processed and organised a 300-page document with cancer gene information into a data frame for use in future diagnostic pipelines.',
  },
  {
    title: "Bachelor's Thesis at Prof. Chris Barnes' Lab",
    dates: 'September 2022 – March 2023',
    description:
      'Title: Exploration of Variant Importance in Cancer Diagnostics using Machine Learning. Built a self-supervised machine learning workflow for predicting cancer type from genomic data and analysed the impact of SNVs, CNVs, and SVs on prediction accuracy using gradient-boosted trees with CatBoost.',
  },
  {
    title: "Summer Project at Prof. Richard Mott's Lab",
    dates: 'May – September 2022',
    description:
      'Spent four months analysing rat RNA sequencing gene expression data for signatures of dominance in alternative splicing across Liver and Fat tissues, building bioinformatics analysis pipelines from scratch – an experience that motivated a longer-term interest in building more intelligent, automated systems for scientific discovery.',
  },
];

export const mentorship = {
  intro:
    'Between the ages of 11 and 14, I lived in the UK and found the transition genuinely hard. New education system, new culture, new way of doing everything. When I arrived at UCL as an international student on the Undergraduate Preparatory Certificate programme, I wanted to make that journey a bit easier for the people coming after me, so I looked for every opportunity to do that.',
  roles: [
    {
      title: 'UPCSE Biology Student Representative',
      org: 'UCL',
      dates: 'Oct 2019 – May 2020 · 8 months',
      description:
        'While still a UPC student myself, I represented the views of peers taking the biology module to programme staff and module professors. I gathered feedback, raised concerns in student rep meetings, and made sure the needs of a cohort of international students new to the UK system were actually heard.',
    },
    {
      title: 'UPC (UPCSE) Mentor',
      org: 'UCL',
      dates: 'Sep 2020 – Mar 2021 · 7 months',
      description:
        'In my first year of undergrad, I mentored incoming UPC students across two terms, right in the middle of COVID. Students were navigating remote learning far from home and the extra support really mattered. My groups had a strong show-up rate every week with cameras on, which meant a lot. That experience is what made me want to keep going with mentorship.',
    },
    {
      title: 'UPC Ambassador',
      org: 'UCL',
      dates: 'Sep 2020 – Sep 2023 · 3 years',
      description:
        'For three years I represented the UPC programme to prospective students. I hosted Zoom Q&A sessions where applicants could ask honest questions about the programme and life at UCL, and I gave campus tours to school students visiting the university. I tried to share what I actually wished someone had told me when I was in their position.',
    },
    {
      title: 'Biomedical Sciences Mentor',
      org: 'UCL',
      dates: 'Sep 2021 – Jun 2023 · 1 year 10 months',
      description:
        'In my second and third years I mentored first-year Biomedical Sciences students through their first term at UCL. I wanted to be the kind of person I would have wanted when I was starting out: someone you could ask the questions that felt too small or too obvious to ask officially, and who helped you find your feet without making a big deal of it.',
    },
  ],
};

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
    details: '2017-2019',
  },
];
