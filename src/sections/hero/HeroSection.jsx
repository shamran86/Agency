import PrimaryButton from '../../components/ui/PrimaryButton'
import SecondaryButton from '../../components/ui/SecondaryButton'
import { trustedBrands } from '../../data/siteContent'
import HeroNavbar from './components/HeroNavbar'

function HeroSection() {
  return (
    <section
      className="hero-synthwave-bg relative overflow-hidden bg-[#110018] text-white"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(9, 0, 18, 0.2), rgba(11, 0, 21, 0.7)), url('/layered-steps-haikei.svg')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,115,255,0.16),transparent_34%),linear-gradient(180deg,rgba(9,0,18,0.18),rgba(11,0,21,0.76))]" />

      <div className="relative mx-auto min-h-screen max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <HeroNavbar />

        <div className="mx-auto flex max-w-5xl flex-col items-center pb-8 pt-10 text-center md:pt-14">
          <div className="rainbow relative z-0 mt-2 overflow-hidden rounded-full bg-white/15 p-px">
            <div className="flex items-center justify-center gap-3 rounded-full bg-[#1d052d]/85 px-4 py-3 font-medium text-[#f6e8ff] backdrop-blur">
              <div className="relative flex h-3.5 w-3.5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#ff58ff] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff58ff]" />
              </div>
              <span className="text-xs tracking-[0.18em] text-[#f6e8ff] uppercase">
                THE FUTURE OF DIGITAL ARCHITECTURE
              </span>
            </div>
          </div>

          <h1 className="mt-1 max-w-4xl text-4xl font-semibold leading-tight text-[#fff2ff] sm:text-5xl lg:text-[64px] lg:leading-[1.15]">
            We Build. We Automate. You Dominate.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#d8b2eb] sm:text-base">
            High-performance websites, Intelligent AI agents. One studio that delivers both.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton>Get started today</PrimaryButton>
            <SecondaryButton>View our work</SecondaryButton>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-3 text-sm text-[#d0a7e8]/70 sm:gap-4">
            {trustedBrands.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 tracking-[0.2em] uppercase"
              >
                {brand}
              </span>
            ))}
          </div>

          <a
            href="#services"
            className="mt-12 flex animate-bounce flex-col items-center gap-4 text-[#c89ae7]/70 transition hover:text-[#f6e8ff]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 9A7 7 0 1 0 5 9v6a7 7 0 1 0 14 0Zm-7-3v4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm">Scroll down</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
