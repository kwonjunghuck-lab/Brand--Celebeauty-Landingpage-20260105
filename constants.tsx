import { 
  TrendingUp, Heart, Repeat, Search, Users, ChartBar, Headphones, 
  ScanSearch, Handshake, Link, BarChart3, ShieldCheck, Sparkles, Zap 
} from 'lucide-react';
import { NavLink, StatItem, PainPoint, Step, Feature, Testimonial, FAQItem } from './types';

export const NAV_LINKS: NavLink[] = [];

export const HERO_CONTENT = {
  badge: 'Trusted by 500+ Top Beauty Brand',
  title: '우리 제품이 "원하는 채널"\n정확히 찾아드립니다.',
  subtitle: '우리 제품을 판매할 최적의 채널, 인플루언서 커머스(공구·기획전) 시장의 AI 셀럽 해드헌팅 솔루션을 제공합니다.',
  cta: '셀럽 무료 매칭 받기',
  cta_secondary: '서비스 소개서 보기',
};

export const BRAND_LOGOS = [
  "Bioderma", "Olive Young", "Rom&nd", "Clio", 
  "Dr.Jart+", "Innisfree", "3CE", "Laneige"
];

export const STATS_DATA: StatItem[] = [
  {
    value: "40%",
    label: "평균 매출 성장률",
    desc: "기존 공구 대비",
    icon: TrendingUp
  },
  {
    value: "98%",
    label: "팬덤 긍정 반응",
    desc: "채널 핏 기반 매칭 시",
    icon: Heart
  },
  {
    value: "85%",
    label: "재진행 희망률",
    desc: "셀럽 파트너 만족도",
    icon: Repeat
  }
];

export const PAIN_POINTS: PainPoint[] = [
  {
    id: 1,
    title: "시작부터 막막한 셀럽 확보",
    desc: "파편화된 모집 채널들, 어디서 누구를 어떤식으로 찾아야 하는지 막막하지 않나요?",
    icon: Search,
  },
  {
    id: 2,
    title: "무분별한 DM, 메일의 한계",
    desc: "수백 번 보내도 회신은 없고 계정 정지 위험까지, 비효율적인 방식만 반복하고 계실까요?",
    icon: Users,
  },
  {
    id: 3,
    title: "단순 감에 의존한 협업",
    desc: "'진짜 이 셀럽이 팔수는 있을지, 우리 제품에는 맞을지' 그저 감으로 판단하지 않나요?",
    icon: ChartBar,
  },
  {
    id: 4,
    title: "복잡한 운영과 조율",
    desc: "섭외부터 일정·콘텐츠·정산·소통까지, 진행할수록 운영이 더 복잡해지지 않나요?",
    icon: Headphones,
  },
];

export const HOW_IT_WORKS: Step[] = [
  {
    step: 'STEP 01',
    title: '제품 데이터 상세 분석',
    subtitle: 'AI 기반 제품 상세 분석',
    desc: '', 
    features: ['제품 전성분 분석', '상세페이지 및 핵심 타겟군 트래킹', '제품 핵심 USP 포인트 도출'],
    icon: ScanSearch
  },
  {
    step: 'STEP 02',
    title: 'AI 맞춤 셀럽 매칭',
    subtitle: 'AI 기반 맞춤 셀럽 매칭',
    desc: '',
    features: ['캠페인에 최적화된 셀럽 헤드헌팅', '제품에 최적화된 셀럽 선별 소싱', '소싱된 셀럽의 상세 분석 리포트 제공'],
    icon: Handshake
  },
  {
    step: 'STEP 03',
    title: '전담 매니저 올인원 케어',
    subtitle: '제품과 성과에만 집중하세요',
    desc: '',
    features: ['1:1 전담 매니저 배정', '실시간 관리·운영·이슈 대응', '체계적인 후속 관리 지원'],
    icon: Headphones
  },
];

