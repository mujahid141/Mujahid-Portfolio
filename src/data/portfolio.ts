
/**
 * Portfolio content for Mujahid Anwar
 *
 * Edit this file to update the website content.
 */

export type Level = 1 | 2 | 3;
export type Skill = { name: string; level: Level };
export type SkillGroup = {
  title: string;
  description: string;
  skills: Skill[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  year: string;
  role: string;
  featured?: boolean;
  image?: string;
  cover: {
    bg: string;
    fg: string;
    variant: 0 | 1 | 2 | 3 | 4;
  };
  problem: string;
  built: string[];
  outcome: string;
  stack: string[];
  links: {
    live?: string;
    repo?: string;
  };
};

export type Interest = {
  title: string;
  note: string;
  bg: string;
  fg: string;
};

export const site = {
  name: "Mujahid Anwar",

  role: "Full-stack & AI Developer",

  description:
    "Portfolio of Mujahid Anwar, a full-stack and AI developer building web applications, AI-powered products, and intelligent systems.",

  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mujahidportfolio-mu.vercel.app/",

  email: "mujahidanwar141@gmail.com",

  location: "Rawalpindi, Pakistan",

  availability: "Open to freelance projects and full-time opportunities",

  photo: "/Mujahid.jpg",

  lead:
    "I build full-stack web applications and AI-powered systems that solve practical problems. My work combines Python, Django, React, Next.js, computer vision, machine learning, and IoT.",

  about: [
    "I'm a Software Engineering graduate from SZABIST Islamabad with hands-on experience building web applications, AI systems, and client projects. I work across the stack, from backend APIs and databases to responsive frontend interfaces and AI model integration.",

    "My interests are at the intersection of software engineering and artificial intelligence. I've worked on computer vision, recommendation systems, virtual try-on, sign-language recognition, and smart agriculture systems.",

    "I'm particularly interested in using AI for practical problems in agriculture, automation, robotics, and intelligent systems. My long-term focus is on AI, computer vision, robotics, and autonomous systems.",
  ],

  cv: {
    file: "/Mujahid Resume.pdf",
    downloadName: "Mujahid-Anwar-CV.pdf",
    updated: "September 2026",
    pages: "2 pages",
  },

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/mujahid141",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mujahidanwar",
    },
    {
      label: "Fiverr",
      href: "https://www.fiverr.com/users/mujahid2180/",
    },
    {
      label: "Upwork",
      href: "https://www.upwork.com/freelancers/~01b7b141a06edacbca?mp_source=share",
    },
  ],
};

export const navItems = [
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "interests", label: "Interests" },
  { id: "contact", label: "Contact" },
];

