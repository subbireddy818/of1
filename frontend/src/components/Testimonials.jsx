import React, { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: 'Amanda K.',
        content: 'We’re a homeschooling family, and this kit fits perfectly into our weekly routine. It’s cooking, reading, and math all rolled into one sweet experience!',
        rating: 5,
    },
    {
        id: 2,
        name: 'Kelly Dinger.',
        content: 'I bought a few kits for gifts, and now all my friends are hooked! Perfect for birthdays, holidays, or just a fun surprise.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Megan Aglow.',
        content: 'Baketivity turned our Sunday afternoon into the best family day ever. The kids worked together, learned patience, and had a blast. Plus, the treats came out delicious!',
        rating: 5,
    },
    {
        id: 4,
        name: 'Sarah Linter',
        content: 'Baketivity has become our favorite family tradition! The kids love measuring and mixing, and I love that it’s completely screen-free fun.',
        rating: 5,
    },
    {
        id: 5,
        name: 'The Johnson Family',
        content: 'Rainy day? Orange Figs to the rescue! It\'s the perfect cozy-day activity — the kitchen smells amazing, and the kids are smiling.',
        rating: 5,
    },
    {
        id: 6,
        name: 'Nicole F.',
        content: 'We love how Orange Figs combines fun and learning. My kids are practising patience, reading, and teamwork — and they don\'t even realise it.',
        rating: 5,
    },
    {
        id: 7,
        name: 'Emma Thompson',
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
        content: 'We love the variety of recipes. Each month is a new adventure that we all look forward to as a family.',
        rating: 5,
    },
    {
        id: 10,
        name: 'Sophia Lee',
        content: 'My daughter has always been creative, but cooking has given her a whole new outlet. She\'s so proud of her kitchen creations.',
        rating: 5,
    },
    {
        id: 11,
        name: 'Mark & Sarah',
        content: 'A great way to bond. We\'ve learned as much as the kids have! The instructions are so clear even for beginners.',
        rating: 5,
    },
    {
        id: 12,
        name: 'The Robinson Family',
        content: 'Cooking together has become our favorite family time. Orange Figs makes it so easy and enjoyable for everyone involved.',
        rating: 5,
    },
];

const CARDS_PER_PAGE = 3;
const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE);

export const Testimonials = () => {
    const [page, setPage] = useState(0);

    const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
    const next = useCallback(() => setPage((p) => (p + 1) % totalPages), [totalPages]);

    useEffect(() => {
        const timer = setInterval(next, 7000);
        return () => clearInterval(timer);
    }, [next]);

    const visible = testimonials.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE);

    return (
        <section id="testimonials" className="py-24 overflow-hidden" style={{ backgroundColor: '#FFD966' }}>
            <div className="container-custom">

                {/* ── Heading ── */}
                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 text-center mb-20 tracking-tight">
                    See why families love us…
                </h2>

                {/* ── Cards Grid ── */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={page}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            {visible.map((t) => (
                                <div
                                    key={t.id}
                                    className="bg-white p-10 lg:p-12 shadow-sm relative flex flex-col gap-6"
                                    style={{
                                        borderRadius: '60px 5px 60px 60px',
                                        minHeight: '380px'
                                    }}
                                >
                                    {/* Left Pink Bar */}
                                    <div className="absolute left-0 top-12 bottom-12 w-1.5 bg-[#D4145A] rounded-r-full" />

                                    {/* Stars */}
                                    <div className="flex gap-1">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <Star key={i} size={24} className="fill-[#F9A825] text-[#F9A825]" />
                                        ))}
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-2xl font-black text-gray-900 tracking-tight">{t.name}</h3>

                                    {/* Content */}
                                    <p className="text-gray-800 leading-relaxed text-lg font-medium">
                                        {t.content}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* ── Precision Controls (Baketivity Style) ── */}
                <div className="flex items-center justify-center gap-8 mt-16">
                    {/* Prev Circle */}
                    <button
                        onClick={prev}
                        className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#D4145A] shadow-lg hover:scale-110 transition-transform"
                    >
                        <ChevronLeft size={32} strokeWidth={2.5} />
                    </button>

                    {/* Dotted/Dashed Indicators */}
                    <div className="flex items-center gap-4">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i)}
                                className={`h-2.5 rounded-full transition-all duration-500 bg-white ${i === page ? 'w-14' : 'w-4 opacity-40'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Next Circle */}
                    <button
                        onClick={next}
                        className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#D4145A] shadow-lg hover:scale-110 transition-transform"
                    >
                        <ChevronRight size={32} strokeWidth={2.5} />
                    </button>
                </div>

            </div>
        </section>
    );
};
