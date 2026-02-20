import React, { useState, useEffect } from 'react';
import { Menu, X, ChefHat, Search, Heart, User, ShoppingCart, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = [
        { label: 'Our Programs', id: 'classes' },
        { label: 'Why Us', id: 'why' },
        { label: 'Gallery', id: 'gallery' },
        { label: 'Testimonials', id: 'testimonials' },
        { label: 'Contact', id: 'contact' }
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">

            {/* Precision Sized Floating Header that attaches on scroll */}
            <div className={`transition-all duration-300 pointer-events-auto ${isScrolled ? 'pt-0 px-0' : 'pt-4 px-4 lg:px-8'}`}>
                <motion.header
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    style={{ height: '77.21px', maxWidth: isScrolled ? '100%' : '1408px' }}
                    className={`mx-auto w-full bg-[#D4145A] border-b border-white/10 flex items-center transition-all duration-300 ${isScrolled ? 'rounded-none shadow-xl' : 'rounded-[2rem]'}`}
                >
                    <nav className="px-8 lg:px-10 flex items-center justify-between w-full h-full">
                        {/* Logo */}
                        <div
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <span className="text-3xl font-black italic tracking-tighter text-white font-serif">
                                OrangeFigs
                            </span>
                        </div>

                        {/* Desktop Navigation - Centered */}
                        <div className="hidden lg:flex items-center gap-8 translate-x-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => scrollToSection(item.id)}
                                    className="flex items-center gap-1 text-[15px] font-bold text-white hover:opacity-80 transition-all"
                                >
                                    {item.label}
                                    <ChevronDown size={14} />
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="hidden lg:flex items-center gap-4">
                                <Button
                                    variant="outline"
                                    onClick={() => scrollToSection('contact')}
                                    className="bg-white text-[#D4145A] hover:bg-white/90 border-none rounded-full h-11 px-8 font-bold text-sm"
                                >
                                    Subscribe today
                                </Button>
                            </div>

                            {/* Mobile Menu Button */}
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </motion.button>
                        </div>
                    </nav>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 overflow-hidden rounded-3xl bg-[#D4145A] shadow-2xl"
                            >
                                <div className="px-8 py-8 flex flex-col gap-4">
                                    {navItems.map((item) => (
                                        <button
                                            key={item.label}
                                            onClick={() => scrollToSection(item.id)}
                                            className="text-xl font-black text-white py-2 border-b border-white/10"
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                    <Button
                                        onClick={() => scrollToSection('contact')}
                                        className="bg-white text-[#D4145A] mt-4 h-14 rounded-2xl text-lg font-bold"
                                    >
                                        Subscribe today
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.header>
            </div>
        </div>
    );
};
