
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    name: 'BASIC PLAN',
    price: 0,
    features: [
      { text: 'Limited Access Library', included: true, value: 'Yes' },
      { text: '100+ HTML UI Elements', included: false, value: 'No' },
      { text: 'Hotline Support 24/7', included: false, value: 'No' },
      { text: 'API & extension support', included: false, value: 'No' },
    ]
  },
  {
    name: 'PREMIUM PLAN',
    price: 130,
    isFeatured: true,
    features: [
      { text: 'Limited Access Library', included: true, value: 'Yes' },
      { text: '100+ HTML UI Elements', included: true, value: 'Yes' },
      { text: 'Hotline Support 24/7', included: true, value: 'No' },
      { text: 'API & extension support', included: true, value: 'No' },
    ]
  },
  {
    name: 'ULTIMATE PLAN',
    price: 210,
    features: [
      { text: 'Limited Access Library', included: true, value: 'Yes' },
      { text: '100+ HTML UI Elements', included: true, value: 'Yes' },
      { text: 'Hotline Support 24/7', included: true, value: 'Yes' },
      { text: 'API & extension support', included: true, value: 'Yes' },
    ]
  }
];

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');
  const [sliderVal, setSliderVal] = useState(50);

  return (
    <section id="pricing" className="py-24 px-6 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Best Pricing Plan</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Empowering the Internet Generation. Driving the Communication Revolution. Technology at the speed of life. Empowered by Innovation.
          </p>
        </div>

        <div className="flex flex-col items-center gap-10 mb-20">
          <div className="flex items-center gap-4 bg-white p-1 rounded-full border border-slate-200 shadow-sm">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${billingCycle === 'monthly' ? 'bg-emerald-400 text-white' : 'text-slate-400'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBillingCycle('quarterly')}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${billingCycle === 'quarterly' ? 'bg-emerald-400 text-white' : 'text-slate-400'}`}
            >
              Quarterly
            </button>
          </div>
          
          <div className="text-sm font-bold text-amber-500 flex items-center gap-2">
            Save up to 40% <span className="text-xl">⤴</span>
          </div>

          <div className="w-full max-w-md px-4">
             <div className="relative mb-8">
               <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-4 py-1 rounded text-sm font-bold">
                 ${Math.round(130 + (sliderVal - 50) * 2)}
               </div>
               <input 
                type="range" 
                value={sliderVal}
                onChange={(e) => setSliderVal(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-400" 
              />
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              whileHover={{ y: -10 }}
              className={`bg-white rounded-[2rem] p-10 border transition-all ${plan.isFeatured ? 'border-emerald-400 shadow-2xl shadow-emerald-100 ring-4 ring-emerald-50' : 'border-slate-100 shadow-xl'}`}
            >
              <div className="text-center mb-8">
                <h3 className="text-sm font-bold text-slate-400 tracking-widest mb-4 uppercase">{plan.name}</h3>
                <div className="text-5xl font-extrabold text-slate-900">${plan.price}</div>
              </div>

              <ul className="space-y-6 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3 font-medium text-slate-600">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${feature.included ? 'bg-emerald-100 text-emerald-500' : 'bg-slate-100 text-slate-400'}`}>
                        {feature.included ? <Check size={12} strokeWidth={3} /> : <X size={12} strokeWidth={3} />}
                      </div>
                      {feature.text}
                    </div>
                    <span className="font-bold text-slate-400">{feature.value}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.isFeatured ? 'bg-[#ff5f5f] text-white shadow-lg shadow-red-200 hover:bg-red-500' : 'bg-white border-2 border-slate-100 text-slate-400 hover:border-emerald-400 hover:text-emerald-400'}`}>
                {plan.isFeatured ? 'Buy Plan' : 'Buy Plan'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
