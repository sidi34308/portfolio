"use client";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectCard from "./components/Card";
import Skills from "./components/skills";
import Footer from "./components/Footer"; // Adjust the import path as needed

// Example project details
const projects = [
  {
    image: "/project1.png", // Ensure the image is in the public folder
    title: "3D Solar System Planets to Explore",
    description:
      "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    techIcons: [
      "/react-icon.png",
      "/nextjs-icon.png",
      "/ts-icon.png",
      "/figma-icon.png",
      "/tailwind-icon.png",
    ],
    liveSiteLink: "https://example.com",
  },
  {
    image: "/project2.png", // Ensure the image is in the public folder
    title: "Another Project",
    description: "Description of another project.",
    techIcons: [
      "/react-icon.png",
      "/nextjs-icon.png",
      "/ts-icon.png",
      "/figma-icon.png",
      "/tailwind-icon.png",
    ],
    liveSiteLink: "https://example.com",
  },
  {
    image: "/project3.png", // Ensure the image is in the public folder
    title: "Third Project",
    description: "Description of the third project.",
    techIcons: [
      "/react-icon.png",
      "/nextjs-icon.png",
      "/ts-icon.png",
      "/figma-icon.png",
      "/tailwind-icon.png",
    ],
    liveSiteLink: "https://example.com",
  },
  {
    image: "/project4.png", // Ensure the image is in the public folder
    title: "Fourth Project",
    description: "Description of the fourth project.",
    techIcons: [
      "/react-icon.png",
      "/nextjs-icon.png",
      "/ts-icon.png",
      "/figma-icon.png",
      "/tailwind-icon.png",
    ],
    liveSiteLink: "https://example.com",
  },
];

export default function Home() {
  return (
    <main className="text-black font-['Inter']">
      <Header />
      <Hero />

      <section
        id="work"
        className="min-h-screen p-8 xl:pl-[20rem] xl:pr-[20rem] bg-[#070707]"
      >
        <h2 className="text-center p-12">
          <span className="text-white text-3xl font-bold font-['Inter'] leading-[48px]">
            A small selection of{" "}
          </span>
          <span className="text-teal-400 text-3xl font-bold font-['Inter'] leading-[48px]">
            recent projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-8 p-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              techIcons={project.techIcons}
              liveSiteLink={project.liveSiteLink}
            />
          ))}
        </div>
      </section>

      <section
        id="about"
        className="background flex flex-col justify-center min-h-screen p-8 xl:pl-[20rem] xl:pr-[20rem]  bg-[#F7F7F7] "
      >
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="paragraph">
          {" "}
          Hello! I'm Sidi Chaikh, a front-end developer based in Doha, Qatar.
          Currently pursuing a Bachelor of Science in Computer Science at Qatar
          University, I have a keen interest in building responsive and visually
          appealing websites. With experience in both front-end and back-end
          development, I bring a comprehensive skill set to every project I
          undertake.My technical expertise includes HTML, CSS, JavaScript,
          React, Next.js, Node.js, Express.js, SQL, and more. I am also
          proficient in design tools such as Adobe Creative Suite, Figma, and
          Blender.
        </p>
        <Skills />
      </section>
      {/* 
      <section id="contact" className="flex flex-col justify-center min-h-screen p-8 xl:pl-[20rem] xl:pr-[20rem]  bg-[#F7F7F7] bg-gray-100">
        <h2 className="text-3xl font-bold">Contact Me</h2>
      </section>

      <section id="work-together" className="min-h-screen flex flex-col justify-center min-h-screen p-8 xl:pl-[20rem]  bg-[#F7F7F7] bg-white">
        <h2 className="text-3xl font-bold">Let’s Work Together</h2>
      </section > */}
      <section className="flex flex-col max-h-screen ">
        {/* Other components */}
        <Footer />
      </section>
    </main>
  );
}
