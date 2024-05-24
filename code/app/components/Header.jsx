"use client"

import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="">
            <nav className="">
                <button
                    className="block md:hidden focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <ul className={`md:flex md:items-center md:gap-8 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                    <li className="p-2"><a href="#work" className="">My Work</a></li>
                    <li className="p-2"><a href="#about" className="">About Me</a></li>
                    <li className="p-2"><a href="#contact" className="">Contact Me</a></li>
                    <li className="p-2">
                        <a href="#work-together" className="">
                            Let’s Work Together
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
