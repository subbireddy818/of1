import React from 'react';
import { ChefHat, Mail, Phone, MapPin, Instagram, Facebook, Youtube, Twitter, ArrowUp, Heart } from 'lucide-react';
import { contactInfo } from '../data/mock';
import { motion } from 'framer-motion';

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: 'School',
            links: [
                { name: 'Our Classes', href: '#classes' },
                { name: 'Why Us', href: '#why' }
            ]
        },
        {
            title: 'Community',
            links: [
                { name: 'Parents Portal', href: '#' },
                { name: 'School Events', href: '#' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Gift Cards', href: '#' }
            ]
        }
    ];

    const socialLinks = [
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Youtube, href: '#', label: 'Youtube' },
        { icon: Twitter, href: '#', label: 'Twitter' }
    ];

    return (
        <footer className="bg-gray-900 pt-32 pb-12 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-primary/5 rounded-full blur-[150px] translate-y-1/2 pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 mb-24">
                    {/* Brand Info */}
                    <div className="lg:col-span-5 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3"
                        >
                            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                                <ChefHat size={32} strokeWidth={2.5} />
                            </div>
                            <div>
                                <span className="text-3xl font-black text-white tracking-tighter">ORANGE FIGS</span>
                                <span className="block text-[10px] font-black text-primary uppercase tracking-[0.4em] ml-1">Culinary School</span>
                            </div>
                        </motion.div>

                        <p className="text-xl text-gray-400 leading-relaxed max-w-sm">
                            Nurturing the next generation of culinary masters through creativity, safety, and joy in every dish.
                        </p>

                        <div className="flex gap-4">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-8">
                        {footerLinks.map((group, i) => (
                            <div key={i} className="space-y-8">
                                <h4 className="text-xs font-black text-gray-500 uppercase tracking-[0.3em]">{group.title}</h4>
                                <ul className="space-y-6">
                                    {group.links.map((link, j) => (
                                        <li key={j}>
                                            <a
                                                href={link.href}
                                                className="text-gray-400 hover:text-primary font-bold transition-colors block"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Contact Info Group */}
                    <div className="lg:col-span-3 space-y-8">
                        <h4 className="text-xs font-black text-gray-500 uppercase tracking-[0.3em]">Location</h4>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                                <span className="text-gray-400 font-medium leading-relaxed">
                                    {contactInfo.address}
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="text-primary shrink-0" size={20} />
                                <span className="text-gray-400 font-medium">{contactInfo.phone}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="text-primary shrink-0" size={20} />
                                <span className="text-gray-400 font-medium">{contactInfo.email}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-gray-500 text-sm font-medium">
                        © {currentYear} Orange Figs Culinary School. All rights reserved.
                    </p>

                    <div className="flex items-center gap-8">
                        <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
                        <button
                            onClick={scrollToTop}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                        >
                            <ArrowUp size={20} />
                        </button>
                    </div>
                </div>

                {/* Made with Love */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.5em] flex items-center justify-center gap-2">
                        Made with <Heart size={10} className="text-primary fill-primary" /> for young chefs
                    </p>
                </div>
            </div>
        </footer>
    );
};
