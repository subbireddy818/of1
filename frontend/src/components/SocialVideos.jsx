import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Play, Heart, MessageCircle } from 'lucide-react';

const socialPosts = [
    {
        id: 1,
        type: 'video',
        thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80',
        likes: '1.2k',
        comments: '45'
    },
    {
        id: 2,
        type: 'video',
        thumbnail: 'https://images.unsplash.com/photo-1590424753062-3251f4912dff?auto=format&fit=crop&q=80',
        likes: '850',
        comments: '22'
    },
    {
        id: 3,
        type: 'video',
        thumbnail: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80',
        likes: '2.1k',
        comments: '110'
    },
    {
        id: 4,
        type: 'video',
        thumbnail: 'https://images.unsplash.com/photo-1588195541006-218206263884?auto=format&fit=crop&q=80',
        likes: '1.5k',
        comments: '64'
    }
];

export const SocialVideos = () => {
    return (
        <section className="section-padding bg-white overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-bold text-xs uppercase tracking-[0.2em]"
                        >
                            <Instagram size={16} />
                            Social Feed
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[0.9]"
                        >
                            Our Kitchen in <br />
                            <span className="gradient-text">Motion.</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="pb-2"
                    >
                        <a
                            href="https://www.instagram.com/orangefigs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-black text-gray-900 hover:text-primary transition-colors flex items-center gap-2 group"
                        >
                            Follow @orangefigs
                            <Instagram className="group-hover:rotate-12 transition-transform" />
                        </a>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {socialPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                            className="group relative aspect-[9/16] rounded-3xl overflow-hidden shadow-xl bg-gray-100 cursor-pointer"
                        >
                            <img
                                src={post.thumbnail}
                                alt="Social post"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-500">
                                    <Play fill="white" size={32} />
                                </div>
                                <div className="flex gap-4 text-white font-bold">
                                    <span className="flex items-center gap-1.5"><Heart size={20} /> {post.likes}</span>
                                    <span className="flex items-center gap-1.5"><MessageCircle size={20} /> {post.comments}</span>
                                </div>
                            </div>

                            {/* Social Icon Corner */}
                            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                                <Instagram size={20} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
