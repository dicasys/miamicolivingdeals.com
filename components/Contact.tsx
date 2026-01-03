import React from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact = () => {
    return (
        <div className="pt-20">
            {/* Contact Hero Section */}
            <section className="relative py-20 bg-brand-surface overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 backdrop-blur-sm">
                            <span className="text-brand-gold text-xs font-bold tracking-widest uppercase">Get In Touch</span>
                        </div>
                        <h1 className="font-serif text-4xl md:text-6xl font-medium text-white mb-6">
                            Contact Us
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                            Have questions about our high-yield co-living opportunities? We're here to help.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-24 bg-brand-dark">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-brand-surface p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl relative"
                        >
                            <h3 className="font-serif text-2xl text-white mb-6 text-center">Send us a Message</h3>

                            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                                {/* Web3Forms Access Key */}
                                <input type="hidden" name="access_key" value="d5a5092d-3cb7-49fd-bf2d-5700c5f870cf" />

                                {/* From Name for Email Subject */}
                                <input type="hidden" name="from_name" value="Miami Coliving Deals" />

                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                                        placeholder="Investment Inquiry"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors resize-none"
                                        placeholder="Tell us about your investment goals..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full relative px-8 py-4 rounded-md font-semibold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group bg-brand-gold text-brand-dark hover:bg-white hover:text-brand-dark shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.6)]"
                                >
                                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
                                    <span className="relative z-10 flex items-center gap-2">
                                        Submit <Send className="w-4 h-4" />
                                    </span>
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};
