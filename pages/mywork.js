import React from "react";
import ProjectCard from "../components/ProjectCard";
import HeadContent from "../components/HeadContent";
import { motion } from 'framer-motion'
function MyWork() {
    const list = {
        visible: {
            opacity: 1, transition: {
                when: "beforeChildren",
                staggerChildren: 0.4
            }
        },
        hidden: { opacity: 0, }
    }
    return (
        <main>
            <HeadContent
                title={"My Work - Tarun Gudipalli"}
                description="The my work page contains all my projects done with React and Next.js"
            />
            <section className="mt-20 text-center">
                <p className="text-white dark:text-gray-100 font-bold text-3xl md:text-3xl tracking-tight mb-5">
                    My Work
                </p>
                <p className="mb-5 text-gray-400 dark:text-gray-400 lg:mx-96 sm:mx-10">
                    This page contains all of my projects.
                </p>
            </section>

            <motion.section className="grid gap-4 grid-cols-1 sm:grid-cols-2 pb-10 w-full px-20" initial="hidden" animate="visible" variants={list}>
                <ProjectCard
                    title={"Project Management"}
                    description="The Project Management application provides ease of use to the clients to manage the projects. the client can add, edit and delete the project.the project is built using ReactJS, Express, Mongo DB, NodeJS And GraphQL."
                    link={"https://projectmgnt.vercel.app/"}
                />
                <ProjectCard
                    title={"Travel Experience"}
                    description="The Travel Experience application provides users to upload their travel experiences and one can edit and delete their experiences.this application is built using reactjs, react-redux, nodejs, express and mongo db and for styling it uses tailwind css."
                    link={"https://travel-experience.vercel.app/"}
                />
                <ProjectCard
                    title={"TextUtils"}
                    description="The Textutils application provides the utilities to convert the text into uppercase, lowercase. one can also change the theme from light to dark and vice-versa. this application is made using reactjs"
                    link={"https://utilitiestext.netlify.app/"}
                />
                <ProjectCard
                    title={"News Today"}
                    description="The Newstoday application gives the latest news around technology, sports, business, entertainment and many more categories. it has an infinite scroll feature.this application is done using reactjs"
                    link={
                        "https://github.com/IamTarunG/News-App/tree/functional-component"
                    }
                />
                <ProjectCard
                    title={"E-Authentication System"}
                    description="The E-Authentication System application uses both QR code and OTP to authenticate the user.The QR code is to be downloaded and scanned by the user, the OTP is sent to user's email and the corresponding OTP to be entered to access the main page."
                    link={"https://github.com/IamTarunG/E-authentication-System"}
                />
            </motion.section>
        </main>
    );
}

export default MyWork;
