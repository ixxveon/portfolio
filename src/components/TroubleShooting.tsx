import { motion } from "framer-motion";
import { troubles } from "../data/portfolio";

export default function TroubleShooting(): React.JSX.Element {
  return (
    <section id="trouble" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs text-indigo-500 uppercase tracking-widest mb-2 font-semibold">Trouble Shooting</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">문제 해결 경험</h2>
        <p className="text-gray-500 mb-12">실제 프로젝트에서 마주친 기술적 문제와 해결 과정을 기록합니다.</p>
      </motion.div>

      <div className="flex flex-col gap-6">
        {troubles.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all"
          >
            <div className="mb-6">
              <span className="text-xs px-2 py-1 bg-indigo-50 text-indigo-600 rounded-md border border-indigo-100 font-medium">
                {item.project}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mt-3">{item.title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <StarItem color="red" label="Problem — 문제 상황" content={item.situation} />
              <StarItem color="yellow" label="Cause — 원인 분석" content={item.cause} />
              <StarItem color="blue" label="Solution — 해결 방법" content={item.action} />
              <StarItem color="green" label="Takeaway — 배운 점" content={item.result} />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

type StarColor = "yellow" | "red" | "blue" | "green";

const COLOR_MAP: Record<StarColor, string> = {
  yellow: "border-amber-200 bg-amber-50",
  red: "border-red-200 bg-red-50",
  blue: "border-blue-200 bg-blue-50",
  green: "border-green-200 bg-green-50",
};

const LABEL_COLOR_MAP: Record<StarColor, string> = {
  yellow: "text-amber-600",
  red: "text-red-600",
  blue: "text-blue-600",
  green: "text-green-600",
};

function StarItem({
  color,
  label,
  content,
}: {
  color: StarColor;
  label: string;
  content: string;
}): React.JSX.Element {
  return (
    <div className={`rounded-xl p-4 border ${COLOR_MAP[color]}`}>
      <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${LABEL_COLOR_MAP[color]}`}>
        {label}
      </p>
      <p className="text-gray-700 text-sm leading-relaxed">{content}</p>
    </div>
  );
}
