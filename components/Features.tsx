
import React from 'react';
import { motion } from 'framer-motion';
import { Settings, User, Lock, Code } from 'lucide-react';
import { FeatureCardProps } from '../types';

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, bgColor, iconColor }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-3xl border border-slate-50 soft-shadow transition-all group"
  >
    <div className={`w-14 h-14 rounded-2xl ${bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      <div className={iconColor}>{icon}</div>
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const Features: React.FC = () => {
  return (
    <section id="feature" className="py-24 px-6 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="grid sm:grid-cols-2 gap-6">
          <FeatureCard 
            icon={<Settings />}
            title="Easy Settings"
            description="A complete about-face in core economic amsterday bilamco progressive."
            bgColor="bg-red-50"
            iconColor="text-[#ff5f5f]"
          />
          <FeatureCard 
            icon={<User />}
            title="User Friendly"
            description="A complete about-face in core economic amsterday bilamco progressive."
            bgColor="bg-emerald-50"
            iconColor="text-emerald-500"
          />
          <FeatureCard 
            icon={<Lock />}
            title="Full secured"
            description="A complete about-face in core economic amsterday bilamco progressive."
            bgColor="bg-amber-50"
            iconColor="text-amber-500"
          />
          <FeatureCard 
            icon={<Code />}
            title="Clean Code"
            description="A complete about-face in core economic amsterday bilamco progressive."
            bgColor="bg-purple-50"
            iconColor="text-purple-500"
          />
        </div>

        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            A complete software solution for you.
          </h2>
          <p className="text-slate-500 mb-6 text-lg">
            The source of powerful qorld and making future sure. Its a straight forward software.
          </p>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Where possibilities are made possible. We must have expand <span className="font-bold text-slate-900">Possibilities of better tomorrow</span>. The directly secure of your network deliveing services.
          </p>
          <div className="flex items-center gap-6">
            <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">
              Learn more
            </button>
            <button className="text-[#ff5f5f] font-bold hover:underline flex items-center gap-2">
              Ask?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
