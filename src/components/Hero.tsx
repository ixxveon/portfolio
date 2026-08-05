import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

export default function Hero(): React.JSX.Element {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto w-full pt-14"
    >
      <div className="flex flex-col gap-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-gray-500">Available for opportunities</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-3">
            {profile.nameEn}
          </h1>
          <p className="text-2xl text-indigo-600 font-semibold">{profile.role}</p>
          <p className="text-gray-500 mt-4 text-lg leading-relaxed">{profile.tagline}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-3"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="px-5 py-2.5 border border-gray-300 text-gray-600 rounded-lg text-sm hover:border-indigo-400 hover:text-indigo-600 transition-colors"
          >
            {profile.email}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col gap-4 pt-6 border-t border-gray-200"
        >
          <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">About Me</p>
          <p className="text-gray-600 leading-relaxed">{profile.bio}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
            {profile.values.map((v) => (
              <div
                key={v.label}
                className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all"
              >
                <p className="text-sm font-semibold text-gray-800 mb-1">{v.label}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
