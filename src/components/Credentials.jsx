import React from 'react';
import { motion } from 'framer-motion';
import profile1 from '../assets/images/profile-1.jpg';
import profile2 from '../assets/images/profile-2.jpg';

const Credentials = () => {
    const credentials = [
        {
            image: profile1,
            title: "Microsoft Certified Professional",
            description: "Multiple Azure and Development certifications including MCSA Web Applications, Azure AI Fundamentals, and specialized developer exams.",
            year: "2012-2020"
        },
        {
            image: profile2,
            title: "Innovation Leader",
            description: "3x Hackathon Award Winner (Microsoft Global Hackathon 2021, 2023, Infosys 2015). Recognized for technical excellence and leadership.",
            year: "2015-2023"
        }
    ];

    return (
        <div name="credentials" className="w-full py-20 bg-white dark:bg-dark text-slate-900 dark:text-white transition-colors duration-300">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold inline border-b-4 border-primary"
                    >
                        Credentials & Recognition
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="py-6 text-slate-600 dark:text-slate-400"
                    >
                        Professional certifications and industry recognition
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {credentials.map((cred, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-gray-50 dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="relative overflow-hidden h-64">
                                <img
                                    src={cred.image}
                                    alt={cred.title}
                                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="text-primary font-bold text-sm">{cred.year}</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{cred.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{cred.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Certifications List */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-lg p-8 border border-primary/20"
                >
                    <h3 className="text-2xl font-bold mb-6 text-center">Professional Certifications</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                            <div>
                                <p className="font-semibold">Microsoft Certified: Azure AI Fundamentals</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">2020</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                            <div>
                                <p className="font-semibold">MCSA: Web Applications</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">2016</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                            <div>
                                <p className="font-semibold">SAFe 4 Agilist</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">2019</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                            <div>
                                <p className="font-semibold">Developing Microsoft Azure and Web Services</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">2014</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Credentials;
