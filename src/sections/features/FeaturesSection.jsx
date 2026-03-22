function FeaturesSection() {
  return (
    <section id="features" className="relative overflow-hidden bg-[#07000d] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(181,74,255,0.14),transparent_30%),linear-gradient(180deg,rgba(10,0,20,0.1),rgba(10,0,20,0.85))]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#e8c7fb]">
            Seamless Integrations
          </span>
          <h2 className="mt-5 bg-gradient-to-r from-[#fff4ff] via-[#efc3ff] to-[#de73ff] bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl lg:text-5xl">
            Intelligently woven into your existing ecosystem,
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#e0bdf0] sm:text-base">
            Bridge the gap between design and delivery with custom-fitted integrations. Our
            solutions enhance the tools you already trust, creating a unified workflow that operates with effortless precision.
          </p>
        </div>

        <div className="mt-10 grid items-center gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_0_80px_rgba(167,53,255,0.12)] backdrop-blur">
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-7.svg"
              alt="Creative interface showcase"
              className="w-full rounded-[22px] transition duration-300 hover:-translate-y-1"
            />
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_0_80px_rgba(255,103,218,0.12)] backdrop-blur">
            <div className="w-full rounded-[22px] overflow-hidden transition duration-300 hover:-translate-y-1">
              <svg width="100%" viewBox="0 0 680 420" xmlns="http://www.w3.org/2000/svg">
                <rect width="680" height="420" rx="16" fill="#0f0518"/>
                {/* Sidebar */}
                <rect x="0" y="0" width="140" height="420" fill="#1a0730" rx="16"/>
                <rect x="120" y="0" width="20" height="420" fill="#1a0730"/>
                {/* Logo */}
                <rect x="20" y="22" width="28" height="28" rx="8" fill="#ff58ff" opacity="0.9"/>
                <text x="34" y="40" textAnchor="middle" fontFamily="monospace" fontSize="13" fontWeight="700" fill="#22052b">N</text>
                <text x="60" y="31" fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="#ffffff" opacity="0.8">NexaFlow</text>
                <text x="60" y="43" fontFamily="sans-serif" fontSize="8" fill="#ffffff" opacity="0.4">Analytics</text>
                {/* Nav */}
                <rect x="14" y="76" width="112" height="32" rx="8" fill="#ff58ff" opacity="0.15"/>
                <rect x="28" y="84" width="10" height="10" rx="3" fill="#ff58ff" opacity="0.8"/>
                <text x="46" y="93" fontFamily="sans-serif" fontSize="9" fill="#ff58ff" opacity="0.9">Dashboard</text>
                <rect x="28" y="116" width="10" height="10" rx="3" fill="#ffffff" opacity="0.2"/>
                <text x="46" y="125" fontFamily="sans-serif" fontSize="9" fill="#ffffff" opacity="0.35">Revenue</text>
                <rect x="28" y="154" width="10" height="10" rx="3" fill="#ffffff" opacity="0.2"/>
                <text x="46" y="163" fontFamily="sans-serif" fontSize="9" fill="#ffffff" opacity="0.35">Customers</text>
                <rect x="28" y="192" width="10" height="10" rx="3" fill="#ffffff" opacity="0.2"/>
                <text x="46" y="201" fontFamily="sans-serif" fontSize="9" fill="#ffffff" opacity="0.35">Reports</text>
                <rect x="28" y="230" width="10" height="10" rx="3" fill="#ffffff" opacity="0.2"/>
                <text x="46" y="239" fontFamily="sans-serif" fontSize="9" fill="#ffffff" opacity="0.35">Settings</text>
                {/* Avatar */}
                <circle cx="30" cy="392" r="14" fill="#ff58ff" opacity="0.3"/>
                <text x="30" y="396" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="#ffffff" opacity="0.8">RK</text>
                <text x="52" y="389" fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="#ffffff" opacity="0.6">Rahul Kumar</text>
                <text x="52" y="400" fontFamily="sans-serif" fontSize="8" fill="#ffffff" opacity="0.3">Admin</text>
                {/* Top bar */}
                <rect x="140" y="0" width="540" height="52" fill="#160626"/>
                <text x="160" y="22" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#ffffff" opacity="0.8">Good morning, Rahul 👋</text>
                <text x="160" y="36" fontFamily="sans-serif" fontSize="9" fill="#ffffff" opacity="0.35">Q1 FY2025–26 · India Region</text>
                <rect x="390" y="14" width="150" height="26" rx="13" fill="#ffffff" opacity="0.06"/>
                <text x="465" y="31" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#ffffff" opacity="0.25">Search metrics...</text>
                <circle cx="568" cy="26" r="11" fill="#7c3aff" opacity="0.4"/>
                <text x="568" y="30" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#ffffff" opacity="0.8">3</text>
                <circle cx="594" cy="26" r="11" fill="#ff58ff" opacity="0.35"/>
                <text x="594" y="30" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="#ffffff" opacity="0.9">RK</text>
                {/* Stat Cards */}
                <rect x="156" y="68" width="116" height="70" rx="10" fill="#1e0838"/>
                <text x="164" y="82" fontFamily="sans-serif" fontSize="8" fill="#ffffff" opacity="0.4">TOTAL REVENUE</text>
                <text x="164" y="100" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#ff58ff" opacity="0.9">₹42.6L</text>
                <text x="164" y="114" fontFamily="sans-serif" fontSize="8" fill="#34d399" opacity="0.8">↑ 18.4% vs last qtr</text>
                <rect x="164" y="124" width="88" height="4" rx="2" fill="#ffffff" opacity="0.06"/>
                <rect x="164" y="124" width="64" height="4" rx="2" fill="#ff58ff" opacity="0.4"/>
                <rect x="280" y="68" width="116" height="70" rx="10" fill="#1e0838"/>
                <text x="288" y="82" fontFamily="sans-serif" fontSize="8" fill="#ffffff" opacity="0.4">ACTIVE USERS</text>
                <text x="288" y="100" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#a56dff" opacity="0.9">8,342</text>
                <text x="288" y="114" fontFamily="sans-serif" fontSize="8" fill="#34d399" opacity="0.8">↑ 12.1% MoM</text>
                <rect x="288" y="124" width="88" height="4" rx="2" fill="#ffffff" opacity="0.06"/>
                <rect x="288" y="124" width="58" height="4" rx="2" fill="#a56dff" opacity="0.4"/>
                <rect x="404" y="68" width="116" height="70" rx="10" fill="#1e0838"/>
                <text x="412" y="82" fontFamily="sans-serif" fontSize="8" fill="#ffffff" opacity="0.4">SLA UPTIME</text>
                <text x="412" y="100" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#38bdf8" opacity="0.9">99.7%</text>
                <text x="412" y="114" fontFamily="sans-serif" fontSize="8" fill="#38bdf8" opacity="0.7">→ Stable this month</text>
                <rect x="412" y="124" width="88" height="4" rx="2" fill="#ffffff" opacity="0.06"/>
                <rect x="412" y="124" width="84" height="4" rx="2" fill="#38bdf8" opacity="0.4"/>
                <rect x="528" y="68" width="116" height="70" rx="10" fill="#1e0838"/>
                <text x="536" y="82" fontFamily="sans-serif" fontSize="8" fill="#ffffff" opacity="0.4">NEW SIGNUPS</text>
                <text x="536" y="100" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#34d399" opacity="0.9">+1,204</text>
                <text x="536" y="114" fontFamily="sans-serif" fontSize="8" fill="#34d399" opacity="0.8">↑ 28% this week</text>
                <rect x="536" y="124" width="88" height="4" rx="2" fill="#ffffff" opacity="0.06"/>
                <rect x="536" y="124" width="50" height="4" rx="2" fill="#34d399" opacity="0.4"/>
                {/* Main Chart */}
                <rect x="156" y="152" width="316" height="182" rx="12" fill="#1a0630"/>
                <text x="168" y="167" fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="#ffffff" opacity="0.7">Monthly Revenue (₹ Lakhs)</text>
                <circle cx="352" cy="163" r="4" fill="#ff58ff"/>
                <text x="360" y="167" fontFamily="sans-serif" fontSize="8" fill="#ffffff" opacity="0.4">Revenue</text>
                <circle cx="406" cy="163" r="4" fill="#a56dff"/>
                <text x="414" y="167" fontFamily="sans-serif" fontSize="8" fill="#ffffff" opacity="0.4">Target</text>
                <line x1="168" y1="180" x2="460" y2="180" stroke="#ffffff" strokeWidth="0.4" opacity="0.06"/>
                <line x1="168" y1="204" x2="460" y2="204" stroke="#ffffff" strokeWidth="0.4" opacity="0.06"/>
                <line x1="168" y1="228" x2="460" y2="228" stroke="#ffffff" strokeWidth="0.4" opacity="0.06"/>
                <line x1="168" y1="252" x2="460" y2="252" stroke="#ffffff" strokeWidth="0.4" opacity="0.06"/>
                <line x1="168" y1="276" x2="460" y2="276" stroke="#ffffff" strokeWidth="0.4" opacity="0.06"/>
                <text x="162" y="183" textAnchor="end" fontFamily="sans-serif" fontSize="7" fill="#ffffff" opacity="0.25">50</text>
                <text x="162" y="207" textAnchor="end" fontFamily="sans-serif" fontSize="7" fill="#ffffff" opacity="0.25">40</text>
                <text x="162" y="231" textAnchor="end" fontFamily="sans-serif" fontSize="7" fill="#ffffff" opacity="0.25">30</text>
                <text x="162" y="255" textAnchor="end" fontFamily="sans-serif" fontSize="7" fill="#ffffff" opacity="0.25">20</text>
                <text x="162" y="279" textAnchor="end" fontFamily="sans-serif" fontSize="7" fill="#ffffff" opacity="0.25">10</text>
                <path d="M180,268 L216,252 L252,244 L288,236 L324,220 L360,208 L396,196 L432,184 L456,178 L456,300 L180,300 Z" fill="#ff58ff" opacity="0.10"/>
                <polyline points="180,268 216,252 252,244 288,236 324,220 360,208 396,216 432,196 456,190" fill="none" stroke="#ff58ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="180,276 216,264 252,256 288,248 324,236 360,224 396,224 432,208 456,200" fill="none" stroke="#a56dff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 3" opacity="0.6"/>
                <circle cx="456" cy="190" r="5" fill="#ff58ff"/>
                <circle cx="456" cy="190" r="9" fill="#ff58ff" opacity="0.18"/>
                <rect x="392" y="168" width="90" height="18" rx="6" fill="#2a0e50"/>
                <rect x="392" y="168" width="90" height="18" rx="6" fill="none" stroke="#ff58ff" strokeWidth="0.5" opacity="0.4"/>
                <text x="400" y="180" fontFamily="sans-serif" fontSize="8" fill="#ffffff" opacity="0.5">Dec</text>
                <text x="418" y="180" fontFamily="sans-serif" fontSize="8" fontWeight="600" fill="#ff58ff">₹43.2L</text>
                <text x="180" y="310" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#ffffff" opacity="0.25">Apr</text>
                <text x="216" y="310" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#ffffff" opacity="0.25">May</text>
                <text x="252" y="310" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#ffffff" opacity="0.25">Jun</text>
                <text x="288" y="310" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#ffffff" opacity="0.25">Jul</text>
                <text x="324" y="310" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#ffffff" opacity="0.25">Aug</text>
                <text x="360" y="310" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#ffffff" opacity="0.25">Sep</text>
                <text x="396" y="310" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#ffffff" opacity="0.25">Oct</text>
                <text x="432" y="310" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#ffffff" opacity="0.25">Nov</text>
                <text x="456" y="310" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#ff58ff" opacity="0.7">Dec</text>
                {/* Right Panel: Top Cities */}
                <rect x="482" y="152" width="162" height="182" rx="12" fill="#1a0630"/>
                <text x="494" y="167" fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="#ffffff" opacity="0.7">Top Cities</text>
                <text x="610" y="167" textAnchor="end" fontFamily="sans-serif" fontSize="8" fill="#ffffff" opacity="0.3">Revenue</text>
                <text x="494" y="184" fontFamily="sans-serif" fontSize="9" fill="#ffffff" opacity="0.75">Bengaluru</text>
                <rect x="494" y="188" width="120" height="4" rx="2" fill="#ffffff" opacity="0.07"/>
                <rect x="494" y="188" width="106" height="4" rx="2" fill="#ff58ff" opacity="0.6"/>
                <text x="626" y="192" textAnchor="end" fontFamily="sans-serif" fontSize="8" fill="#ff58ff" opacity="0.8">₹12.4L</text>
                <text x="494" y="208" fontFamily="sans-serif" fontSize="9" fill="#ffffff" opacity="0.75">Mumbai</text>
                <rect x="494" y="212" width="120" height="4" rx="2" fill="#ffffff" opacity="0.07"/>
                <rect x="494" y="212" width="88" height="4" rx="2" fill="#a56dff" opacity="0.6"/>
                <text x="626" y="216" textAnchor="end" fontFamily="sans-serif" fontSize="8" fill="#a56dff" opacity="0.8">₹9.8L</text>
                <text x="494" y="232" fontFamily="sans-serif" fontSize="9" fill="#ffffff" opacity="0.75">Delhi NCR</text>
                <rect x="494" y="236" width="120" height="4" rx="2" fill="#ffffff" opacity="0.07"/>
                <rect x="494" y="236" width="74" height="4" rx="2" fill="#38bdf8" opacity="0.6"/>
                <text x="626" y="240" textAnchor="end" fontFamily="sans-serif" fontSize="8" fill="#38bdf8" opacity="0.8">₹7.6L</text>
                <text x="494" y="256" fontFamily="sans-serif" fontSize="9" fill="#ffffff" opacity="0.75">Hyderabad</text>
                <rect x="494" y="260" width="120" height="4" rx="2" fill="#ffffff" opacity="0.07"/>
                <rect x="494" y="260" width="56" height="4" rx="2" fill="#34d399" opacity="0.6"/>
                <text x="626" y="264" textAnchor="end" fontFamily="sans-serif" fontSize="8" fill="#34d399" opacity="0.8">₹5.4L</text>
                <text x="494" y="280" fontFamily="sans-serif" fontSize="9" fill="#ffffff" opacity="0.75">Pune</text>
                <rect x="494" y="284" width="120" height="4" rx="2" fill="#ffffff" opacity="0.07"/>
                <rect x="494" y="284" width="40" height="4" rx="2" fill="#fbbf24" opacity="0.6"/>
                <text x="626" y="288" textAnchor="end" fontFamily="sans-serif" fontSize="8" fill="#fbbf24" opacity="0.8">₹4.1L</text>
                <text x="494" y="304" fontFamily="sans-serif" fontSize="9" fill="#ffffff" opacity="0.75">Chennai</text>
                <rect x="494" y="308" width="120" height="4" rx="2" fill="#ffffff" opacity="0.07"/>
                <rect x="494" y="308" width="30" height="4" rx="2" fill="#fb7185" opacity="0.6"/>
                <text x="626" y="312" textAnchor="end" fontFamily="sans-serif" fontSize="8" fill="#fb7185" opacity="0.8">₹3.3L</text>
                {/* Bottom Row */}
                <rect x="156" y="348" width="152" height="62" rx="10" fill="#1a0630"/>
                <text x="165" y="362" fontFamily="sans-serif" fontSize="8" fill="#ffffff" opacity="0.4">CHURN RATE</text>
                <text x="165" y="378" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#fb7185" opacity="0.85">2.3%</text>
                <text x="165" y="392" fontFamily="sans-serif" fontSize="8" fill="#34d399" opacity="0.7">↓ Improved from 3.1%</text>
                <rect x="165" y="400" width="132" height="4" rx="2" fill="#ffffff" opacity="0.06"/>
                <rect x="165" y="400" width="30" height="4" rx="2" fill="#fb7185" opacity="0.5"/>
                <rect x="316" y="348" width="152" height="62" rx="10" fill="#1a0630"/>
                <text x="325" y="362" fontFamily="sans-serif" fontSize="8" fill="#ffffff" opacity="0.4">ARR</text>
                <text x="325" y="378" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#38bdf8" opacity="0.85">₹5.1Cr</text>
                <text x="325" y="392" fontFamily="sans-serif" fontSize="8" fill="#34d399" opacity="0.7">↑ On track for ₹6Cr</text>
                <rect x="325" y="400" width="132" height="4" rx="2" fill="#ffffff" opacity="0.06"/>
                <rect x="325" y="400" width="96" height="4" rx="2" fill="#38bdf8" opacity="0.5"/>
                <circle cx="421" cy="402" r="4" fill="#38bdf8" opacity="0.9"/>
                <rect x="476" y="348" width="168" height="62" rx="10" fill="#1a0630"/>
                <text x="486" y="362" fontFamily="sans-serif" fontSize="8" fill="#ffffff" opacity="0.4">NET PROMOTER SCORE</text>
                <text x="486" y="378" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#34d399" opacity="0.85">72</text>
                <text x="486" y="392" fontFamily="sans-serif" fontSize="8" fill="#34d399" opacity="0.7">↑ World-class (&gt;70)</text>
                <polyline points="548,402 558,396 568,399 578,392 588,394 600,388 614,385 626,382" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection