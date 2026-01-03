import React from 'react';
import { Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#161f32] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center mb-6">
              <img src="/logo.png" alt="Miami Co-Living" className="h-60 w-auto" />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Transforming real estate investment through high-yield coliving opportunities. We source, remodel, and manage properties for maximum returns.
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Why Coliving', 'Investment Model', 'Advantages', 'Turnkey Experience'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-400 text-sm hover:text-brand-gold transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {['Investor Deck', 'Case Studies', 'FAQ', 'Contact Us'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-400 text-sm hover:text-brand-gold transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">© 2024 Miami Co-Living Deals. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};