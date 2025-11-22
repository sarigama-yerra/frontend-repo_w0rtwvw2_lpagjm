import { motion } from 'framer-motion'
import { Building2, Store, Factory, Droplets } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Commercial Offices',
    desc: 'Interior and exterior glass cleaning for office buildings and corporate headquarters.'
  },
  {
    icon: Store,
    title: 'Retail & Malls',
    desc: 'Showcase‑ready storefronts and mall facades with flexible off‑hours scheduling.'
  },
  {
    icon: Factory,
    title: 'Industrial Facilities',
    desc: 'High‑reach equipment and trained teams for warehouses and production sites.'
  },
  {
    icon: Droplets,
    title: 'Pressure Washing',
    desc: 'Exterior pressure washing and façade revitalization for entrances and walkways.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-white text-center">
          Services
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }} className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur">
              <s.icon className="w-8 h-8 text-blue-300" />
              <h3 className="mt-4 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-blue-100/90 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
