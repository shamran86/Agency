function FooterSection() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#160033] to-[#2a0b5d] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-16">
        <div className="mb-6 flex items-center space-x-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-sm font-semibold text-[#fff2ff] shadow-[0_0_35px_rgba(255,122,231,0.18)]">
            A
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.28em] text-[#fff2ff]">AGENCY</p>
            <p className="text-xs text-[#d7b2ef]/80">Web, automation, security</p>
          </div>
        </div>

        <p className="max-w-xl text-center text-sm leading-relaxed text-[#ead5f7]">
          Empowering modern teams with high-converting websites, AI-driven automation,
          and secure production systems built to scale with confidence.
        </p>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-[#cfafe6]">
          <a href="/" className="transition hover:text-white">
            Agency
          </a>{' '}
          © 2026. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
