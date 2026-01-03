import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ quote, author, role, image }: any) => (
  <div className="bg-brand-surface p-8 rounded-xl border border-white/5 relative">
    <Quote className="absolute top-8 right-8 text-brand-gold/10 w-12 h-12" />
    <div className="flex gap-1 text-brand-gold mb-6">
      {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
    </div>
    <p className="text-slate-300 text-sm leading-relaxed mb-6 italic relative z-10">
      "{quote}"
    </p>
    <div className="flex items-center gap-4">
      <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover border border-white/10" />
      <div>
        <h4 className="text-white font-bold text-sm">{author}</h4>
        <p className="text-slate-500 text-xs">{role}</p>
      </div>
    </div>
  </div>
);

export const Testimonials = () => {
  return (
    <section id="experience" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <SectionHeading 
          eyebrow="Testimonials"
          title="What Our Investors Say"
          description="Join hundreds of satisfied investors who have discovered the power of coliving investments."
        />

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <TestimonialCard 
            quote="The returns on my coliving investment have exceeded all expectations. The team handles everything from tenant placement to maintenance, making it truly passive income."
            author="Michael Rodriguez"
            role="Real Estate Investor • Miami, FL"
            image="https://randomuser.me/api/portraits/men/32.jpg"
          />
          <TestimonialCard 
            quote="I was skeptical at first, but after seeing the cash flow numbers and the professional management, I've now invested in three properties. Best decision I've made."
            author="Sarah Chen"
            role="Portfolio Investor • Orlando, FL"
            image="https://randomuser.me/api/portraits/women/44.jpg"
          />
          <TestimonialCard 
            quote="As someone new to real estate, the turnkey approach gave me confidence. Clear communication, transparent financials, and consistent monthly returns."
            author="David Thompson"
            role="First-Time Investor • Tampa, FL"
            image="https://randomuser.me/api/portraits/men/86.jpg"
          />
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-white/10 pt-12">
           <div className="text-center">
             <div className="text-brand-gold font-bold text-3xl">150+</div>
             <div className="text-slate-500 text-xs mt-1">Happy Investors</div>
           </div>
           <div className="text-center border-l border-r border-white/10">
             <div className="text-brand-gold font-bold text-3xl">$25M+</div>
             <div className="text-slate-500 text-xs mt-1">Assets Managed</div>
           </div>
           <div className="text-center">
             <div className="text-brand-gold font-bold text-3xl">4.9/5</div>
             <div className="text-slate-500 text-xs mt-1">Average Rating</div>
           </div>
        </div>
      </div>
    </section>
  );
};