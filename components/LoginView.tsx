import { motion } from "framer-motion"
import { ArrowRight, Lock, Mail } from "lucide-react"
import React from "react"
import ThreeScene from "./ThreeScene"

interface LoginViewProps {
	onNavigate: (view: "home" | "signup") => void
}

const LoginView: React.FC<LoginViewProps> = ({ onNavigate }) => {
	return (
		<div className='min-h-screen pt-20 relative flex items-center justify-center px-6 overflow-hidden'>
			<div className='absolute inset-0 z-0 opacity-20'>
				<ThreeScene />
			</div>

			<motion.div
				initial={{ opacity: 0, scale: 0.95, y: 20 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				exit={{ opacity: 0, scale: 0.95, y: 20 }}
				className='w-full max-w-md bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white shadow-2xl relative z-10'
			>
				<div className='text-center mb-10'>
					<h2 className='text-3xl font-black text-slate-900 mb-2'>
						Xush kelibsiz!
					</h2>
					<p className='text-slate-500 font-medium'>
						Tizimga kirish uchun ma'lumotlarni kiriting
					</p>
				</div>

				<div className='space-y-6'>
					<div className='space-y-2'>
						<label className='text-xs font-bold text-slate-400 uppercase tracking-widest ml-1'>
							Email
						</label>
						<div className='relative'>
							<Mail className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5' />
							<input
								type='email'
								placeholder='misol@mail.com'
								className='w-full pl-12 pr-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all'
							/>
						</div>
					</div>

					<div className='space-y-2'>
						<label className='text-xs font-bold text-slate-400 uppercase tracking-widest ml-1'>
							Parol
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

					<div className='flex items-center justify-end'>
						<button className='text-xs font-bold text-emerald-500 hover:underline'>
							Parolni unutdingizmi?
						</button>
					</div>

					<motion.button
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className='w-full bg-slate-900 text-white py-4 rounded-2xl font-black shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group'
					>
						Kirish{" "}
						<ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
					</motion.button>
				</div>

				<div className='mt-10 text-center'>
					<p className='text-slate-500 text-sm font-medium'>
						Hisobingiz yo'qmi?{" "}
						<button
							onClick={() => onNavigate("signup")}
							className='text-[#ff5f5f] font-bold hover:underline'
						>
							Ro'yxatdan o'tish
						</button>
					</p>
				</div>
			</motion.div>
		</div>
	)
}

export default LoginView
