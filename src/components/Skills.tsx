import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

// 프로젝트 뱃지 색상
const PROJECT_BADGE: Record<string, string> = {
  CareerWave: "bg-indigo-50 text-indigo-600 border-indigo-200",
  MapInGo: "bg-emerald-50 text-emerald-600 border-emerald-200",
  "MapInGo · CareerWave": "", // split 처리
};

// 기술별 아이콘 (인라인 SVG or 컬러 도트)
const TECH_ICON: Record<string, React.ReactNode> = {
  Java: <Dot color="#f89820" />,
  "Spring Boot": <Dot color="#6db33f" />,
  JPA: <Dot color="#59666c" />,
  MySQL: <Dot color="#4479a1" />,
  Redis: <Dot color="#dc382d" />,
  WebSocket: <Dot color="#7c3aed" />,
  STOMP: <Dot color="#6366f1" />,
  FastAPI: <Dot color="#009688" />,
  React: <Dot color="#61dafb" />,
  TypeScript: <Dot color="#3178c6" />,
  "TanStack Query": <Dot color="#ef4444" />,
  "Tailwind CSS": <Dot color="#38bdf8" />,
  "Git / GitHub": <Dot color="#f05032" />,
  Swagger: <Dot color="#85ea2d" />,
  Postman: <Dot color="#ff6c37" />,
};

function Dot({ color }: { color: string }): React.JSX.Element {
  return (
    <span
      className="inline-block w-2.5 h-2.5 rounded-full shrink-0 mt-0.5"
      style={{ backgroundColor: color }}
    />
  );
}

function ProjectBadge({ name }: { name: string }): React.JSX.Element {
  const cls = PROJECT_BADGE[name] ?? "bg-gray-50 text-gray-500 border-gray-200";
  return (
    <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${cls}`}>
      {name}
    </span>
  );
}

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

      {/* 2열 → 4열 반응형 그리드 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300"
          >
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-4 font-semibold">
              {group.category}
            </p>
            <div className="flex flex-col gap-3.5">
              {group.items.map((item) => {
                const projects = item.project.includes(" · ")
                  ? item.project.split(" · ")
                  : [item.project];

                return (
                  <div key={item.name} className="group flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      {TECH_ICON[item.name] ?? <Dot color="#94a3b8" />}
                      <span className="text-sm font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors">
                        {item.name}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 pl-4">
                      {projects.map((p) => (
                        <ProjectBadge key={p} name={p.trim()} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
