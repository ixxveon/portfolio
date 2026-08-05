import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

const VALUES = [
  { icon: "🏗️", label: "설계 근거 문서화", desc: "모든 결정에 이유를 남깁니다." },
  { icon: "📋", label: "컨벤션 주도 & PR 리뷰", desc: "팀 전체 코드 품질을 함께 높입니다." },
  { icon: "🔍", label: "근본 원인 추적", desc: "표면이 아닌 원인까지 파고듭니다." },
];

const FOCUS = [
  "실시간 스트리밍 설계",
  "도메인 경계 설계",
  "ErrorCode 아키텍처",
  "상태 머신 모델링",
  "TypeScript 타입 안전성",
];

const LEARNING = [
  "Spring Security · OAuth2.0",
  "JPA 성능 최적화 (N+1, 인덱스)",
  "알고리즘 · 코딩 테스트",
];

export default function Hero(): React.JSX.Element {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto w-full pt-14"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* 좌측 */}
        <motion.div
          className="flex flex-col gap-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 상단 — 이름·직무·버튼 */}
          <div className="flex flex-col gap-5">
            <span className="inline-flex items-center gap-2 w-fit px-3 py-1.5 bg-green-50 border border-green-200 rounded-full text-xs text-green-700 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Available for opportunities
            </span>

            <div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">{profile.nameEn}</h1>
              <p className="text-xl text-indigo-600 font-semibold mt-2">{profile.role}</p>
              <p className="text-gray-500 mt-3 leading-relaxed text-sm">{profile.tagline}</p>
            </div>

            <div className="flex gap-3 flex-wrap">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
              >
                GitHub
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-500 transition-colors"
              >
                이력서 보기
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="px-5 py-2.5 border border-gray-200 text-gray-500 rounded-lg text-sm hover:border-indigo-300 hover:text-indigo-600 transition-colors"
              >
                {profile.email}
              </a>
            </div>
          </div>

          {/* 하단 — About Me */}
          <div className="flex flex-col gap-4 pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">About Me</p>
            <p className="text-gray-500 text-sm leading-relaxed">{profile.bio}</p>
            <div className="flex flex-col gap-3">
              {VALUES.map((v) => (
                <div key={v.label} className="flex items-start gap-3">
                  <span className="text-base mt-0.5 shrink-0">{v.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{v.label}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 우측 — 통합 카드 */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col gap-8">
            {/* Focus Area */}
            <div className="flex flex-col gap-4">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Focus Area</p>
              <div className="flex flex-wrap gap-2">
                {FOCUS.map((kw) => (
                  <span
                    key={kw}
                    className="text-xs px-3 py-1.5 bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-full font-medium"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* Currently Learning */}
            <div className="flex flex-col gap-4">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Currently Learning</p>
              <div className="flex flex-col gap-3">
                {LEARNING.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
