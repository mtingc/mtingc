import { IExperience } from "@/interfaces";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

// Navbar
export const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About me",
    path: "/about-me",
  },
];
const logo = {
  src: "/logo_blanco.svg",
  alt: "Mtingc Logo",
}
const socialsLinks = [
  {
    name: "Github",
    href: "https://github.com/mtingc",
    icon: AiFillGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mtingc/",
    icon: AiFillLinkedin,
  },
];

// Hero Section
const heroImage = {
  src: "../public/workDay.jpg",
  alt: "A workday with Martín",
};
const cv = "../public/mtingc_CV.pdf";

// Experience
const experiences: IExperience[] = [
  {
    id: "1",
    title: "ZoomLive",
    description:
      "I used Nest.js for API development. I opted for a microservices architecture with file upload functionality to an AWS bucket. On the client side, I used Next.js with TypeScript and Tailwind CSS. I significantly optimized the customer experience by providing them with an easier and faster way to access their social event content, replacing traditional delivery methods such as USB and DVD with an online platform, resulting in a 60% improvement in the customer experience.",
    date: "May 05, 2023",
    company: "ZoomGraphiK",
    skills: [
      "TypeScript",
      "NextJS",
      "Taildwind CSS",
      "NestJS",
      "amqplib",
      "MongoDB",
      "AWS",
    ],
    highlighted: true,
    github: [
      { name: "API", href: "https://github.com/mtingc/zoomgk-api" },
      { name: "Client", href: "https://github.com/mtingc/zoomgk-client" },
    ],
  },
  {
    id: "2",
    title: "ERP",
    description:
      "I coordinated, designed, and developed an API. I significantly optimized the QMS by including modules for stamped billing, raw material and finished product inventory management, as well as detailed tracking of the production process for parts. Additionally, I implemented specific functionalities to meet required certifications, such as generating Code 128 labels for efficient product delivery to customers. Furthermore, we streamlined production, packaging, and billing processes by 20%. Moreover, thanks to the implementation of AWS for file management, I reduced document access and retrieval time by 30% compared to previous methods.",
    date: "Jan 05, 2023",
    company: "Lagalm Industrial",
    skills: [
      "TypeScript",
      "JavaScript",
      "Angular",
      "Taildwind CSS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "AWS",
    ],
    highlighted: true,
    github: [
      { name: "API", href: "https://github.com/mtingc/lagalm_industrial_api" },
      {
        name: "Client",
        href: "https://github.com/mtingc/lagalm_industrial_client",
      },
    ],
  },
  {
    id: "3",
    title: "Website",
    description:
      "I used Next.js in TypeScript and made use of technologies such as Tailwind CSS and the Three.js library to import OBJ models, aiming to convey one of the company's key focuses: 3D design. I had the opportunity to lead the development of a previous version of the company's website.",
    date: "Apr 12, 2022",
    company: "Lagalm Industrial",
    skills: [
      "TypeScript",
      "NextJS",
      "Taildwind CSS",
      "ThreeJS",
      "Apollo Client",
      "Formik",
      "Yup",
    ],
    highlighted: true,
    github: [
      { name: "Website", href: "https://github.com/mtingc/lagalmInd" },
      { name: "With Three.js", href: "https://github.com/mtingc/lagalm" },
    ],
  },
];

// Skills
const skills = [
  {
    name: "Angular",
    strength: true,
  },
  {
    name: "AWS",
    strength: false,
  },
  {
    name: "Backend",
    strength: true,
  },
  {
    name: "English",
    strength: true,
  },
  {
    name: "Express",
    strength: true,
  },
  {
    name: "French",
    strength: false,
  },
  {
    name: "FullStack",
    strength: false,
  },
  {
    name: "GIT",
    strength: true,
  },
  {
    name: "GraphQL",
    strength: true,
  },
  {
    name: "JavaScript",
    strength: true,
  },
  {
    name: "Microservicios",
    strength: false,
  },
  {
    name: "Nest JS",
    strength: false,
  },
  {
    name: "Next JS",
    strength: true,
  },
  {
    name: "Node JS",
    strength: true,
  },
  {
    name: "NoSQL",
    strength: false,
  },
  {
    name: "React JS",
    strength: true,
  },
  {
    name: "Servers",
    strength: false,
  },
  {
    name: "Spanish",
    strength: true,
  },
  {
    name: "SQL",
    strength: false,
  },
  {
    name: "Tailwind CSS",
    strength: true,
  },
  {
    name: "TypeScript",
    strength: true,
  },
];

export { heroImage, socialsLinks, logo, cv, experiences, skills };
