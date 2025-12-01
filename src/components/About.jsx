import React from 'react';
import { resumeData } from '../data/resume';
import { motion } from 'framer-motion';
import aboutImage from '../assets/images/profile-4.jpg';

const About = () => {
    return (
        <div name="about" className="w-full py-20 bg-white dark:bg-dark text-slate-900 dark:text-white transition-colors duration-300">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold inline border-b-4 border-primary"
                    >
                        About
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-1"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                            <img
                                src={aboutImage}
                                alt="Sudipta Chakraborty - Professional"
                                className="relative rounded-lg w-full object-cover shadow-xl border-2 border-gray-200 dark:border-slate-700"
                            />
                        </div>
                    </motion.div>

                    <div className="md:col-span-2">
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-xl mt-4 leading-relaxed text-slate-600 dark:text-slate-300"
                        >
                            {resumeData.summary}
                        </motion.p>

                        <br />

                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-xl leading-relaxed text-slate-600 dark:text-slate-300"
                        >
                            I have over 14 years of experience in full-stack development, cloud architecture, and AI integration.
                            My journey has taken me through leading tech companies like Microsoft, IBM, and Siemens, where I've honed my skills in building scalable, resilient, and high-performance applications.
                            I am passionate about leveraging the latest technologies, such as Generative AI and Serverless architectures, to solve complex business problems.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="mt-8 grid grid-cols-2 gap-4"
                        >
                            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 p-4 rounded-lg border border-primary/20">
                                <h3 className="text-3xl font-bold text-primary">14+</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Years Experience</p>
                            </div>
                            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 p-4 rounded-lg border border-primary/20">
                                <h3 className="text-3xl font-bold text-primary">425+</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Engineers Trained</p>
                            </div>
                            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 p-4 rounded-lg border border-primary/20">
                                <h3 className="text-3xl font-bold text-primary">20+</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Enterprise Apps</p>
                            </div>
                            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 p-4 rounded-lg border border-primary/20">
                                <h3 className="text-3xl font-bold text-primary">99.99%</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Uptime SLA</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
