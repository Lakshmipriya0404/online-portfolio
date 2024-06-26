import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rja from "@/public/rja.png";
import pp from "@/public/pp.png";
import npm from "@/public/npm.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.E Computer Science Engineering",
    location: "Chennai, India",
    description: "CGPA: 9.1",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2024",
  },
  {
    title: "Software Engineer",
    location: "Kriyadocs, Chennai",
    description:
      "Collaborated on Python and machine learning open-source projects for author matching. Developed backend features using Python, Flask and PostgreSQL, emphasizing efficient data management and code quality through rigorous code reviews.",
    icon: React.createElement(CgWorkAlt),
    date: "FEB 2023 - JUL 2023",
  },
  {
    title: "Software Developer",
    location: "Houston, TX",
    description:
      "Developed a React Native Smart Bin mobile app for real-time data visualization and notifications, with an Express.js backend, MongoDB Cloud, and Google Firebase for updates and JWT authentication.",
    icon: React.createElement(FaReact),
    date: "FEB 2024 - APR 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Reader's Junction",
    link: "https://github.com/Lakshmipriya0404/readers-junction-app",
    description:
      "Full-stack app for book collection management and user connection, featuring registration, email validation, and book management.",
    tags: ["Angular", "Spring Boot", "Spring Security", "Postgres", "Docker"],
    imageUrl: rja,
  },
  {
    title: "Playlist Porter",
    link: "https://playlist-porter.netlify.app/",
    description:
      "App enabling user to convert Spotify playlists to YouTube playlists securely using OAuth 2.0 authentication.",
    tags: ["React", "Material-UI", "Flask", "Google APIs", "Spotify API"],
    imageUrl: pp,
  },
  {
    title: "React-Data-Sync",
    link: "https://www.npmjs.com/package/react-data-sync",
    description:
      "NPM package for efficient data synchronization between React components and external sources, enhancing data fetching, caching, and state synchronization.",
    tags: ["React", "TypeScript", "NPM"],
    imageUrl: npm,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Java",
  "Angular",
  "Spring Boot",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Flask",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
