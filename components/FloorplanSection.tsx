
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const FloorplanSection = () => {
  const { t } = useTranslation();

  return (
    <section id="the-model" className="py-24 bg-[#1E293B] text-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
            {t('floorplan.title')}
          </h2>
          <p className="text-slate-300">
            {t('floorplan.description')}
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