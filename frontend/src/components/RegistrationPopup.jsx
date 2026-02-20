import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from 'sonner';
import { ChefHat, X } from 'lucide-react';

export const RegistrationPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            const hasSeenPopup = localStorage.getItem('hasSeenRegistrationPopup');
            if (!hasSeenPopup) {
                setIsOpen(true);
            }
        }, 5000); // Show after 5 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Thank you! Your mystery discount is on its way.');
        localStorage.setItem('hasSeenRegistrationPopup', 'true');
        setIsOpen(false);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent hideClose className="sm:max-w-[850px] p-0 overflow-hidden border-[4px] border-[#D4145A] rounded-[3.5rem] bg-white shadow-2xl flex flex-col md:flex-row h-[500px]">
                {/* Left side: Image */}
                <div className="relative w-full md:w-1/2 h-48 md:h-full bg-gray-100">
                    <img
                        src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80"
                        alt="Cooking"
                        className="w-full h-full object-cover"
                    />
                    {/* Wavy Separator for Desktop */}
                    <div className="absolute top-0 -right-1 h-full w-24 z-10 hidden md:block">
                        <svg viewBox="0 0 100 500" preserveAspectRatio="none" className="h-full w-full fill-white">
                            <path d="M0,0 C50,150 50,350 0,500 L100,500 L100,0 Z" />
                        </svg>
                    </div>
                </div>

                {/* Right side: Form */}
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center text-center relative">
                    <DialogClose className="absolute right-6 top-6 w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-[#D4145A] hover:bg-pink-100 transition-colors">
                        <X size={20} />
                    </DialogClose>

                    <div className="space-y-8 max-w-[320px] mx-auto">
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-xl font-black italic tracking-tighter text-[#D4145A] font-serif">
                                    OrangeFigs
                                </span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                                You've Got A <br />
                                <span className="text-[#D4145A]">Mystery Discount</span>
                            </h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <Input
                                type="email"
                                placeholder="Your email address"
                                required
                                className="h-14 px-6 rounded-full border-gray-200 bg-gray-50/50 text-center text-lg font-medium focus:ring-2 focus:ring-[#D4145A]/20"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Button type="submit" className="w-full h-14 rounded-full bg-[#D4145A] hover:bg-[#B42A63] text-white font-black text-xl shadow-xl transition-all active:scale-95">
                                Continue
                            </Button>
                        </form>

                        <p className="text-sm text-gray-400 font-medium">
                            Enter your email to reveal your surprise!
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
