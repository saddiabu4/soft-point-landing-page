import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"

interface NavbarProps {
	onNavigate: (
		view: "home" | "login" | "signup" | "feature" | "pricing" | "download"
	) => void
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const navItems = [
		{ name: "Feature", id: "feature" },
		{ name: "Download", id: "download" },
		{ name: "Pricing", id: "pricing" },
	]

	const handleNavigate = (view: any) => {
		onNavigate(view)
		setIsMenuOpen(false)
	}

	return (
		<nav className='fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-100'>
			<div className='max-w-7xl mx-auto px-6 h-20 flex items-center justify-between'>
				<div
					className='flex items-center gap-2 cursor-pointer group'
					onClick={() => handleNavigate("home")}
				>
					<div className='w-10 h-10 rounded-xl bg-emerald-400 flex items-center justify-center transition-transform group-hover:rotate-12'>
						<div className='w-4 h-4 rounded-full bg-white animate-pulse'></div>
					</div>
					<span className='font-black text-xl tracking-tighter text-slate-800 uppercase'>
						SOFT POINT
					</span>
				</div>

				{/* Desktop Navigation */}
				<div className='hidden md:flex items-center gap-10'>
					{navItems.map((item) => (
						<button
							key={item.id}
							onClick={() => handleNavigate(item.id as any)}
							className='text-sm font-bold text-slate-500 hover:text-emerald-500 transition-colors relative group'
						>
							{item.name}
							<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full'></span>
						</button>
					))}
				</div>

				{/* Desktop Buttons */}
				<div className='hidden md:flex items-center gap-4'>
					<button
						onClick={() => handleNavigate("login")}
						className='text-sm font-bold text-slate-700 hover:text-slate-900 px-5 py-2 transition-colors'
					>
						Login
					</button>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={() => handleNavigate("signup")}
						className='bg-[#ff5f5f] text-white text-sm font-bold px-7 py-3 rounded-xl shadow-xl shadow-red-200 hover:bg-red-500 transition-all'
					>
						Sign up
					</motion.button>
				</div>

				{/* Mobile Hamburger Menu */}
				<div className='md:hidden flex items-center gap-3'>
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className='relative w-8 h-8 flex flex-col justify-center items-center gap-1.5'
					>
						<motion.span
							animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
							className='w-6 h-0.5 bg-slate-800 rounded-full transition-all'
						/>
						<motion.span
							animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
							className='w-6 h-0.5 bg-slate-800 rounded-full transition-all'
						/>
						<motion.span
							animate={
								isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
							}
							className='w-6 h-0.5 bg-slate-800 rounded-full transition-all'
						/>
					</button>
				</div>
			</div>

			{/* Mobile Menu Dropdown */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className='md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl'
					>
						<div className='px-6 py-4 space-y-3'>
							{navItems.map((item) => (
								<button
									key={item.id}
									onClick={() => handleNavigate(item.id as any)}
									className='block w-full text-left text-sm font-bold text-slate-600 hover:text-emerald-500 py-3 px-3 rounded-lg hover:bg-slate-50 transition-colors'
								>
									{item.name}
								</button>
							))}
							<div className='border-t border-slate-100 pt-3 space-y-2'>
								<button
									onClick={() => handleNavigate("login")}
									className='block w-full text-left text-sm font-bold text-slate-700 hover:text-slate-900 py-3 px-3 rounded-lg hover:bg-slate-50 transition-colors'
								>
									Login
								</button>
								<motion.button
									whileTap={{ scale: 0.95 }}
									onClick={() => handleNavigate("signup")}
									className='w-full bg-[#ff5f5f] text-white text-sm font-bold py-3 rounded-xl shadow-lg shadow-red-200 hover:bg-red-500 transition-all'
								>
									Sign up
								</motion.button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}

export default Navbar
