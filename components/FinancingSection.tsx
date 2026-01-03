
import { SectionHeading } from './ui/SectionHeading';
import { Building2, RefreshCw, Receipt } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <section id="advantages" className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow={t('financing.eyebrow')}
          title={t('financing.title')}
          description={t('financing.description')}
        />

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Building2}
            title={t('financing.features.debt.title')}
            description={t('financing.features.debt.description')}
          />
          <FeatureCard
            icon={RefreshCw}
            title={t('financing.features.velocity.title')}
            description={t('financing.features.velocity.description')}
          />
          <FeatureCard
            icon={Receipt}
            title={t('financing.features.tax.title')}
            description={t('financing.features.tax.description')}
          />
        </div>
      </div>
    </section>
  );
};