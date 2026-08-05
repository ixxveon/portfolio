import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

export default function Skills(): React.JSX.Element {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs text-indigo-500 uppercase tracking-widest mb-2 font-semibold">Skills</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-12">기술 스택</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all"
          >
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-4 font-semibold">
              {group.category}
            </p>
            <div className="flex flex-col gap-3">
              {group.items.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{item.name}</span>
                  <span className="text-xs text-gray-400">{item.project}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
