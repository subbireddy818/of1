import React from 'react';
import { galleryImages } from '../data/mock';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';

export const Gallery = () => {
    return (
        <section id="gallery" className="section-padding bg-white overflow-hidden">
            <div className="container-custom">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-bold text-xs uppercase tracking-[0.2em]"
                        >
                            Our Moments
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight"
                        >
                            Capturing the <br />
                            <span className="gradient-text">Joy of Cooking.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-subtle max-w-md leading-relaxed"
                    >
                        Success isn't just about the recipe; it's about the smiles, the focus, and the friendships formed.
                    </motion.p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.1 * index,
                                duration: 0.6,
                                ease: [0.23, 1, 0.32, 1]
                            }}
                            className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 cursor-pointer shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-all duration-700"
                        >
                            <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                                <motion.div
                                    className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                                >
                                    <h4 className="text-2xl font-black text-white">{image.title}</h4>
                                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                                        <ZoomIn size={14} /> View Moment
                                    </div>
                                </motion.div>
                            </div>

                            {/* Decorative Line */}
                            <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-white/40 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:top-10 group-hover:right-10" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
