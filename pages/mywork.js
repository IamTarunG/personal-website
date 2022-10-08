import React from 'react'
import ProjectCard from '../components/ProjectCard'
import HeadContent from '../components/HeadContent'
function MyWork() {
    return (
        <div>
            <HeadContent title={"My Work - Tarun Gudipalli"} description="The my work page contains all my projects done with React and Next.js" />
            <section className="mt-20 text-center">
                <p className="text-white dark:text-gray-100 font-bold text-3xl md:text-3xl tracking-tight mb-5">My Work</p>
                <p className="mb-5 text-gray-400 dark:text-gray-400 lg:mx-96 sm:mx-10">
                    This page contains all of my projects.
                </p>
            </section>

            <section className='grid gap-4 grid-cols-1 sm:grid-cols-2 pb-10 w-full px-20'>
                <ProjectCard title={"E-Authentication System"} description="The E-Authentication System provides security to both the user and resources using QR code and OTP" link={"https://eauth-lemon.vercel.app/"} />
                <ProjectCard title={"Project Management"} description="The Project Management application provides ease of use to the clients to manage the projects. the client can add, edit and delete the project.the project is built using ReactJS, Express, Mongo DB, NodeJS And GraphQL." link={"https://projectmgnt.vercel.app/"} />
                <ProjectCard title={"Travel Experience"} description="The Travel Experience application provides users to upload their travel experiences and one can edit and delete their experiences.this application is built using reactjs, react-redux, nodejs, express and mongo db and for styling it uses tailwind css." link={"https://travel-experience.vercel.app/"} />
                <ProjectCard title={"TextUtils"} description="The Textutils application provides the utilities to convert the text into uppercase, lowercase. one can also change the theme from light to dark and vice-versa. this application is made using reactjs" link={"https://utilitiestext.netlify.app/"} />
                <ProjectCard title={"News Today"} description="The Newstoday application gives the latest news around technology, sports, business, entertainment and many more categories. it has an infinite scroll feature.this application is done using reactjs" link={"https://github.com/IamTarunG/News-App/tree/functional-component"} />

            </section>
        </div>
    )
}

export default MyWork