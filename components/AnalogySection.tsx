
import { motion } from 'framer-motion';
import { Plane, Users, TrendingDown } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export const AnalogySection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-brand-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <Plane className="w-96 h-96 text-white" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            {t('analogy.eyebrow')}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-8">
            {t('analogy.title')}
          </h2>
          <div className="space-y-6 text-slate-300 text-lg font-light leading-relaxed">
            <p>
              {t('analogy.p1')}
            </p>
            <p className="border-l-4 border-brand-gold pl-6 py-2 italic text-white font-normal">
              <Trans i18nKey="analogy.p2">
                Coliving is a <span className="text-brand-gold">multi-engine jet</span>. If one engine fails, the others keep the investment airborne and moving toward its financial destination without disruption.
              </Trans>
            </p>
          </div>
        </div>

        <div className="space-y-6 relative z-10">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-dark p-8 rounded-xl border border-white/5 shadow-xl hover:border-brand-gold/20 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="bg-brand-surface p-3 rounded-lg text-brand-gold">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif text-white mb-2">{t('analogy.cards.diversified.title')}</h3>
                <p className="text-slate-400 text-sm">
                  {t('analogy.cards.diversified.description')}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-brand-dark p-8 rounded-xl border border-white/5 shadow-xl hover:border-brand-gold/20 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="bg-brand-surface p-3 rounded-lg text-brand-gold">
                <TrendingDown className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif text-white mb-2">{t('analogy.cards.counterCyclical.title')}</h3>
                <p className="text-slate-400 text-sm">
                  {t('analogy.cards.counterCyclical.description')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};