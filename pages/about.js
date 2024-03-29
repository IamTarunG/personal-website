import Link from "next/link"
import HeadContent from "../components/HeadContent"
import ImageGrid from "../components/ImageGrid"
function About() {
    return (
        <main>
            <HeadContent title={"About - Tarun Gudipalli"} description="This is about me. I build web applications using Next.js and I also love to do 3D renders using Blender" />
            <section className="my-20 text-center">
                <p className=" text-white dark:text-gray-100 font-bold text-2xl md:text-3xl tracking-tight mb-10">
                    About
                </p>
                <p className=" text-gray-400 dark:text-gray-400 lg:mx-96 sm:mx-10">
                    Hi. I am Tarun.
                    <br />
                    I build Web Applications and learn new stuff.

                </p>
            </section>
            <section className=" mx-20">
                <h3 className="text-white dark:text-gray-100 font-bold text-xl md:text-2xl mb-6  text-center">Skills</h3>
                <ImageGrid />
            </section>
        </main>
    )
}

export default About
