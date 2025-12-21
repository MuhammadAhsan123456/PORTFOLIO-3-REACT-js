import { 
  FaReact, FaHtml5, FaCss3Alt, FaGithub, FaServer, FaMobileAlt 
} from "react-icons/fa";
import { 
  SiJavascript, SiTailwindcss, SiTypescript, SiNextdotjs, 
  SiExpress, SiMongodb, SiBootstrap, 
  SiFirebase
} from "react-icons/si";
import { MdDevices } from "react-icons/md";

// Features Data (Perfectly sorted & cleaned)
export const featuresData = [
  {
    id: 1,
    icon: <FaHtml5/>,
    title: "HTML5",
    des: "Writing semantic HTML to structure content clearly and accessibly.",
  },
  {
    id: 2,
    icon: <FaCss3Alt/>,
    title: "CSS3",
    des: "Styling layouts with Flexbox, Grid, animations, and transitions using modern CSS.",
  },
  {
    id: 3,
    icon: <SiBootstrap/>,
    title: "Bootstrap 5",
    des: "Rapidly building responsive, mobile-first websites with Bootstrap's powerful CSS framework.",
  },
  {
    id: 4,
    icon: <SiTailwindcss/>,
    title: "Tailwind CSS",
    des: "Designing modern UIs quickly using Tailwind's utility-first CSS classes.",
  },
  {
    id: 5,
    icon: <MdDevices/>,
    title: "Responsive Design",
    des: "Building mobile-friendly and cross-device compatible user interfaces.",
  },
  {
    id: 6,
    icon: <SiJavascript/>,
    title: "JavaScript (ES6+)",
    des: "Handling logic and interactivity using modern JavaScript in web applications.",
  },
  {
    id: 7,
    icon: <SiTypescript/>,
    title: "TypeScript",
    des: "Using TypeScript for type safety, scalability, and clean code.",
  },
  {
    id: 8,
    icon: <FaReact/>,
    title: "React.js",
    des: "Creating dynamic and fast user interfaces using reusable React components.",
  },
  {
    id: 9,
    icon: <FaMobileAlt/>,
    title: "React Native",
    des: "Building cross-platform mobile apps (iOS & Android) with native performance.",
  },
  {
    id: 10,
    icon: <SiNextdotjs/>,
    title: "Next.js",
    des: "Building SEO-friendly and high-performance React apps with SSR & SSG.",
  },
  {
    id: 11,
    icon: <FaServer/>,
    title: "Node.js",
    des: "Building scalable server-side applications with JavaScript runtime.",
  },
  {
    id: 12,
    icon: <SiExpress/>,
    title: "Express.js",
    des: "Creating fast and robust RESTful APIs using Express framework.",
  },
  {
    id: 13,
    icon: <SiMongodb/>,
    title: "MongoDB",
    des: "Designing flexible NoSQL databases for modern scalable applications.",
  },
  {
    id: 14,
    icon: <FaGithub/>,
    title: "Git & GitHub",
    des: "Managing source code, versions, and collaboration using Git and GitHub.",
  },
  {
    id: 14,
    icon: <SiFirebase/>,
    title: "Firebase",
    des: "Using Firebase for authentication, real-time database, and app hosting.",
  },
];

export default featuresData;