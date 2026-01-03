
import { SectionHeading } from './ui/SectionHeading';
import { Target, Heart, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const DemographicsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <SectionHeading
            eyebrow={t('demographics.eyebrow')}
            title={t('demographics.title')}
            center={false}
          />
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            {t('demographics.description')}
          </p>

          <div className="flex flex-wrap gap-4">
            <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/30 text-brand-gold text-sm bg-brand-gold/5">
              <Target size={16} /> {t('demographics.tags.target')}
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/30 text-brand-gold text-sm bg-brand-gold/5">
              <Heart size={16} /> {t('demographics.tags.preferences')}
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/30 text-brand-gold text-sm bg-brand-gold/5">
              <Smartphone size={16} /> {t('demographics.tags.tech')}
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-brand-surface p-8 rounded-xl border border-white/5 flex gap-6 items-center">
            <div className="text-5xl font-serif text-brand-gold font-bold">14M+</div>
            <div>
              <h4 className="text-white font-semibold text-lg">{t('demographics.stats.households.title')}</h4>
              <p className="text-slate-400 text-sm">{t('demographics.stats.households.description')}</p>
            </div>
          </div>

          <div className="bg-brand-surface p-8 rounded-xl border border-white/5 flex gap-6 items-center">
            <div className="text-5xl font-serif text-brand-gold font-bold">72%</div>
            <div>
              <h4 className="text-white font-semibold text-lg">{t('demographics.stats.generation.title')}</h4>
              <p className="text-slate-400 text-sm">{t('demographics.stats.generation.description')}</p>
            </div>
          </div>

          <div className="bg-brand-surface p-8 rounded-xl border border-white/5 flex gap-6 items-center">
            <div className="text-5xl font-serif text-brand-gold font-bold">#1</div>
            <div>
              <h4 className="text-white font-semibold text-lg">{t('demographics.stats.solution.title')}</h4>
              <p className="text-slate-400 text-sm">{t('demographics.stats.solution.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};