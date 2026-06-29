import { profile } from "../data/portfolio";

export default function Hero(): React.JSX.Element {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto w-full pt-14">
      <div className="flex flex-col gap-6 max-w-2xl">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-gray-400">Available for opportunities</span>
        </div>

        <h1 className="text-5xl font-bold text-white leading-tight">
          {profile.nameEn}
          <br />
          <span className="text-gray-400 font-normal text-3xl">{profile.role}</span>
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed">{profile.bio}</p>

        <div className="flex gap-3 flex-wrap">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="px-4 py-2 border border-gray-700 text-gray-300 rounded-lg text-sm hover:border-gray-500 hover:text-white transition-colors"
          >
            {profile.email}
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          {Object.entries(profile.skills).map(([category, items]) => (
            <div key={category} className="bg-gray-900 rounded-xl p-4 border border-gray-800">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">{category}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
