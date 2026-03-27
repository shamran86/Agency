function FooterSection() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#160033] to-[#2a0b5d] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-16">
        <img
          src="/lucim-logo.png"
          alt="Lucim.io"
          className="mb-6 h-16 w-auto object-contain"
          style={{ mixBlendMode: 'screen' }}
        />
        <p className="max-w-xl text-center text-sm leading-relaxed text-[#ead5f7]">
          Empowering modern teams with high-converting websites, AI-driven automation,
          and secure production systems built to scale with confidence.
        </p>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-[#cfafe6]">
          <a href="/" className="transition hover:text-white">LUCIM.io</a>{' '}
          © 2026. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default FooterSection