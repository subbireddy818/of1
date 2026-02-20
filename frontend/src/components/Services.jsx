import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChefHat, Cake, Utensils, Star } from 'lucide-react';


const services = [
    {
        id: 1,
        icon: ChefHat,
        tag: 'Ages 4–6',
        title: 'Little Chefs Foundation',
        description: 'A playful, hands-on introduction to the kitchen. Children discover the joy of cooking through simple, colorful recipes and fun food art.',
        features: ['Kitchen safety basics', 'Fruit & veggie art', 'Simple no-heat recipes'],
        color: '#FCAB52',
        bg: '#FFF8EE',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80',
    },
    {
        id: 2,
        icon: Utensils,
        tag: 'Ages 7–12',
        title: 'Junior Culinary Arts',
        description: 'Building real skills — from knife technique to sauce making. Kids tackle exciting recipes from around the world in a safe, guided environment.',
        features: ['Knife & chopping skills', 'Sauce & flavour building', 'Baking fundamentals'],
        color: '#D4145A',
        bg: '#FFF0F5',
        image: 'https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&q=80',
    },
    {
        id: 3,
        icon: Star,
        tag: 'Ages 13–17',
        title: 'Teen Masterclass',
        description: 'Advanced culinary techniques for ambitious teens. Master plating, international cuisines, and pastry arts under expert chef mentorship.',
        features: ['Pastry & dessert arts', 'International cuisines', 'Professional plating'],
        color: '#B42A63',
        bg: '#FDF0F5',
        image: 'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?auto=format&fit=crop&q=80',
    },
    {
        id: 4,
        icon: Cake,
        tag: 'All Ages',
        title: 'Private & Family Sessions',
        description: 'Book an exclusive session for your family or a group. Perfect for birthdays, special occasions, or a unique bonding experience everyone will love.',
        features: ['Flexible scheduling', 'Custom menu planning', 'Perfect for celebrations'],
        color: '#74BB42',
        bg: '#F2FBE8',
        image: 'https://images.unsplash.com/photo-1551218808-94e220e03107?auto=format&fit=crop&q=80',
    },
];

export const Services = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="classes" className="bg-white py-24 lg:py-32">
            <div className="container-custom">

                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
                    <div className="space-y-4 max-w-xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-block text-xs font-black uppercase tracking-[0.2em] text-[#D4145A] bg-[#FFF0F5] px-4 py-2 rounded-full"
                        >
                            Our Services
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight"
                        >
                            What We <span style={{ color: '#D4145A' }}>Offer</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-500 max-w-sm leading-relaxed"
                    >
                        From toddler-friendly kitchen play to advanced teen masterclasses — we have a program for every young chef.
                    </motion.p>
                </div>

                {/* Services Grid - 2 columns on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                className="group relative rounded-[2.5rem] overflow-hidden bg-white border border-gray-100 hover:shadow-[0_30px_70px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col"
                            >
                                {/* Image Panel */}
                                <div className="relative h-52 overflow-hidden shrink-0">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Color overlay */}
                                    <div
                                        className="absolute inset-0 opacity-30"
                                        style={{ backgroundColor: service.color }}
                                    />
                                    {/* Tag badge */}
                                    <div
                                        className="absolute top-5 left-5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-white shadow-lg"
                                        style={{ backgroundColor: service.color }}
                                    >
                                        {service.tag}
                                    </div>
                                </div>

                                {/* Content Panel */}
                                <div className="flex flex-col justify-between p-7 flex-1">
                                    <div className="space-y-5">
                                        {/* Icon */}
                                        <div
                                            className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md"
                                            style={{ backgroundColor: service.color }}
                                        >
                                            <Icon size={26} strokeWidth={2.5} />
                                        </div>

                                        <div>
                                            <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-500 leading-relaxed text-[15px]">
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* Features */}
                                        <ul className="space-y-2">
                                            {service.features.map((f, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                                                    <span
                                                        className="w-1.5 h-1.5 rounded-full shrink-0"
                                                        style={{ backgroundColor: service.color }}
                                                    />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA */}
                                    <button
                                        onClick={scrollToContact}
                                        className="mt-8 flex items-center gap-2 font-black text-sm uppercase tracking-widest transition-all group/btn"
                                        style={{ color: service.color }}
                                    >
                                        Enroll Now
                                        <ArrowRight
                                            size={16}
                                            className="transition-transform duration-300 group-hover/btn:translate-x-1"
                                        />
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
