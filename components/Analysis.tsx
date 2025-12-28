
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Analysis: React.FC = () => {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section 1 */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Discover & growth <br />with analysis.
            </h2>
            <p className="text-slate-500 mb-8 text-lg">
              Software with new dimensions. The better future and information about the virtual world.
            </p>
            <ul className="space-y-4">
              {[
                'Software with new dimensions the better.',
                'Effortlessly manages all your information.',
                'Simple Solutions for Complex Connections.',
                'Complete business solutions for customers.'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                  <CheckCircle2 className="text-emerald-400 w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="relative">
            <img 
              src="https://picsum.photos/seed/analytics/800/600" 
              alt="Analysis Dashboard" 
              className="rounded-3xl shadow-2xl border border-slate-100"
            />
            <motion.div 
              animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs"
            >
              <div className="text-sm font-bold mb-4">Current Plan</div>
              <div className="bg-slate-50 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Teams Plan</div>
                  <div className="font-bold text-emerald-500">$99/mo</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">→</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid lg:grid-cols-2 gap-20 items-center flex-row-reverse">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <img 
              src="https://picsum.photos/seed/security/800/600" 
              alt="Security Dashboard" 
              className="rounded-3xl shadow-2xl border border-slate-100"
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Serving information <br />with security.
            </h2>
            <p className="text-slate-500 mb-6 leading-relaxed">
              The source of powerful qorld and making future sure. Paired with dynamic image of the actual tool for you.
            </p>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Where possibilities are made possible. We must have expand <span className="font-bold text-slate-900">Possibilities of better tomorrow</span>. The directly secure of your network deliveing services.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
