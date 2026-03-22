import { portfolioItems } from './portfolioContent'
// Inline SVG mockups per type
function Mockup({ type, highlight }) {
  const shared = { width: '100%', height: '100%' }

  if (type === 'dashboard') return (
    <svg viewBox="0 0 320 200" {...shared} xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#0f0518" rx="8" />
      <rect x="0" y="0" width="56" height="200" fill="#1a0730" rx="8" />
      <circle cx="28" cy="22" r="8" fill={highlight} opacity="0.8" />
      {[50, 74, 98, 122].map((y, i) => (
        <rect key={i} x="14" y={y} width="28" height="6" rx="3" fill="#ffffff" opacity="0.15" />
      ))}
      <rect x="56" y="0" width="264" height="32" fill="#160626" />
      <rect x="68" y="11" width="60" height="8" rx="4" fill="#ffffff" opacity="0.1" />
      <circle cx="296" cy="16" r="8" fill={highlight} opacity="0.5" />
      {[0, 1, 2].map(i => (
        <g key={i}>
          <rect x={68 + i * 84} y="42" width="76" height="44" rx="6" fill="#1e0838" />
          <rect x={76 + i * 84} y="52" width="36" height="5" rx="2.5" fill="#ffffff" opacity="0.2" />
          <rect x={76 + i * 84} y="62" width="52" height="10" rx="5" fill={highlight} opacity="0.6" />
        </g>
      ))}
      <rect x="68" y="96" width="160" height="88" rx="6" fill="#1e0838" />
      <polyline
        points="80,168 100,148 120,155 140,130 160,140 180,115 200,125 215,108"
        fill="none" stroke={highlight} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
      <polyline
        points="80,168 100,148 120,155 140,130 160,140 180,115 200,125 215,108 215,175 80,175"
        fill={highlight} opacity="0.1"
      />
      <rect x="238" y="96" width="94" height="88" rx="6" fill="#1e0838" />
      {[0, 1, 2, 3].map(i => (
        <g key={i}>
          <rect x="248" y={108 + i * 18} width="30" height="5" rx="2.5" fill="#ffffff" opacity="0.2" />
          <rect x="290" y={108 + i * 18} width="32" height="5" rx="2.5" fill={highlight} opacity="0.5" />
        </g>
      ))}
    </svg>
  )

  if (type === 'landing') return (
    <svg viewBox="0 0 320 200" {...shared} xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#0f0518" rx="8" />
      <rect x="0" y="0" width="320" height="28" fill="#160626" />
      <rect x="16" y="10" width="40" height="8" rx="4" fill={highlight} opacity="0.7" />
      {[100, 140, 180].map((x, i) => (
        <rect key={i} x={x} y="11" width="28" height="6" rx="3" fill="#ffffff" opacity="0.15" />
      ))}
      <rect x="264" y="8" width="40" height="12" rx="6" fill={highlight} opacity="0.8" />
      <rect x="60" y="44" width="200" height="12" rx="6" fill="#ffffff" opacity="0.15" />
      <rect x="80" y="62" width="160" height="8" rx="4" fill="#ffffff" opacity="0.08" />
      <rect x="80" y="74" width="140" height="8" rx="4" fill="#ffffff" opacity="0.06" />
      <rect x="110" y="92" width="100" height="18" rx="9" fill={highlight} opacity="0.85" />
      {[0, 1, 2].map(i => (
        <g key={i}>
          <rect x={16 + i * 100} y="126" width="88" height="58" rx="6" fill="#1e0838" />
          <circle cx={36 + i * 100} cy="144" r="8" fill={highlight} opacity="0.4" />
          <rect x={24 + i * 100} y="158" width="52" height="5" rx="2.5" fill="#ffffff" opacity="0.2" />
          <rect x={24 + i * 100} y="168" width="64" height="5" rx="2.5" fill="#ffffff" opacity="0.1" />
        </g>
      ))}
    </svg>
  )

  if (type === 'ecommerce') return (
    <svg viewBox="0 0 320 200" {...shared} xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#060d1a" rx="8" />
      <rect x="0" y="0" width="320" height="28" fill="#0b1628" />
      <rect x="16" y="10" width="40" height="8" rx="4" fill={highlight} opacity="0.8" />
      <rect x="260" y="8" width="22" height="12" rx="6" fill={highlight} opacity="0.5" />
      <rect x="286" y="8" width="18" height="12" rx="6" fill={highlight} opacity="0.3" />
      <rect x="0" y="28" width="72" height="172" fill="#0d1e38" />
      {[0, 1, 2, 3, 4].map(i => (
        <g key={i}>
          <rect x="10" y={40 + i * 26} width="48" height="6" rx="3" fill={i === 0 ? highlight : '#ffffff'} opacity={i === 0 ? 0.6 : 0.12} />
        </g>
      ))}
      {[0, 1, 2, 3, 4, 5].map(i => {
        const col = i % 3
        const row = Math.floor(i / 3)
        return (
          <g key={i}>
            <rect x={82 + col * 82} y={36 + row * 88} width="74" height="80" rx="6" fill="#0f2040" />
            <rect x={82 + col * 82} y={36 + row * 88} width="74" height="48" rx="6" fill="#1a3060" opacity="0.8" />
            <rect x={90 + col * 82} y={92 + row * 88} width="40" height="5" rx="2.5" fill="#ffffff" opacity="0.2" />
            <rect x={90 + col * 82} y={102 + row * 88} width="28" height="5" rx="2.5" fill={highlight} opacity="0.7" />
          </g>
        )
      })}
    </svg>
  )

  if (type === 'crm') return (
    <svg viewBox="0 0 320 200" {...shared} xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#021a10" rx="8" />
      <rect x="0" y="0" width="320" height="28" fill="#041f14" />
      <rect x="16" y="10" width="50" height="8" rx="4" fill={highlight} opacity="0.7" />
      {[0, 1, 2].map(col => (
        <g key={col}>
          <rect x={16 + col * 100} y="36" width="88" height="152" rx="6" fill="#071f12" />
          <rect x={24 + col * 100} y="44" width="48" height="6" rx="3" fill={highlight} opacity="0.5" />
          {[0, 1, 2].map(row => (
            <g key={row}>
              <rect x={24 + col * 100} y={60 + row * 42} width="72" height="34" rx="5" fill="#0d3020" />
              <circle cx={34 + col * 100} cy={70 + row * 42} r="5" fill={highlight} opacity="0.5" />
              <rect x={44 + col * 100} y={66 + row * 42} width="40" height="5" rx="2.5" fill="#ffffff" opacity="0.2" />
              <rect x={44 + col * 100} y={75 + row * 42} width="28" height="4" rx="2" fill={highlight} opacity="0.3" />
            </g>
          ))}
        </g>
      ))}
    </svg>
  )

  if (type === 'portfolio') return (
    <svg viewBox="0 0 320 200" {...shared} xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#0a0a08" rx="8" />
      <rect x="0" y="0" width="320" height="110" fill="#1a1608" />
      <rect x="20" y="36" width="180" height="18" rx="9" fill="#ffffff" opacity="0.12" />
      <rect x="20" y="62" width="120" height="10" rx="5" fill={highlight} opacity="0.7" />
      <rect x="20" y="80" width="80" height="18" rx="9" fill={highlight} opacity="0.9" />
      <rect x="0" y="108" width="320" height="4" fill={highlight} opacity="0.3" />
      {[0, 1, 2].map(i => (
        <rect key={i} x={16 + i * 98} y="120" width="88" height="64" rx="6"
          fill={i === 1 ? highlight : '#1a1608'} opacity={i === 1 ? 0.5 : 1} />
      ))}
    </svg>
  )

  if (type === 'booking') return (
    <svg viewBox="0 0 320 200" {...shared} xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#140518" rx="8" />
      <rect x="0" y="0" width="320" height="28" fill="#1e0828" />
      <rect x="16" y="10" width="60" height="8" rx="4" fill={highlight} opacity="0.7" />
      <rect x="16" y="36" width="172" height="152" rx="6" fill="#1e0828" />
      {[0, 1, 2, 3, 4, 5, 6].map((_, i) => (
        <rect key={i} x={26 + i * 22} y="46" width="14" height="6" rx="3" fill="#ffffff" opacity="0.15" />
      ))}
      {Array.from({ length: 28 }).map((_, i) => {
        const col = i % 7
        const row = Math.floor(i / 7)
        const isHighlight = [2, 9, 16].includes(i)
        return (
          <rect key={i} x={26 + col * 22} y={60 + row * 28} width="14" height="20" rx="4"
            fill={isHighlight ? highlight : '#2a0e40'} opacity={isHighlight ? 0.85 : 0.5} />
        )
      })}
      <rect x="198" y="36" width="106" height="152" rx="6" fill="#1e0828" />
      <rect x="208" y="48" width="60" height="8" rx="4" fill="#ffffff" opacity="0.15" />
      {[0, 1, 2, 3].map(i => (
        <g key={i}>
          <rect x="208" y={66 + i * 28} width="86" height="20" rx="5"
            fill={i === 0 ? highlight : '#2a0e40'} opacity={i === 0 ? 0.7 : 0.5} />
          <rect x="216" y={72 + i * 28} width="40" height="5" rx="2.5" fill="#ffffff" opacity="0.4" />
        </g>
      ))}
    </svg>
  )

  return null
}

export default function PortfolioStrip() {
  const items = [...portfolioItems, ...portfolioItems]

  return (
    <section className="py-20 overflow-hidden" id="portfolio">
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-[#ff58ff] mb-3">
          What We Can Build
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
          UI samples from our design range
        </h2>
        <p className="mt-4 text-[#c5a8d8] text-base max-w-xl mx-auto">
          From SaaS dashboards to booking flows — here&apos;s the kind of work we deliver.
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#0f0518] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#0f0518] to-transparent" />

        <div className="flex gap-6 animate-portfolio-scroll w-max">
          {items.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-72 shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col"
            >
              <div className="h-44">
                <Mockup type={item.mockup} highlight={item.highlight} />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold text-sm">{item.label}</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full border"
                    style={{ color: item.highlight, borderColor: item.highlight + '55' }}
                  >
                    {item.tag}
                  </span>
                </div>
                <p className="text-[#c5a8d8] text-xs leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes portfolio-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-portfolio-scroll {
          animation: portfolio-scroll 40s linear infinite;
        }
        .animate-portfolio-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}