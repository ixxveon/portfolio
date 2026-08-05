import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const COLLAB_CARDS = [
  {
    icon: "👁️",
    keyword: "코드 품질 향상",
    headline: "1인 이상 필수 리뷰 도입",
    color: "text-violet-600 bg-violet-50 border-violet-100",
    details: [
      "CodeRabbit + 팀원 크로스 리뷰 병행",
      "인라인 코멘트로만 피드백, 중복 지적 방지",
      "Must Fix / Should Fix 기준으로 리뷰 분류",
    ],
  },
  {
    icon: "🌿",
    keyword: "브랜치 전략",
    headline: "feature/fix/docs 역할 분리",
    color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    details: [
      "브랜치명: feature/{이슈번호}-{설명}",
      "커밋: {type}({branch-name}) : {summary}",
      "develop → main 머지 전략으로 안정성 유지",
    ],
  },
  {
    icon: "🏗️",
    keyword: "아키텍처 결정",
    headline: "설계 근거를 팀 내 문서화",
    color: "text-blue-600 bg-blue-50 border-blue-100",
    details: [
      "admin / user 도메인 완전 분리 구조 채택",
      "ErrorCode 글로벌 + 도메인별 파일 분리 합의 주도",
      "Swagger 어노테이션을 docs 패키지 인터페이스로 분리",
    ],
  },
];

const GALLERY_ITEMS = [
  {
    src: "/review.png",
    label: "문제 발생",
    badgeColor: "bg-red-500",
    title: "Timeout 이후 늦게 도착한 스트림 처리 누락",
    annotation: "8초 timeout fallback 발동 후에도 늦게 도착한 LLM_STREAM이 그대로 처리되어 질문이 중복 추가되는 버그 발견",
  },
  {
    src: "/merged.png",
    label: "해결 완료",
    badgeColor: "bg-emerald-500",
    title: "request/generation id 기반 스트림 필터링 적용",
    annotation: "현재 대기 중인 응답만 커밋하도록 id 검증 로직 추가 후 머지 완료",
  },
];

const EPISODE = {
  title: "Timeout Fallback 이후 스트림 중복 처리 문제",
  steps: [
    {
      label: "문제",
      color: "border-red-200 bg-red-50 text-red-700",
      dot: "bg-red-400",
      content:
        "8초 timeout fallback이 발동된 뒤에도 늦게 도착한 LLM_STREAM이 그대로 처리되어, fallback 질문과 실제 스트림 질문이 둘 다 추가되는 버그 발생",
    },
    {
      label: "원인",
      color: "border-amber-200 bg-amber-50 text-amber-700",
      dot: "bg-amber-400",
      content:
        "questionOrder가 fallback 기준으로 증가한 상태에서 이전 요청의 늦은 스트림 응답을 구분하는 로직이 없어 그대로 커밋됨",
    },
    {
      label: "해결",
      color: "border-blue-200 bg-blue-50 text-blue-700",
      dot: "bg-blue-400",
      content:
        "request/generation id를 기준으로 현재 대기 중인 응답만 커밋하도록 필터링 로직 추가. fallback 이후 도착한 늦은 스트림은 무시 처리",
    },
    {
      label: "배운 점",
      color: "border-emerald-200 bg-emerald-50 text-emerald-700",
      dot: "bg-emerald-400",
      content:
        "비동기 스트리밍 환경에서는 응답 순서를 보장할 수 없으므로, 요청 단위의 id 추적이 필수임을 체감. PR 리뷰를 통해 엣지케이스를 사전에 발견할 수 있었음",
    },
  ],
};

export default function Collaboration(): React.JSX.Element {
  const [hovered, setHovered] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="collab" className="py-24 px-6 max-w-5xl mx-auto w-full">
      {/* 헤더 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs text-indigo-500 uppercase tracking-widest mb-2 font-semibold">
          Collaboration
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">협업 방식</h2>
        <p className="text-gray-500 mb-12">
          팀 프로젝트에서 실천한 협업 문화와 실제 코드 리뷰 에피소드입니다.
        </p>
      </motion.div>

      {/* 카드 — 호버 툴팁 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
        {COLLAB_CARDS.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className={`border rounded-2xl p-5 cursor-default transition-all duration-200 ${card.color} hover:shadow-md`}
            >
              <span className="text-2xl mb-3 block">{card.icon}</span>
              <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-70">
                {card.keyword}
              </p>
              <p className="font-semibold text-sm leading-snug">{card.headline}</p>
            </div>

            <AnimatePresence>
              {hovered === i && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 right-0 mt-2 z-20 bg-white border border-gray-200 rounded-xl shadow-xl p-4"
                >
                  <ul className="flex flex-col gap-2">
                    {card.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-indigo-400 shrink-0 mt-0.5">▸</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* 갤러리 — Before & After */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-6 font-semibold">
          Code Review — Before & After
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GALLERY_ITEMS.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group cursor-pointer"
              onClick={() => setLightbox(img.src)}
            >
              <div className="relative overflow-hidden rounded-xl border border-gray-200 shadow-sm group-hover:shadow-lg group-hover:border-indigo-200 transition-all">
                {/* 배지 */}
                <span
                  className={`absolute top-3 left-3 z-10 text-xs text-white font-bold px-2.5 py-1 rounded-full ${img.badgeColor} shadow`}
                >
                  {img.label}
                </span>
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* 어노테이션 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-xs leading-relaxed">{img.annotation}</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-700 mt-3">{img.title}</p>
            </motion.div>
          ))}
        </div>

        {/* 화살표 연결 */}
        <div className="hidden md:flex items-center justify-center my-2 text-gray-300 text-2xl select-none pointer-events-none absolute left-1/2 -translate-x-1/2">
        </div>
      </motion.div>

      {/* 에피소드 카드 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs px-2.5 py-1 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-full font-semibold">
            협업 에피소드
          </span>
          <h3 className="text-lg font-bold text-gray-900">{EPISODE.title}</h3>
        </div>

        <div className="flex flex-col gap-4">
          {EPISODE.steps.map((step) => (
            <div key={step.label} className={`rounded-xl border p-4 ${step.color}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className={`w-2 h-2 rounded-full shrink-0 ${step.dot}`} />
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">
                  {step.label}
                </p>
              </div>
              <p className="text-sm leading-relaxed opacity-90">{step.content}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 라이트박스 */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightbox}
              alt="review"
              className="max-w-4xl max-h-[90vh] rounded-xl object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
