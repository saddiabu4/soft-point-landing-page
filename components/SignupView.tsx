import React from "react"
import { motion } from "framer-motion"
import { User, Mail, Lock, ArrowRight, ShieldCheck } from "lucide-react"
import ThreeScene from "./ThreeScene"

interface SignupViewProps {
	onNavigate: (view: "home" | "login") => void
}

const SignupView: React.FC<SignupViewProps> = ({ onNavigate }) => {
	return (
		<div className='min-h-screen pt-20 relative flex items-center justify-center px-6 overflow-hidden'>
			<div className='absolute inset-0 z-0 opacity-20 transform scale-110 rotate-12'>
				<ThreeScene />
			</div>

			<motion.div
				initial={{ opacity: 0, scale: 0.95, x: 20 }}
				animate={{ opacity: 1, scale: 1, x: 0 }}
				exit={{ opacity: 0, scale: 0.95, x: -20 }}
				className='w-full max-w-lg bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white shadow-2xl relative z-10'
			>
				<div className='text-center mb-10'>
					<div className='w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
						<ShieldCheck className='text-emerald-500 w-8 h-8' />
					</div>
					<h2 className='text-3xl font-black text-slate-900 mb-2'>
						Hisob yaratish
					</h2>
					<p className='text-slate-500 font-medium'>
						Bizning jamoaga qo'shiling va kelajakni boshlang
					</p>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
					<div className='space-y-2'>
						<label className='text-xs font-bold text-slate-400 uppercase tracking-widest ml-1'>
							Ism
						</label>
						<div className='relative'>
							<User className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5' />
							<input
								type='text'
								placeholder='Aziz'
								className='w-full pl-12 pr-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all'
							/>
						</div>
					</div>
					<div className='space-y-2'>
						<label className='text-xs font-bold text-slate-400 uppercase tracking-widest ml-1'>
							Familiya
						</label>
						<input
							type='text'
							placeholder='Karimov'
							className='w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all'
						/>
					</div>
				</div>

				<div className='space-y-6'>
					<div className='space-y-2'>
						<label className='text-xs font-bold text-slate-400 uppercase tracking-widest ml-1'>
							Email manzili
						</label>
						<div className='relative'>
							<Mail className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5' />
							<input
								type='email'
								placeholder='aziz@softpoint.uz'
								className='w-full pl-12 pr-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all'
							/>
						</div>
					</div>

					<div className='space-y-2'>
						<label className='text-xs font-bold text-slate-400 uppercase tracking-widest ml-1'>
							Parol o'rnating
						</label>
						<div className='relative'>
							<Lock className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5' />
							<input
								type='password'
								placeholder='••••••••'
								className='w-full pl-12 pr-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all'
							/>
						</div>
					</div>

					<div className='flex items-center gap-3 px-1'>
						<input
							type='checkbox'
							id='terms'
							className='w-5 h-5 rounded-lg accent-emerald-500'
						/>
						<label
							htmlFor='terms'
							className='text-xs text-slate-500 font-medium cursor-pointer'
						>
							Men{" "}
							<span className='text-slate-900 font-bold'>
								Foydalanish shartlari
							</span>{" "}
							va{" "}
							<span className='text-slate-900 font-bold'>
								Maxfiylik siyosati
							</span>
							ga roziman
						</label>
					</div>

					<motion.button
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className='w-full bg-[#ff5f5f] py-4 rounded-2xl font-black shadow-xl shadow-red-200 hover:bg-red-500 transition-all flex items-center justify-center gap-2 group'
					>
						Hisob yaratish{" "}
						<ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
					</motion.button>
				</div>

				<div className='mt-10 text-center'>
					<p className='text-slate-500 text-sm font-medium'>
						Hisobingiz bormi?{" "}
						<button
							onClick={() => onNavigate("login")}
							className='text-emerald-500 font-bold hover:underline'
						>
							Kirish
						</button>
					</p>
				</div>
			</motion.div>
		</div>
	)
}

export default SignupView
