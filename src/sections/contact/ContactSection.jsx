import { useState } from 'react'
import PrimaryButton from '../../components/ui/PrimaryButton'
import SecondaryButton from '../../components/ui/SecondaryButton'

function ContactDetail({ label, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.06]"
    >
      <p className="text-xs uppercase tracking-[0.22em] text-[#cfa8e8]">{label}</p>
      <p className="mt-3 text-base font-medium text-[#fff2ff] break-all leading-snug">{value}</p>
    </a>
  )
}

function Input({ label, type = 'text', placeholder, name, value, onChange }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-[#d9b7ea]">{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[#fff2ff] outline-none transition placeholder:text-[#a98cbc] focus:border-[#ff63f6]/60 focus:bg-white/[0.06]"
      />
    </label>
  )
}

function Textarea({ label, placeholder, name, value, onChange }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-[#d9b7ea]">{label}</span>
      <textarea
        rows="5"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[#fff2ff] outline-none transition placeholder:text-[#a98cbc] focus:border-[#ff63f6]/60 focus:bg-white/[0.06]"
      />
    </label>
  )
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    details: '',
  })
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://formspree.io/f/xpqygwje', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', company: '', projectType: '', details: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  function scrollToForm(e) {
    e.preventDefault()
    document.querySelector('#contact form')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

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
              <ContactDetail
                label="Email"
                value="lucim.io.ai@gmail.com"
                href="mailto:lucim.io.ai@gmail.com"
              />
              <ContactDetail
                label="Book a call"
                value="Schedule a discovery call"
                href="https://calendly.com/shamranshamu3825/discovery-call"
              />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" onClick={scrollToForm}>
                <PrimaryButton>Start a project</PrimaryButton>
              </a>
              <a href="#services">
                <SecondaryButton>View services</SecondaryButton>
              </a>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(27,8,41,0.92),rgba(10,1,18,0.98))] p-6 shadow-[0_0_80px_rgba(173,78,255,0.08)] backdrop-blur sm:p-8">
            {status === 'success' ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ff58ff]/15">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M6 16L12 22L26 8" stroke="#ff58ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#fff2ff]">Message sent!</h3>
                <p className="text-sm text-[#cfa8e8]">
                  Thanks for reaching out. We will get back to you within 1-2 business days.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-sm text-[#ff58ff] underline underline-offset-4 hover:opacity-80"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Input label="Name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} />
                  <Input label="Email" name="email" type="email" placeholder="you@company.com" value={formData.email} onChange={handleChange} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Input label="Company" name="company" placeholder="Company or brand" value={formData.company} onChange={handleChange} />
                  <Input label="Project type" name="projectType" placeholder="Website, automation, security" value={formData.projectType} onChange={handleChange} />
                </div>
                <Textarea
                  label="Project details"
                  name="details"
                  placeholder="Tell us about your goals, current stack, timeline, or the systems you want to improve."
                  value={formData.details}
                  onChange={handleChange}
                />
                {status === 'error' && (
                  <p className="text-sm text-red-400">Something went wrong. Please try again or email us directly.</p>
                )}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-[#cfa8e8]">We usually respond within 1-2 business days.</p>
                  <PrimaryButton type="submit" className="justify-center" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending...' : 'Send inquiry'}
                  </PrimaryButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection