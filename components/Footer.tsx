
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = t('footer.quickLinks.links', { returnObjects: true }) as string[];
  const resourceLinks = t('footer.resources.links', { returnObjects: true }) as string[];

  return (
    <footer className="bg-[#161f32] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center mb-6">
              <img src="/logo.png" alt="Miami Co-Living" className="h-60 w-auto" />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">{t('footer.quickLinks.title')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-400 text-sm hover:text-brand-gold transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">{t('footer.resources.title')}</h4>
            <ul className="space-y-3">
              {resourceLinks.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-400 text-sm hover:text-brand-gold transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">{t('footer.copyright')}</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};