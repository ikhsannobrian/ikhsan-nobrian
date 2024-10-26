import project3 from "../assets/projects/project-3.webp";
import ecommerce from "../assets/projects/ecommerce.png";
import traknus from "../assets/projects/traknus.png";
import cloud from "../assets/projects/cloud.png";

export const HERO_CONTENT = `Currently, I am 7th semester at UPN Veteran Jawa Timur that have eagerness for IT / Data Science and digitalization solutions. As an IT person, I study to develop and made reliable program and IT solution, combining a conventional program. Using C, C++, PHP, MYSQL, BootStrap, Javascirpt, ReactJS, Laravel, HTML, CSS, python, I have designed and engineered multiple systems from conceptual, detailed, to real product. And then I have experienced in cloud solution architect and partnerships of AWS (Amazon Web Service) at TIMCorp-Academy to design system AWS services for optimization of Learning Management System and I have internship experience in creating a complaint and building damage website at PT. Traktor Nusantara..`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "February - June 2024",
    role: "Full Stack Developer",
    company: "Traktor Nusantara.",
    description: `I am creating a web application for building complaint management, damage reporting, and maintenance, while learning to be a project manager in building a website from requirement analysis, setting targets, problem analysis, planning and improvement ideas, implementing improvement plans, evaluating results, standardizing, and planning further improvements.`,
    technologies: ["Javascript", "PHP", "BootStrap", "MySQL", "HTML", "CSS"],
  },
  {
    year: "August 2023 - January 2024",
    role: "Cloud Engineer",
    company: "TIMCorp-Academy",
    description: `Design system AWS services for optimization of Learning Management System.`,
    technologies: ["Route53", "ALB", "EC2", "Aurora", "EFS"],
  },
];

export const PROJECTS = [
  {
    title: "General Affair PT. Traktor Nusantara Website",
    image: traknus,
    description:
      "Creating a building damage complaint website to make it easier for users to report damages without having to meet technicians, and users receive feedback once their damage report has been addressed. Additionally, the complaint data can be processed by the admin.",
    technologies: ["HTML", "CSS", "BootStrap", "PHP", "JavaScript", "mySQL"],
  },
  {
    title:
      "OPTIMIZATION OF LEARNING MATERIAL ACCESSIBILITY THROUGH MOODLE LMS IMPLEMENTATION IN THE AWS ENVIRONMENT",
    image: cloud,
    description:
      "I have designed and engineered multiple systems from conceptual, detailed, to real product. And then I have experienced in cloud solution architect and partnerships of AWS (Amazon Web Service) at TIMCorp-Academy to design system AWS services for optimization of Learning Management System.",
    technologies: ["Route53", "ALB", "EC2", "Aurora", "EFS"],
  },
  {
    title: "E-Commerce Website",
    image: ecommerce,
    description:
      "Creating an e-commerce website for certification exams as a junior web programmer.",
    technologies: ["HTML", "CSS", "BootStrap", "PHP", "JavaScript", "mySQL"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information",
    technologies: ["ReactJS", "Tailwind"],
  },
];

export const CONTACT = {
  address:
    "Komplek Panca Motor, Kelurahan Harapan Jaya, Kecamatan Bekasi Utara, Provinsi Jawa Barat. ",
  phoneNo: "081252927388 ",
  email: "ikhsannobrian@gmail.com",
};
