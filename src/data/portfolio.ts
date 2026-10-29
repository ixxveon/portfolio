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
  commits?: { label: string; url: string }[];
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
      { name: "Java", project: "MapInGo · CareerWave · WinningPick" },
      { name: "Spring Boot", project: "MapInGo · CareerWave · WinningPick" },
      { name: "JPA", project: "MapInGo · CareerWave · WinningPick" },
      { name: "PostgreSQL", project: "CareerWave · WinningPick" },
      { name: "MySQL", project: "MapInGo" },
      { name: "Redis", project: "MapInGo · CareerWave · WinningPick" },
      { name: "AWS S3", project: "CareerWave" },
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
  {
    category: "Tools",
    items: [
      { name: "Git / GitHub", project: "MapInGo · CareerWave" },
      { name: "Swagger", project: "MapInGo · CareerWave" },
      { name: "Postman", project: "MapInGo · CareerWave" },
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
    role: "풀스택 개발 / 면접 도메인 리드 (백엔드 중심, 프론트·FastAPI 포함)",
    techStack: ["Java 21", "Spring Boot", "FastAPI", "WebSocket", "STOMP", "PostgreSQL", "Redis", "AWS S3", "React", "TypeScript"],
    highlights: [
      "음성 면접 파이프라인 구현 — 사용자 음성을 Whisper STT로 변환하고, LLM이 생성한 꼬리 질문을 OpenAI TTS로 재생",
      "Spring ↔ FastAPI ↔ 클라이언트 3계층 실시간 구조 — AI 응답은 FastAPI WebSocket으로 스트리밍, 면접 세션 이벤트는 Spring STOMP로 전달",
      "WebSocket 인증을 쿼리 파라미터에서 STOMP CONNECT 헤더로 옮기고 HTTP와 같은 JWT 검증 정책으로 통일",
      "STOMP 구독 시 면접 세션 소유자를 확인해 다른 사용자의 세션 접근(IDOR) 차단",
      "AI 서류 코칭 — 서류 업로드(S3) 후 FastAPI 분석을 요청하고, 진행 상태를 WebSocket으로 실시간 표시",
      "FastAPI CI에 pytest · ruff 게이트 추가, 파일 경로 탐색(path traversal) 취약점 수정",
    ],
    github: "https://github.com/ixxveon/career-wave",
    demo: "",
  },
  {
    title: "MapInGo",
    period: "2026.05 (2주)",
    team: "6인 팀 프로젝트 (미니)",
    description:
      "지도에서 장소를 선택하면 AI가 해당 장소 맞춤 영어 회화 상황을 생성하고, 말하기 분석 및 피드백을 제공하는 AI 기반 영어 학습 플랫폼",
    role: "풀스택 개발 — Learning / Social / Favorite / Ranking / Chat 도메인 담당 (백엔드 중심, 프론트 포함)",
    techStack: ["Java", "Spring Boot", "JPA", "MySQL", "Redis", "WebSocket", "STOMP", "React", "TypeScript"],
    highlights: [
      "친구 관계를 PENDING → ACCEPTED / REJECTED / BLOCKED 상태 머신으로 설계, 중복 요청 및 자기 자신 요청 방어 로직 포함",
      "study_score 집계 쿼리 기반 전체/주간/친구 랭킹 구현 — ACCEPTED 관계인 친구만 친구 랭킹에 포함",
      "학습 목표 최대 3개 동시 선택 제한, ACTIVE/CANCELLED 상태 기반 이력 관리",
      "WebSocket + STOMP 기반 실시간 채팅 — ENTER/CHAT/LEAVE 메시지 타입 분기 및 서버 세션 관리",
    ],
    github: "",
  },
  {
    title: "WinningPick",
    period: "2026.08 – 진행 중",
    team: "3인 팀 프로젝트",
    description: "야구 팬을 위한 직관 기록 · 커뮤니티 서비스",
    role: "회원 · 인증 · 커뮤니티 도메인 풀스택 + 초기 개발 환경 세팅",
    techStack: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Redis", "React", "TypeScript", "GitHub Actions"],
    highlights: [
      "구글 · 카카오 · 네이버 소셜 로그인 및 자동 가입, 로그인 성공 시 JWT 발급",
      "구글은 OIDC 방식이라 OAuth2UserService가 호출되지 않던 문제를 찾아 OidcUserService로 전환",
      "회원 탈퇴 시 작성글 · 댓글은 유지하고 작성자만 '탈퇴한 회원'으로 표시, 재가입이 막히지 않도록 이메일 · 닉네임 익명화",
      "모듈별 GitHub Actions CI와 Docker Compose(PostgreSQL · Redis) 개발 환경 구성",
      "리뷰 병목으로 PR이 쌓이던 원인을 브랜치 규칙에서 찾아 개선(필수 승인 수 · 승인 초기화 조건 조정)",
    ],
    github: "https://github.com/ixxveon/baseball-project",
  },
];

export const troubles: TroubleItem[] = [
  {
    project: "CareerWave",
    title: "재연결 후 면접 상태가 화면에 표시되지 않는 문제",
    situation:
      "면접 중 WebSocket이 재연결되면 서버가 현재 면접 상태를 다시 보내야 하는데, 서버는 전송했지만 클라이언트 화면에는 표시되지 않음",
    cause:
      "채널 인터셉터의 preSend 단계에서 상태를 보냈는데, 이 시점은 SUBSCRIBE가 브로커에 등록되기 전이라 받을 구독자가 없어 메시지가 버려짐",
    action:
      "전송 시점을 구독 등록이 끝난 뒤 발생하는 SessionSubscribeEvent 리스너로 옮김. 이후 코드 리뷰를 반영해 스냅샷은 /topic 브로드캐스트 대신 convertAndSendToUser로 재연결한 세션에만 보내도록 변경",
    result: "재연결 후 면접 상태가 정상 복구되고, 같은 면접을 구독 중인 다른 연결에 스냅샷이 중복 전달되는 문제도 함께 방지",
    commits: [
      {
        label: "preSend → SessionSubscribeEvent 전환",
        url: "https://github.com/ixxveon/career-wave/commit/23672d25",
      },
      {
        label: "코드 리뷰 반영: 스냅샷 유니캐스트 전환",
        url: "https://github.com/ixxveon/career-wave/commit/bb7688dd",
      },
    ],
  },
  {
    project: "CareerWave",
    title: "FastAPI CI 게이트 반복 실패",
    situation:
      "GitHub Actions에서 FastAPI lint/test CI가 반복 실패하여 팀 전체 PR 머지가 블로킹되는 상황 발생",
    cause:
      "lint 설정 파일과 실제 코드 스타일 불일치, CI 환경의 Python 의존성 캐싱 누락",
    action:
      "lint 설정 통일, CI workflow에 pip cache 단계 추가, null 처리 누락 코드 수정",
    result: "CI가 다시 안정적으로 통과하면서 막혀 있던 팀 PR 머지 재개",
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
    result: "같은 유형의 런타임 오류가 재발하지 않도록 린트 규칙으로 사전 차단",
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
