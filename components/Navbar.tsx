import React from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onNavigate: (view: 'home' | 'login' | 'signup' | 'feature' | 'pricing' | 'download') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const navItems = [
    { name: 'Feature', id: 'feature' },
    { name: 'Download', id: 'download' },
    { name: 'Pricing', id: 'pricing' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => onNavigate('home')}
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-400 flex items-center justify-center transition-transform group-hover:rotate-12">
            <div className="w-4 h-4 rounded-full bg-white animate-pulse"></div>
          </div>
          <span className="font-black text-xl tracking-tighter text-slate-800 uppercase">SOFT POINT</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => onNavigate(item.id as any)}
              className="text-sm font-bold text-slate-500 hover:text-emerald-500 transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('login')}
            className="text-sm font-bold text-slate-700 hover:text-slate-900 px-5 py-2 transition-colors"
          >
            Login
          </button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('signup')}
            className="bg-[#ff5f5f] text-white text-sm font-bold px-7 py-3 rounded-xl shadow-xl shadow-red-200 hover:bg-red-500 transition-all"
          >
            Sign up
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;