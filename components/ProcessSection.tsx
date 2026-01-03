
import { SectionHeading } from './ui/SectionHeading';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-brand-surface border-t border-white/5">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow={t('process.eyebrow')}
          title={t('process.title')}
          description={t('process.description')}
        />

        <div className="grid md:grid-cols-3 gap-8">
          <StepCard
            number="1"
            title={t('process.steps.marketing.title')}
            subtitle={t('process.steps.marketing.subtitle')}
            description={t('process.steps.marketing.description')}
          />
          <StepCard
            number="2"
            title={t('process.steps.relations.title')}
            subtitle={t('process.steps.relations.subtitle')}
            description={t('process.steps.relations.description')}
          />
          <StepCard
            number="3"
            title={t('process.steps.maintenance.title')}
            subtitle={t('process.steps.maintenance.subtitle')}
            description={t('process.steps.maintenance.description')}
          />
        </div>
      </div>
    </section>
  );
};