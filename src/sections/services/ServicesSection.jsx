import { useRef } from 'react'
import { serviceItems } from '../../data/servicesContent'

function ServicesSection() {
  const carouselRef = useRef(null)

  const scrollCards = (direction) => {
    if (!carouselRef.current) return

    const track = carouselRef.current
    const card = track.querySelector('[data-service-card]')
    const gap = 24
    const distance = card ? card.clientWidth + gap : track.clientWidth * 0.85

    track.scrollBy({
      left: direction === 'next' ? distance : -distance,
      behavior: 'smooth',
    })
  }

  return (
    <section className="relative overflow-hidden bg-[#050009] px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(181,74,255,0.12),transparent_22%),linear-gradient(180deg,rgba(7,0,13,0.92),rgba(10,0,18,1))]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#e8c7fb]">
              Services
            </span>
            <h2 className="mt-5 bg-gradient-to-r from-[#fff4ff] via-[#efc3ff] to-[#de73ff] bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl lg:text-5xl">
              Design systems and AI workflows built for growth.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#e0bdf0] sm:text-base">
              We help brands launch sharper websites, automate repetitive work, and
              connect the systems behind the customer journey into one reliable flow.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollCards('prev')}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[#f6e8ff] transition hover:bg-white/[0.08]"
              aria-label="Previous services"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 6L9 12L15 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollCards('next')}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[#f6e8ff] transition hover:bg-white/[0.08]"
              aria-label="Next services"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6L15 12L9 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {serviceItems.map((service) => (
            <article
              key={service.id}
              data-service-card
              className="group relative min-h-[340px] w-[88%] shrink-0 snap-start overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 sm:w-[70%] lg:w-[calc(33.333%-16px)]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-100`} />
              <div className="absolute inset-[1px] rounded-[29px] bg-[linear-gradient(180deg,rgba(18,5,31,0.94),rgba(11,1,19,0.98))]" />

              <div className="relative flex h-full flex-col">
                <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[#e7c8fa]">
                  {service.eyebrow}
                </span>

                <h3 className="mt-5 max-w-xs text-2xl font-semibold leading-tight text-[#fff2ff]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#d9b7ea]">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3 text-sm text-[#edd4fb]">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#ff63f6]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8 text-sm font-medium text-[#f6d8ff]">
                  Explore service
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
