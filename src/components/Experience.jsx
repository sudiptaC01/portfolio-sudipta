import React from 'react';
import { resumeData } from '../data/resume';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <div name="experience" className="w-full py-20 bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold inline border-b-4 border-primary"
                    >
                        Experience
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="py-6 text-slate-600 dark:text-slate-400"
                    >
                        My professional journey
                    </motion.p>
                </div>

                <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3 md:ml-6">
                    {resumeData.experience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="mb-10 ml-6"
                        >
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-white dark:ring-slate-900">
                                <svg className="w-2.5 h-2.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="flex flex-wrap items-center mb-1 text-lg font-semibold text-slate-900 dark:text-white">
                                {exp.role}
                                <span className="bg-primary/10 text-primary text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-primary/20 ml-3">
                                    {exp.company}
                                </span>
                            </h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{exp.period}</time>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 max-w-2xl">{exp.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((tech, idx) => (
                                    <span key={idx} className="text-xs font-medium px-2.5 py-0.5 rounded border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
