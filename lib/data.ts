import projectsImages from "./projectsImages";
import skillsImages from "./skillsImages";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experience = [
  {
    title: "Full Stack Developer",
    company: "FutureLearn (UK)",
    dates: "May '23 - Current",
    description: [
      "Upgraded the entire stack of the old application, alongside refactoring, testing, and performance enhancements.",
      "Currently assisting the frontend team in enhancing code quality and UX/UI.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Aratech (Madrid)",
    dates: "May '23 - Current",
    description: [
      "Improved code quality, addressed technical debt, and fixed performance issues.",
      "Currently working on implementing new features for both the frontend and backend of software designed for a leading construction company.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Top Div Solutions (Barcelona)",
    dates: "January '21 - May '23 (2 years, 5 months)",
    description: [
      "Spearheaded the introduction of testing practices within the company.",
      "Designed and developed a full-stack app for a fitness company, aiming for 100% coverage and optimal web performance.",
    ],
  },
  {
    title: "Interior Designer and Web Developer",
    company: "Miquel Angel Muxi (Barcelona)",
    dates: "January '17 - December '20 (4 years)",
    description: [
      "Conducted a complete redesign of the company website.",
      "Enhanced the overall UX/UI quality and web performance, including responsiveness, which was previously lacking.",
    ],
  },
  {
    title: "Interior Designer, Graphic Designer and Web Developer",
    company: "Cersis Grup International (Barcelona)",
    dates: "October '14 - November '16 (2 years, 1 month)",
    description: [
      "Designed and developed small websites to facilitate project presentations.",
      "Promoted to lead designer after a year and a half, with responsibilities including supervising colleagues’ designs and presentations quality.",
    ],
  },
];

export const skillsData = [
  {
    title: "Foundational Skills",
    skills: [
      { name: "HTML", image: skillsImages.html },
      { name: "CSS", image: skillsImages.css },
      { name: "JavaScript", image: skillsImages.javascript },
      { name: "TypeScript", image: skillsImages.typescript },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", image: skillsImages.react },
      { name: "Redux", image: skillsImages.redux },
      { name: "Vue", image: skillsImages.vue },
      { name: "Next.js", image: skillsImages.nextjs },
      { name: "Tailwind", image: skillsImages.tailwind },
      { name: "Sass", image: skillsImages.sass },
      { name: "Styled Comp.", image: skillsImages.styledComponents },
      { name: "Material UI", image: skillsImages.materialui },
      { name: "Vutetify", image: skillsImages.vuetify },
      { name: "Shadcn/ui", image: skillsImages.shadcn },
      { name: "Figma", image: skillsImages.figma },
      { name: "GraphQL", image: skillsImages.graphql },
      { name: "Joi", image: skillsImages.joi },
      { name: "Clerk", image: skillsImages.clerk },
      { name: "Storybook", image: skillsImages.storybook },
      { name: "Framer Motion", image: skillsImages.framerMotion },
    ],
  },
  {
    title: "Backend & Content Management",
    skills: [
      { name: "Node.js", image: skillsImages.nodejs },
      { name: "Express", image: skillsImages.express },
      { name: "MongoDB", image: skillsImages.mongodb },
      { name: "Supabase", image: skillsImages.supabase },
      { name: "Sanity", image: skillsImages.sanity },
      { name: "Contentful", image: skillsImages.contentful },
    ],
  },
  {
    title: "Testing & QA",
    skills: [
      { name: "Cypress", image: skillsImages.cypress },
      { name: "Enzyme", image: skillsImages.enzyme },
      { name: "Jest", image: skillsImages.jest },
      { name: "React TL", image: skillsImages.reactTestingLibrary },
      { name: "Vitest", image: skillsImages.vitest },
      { name: "Postman", image: skillsImages.postman },
    ],
  },
  {
    title: "DevOps & Build Tools",
    skills: [
      { name: "Git", image: skillsImages.git },
      { name: "GitHub", image: skillsImages.github },
      { name: "GitLab", image: skillsImages.gitlab },
      { name: "ESLint", image: skillsImages.eslint },
      { name: "SonarCloud", image: skillsImages.sonarcloud },
      { name: "Docker", image: skillsImages.docker },
      { name: "Vite", image: skillsImages.vite },
    ],
  },
  {
    title: "Project Management",
    skills: [
      { name: "Linear", image: skillsImages.linear },
      { name: "Slack", image: skillsImages.slack },
      { name: "Trello", image: skillsImages.trello },
      { name: "Jira", image: skillsImages.jira },
      { name: "Confluence", image: skillsImages.confluence },
    ],
  },
];

export const projects = [
  {
    title: "Threads App Clone",
    description:
      "A Threads app clone with all the essentials: post creation, comments, profile tweaks, user sign up and login, and a slick search for communities and threads. 🚀",
    image: projectsImages.threads,
    skills: [
      {
        name: "TypeScript",
        image: skillsImages.typescript,
      },
      {
        name: "React",
        image: skillsImages.react,
      },
      {
        name: "Next",
        image: skillsImages.nextjs,
      },
      {
        name: "Tailwind",
        image: skillsImages.tailwind,
      },
      {
        name: "Clerk",
        image: skillsImages.clerk,
      },
      {
        name: "MongoDB",
        image: skillsImages.mongodb,
      },
    ],
  },
  {
    title: "Battleship",
    description:
      "Throwback to 2017 – my early days in coding. Built a 'Player vs CPU' Battleship game with a basic AI, all crafted with plain old JavaScript. Just a heads up, it's desktop-only. 😎",
    image: projectsImages.battleship,
    skills: [
      {
        name: "JavaScript",
        image: skillsImages.javascript,
      },
      {
        name: "Sass",
        image: skillsImages.sass,
      },
    ],
  },
  {
    title: "Pasapalabra - Doom Edition",
    description:
      "Yeah, it's got some bugs and the code is a bit of a mess. But hey, it was my first coding gig, and I had to throw it into my portfolio! Imagine a mashup of Pasapalabra and the OG Doom game. 💥",
    image: projectsImages.pasapalabra,
    skills: [
      {
        name: "JavaScript",
        image: skillsImages.javascript,
      },
    ],
  },
];
