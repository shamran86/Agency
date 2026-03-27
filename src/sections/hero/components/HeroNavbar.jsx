import { useState } from 'react'
import { navigationItems } from '../../../data/siteContent'

function AnimatedLink({ href, label, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative h-6 overflow-hidden text-[#e7cbf7] transition hover:text-white"
    >
      <span className="block transition-transform duration-300 group-hover:-translate-y-full">
        {label}
      </span>
      <span className="absolute top-full left-0 block transition-transform duration-300 group-hover:-translate-y-full">
        {label}
      </span>
    </a>
  )
}

function OutlineButton({ children, className = '', ...props }) {
  return (
    <button
      className={`rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-medium text-[#f3dcff] transition hover:bg-white/[0.08] ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

function GlowButton({ children, className = '', ...props }) {
  return (
    <button
      className={`rounded-full bg-white px-4 py-2 text-sm font-medium text-[#16001f] shadow-[0_0_30px_7px_rgba(255,255,255,0.35)] transition duration-300 hover:bg-[#f7ebff] hover:shadow-[0_0_30px_14px_rgba(255,255,255,0.45)] ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

function MobileMenuButton({ open, onClick }) {
  return (
    <button
      type="button"
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      onClick={onClick}
      className="text-[#f3dcff] md:hidden"
    >
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        {open ? (
          <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  )
}

function HeroNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)
  const toggleMenu = () => setIsMenuOpen((open) => !open)

  return (
    <header className="pt-4">
      <div className="mx-auto max-w-5xl">
        <nav className="mx-auto flex w-full max-w-fit items-center justify-between rounded-full border border-white/15 bg-[#13051f]/65 px-5 py-4 text-sm text-white backdrop-blur-md sm:px-6 md:min-w-[760px] md:justify-center lg:min-w-[860px]">
          <div className="flex w-full items-center justify-between md:w-auto">
            <a href="/" aria-label="Lucim home" className="shrink-0">
              <img
                src="/lucim-logo.png"
                alt="Lucim.io"
                className="h-10 w- object-contain"
                style={{ mixBlendMode: 'screen' }}
              />
            </a>
            <MobileMenuButton open={isMenuOpen} onClick={toggleMenu} />
          </div>

          <div className="ml-8 hidden items-center gap-6 md:flex lg:ml-10">
            {navigationItems.map((item) => (
              <AnimatedLink key={item.label} {...item} />
            ))}
          </div>

          <div className="ml-10 hidden items-center gap-3 md:flex lg:ml-12 lg:gap-4">
            <a href="#contact"><OutlineButton>Contact</OutlineButton></a>
            <a href="#contact"><GlowButton>Get Started</GlowButton></a>
          </div>
        </nav>

        <div
          className={`mx-auto grid w-full max-w-md overflow-hidden transition-all duration-300 md:hidden ${
            isMenuOpen ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="min-h-0">
            <div className="flex flex-col items-center gap-4 rounded-[28px] border border-white/10 bg-[#090010]/92 px-6 py-6 text-base text-[#f0ddff] backdrop-blur-xl">
              <img
                src="/lucim-logo.png"
                alt="Lucim.io"
                className="h-10 w-auto object-contain mb-1"
                style={{ mixBlendMode: 'screen' }}
              />
              {navigationItems.map((item) => (
                <a key={item.label} className="transition hover:text-white" href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="w-full" onClick={closeMenu}>
                <OutlineButton className="w-full">Contact</OutlineButton>
              </a>
              <a href="#contact" className="w-full" onClick={closeMenu}>
                <GlowButton className="w-full">Get Started</GlowButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeroNavbar