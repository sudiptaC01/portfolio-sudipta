import React from 'react';
import { resumeData } from '../data/resume';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="w-full bg-gray-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 py-8 text-center transition-colors duration-300">
            <div className="flex justify-center gap-6 mb-4">
                <a href={resumeData.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                    <FaLinkedin size={24} />
                </a>
                <a href={resumeData.social.email} className="hover:text-primary transition-colors">
                    <FaEnvelope size={24} />
                </a>
            </div>
            <p className="text-sm">
                © {new Date().getFullYear()} {resumeData.name}. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;
