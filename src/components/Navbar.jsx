import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [colorTheme, setTheme] = useDarkMode();

    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'skills' },
        { id: 4, link: 'projects' },
        { id: 5, link: 'experience' },
        { id: 6, link: 'credentials' },
        { id: 7, link: 'contact' },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-slate-900 dark:text-white bg-white/90 dark:bg-dark/90 backdrop-blur-sm fixed z-50 shadow-sm transition-colors duration-300">
            <div>
                <h1 className="text-3xl font-bold ml-2 cursor-pointer hover:text-primary transition-colors">
                    <Link to="home" smooth duration={500}>Sudipta.</Link>
                </h1>
            </div>

            <ul className="hidden md:flex items-center">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary duration-200"
                    >
                        <Link to={link} smooth duration={500} offset={-80}>
                            {link}
                        </Link>
                    </li>
                ))}
                <li onClick={() => setTheme(colorTheme)} className="cursor-pointer p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors ml-4">
                    {colorTheme === 'light' ? <FaSun size={20} className="text-yellow-400" /> : <FaMoon size={20} className="text-slate-400" />}
                </li>
            </ul>

            <div className="flex items-center md:hidden">
                <div onClick={() => setTheme(colorTheme)} className="cursor-pointer p-2 mr-4 rounded-full hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors">
                    {colorTheme === 'light' ? <FaSun size={20} className="text-yellow-400" /> : <FaMoon size={20} className="text-slate-400" />}
                </div>
                <div onClick={() => setNav(!nav)} className="cursor-pointer z-10 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white dark:bg-dark text-slate-900 dark:text-white transition-colors duration-300">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-primary duration-200"
                        >
                            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500} offset={-80}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;
