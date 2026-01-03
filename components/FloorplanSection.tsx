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
        <div className="bg-brand-dark rounded-3xl p-4 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-surface/50"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            
            {/* Left Side (Before) */}
            <div className="relative group">
              <div className="bg-white p-4 rounded-lg w-64 h-96 shadow-lg relative border-4 border-slate-200">
                 {/* Abstract room layout */}
                 <div className="absolute top-4 left-4 right-4 bottom-1/2 border-2 border-slate-300"></div>
                 <div className="absolute bottom-4 left-4 w-1/2 top-1/2 border-2 border-blue-500 bg-blue-100 flex items-center justify-center font-bold text-blue-900">BR1</div>
                 <div className="absolute bottom-4 right-4 w-1/3 top-2/3 border-2 border-blue-500 bg-blue-100 flex items-center justify-center font-bold text-blue-900">BR2</div>
                 <div className="absolute top-1/2 right-4 w-1/3 h-16 border-2 border-blue-500 bg-blue-100 flex items-center justify-center font-bold text-blue-900">BR3</div>
              </div>
              
              <div className="mt-6 text-center text-white">
                <h3 className="text-xl font-serif">Before</h3>
                <div className="mt-2 text-3xl font-bold">$1,649</div>
                <div className="text-sm text-slate-400">Monthly income</div>
              </div>

              {/* Floating Badge */}
              <motion.div 
                 initial={{ scale: 0.8, opacity: 0 }}
                 whileInView={{ scale: 1, opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-brand-surface border border-white/10 p-4 rounded-lg shadow-xl backdrop-blur-md"
              >
                <div className="text-brand-gold text-2xl font-bold">+154%</div>
                <div className="text-white text-xs">Income Increase</div>
              </motion.div>
            </div>

            {/* Divider */}
            <div className="h-px w-full lg:w-px lg:h-64 bg-slate-700"></div>

            {/* Right Side (After) */}
             <div className="relative group">
              <div className="bg-white p-4 rounded-lg w-64 h-96 shadow-lg relative border-4 border-slate-200">
                 {/* Abstract room layout dense */}
                 <div className="grid grid-cols-2 gap-2 h-full">
                    <div className="border-2 border-amber-500 bg-amber-100 flex items-center justify-center text-xs font-bold text-amber-900">BR1</div>
                    <div className="border-2 border-amber-500 bg-amber-100 flex items-center justify-center text-xs font-bold text-amber-900">BR2</div>
                    <div className="border-2 border-amber-500 bg-amber-100 flex items-center justify-center text-xs font-bold text-amber-900">BR3</div>
                    <div className="border-2 border-amber-500 bg-amber-100 flex items-center justify-center text-xs font-bold text-amber-900">BR4</div>
                    <div className="border-2 border-amber-500 bg-amber-100 flex items-center justify-center text-xs font-bold text-amber-900">BR5</div>
                    <div className="border-2 border-amber-500 bg-amber-100 flex items-center justify-center text-xs font-bold text-amber-900">BR6</div>
                    <div className="col-span-2 border-2 border-amber-500 bg-amber-100 flex items-center justify-center text-xs font-bold text-amber-900">BR7</div>
                 </div>
              </div>
              
              <div className="mt-6 text-center text-white">
                <h3 className="text-xl font-serif">After</h3>
                <div className="text-3xl font-bold">$4,183</div>
                <div className="text-sm text-slate-400">Monthly income</div>
              </div>

               {/* Floating Badge */}
               <motion.div 
                 initial={{ scale: 0.8, opacity: 0 }}
                 whileInView={{ scale: 1, opacity: 1 }}
                 transition={{ delay: 0.7 }}
                 className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-brand-surface border border-white/10 p-4 rounded-lg shadow-xl backdrop-blur-md"
              >
                <div className="text-brand-gold text-2xl font-bold">+3 Rooms</div>
                <div className="text-white text-xs">Added Units</div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};