import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, ShieldCheck, HeartPulse, Award, Star, ArrowUpRight } from 'lucide-react';

const reasons = [
    {
        id: 1,
        icon: UserCheck,
        number: '01',
        title: 'Expert Instructors',
        description: 'Guided by Michelin-experienced chefs who specialize in child development. Every instructor is passionate, certified, and dedicated to your child\'s growth.',
        color: '#D4145A',
        highlight: true,
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80',
    },
    {
        id: 2,
        icon: ShieldCheck,
        number: '02',
        title: 'Safety First, Always',
        description: 'State-of-the-art kitchen with induction heating, age-appropriate tools, and rigorous hygiene standards. Every detail is designed for safe, joyful learning.',
        color: '#FCAB52',
    },
    {
        id: 3,
        icon: HeartPulse,
        number: '03',
        title: 'Healthy Habits for Life',
        description: 'We cultivate a deep love for fresh, whole ingredients — building nutritional literacy that goes far beyond any single recipe.',
        color: '#74BB42',
    },
    {
        id: 4,
        icon: Award,
        number: '04',
        title: 'Award-Winning Curriculum',
        description: 'Nationally recognised for blending creativity, nutrition, and technique into a programme that consistently produces confident young cooks.',
        color: '#B42A63',
    },
];

const stats = [
    { value: '1,200+', label: 'Happy Students' },
    { value: '15+', label: 'Master Chefs' },
    { value: '4.9 / 5', label: 'Parent Rating' },
    { value: '50+', label: 'Workshops Run' },
    { value: '6 yrs', label: 'Of Excellence' },
];

export const WhyChooseUs = () => {
    return (
        <section id="why" className="bg-[#0D0D0D] py-28 lg:py-36 overflow-hidden relative">

            {/* ── Background watermark text ── */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <span className="text-[22vw] font-black text-white/[0.02] leading-none whitespace-nowrap tracking-tighter">
                    WHY US
                </span>
            </div>

            <div className="container-custom relative z-10">

                {/* ── HEADER ── */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
                    <div className="space-y-5">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-[#D4145A] border border-[#D4145A]/30 bg-[#D4145A]/10 px-4 py-2 rounded-full"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4145A] animate-pulse" />
                            Why Orange Figs
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight"
                        >
                            The Orange Figs <br />
                            <span style={{
                                background: 'linear-gradient(135deg, #D4145A, #FCAB52)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                                Difference.
                            </span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-sm leading-relaxed text-lg lg:text-right"
                    >
                        We don't just teach cooking — we build confidence, creativity, and healthy habits that last a lifetime.
                    </motion.p>
                </div>

                {/* ── BENTO GRID ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5">

                    {/* Card 1 — Large feature card with image (spans 5 cols, 2 rows) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                        className="lg:col-span-5 lg:row-span-2 relative rounded-[2.5rem] overflow-hidden min-h-[480px] group"
                    >
                        <img
                            src={reasons[0].image}
                            alt={reasons[0].title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                        {/* Content */}
                        <div className="absolute inset-0 p-10 flex flex-col justify-between">
                            <div className="flex items-center justify-between">
                                <span className="text-7xl font-black text-white/10">01</span>
                                <div className="w-12 h-12 rounded-2xl bg-[#D4145A] flex items-center justify-center text-white">
                                    <UserCheck size={22} strokeWidth={2.5} />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-1 mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} className="fill-[#FCAB52] text-[#FCAB52]" />
                                    ))}
                                    <span className="text-white/60 text-xs ml-2">Parent Rated #1</span>
                                </div>
                                <h3 className="text-3xl font-black text-white leading-tight tracking-tight">
                                    Expert Instructors
                                </h3>
                                <p className="text-white/70 leading-relaxed">
                                    Guided by Michelin-experienced chefs who specialize in child development. Passionate, certified, and dedicated to every young chef's growth.
                                </p>
                                <div className="inline-flex items-center gap-2 text-[#D4145A] font-bold text-sm group-hover:gap-3 transition-all">
                                    Learn more <ArrowUpRight size={16} />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Cards 2, 3, 4 - Right side 7 cols */}
                    {reasons.slice(1).map((reason, index) => {
                        const Icon = reason.icon;
                        return (
                            <motion.div
                                key={reason.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * (index + 1), duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                className="lg:col-span-7 group relative rounded-[2rem] bg-white/[0.04] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.07] transition-all duration-500 p-8 flex gap-6 items-start cursor-default overflow-hidden"
                            >
                                {/* Number watermark */}
                                <span className="absolute right-6 bottom-4 text-8xl font-black text-white/[0.03] pointer-events-none select-none leading-none">
                                    {reason.number}
                                </span>

                                {/* Icon */}
                                <div
                                    className="relative shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                                    style={{ backgroundColor: reason.color }}
                                >
                                    <Icon size={24} strokeWidth={2.5} />
                                </div>

                                {/* Content */}
                                <div className="space-y-2 relative z-10">
                                    <h3 className="text-xl font-black text-white tracking-tight">
                                        {reason.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed text-[15px]">
                                        {reason.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* ── STATS BAR ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-5 rounded-[2rem] bg-white/[0.04] border border-white/[0.08] px-8 py-8 grid grid-cols-2 md:grid-cols-5 gap-8"
                >
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center space-y-1">
                            <div
                                className="text-4xl font-black tracking-tight"
                                style={{ color: ['#D4145A', '#FCAB52', '#74BB42', '#B42A63', '#366BC4'][i] }}
                            >
                                {stat.value}
                            </div>
                            <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};
