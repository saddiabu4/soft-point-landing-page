
import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Smartphone } from 'lucide-react';
import ThreeScene from './ThreeScene';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10"
        >
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
            Develop Your Life <br />
            With <span className="text-emerald-400">One Step...</span>
          </h1>
          <p className="text-lg text-slate-500 mb-8 max-w-lg leading-relaxed">
            Pushing the possibilities of the internet. Good for the last software. Make it A software night.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <div className="relative flex-1 max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 focus:border-emerald-400 transition-all shadow-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-[#ff5f5f] text-white px-6 rounded-lg font-bold shadow-md hover:bg-red-500 transition-colors">
                Send
              </button>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex items-center gap-3 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
              <Smartphone className="w-8 h-8" />
              <div className="text-xs font-semibold leading-tight">
                Android App on <br />
                <span className="text-slate-900 text-sm">GOOGLE PLAY</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
              <Apple className="w-8 h-8" />
              <div className="text-xs font-semibold leading-tight">
                Available on the <br />
                <span className="text-slate-900 text-sm">Apple Store</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-full flex items-center justify-center"
        >
          {/* 3D Background Element */}
          <div className="absolute inset-0 z-0 opacity-40">
            <ThreeScene />
          </div>
          
          {/* Mockup Overlay */}
          <div className="relative z-10 w-full max-w-lg drop-shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700">
            <img 
              src="https://picsum.photos/seed/dashboard/800/600" 
              alt="Software Dashboard" 
              className="rounded-3xl border-8 border-slate-900 shadow-2xl"
            />
            {/* Float Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -left-10 top-1/4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">$</div>
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-bold">Balance</div>
                <div className="text-lg font-bold">$12,870.45</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -right-6 bottom-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100"
            >
              <div className="text-xs text-slate-400 mb-2">Storage Used</div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border-4 border-emerald-400 flex items-center justify-center text-xs font-bold">65%</div>
                <div>
                  <div className="font-bold">256 GB</div>
                  <div className="text-[10px] text-slate-400">Total Space</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
