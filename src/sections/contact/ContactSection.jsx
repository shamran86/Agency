import PrimaryButton from '../../components/ui/PrimaryButton'
import SecondaryButton from '../../components/ui/SecondaryButton'

function ContactDetail({ label, value, href }) {
  return (
    <a
      href={href}
      className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.06]"
    >
      <p className="text-xs uppercase tracking-[0.22em] text-[#cfa8e8]">{label}</p>
      <p className="mt-3 text-lg font-medium text-[#fff2ff]">{value}</p>
    </a>
  )
}

function Input({ label, type = 'text', placeholder }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-[#d9b7ea]">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[#fff2ff] outline-none transition placeholder:text-[#a98cbc] focus:border-[#ff63f6]/60 focus:bg-white/[0.06]"
      />
    </label>
  )
}

function Textarea({ label, placeholder }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-[#d9b7ea]">{label}</span>
      <textarea
        rows="5"
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[#fff2ff] outline-none transition placeholder:text-[#a98cbc] focus:border-[#ff63f6]/60 focus:bg-white/[0.06]"
      />
    </label>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#040008] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,88,255,0.12),transparent_26%),linear-gradient(180deg,rgba(9,0,16,0.88),rgba(5,0,8,1))]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8">
            <span className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#e8c7fb]">
              Contact us
            </span>
            <h2 className="mt-5 bg-gradient-to-r from-[#fff4ff] via-[#efc3ff] to-[#de73ff] bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl lg:text-5xl">
              Ready to build, automate, or secure what comes next?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#e0bdf0] sm:text-base">
              Tell us what you are building, where the bottlenecks are, or what needs
              to be secured. We can help shape the website, systems, and automation
              layer around it.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <ContactDetail label="Email" value="hello@agency.dev" href="mailto:hello@agency.dev" />
              <ContactDetail label="Book a call" value="Schedule a discovery call" href="#contact" />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton>Start a project</PrimaryButton>
              <SecondaryButton>View services</SecondaryButton>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(27,8,41,0.92),rgba(10,1,18,0.98))] p-6 shadow-[0_0_80px_rgba(173,78,255,0.08)] backdrop-blur sm:p-8">
            <form className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Input label="Name" placeholder="Your name" />
                <Input label="Email" type="email" placeholder="you@company.com" />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Input label="Company" placeholder="Company or brand" />
                <Input label="Project type" placeholder="Website, automation, security" />
              </div>

              <Textarea
                label="Project details"
                placeholder="Tell us about your goals, current stack, timeline, or the systems you want to improve."
              />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-[#cfa8e8]">
                  We usually respond within 1-2 business days.
                </p>
                <PrimaryButton type="submit" className="justify-center">
                  Send inquiry
                </PrimaryButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
