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
          className="max-w-4xl mx-auto"
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
      </div>
    </section>
  );
};