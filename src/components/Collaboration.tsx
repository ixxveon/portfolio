import { collabs } from "../data/portfolio";

export default function Collaboration(): React.JSX.Element {
  return (
    <section id="collab" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <div>
        <p className="text-xs text-indigo-400 uppercase tracking-widest mb-2">Collaboration</p>
        <h2 className="text-3xl font-bold text-white">협업 방식</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {collabs.map((item, idx) => (
          <article
            key={idx}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-colors"
          >
            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{item.description}</p>
            <ul className="flex flex-col gap-2">
              {item.details.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="text-indigo-400 shrink-0 mt-0.5">▸</span>
                  {d}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
