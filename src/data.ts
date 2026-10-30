// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Sanjana Nimesh',
  role: 'Software Engineer',
  roles: ['Full-Stack Engineer', 'Mobile Developer', 'Integration Engineer', 'DevOps Enthusiast'],
  tagline:
    'I build production systems end to end: web platforms, mobile apps, POS and ERP back offices, enterprise workflows and the pipelines that ship them.',
  location: 'Colombo, Sri Lanka',
  email: 'sanjana.nim2001@gmail.com',
  phone: '+94 71 148 4037',
  whatsappNumber: '+94 76 989 9882',
  whatsapp: 'https://wa.me/94769899882',
  github: 'https://github.com/IT22102546',
  linkedin: 'https://www.linkedin.com/in/sanjana-nimesh-a4b5a8252/',
  photo: '/assets/MyDP.jpg',
};

export const stats = [
  { value: '2+', label: 'Years building production software' },
  { value: '50+', label: 'Projects shipped and on GitHub' },
  { value: '4', label: 'Companies and freelance clients' },
];

export const about = [
  'I enjoy turning messy real-world problems into clear, reliable software. My work spans NestJS and Node.js backends, React and Next.js frontends, React Native apps, and the Docker, Kubernetes and CI/CD pipelines that keep them running.',
  'Today I work at Emojot, configuring and extending its CX platform for banks, telcos, hospitals and service companies, and building the integrations, kiosk apps and internal AI tools around it. On the side, I design and deliver complete business systems for freelance clients.',
  'I work test-first: prove the idea with a small live slice, then scale it. And I document everything I build, so the next person can pick it up.',
];

export type Job = {
  company: string;
  role: string;
  type: string;
  period: string;
  current?: boolean;
  path?: string;
  points: string[];
  tags: string[];
};

export const experience: Job[] = [
  {
    company: 'Emojot',
    role: 'Solution Engineer',
    type: 'Full-time',
    period: 'May 2026 – Present',
    current: true,
    points: [
      'Configure the Emojot CX and workflow platform for enterprise clients across banking, telco, healthcare, retail and hospitality.',
      'Built the Dipra Maintenance Management System: six linked workflows for customers, suppliers, locations, products, installed machines and AMC/warranty agreements, with auto-generated service schedules and a MongoDB trigger that keeps master data in sync.',
      'Design JSON workflows with status transitions, role-based fields, auto-numbering and service scheduling for clients across industries.',
      'Write complex event processing rules (XML engagement rules) for complaint escalation, SLA alerts, ORM and appointment-banking flows, plus custom skins and CX portals.',
      'Write Node.js MongoDB Atlas triggers on change streams: master-data sync across linked workflows, and AI review triage where Gemini scores sentiment and negative reviews auto-create recovery cases.',
      'Work on Emojot web apps with Angular, including the visitor management system.',
      'Built a bank branch kiosk Android app (Expo, React Native) with a native kiosk-mode module, PIN-protected admin and idle-timeout reset.',
      'Built a lead capture and booking popup (Wix + Vercel + Google Apps Script) with round-robin assignment, Calendar availability and Meet links.',
      'Built two internal bulk upload tools used by the team: Admin Hierarchy upload (workflow JSON → Excel template → validated upload with a pre-write safety check) and Comm-Center Users upload (create missing users and add them to lists).',
      'Built an internal Google Chat connector for ChatGPT: an MCP server on Apps Script behind a Vercel relay, with 7 tools across 350+ spaces.',
    ],
    tags: ['Workflows', 'CEP Rules', 'Node.js', 'MongoDB Triggers', 'Angular', 'React Native', 'Apps Script', 'MCP'],
  },
  {
    company: 'Freelance',
    role: 'Full-Stack Developer',
    type: 'Freelance',
    period: 'Sep 2026 – Present',
    current: true,
    points: [
      'Design, build and deploy complete business systems for private clients, from requirements to production hosting and staff guides.',
      'Dimara Medical Services: multi-centre platform with channeling, pharmacy POS, accounts and payroll on one NestJS API.',
      'Bar Shop POS: point-of-sale and back office for liquor shops with branches, stock, suppliers and daily books.',
    ],
    tags: ['NestJS', 'Next.js', 'Prisma', 'PostgreSQL', 'Docker', 'PM2'],
  },
  {
    company: 'Karalliyadda One (Pvt) Ltd',
    role: 'Software Engineer',
    type: 'Part-time',
    period: 'Sep 2025 – Apr 2026',
    points: [
      'Designed and built a cloud POS system and business web apps with NestJS, Prisma, PostgreSQL and Next.js, including the JL Racing platform.',
      'Integrated Sanity headless CMS for flexible client content management.',
      'Deployed and maintained apps on Vercel and Hostinger, tuned for uptime and performance.',
    ],
    tags: ['NestJS', 'Next.js', 'Sanity', 'Turborepo', 'Vercel'],
  },
  {
    company: 'FaITe (Pvt) Ltd',
    role: 'Associate Software Engineer',
    type: 'Full-time',
    period: 'May 2024 – Apr 2026',
    path: 'Intern → Trainee Software Engineer → Associate Software Engineer',
    points: [
      'Architected and maintained a unified monorepo for web, desktop and mobile apps with shared code and synchronized releases.',
      'Built and deployed full-stack apps with NestJS, Next.js, Docker and Kubernetes, plus React Native mobile workflows.',
      'Led DevOps: automated CI/CD pipelines and managed production servers on Hostinger.',
      'Best Employee of the Month, October 2025.',
    ],
    tags: ['React Native', 'NestJS', 'Docker', 'Kubernetes', 'CI/CD'],
  },
];

