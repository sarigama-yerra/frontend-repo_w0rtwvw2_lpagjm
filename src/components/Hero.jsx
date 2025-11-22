import { motion } from 'framer-motion'
import { Sparkles, PhoneCall } from 'lucide-react'

export default function Hero({ onQuoteClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.25),transparent_40%)]" />
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-24 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white rounded-full px-3 py-1 text-sm mb-6">
              <Sparkles className="w-4 h-4" /> Premium Window Cleaning
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Make your storefront shine like new
            </h1>
            <p className="mt-5 text-lg text-blue-100 max-w-xl">
              Professional window cleaning for shopping malls, offices and retail. Streak‑free results, safety‑first teams, flexible scheduling.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button onClick={onQuoteClick} className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 transition">
                Get a free quote
              </button>
              <a href="#contact" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 backdrop-blur transition inline-flex items-center gap-2">
                <PhoneCall className="w-5 h-5" /> Contact us
              </a>
            </div>
            <div className="mt-6 text-blue-100/80 text-sm">Fully insured • Trained technicians • Eco‑friendly solutions</div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur overflow-hidden shadow-2xl">
              <img src="/glass-clean-hero.jpg" alt="Window cleaning" className="w-full h-full object-cover opacity-90" />
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="font-semibold">98% streak‑free score</div>
              <div className="text-sm text-slate-500">Based on client inspections</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
