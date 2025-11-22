import { useState } from 'react'

export default function Contact() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Contact Us</h2>
        <p className="mt-3 text-center text-blue-100/90">Tell us about your property and we’ll get back quickly.</p>
        <form onSubmit={onSubmit} className="mt-10 grid gap-4 bg-white/10 border border-white/20 backdrop-blur p-6 rounded-2xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-blue-100/50" placeholder="Full name" name="name" value={form.name} onChange={onChange} required />
            <input className="px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-blue-100/50" placeholder="Email" type="email" name="email" value={form.email} onChange={onChange} required />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-blue-100/50" placeholder="Phone (optional)" name="phone" value={form.phone} onChange={onChange} />
            <input className="px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-blue-100/50" placeholder="Subject (optional)" name="subject" value={form.subject} onChange={onChange} />
          </div>
          <textarea className="px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-blue-100/50 min-h-[140px]" placeholder="Message" name="message" value={form.message} onChange={onChange} required />
          <button className="mt-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition disabled:opacity-60" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
          {status === 'success' && <p className="text-green-300">Thanks! We’ll be in touch shortly.</p>}
          {status === 'error' && <p className="text-red-300">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  )
}
