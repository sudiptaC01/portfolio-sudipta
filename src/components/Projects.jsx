import React from 'react';
import { resumeData } from '../data/resume';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <div name="projects" className="w-full py-20 bg-white dark:bg-dark text-slate-900 dark:text-white transition-colors duration-300">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold inline border-b-4 border-primary"
                    >
                        Projects
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="py-6 text-slate-600 dark:text-slate-400"
                    >
                        Check out some of my work
                    </motion.p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 px-12 sm:px-0">
                    {resumeData.projects.map(({ id, title, description, tags, link }) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: id * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="shadow-lg shadow-gray-300 dark:shadow-slate-800 rounded-lg duration-200 hover:shadow-primary/30 bg-gray-50 dark:bg-slate-800 overflow-hidden flex flex-col"
                        >
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">{description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {tags.map((tag, idx) => (
                                        <span key={idx} className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
