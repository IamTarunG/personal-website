import useSWR from "swr";
import fetcher from "../lib/fetcher";
import Spinner from "./Spinner";
import { motion } from "framer-motion";
function Spotify() {
    const list = {
        visible: {
            opacity: 1, transition: {
                when: "beforeChildren",
                staggerChildren: 0.3
            }
        },
        hidden: { opacity: 0, }
    }
    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 }
    }
    const { data } = useSWR("/api/top-tracks", fetcher);

    if (!data) {
        return (
            <div className="text-center mt-10">
                <Spinner />
            </div>
        );
    }

    return (
        <motion.div initial="hidden" animate="visible" variants={list}>
            {data.map((track, index) => {
                return (
                    <motion.div
                        className="flex flex-row items-baseline border-b border-gray-700  max-w-3xl w-full mt-8"
                        key={track.songUrl}
                        variants={item}
                        whileHover={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 200, damping: 12 }}

                    >
                        <p className="text-sm font-bold text-gray-400 dark:text-gray-600">
                            {index + 1}
                        </p>
                        <div className="flex flex-col pl-3">
                            <motion.a

                                className="text-white dark:text-gray-100 font-medium truncate w-60 sm:w-96 md:w-full"
                                href={track.songUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {track.title}
                            </motion.a>
                            <p
                                className="text-gray-500 mb-4 truncate w-60 sm:w-96 md:w-full"
                                color="gray.500"
                            >
                                {track.artist}
                            </p>
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}

export default Spotify;
