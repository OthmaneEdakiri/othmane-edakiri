import {
  LogoGit,
  LogoTailwindcss,
  LogoMongoDB,
  LogoExpressLight,
  LogoExpress,
  LogoTypescript,
  LogoNodejs,
  LogoReact,
  LogoJavascript,
  LogoLaravel,
  LogoPhp,
  LogoMysql,
  LogoMysqlLight,
  LogoSql,
  LogoGithubLight,
  LogoGithub,
  LogoPython,
  LogoBootstrap,
  LogoSass,
  LogoBourachdi,
  LogoBourachdiLight,
  LogoUpwork,
  ProjectBarberShop,
  ProjectEbook,
  ProjectEverstore,
  AvatarMed,
  AvatarHamza,
  AvatarReed,
  ProjectBraxton,
  ProjectBKDP,
  ProjectDLK,
  HighnessLogo,
  LogoWordpress,
} from "@/assets";
import { Github, Linkedin } from "lucide-react";

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/othmaneedakiri/",
  },
  {
    icon: Github,
    url: "https://github.com/OthmaneEdakiri",
  },
];

export const TECHNOLOGIES = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "PHP",
    logo: LogoPhp,
    url: "https://www.php.net/",
  },
  {
    label: "Python",
    logo: LogoPython,
    url: "https://www.python.org/",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Laravel",
    logo: LogoLaravel,
    url: "https://laravel.com/",
  },
  // {
  //   label: "Node.js",
  //   logo: LogoNodejs,
  //   url: "https://nodejs.org/en",
  // },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "MySql",
    logo: LogoMysql,
    darkModeLogo: LogoMysqlLight,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Sql",
    logo: LogoSql,
    url: "https://sql.sh/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Bootstrap",
    logo: LogoBootstrap,
    url: "https://getbootstrap.com/",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
  {
    label: "GitHub",
    logo: LogoGithub,
    darkModeLogo: LogoGithubLight,
    url: "https://github.com/",
  },
  {
    label: "Wordpress",
    logo: LogoWordpress,
    url: "https://wordpress.org/",
  },
];

export const EXPERIENCES = [
  {
    logo: HighnessLogo,
    logoAlt: "highness logo",
    position: "Full Stack Developer",
    startDate: new Date(2024, 10),
    endDate: new Date(2025, 4),
    summary: [
      " Converting UI/UX designs into responsive and interactive web pages using HTML, CSS, and jQuery.",
      " Participating in the development of an e-commerce project using Shopify, with a focus on customization and enhancing user experience.",
      " uilding and customizing WordPress themes to meet client needs while ensuring performance and usability.",
    ],
  },
  // {
  //   logo: LogoUpwork,
  //   logoAlt: "Upwork logo",
  //   position: "Independent Freelancer",
  //   startDate: new Date(2024, 6),
  //   currentlyWorkHere: true,
  //   summary: [
  //     "Worked with a variety of technologies, including React, Laravel, Tailwindcss, Bootstrap, Mysql, and others.",
  //   ],
  // },

  // {
  //   logo: LogoBourachdi,
  //   darkModeLogo: LogoBourachdiLight,
  //   logoAlt: "Bourachdi logo",
  //   position: "Full Stack Developer",
  //   startDate: new Date(2024, 3),
  //   endDate: new Date(2024, 4),
  //   summary: ["Worked as a full stack developer (React / Laravel)."],
  // },
];

export const PROJECTS = [
  {
    name: "BiglarKinyan Design",
    description:
    "A professional website developed during my internship at Company Highness for a luxury interior design firm, featuring a clean and elegant layout that highlights completed projects and services offered.",
    url: "https://bkdp.ca/",
    previewImage: ProjectBKDP,
    technologies: ["WordPress"],
  },
  {
    name: "Design Line Kitchens",
    description:
      "A custom website developed during my internship at Company Highness for a kitchen design company, featuring a clean and professional design that reflects the brand’s upscale identity.",
    url: "https://www.designlinekitchens.com/",
    previewImage: ProjectDLK,
    technologies: ["Tailwindcss", "JQuery"],
  },
  {
    name: "Braxton",
    description:
      "personal portfolio project for a designer is a professional website aimed at showcasing the designer's skills, past projects",
    url: "https://othmaneedakiri.github.io/braxton/",
    previewImage: ProjectBraxton,
    technologies: ["React", "Tailwindcss", "ShadCN"],
  },
  {
    name: "Everstore",
    description:
      "Everstore is a modern and user-friendly platform where you can easily browse, purchase, and manage shoes.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7239740844394573824/",
    previewImage: ProjectEverstore,
    technologies: [
      "React",
      "Laravel",
      "Larvel/breeze",
      "Tailwindcss",
      "ShadCN",
    ],
  },
  // {
  //   name: "Ebook",
  //   description:
  //     "ebook is an online platform dedicated to book enthusiasts of all genres.",
  //   url: "https://othmaneedakiri.github.io/ebook/",
  //   previewImage: ProjectEbook,
  //   technologies: ["React", "Tailwindcss"],
  // },
  // {
  //   name: "Barber shop",
  //   description:
  //     "Barber-Shop project is a custom web application designed for a barber salon, providing a wonderful experience for customers and effective management for the salon owner.",
  //   url: "https://othmaneedakiri.github.io/barber-shop/",
  //   previewImage: ProjectBarberShop,
  //   technologies: ["React", "Styled Components"],
  // },
];

export const TESTIMONIALS = [
  {
    personName: "Enniya Med",
    personAvatar: AvatarMed,
    title: "Service Technique - Bourrachdi S.A.R.L",
    testimonial:
      '"I had the pleasure of working with Othmane during his final training at our company. Throughout the project, Othmane demonstrated exceptional skill in full-stack development"',
  },
  {
    personName: "Hamza Rezkou",
    personAvatar: AvatarHamza,
    title: "Freelancer",
    testimonial:
      '"It was a pleasure working with Othmane on a full-stack web development project. His support and technical expertise were invaluable. Othmane assisted me in all aspects of the project."',
  },
  {
    personName: "Reed Graphics",
    personAvatar: AvatarReed,
    title: "Graphic designer - Fath Union Sport",
    testimonial:
      '"I have known Othmane for several years, and during this time, I have witnessed his impressive growth in web development skills. He is not only highly proficient in modern technologies and programming languages used in web development but also possesses a very disciplined and dedicated work ethic."',
  },
];
