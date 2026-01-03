import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { motion } from 'framer-motion';

export const Testimonials = () => {
  return (
    <section id="experience" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Investors Say"
          description="Hear directly from real investors about their experience with Miami co-living investments."
        />

        {/* YouTube Video Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-brand-surface">
            <div className="aspect-[9/16] md:aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Aw4F28a_y0A"
                title="Investor Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-white/10 pt-12">
          <div className="text-center">
            <div className="text-brand-gold font-bold text-3xl">150+</div>
            <div className="text-slate-500 text-xs mt-1">Happy Investors</div>
          </div>
          <div className="text-center border-l border-r border-white/10">
            <div className="text-brand-gold font-bold text-3xl">$25M+</div>
            <div className="text-slate-500 text-xs mt-1">Assets Managed</div>
          </div>
          <div className="text-center">
            <div className="text-brand-gold font-bold text-3xl">4.9/5</div>
            <div className="text-slate-500 text-xs mt-1">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};