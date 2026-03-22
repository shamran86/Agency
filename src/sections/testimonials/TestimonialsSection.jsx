import { testimonials } from '../../data/testimonialsContent'

const rows = [
  { start: 0, end: 3, className: 'testimonials-scroll' },
  { start: 3, end: 6, className: 'testimonials-scroll-reverse' },
]

function StarRow() {
  return (
    <div className="mb-4 flex">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#ff72e9]">
          <path
            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a.53.53 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <article className="w-[272px] shrink-0 rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(33,8,49,0.92),rgba(15,2,24,0.98))] p-3.5 shadow-[0_0_50px_rgba(173,78,255,0.08)] backdrop-blur">
      <StarRow />
      <p className="mb-4 text-[13px] leading-6 text-[#ead5f7]">{testimonial.text}</p>
      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-9 w-9 rounded-full object-cover ring-1 ring-white/15"
        />
        <div>
          <p className="text-[13px] font-medium text-[#fff2ff]">{testimonial.name}</p>
          <p className="text-xs text-[#cfa8e8]">{testimonial.role}</p>
        </div>
      </div>
    </article>
  )
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#040008] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(175,75,255,0.12),transparent_28%),linear-gradient(180deg,rgba(8,0,15,0.88),rgba(6,0,10,1))]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
            <span className="text-xs uppercase tracking-[0.24em] text-[#e8c7fb]">Loved by clients</span>
          </div>
          <h2 className="mt-5 bg-gradient-to-r from-[#fff4ff] via-[#efc3ff] to-[#de73ff] bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl lg:text-5xl">
            What You Can Expect From us
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#e0bdf0] sm:text-base">
            Clear communication, a collaborative approach, and a commitment to delivering high-quality results that exceed your expectations. 
          </p>
        </div>

        <div className="space-y-6">
          {rows.map((row, rowIndex) => {
            const rowItems = testimonials.slice(row.start, row.end)

            return (
              <div key={rowIndex} className="relative overflow-hidden">
                <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-20 bg-gradient-to-r from-[#040008] to-transparent sm:w-28" />
                <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-20 bg-gradient-to-l from-[#040008] to-transparent sm:w-28" />

                <div className={`flex gap-6 ${row.className}`}>
                  {[...rowItems, ...rowItems].map((testimonial, index) => (
                    <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
