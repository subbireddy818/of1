import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: 'Hannah Mancer.',
        content: 'My daughter absolutely loved her first cooking class "all by herself." It built her confidence and gave us such special family time together.',
        rating: 5,
    },
    {
        id: 2,
        name: 'The Johnson Family',
        content: 'Rainy day? Orange Figs to the rescue! It\'s the perfect cozy-day activity — the kitchen smells amazing, and the kids are smiling the whole time.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Nicole F.',
        content: 'We love how Orange Figs combines fun and learning. My kids are practising patience, reading, and teamwork — and they don\'t even realise it. It\'s genius!',
        rating: 5,
    },
    {
        id: 4,
        name: 'Sarah Johnson',
        content: 'Orange Figs has completely changed how my son views vegetables. He now loves to help me prep dinner! The level of instruction is perfectly tailored for young kids.',
        rating: 5,
    },
    {
        id: 5,
        name: 'Michael Chen',
        content: 'The Junior Culinary Arts program is fantastic. Maya has learned real techniques — knife work, flavour balancing, and kitchen safety. It\'s the highlight of her week!',
        rating: 5,
    },
    {
        id: 6,
        name: 'Elena Rodriguez',
        content: 'I am so impressed with the attention to detail. Not only do they learn to cook, but they also learn about the culture and history behind the food. Truly world-class.',
        rating: 5,
    },
    {
        id: 7,
        name: 'Priya Sharma',
        content: 'My son used to be a picky eater. After just three sessions at Orange Figs, he was asking me to buy broccoli at the grocery store. Absolute miracle workers!',
        rating: 5,
    },
    {
        id: 8,
        name: 'James & Linda Carter',
        content: 'We booked a private family session for our daughter\'s birthday and it was the most memorable party we\'ve ever had. Every child left with a smile and a recipe card!',
        rating: 5,
    },
    {
        id: 9,
        name: 'Aisha Williams',
        content: 'The instructors are so patient and encouraging. My shy 7-year-old came out of her shell completely. She now talks about becoming a chef when she grows up!',
        rating: 5,
    },
    {
        id: 10,
        name: 'David Park',
        content: 'Outstanding programme. The curriculum is thoughtfully designed, the kitchen is spotless, and the kids genuinely look forward to every single class. Five stars, no question.',
        rating: 5,
    },
];

export const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const total = testimonials.length;
    const itemsPerView = 3;
    const maxIndex = total - itemsPerView;

    const next = useCallback(() => {
        setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const prev = () => {
        setCurrent((p) => (p <= 0 ? maxIndex : p - 1));
    };

    // Auto-advance every 5 seconds
    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <section id="testimonials" className="py-20 lg:py-24 overflow-hidden" style={{ backgroundColor: '#FCAB52' }}>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 text-center mb-12 tracking-tight px-4">
                See why families love us…
            </h2>

            {/* Slider Container */}
            <div className="relative px-6 lg:px-16 xl:px-28">
                <div className="overflow-hidden">
                    <motion.div
                        className="flex gap-5"
                        animate={{ x: `-${current * (100 / itemsPerView + (20 / itemsPerView))}%` }}
                        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                        style={{
                            // This calculation handles the gap offset: (100% / 3) + (gap/container_width)
                            // However, a simpler way for fixed items is using calc or just animating indices
                        }}
                    >
                        {testimonials.map((t) => (
                            <div
                                key={t.id}
                                className="min-w-full md:min-w-[calc(33.333%-1.25rem)] bg-white rounded-[1.5rem] p-8 flex flex-col gap-4 flex-shrink-0"
                                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
                            >
                                {/* Stars */}
                                <div className="flex gap-0.5">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} size={20} className="fill-[#FCAB52] text-[#FCAB52]" />
                                    ))}
                                </div>

                                {/* Name */}
                                <h3 className="text-lg font-black text-gray-900 tracking-tight">{t.name}</h3>

                                {/* Content */}
                                <p className="text-gray-600 leading-relaxed text-[15px]">{t.content}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-10">
                {/* Left Button - Not Pink */}
                <button
                    onClick={prev}
                    className="w-11 h-11 rounded-full border-2 border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                >
                    <ChevronLeft size={18} />
                </button>

                {/* Dots */}
                <div className="flex items-center gap-2">
                    {Array.from({ length: total - 2 }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`rounded-full transition-all duration-300 ${i === current
                                ? 'w-7 h-3 bg-[#D4145A]' // Dot active is pink
                                : 'w-3 h-3 bg-white/50 hover:bg-white/80'
                                }`}
                        />
                    ))}
                </div>

                {/* Right Button - Always Pink */}
                <button
                    onClick={next}
                    className="w-11 h-11 rounded-full bg-[#D4145A] text-white flex items-center justify-center hover:bg-[#B42A63] transition-all shadow-lg"
                >
                    <ChevronRight size={18} />
                </button>
            </div>
        </section>
    );
};
