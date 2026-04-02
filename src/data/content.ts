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
    dates: 'October 2024 - Present',
    bullets: [
      'Partnered directly with researchers to gather requirements and develop software solutions supporting cancer research, ranging from data-processing pipelines to full-stack Flask/MySQL web applications.',
      'Built and maintained deployment infrastructure for internal research applications using Docker, NGINX, MySQL, and CI/CD automation.',
      'Optimized computational performance of large-scale workflows, reducing HPC resource usage and improving reproducibility for publication-ready analyses.',
      'Delivered Carpentries-style training and provided ongoing support in software engineering best practices, code optimization, and effective use of HPC environments.',
      'Created written and video tutorials (YouTube) to help researchers run software on the Alma HPC cluster at ICR.',
    ],
  },
];

export const education = [
  {
    degree: 'MSc Computer Science',
    place: 'University College London, UK',
    dates: 'September 2023 - September 2024',
    notes:
      'Relevant modules: Database Fundamentals, Algorithms, Computer Architecture, App Engineering, Software Engineering, Functional Programming, Applied Deep Learning.',
  },
  {
    degree: 'BSc Biomedical Sciences',
    place: 'University College London, UK',
    dates: 'September 2020 - May 2023',
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
    title: "Master's Thesis at Prof Chris Barnes' Lab",
    dates: 'June 2024 - September 2024',
    description:
      'Minimal Bacterial Genomes using Generative Machine Learning Models. Built a VAE model to generate new bacterial genomes and developed additional pipelines to assess genome viability.',
  },
  {
    title: "Summer project at Dr Charles Swanton's Lab",
    dates: 'June 2023 - July 2023',
    description:
      'Studied applications of autoencoders on genetic data for cancer classification and investigated VAE models on gene expression data. Also pre-processed and organized a 300-page document with cancer gene information into a dataframe for future diagnostic pipelines.',
  },
  {
    title: "Bachelor's Thesis at Prof Chris Barnes' Lab",
    dates: 'September 2022 - March 2023',
    description:
      'Exploration of Variant Importance in Cancer Diagnostics using Machine Learning. Built machine learning models for prediction of cancer types using genomic data and analyzed the impact of SNVs, CNVs, and SVs on prediction accuracy.',
  },
  {
    title: "Summer project at Prof Richard Mott's Lab",
    dates: 'May 2022 - September 2022',
    description:
      'Conducted large-scale rat RNA-sequencing gene expression analysis to identify dominance signatures in alternative splicing across liver and fat tissues. This work highlighted computational bottlenecks that motivated a transition into AI and research software engineering.',
  },
];

export const writing = [
  {
    title: "My first post",
    date: '2 April 2026',
    summary: 'A reflection on Q1 2026 — exhaustion, putting myself out there, and why I am finally glad to be in London.',
    content: [
      "I have been meaning to start writing a blog for a while, maybe all the way back in 2022 when I first came across the blog of Samuel Rodriques and realised that his blog is in a way a time line of his ideas and their evolution. I realised that I should do something similar but never thought anyone would care. Recently I realised that I care and that I want to do it for myself to look back to.",
      "I have already progressed with tracking my life by writing into a diary daily. Not sure why I decided to do it at the age of 24, but at the beginning of this year there was a time where I really needed to get my thoughts out. This little experiment with a diary had been more or less successful so I decided to take it a step further.",
      "It's the ideal time to make some conclusions about Q1 and think about what I would want Q2 to bring on. But I think we should start with a bit of a backstory, since this is my first post.",
      "Since starting my job in October of 2024, I felt completely exhausted from 5 years at university, majorly sacrificing my social life for the sake of grades. That period of exhaustion and feeling of \"I have done nothing valuable to a society so far\" was with me for a year. Only earlier this year, after coming back from a family holiday, I had a sudden urge to try something new. I did not force myself, but I felt like it was about the right time for me to start something new. And it was actually related to something someone who used to be very close to me told me - you have low self esteem.",
      "I do not think I do, or at least didn't, but I decided that I want to change the way people perceive me and combat my severe IBS which exacerbates under any sort of stress. I decided that I am going to be more public by posting more on Instagram, have Twitter to post some of the stuff I like related to tech, be more explicit with my career history on LinkedIn, go to events more and meet more people. That was the new \"something\" I started doing. But this experience has brought so much more into my life than just \"fixing\" my self esteem. I have started analysing how I behave in front of people I haven't met before, learnt how to initiate conversations with people I don't know at all, learnt how to move on after saying something awkward/embarrassing. This has made me realise that perhaps some of the things I say could be taken as unconfident.",
      "But the best thing is the fact that I was able to come out of the student/research bubble I have found myself in for so long and be able to learn and see what other people are doing in VC, in tech, in the general entrepreneurial side of tech. It's such an invaluable experience to be on the intersection of all these areas and be able to go to events for free and learn from experiences of very senior leaders.",
      "I have constantly complained (internally in my head mostly) that I dislike living in London because the city is big and I have no family and help here. This chain of experiences has made me realise why I am here and what I should get out of this location for the benefit of myself. Yes, I am still sad that I have no family here. But I know that everything I am doing now is also for the benefit of me, my family and perhaps my future family.",
      "I have found people who are more like minded to me, people who are as ambitious and as interested in things that are mostly thought to be impossible, like AI scientists and lab automation. And I am happy because that already makes me feel less alone and more part of something bigger that's waiting for us in the future.",
      "So my little project of putting myself out there and building confidence turned into a character building story of Q1 2026, and I am grateful things turned out that way.",
      "I just hope I continue at the pace I am continuing to go through life right now, I hope for more meaningful interactions with people and meeting more like minded individuals. I hope that I can try doing more side projects with OpenClaw (about that in the next post) and actually speed up the building process, since I find myself often having a lot of ideas and little time or energy to execute. I am manifesting the best of luck for myself with the Encode and AI4Health applications - two big programs I would like to be involved in but are extremely competitive. But then I can confidently say I did my best if I get rejected and we can just move on to our next goal.",
      "Yes, I would like to be able to move on from things quicker, and stop emotionally lingering on something I cannot change. This is also related to having high expectations for things and those expectations not meeting reality. Have low expectations! Hopefully I can change that this Q2.",
      "And finally… I want to start skateboarding again! I hope to sign up to a few lessons before I take it off on my own.",
      "This is my first, non tech post, which is hopefully a nice introduction to my blog. Hopefully I can look back at it in years' time and say to myself: \"you made it Stacy!\".",
    ],
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
    details: '2017-2019',
  },
];
