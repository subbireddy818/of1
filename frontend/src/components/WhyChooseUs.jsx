import React from 'react';
import { UserCheck, ShieldCheck, HeartPulse, Award, Users, Globe, Heart, Sparkles } from 'lucide-react';
import { whyChooseUs } from '../data/mock';
import { motion } from 'framer-motion';

const iconMap = {
    'UserCheck': UserCheck,
    'ShieldCheck': ShieldCheck,
    'HeartPulse': HeartPulse,
    'award': Award,
    'users': Users,
    'globe': Globe,
    'heart': Heart,
    'sparkles': Sparkles
};

export const WhyChooseUs = () => {
    return (
        <section id="why" className="section-padding bg-white relative overflow-hidden">
            {/* Soft Background Blobs Removed */}

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-bold text-xs uppercase tracking-[0.2em]"
                    >
                        Why Orange Figs
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight"
                    >
                        Excellence in Every <span className="gradient-text">Detail.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-subtle leading-relaxed"
                    >
                        We set the standard for premium culinary education through uncompromising safety, expert mentorship, and a curriculum that inspires.
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {whyChooseUs.map((feature, index) => {
                        const IconComponent = iconMap[feature.icon];

                        return (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index }}
                                className="group p-10 rounded-[32px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-primary/10"
                            >
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:rotate-6"
                                    style={{ backgroundColor: feature.color || 'var(--brand-orange)' }}
                                >
                                    <IconComponent size={32} />
                                </div>

                                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
