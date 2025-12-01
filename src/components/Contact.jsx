import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill in all fields!', {
                duration: 4000,
                position: 'top-center',
                style: {
                    background: '#ef4444',
                    color: '#fff',
                    fontWeight: 'bold',
                },
            });
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email address!', {
                duration: 4000,
                position: 'top-center',
                style: {
                    background: '#ef4444',
                    color: '#fff',
                    fontWeight: 'bold',
                },
            });
            return;
        }

        setLoading(true);

        try {
            // EmailJS configuration
            const serviceId = 'service_portfolio'; // You'll need to replace this
            const templateId = 'template_portfolio'; // You'll need to replace this
            const publicKey = 'YOUR_PUBLIC_KEY'; // You'll need to replace this

            // For now, we'll simulate the email sending
            // Once you set up EmailJS, uncomment the code below and remove the setTimeout

            /* 
            await emailjs.sendForm(
              serviceId,
              templateId,
              formRef.current,
              publicKey
            );
            */

            // Simulating email send (remove this setTimeout when EmailJS is configured)
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Success toast
            toast.success('Sudipta has been informed that you want to connect!', {
                duration: 5000,
                position: 'top-center',
                icon: '✉️',
                style: {
                    background: '#10b981',
                    color: '#fff',
                    fontWeight: 'bold',
                    padding: '16px',
                    borderRadius: '8px',
                },
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                message: ''
            });
            formRef.current.reset();

        } catch (error) {
            console.error('Email send error:', error);
            toast.error('Oops! Something went wrong. Please try again.', {
                duration: 4000,
                position: 'top-center',
                style: {
                    background: '#ef4444',
                    color: '#fff',
                    fontWeight: 'bold',
                },
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div name="contact" className="w-full py-20 bg-white dark:bg-dark text-slate-900 dark:text-white transition-colors duration-300 p-4">
            <Toaster />
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold inline border-b-4 border-primary"
                    >
                        Contact
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="py-6 text-slate-600 dark:text-slate-400"
                    >
                        Submit the form below to get in touch with me. If you are not getting a response, reach out to me via. Linkedin (click on linkedin icon below)
                    </motion.p>
                </div>

                <div className="flex justify-center items-center">
                    <motion.form
                        ref={formRef}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        onSubmit={handleSubmit}
                        className="flex flex-col w-full md:w-1/2"
                    >
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors duration-300 border-slate-300 dark:border-slate-600"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="my-4 p-2 bg-transparent border-2 rounded-md text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors duration-300 border-slate-300 dark:border-slate-600"
                        />
                        <textarea
                            name="message"
                            rows="10"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter your message"
                            className="p-2 bg-transparent border-2 rounded-md text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors duration-300 border-slate-300 dark:border-slate-600"
                        ></textarea>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`text-white bg-gradient-to-r from-primary to-secondary px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 font-bold shadow-lg shadow-primary/30 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                "Let's Talk"
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
