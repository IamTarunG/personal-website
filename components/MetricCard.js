import { motion } from "framer-motion";

function MetricCard({ title, link, metric }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 19 }}
            whileHover={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 6 }}
            className="metric-card dark:bg-gray-900 border border-gray-800 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full"
        >
            <a
                aria-label={title}
                target="_blank"
                rel="noopener noreferrer"
                href={link}
            >
                <div className="flex items-center text-white dark:text-gray-100">
                    {title}
                    <svg
                        className="h-4 w-4 ml-1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                    </svg>
                </div>
            </a>
            <p className="mt-2 text-3xl font-bold spacing-sm text-white dark:text-white">
                {metric > 0 ? metric.toLocaleString() : "-"}
            </p>
        </motion.div>
    );
}

export default MetricCard;