export type Project = {
  title: string;
  kind: string;
  description: string;
  highlights?: string[];
  image?: string;
  tags: string[];
  live?: string;
  code?: string;
  accent: string; // tailwind gradient classes used when there is no image
  wide?: boolean; // spans two columns in the Emojot grid
};

export const featured: Project[] = [
  {
    title: 'Dimara Medical Services',
    kind: 'Freelance · Healthcare platform',
    description:
      'A multi-centre medical platform: patient website plus Channel & Centre, Pharmacy POS, Accounts and a staff portal, all on one NestJS API.',
    highlights: [
      'Transaction-safe channeling queue with a live waiting-room TV',
      'FEFO pharmacy stock, GRN, supplier accounts and Z reports',
      'HR and payroll with EPF/ETF/APIT, SMS reminders, audit log',
    ],
    image: '/assets/dimara.png',
    tags: ['NestJS', 'Next.js', 'Prisma', 'PostgreSQL', 'Turborepo', 'SSE'],
    live: 'https://dimara.kodearcs.tech',
    accent: 'from-emerald-500/30 to-cyan-500/20',
  },
  {
    title: 'JL Racing',
    kind: 'Karalliyadda One · Sales, POS & accounts',
    description:
      'Motorbike sales platform in a 7-app monorepo: POS, admin, landing site, local and foreign customer sites, and a CMS backend.',
    highlights: [
      'Inventory, leasing companies, installment plans and pre-orders',
      'Export vehicles and a full accounts module',
      '300+ commits across NestJS, Prisma and Next.js apps',
    ],
    image: '/assets/jlracing.jpg',
    tags: ['NestJS', 'Next.js', 'Prisma', 'PostgreSQL', 'Turborepo', 'Docker'],
    accent: 'from-red-500/30 to-amber-500/20',
  },
  {
    title: 'Bar Shop POS',
    kind: 'Freelance · Retail POS & back office',
    description:
      'POS and back office for Sri Lankan liquor shops that enforces the legal per-bill hard-liquor limit and logs every stock and money movement.',
    highlights: [
      'Loyalty wallet, gift vouchers, returns and discounts',
      'Purchase orders, GRN, branch transfers with gate passes',
      'Day End Z reports, cash book and supplier accounts',
    ],
    image: '/assets/barpos.png',
    tags: ['Next.js', 'Express', 'Prisma', 'PostgreSQL', 'Nodemailer'],
    live: 'https://pos.kodearcs.tech',
    accent: 'from-amber-500/30 to-rose-500/20',
  },
  {
    title: 'ArmiGo',
    kind: 'Final year research · SLIIT',
    description:
      'An IoT-enabled VR rehabilitation system for children with hemiplegia, turning therapy into games with real-time progress monitoring.',
    highlights: [
      'Wearable sensors streaming motion data',
      'LSTM-based motion analysis',
      'Unity therapy games with AI voice feedback',
    ],
    tags: ['IoT', 'LSTM', 'TensorFlow', 'Unity', 'VR', 'Python'],
    code: 'https://github.com/IT22102546/ArmiGo-Research',
    accent: 'from-violet-500/40 to-fuchsia-500/20',
  },
];

