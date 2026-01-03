import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { TrendingUp, DollarSign, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const StatCard = ({ icon: Icon, value, title, description, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5)" }}
    className="bg-brand-surface p-8 rounded-xl border border-white/5 hover:border-brand-gold/30 transition-all duration-300 group"
  >
    <div className="w-12 h-12 bg-brand-dark rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon className="text-brand-gold w-6 h-6" />
    </div>
    <h3 className="text-3xl font-serif text-brand-gold mb-2">{value}</h3>
    <h4 className="text-white font-semibold mb-3">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed border-t border-white/10 pt-3">
      {description}
    </p>
  </motion.div>
);

export const WhyColiving = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "30-50%",
      title: "Higher Operating Margins",
      description: "Compared to conventional multifamily buildings, maximizing efficiency."
    },
    {
      icon: DollarSign,
      value: "3X",
      title: "Rental Income",
      description: "Triple the income of standard investments on the same street."
    },
    {
      icon: Zap,
      value: "Day 1",
      title: "Positive Cash Flow",
      description: "Through optimized per-square-foot rents and turnkey delivery."
    },
    {
      icon: ShieldCheck,
      value: "100%",
      title: "Recession-Resistant",
      description: "Affordability is the ultimate hedge in any economy."
    }
  ];

  return (
    <section id="why-coliving" className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          eyebrow="Why Coliving?" 
          title="Unprecedented Financial Performance"
          description="Traditional residential investing is facing a squeeze. Coliving solves this by maximizing the efficiency of a property's footprint."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};