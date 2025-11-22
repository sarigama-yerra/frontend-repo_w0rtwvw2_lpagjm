import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Us</h2>
          <p className="mt-4 text-blue-100/90">
            We are a specialized window cleaning firm serving shopping malls, retail chains and commercial properties. Our certified technicians use eco‑friendly solutions and industry‑leading safety practices to deliver crystal‑clear results.
          </p>
          <ul className="mt-6 space-y-2 text-blue-100/90">
            <li>• Fully insured and compliant with local regulations</li>
            <li>• Uniformed teams, background‑checked and trained</li>
            <li>• Scheduled maintenance and emergency call‑outs</li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur overflow-hidden">
            <img src="/team-cleaning.jpg" alt="Our team" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
