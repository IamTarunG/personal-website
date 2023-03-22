import React from 'react'
import NowPlaying from './NowPlaying'
import Link from 'next/link'

function Footer() {
    return (
        <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full">

            <hr className="w-full border-1 border-gray-800 dark:border-gray-800 mb-8" />
            <NowPlaying />
            <main className="py-5 w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3 ">
                <div className="flex flex-col space-y-4">
                    <Link href="/">
                        <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
                    </Link>
                    <Link href="/about">
                        <a className="text-gray-500 hover:text-gray-600 transition">
                            About
                        </a>
                    </Link>
                    <Link href="/dashboard">
                        <a className="text-gray-500 hover:text-gray-600 transition">
                            Dashboard
                        </a>
                    </Link>
                    <Link href="/mywork">
                        <a className="text-gray-500 hover:text-gray-600 transition">My Work</a>
                    </Link>
                </div>

                <div className="flex flex-col space-y-4">

                    <Link href="https://github.com/IamTarunG">
                        <a className="text-gray-500 hover:text-gray-600 transition" target={"_blank"}>
                            GitHub
                        </a>
                    </Link>
                    
                    <Link href="https://unsplash.com/@tarun_gudipalli">
                        <a className="text-gray-500 hover:text-gray-600 transition" target={"_blank"}>
                            Unsplash
                        </a>
                    </Link>

                    <Link href="https://twitter.com/_tarungudipalli">
                        <a className="text-gray-500 hover:text-gray-600 transition" target={"_blank"}>
                            Twitter
                        </a>
                    </Link>
                    <Link href="https://www.instagram.com/tarun_gudipalli/">
                        <a className="text-gray-500 hover:text-gray-600 transition" target={"_blank"}>
                            Instagram
                        </a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/tarun-gudipalli-95130a120/">
                        <a className="text-gray-500 hover:text-gray-600 transition" target={"_blank"}>
                            LinkedIn
                        </a>
                    </Link>

                </div>
            </main>
        </footer>
    )
}

export default Footer
