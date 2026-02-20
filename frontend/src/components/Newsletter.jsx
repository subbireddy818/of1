import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Mail, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [formData, setFormData] = useState({ name: '', phone: '' });

    const handleSubscribe = (e) => {
        e.preventDefault();
        toast.success('Successfully registered for updates!');
        setEmail('');
        setFormData({ name: '', phone: '' });
    };

    return (
        <section className="py-24 bg-white overflow-hidden relative">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-[3rem] bg-gradient-to-r from-[#FCAB52] to-[#D4145A] p-12 lg:p-20 overflow-hidden shadow-2xl"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-white text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm font-black uppercase tracking-widest"
                            >
                                <Sparkles size={16} />
                                Stay in the loop
                            </motion.div>
                            <h2 className="text-4xl lg:text-6xl font-black tracking-tight leading-none">
                                Register for <br />
                                <span className="text-white/80">Weekly Updates</span>
                            </h2>
                            <p className="text-xl text-white/90 max-w-lg leading-relaxed font-medium">
                                Get special notifications about new workshops, holiday camps, and chef-approved home recipes.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-xl p-8 lg:p-10 rounded-[2.5rem] border border-white/20 shadow-2xl">
                            <form onSubmit={handleSubscribe} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <Input
                                        placeholder="Name"
                                        required
                                        className="h-14 rounded-2xl bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:ring-white/40"
                                        value={formData.name || ''}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                    <Input
                                        placeholder="Phone"
                                        required
                                        className="h-14 rounded-2xl bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:ring-white/40"
                                        value={formData.phone || ''}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" size={20} />
                                    <Input
                                        type="email"
                                        placeholder="Email Address"
                                        required
                                        className="h-14 pl-12 rounded-2xl bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:ring-white/40"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full h-16 rounded-2xl bg-white text-[#D4145A] hover:bg-white/90 font-black text-xl shadow-xl transition-all active:scale-95"
                                >
                                    Get Updates
                                </Button>
                                <p className="text-center text-white/60 text-sm font-medium">
                                    No spam, just culinary inspiration.
                                </p>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
