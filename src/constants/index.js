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
  meta,
  starbucks,
  tesla,
  shopify,
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
    icon: meta, // Using meta icon as placeholder
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
    icon: shopify, // Using shopify icon as placeholder
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
    icon: tesla, // Using tesla icon as placeholder
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
    icon: starbucks, // Using starbucks icon as placeholder
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
    name: "Smart Notes",
    description:
      "An AI-powered study tool that enhances your notes with video content, generates flashcards, and offers personalized learning support.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Flask API",
        color: "green-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
    ],
    image: smart_notes,
    source_code_link: "https://github.com/MoeHamzaA/Smart-Notes.git",
  },
  {
    name: "Asinc Texting Assistant",
    description:
      "script combining multiple APIs to send you a concise morning SMS with your daily schedule, weather update, and task list, ensuring a well-organized start to your day",
    tags: [
      {
        name: "APIIntegration",
        color: "blue-text-gradient",
      },
      {
        name: "Automation",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: asinc,
    source_code_link: "https://github.com/MoeHamzaA/Asinc.git",
  },
  {
    name: "Trash It",
    description:
      "An Azure-integrated app that analyzes photos to identify objects and instantly tells you whether they’re recyclable, helping you make sustainable choices.",
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
        name: "ObjectDetection",
        color: "pink-text-gradient",
      },
    ],
    image: trashit,
    source_code_link: "https://trash-it.azurewebsites.net/",
  },
];

export { services, technologies, experiences, testimonials, projects };
