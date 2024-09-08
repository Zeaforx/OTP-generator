"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li> </li>
                <li>Website Design</li>
                <li>Sound Engineers</li>
                <li>Drone Operators</li>
                <li>Robotic Engineers</li>
                <li>Weapon Smiths</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Air Force Institute of Technology</li>
                {/* <li>University of California, Santa Cruz</li> */}
            </ul>
        ),
    },
    // {
    //     title: "Certifications",
    //     id: "certifications",
    //     content: (
    //         <ul className="list-disc pl-2">
    //             <li>AWS Cloud Practitioner</li>
    //             <li>Google Professional Cloud Developer</li>
    //         </ul>
    //     ),
    // },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: React.SetStateAction<string>) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    src="/archimugun.jpg"
                    width={500}
                    height={500}
                    alt="123"
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        About Me
                    </h2>
                    <p className="text-base lg:text-lg">
                        Greetings! I&apos;m Caleb, a dedicated Web developer .
                        I&apos;ve cultivated a passion for creating apps,
                        constantly seeking opportunities to learn and grow. My
                        journey has led me through multiple Projects, or
                        Learning Experiences, shaping me into a creative
                        thinker, problem solver and professional. Specializing
                        in frontend and backend, I bring a unique blend of
                        creativity and technical expertise to every project. I
                        believe in the power of collaboration, and when you
                        choose to work with me, you&apos;re not just getting a
                        web developer, but a dedicated partner committed to
                        bringing your vision to life. Let&apos;s connect, explore
                        my portfolio, and embark on a journey to create
                        something amazing together!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
