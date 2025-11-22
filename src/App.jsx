import { useState } from 'react'
import { Menu } from 'lucide-react'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Quote from './components/Quote'

function App() {
  const [openQuote, setOpenQuote] = useState(false)
  const nav = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <header className="sticky top-0 z-40 backdrop-blur bg-slate-900/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-xl tracking-tight">CrystalClear</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-blue-100">
            {nav.map(n => (
              <a key={n.label} href={n.href} className="hover:text-white transition">{n.label}</a>
            ))}
            <button onClick={() => setOpenQuote(true)} className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold">Free Quote</button>
          </nav>
          <button className="md:hidden"><Menu /></button>
        </div>
      </header>

      <main>
        <Hero onQuoteClick={() => setOpenQuote(true)} />
        <Services />
        <About />
        <Contact />
      </main>

      <footer className="py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-blue-200/80 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} CrystalClear Window Cleaning. All rights reserved.</p>
          <p>Safe • Insured • Eco‑friendly</p>
        </div>
      </footer>

      <Quote open={openQuote} onClose={() => setOpenQuote(false)} />
    </div>
  )
}

export default App
