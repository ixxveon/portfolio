import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { troubles } from "../data/portfolio";

const TROUBLE_IMAGES: Record<number, { before: string; after: string }> = {
  0: { before: "/trouble-error.png", after: "/trouble-diff.png" },
};

export default function TroubleShooting(): React.JSX.Element {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="trouble" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs text-indigo-500 uppercase tracking-widest mb-2 font-semibold">
          Trouble Shooting
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">문제 해결 경험</h2>
        <p className="text-gray-500 mb-16">
          실제 프로젝트에서 마주친 기술적 문제와 해결 과정을 기록합니다.
        </p>
      </motion.div>

      <div className="flex flex-col gap-20">
        {troubles.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            {/* 헤더 */}
            <div className="flex items-center gap-3">
              <span className="text-xs px-2.5 py-1 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-full font-semibold">
                {item.project}
              </span>
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
            </div>

            {/* 텍스트 + 이미지 좌우 배치 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* STAR 카드 */}
              <div className="flex-1 grid grid-cols-1 gap-4">
                <StarItem color="red" label="Problem — 문제 상황" content={item.situation} />
                <StarItem color="yellow" label="Cause — 원인 분석" content={item.cause} />
                <StarItem color="blue" label="Solution — 해결 방법" content={item.action} />
                <StarItem color="green" label="Takeaway — 배운 점" content={item.result} />
              </div>

              {/* Before & After 이미지 */}
              {TROUBLE_IMAGES[i] && (
                <div className="flex-1 flex flex-col gap-4">
                  <ImageSlot
                    src={TROUBLE_IMAGES[i].before}
                    badge="Before"
                    badgeColor="bg-red-500"
                    annotation="문제 발생 당시 에러 로그 / 콘솔 화면"
                    onClick={() => setLightbox(TROUBLE_IMAGES[i].before)}
                  />
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-lg">↓</span>
                    <div className="flex-1 h-px bg-gray-200" />
                  </div>
                  <ImageSlot
                    src={TROUBLE_IMAGES[i].after}
                    badge="After"
                    badgeColor="bg-emerald-500"
                    annotation="수정된 코드 diff — 빨강(삭제) / 초록(추가)"
                    onClick={() => setLightbox(TROUBLE_IMAGES[i].after)}
                  />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

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
              alt="preview"
              className="max-w-4xl max-h-[90vh] rounded-xl object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ImageSlot({
  src,
  badge,
  badgeColor,
  annotation,
  onClick,
}: {
  src: string;
  badge: string;
  badgeColor: string;
  annotation: string;
  onClick: () => void;
}): React.JSX.Element {
  const [error, setError] = useState(false);

  return (
    <div
      className="relative group cursor-pointer rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all duration-300"
      onClick={onClick}
    >
      <span
        className={`absolute top-3 left-3 z-10 text-xs text-white font-bold px-2.5 py-1 rounded-full shadow ${badgeColor}`}
      >
        {badge}
      </span>
      {error ? (
        <div className="w-full h-44 bg-gray-50 flex flex-col items-center justify-center gap-2 text-gray-400">
          <span className="text-3xl">🖼️</span>
          <p className="text-xs">이미지를 public 폴더에 추가해주세요</p>
          <p className="text-xs font-mono text-gray-300">{src}</p>
        </div>
      ) : (
        <>
          <img
            src={src}
            alt={badge}
            className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setError(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
            <p className="text-white text-xs leading-relaxed">{annotation}</p>
          </div>
        </>
      )}
    </div>
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
