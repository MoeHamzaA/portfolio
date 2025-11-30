import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  snotes,
  calendar,
  analytic,
  paper_airplane,
  smart_notes,
  asinc,
  trashit,
  otu,
  python,
  java,
  aws,
  azure,
  django,
  rest,
  scikit,
  tensorflow,
  flask,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    iconType: "github",
    url: "https://github.com/MoeHamzaA",
  },
  {
    name: "LinkedIn",
    iconType: "linkedin",
    url: "https://www.linkedin.com/in/hamza-ajmal-166a8228b/",
  },
];

const services = [
  {
    title: "AI/ML Backend Developer",
    icon: web,
  },
  {
    title: "Cloud & Backend Developer",
    icon: mobile,
  },
  {
    title: "AI Solutions Developer",
    icon: backend,
  },
  {
    title: "Backend & Cloud Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: python,
  },
  {
    name: "React JS",
    icon: java,
  },
  {
    name: "Redux Toolkit",
    icon: aws,
  },
  {
    name: "Tailwind CSS",
    icon: azure,
  },
  {
    name: "Node JS",
    icon: django,
  },
  {
    name: "MongoDB",
    icon: flask,
  },
  {
    name: "Three JS",
    icon: rest,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: scikit,
  },
  {
    name: "docker",
    icon: tensorflow,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "AthenaGuard",
    icon: "/company_logo/athenaguards_logo.jpeg",
    iconBg: "#383E56",
    date: "May 2025 - Present",
    points: [
      "Built and maintained CI/CD pipelines using GitHub Actions to automate builds, run tests, catch syntax errors, and streamline deployment workflows.",
      "Developed automated workflows to update and audit project dependencies weekly (every Monday at 9 AM), improving system stability and reducing security vulnerabilities.",
      "Utilized Docker to containerize applications, ensuring consistent environments across development and production, and making the stack cloud-deployment ready.",
      "Worked with Node.js, Python, and REST APIs, integrating secure coding practices (OWASP Top 10) and collaborating with cross-functional teams to support scalable infrastructure.",
    ],
  },
  {
    title: "Cloud Engineer",
    company_name: "Vosyn",
    icon: "/company_logo/vosyn_logo.jpeg",
    iconBg: "#E6DEDD",
    date: "April 2025 - June 2025",
    points: [
      "Collaborated with the cloud engineering team to design, deploy, and manage scalable infrastructure on Google Cloud Platform (GCP).",
      "Optimized cloud environments for performance, security, and cost-efficiency using Terraform and Kubernetes.",
      "Contributed to internal documentation for cloud architecture and operational procedures during IPO preparation.",
      "Researched and applied emerging trends in Cloud, DevOps, and MLOps to support AI-driven infrastructure solutions.",
      "Engaged directly with senior leadership and the advisory board on innovative, cloud-native projects in a fast-paced startup environment.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Wouessi Digital",
    icon: "/company_logo/wouessi_logo.jpeg",
    iconBg: "#383E56",
    date: "January 2025 - March 2025",
    points: [
      "Collaborated in a cross-functional team to develop a full-stack Employee Management System (EMS), streamlining HR operations such as onboarding, payroll, timesheets, and leave tracking.",
      "Built and integrated core features like employee CRUD, onboarding workflows, and real-time leave and timesheet modules using Node.js and MongoDB.",
      "Contributed to UI/UX design with Figma and React, delivering responsive, user-friendly interfaces.",
      "Participated in testing, deployment through AWS, and Git version control, ensuring successful MVP delivery.",
    ],
  },
  {
    title: "Cloud Engineer",
    company_name: "Santek Micro Solutions",
    icon: "/company_logo/santek_micro_solutions_inc_logo.jpeg",
    iconBg: "#E6DEDD",
    date: "January 2024 - December 2024",
    points: [
      "Implemented CI/CD to automate the deployment of cloud security policies including IAM roles, security groups, and WAF rules complying with ISO and NIST standards.",
      "Developed a custom AI-powered chatbot for the company website using NLP capable of scanning and modifying resumes based on user requests.",
      "Utilized machine learning models to generate personalized emails and store them in a cloud database.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Achieved a GPA of 3.8 or higher in my first year at Ontario Tech University, earning a spot on the President's List.",
    name: "Ontario Tech U",
    designation: "Fall 2023",
    company: "",
    image: otu,
  },
  {
    testimonial:
      "Secured 2nd place in Ontario Tech's inaugural HackHive hackathon, demonstrating exceptional problem-solving skills and innovative thinking in my first-ever hackathon experience.",
    name: "HackHive",
    designation: "2nd Place",
    company: "2024",
    image: otu,
  },
  {
    testimonial:
      "Achieved 3rd place in Ontario Tech's second annual HackHive hackathon, showcasing consistent excellence and continued growth in competitive programming and project development.",
    name: "HackHive",
    designation: "3rd Place",
    company: "2025",
    image: otu,
  },
];

const projects = [
  {
    name: "Elva – Alzheimer's Aid App",
    description:
      "🥉 3rd Place Winner at HackHive 2025. AI-powered web application that assists individuals with Alzheimer's and dementia by recognizing familiar faces and identifying everyday objects using computer vision.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "AI/ML",
        color: "pink-text-gradient",
      },
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "Computer Vision",
        color: "green-text-gradient",
      },
    ],
    image: smart_notes, // Placeholder - will need to add elva image
    source_code_link: "https://github.com/MoeHamzaA/Elva", // Placeholder - user will provide
    live_demo_link: "", // Placeholder - user will provide
    featured: true, // Top 3
    award: "🥉 3rd Place - HackHive 2025",
  },
  {
    name: "CloudPulse-AI – Cloud & Drift Monitoring",
    description:
      "Go-based observability system monitoring AI model health and system metrics with 92% drift detection accuracy. Features automated CI/CD, infrastructure-as-code, and AWS CloudWatch integration.",
    tags: [
      {
        name: "Go",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
      {
        name: "Terraform",
        color: "blue-text-gradient",
      },
      {
        name: "MLOps",
        color: "green-text-gradient",
      },
    ],
    image: backend, // Placeholder - will need cloud monitoring image
    source_code_link: "https://github.com/MoeHamzaA/CloudPulse-AI", // Placeholder - user will provide
    live_demo_link: "", // Placeholder - user will provide
    featured: true, // Top 3
  },
  {
    name: "Smart Notes",
    description:
      "AI-powered study tool that converts lecture videos into organized, searchable notes using multithreaded transcription. Features flashcard generation and AI-powered chat support with Gemini AI.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "Speech Recognition",
        color: "pink-text-gradient",
      },
      {
        name: "FFmpeg",
        color: "blue-text-gradient",
      },
    ],
    image: smart_notes,
    source_code_link: "https://github.com/MoeHamzaA/Smart-Notes",
    live_demo_link: "", // Placeholder - user will provide
    featured: true, // Top 3
  },
  {
    name: "Trash It",
    description:
      "🏆 HackHive 2024 Winning Project. Full-stack containerized CV app on Azure that analyzes photos to identify recyclable objects using OpenCV and Azure Computer Vision APIs.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Azure",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
    ],
    image: trashit,
    source_code_link: "https://github.com/MoeHamzaA/Trash-It", // Placeholder - user will provide
    live_demo_link: "https://trash-it.azurewebsites.net/",
    featured: false,
    award: "🏆 HackHive 2024 Winner",
  },
  {
    name: "Cloud Monitoring - Anomaly Detection",
    description:
      "Scalable ML-powered cloud monitoring solution detecting anomalies in real-time resource usage using Isolation Forest algorithm. Features AWS SageMaker, Lambda, and automated SNS alerts.",
    tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
      {
        name: "SageMaker",
        color: "blue-text-gradient",
      },
      {
        name: "Lambda",
        color: "green-text-gradient",
      },
    ],
    image: backend, // Placeholder
    source_code_link: "https://github.com/MoeHamzaA/Cloud-Monitoring-Anomaly-Detection",
    live_demo_link: "", // Placeholder
    featured: false,
  },
  {
    name: "TxtAgenda – Daily Summarizer",
    description:
      "Automated Python script that aggregates daily schedule, tasks, and weather from multiple APIs (Cronofy, Notion, OpenWeather) and delivers formatted summaries via SMS using Twilio.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "APIs",
        color: "green-text-gradient",
      },
      {
        name: "Automation",
        color: "pink-text-gradient",
      },
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
    ],
    image: asinc,
    source_code_link: "https://github.com/MoeHamzaA/Asinc", // Same as TxtAgenda
    live_demo_link: "", // Placeholder
    featured: false,
  },
  {
    name: "Spotify Data Analysis",
    description:
      "Flask-based web application integrated with Spotify Web API for comprehensive music data analysis. Features artist search, playlist comparison, and similarity calculations.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "Spotify API",
        color: "green-text-gradient",
      },
      {
        name: "Data Analysis",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: web, // Placeholder
    source_code_link: "https://github.com/MoeHamzaA/Spotify-Analysis", // Placeholder
    live_demo_link: "", // Placeholder
    featured: false,
  },
];

export { services, technologies, experiences, testimonials, projects };
