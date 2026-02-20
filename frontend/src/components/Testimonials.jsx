import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card } from './ui/card';
import { testimonials } from '../data/mock';
import { motion } from 'framer-motion';

export const Testimonials = () => {
    return (
        <section id="testimonials" className="section-padding bg-white overflow-hidden">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-bold text-xs uppercase tracking-[0.2em]"
                    >
                        Voices of Experience
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight"
                    >
                        What Parents <span className="gradient-text">Say.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-subtle leading-relaxed"
                    >
                        Hear from families who have experienced the Orange Figs difference and the joy of culinary discovery.
                    </motion.p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                        >
                            <Card className="group h-full p-10 rounded-[32px] border border-gray-100 bg-white hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all duration-500 relative">
                                <div className="absolute top-10 right-10 text-primary/10 group-hover:text-primary/20 transition-colors">
                                    <Quote size={60} fill="currentColor" />
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-8">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-xl text-gray-800 leading-relaxed mb-10 font-medium italic relative z-10">
                                    "{testimonial.content}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-5 pt-8 border-t border-gray-200">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-primary/20 rounded-full scale-110 blur-sm group-hover:scale-125 transition-transform" />
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="w-16 h-16 rounded-full object-cover relative z-10 border-2 border-white"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-black text-gray-900 text-lg">{testimonial.name}</div>
                                        <div className="text-sm font-bold text-primary uppercase tracking-widest">{testimonial.role}</div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
