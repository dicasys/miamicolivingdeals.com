import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Building2, RefreshCw, Receipt } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-brand-surface p-10 rounded-2xl border border-white/5 text-center group hover:border-brand-gold/30 transition-all duration-300"
  >
    <div className="w-14 h-14 mx-auto bg-brand-dark border border-brand-gold/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors duration-300 text-brand-gold">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-serif text-white mb-4">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">
      {description}
    </p>
  </motion.div>
);

export const FinancingSection = () => {
  return (
    <section id="advantages" className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          eyebrow="Financing Wizardry"
          title="Superior Debt & Tax Advantages"
          description="We don't just find great properties; we utilize strategic financing to maximize your internal rate of return (IRR)."
        />

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Building2}
            title="Residential Debt, Commercial Returns"
            description="Leverage 30-year fixed-rate debt on properties that produce multifamily-level cash flow, avoiding the volatility of commercial bridge loans."
          />
          <FeatureCard 
            icon={RefreshCw}
            title="Velocity of Capital"
            description="Our high cash-flow model allows for swift refinancing maneuvers, often enabling investors to recoup their initial capital tax-free within months."
          />
          <FeatureCard 
            icon={Receipt}
            title="Tax Optimization"
            description="Maximize depreciation benefits and leverage cost segregation studies to significantly reduce your tax burden from day one."
          />
        </div>
      </div>
    </section>
  );
};