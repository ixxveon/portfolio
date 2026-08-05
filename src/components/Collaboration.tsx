import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface CollabItem {
  icon: string;
  keyword: string;
  headline: string;
  badgeColor: string;
  description: string;
  image: string;
  imageAlt: string;
  annotation: string;
  imageLeft: boolean;
}

const COLLAB_ITEMS: CollabItem[] = [
  {
    icon: "👁️",
    keyword: "Code Review",
    headline: "코드 리뷰로 품질을 함께 높이다",
    badgeColor: "bg-violet-100 text-violet-700 border-violet-200",
    description:
      "모든 PR은 최소 1인 이상 리뷰 후 머지. Must Fix / Should Fix 기준으로 피드백을 분류하고, 인라인 코멘트로만 소통해 중복 지적을 방지했습니다. CodeRabbit과 팀원 크로스 리뷰를 병행했습니다.",
    image: "/collab-review.png",
    imageAlt: "PR 코드 리뷰 화면",
    annotation: "동료의 엣지케이스 지적을 수용하고 Resolved 처리한 실제 리뷰 화면",
    imageLeft: false,
  },
  {
    icon: "🌿",
    keyword: "Branch Strategy",
    headline: "브랜치 전략으로 혼선 없이 협업",
    badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    description:
      "feature/{이슈번호}-{설명} 형식으로 브랜치를 관리하고, develop → main 머지 전략으로 안정성을 유지했습니다. 커밋 메시지는 {type}({branch}) : {summary} 형식을 팀 전체가 준수했습니다.",
    image: "/branchgraph.png",
    imageAlt: "Git 브랜치 그래프",
    annotation: "feature 브랜치가 develop으로 머지되는 실제 네트워크 그래프",
    imageLeft: true,
  },
  {
    icon: "📋",
    keyword: "Task Management",
    headline: "칸반 보드로 일정과 역할을 명확히",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
    description:
      "Notion 칸반 보드로 스프린트 단위 일정 관리. 본인이 맡은 태스크를 To Do → In Progress → Done으로 이동하며 팀 전체의 진척 상황을 실시간으로 공유했습니다.",
    image: "/collab-notion.png",
    imageAlt: "Notion 칸반 보드",
    annotation: "스프린트 단위로 관리된 태스크 보드 — 역할 분담과 진척 공유",
    imageLeft: false,
  },
];

export default function Collaboration(): React.JSX.Element {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="collab" className="py-24 px-6 max-w-5xl mx-auto w-full">
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
        <p className="text-gray-500 mb-16">
          팀 프로젝트에서 실천한 협업 문화와 실제 소통 방식입니다.
        </p>
      </motion.div>

      <div className="flex flex-col gap-24">
        {COLLAB_ITEMS.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`flex flex-col ${item.imageLeft ? "md:flex-row-reverse" : "md:flex-row"} gap-10 items-center`}
          >
            {/* 텍스트 */}
            <div className="flex-1 flex flex-col gap-4">
              <span className={`text-xs px-2.5 py-1 rounded-full border font-semibold w-fit ${item.badgeColor}`}>
                {item.icon} {item.keyword}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 leading-snug">{item.headline}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{item.description}</p>
            </div>

            {/* 이미지 */}
            <div className="flex-1 w-full">
              <div
                className="relative group cursor-pointer rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300"
                onClick={() => setLightbox(item.image)}
              >
                <ImageOrPlaceholder src={item.image} alt={item.imageAlt} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-xs leading-relaxed">{item.annotation}</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">{item.imageAlt}</p>
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

function ImageOrPlaceholder({ src, alt }: { src: string; alt: string }): React.JSX.Element {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full h-52 bg-gray-100 flex flex-col items-center justify-center gap-2 text-gray-400">
        <span className="text-3xl">🖼️</span>
        <p className="text-xs">이미지를 public 폴더에 추가해주세요</p>
        <p className="text-xs font-mono text-gray-300">{src}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
      onError={() => setError(true)}
    />
  );
}
