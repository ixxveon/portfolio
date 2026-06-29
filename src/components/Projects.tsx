import { projects } from "../data/portfolio";

export default function Projects(): React.JSX.Element {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <SectionTitle label="Projects" title="주요 프로젝트" />

      <div className="flex flex-col gap-8 mt-12">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-colors"
          >
            <div className="flex items-start justify-between gap-4 flex-wrap mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {project.period} · {project.team}
                </p>
              </div>
              <div className="flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs px-3 py-1.5 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs px-3 py-1.5 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <p className="text-gray-400 mb-4">{project.description}</p>

            <div className="mb-6">
              <span className="text-xs text-gray-500 uppercase tracking-widest">My Role</span>
              <p className="text-gray-300 mt-1 font-medium">{project.role}</p>
            </div>

            <div className="mb-6">
              <span className="text-xs text-gray-500 uppercase tracking-widest">Tech Stack</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 bg-gray-800 text-gray-300 rounded-md border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs text-gray-500 uppercase tracking-widest">Highlights</span>
              <ul className="mt-2 flex flex-col gap-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-gray-400 text-sm">
                    <span className="text-indigo-400 mt-0.5 shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SectionTitle({ label, title }: { label: string; title: string }): React.JSX.Element {
  return (
    <div>
      <p className="text-xs text-indigo-400 uppercase tracking-widest mb-2">{label}</p>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
    </div>
  );
}
