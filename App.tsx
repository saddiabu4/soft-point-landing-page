import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"
import Analysis from "./components/Analysis"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import LoginView from "./components/LoginView"
import Logos from "./components/Logos"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import SignupView from "./components/SignupView"

// Fix: Define custom elements as variables to bypass JSX intrinsic element type checking
const SwiperContainer = "swiper-container" as any
const SwiperSlide = "swiper-slide" as any

// Separate View Components for full-page feel
const FeaturesView = () => (
	<motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
		className='pt-24 min-h-screen'
	>
		<Features />
		<div className='max-w-7xl mx-auto px-6 py-20'>
			<h2 className='text-3xl font-bold mb-10 text-center'>
				Nima uchun bizni tanlashadi?
			</h2>
			<SwiperContainer
				slides-per-view='1'
				space-between='30'
				pagination='true'
				breakpoints='{"768": {"slidesPerView": 2}, "1024": {"slidesPerView": 3}}'
			>
				{[1, 2, 3, 4, 5].map((i) => (
					<SwiperSlide key={i}>
						<div className='bg-slate-50 p-10 rounded-3xl border border-slate-100 h-64 flex flex-col justify-center'>
							<div className='text-emerald-500 font-bold mb-4'>Mijoz #{i}</div>
							<p className='text-slate-600 italic'>
								"Bu dastur bizning ish faoliyatimizni 2 barobarga tezlashtirdi.
								Tavsiya qilaman!"
							</p>
						</div>
					</SwiperSlide>
				))}
			</SwiperContainer>
		</div>
	</motion.div>
)

const PricingView = () => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		exit={{ opacity: 0 }}
		className='pt-24 min-h-screen'
	>
		<Pricing />
	</motion.div>
)

const DownloadView = () => (
	<motion.div
		initial={{ opacity: 0, scale: 0.9 }}
		animate={{ opacity: 1, scale: 1 }}
		exit={{ opacity: 0 }}
		className='pt-32 min-h-screen px-6'
	>
		<div className='max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden'>
			<div className='absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[100px]'></div>
			<h2 className='text-5xl font-black mb-8'>Tayyormisiz?</h2>
			<p className='text-xl text-slate-400 mb-12'>
				Ilovani hoziroq yuklab oling va raqamli transformatsiyani boshlang.
			</p>
			<div className='flex flex-wrap justify-center gap-6'>
				<button className='bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform'>
					iOS App Store
				</button>
				<button className='bg-emerald-500 text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform'>
					Google Play Store
				</button>
			</div>
		</div>
	</motion.div>
)

const App: React.FC = () => {
	type ViewType =
		| "home"
		| "login"
		| "signup"
		| "feature"
		| "pricing"
		| "download"
	const [currentView, setCurrentView] = useState<ViewType>("home")

	const handleNavigate = (view: ViewType) => {
		setCurrentView(view)
		window.scrollTo({ top: 0, behavior: "smooth" })
	}

	return (
		<div className='min-h-screen bg-white'>
			<Navbar onNavigate={handleNavigate as any} />

			<main>
				<AnimatePresence mode='wait'>
					{currentView === "home" && (
						<motion.div
							key='home'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<Hero />
							<Logos />
							<Features />
							<Analysis />
							<Pricing />
						</motion.div>
					)}

					{currentView === "feature" && <FeaturesView key='feature' />}
					{currentView === "pricing" && <PricingView key='pricing' />}
					{currentView === "download" && <DownloadView key='download' />}
					{currentView === "login" && (
						<LoginView key='login' onNavigate={handleNavigate as any} />
					)}
					{currentView === "signup" && (
						<SignupView key='signup' onNavigate={handleNavigate as any} />
					)}
				</AnimatePresence>
			</main>

			<Footer currentView={currentView} />
		</div>
	)
}

export default App
