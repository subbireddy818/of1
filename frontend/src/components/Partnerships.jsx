import React from 'react';
import { motion } from 'framer-motion';

const partners = [
    { name: 'KitchenAid', logo: 'https://images.unsplash.com/photo-1590424753062-3251f4912dff?auto=format&fit=crop&q=80&w=200&h=100' },
    { name: 'Whole Foods', logo: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=200&h=100' },
    { name: 'Le Creuset', logo: 'https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&q=80&w=200&h=100' },
    { name: 'MasterChef Junior', logo: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=200&h=100' },
    { name: 'Sur La Table', logo: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=200&h=100' },
];

export const Partnerships = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4145A]/20 bg-[#D4145A]/5 text-[#D4145A] font-bold text-xs uppercase tracking-[0.2em]"
                    >
                        Our Partnerships
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight"
                    >
                        In Collaboration with <span className="gradient-text">The Best.</span>
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Fade Gradients */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="flex gap-16 items-center whitespace-nowrap"
                    >
                        {[...partners, ...partners, ...partners].map((partner, index) => (
                            <div key={index} className="flex-shrink-0 group grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-16 w-auto object-contain opacity-50 group-hover:opacity-100 transition-opacity"
                                />
                                <p className="text-center text-xs font-bold text-gray-400 mt-2 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                    {partner.name}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
