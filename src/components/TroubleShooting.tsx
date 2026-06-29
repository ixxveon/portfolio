import { troubles } from "../data/portfolio";

export default function TroubleShooting(): React.JSX.Element {
  return (
    <section id="trouble" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <div>
        <p className="text-xs text-indigo-400 uppercase tracking-widest mb-2">Trouble Shooting</p>
        <h2 className="text-3xl font-bold text-white">문제 해결 경험</h2>
      </div>

      <div className="flex flex-col gap-6 mt-12">
        {troubles.map((item) => (
          <article
            key={item.title}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-colors"
          >
            <div className="mb-6">
              <span className="text-xs px-2 py-1 bg-indigo-500/20 text-indigo-400 rounded-md border border-indigo-500/30">
                {item.project}
              </span>
              <h3 className="text-xl font-bold text-white mt-3">{item.title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <StarItem color="yellow" label="S — Situation" content={item.situation} />
              <StarItem color="red" label="T — Task" content={item.cause} />
              <StarItem color="blue" label="A — Action" content={item.action} />
              <StarItem color="green" label="R — Result" content={item.result} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

type StarColor = "yellow" | "red" | "blue" | "green";

const COLOR_MAP: Record<StarColor, string> = {
  yellow: "border-yellow-500/30 bg-yellow-500/5",
  red: "border-red-500/30 bg-red-500/5",
  blue: "border-blue-500/30 bg-blue-500/5",
  green: "border-green-500/30 bg-green-500/5",
};

const LABEL_COLOR_MAP: Record<StarColor, string> = {
  yellow: "text-yellow-400",
  red: "text-red-400",
  blue: "text-blue-400",
  green: "text-green-400",
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
      <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${LABEL_COLOR_MAP[color]}`}>
        {label}
      </p>
      <p className="text-gray-300 text-sm leading-relaxed">{content}</p>
    </div>
  );
}
