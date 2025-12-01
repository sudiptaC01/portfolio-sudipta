import React from 'react';
import { resumeData } from '../data/resume';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <div name="skills" className="w-full py-20 bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold inline border-b-4 border-primary"
                    >
                        Skills
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="py-6 text-slate-600 dark:text-slate-400"
                    >
                        These are the technologies I've worked with
                    </motion.p>
                </div>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
                    {resumeData.skills.map(({ name, icon: Icon, level }, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="shadow-md hover:shadow-xl hover:shadow-primary/20 rounded-lg p-6 bg-white dark:bg-slate-800 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-full bg-gray-100 dark:bg-slate-700 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Icon size={30} />
                                </div>
                                <p className="font-bold text-lg">{name}</p>
                            </div>

                            <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${level}%` }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full"
                                ></motion.div>
                            </div>
                            <div className="flex justify-end mt-1">
                                <span className="text-sm text-slate-500 dark:text-slate-400">{level}%</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
