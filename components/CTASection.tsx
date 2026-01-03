import React from 'react';
import { Button } from './ui/Button';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export const CTASection = () => {
  return (
    <section className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-6 block"
        >
          Start Your Journey
        </motion.span>

        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-serif text-4xl md:text-6xl text-white mb-8"
        >
          Ready to Outperform the Market?
        </motion.h2>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
          Don't wait for the next market cycle to find yield. Join the investors who are already scaling their portfolios with the most resilient asset class in modern real estate.
        </p>

        <div className="flex justify-center">
          <a href="#contact">
            <Button variant="primary" className="text-lg px-12 py-4">
              <Calendar className="w-5 h-5" /> Schedule a Call with Our Team
            </Button>
          </a>
        </div>

        <p className="mt-8 text-slate-500 text-xs">
          Discover how we can help you build a recession-proof, high-yield portfolio today.
        </p>
      </div>
    </section>
  );
};