export const emojotWork: Project[] = [
  {
    title: 'Dipra Maintenance Management System',
    kind: 'Emojot · Dipra · Workflows + triggers',
    description:
      'End-to-end maintenance platform for Dipra on Emojot: six linked workflows for customers, suppliers, locations, product catalog, installed machines and AMC/warranty agreements. Agreements generate 1–12 service schedules with status and completion dates, payment tracking and approval states, and a Node.js MongoDB Atlas trigger syncs master data across every linked workflow.',
    tags: ['Emojot Workflows', 'JSON', 'Node.js', 'MongoDB Atlas Triggers', 'Automation'],
    accent: '',
    wide: true,
  },
  {
    title: 'Admin Hierarchy Bulk Upload',
    kind: 'Emojot · Internal tool',
    description:
      'Web tool that reads a workflow JSON, builds the Excel template, validates every row against the workflow and uploads the admin hierarchy. A read-only safety check stops the run before any write if a row would duplicate or touch another hierarchy.',
    tags: ['JavaScript', 'SheetJS', 'REST API', 'Vercel'],
    accent: '',
  },
  {
    title: 'Comm-Center Users Bulk Upload',
    kind: 'Emojot · Internal tool',
    description:
      'Builds a template from the company’s profile fields, creates missing users from a filled Excel sheet and adds everyone to the chosen Comm-Center lists, never changing existing users.',
    tags: ['JavaScript', 'SheetJS', 'REST API', 'Vercel'],
    accent: '',
  },
  {
    title: 'AI Review Triage Trigger',
    kind: 'Emojot · MongoDB trigger',
    description:
      'Node.js Atlas trigger on new online reviews: Gemini analyses sentiment, and negative or 1–2 star reviews automatically open a linked recovery case, with field mapping read from config.',
    tags: ['Node.js', 'MongoDB Atlas', 'Change Streams', 'Gemini'],
    accent: '',
  },
  {
    title: 'Google Chat → ChatGPT Connector',
    kind: 'Emojot · Internal AI tool',
    description:
      'Read-only MCP server on Google Apps Script with a Vercel relay. Indexes 11,000+ messages over 90 days, synced every 5 minutes.',
    tags: ['MCP', 'Apps Script', 'Vercel', 'Google Chat API'],
    accent: '',
  },
  {
    title: 'Bank Branch Kiosk App',
    kind: 'Emojot · Android',
    description:
      'Expo SDK 58 kiosk app that shows the Emojot feedback sensor, opens the bank’s product site in a controlled browser and resets after an idle countdown. One APK for every branch via a remote registry, with a native kiosk-mode module and PIN-protected admin.',
    tags: ['Expo', 'React Native', 'TypeScript', 'EAS', 'Kotlin module'],
    accent: '',
    wide: true,
  },
  {
    title: 'Register & Booking Popup',
    kind: 'Emojot · Lead capture',
    description:
      'Wix landing page popup with a Vercel-hosted script and Apps Script backend: live Calendar availability, round-robin assignment, Meet links and email alerts.',
    tags: ['Wix', 'Vercel', 'Apps Script', 'Google Calendar'],
    accent: '',
  },
];

