import React, { useRef } from 'react';
import { ChefHat, Star } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

export const Hero = () => {
    const heroRef = useRef(null);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative bg-white pt-[180px] pb-20" ref={heroRef}>
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Content */}
                    <div className="space-y-8 pt-12">
                        <div className="space-y-6">
                            <h1 className="text-5xl lg:text-[56px] font-black text-[#D4145A] leading-[1.1] tracking-tight">
                                Baking The World a <br />
                                Better Place <br />
                                Together.
                            </h1>
                            <p className="text-lg lg:text-xl text-gray-700 max-w-lg font-medium leading-relaxed">
                                Bring Your Family Closer – One Sweet Recipe at a Time.<br />
                                Bake, learn, and laugh with everything you need, <br />
                                delivered monthly.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button
                                onClick={() => scrollToSection('classes')}
                                className="h-14 px-10 rounded-full bg-[#D4145A] hover:bg-[#B42A63] text-white font-bold text-lg shadow-lg transition-all active:scale-95"
                            >
                                Subscribe
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => scrollToSection('contact')}
                                className="h-14 px-10 rounded-full border-2 border-[#D4145A] text-[#D4145A] hover:bg-[#D4145A] hover:text-white font-bold text-lg transition-all"
                            >
                                Give a Gift
                            </Button>
                        </div>

                        {/* Rating Badge - Matching Screenshot */}
                        <div className="pt-2 space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-black text-gray-900">1.2k+ Happy Kids</span>
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={18} className="fill-[#FCAB52] text-[#FCAB52]" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm font-medium">
                                350,000 kids learning and enjoying every month!
                            </p>
                        </div>
                    </div>

                    {/* Right Content - Special Leaf-Shape Image Card */}
                    <div className="relative lg:-mt-12">
                        <div className="rounded-tl-[3rem] rounded-tr-[10rem] rounded-bl-[10rem] rounded-br-[3rem] overflow-hidden shadow-2xl aspect-[1.1/1]">
                            <img
                                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80"
                                alt="Cooking with kids"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
