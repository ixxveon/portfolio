import { motion } from "framer-motion";
import { projects } from "../data/portfolio";

export default function Projects(): React.JSX.Element {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs text-indigo-500 uppercase tracking-widest mb-2 font-semibold">Projects</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-12">프로젝트</h2>
      </motion.div>

      <div className="flex flex-col gap-8">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all duration-300 cursor-default"
          >
            <div className="flex items-start justify-between gap-4 flex-wrap mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-xs px-2 py-1 bg-indigo-50 text-indigo-600 rounded-md border border-indigo-100 font-medium">
                    {project.team}
                  </span>
                </div>
                <p className="text-sm text-gray-400">{project.period}</p>
              </div>
              <div className="flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs px-3 py-1.5 border border-gray-200 rounded-lg text-gray-500 hover:text-indigo-600 hover:border-indigo-300 transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <p className="text-gray-500 mb-6 leading-relaxed">{project.description}</p>

            <div className="mb-6">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-2 font-semibold">My Role</p>
              <p className="text-gray-700 font-medium">{project.role}</p>
            </div>

            <div className="mb-6">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3 font-semibold">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3 font-semibold">
                Key Contributions
              </p>
              <ul className="flex flex-col gap-2.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-gray-600 text-sm leading-relaxed">
                    <span className="text-indigo-500 mt-0.5 shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
