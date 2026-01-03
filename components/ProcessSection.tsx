import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { motion } from 'framer-motion';

const StepCard = ({ number, title, subtitle, description }: any) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="relative p-8 border border-white/10 rounded-xl bg-gradient-to-br from-brand-surface to-brand-dark"
  >
    <div className="w-12 h-12 rounded-full border-2 border-brand-gold flex items-center justify-center text-brand-gold font-serif text-xl font-bold mb-6 mx-auto">
      {number}
    </div>
    <h3 className="text-xl text-white font-bold mb-2 text-center">{title}</h3>
    <h4 className="text-brand-gold text-sm font-medium mb-4 text-center uppercase tracking-wider">{subtitle}</h4>
    <p className="text-slate-400 text-sm text-center leading-relaxed">
      {description}
    </p>
  </motion.div>
);

export const ProcessSection = () => {
  return (
    <section className="py-24 bg-brand-surface border-t border-white/5">
      <div className="container mx-auto px-6">
        <SectionHeading 
          eyebrow="What We Do"
          title="The Coliving Advantage"
          description="We handle everything so you can enjoy passive income from your investment."
        />

        <div className="grid md:grid-cols-3 gap-8">
          <StepCard 
            number="1"
            title="Property Marketing"
            subtitle="Maximizing Property Exposure"
            description="We employ strategic marketing techniques to maximize your property's exposure and attract quality tenants. From professional photography to targeted advertising."
          />
          <StepCard 
            number="2"
            title="Tenant Relations"
            subtitle="Building Strong Tenant Relationships"
            description="Our focus goes beyond filling your property. We provide thorough screening with detailed questionnaires, prioritize open communication, and foster positive living experiences."
          />
          <StepCard 
            number="3"
            title="Property Maintenance"
            subtitle="Efficient Property Upkeep"
            description="We oversee all aspects of property maintenance, from regular upkeep to emergency repairs. Our goal is to maintain your property's value while ensuring tenant satisfaction."
          />
        </div>
      </div>
    </section>
  );
};