export const FEATURES: Feature[] = [
  {
    title: '링크 한 번이면 끝, 분석은 자동으로',
    desc: '제품 링크 등록 하나면 끝, AI가 자동으로 제품에 대한,\n다양한 데이터를 수집해 최적의 만남을 준비합니다.',
    icon: Link,
  },
  {
    title: '감이 아닌 데이터로 선택을 확실하게',
    desc: '팬덤 성향·콘텐츠 반응·전환 신호를 정리한 리포트로\n왜 이 셀럽인지에 대한 상세 근거를 제공합니다.',
    icon: BarChart3,
  },
  {
    title: '판매에 최적화된 엄선된 셀럽 풀',
    desc: '실제 인게이지먼트, 전환율, 이력 등의 엄선된\n기준을 통과한 검증된 셀럽만이 기다리고 있습니다.',
    icon: ShieldCheck,
  },
  {
    title: '무료 시작, 무제한 매칭',
    desc: '거래가 발생할 때에만 일정 수수료 정산 발생,\n원하는 기준의 셀럽을 만날때까지 비용은 ZERO.',
    icon: Sparkles,
  },
  {
    title: '운영 리소스 DOWN',
    desc: '캠페인별 전담 매니저가 배정되어 체계적인 진행에\n필요한 다양한 운영 관리 부분을 밀착해 지원합니다.',
    icon: Zap,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "셀럽뷰티와 진행한 캠페인은 단순 매출 상승에 그치지 않고, 브랜드 인지도까지 함께 끌어올리는 성과를 만들었습니다. 짧은 기간 안에 제품을 시장에 각인시키는 데 매우 효과적이었어요.",
    author: "김OO",
    role: "색조 뷰티 브랜드 R사",
    img: "https://api.dicebear.com/9.x/lorelei/svg?seed=Aneka"
  },
  {
    quote: "저희 제품의 핵심 소구점을 정확히 짚어주고, 그 소구점과 결이 맞는 검증된 셀럽과 매칭해주셔서 콘텐츠 퀄리티와 성과 모두 기대 이상으로 나왔습니다.",
    author: "이OO",
    role: "간편식 식품 브랜드 D사",
    img: "https://api.dicebear.com/9.x/lorelei/svg?seed=qwe&beardProbability=0&earringsProbability=100&hairAccessoriesProbability=100"
  },
  {
    quote: "셀럽 선별부터 운영·관리까지 전담 매니저가 체계적으로 지원해주셔서 기획전 부담이 크게 줄었습니다. 덕분에 내부 마케팅 리소스를 아끼고 다른 활동에 재투자할 수 있었습니다.",
    author: "권OO",
    role: "스킨케어 뷰티 브랜드 T사",
    img: "https://api.dicebear.com/7.x/lorelei/svg?seed=Celina"
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "서비스 이용에 들어가는 비용이 따로 있을까요?",
    answer: "별도의 가입비나 유지비는 없습니다. 브랜드는 셀럽에 따른 일정 수준의 원고료와 판매 발생 시 수수료만 부담하시면 됩니다.  즉, 성과가 나지 않으면 불필요한 비용도 발생하지 않습니다."
  },
  {
    question: "서비스 이용에 필요한 단계가 어떻게 되나요?",
    answer: "서비스는 아래 5단계로 진행돼요.\n\n1. 간편 문의\n제품 카테고리와 목표(매출/인지도/신제품 런칭 등)만 알려주시면, 전담 매니저가 배정돼요.\n\n2. 제품 정보 간편 등록\n제품 링크/핵심 소구점/타깃/가격대/희망 조건 등 필수 정보만 입력하면 분석이 시작됩니다.\n\n3. 채널·셀럽 맞춤 매칭 (상시 진행)\n제품의 소구점과 타깃에 맞는 성과 기반 셀럽·채널 후보를 데이터로 선별해 제안드려요.\n(콘텐츠 톤/팬덤 성향/반응 패턴까지 함께 고려합니다.)\n\n4. 진행 구성 & 일정 확정\n제안된 후보 중 최종 셀럽을 선택하고, 일정·구성(공구/기획전/콘텐츠 형태)만 확정하면 됩니다.\n\n5. 캠페인 운영 → 성과 리포트 제공\n섭외/커뮤니케이션/운영/정산/CS 등 실무를 지원합니다.\n캠페인 종료 후에는 매출·전환·콘텐츠 반응 지표 리포트와 함께,\n다음 성과를 높이기 위한 추천(후속 셀럽/제품/구성)까지 제공해드립니다."
  },
  {
    question: "어느 분야의 제품들을 주로 모집 하나요?",
    answer: "저희는 현재 뷰티와 푸드 관련 공구·기획전 상품을 주로 소싱해 드리고 있습니다.\n\n구체적으로는 아래 카테고리에서 \"우리 제품에 최적화된\" 셀럽 분들을 위주로 제안드려요.\n\n뷰티(메인): 스킨케어(클렌징/각질·모공/진정/미백·탄력), 바디·헤어, 선케어, 색조(베이스/립), 이너뷰티\n\n푸드(확장): 간편식·밀키트, 단백질/다이어트 식품, 건강기능식품, 디저트·간식, 음료(티/스무디 등)\n\n다만 단순히 \"가짜 셀럽\"을 가져오는 방식이 아니라,\n제품의 핵심 USP, 타겟 톤·팬덤 반응·가격대·구매성향(반복구매/선물/충동구매 등)을 함께 보고,\n제품에 적합한 부분을 고려해 가장 성공 확률이 높은 후보만 압축해서 전달드립니다."
  },
  {
    question: "캠페인 관리, 운영, 소통, 정산과 같은 전체적인 부분을 누가 담당하나요?",
    answer: "캠페인 별로 전담 매니저가 함께하여, 캠페인의 A TO Z를 관리합니다. 브랜드 담당자분들이 집중해야 할 부분에만 집중하세요! 전담 매니저의 체적인 관리와 함께 여러분의 성공적인 성과를 지원합니다!"
  },
  {
    question: "제품을 등록하면 무조건 캠페인을 진행해야 하는 걸까요?",
    answer: "제품을 등록하신 후, AI가 추천하는 인플루언서와 캠페인 리스트를 확인하고 원하실 때 선택적으로 진행하시면 됩니다."
  }
];