export const levelLabels: Record<Level, string> = {
  3: "Daily use",
  2: "Comfortable",
  1: "Learning",
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description:
      "Modern interfaces and responsive applications built for real users.",
    skills: [
      { name: "React", level: 3 },
      { name: "Next.js", level: 3 },
      { name: "TypeScript", level: 3 },
      { name: "JavaScript", level: 3 },
      { name: "HTML & CSS", level: 3 },
      { name: "Tailwind CSS", level: 2 },
      { name: "React Native", level: 2 },
    ],
  },

  {
    title: "Backend",
    description:
      "APIs, authentication, databases, and business logic for production applications.",
    skills: [
      { name: "Python", level: 3 },
      { name: "Django", level: 3 },
      { name: "Django REST Framework", level: 3 },
      { name: "REST APIs", level: 3 },
      { name: "MySQL", level: 3 },
      { name: "PostgreSQL", level: 2 },
      { name: "Node.js", level: 2 },
    ],
  },

  {
    title: "AI & Machine Learning",
    description:
      "Computer vision, deep learning, NLP, and AI-powered application development.",
    skills: [
      { name: "Python", level: 3 },
      { name: "TensorFlow", level: 3 },
      { name: "PyTorch", level: 2 },
      { name: "OpenCV", level: 3 },
      { name: "YOLOv8", level: 2 },
      { name: "Computer Vision", level: 3 },
      { name: "Deep Learning", level: 2 },
      { name: "Transformers", level: 2 },
    ],
  },

  {
    title: "AI Applications",
    description:
      "Turning machine-learning models into usable products and workflows.",
    skills: [
      { name: "Hugging Face", level: 2 },
      { name: "LangChain", level: 2 },
      { name: "Generative AI", level: 2 },
      { name: "Model Deployment", level: 2 },
      { name: "Image Processing", level: 3 },
      { name: "Recommendation Systems", level: 2 },
    ],
  },

  {
    title: "IoT & Edge AI",
    description:
      "Connecting sensors, edge devices, and AI models for intelligent systems.",
    skills: [
      { name: "Raspberry Pi", level: 2 },
      { name: "MQTT", level: 2 },
      { name: "IoT", level: 2 },
      { name: "Edge Computing", level: 2 },
      { name: "TensorFlow Lite", level: 2 },
      { name: "Sensor Networks", level: 2 },
    ],
  },

  {
    title: "Tools & Cloud",
    description:
      "Development workflows, deployment, version control, and cloud services.",
    skills: [
      { name: "Git & GitHub", level: 3 },
      { name: "AWS", level: 2 },
      { name: "Docker", level: 1 },
      { name: "Google Colab", level: 3 },
      { name: "Figma", level: 2 },
      { name: "Linux", level: 2 },
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "farm-botics",

    title: "FarmBotics",

    summary:
      "An AI-powered agriculture system exploring smartphone-based crop and pest analysis to help farmers identify agricultural problems earlier.",

    category: "AI & Computer Vision",

    year: "2025–2026",

    role: "Research, AI development & full-stack development",
    image:"/farmbotics.jpeg",
    featured: true,

    cover: {
      bg: "#3346F0",
      fg: "#FFC233",
      variant: 0,
    },

    problem:
      "Farmers can lose significant portions of their crops when plant diseases and pests are not identified early. FarmBotics explores how computer vision and AI can make agricultural analysis more accessible through a smartphone.",

    built: [
      "Computer-vision pipeline for identifying crop diseases and agricultural pests",
      "Deep-learning experimentation using ResNet50",
      "Dataset covering multiple crops and pest categories",
      "Image preprocessing and model training using Python and TensorFlow",
      "Exploration of YOLO-based object detection for agricultural applications",
      "Research direction combining AI, agriculture, robotics, and autonomous drones",
    ],

    outcome:
      "Developed as a research and engineering project focused on applying AI and computer vision to practical agricultural problems, with a longer-term direction toward autonomous agricultural drones and intelligent farming systems.",

    stack: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "ResNet50",
      "YOLOv8",
      "Computer Vision",
    ],

    links: {
      repo: "https://github.com/mujahid141",
    },
  },

  {
    slug: "fezaria",

    title: "Fezaria",

    summary:
      "An AI-powered fashion platform combining an online store with virtual try-on, AI makeup, and personalized outfit recommendations.",

    category: "AI E-commerce",

    year: "2026",
    image:"/fezaria.png",
    role: "AI & full-stack development",

    featured: true,

    cover: {
      bg: "#7C3AED",
      fg: "#FFFFFF",
      variant: 1,
    },

    problem:
      "Online fashion shoppers cannot physically try products before purchasing, while discovering suitable outfits often requires manually searching through large catalogs.",

    built: [
      "Django REST backend for the e-commerce platform",
      "Next.js and TypeScript frontend",
      "AI virtual try-on pipeline using IDM-VTON",
      "Image masking and preprocessing pipeline",
      "AI makeup functionality using MediaPipe",
      "T5-based outfit recommendation system",
      "Product and fashion data processing",
      "FezPay payment integration",
      "Deployment-oriented architecture separating frontend and backend services",
    ],

    outcome:
      "Built an integrated AI fashion platform combining conventional e-commerce functionality with computer-vision and recommendation features.",

    stack: [
      "Django",
      "Django REST Framework",
      "Next.js",
      "TypeScript",
      "Python",
      "IDM-VTON",
      "MediaPipe",
      "T5",
      "MySQL",
      "AWS",
    ],

    links: {
      repo: "https://github.com/mujahid141",
    },
  },

  {
    slug: "weshare",

    title: "WeeShare",

    summary:
      "A modern social-sharing platform built with Next.js, authentication, payments, and AI-assisted content creation workflows.",

    category: "Full-stack Web Application",

    year: "2026",
    image:"/weeshare.jpg",
    role: "Full-stack development",

    featured: true,

    cover: {
      bg: "#14213D",
      fg: "#8E9BFF",
      variant: 2,
    },

    problem:
      "Modern content platforms require authentication, payments, content management, and increasingly AI-assisted creation tools within a single product experience.",

    built: [
      "Next.js application architecture",
      "Authentication system",
      "Payment functionality",
      "AI writer workflow",
      "AI-assisted post composer",
      "Reusable frontend components",
      "API integration and application state management",
    ],

    outcome:
      "Developed a full-stack product foundation with authentication, payments, and AI content workflows ready to support further product development.",

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "AI APIs",
      "Authentication",
      "Payments",
    ],

    links: {
      repo: "https://github.com/mujahid141",
    },
  },

  {
    slug: "smart-agriculture-iot",

    title: "Smart Agriculture IoT System",

    summary:
      "An IoT and edge-AI project exploring sensor networks, Raspberry Pi, and machine learning for intelligent agricultural monitoring.",

    category: "IoT & Edge AI",
    
    year: "2026",

    role: "IoT & AI development",
    image: "/smart.jpeg",
    cover: {
      bg: "#0B6E70",
      fg: "#FFFFFF",
      variant: 3,
    },

    problem:
      "Agricultural monitoring can require frequent manual observation and decisions based on incomplete information. Connected sensors and edge AI can help collect and process environmental data closer to where it is generated.",

    built: [
      "Raspberry Pi-based IoT architecture",
      "Sensor data collection and processing",
      "MQTT communication between devices and services",
      "Python-based data processing",
      "Exploration of TensorFlow Lite for edge inference",
      "AI and IoT integration for agricultural monitoring",
    ],

    outcome:
      "Created a practical learning and experimentation platform combining IoT, edge computing, and AI for smart agriculture applications.",

    stack: [
      "Raspberry Pi",
      "Python",
      "MQTT",
      "TensorFlow Lite",
      "IoT",
      "Edge Computing",
    ],

    links: {
      repo: "https://github.com/mujahid141",
    },
  },

  {
    slug: "sign-language-recognition",

    title: "Sign Language to Text",

    summary:
      "A computer-vision system that uses hand tracking and deep learning to recognize sign-language sequences and convert them into text.",

    category: "Computer Vision",

    year: "2025",
    image: "/sign.jpeg",
    role: "Machine learning development",

    cover: {
      bg: "#3346F0",
      fg: "#FFFFFF",
      variant: 4,
    },

    problem:
      "Communication between sign-language users and people unfamiliar with sign language can be difficult. Computer vision can provide an interface for recognizing hand gestures and sequences.",

    built: [
      "Real-time hand tracking using MediaPipe",
      "Video frame preprocessing using OpenCV",
      "Sequence-based gesture recognition",
      "CNN feature extraction",
      "LSTM-based temporal modeling",
      "Conversion of recognized gestures into text",
    ],

    outcome:
      "Developed a prototype demonstrating how computer vision and temporal deep learning can be combined for sign-language recognition.",

    stack: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "TensorFlow",
      "CNN",
      "LSTM",
    ],

    links: {
      repo: "https://github.com/mujahid141",
    },
  },

  {
    slug: "outfit-recommendation",

    title: "AI Outfit Recommendation",

    summary:
      "A transformer-based fashion recommendation model trained to generate outfit recommendations from structured fashion data.",

    category: "NLP & Recommendation",

    year: "2026",
    image:"/outfit.jpeg",
    role: "AI development",

    cover: {
      bg: "#FFC233",
      fg: "#14213D",
      variant: 1,
    },

    problem:
      "Fashion catalogs contain many combinations of products, making personalized outfit discovery difficult without recommendation systems.",

    built: [
      "Synthetic fashion recommendation dataset",
      "T5-small transformer architecture",
      "Data preprocessing and prompt construction",
      "Model training and evaluation",
      "Integration into the broader Fezaria AI workflow",
    ],

    outcome:
      "Built and trained a transformer-based recommendation prototype demonstrating how generative language models can be adapted for structured fashion recommendations.",

    stack: [
      "Python",
      "PyTorch",
      "Hugging Face",
      "Transformers",
      "T5-small",
      "NLP",
    ],

    links: {
      repo: "https://github.com/mujahid141",
    },
  },

  {
    slug: "client-web-development",

    title: "Client Web Applications",

    summary:
      "A collection of freelance and client projects covering full-stack applications, REST APIs, dashboards, and custom web solutions.",

    category: "Freelance Development",

    year: "2024–2026",
    image:"/work.png",
    role: "Full-stack developer",

    cover: {
      bg: "#1E293B",
      fg: "#FFFFFF",
      variant: 2,
    },

    problem:
      "Businesses often need custom software rather than generic tools, including web applications, APIs, automation, dashboards, and integrations.",

    built: [
      "Custom Django and Django REST Framework backends",
      "React and Next.js frontend applications",
      "REST API development and integration",
      "Database design and management",
      "Authentication and user management",
      "Web scraping and data processing solutions",
      "AI feature integration into web applications",
      "Client-focused development and delivery",
    ],

    outcome:
      "Delivered multiple freelance software projects through online client platforms, gaining practical experience working from requirements through implementation and delivery.",

    stack: [
      "Python",
      "Django",
      "Django REST Framework",
      "React",
      "Next.js",
      "MySQL",
      "REST APIs",
      "Git",
    ],

    links: {
      repo: "https://github.com/mujahid141",
    },
  },
];

