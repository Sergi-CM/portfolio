import confluence from "@/public/img/skills/confluence.svg";
import contentful from "@/public/img/skills/contentful.svg";
import css from "@/public/img/skills/css3.svg";
import cypress from "@/public/img/skills/cypress.png";
import docker from "@/public/img/skills/docker.svg";
import enzyme from "@/public/img/skills/enzyme.png";
import eslint from "@/public/img/skills/eslint.svg";
import express from "@/public/img/skills/express.svg";
import figma from "@/public/img/skills/figma.svg";
import framerMotion from "@/public/img/skills/framer-motion.svg";
import git from "@/public/img/skills/git.svg";
import github from "@/public/img/skills/github.svg";
import gitlab from "@/public/img/skills/gitlab.svg";
import graphql from "@/public/img/skills/graphql.svg";
import html from "@/public/img/skills/html5.svg";
import javascript from "@/public/img/skills/javascript.svg";
import jest from "@/public/img/skills/jest.svg";
import jira from "@/public/img/skills/jira.svg";
import joi from "@/public/img/skills/joi.png";
import linear from "@/public/img/skills/linear.svg";
import materialui from "@/public/img/skills/materialui.svg";
import mongodb from "@/public/img/skills/mongodb.svg";
import nextjs from "@/public/img/skills/nextjs.svg";
import nodejs from "@/public/img/skills/nodejs.svg";
import postman from "@/public/img/skills/postman.svg";
import react from "@/public/img/skills/react.svg";
import redux from "@/public/img/skills/redux.svg";
import sanity from "@/public/img/skills/sanity.svg";
import sass from "@/public/img/skills/sass.svg";
import slack from "@/public/img/skills/slack.svg";
import sonarcloud from "@/public/img/skills/sonarcloud.svg";
import storybook from "@/public/img/skills/storybook.svg";
import styledComponents from "@/public/img/skills/styled-components.svg";
import supabase from "@/public/img/skills/supabase.svg";
import tailwind from "@/public/img/skills/tailwindcss.svg";
import reactTestingLibrary from "@/public/img/skills/testing-library.svg";
import trello from "@/public/img/skills/trello.svg";
import typescript from "@/public/img/skills/typescript.svg";
import vite from "@/public/img/skills/vitejs.svg";
import vitest from "@/public/img/skills/vitest.svg";
import vue from "@/public/img/skills/vuejs.svg";
import vuetify from "@/public/img/skills/vuetify.svg";

const skillsData = [
  {
    title: "Foundational Skills",
    skills: [
      { name: "HTML", image: html },
      { name: "CSS", image: css },
      { name: "JavaScript", image: javascript },
      { name: "TypeScript", image: typescript },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", image: react },
      { name: "Redux", image: redux },
      { name: "Vue", image: vue },
      { name: "Next.js", image: nextjs },
      { name: "Tailwind", image: tailwind },
      { name: "Sass", image: sass },
      { name: "Styled Comp.", image: styledComponents },
      { name: "Material UI", image: materialui },
      { name: "Vutetify", image: vuetify },
      { name: "Figma", image: figma },
      { name: "GraphQL", image: graphql },
      { name: "Joi", image: joi },
      { name: "Storybook", image: storybook },
      { name: "Framer Motion", image: framerMotion },
    ],
  },
  {
    title: "Backend & Content Management",
    skills: [
      { name: "Node.js", image: nodejs },
      { name: "Express", image: express },
      { name: "MongoDB", image: mongodb },
      { name: "Supabase", image: supabase },
      { name: "Sanity", image: sanity },
      { name: "Contentful", image: contentful },
    ],
  },
  {
    title: "Testing & QA",
    skills: [
      { name: "Cypress", image: cypress },
      { name: "Enzyme", image: enzyme },
      { name: "Jest", image: jest },
      { name: "React TL", image: reactTestingLibrary },
      { name: "Vitest", image: vitest },
      { name: "Postman", image: postman },
    ],
  },
  {
    title: "DevOps & Build Tools",
    skills: [
      { name: "Git", image: git },
      { name: "GitHub", image: github },
      { name: "GitLab", image: gitlab },
      { name: "ESLint", image: eslint },
      { name: "SonarCloud", image: sonarcloud },
      { name: "Docker", image: docker },
      { name: "Vite", image: vite },
    ],
  },
  {
    title: "Project Management",
    skills: [
      { name: "Linear", image: linear },
      { name: "Slack", image: slack },
      { name: "Trello", image: trello },
      { name: "Jira", image: jira },
      { name: "Confluence", image: confluence },
    ],
  },
];

export default skillsData;
