import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "cursorAI",
    image: "cursorai.png",
    width: 100,
    height: 100,
  },
  {
    skill_name: "lovable",
    image: "lovable.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "canva",
    image: "canva.png",
    width: 80,
    height: 80,
  }, {
    skill_name: "visualstudio",
    image: "visualstudio.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "vscode",
    image: "vscode.png",
    width: 80,
    height: 80,
  },
  
   {
    skill_name: "java ",
    image: "java.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "pythonIDLE",
    image: "pythonIDLE.png",
    width: 80,
    height: 80,
  },
 
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/vadla-shaik-muskan-567837278/",
  },
  {
    name: "Github",
    icon: RxGithubLogo,
    link: "https://github.com/Muskanvs",
  },
   {
    name: "LeetCode",
    icon: SiLeetcode,
    link: "https://leetcode.com/u/VadlaShaikmuskan/",
  },
   {
    name: "GFG",
    icon: SiGeeksforgeeks,
    link: "https://www.geeksforgeeks.org/user/muskan8e33/",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },

 
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
 
  {
    skill_name: "php",
    image: "php.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "c",
    image: "c.png",
    width: 80,
    height: 80,
  },
   {
    skill_name: "c#",
    image: "csharp.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "c++ ",
    image: "c++.png",
    width: 80,
    height: 80,
  },
  
] as const;

export const BACKEND_SKILL = [
 
{
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
 
  {
    skill_name: "ssms",
    image: "ssms.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "angular",
    image: "angular.png",
    width: 80,
    height: 80,
  },
  
  {
    skill_name: "bootstrap",
    image: "bootstrap.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
 
  {
    skill_name: "Adobexd",
    image: "adobexd.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Sketch",
    image: "sketch.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "github",
    image: "github.png",
    width: 60,
    height: 60,
  },
] as const;
type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies?: string[]; // optional
};
export const PROJECTS: Project[] = [ 
 {
    title: " Email AI Reply Generator ",
    description:
      'Developed an Email AI Reply Generator using Spring Boot, React, and a Chrome Extension integrated
with Gmail to produce AI-based email responses. Built the end-to-end workflow where the extension
captures email content and communicates with backend REST APIs to generate replies in real time.
Implemented backend logic, frontend UI, and seamless Gmail integration to deliver a fast and interactive
user experience.',
    image: "/skills/AI_Reply_Generated_In_GMAIL.png",
    link: "https://github.com/Muskanvs/Email_AIReply_generator",
  technologies: ["React", "GoogleAPI","SpringBoot"]
  },
  {
    title: " GEETHA COMPUTERS ",
    description:
      'A static website built for a computer institute, currently being used by 1000+ members for information and resources.',
    image: "/skills/geetha.png",
    link: "https://geethacomputers.org/",
  technologies: ["HTML", "CSS", "JS","JQuery"]
  },
  
 {
  title: "Grabber Grocery ",
  description:
    '**Grabber Grocery** is a UI/UX design project for an online grocery shopping...',
  image: "/skills/grabber.png",
  link: "https://www.figma.com/design/rnjuPzFSyzo2D4Gy0VOYzP/Grabber-Grocrey-App--Community-?node-id=0-1&t=DhmjeIpcG2DC8Qbl-1",
  technologies: ["Figma", "Responsive Design", "UX Research"]
},
{
  title: "MC Donald's Prototype ",
  description:
    'McDonald Prototype is a UI/UX design project focused on reimagining...',
  image: "/skills/mcdonald.png",
  link: "https://www.figma.com/design/Xp5pETjN9UADYoPRp6uQk0/McDonald-App-Prototype--Community-?node-id=0-1&t=x6tdmV9e0WmMV0dc-1",
  technologies: ["Figma", "Prototyping", "Mobile UI"]
},
// Add technologies for the rest similarly

   {
    title: " Rock-Paper-Scissors Gesture Recognition ",
    description:
      'A computer vision application that detects hand gestures through webcam and plays Rock-Paper-Scissors game with the user.',
    image: "/skills/rps.png",
    link: "https://github.com/Muskanvs/rps-gesture-recognition",
      technologies: ["Python", "OpenCV", "MediaPipe"]

  },
   {
    title: " AMMA NANNA PREMA  ",
    description:
      'A donation website for supporting orphans and elderly people, facilitating donations and volunteer registrations.',
    image: "/skills/AMP.png",
    link: "https://ammanannapremacharitabletrust.org/",
      technologies: ["HTML", "CSS", "JS","JQuery"]

  },
   {
  title: " FoodGo ",
  description:
    '**FoodGo** is a UI/UX design project for a modern food ordering platform...',
  image: "/skills/fodgo.png",
  link: "https://www.figma.com/design/ZZSJGgKF5ee7bDigy8QI6O/foodgo?node-id=7-131&t=Kd74Zeio1EstEw7E-1",
  technologies: ["Figma", "UI/UX", "Mobile-first design"]
},
  
] ;


export const FOOTER_DATA = [
  {
   
  
    title: "Social Media",
    data: [
       {
    name: "Github",
    icon: RxGithubLogo,
    link: "https://github.com/Muskanvs",
  },
      {
        name: "Leetcode",
        icon: SiLeetcode,
    link: "https://leetcode.com/u/VadlaShaikmuskan/",
      },
      {
        name: "GFG",
        icon: SiGeeksforgeeks,
    link: "https://www.geeksforgeeks.org/user/muskan8e33/",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "www.linkedin.com/in/vadla-shaik-muskan-567837278",
      },
       {
        name: "Contact Me",
        icon: null,
        link: "mailto:muskanvs786@gmail.com",
      },
    ],
  },
     
    
] as const;
export const NAV_LINKS = [
  { title: "About", link: "#about-me" },
  { title: "Education", link: "#encryption" },
  
  { title: "Projects", link: "#projects" },
  
  { title: "Experience", link: "#ExperienceSection" },
  { title: "Certifications", link: "#Certifications" },
  { title: "Contact", link: "#contact" },
];


export const LINKS = {
  sourceCode: "https://github.com/Muskanvs",
};