export const interests: Interest[] = [
  {
    title: "Artificial Intelligence",
    note:
      "Exploring computer vision, deep learning, generative AI, and intelligent systems that solve practical problems.",

    bg: "#3346F0",
    fg: "#FFFFFF",
  },

  {
    title: "Robotics & Drones",
    note:
      "Interested in autonomous robots, UAVs, computer vision, edge AI, and using intelligent systems in real-world environments.",

    bg: "#FFC233",
    fg: "#14213D",
  },

  {
    title: "Smart Agriculture",
    note:
      "Exploring how AI, IoT, robotics, and autonomous drones can support farmers and improve agricultural decision-making.",

    bg: "#0B6E70",
    fg: "#FFFFFF",
  },

  {
    title: "Software Engineering",
    note:
      "I enjoy building complete products, from backend architecture and APIs to frontend interfaces and deployment.",

    bg: "#14213D",
    fg: "#FFFFFF",
  },

  {
    title: "Open Source & Learning",
    note:
      "I regularly explore new frameworks, AI models, developer tools, and research papers to expand my engineering skills.",

    bg: "#7C3AED",
    fg: "#FFFFFF",
  },

  {
    title: "Hiking & Running",
    note:
      "Outside development, I enjoy hiking, running, reading, and spending time learning about new ideas.",

    bg: "#E5E7EB",
    fg: "#14213D",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");
}

