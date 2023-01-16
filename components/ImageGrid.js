import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'
function SingleImage({ href, src, width, height }) {

    return (
        <Link href={href}>
            <a target="_blank" className="text-center">
                <Image
                    src={src}
                    width={width}
                    height={height}

                />
            </a>
        </Link>
    )
}
function ImageGrid() {

    return (

        <div>
            <div className="border border-gray-600 rounded-xl py-10 shadow-2xl">
                <p className="py-10 text-xl md:text-md mb-6 text-white dark:text-white text-center">Frontend</p>
                <div className="grid grid-cols-3 gap-4">
                    <SingleImage href={"https://reactjs.org/"} src={"/static/images/react-colored.svg"} width={36} height={36} />
                    <SingleImage href={"https://nextjs.org/"} src={"/static/images/nextjs-colored.svg"} width={36} height={36} />
                    <SingleImage href={"https://redux.js.org/"} src={"/static/images/redux-colored.svg"} width={36} height={36} />
                    <SingleImage href={"https://tailwindcss.com/"} src={"/static/images/tailwindcss-colored.svg"} width={36} height={36} />
                    <SingleImage href={"https://getbootstrap.com/"} src={"/static/images/bootstrap-colored.svg"} width={36} height={36} />
                    <SingleImage href={"https://www.w3.org/TR/CSS/#css"} src={"/static/images/css3-colored.svg"} width={36} height={36} />
                    <SingleImage href={"https://developer.mozilla.org/en-US/docs/Glossary/HTML5"} src={"/static/images/html5-colored.svg"} width={36} height={36} />
                </div>
            </div>
            <div className="border border-gray-600 rounded-xl  py-10 shadow-2xl my-10">
                <p className="py-10 text-xl md:text-md mb-6 text-white dark:text-white text-center">Backend</p>
                <div className="grid grid-cols-3 gap-4">
                    <SingleImage href={"https://nodejs.org/en/"} src={"/static/images/nodejs-colored.svg"} width={36} height={36} />
                    <SingleImage href={"https://expressjs.com/"} src={"/static/images/express-colored.svg"} width={36} height={36} />
                    <SingleImage href={"https://www.mongodb.com/"} src={"/static/images/mongodb-colored.svg"} width={36} height={36} />

                </div>
            </div>
            <div className="border border-gray-600 rounded-xl py-10 shadow-2xl my-10">
                <p className="py-10 text-xl md:text-md mb-6 text-white dark:text-white text-center">Programming Languages</p>
                <div className="grid grid-cols-3 gap-4">
                    <SingleImage href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"} src={"/static/images/js.svg"} width={36} height={36} />
                    <SingleImage href={"https://www.typescriptlang.org/"} src={"/static/images/ts.svg"} width={36} height={36} />
                    <SingleImage href={"https://www.python.org/"} src={"/static/images/python-colored.svg"} width={36} height={36} />

                </div>
            </div>
            <div className="border border-gray-600 rounded-xl  py-10 shadow-2xl my-10">
                <p className="py-10 text-xl md:text-md mb-6 text-white dark:text-white text-center">Design Tools and others</p>
                <div className="grid grid-cols-4 gap-4">
                    <SingleImage href={"https://www.adobe.com/in/products/xd.html"} src={"/static/images/xd-colored.svg"} width={36} height={36} />
                    <SingleImage href={"https://www.figma.com/"} src={"/static/images/figma-colored.svg"} width={36} height={36} />
                    <SingleImage href={"https://graphql.org/"} src={"/static/images/graphql-colored.svg"} width={36} height={36} />
                    <SingleImage href={"https://www.blender.org/"} src={"/static/images/blender.svg"} width={40} height={40} />

                </div>
            </div>
        </div>

    )
}

export default ImageGrid