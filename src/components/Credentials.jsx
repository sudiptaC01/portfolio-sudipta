import React from 'react';
import { motion } from 'framer-motion';
import { 
    FaTrophy, 
    FaCertificate, 
    FaMedal, 
    FaStar, 
    FaAward,
    FaMicrosoft,
    FaUsers,
    FaLightbulb,
    FaChartLine,
    FaCode
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { MdWorkspacePremium } from 'react-icons/md';

const Credentials = () => {
    // Hackathon Wins & Innovation Awards
    const innovationAwards = [
        {
            icon: FaTrophy,
            title: "Microsoft Global Hackathon 2023",
            subtitle: "Award Winner",
            description: "Led team of 6 developers",
            impact: "Demonstrated innovation in product development",
            year: "2023",
            category: "Innovation",
            color: "from-yellow-400 to-orange-500"
        },
        {
            icon: FaTrophy,
            title: "Microsoft Global Hackathon 2021",
            subtitle: "Award Winner",
            description: "Led team of 5 developers",
            impact: "Recognized for technical excellence",
            year: "2021",
            category: "Innovation",
            color: "from-yellow-400 to-orange-500"
        },
        {
            icon: FaMedal,
            title: "Infosys Global Hackathon 2015",
            subtitle: "Winner, Pune DC",
            description: "Innovation in enterprise solutions",
            impact: "Pioneered automation solutions",
            year: "2015",
            category: "Innovation",
            color: "from-purple-400 to-pink-500"
        }
    ];

    // Technical Excellence Awards
    const excellenceAwards = [
        {
            icon: FaStar,
            title: "Architect of Excellence (ACE) 2022",
            subtitle: "Best Leadership Team",
            description: "Recognized for technical leadership",
            impact: "Led high-performing development teams",
            year: "2022",
            category: "Leadership",
            color: "from-blue-400 to-cyan-500"
        },
        {
            icon: FaAward,
            title: "Architect of Excellence (ACE) 2021",
            subtitle: "Best Team & Star Achiever",
            description: "FY21 H1 Outstanding Performance",
            impact: "Delivered exceptional technical solutions",
            year: "2021",
            category: "Excellence",
            color: "from-blue-400 to-cyan-500"
        }
    ];

    // Microsoft Certifications
    const microsoftCerts = [
        {
            name: "Azure AI Fundamentals",
            code: "AI-900",
            year: "2020",
            impact: "Validated expertise in AI & Machine Learning"
        },
        {
            name: "MCSA: Web Applications",
            code: "MCSA",
            year: "2016",
            impact: "Certified full-stack web development expertise"
        },
        {
            name: "Developing Azure and Web Services",
            code: "Exam 487",
            year: "2014",
            impact: "Mastered cloud service development"
        },
        {
            name: "Developing ASP.NET MVC Applications",
            code: "Exam 486",
            year: "2014",
            impact: "Expert in enterprise web frameworks"
        },
        {
            name: "Programming in C#",
            code: "Exam 483",
            year: "2013",
            impact: "Core .NET development proficiency"
        },
        {
            name: "HTML5 with JavaScript and CSS3",
            code: "Exam 480",
            year: "2012",
            impact: "Modern web development foundations"
        }
    ];

    // Professional Certifications
    const professionalCerts = [
        {
            name: "SAFe 4 Agilist",
            issuer: "Scaled Agile",
            year: "2019",
            impact: "Certified in enterprise agile methodologies"
        }
    ];

    // Leadership Impact Highlights
    const leadershipImpact = [
        {
            icon: FaUsers,
            metric: "425+",
            label: "Engineers Trained",
            description: "Generative AI & Cloud Development"
        },
        {
            icon: FaChartLine,
            metric: "3x",
            label: "Hackathon Winner",
            description: "Innovation & Product Development"
        },
        {
            icon: FaLightbulb,
            metric: "Multiple",
            label: "SME Recognitions",
            description: "Technical Excellence & Mentorship"
        }
    ];

    return (
        <div name="credentials" className="w-full py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark dark:to-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
            <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full">
                {/* Header */}
                <div className="pb-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <HiSparkles className="text-4xl text-primary animate-pulse" />
                            <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                Credentials & Recognition
                            </h2>
                            <HiSparkles className="text-4xl text-secondary animate-pulse" />
                        </div>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Industry-recognized certifications, awards, and achievements showcasing technical excellence and innovation leadership
                        </p>
                    </motion.div>
                </div>

                {/* Leadership Impact Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid md:grid-cols-3 gap-6 mb-16"
                >
                    {leadershipImpact.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary/10 hover:border-primary/30 group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="text-3xl text-primary" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                        {item.metric}
                                    </div>
                                    <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                        {item.label}
                                    </div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Innovation & Hackathon Awards */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <FaTrophy className="text-3xl text-yellow-500" />
                        <h3 className="text-3xl font-bold">Innovation & Hackathon Awards</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {innovationAwards.map((award, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-yellow-500/20 hover:border-yellow-500/50 overflow-hidden">
                                    {/* Year Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                                            {award.year}
                                        </span>
                                    </div>
                                    
                                    {/* Icon */}
                                    <div className="mb-4">
                                        <div className={`inline-block p-4 bg-gradient-to-br ${award.color} rounded-xl shadow-lg`}>
                                            <award.icon className="text-4xl text-white" />
                                        </div>
                                    </div>
                                    
                                    {/* Content */}
                                    <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                                        {award.title}
                                    </h4>
                                    <p className="text-sm font-semibold text-primary mb-2">
                                        {award.subtitle}
                                    </p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                        {award.description}
                                    </p>
                                    <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
                                        <p className="text-xs text-slate-500 dark:text-slate-400 italic flex items-start gap-2">
                                            <HiSparkles className="text-primary mt-0.5 flex-shrink-0" />
                                            <span>{award.impact}</span>
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Technical Excellence Awards */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <FaStar className="text-3xl text-blue-500" />
                        <h3 className="text-3xl font-bold">Technical Excellence & Leadership</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {excellenceAwards.map((award, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500/50">
                                    <div className="flex items-start gap-4">
                                        <div className={`p-4 bg-gradient-to-br ${award.color} rounded-xl shadow-lg flex-shrink-0`}>
                                            <award.icon className="text-3xl text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between mb-2">
                                                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                                                    {award.title}
                                                </h4>
                                                <span className="px-3 py-1 bg-gradient-to-r from-blue-400 to-cyan-500 text-white text-xs font-bold rounded-full">
                                                    {award.year}
                                                </span>
                                            </div>
                                            <p className="text-sm font-semibold text-primary mb-2">
                                                {award.subtitle}
                                            </p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                                {award.description}
                                            </p>
                                            <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
                                                <p className="text-xs text-slate-500 dark:text-slate-400 italic flex items-start gap-2">
                                                    <HiSparkles className="text-primary mt-0.5 flex-shrink-0" />
                                                    <span>{award.impact}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Microsoft Certifications */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <FaMicrosoft className="text-3xl text-primary" />
                        <h3 className="text-3xl font-bold">Microsoft Certifications</h3>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                            6 Certifications
                        </span>
                    </div>
                    <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 dark:from-primary/10 dark:via-secondary/10 dark:to-primary/10 rounded-2xl p-8 border border-primary/20">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {microsoftCerts.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/30 group"
                                >
                                    <div className="flex items-start gap-3 mb-3">
                                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                                            <FaCertificate className="text-xl text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between gap-2">
                                                <h4 className="font-bold text-sm text-slate-900 dark:text-white leading-tight">
                                                    {cert.name}
                                                </h4>
                                                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                                                    {cert.year}
                                                </span>
                                            </div>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
                                                {cert.code}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
                                        <p className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                                            <MdWorkspacePremium className="text-secondary mt-0.5 flex-shrink-0" />
                                            <span>{cert.impact}</span>
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Professional Certifications */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <FaCode className="text-3xl text-secondary" />
                        <h3 className="text-3xl font-bold">Professional Certifications</h3>
                    </div>
                    <div className="grid md:grid-cols-1 gap-6">
                        {professionalCerts.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-gradient-to-r from-secondary/10 to-primary/10 dark:from-secondary/20 dark:to-primary/20 rounded-2xl p-6 border border-secondary/20 hover:border-secondary/40 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-4 bg-gradient-to-br from-secondary to-primary rounded-xl shadow-lg">
                                        <FaCertificate className="text-3xl text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                                                    {cert.name}
                                                </h4>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                                    {cert.issuer}
                                                </p>
                                            </div>
                                            <span className="px-4 py-2 bg-gradient-to-r from-secondary to-primary text-white font-bold rounded-full">
                                                {cert.year}
                                            </span>
                                        </div>
                                        <div className="mt-3 pt-3 border-t border-slate-300 dark:border-slate-600">
                                            <p className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                                                <MdWorkspacePremium className="text-secondary text-lg mt-0.5 flex-shrink-0" />
                                                <span>{cert.impact}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-2xl p-8 border border-primary/20">
                        <p className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
                            Continuous Learning & Professional Growth
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
                            Committed to staying at the forefront of technology through continuous certification, 
                            innovation challenges, and knowledge sharing with the developer community
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Credentials;