export const moreProjects: Project[] = [
  {
    title: 'aMusic-Bible',
    kind: 'FaITe · Web',
    description: 'Bible songs platform with a bilingual AI chatbot, voice-assisted reading, lyric search and Stripe payments.',
    image: '/assets/music.png',
    tags: ['React', 'Node.js', 'MongoDB', 'TensorFlow', 'Flask', 'Stripe'],
    code: 'https://github.com/IT22102546/BibHost',
    live: 'https://amusicbible.com',
    accent: '',
  },
  {
    title: 'Viwahaa Matrimony',
    kind: 'FaITe · Web + Mobile',
    description: 'Matchmaking platform with advanced filters, packages, messaging and admin dashboards, on web and Play Store.',
    image: '/assets/VivM.jpg',
    tags: ['React', 'React Native', 'Node.js', 'SQL', 'Socket.io'],
    live: 'https://viwahaa.com',
    accent: '',
  },
  {
    title: 'LearnApp',
    kind: 'FaITe · Mobile',
    description: 'Learning app with quizzes, progress tracking, face recognition in exams and video conferencing.',
    image: '/assets/LearnApp.jpg',
    tags: ['React Native', 'NestJS', 'MongoDB', 'WebRTC'],
    live: 'https://learnapp.lk',
    accent: '',
  },
  {
    title: 'Feraix Global',
    kind: 'FaITe · Web',
    description: 'Company site with service listings, testimonials, blog and an admin dashboard with charts.',
    image: '/assets/Feraix.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    code: 'https://github.com/IT22102546/FeraixHost',
    live: 'https://feraix.com',
    accent: '',
  },
  {
    title: 'Aloy Restaurant',
    kind: 'Karalliyadda One · Web',
    description: 'Elegant restaurant site with menu showcase, gallery and reservations, managed through Sanity CMS.',
    image: '/assets/aloy.png',
    tags: ['Next.js', 'TypeScript', 'Sanity', 'Vercel'],
    code: 'https://github.com/IT22102546/Alloy',
    live: 'https://aloyrestaurant.com',
    accent: '',
  },
  {
    title: 'OB Taste',
    kind: 'Web + Mobile',
    description: 'Cake ordering and delivery with user, admin and rider panels, Stripe payments, Docker and Kubernetes.',
    image: '/assets/ob.jpg',
    tags: ['React', 'React Native', 'Node.js', 'Stripe', 'Kubernetes'],
    code: 'https://github.com/IT22102546/DS-Assignment',
    live: 'https://obtaste.com/',
    accent: '',
  },
  {
    title: 'BattiAds',
    kind: 'FaITe · Mobile',
    description: 'Classifieds app with OTP sign-in, ad posting, real-time chat and push notifications.',
    image: '/assets/batti.jpg',
    tags: ['React Native', 'Expo', 'Socket.io', 'Twilio'],
    code: 'https://github.com/FAITE-TECH/Batti-Adds-MobileApp',
    accent: '',
  },
  {
    title: 'Maternity Mate',
    kind: 'Mobile',
    description: 'Pregnancy companion with due date calculator, contraction timer, reminders and translated resources.',
    image: '/assets/mat.jpg',
    tags: ['React Native', 'Firebase', 'Translate API'],
    code: 'https://github.com/IT22102546/Maternity-Care',
    accent: '',
  },
  {
    title: 'Eco Waste',
    kind: 'University · Web',
    description: 'QR-based waste sorting with real-time collection tracking and an analytics dashboard.',
    image: '/assets/eco.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Google API'],
    code: 'https://github.com/IT22102546/CSSE_Project',
    accent: '',
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Kotlin', 'SQL'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Angular', 'Vite', 'Redux', 'Tailwind CSS', 'HTML/CSS'] },
  { group: 'Backend', items: ['NestJS', 'Node.js', 'Express', 'Flask', 'REST APIs', 'Prisma'] },
  { group: 'Mobile', items: ['React Native', 'Expo', 'EAS Build', 'Native Android modules'] },
  { group: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MongoDB Atlas Triggers', 'Supabase', 'Firebase', 'SQLite'] },
  {
    group: 'DevOps & Cloud',
    items: ['Docker', 'Kubernetes', 'CI/CD pipelines', 'GitHub', 'Turborepo / pnpm', 'PM2', 'Vercel', 'Hostinger', 'AWS', 'Azure', 'Cloudflare Workers'],
  },
  {
    group: 'Platforms & Integrations',
    items: ['Emojot CX platform', 'CEP / XML rules', 'Google Apps Script', 'Google Calendar, Meet & Chat APIs', 'Wix custom code', 'Sanity CMS', 'Stripe', 'Twilio', 'Webhooks'],
  },
  { group: 'AI', items: ['OpenAI APIs', 'Google Gemini', 'Claude Code', 'MCP servers', 'ChatGPT plugins', 'TensorFlow', 'LSTM models'] },
  { group: 'Testing & Tools', items: ['Postman', 'Selenium', 'Git', 'Jira', 'ClickUp', 'Agile / Scrum'] },
];

export const education = [
  {
    title: 'BSc (Hons) in Information Technology, Software Engineering',
    place: 'Sri Lanka Institute of Information Technology (SLIIT)',
    period: '2022 – 2026',
  },
  { title: 'G.C.E. Advanced Level, Physical Science', place: 'Sri Lanka', period: '2021' },
];

export const recognition = [
  { title: 'Best Employee of the Month', place: 'FaITe', period: 'Oct 2025' },
  {
    title: 'Volunteer website developer',
    place: 'We Help Sri Lanka',
    period: 'Volunteer',
    link: 'https://github.com/IT22102546/We-Help-Sri-Lanka---Web',
  },
];
