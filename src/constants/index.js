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
    title: "Smart Notes",
    company_name: "Startup",
    icon: snotes,
    iconBg: "#383E56",
    date: "Aug 2024 - Sept 2024",
    points: [
      "Developed a comprehensive educational tool using Django for the web framework, integrated with Flask API for video and audio processing.",
      "Implemented AWS S3 for secure file storage, enabling robust handling of submitted study notes and video lectures.",
      "Integrated Gemini AI for advanced content generation, including keyword extraction, flashcard creation, and providing AI-driven suggestions for note enhancement.",
      "Utilized TensorFlow and SciKit for machine learning tasks, including text analysis and similarity comparison to improve the quality of study materials.",
    ],
  },
  {
    title: "Automated Daily Summary Script",
    company_name: "Personal",
    icon: calendar,
    iconBg: "#383E56",
    date: "Aug 2024 - Aug 2024",
    points: [
      "Developed a comprehensive Python-based automation script designed to streamline daily information retrieval and communication.",
      "integrated multiple APIs and technologies to provide a detailed summary of the day's events, assignments, and weather conditions",
      "Integrated Twilio SMS to send automated SMS summaries of daily information to the user's phone.",
      "Deployed the script on AWS for reliable execution and scheduling",
    ],
  },
  {
    title: "Spotify Data Analysis Web Application",
    company_name: "Personal",
    icon: analytic,
    iconBg: "#E6DEDD",
    date: "May 2024 - May 2024",
    points: [
      "Developed a Flask-based web application integrated with the Spotify Web API for music data analysis.",
      "Built playlist comparison functionality to analyze track counts, artist similarities, and calculate percentage similarity.",
      "Leveraged the Spotify Web API for authentication, artist search, and playlist management.",
      "Demonstrated proficiency in backend development and integration with third-party APIs for dynamic web applications and data analysis."
    ],
  },
  {
    title: "AirHub Booking Agency Application",
    company_name: "Project for ISU",
    icon: paper_airplane,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Mar 2023",
    points: [
      "Developed a comprehensive flight booking system to facilitate flight bookings, manage passenger details, and calculate flight costs.",
      "Utilized Spring Boot's email service for sending flight confirmation invoices to users.",
      "Designed a user-friendly graphical interface (GUI) for login and booking interactions using Java Swing.",
      "Enhanced user experience with background music integration during application interactions.",
      "Highlighted proficiency in Java, Spring Boot, Maven, and practical application of OOP principles."
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
  
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
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
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
