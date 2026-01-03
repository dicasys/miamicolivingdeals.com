import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Target, Heart, Smartphone } from 'lucide-react';

export const DemographicsSection = () => {
  return (
    <section className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <SectionHeading 
            eyebrow="Capturing Massive Demand" 
            title="Targeting the Largest Segment of the American Labor Force"
            center={false}
          />
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            We're focused on Millennials and Gen Z—the demographics reshaping how America lives. 
            Modern renters value flexibility, the sharing economy, and all-inclusive convenience 
            over long-term leases and utility bills.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/30 text-brand-gold text-sm bg-brand-gold/5">
                <Target size={16} /> Targeted Demographics
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/30 text-brand-gold text-sm bg-brand-gold/5">
                <Heart size={16} /> Modern Preferences
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/30 text-brand-gold text-sm bg-brand-gold/5">
                <Smartphone size={16} /> Tech-Forward Living
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-brand-surface p-8 rounded-xl border border-white/5 flex gap-6 items-center">
            <div className="text-5xl font-serif text-brand-gold font-bold">14M+</div>
            <div>
              <h4 className="text-white font-semibold text-lg">Single-person households</h4>
              <p className="text-slate-400 text-sm">Earn less than $35K/year and are currently priced out of the traditional market.</p>
            </div>
          </div>
          
          <div className="bg-brand-surface p-8 rounded-xl border border-white/5 flex gap-6 items-center">
            <div className="text-5xl font-serif text-brand-gold font-bold">72%</div>
            <div>
              <h4 className="text-white font-semibold text-lg">Millennials & Gen Z</h4>
              <p className="text-slate-400 text-sm">Prefer flexibility and all-inclusive convenience over ownership.</p>
            </div>
          </div>

          <div className="bg-brand-surface p-8 rounded-xl border border-white/5 flex gap-6 items-center">
            <div className="text-5xl font-serif text-brand-gold font-bold">#1</div>
            <div>
              <h4 className="text-white font-semibold text-lg">Housing Crisis Solution</h4>
              <p className="text-slate-400 text-sm">Addressing the national affordability gap head-on.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};