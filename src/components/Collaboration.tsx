import { motion } from "framer-motion";
import { collabs } from "../data/portfolio";

export default function Collaboration(): React.JSX.Element {
  return (
    <section id="collab" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs text-indigo-500 uppercase tracking-widest mb-2 font-semibold">Collaboration</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">협업 방식</h2>
        <p className="text-gray-500 mb-12">팀 프로젝트에서 실천한 협업 문화와 커뮤니케이션 방식입니다.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collabs.map((item, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all duration-300"
          >
            <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 text-lg">
              {ICONS[i % ICONS.length]}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 mb-5 leading-relaxed">{item.description}</p>
            <ul className="flex flex-col gap-2.5">
              {item.details.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                  <span className="text-indigo-500 shrink-0 mt-0.5">▸</span>
                  {d}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

const ICONS = ["🔍", "🌿", "🏗️"];
