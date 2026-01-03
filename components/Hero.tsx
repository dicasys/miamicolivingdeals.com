import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2953&q=80"
          alt="Modern luxury Miami co-living property with contemporary architecture"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-brand-dark/80 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/50"></div>
      </div>

      {/* Animated Light Beams/Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 backdrop-blur-sm">
            <span className="text-brand-gold text-xs font-bold tracking-widest uppercase">High-Yield Real Estate Investments</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-medium leading-[1.1] text-white mb-8">
            The Future of Real Estate Yield: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-200">High-Margin Coliving</span> Investments
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Stop settling for single-digit returns. Leverage the "Space-as-a-Service" model
            to achieve multifamily margins with residential debt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary">
              View Current Opportunities <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="secondary">
              <Download className="w-4 h-4" /> Download Investor Deck
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-brand-gold to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};