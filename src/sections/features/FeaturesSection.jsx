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
            Built to plug into the tools your team already uses.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#e0bdf0] sm:text-base">
            Connect design, collaboration, and delivery in one workflow so your team can
            move faster without rebuilding the stack they already rely on.
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
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-8.svg"
              alt="Product dashboard showcase"
              className="w-full rounded-[22px] transition duration-300 hover:-translate-y-1"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
