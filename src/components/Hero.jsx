import React from 'react';
import { resumeData } from '../data/resume';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImage from '../assets/images/profile-3.jpg';

const Hero = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-white via-white to-gray-100 dark:from-dark dark:via-dark dark:to-slate-900 transition-colors duration-300 pt-20">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row gap-8">
                <div className="flex flex-col justify-center h-full w-full md:w-3/5">
                    <motion.h2
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-7xl font-bold text-slate-900 dark:text-white"
                    >
                        I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{resumeData.name}</span>
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-xl sm:text-4xl font-bold text-slate-500 dark:text-slate-400 mt-4 h-20 sm:h-auto"
                    >
                        <span className="mr-2">I am a</span>
                        <span className="text-primary">
                            <Typewriter
                                words={resumeData.title.split(' | ')}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="text-slate-600 dark:text-slate-400 py-4 max-w-2xl text-lg leading-relaxed"
                    >
                        {resumeData.summary}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="flex gap-6 mt-8"
                    >
                        <Link to="projects" smooth duration={500} offset={-80} className="group text-white w-fit px-8 py-4 flex items-center rounded-full bg-gradient-to-r from-primary to-secondary cursor-pointer hover:scale-105 duration-300 shadow-lg shadow-primary/30 font-bold text-lg">
                            View Work
                            <span className="group-hover:rotate-90 duration-300 ml-2">
                                →
                            </span>
                        </Link>
                        <div className="flex gap-4">
                            <a href={resumeData.social.linkedin} target="_blank" rel="noreferrer" className="p-4 rounded-full bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:shadow-md transition-all duration-300">
                                <FaLinkedin size={28} />
                            </a>
                            <a href={resumeData.social.email} className="p-4 rounded-full bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:shadow-md transition-all duration-300">
                                <FaEnvelope size={28} />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="w-full md:w-2/5 flex justify-center items-center"
                >
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                        <img
                            src={profileImage}
                            alt="Sudipta Chakraborty"
                            className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white dark:border-slate-800 shadow-2xl"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
