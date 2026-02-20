import React, { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: 'The Cooper Family',
        content: 'Our kids ask for Baketivity every month! It\'s screen-free, hands-on fun that brings everyone into the kitchen. They\'re learning, laughing, and baking all at once!',
        rating: 5,
    },
    {
        id: 2,
        name: 'Amanda K.',
        content: 'We’re a homeschooling family, and this kit fits perfectly into our weekly routine. It’s cooking, reading, and math all rolled into one sweet experience!',
        rating: 5,
    },
    {
        id: 3,
        name: 'Kelly Dinger.',
        content: 'I bought a few kits for gifts, and now all my friends are hooked! Perfect for birthdays, holidays, or just a fun surprise.',
        rating: 5,
    },
    {
        id: 4,
        name: 'Nicole F.',
        content: 'We love how Baketivity combines fun and learning. My kids are practicing math, reading, and teamwork — and they don\'t even realize it. It\'s genius!',
        rating: 5,
    },
    {
        id: 5,
        name: 'Ben Saper.',
        content: 'I gifted Baketivity to my sister’s family, and they haven’t stopped raving about it. The kids loved it more than any toy. Best gift ever!',
        rating: 5,
    },
    {
        id: 6,
        name: 'Megan Aglow.',
        content: 'Baketivity turned our Sunday afternoon into the best family day ever. The kids worked together, learned patience, and had a blast. Plus, the treats came out delicious!',
        rating: 5,
    },
    {
        id: 7,
        name: 'Sarah Linter',
        content: 'Baketivity has become our favorite family tradition! The kids love measuring and mixing, and I love that it’s completely screen-free fun.',
        rating: 5,
    },
    {
        id: 8,
        name: 'David Miller',
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
    const next = useCallback(() => setPage((p) => (p + 1) % totalPages), []);

    useEffect(() => {
        const timer = setInterval(next, 7000);
        return () => clearInterval(timer);
    }, [next]);

    const visible = testimonials.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE);

    return (
        <section
            id="testimonials"
            className="overflow-hidden"
            style={{
                backgroundColor: '#FCAB52',
                paddingTop: '60px',
                paddingBottom: '20px'
            }}
        >
            <div className="container-custom">

                {/* ── Heading ── */}
                <h2 className="text-3xl lg:text-4xl font-black text-[#D4145A] text-center mb-12 tracking-tight">
                    See why families love us…
                </h2>

                {/* ── Cards Grid ── */}
                <div className="relative max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={page}
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -80 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-4"
                        >
                            {visible.map((t) => (
                                <div
                                    key={t.id}
                                    className="bg-white p-8 lg:p-9 shadow-sm relative flex flex-col gap-4"
                                    style={{
                                        borderRadius: '45px 45px 45px 5px',
                                        minHeight: '280px'
                                    }}
                                >
                                    {/* Left Pink Bar */}
                                    <div className="absolute left-0 top-10 bottom-10 w-1.5 bg-[#D4145A] rounded-r-full" />

                                    {/* Stars */}
                                    <div className="flex gap-0.5">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <Star key={i} size={18} className="fill-[#F9A825] text-[#F9A825]" />
                                        ))}
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-xl font-black text-gray-900 tracking-tight">{t.name}</h3>

                                    {/* Content */}
                                    <p className="text-gray-700 leading-relaxed text-base font-medium">
                                        {t.content}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* ── Controls (Baketivity Style) ── */}
                <div className="flex items-center justify-center gap-6 mt-10">
                    {/* Prev Circle */}
                    <button
                        onClick={prev}
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#D4145A] shadow-md hover:scale-105 transition-transform"
                    >
                        <ChevronLeft size={24} strokeWidth={2.5} />
                    </button>

                    {/* Indicators */}
                    <div className="flex items-center gap-3">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i)}
                                className={`h-2 rounded-full transition-all duration-500 bg-white ${i === page ? 'w-10' : 'w-3 opacity-40'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Next Circle */}
                    <button
                        onClick={next}
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#D4145A] shadow-md hover:scale-105 transition-transform"
                    >
                        <ChevronRight size={24} strokeWidth={2.5} />
                    </button>
                </div>

            </div>
        </section>
    );
};
