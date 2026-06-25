import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "WanderLust - Geospatial Rental Marketplace",
    description:
      "A full-stack Airbnb-inspired rental marketplace featuring property listings, interactive Mapbox maps, secure authentication, reviews, and Cloudinary-powered image management. Built using MVC architecture and deployed on Render.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Bootstrap",
      "Passport.js",
      "Cloudinary",
      "Mapbox",
      "Render",
    ],
    githubLink:
      "https://github.com/muhammadjunaidfarooq/wanderlust-geospatial-rental-platform",
    demoLink:
      "https://online-rental-marketplace-geospatial.onrender.com/listings",
    image: "/projects/home.png",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern portfolio website showcasing my projects, technical skills, experience, and resume. Built with Next.js and TypeScript, featuring responsive design, smooth animations, and optimized performance.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React",
    ],
    githubLink:
      "https://github.com/muhammadjunaidfarooq/muhammad-junaid-portfolio",
    demoLink: "https://muhammadjunaid-swe.vercel.app/",
    image: "/projects/hero-section.png",
  },
  {
    title: "High-Fidelity UI Engine (Streaming Interface)",
    description:
      "Developed a pixel-perfect streaming platform landing page inspired by modern OTT services, achieving responsive layouts, cross-device compatibility, and optimized frontend performance using semantic HTML and CSS.",
    technologies: [
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Flexbox",
      "CSS Grid",
      "Font Awesome",
      "Render",
    ],
    githubLink: "https://github.com/muhammadjunaidfarooq/netflix-ui-clone",
    demoLink: "https://netflix-ui-clone-61hu.onrender.com/",
    image: "/projects/netflix-landing-page.png",
  },
];
