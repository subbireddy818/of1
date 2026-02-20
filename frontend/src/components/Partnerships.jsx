import React from 'react';
import { motion } from 'framer-motion';

const partners = [
    { name: 'KitchenAid', logo: 'https://images.unsplash.com/photo-1590424753062-3251f4912dff?auto=format&fit=crop&q=80&w=300&h=150' },
    { name: 'Whole Foods', logo: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=300&h=150' },
    { name: 'Le Creuset', logo: 'https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&q=80&w=300&h=150' },
    { name: 'MasterChef Junior', logo: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=300&h=150' },
    { name: 'Sur La Table', logo: 'https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&q=80&w=300&h=150' },
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
                        In Collaboration with <span style={{ color: '#D4145A' }}>The Best.</span>
                    </motion.h2>
                </div>

                <div className="relative">
                    <motion.div
                        animate={{ x: [0, -1500] }}
                        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                        className="flex gap-16 items-center whitespace-nowrap"
                    >
                        {[...partners, ...partners, ...partners].map((partner, index) => (
                            <div key={index} className="flex-shrink-0 cursor-pointer">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-36 w-auto object-contain rounded-xl opacity-90"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
