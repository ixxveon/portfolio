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

export const profile = {
  name: "이가연",
  nameEn: "Gayeon Lee",
  role: "Backend Developer",
  bio: "문제를 끝까지 파고드는 백엔드 개발자입니다. 팀과 함께 성장하는 것을 좋아하고, 설계 결정에는 항상 근거를 남깁니다.",
  email: "igayeon322s@gmail.com",
  github: "https://github.com/ixxveon",
  skills: {
    backend: ["Java", "Spring Boot", "JPA", "MySQL", "Redis"],
    frontend: ["React", "TypeScript", "TanStack Query", "Tailwind CSS"],
    infra: ["Docker", "AWS EC2", "GitHub Actions", "Nginx"],
    etc: ["FastAPI", "Python", "WebSocket", "STOMP"],
  },
};

export const projects: Project[] = [
  {
    title: "CareerWave",
    period: "2025.03 – 진행 중",
    team: "6인 팀 프로젝트",
    description:
      "AI 기반 취업 준비 플랫폼. 면접 연습, 이력서 분석, 자기소개서 생성 기능을 제공합니다.",
    role: "백엔드 개발 / 면접 도메인 리드",
    techStack: [
      "Java 21",
      "Spring Boot",
      "FastAPI",
      "WebSocket",
      "STOMP",
      "MySQL",
      "Redis",
      "Docker",
    ],
    highlights: [
      "실시간 AI 면접 스트리밍 파이프라인 설계 (Spring ↔ FastAPI ↔ AI)",
      "면접 이력 조회 페이지 구현 및 홈 위젯 연결",
      "WebSocket + STOMP 기반 실시간 피드백 시스템 구축",
      "ErrorCode 도메인별 분리 아키텍처 설계",
    ],
    github: "https://github.com/ixxveon",
  },
];

export const troubles: TroubleItem[] = [
  {
    project: "CareerWave",
    title: "FastAPI CI 게이트 실패 문제",
    situation:
      "GitHub Actions에서 FastAPI lint/test CI가 반복적으로 실패하여 PR 머지가 블로킹되는 상황 발생",
    cause:
      "lint 설정 파일과 실제 코드 스타일 불일치, 그리고 CI 환경의 Python 의존성 캐싱 누락",
    action:
      "oxlint 설정 통일, CI workflow에 pip cache 단계 추가, null 처리 누락 코드 수정",
    result: "CI 통과율 100% 달성, 이후 팀 전체 PR 병목 해소",
  },
  {
    project: "CareerWave",
    title: "non-null 단언으로 인한 런타임 오류",
    situation: "프론트엔드에서 `!` 연산자 남용으로 null 데이터 수신 시 런타임 에러 발생",
    cause: "API 응답의 선택적 필드를 non-null로 단언하여 예외 케이스를 놓침",
    action: "팀 컨벤션에 `no-non-null-assertion` 규칙 추가, 옵셔널 체이닝으로 전면 교체",
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
    description: "feature/fix/docs 브랜치로 역할 분리, develop → main 머지 전략",
    details: [
      "브랜치명: feature/{이슈번호}-{설명}",
      "커밋: {type}({branch-name}) : {summary}",
      "빌드 산출물 및 보안 정보 커밋 금지",
    ],
  },
  {
    title: "아키텍처 결정 기록",
    description: "설계 결정에는 항상 근거와 트레이드오프를 팀 내 공유",
    details: [
      "admin / user 도메인 완전 분리 구조 채택",
      "ErrorCode 글로벌 + 도메인별 파일 분리 합의",
      "Swagger 어노테이션을 docs 패키지 인터페이스로 분리",
    ],
  },
];
