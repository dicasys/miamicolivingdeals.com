import React from 'react';
import { motion } from 'framer-motion';

export const FloorplanSection = () => {
  return (
    <section id="the-model" className="py-24 bg-[#fdfaf5] text-brand-dark relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
            Optimized Floor Plans
          </h2>
          <p className="text-slate-600">
            By transforming a traditional layout into a high-utility coliving space—such as converting a three-bedroom home into a seven-bedroom asset—we unlock a new tier of profitability.
          </p>
        </div>

        {/* Mock Floorplan Visualization - Using CSS to simulate the distinct layout style */}
        {/* Optimized Floorplan Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl shadow-2xl overflow-hidden border border-slate-200"
        >
          <img
            src="/optimized-floorplan.png"
            alt="Floor plan comparison showing Before vs After transformation"
            className="w-full h-auto"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};