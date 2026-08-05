import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

const VALUES = [
  {
    icon: "🏗️",
    label: "설계 근거 문서화",
    desc: "ErrorCode 도메인 분리, 도메인 경계 설계 등 모든 결정에 이유를 남깁니다.",
  },
  {
    icon: "📋",
    label: "컨벤션 주도 & PR 리뷰",
    desc: "Must Fix / Should Fix 기준 리뷰, 팀 전체 코드 품질 향상을 이끌었습니다.",
  },
  {
    icon: "🔍",
    label: "근본 원인 추적",
    desc: "CI 게이트 실패, AOP self-invocation 등 표면이 아닌 원인까지 파고듭니다.",
  },
];

export default function Hero(): React.JSX.Element {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto w-full pt-14"
    >
      {/* 2분할 레이아웃 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* 좌측 — 텍스트 */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full text-xs text-green-700 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-2">
              {profile.nameEn}
            </h1>
            <p className="text-xl text-indigo-600 font-semibold">{profile.role}</p>
            <p className="text-gray-500 mt-3 leading-relaxed">{profile.tagline}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-3 flex-wrap"
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
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-200"
            >
              이력서 보기
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="px-5 py-2.5 border border-gray-300 text-gray-600 rounded-lg text-sm hover:border-indigo-400 hover:text-indigo-600 transition-colors"
            >
              {profile.email}
            </a>
          </motion.div>

          {/* About Me 카드 3개 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-3 pt-4 border-t border-gray-100"
          >
            <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">About Me</p>
            <p className="text-gray-500 text-sm leading-relaxed">{profile.bio}</p>
            <div className="grid grid-cols-1 gap-3">
              {VALUES.map((v) => (
                <div
                  key={v.label}
                  className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all"
                >
                  <span className="text-lg shrink-0">{v.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{v.label}</p>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 우측 — 프로필 요약 */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          {/* 숫자 강조 카드 */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "2", label: "팀 프로젝트", sub: "미니 + 파이널" },
              { num: "5+", label: "담당 도메인", sub: "백엔드 중심" },
              { num: "3+", label: "스택 레이어", sub: "BE · FE · AI" },
              { num: "100%", label: "CI 통과율", sub: "파이프라인 개선" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all"
              >
                <p className="text-3xl font-bold text-indigo-600">{stat.num}</p>
                <p className="text-sm font-semibold text-gray-800 mt-1">{stat.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* 핵심 키워드 카드 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-3">Focus Area</p>
            <div className="flex flex-wrap gap-2">
              {[
                "실시간 스트리밍 설계",
                "도메인 경계 설계",
                "ErrorCode 아키텍처",
                "상태 머신 모델링",
                "PR 리뷰 문화",
                "CI 파이프라인",
                "TypeScript 타입 안전성",
              ].map((kw) => (
                <span
                  key={kw}
                  className="text-xs px-3 py-1.5 bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-full font-medium"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* 현재 학습 중 */}
          <div className="bg-gradient-to-br from-indigo-50 to-slate-50 border border-indigo-100 rounded-2xl p-5">
            <p className="text-xs text-indigo-500 uppercase tracking-widest font-semibold mb-2">Currently Learning</p>
            <div className="flex flex-col gap-1.5">
              {["Spring Security · OAuth2.0", "JPA 성능 최적화 (N+1, 인덱스)", "알고리즘 · 코딩 테스트"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
