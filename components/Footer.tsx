import React from "react"

type ViewType = "home" | "login" | "signup" | "feature" | "pricing" | "download"

interface FooterProps {
	currentView?: ViewType
}

const Footer: React.FC<FooterProps> = ({ currentView = "home" }) => {
	// Hide footer on mobile when user is logged in or signed up
	const isAuthView = currentView === "login" || currentView === "signup"
	const shouldHideOnMobile = isAuthView

	return (
		<footer
			className={`bg-white pt-20 pb-12 px-6 border-t border-slate-100 ${
				shouldHideOnMobile ? "hidden md:block" : ""
			}`}
		>
			<div className='max-w-7xl mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
					<div className='col-span-1'>
						<div className='flex items-center gap-2 mb-6'>
							<div className='w-8 h-8 rounded-full bg-emerald-400 flex items-center justify-center'>
								<div className='w-3 h-3 rounded-full bg-white'></div>
							</div>
							<span className='font-bold text-xl tracking-tight text-slate-800'>
								SOFT POINT
							</span>
						</div>
						<p className='text-slate-400 text-sm leading-relaxed max-w-xs'>
							Software with new look. Live the life that you expect.
						</p>
					</div>

					<div>
						<h4 className='font-bold text-slate-900 mb-6'>Useful link</h4>
						<ul className='space-y-4 text-sm text-slate-500 font-medium'>
							<li>
								<a
									href='#'
									className='hover:text-emerald-400 transition-colors'
								>
									Behance
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-emerald-400 transition-colors'
								>
									Dribbble
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className='font-bold text-slate-900 mb-6'>Support</h4>
						<ul className='space-y-4 text-sm text-slate-500 font-medium'>
							<li>
								<a
									href='#'
									className='hover:text-emerald-400 transition-colors'
								>
									Conditions
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-emerald-400 transition-colors'
								>
									Privacy and policy
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className='font-bold text-slate-900 mb-6'>Contact us</h4>
						<ul className='space-y-4 text-sm text-slate-500 font-medium leading-relaxed'>
							<li>(773) 217-8810</li>
							<li>Downers Grove, IL 60515</li>
						</ul>
					</div>
				</div>

				<div className='text-center pt-8 border-t border-slate-50 text-[10px] text-slate-300 uppercase tracking-widest font-bold'>
					<div>MAKSET KAHAΛA @FIGMA2HTML</div>
					<div className='mt-3'>Abdulatif tomonidan ishlab chiqilgan</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
