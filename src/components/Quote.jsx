import { useState } from 'react'

export default function Quote({ open, onClose }) {
  if (!open) return null

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', location: '', property_type: '', approx_windows: '', frequency: '', notes: ''
  })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const payload = { ...form, approx_windows: form.approx_windows ? Number(form.approx_windows) : null }
      const res = await fetch(`${baseUrl}/api/quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', company: '', location: '', property_type: '', approx_windows: '', frequency: '', notes: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-slate-900/95 border border-white/20 rounded-2xl p-6 backdrop-blur">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">Free Quote</h3>
          <button onClick={onClose} className="text-blue-100 hover:text-white">Close</button>
        </div>
        <form onSubmit={onSubmit} className="mt-6 grid gap-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <input className="px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-blue-100/50" placeholder="Full name" name="name" value={form.name} onChange={onChange} required />
            <input className="px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-blue-100/50" placeholder="Email" type="email" name="email" value={form.email} onChange={onChange} required />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <input className="px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-blue-100/50" placeholder="Phone" name="phone" value={form.phone} onChange={onChange} />
            <input className="px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-blue-100/50" placeholder="Company (optional)" name="company" value={form.company} onChange={onChange} />
          </div>
          <input className="px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-blue-100/50" placeholder="Location / Address" name="location" value={form.location} onChange={onChange} required />
          <div className="grid sm:grid-cols-2 gap-3">
            <input className="px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-blue-100/50" placeholder="Property type (mall, office, etc.)" name="property_type" value={form.property_type} onChange={onChange} required />
            <input className="px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-blue-100/50" placeholder="Approx. windows" name="approx_windows" value={form.approx_windows} onChange={onChange} />
          </div>
          <input className="px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-blue-100/50" placeholder="Desired frequency (weekly, monthly, etc.)" name="frequency" value={form.frequency} onChange={onChange} />
          <textarea className="px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-blue-100/50 min-h-[100px]" placeholder="Additional notes" name="notes" value={form.notes} onChange={onChange} />
          <div className="flex items-center gap-3">
            <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition disabled:opacity-60" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Request quote'}
            </button>
            {status === 'success' && <p className="text-green-300">Request sent! We’ll reply soon.</p>}
            {status === 'error' && <p className="text-red-300">Something went wrong. Try again.</p>}
          </div>
        </form>
      </div>
    </div>
  )
}
