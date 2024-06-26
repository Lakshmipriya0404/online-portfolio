"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to
        pursue my passion for software engineering. I have a solid foundation in{" "}
        <span className="font-medium">full-stack development</span>, gained
        through both academic and professional experiences.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. The sense of{" "}
        <span className="underline">accomplishment</span> when everything clicks
        into place is what drives me. My core stack is{" "}
        <span className="font-medium">
          React, Python, Node.js, Flask, and PostgreSQL
        </span>
        . I am also familiar with Angular and Spring Boot. I am always looking
        to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy watching
        sci-fi movies, listening to podcast and reading books. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">the art of blogging</span>.
        I'm also expanding my culinary skills.
      </p>
    </motion.section>
  );
}
