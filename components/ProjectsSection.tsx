"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Mobile Responsive React Portfolio ",
        image: "/img/portfolio.png",
        tag: ["All", "Software"],
        gitUrl: "/",
        previewUrl: "https://portfolio-kappa-five-78.vercel.app/",
    },
    {
        id: 2,
        title: "Reacts Notes App",
        description: "Web App for keeping notes",
        image: "/img/2023-12-30 12_15_52-.jpg",
        tag: ["All", "Software"],
        gitUrl: "/",
        previewUrl: "https://chat-app-six-chi.vercel.app/",
    },
    {
        id: 3,
        title: "Chatapp ",
        description: "React general public Web App",
        image: "/img/chat-app.png",
        tag: ["All", "Software"],
        gitUrl: "/",
        previewUrl: "https://notes-7461d.web.app/",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                Our Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                {/* <ProjectTag
                    onClick={handleTagChange}
                    name="Software"
                    isSelected={tag === "Software"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Engineering"
                    isSelected={tag === "Engineering"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Robotics"
                    isSelected={tag === "Robotics"}
                /> */}
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;
