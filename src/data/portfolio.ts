export interface Project {
  title: string;
  period: string;
  team: string;
  description: string;
  role: string;
  techStack: string[];
  highlights: string[];
  github?: string;
  demo?: string;
}

export interface TroubleItem {
  project: string;
  title: string;
  situation: string;
  cause: string;
  action: string;
  result: string;
}

export interface CollabItem {
  title: string;
  description: string;
  details: string[];
}

export interface SkillItem {
  category: string;
  items: { name: string; project: string }[];
}

export const profile = {
  name: "이가연",
  nameEn: "Gayeon Lee",
  role: "Backend Developer",
  tagline: "복잡한 도메인을 명확한 구조로 풀어내는 백엔드 개발자",
  bio: "문제를 끝까지 파고드는 것을 좋아합니다. 설계 결정에는 항상 근거를 남기고, 팀의 컨벤션과 코드 품질을 함께 끌어올리는 데 적극적으로 참여합니다.",
  values: [
    { label: "근거 있는 설계", desc: "왜 이렇게 짰는지 항상 설명할 수 있어야 한다고 생각해요." },
    { label: "팀 컨벤션 주도", desc: "개인보다 팀의 일관성이 더 중요하다고 생각해요." },
    { label: "끝까지 파고들기", desc: "에러 원인을 표면이 아닌 근본까지 추적합니다." },
  ],
  email: "igayeon322s@gmail.com",
  github: "https://github.com/ixxveon",
};

export const skills: SkillItem[] = [
  {
    category: "Backend",
    items: [
      { name: "Java", project: "MapInGo · CareerWave" },
      { name: "Spring Boot", project: "MapInGo · CareerWave" },
      { name: "JPA", project: "MapInGo · CareerWave" },
      { name: "MySQL", project: "MapInGo · CareerWave" },
      { name: "Redis", project: "MapInGo · CareerWave" },
    ],
  },
  {
    category: "Real-time",
    items: [
      { name: "WebSocket", project: "MapInGo · CareerWave" },
      { name: "STOMP", project: "MapInGo · CareerWave" },
      { name: "FastAPI", project: "CareerWave" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", project: "MapInGo · CareerWave" },
      { name: "TypeScript", project: "MapInGo · CareerWave" },
      { name: "TanStack Query", project: "CareerWave" },
      { name: "Tailwind CSS", project: "MapInGo · CareerWave" },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "CareerWave",
    period: "2026.05 – 2026.07.20",
    team: "6인 팀 프로젝트 (파이널)",
    description:
      "AI 기반 취업 준비 플랫폼. 면접 연습, 이력서 분석, 자기소개서 생성 기능을 제공합니다.",
    role: "백엔드 개발 / 면접 도메인 리드",
    techStack: ["Java 21", "Spring Boot", "FastAPI", "WebSocket", "STOMP", "MySQL", "Redis"],
    highlights: [
      "실시간 AI 면접 스트리밍 파이프라인 설계 — Spring이 요청을 받아 FastAPI로 전달, AI 응답을 WebSocket으로 클라이언트에 스트리밍",
      "면접 이력 전체 보기 페이지 구현 및 홈 위젯 연결 (페이지네이션 포함)",
      "ErrorCode를 global 공통 + 도메인별 파일로 분리하는 아키텍처 팀 합의 주도",
      "팀 컨벤션 문서 기반 PR 리뷰 — Must Fix / Should Fix 기준으로 코드 품질 관리",
    ],
    github: "",
    demo: "",
  },
  {
    title: "MapInGo",
    period: "2026.05 (2주)",
    team: "6인 팀 프로젝트 (미니)",
    description:
      "지도에서 장소를 선택하면 AI가 해당 장소 맞춤 영어 회화 상황을 생성하고, 말하기 분석 및 피드백을 제공하는 AI 기반 영어 학습 플랫폼",
    role: "백엔드 개발 — Learning / Social / Favorite / Ranking / Chat 도메인 담당",
    techStack: ["Java", "Spring Boot", "JPA", "MySQL", "Redis", "WebSocket", "STOMP"],
    highlights: [
      "친구 관계를 PENDING → ACCEPTED / REJECTED / BLOCKED 상태 머신으로 설계, 중복 요청 및 자기 자신 요청 방어 로직 포함",
      "study_score 집계 쿼리 기반 전체/주간/친구 랭킹 구현 — ACCEPTED 관계인 친구만 친구 랭킹에 포함",
      "학습 목표 최대 3개 동시 선택 제한, ACTIVE/CANCELLED 상태 기반 이력 관리",
      "WebSocket + STOMP 기반 실시간 채팅 — ENTER/CHAT/LEAVE 메시지 타입 분기 및 서버 세션 관리",
    ],
    github: "",
  },
];

export const troubles: TroubleItem[] = [
  {
    project: "CareerWave",
    title: "FastAPI CI 게이트 반복 실패",
    situation:
      "GitHub Actions에서 FastAPI lint/test CI가 반복 실패하여 팀 전체 PR 머지가 블로킹되는 상황 발생",
    cause:
      "lint 설정 파일과 실제 코드 스타일 불일치, CI 환경의 Python 의존성 캐싱 누락",
    action:
      "lint 설정 통일, CI workflow에 pip cache 단계 추가, null 처리 누락 코드 수정",
    result: "CI 통과율 100% 달성 및 팀 전체 PR 병목 해소",
  },
  {
    project: "CareerWave",
    title: "non-null 단언으로 인한 런타임 오류",
    situation:
      "프론트엔드에서 ! 연산자 남용으로 null 데이터 수신 시 런타임 에러가 반복 발생",
    cause:
      "API 응답의 선택적 필드를 non-null로 단언하여 예외 케이스를 놓침",
    action:
      "팀 컨벤션에 no-non-null-assertion 규칙 추가, 옵셔널 체이닝으로 전면 교체",
    result: "관련 런타임 오류 0건, 팀 전체 TypeScript 코드 품질 향상",
  },
];

export const collabs: CollabItem[] = [
  {
    title: "PR 리뷰 문화",
    description: "모든 머지는 최소 1인 이상 리뷰 후 진행",
    details: [
      "CodeRabbit + 팀원 크로스 리뷰 병행",
      "인라인 코멘트로만 피드백, 중복 지적 방지",
      "Must Fix / Should Fix 기준으로 리뷰 분류",
    ],
  },
  {
    title: "브랜치 & 커밋 전략",
    description: "feature/fix/docs 브랜치 역할 분리, develop → main 머지 전략",
    details: [
      "브랜치명: feature/{이슈번호}-{설명}",
      "커밋: {type}({branch-name}) : {summary}",
      "빌드 산출물 및 보안 정보 커밋 금지 규칙 준수",
    ],
  },
  {
    title: "아키텍처 결정 기록",
    description: "설계 결정에는 항상 근거와 트레이드오프를 팀 내 공유",
    details: [
      "admin / user 도메인 완전 분리 구조 채택",
      "ErrorCode 글로벌 + 도메인별 파일 분리 합의 주도",
      "Swagger 어노테이션을 docs 패키지 인터페이스로 분리",
    ],
  },
];
