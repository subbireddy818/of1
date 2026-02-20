import React, { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Linter',
        role: 'Parent of two',
        content: 'Baketivity has become our favorite family tradition! The kids love measuring and mixing, and I love that it’s completely screen-free fun.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Jason & Emily R.',
        role: 'Homeschooling Family',
        content: 'We used Baketivity for our homeschool science lesson on measuring and following directions — and the kids didn’t even realize they were learning!',
        rating: 5,
    },
    {
        id: 3,
        name: 'Michelle Pinter.',
        role: 'Gift Buyer',
        content: 'This is the best gift I’ve ever given my niece! She spent hours baking with her mom and felt so proud of what she made.',
        rating: 5,
    },
    {
        id: 4,
        name: 'Hannah Mancer',
        role: 'Modern Mom',
        content: 'My daughter absolutely loved her first cooking class "all by herself." It built her confidence and gave us such special family time together.',
        rating: 5,
    },
    {
        id: 5,
        name: 'The Johnson Family',
        role: 'Active Kitchen Lovers',
        content: 'Rainy day? Orange Figs to the rescue! It\'s the perfect cozy-day activity — the kitchen smells amazing, and the kids are smiling.',
        rating: 5,
    },
    {
        id: 6,
        name: 'Nicole F.',
        role: 'Educational Enthusiast',
        content: 'We love how Orange Figs combines fun and learning. My kids are practising patience, reading, and teamwork — and they don\'t even realise it.',
        rating: 5,
    },
    {
        id: 7,
        name: 'Emma Thompson',
        role: 'Enthusiastic Aunt',
        content: 'The perfect weekend activity! My niece and nephew were so engaged, and the final results were absolutely delicious. Highly recommended!',
        rating: 5,
    },
    {
        id: 8,
        name: 'David Miller',
        role: 'Family First',
        content: 'Safe, educational, and most importantly, fun. Orange Figs has nailed the balance between learning and play perfectly.',
        rating: 5,
    },
    {
        id: 9,
        name: 'The Garcia Family',
        role: 'Culinary Explorers',
        content: 'We love the variety of recipes. Each month is a new adventure that we all look forward to as a family.',
        rating: 5,
    },
    {
        id: 10,
        name: 'Sophia Lee',
        role: 'Creative Kid',
        content: 'My daughter has always been creative, but cooking has given her a whole new outlet. She\'s so proud of her kitchen creations.',
        rating: 5,
    },
    {
        id: 11,
        name: 'Mark & Sarah',
        role: 'Happy Parents',
        content: 'A great way to bond. We\'ve learned as much as the kids have! The instructions are so clear even for beginners.',
        rating: 5,
    },
    {
        id: 12,
        name: 'The Robinson Family',
        role: 'Kitchen Team',
        content: 'Cooking together has become our favorite family time. Orange Figs makes it so easy and enjoyable for everyone involved.',
        rating: 5,
    },
];

const CARDS_PER_PAGE = 4;
const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE);

export const Testimonials = () => {
    const [page, setPage] = useState(0);

    const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
    const next = useCallback(() => setPage((p) => (p + 1) % totalPages), [totalPages]);

    useEffect(() => {
        const timer = setInterval(next, 8000);
        return () => clearInterval(timer);
    }, [next]);

    const visible = testimonials.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE);

    return (
        <section id="testimonials" className="py-32 relative overflow-hidden bg-[#FFFDF0]">
            {/* ── Premium Decorative Background ── */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#FFD966] rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FCAB52] rounded-full blur-[120px]" />
            </div>

            <div className="container-custom relative z-10">

                {/* ── Section Header ── */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full bg-[#D4145A]/10 text-[#D4145A] font-bold text-xs uppercase tracking-widest"
                    >
                        Success Stories
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight"
                    >
                        See why families <span className="text-[#D4145A]">love us…</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-24 h-1.5 bg-[#FCAB52] mx-auto rounded-full"
                    />
                </div>

                {/* ── Testimonials Grid ── */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={page}
                            initial={{ opacity: 0, scale: 0.98, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: -20 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        >
                            {visible.map((t) => (
                                <motion.div
                                    key={t.id}
                                    whileHover={{ y: -10 }}
                                    className="group relative bg-white p-8 lg:p-10 flex flex-col gap-6 transition-all duration-500"
                                    style={{
                                        borderRadius: '40px 40px 40px 0px',
                                        boxShadow: '0 20px 60px rgba(0,0,0,0.03)',
                                        border: '1px solid rgba(0,0,0,0.02)'
                                    }}
                                >
                                    {/* Quote Icon Overlay */}
                                    <div className="absolute top-6 right-6 text-gray-100 group-hover:text-[#D4145A]/10 transition-colors">
                                        <Quote size={48} strokeWidth={1} />
                                    </div>

                                    {/* Stars */}
                                    <div className="flex gap-1">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <Star key={i} size={16} className="fill-[#FCAB52] text-[#FCAB52]" />
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <p className="text-gray-600 leading-relaxed text-base flex-1 italic relative z-10">
                                        "{t.content}"
                                    </p>

                                    {/* Author Info */}
                                    <div className="flex items-center gap-4 mt-2 pt-6 border-t border-gray-50 tracking-tighter transition-all">
                                        <div>
                                            <h4 className="text-lg font-black text-gray-900 group-hover:text-[#D4145A] transition-colors">{t.name}</h4>
                                            <p className="text-xs font-bold text-[#FCAB52] tracking-widest uppercase">{t.role}</p>
                                        </div>
                                    </div>

                                    {/* Accent Decoration */}
                                    <div className="absolute bottom-[-1px] left-[-1px] w-10 h-10 bg-[#FCAB52] opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderRadius: '0 20px 0 0' }} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* ── Premium Controls ── */}
                <div className="flex items-center justify-between mt-20 max-w-sm mx-auto">
                    <button
                        onClick={prev}
                        className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#D4145A] hover:text-[#D4145A] hover:bg-white hover:shadow-xl transition-all duration-300"
                    >
                        <ChevronLeft size={28} strokeWidth={1.5} />
                    </button>

                    <div className="flex items-center gap-3">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i)}
                                className="group p-2"
                            >
                                <div className={`h-1.5 rounded-full transition-all duration-500 ${i === page ? 'w-10 bg-[#D4145A]' : 'w-2.5 bg-gray-200 group-hover:bg-gray-300'
                                    }`} />
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={next}
                        className="w-14 h-14 rounded-full bg-[#D4145A] flex items-center justify-center text-white shadow-xl shadow-[#D4145A]/20 hover:scale-110 hover:bg-[#B42A63] transition-all duration-300"
                    >
                        <ChevronRight size={28} strokeWidth={1.5} />
                    </button>
                </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute top-40 right-[10%] w-12 h-12 bg-[#D4145A]/5 rounded-full animate-bounce" />
            <div className="absolute bottom-40 left-[10%] w-8 h-8 bg-[#FCAB52]/10 rounded-full animate-pulse" />
        </section>
    );
};
