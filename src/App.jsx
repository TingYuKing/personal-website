import {
  ArrowRight,
  BadgeCheck,
  CheckCheck,
  CheckCircle2,
  CirclePlay,
  Coins,
  Compass,
  Eye,
  Feather,
  FileText,
  Flag,
  HandCoins,
  HelpCircle,
  Layers,
  Lightbulb,
  Mail,
  MessageCircle,
  MessageSquare,
  RefreshCw,
  Route as RouteIcon,
  Search,
  Target,
  TrendingUp,
} from "lucide-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const okareerUrl = "https://okareer.com/";
const youtubeUrl = "/#youtube";
const externalLinks = {
  facebook: "https://www.facebook.com/profile.php?id=61589038263784",
  medium: "https://medium.com/@intelleyougo",
  vocus: "https://vocus.cc/salon/intelle/room/daioyu",
};
const facebookUrl = externalLinks.facebook;
const mediumUrl = externalLinks.medium;
const vocusUrl = externalLinks.vocus;

const navLinks = [
  { label: "關於我", href: "/#about" },
  { label: "文章", href: "/#writing" },
  { label: "諮詢 / 合作", href: "/consulting" },
  { label: "Okareer", href: okareerUrl },
  { label: "YouTube", href: youtubeUrl },
];

const footerLinks = [
  { label: "關於我", href: "/#about" },
  { label: "文章", href: "/#writing" },
  { label: "諮詢 / 合作", href: "/consulting" },
  { label: "Okareer", href: okareerUrl },
  { label: "Facebook", href: facebookUrl },
  { label: "Medium", href: mediumUrl },
  { label: "Vocus", href: vocusUrl },
  { label: "YouTube", href: youtubeUrl },
  { label: "Email", href: "#" },
];

const credibility = ["5+ 年 PM 經驗", "PM / 產品諮詢", "文章與影音筆記", "求職 AI 產品"];

const startHere = [
  {
    title: "讀我的文章",
    desc: (
      <>
        適合想了解我思考方式的人。
        內容涵蓋<strong>職涯、產品、AI 與生活探索</strong>，可以從中了解我的思維模式、看重什麼價值與做了哪些親身實踐。
      </>
    ),
    cta: "前往文章",
    href: "#writing",
    priority: "primary",
    icon: FileText,
  },
  {
    title: "看影音筆記",
    desc: (
      <>
        適合想用<strong>影像</strong>理解職涯、產品、AI 的人，同時會分享我的生活探索紀錄。
      </>
    ),
    cta: "前往 YouTube",
    href: "#youtube",
    priority: "tertiary",
    anchorId: "youtube",
    icon: CirclePlay,
  },
];

const topics = [
  {
    number: "01",
    title: "職涯成長策略",
    desc: "如何選市場、選方向、換工作、談薪水，讓自己的能力被合理定價，別再被 underpaid。",
    emphasis: true,
    icon: TrendingUp,
  },
  {
    number: "02",
    title: "PM / 產品思維",
    desc: "穿透表象看本質，如何目標導向、宏觀地判斷問題與現狀，系統性地制定下一步行動計畫。",
    emphasis: true,
    icon: Layers,
  },
  {
    number: "03",
    title: "人生探索與選擇",
    desc: "人的選擇比想像中多得多，如何兼具理性與感性做出那些重大的人生選擇，不被設限、自由地活著。",
    emphasis: true,
    icon: Compass,
  },
  {
    number: "04",
    title: "AI 科普",
    desc: "將複雜的技術語彙，用淺顯易懂的表述方式，讓普通人也能看懂 AI 到底在幹嘛。",
    icon: Lightbulb,
  },
  {
    number: "05",
    title: "旅行探索",
    desc: "生活化的旅行探險內容。",
    icon: RouteIcon,
  },
];

const serviceEntries = [
  {
    title: "諮詢 / 合作",
    desc: (
      <>
        適合已經有具體問題的人。無論是
        <strong> PM 職涯、履歷面試、產品方向或 side project</strong>
        ，我可以陪你把問題拆清楚，然後<strong>解決問題、達成目標</strong>。
      </>
    ),
    cta: "查看諮詢方式",
    href: "/consulting",
    featured: true,
    anchorId: "consulting",
    icon: MessageCircle,
  },
  {
    title: "使用 Okareer",
    desc: (
      <>
        <strong>適合正在求職或轉職的人</strong>。Okareer 可以根據你的目標需求，直接推薦市面上最適合你的職缺，並提供可執行的應徵策略。
      </>
    ),
    cta: "了解 Okareer",
    href: okareerUrl,
    icon: Search,
  },
];

const writings = [
  {
    category: "職涯 / 創業",
    title: "29歲，我放棄近170萬年薪，裸辭創業",
    desc: "關於離開高薪工作、壓縮生活成本，以及把自己推向一場一人事業實驗的紀錄。",
    href: "https://vocus.cc/article/69fdbabefd897800019dc49e",
  },
  {
    category: "職涯",
    title: "淺談職涯韌性：只是好好工作才是最大的冒險",
    desc: "在不確定的時代，只依靠單一工作與組織，可能才是風險最高的選擇。",
    href: "https://vocus.cc/article/68da2990fd89780001f446e6",
  },
  {
    category: "生活",
    title: "現代人的金箍：社群媒體 - 我們自願戴上的痛與癮",
    desc: "關於沉潛期、比較焦慮，以及如何保住自己的方向感。",
    href: "https://vocus.cc/article/67f5e2cefd897800015a7f1d",
  },
  {
    category: "職涯",
    title: "名為「勤奮」的陷阱 - 高效的迷路者",
    desc: "別用戰術上的勤奮，掩蓋戰略上的懶惰。",
    href: "https://vocus.cc/article/67f47efcfd8978000107465b",
  },
  {
    category: "AI",
    title: "淺談大型語言模型（LLM）原理：從原理到訓練解析",
    desc: "用相對白話的方式理解 LLM 的基本原理，以及它為什麼能生成文字、回答問題與協助工作。",
    href: "https://vocus.cc/article/67f33810fd89780001b6cce3",
  },
];

const writingPlatforms = [
  { label: "Medium", href: mediumUrl },
  { label: "Vocus", href: vocusUrl },
  { label: "Facebook", href: facebookUrl },
];

const problemCards = [
  {
    title: "PM 職涯方向",
    desc: "想轉 PM 或 Junior PM 想往下一階段前進，但不知道該補什麼能力、怎麼準備。",
    icon: Compass,
  },
  {
    title: "履歷與面試敘事",
    desc: "有經歷，但不知道怎麼包裝成市場看得懂的價值，也不確定自己和目標職缺差在哪。",
    icon: FileText,
  },
  {
    title: "產品與 side project 方向",
    desc: "有產品或 side project 想法，但不確定問題是否值得解、MVP 該怎麼收斂、下一步該驗證什麼、如何增長。",
    icon: Lightbulb,
  },
  {
    title: "產品團隊外部視角",
    desc: "公司或產品團隊需要一個外部資深 PM 視角，協助釐清問題、檢查產品方向或策略，以避免內部視角侷限性。",
    icon: Eye,
  },
];

const backgroundChips = [
  { label: "5 年資深 PM", icon: BadgeCheck },
  { label: "AI / Product Startegy / Business Growth", icon: TrendingUp },
  { label: "兼具方法論與實戰經驗", icon: CheckCircle2 },
];

const pmProblems = [
  "想轉 PM，但不知道該怎麼開始、補哪些能力",
  "已經是 Junior PM，但不確定下一階段該如何定位與成長",
  "履歷、作品集或面試敘事卡住，不知道怎麼對齊目標職缺",
  "工作中遇到 PM 判斷、溝通、優先級或需求拆解問題",
];

const productProblems = [
  "產品方向不確定，需要釐清問題、受眾與下一步驗證",
  "MVP 或功能範圍太大，需要協助收斂優先級與下一步行動",
  "AI / LLM 應用想落地，但不知道怎麼接到實際工作流、產生具體成效",
  "side project 或新產品卡在商業模式、GTM 或成長策略",
];

const processSteps = [
  {
    title: "免費初談",
    desc: "先確認你的問題、目標、背景限制，以及我們是否適合合作。",
    icon: MessageCircle,
  },
  {
    title: "定義目標",
    desc: "把模糊問題變成可驗收的目標，例如拿到面試、完成轉職策略、收斂 MVP、完成產品診斷或定義下一步實驗。",
    icon: Target,
  },
  {
    title: "策略與陪跑",
    desc: "我會協助拆出策略計畫，並在合作期間持續討論、review、修正行動。",
    icon: RouteIcon,
  },
  {
    title: "結果與成效",
    desc: "基本費支付持續陪跑與顧問投入，成效費則依合作前定義的目標，在目標達成後才收取。",
    icon: CheckCheck,
  },
];

const pricingLogic = [
  {
    title: "單次諮詢",
    desc: "適合先從單點問題開始。",
    icon: MessageSquare,
  },
  {
    title: "基本合作費",
    desc: "覆蓋陪跑、顧問時間與策略投入。",
    icon: Coins,
  },
  {
    title: "成效費",
    desc: "目標達成後才收取。",
    icon: HandCoins,
  },
];

const fitList = [
  "想轉 PM，但不知道第一步該怎麼走",
  "已經是 Junior PM，但不清楚下一階段方向",
  "正在準備求職、轉職，希望能獲得良好求職成果，但自己沒方向",
  "有 side project 或產品想法，但不知道如何有效率獲得預期成果",
  "公司或團隊需要一個外部 PM 視角協助釐清問題",
  <strong key="action">願意自己投入行動，而不是只想聽答案</strong>,
];

const notFitList = [
  "只想要標準答案或速成公式",
  "期待一次諮詢就人生翻盤",
  "希望我幫你包辦所有決策",
  "不接受目標與策略需要根據現實情況調整",
  "沒有行動力",
];

const faqs = [
  {
    question: "第一次對談真的免費嗎？",
    answer: "是。第一次主要是確認你的問題、目標和彼此是否適合合作。絕不會硬推服務，如果我判斷目前不適合合作，也會直接說。",
  },
  {
    question: "PM 陪跑和一般職涯顧問或履歷健檢有什麼不同？",
    answer: "我不僅提供理論策略，更手把手根據實際情況陪你一路調整，直到達成目標。有別於其他服務提供履歷或策略這些「手段」，我期待交付「成果」。",
  },
  {
    question: "成效費怎麼定義？",
    answer: "合作前會先一起定義目標與驗收條件，例如取得面試、拿到 offer、成功轉職、完成 MVP scope、完成產品診斷或達成某個 milestone。沒有達成約定目標，就不收成效費。",
  },
  {
    question: "已經有基本合作費，為什麼還有成效費？",
    answer:
      "基本合作費是為了覆蓋持續陪跑、顧問時間與策略投入，但我刻意把它維持在相對低門檻，讓合作不會一開始就變成很重的固定成本。成效費則是在合作前先定義明確目標，等目標真的達成後才收取。換句話說，我不是把風險全部丟給你，而是把一部分收入和結果綁在一起。",
  },
  {
    question: "如果合作後發現方向要調整怎麼辦？",
    answer: "這其實很正常。陪跑或顧問的價值之一，就是在過程中根據現實回饋修正方向，而不是死守一開始的假設。",
  },
  {
    question: "產品諮詢會幫忙寫 PRD 或做執行嗎？",
    answer: "可以協助 review、拆解、規劃與提供建議，但是否包含完整文件產出或更深度執行，需要依合作範圍另行討論。",
  },
  {
    question: "下一步怎麼開始？",
    answer: "可以先私訊 Facebook 或寄 Email，簡單說明你的背景、目前卡住的問題，以及你希望達成的目標。我會先判斷是否適合初談。",
  },
];

function SectionLabel({ children, dark = false }) {
  return (
    <div
      className={`mb-5 flex items-center gap-3 text-[13px] font-bold tracking-[0.14em] ${
        dark ? "text-[#B8A89A]" : "text-[#7A2E22]"
      }`}
    >
      <span className={`h-px w-8 ${dark ? "bg-[#B8A89A]" : "bg-[#1F3A35]"}`} />
      {children}
    </div>
  );
}

function Button({ children, href = "#", variant = "primary" }) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 border px-5 text-sm font-semibold transition duration-200";
  const styles = {
    primary:
      "border-[#1E1D1A] bg-[#1E1D1A] text-[#FFFCF7] hover:border-[#1F3A35] hover:bg-[#1F3A35]",
    secondary:
      "border-[#1E1D1A] bg-transparent text-[#1E1D1A] hover:bg-[#FFFCF7]",
    tertiary:
      "border-transparent bg-transparent px-0 text-[#7A2E22] hover:text-[#1F3A35]",
  };

  return (
    <a href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </a>
  );
}

function IconMark({ icon: Icon, dark = false, className = "" }) {
  return (
    <span
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center border ${className} ${
        dark ? "border-[#4B4945] text-[#D8D0C8]" : "border-[#DDD3C7] bg-[#F7F4EF] text-[#1F3A35]"
      }`}
    >
      <Icon className="h-4 w-4" strokeWidth={1.8} />
    </span>
  );
}

function Header() {
  return (
    <nav className="flex items-center justify-between border-b border-[#DDD3C7] py-5">
      <a href="/" className="font-serif text-2xl font-semibold tracking-wide">
        鯛魚
      </a>
      <div className="hidden items-center gap-7 text-sm text-[#6F6962] md:flex">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className="hover:text-[#1E1D1A]">
            {link.label}
          </a>
        ))}
      </div>
      <a
        href={facebookUrl}
        className="border border-[#1E1D1A] px-4 py-2 text-sm font-semibold transition hover:bg-[#1E1D1A] hover:text-[#FFFCF7]"
      >
        Facebook
      </a>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#DDD3C7] py-9">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-2xl font-semibold">鯛魚</p>
          <p className="mt-2 text-sm text-[#6F6962]">先求方向正確，再開始努力前進。</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-semibold text-[#6F6962]">
          {footerLinks.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-[#7A2E22]">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function Layout({ children }) {
  return (
    <main className="min-h-screen bg-[#F7F4EF] text-[#1E1D1A]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <Header />
        {children}
        <Footer />
      </div>
    </main>
  );
}

function IdentityCard() {
  return (
    <aside className="relative border border-[#DDD3C7] bg-[#FFFCF7] p-5 sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-6 px-1">
        <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] text-[#6F6962]">
          <span className="h-2 w-2 bg-[#7A2E22]" />
          個人思考紀錄與生活實驗
        </div>
        <span className="font-serif text-sm text-[#1F3A35]">鯛魚</span>
      </div>

      <div className="aspect-[4/3] overflow-hidden border border-[#DDD3C7] bg-[#EEE7DE]">
        <img
          src="/taiyu-photo.jpg"
          alt="鯛魚在旅行中的照片"
          className="h-full w-full object-cover object-[42%_50%]"
        />
      </div>

      <div className="my-10 h-px bg-[#DDD3C7]" />

      <div className="mb-4 text-[11px] font-bold tracking-[0.18em] text-[#7A2E22]">主題</div>
      <div className="grid text-sm text-[#1E1D1A]">
        {[
          ["職涯策略", TrendingUp],
          ["產品思維", Layers],
          ["PM 陪跑", MessageCircle],
          ["人生探索", Compass],
        ].map(([item, Icon]) => (
          <div key={item} className="border-b border-[#E7DED3] py-2.5 last:border-b-0">
            <span className="inline-flex items-center gap-2">
              <Icon className="h-3.5 w-3.5 text-[#7A2E22]" strokeWidth={1.8} />
              {item}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}

function HomePage() {
  return (
    <>
      <section id="top" className="grid min-h-[calc(100vh-76px)] items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 border border-[#DDD3C7] bg-[#FFFCF7]/70 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-[#6F6962]">
            <Feather className="h-4 w-4 text-[#1F3A35]" />
            產品・創作・探索・生活
          </div>

          <h1 className="max-w-4xl text-balance font-serif text-[2.45rem] font-semibold leading-[1.16] tracking-[-0.02em] text-[#1E1D1A] sm:text-5xl lg:text-[3.8rem]">
            <span>先求方向正確，</span>
            <span className="whitespace-nowrap">再開始努力前進。</span>
          </h1>

          <div className="mt-7 max-w-2xl space-y-4 text-base leading-8 text-[#6F6962] sm:text-lg">
            <p>我是鯛魚，過去是一名軟體產品經理，現在是自己的老闆。</p>
            <p>
              我談一些我關注且重視的主題：職涯發展、產品思維、AI、人生探索。這裡沒有成功學，都是我的親身經驗──踩過的坑、做過的事、還有獲得過一些小成功的方法。
            </p>
            <p>
              如果你也在找人生方向、想轉職、職涯卡關、做產品沒頭緒，或覺得依照常規人生機械式地活著很無聊，希望這裡能給你多一種思考的角度。
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#writing">
              開始閱讀 <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/consulting" variant="secondary">
              查看諮詢方式
            </Button>
            <Button href={okareerUrl} variant="tertiary">
              了解 Okareer <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-2 border-t border-[#DDD3C7] pt-5">
            {credibility.map((item) => (
              <span key={item} className="border border-[#DDD3C7] bg-[#FFFCF7]/60 px-3 py-2 text-xs font-semibold text-[#6F6962]">
                {item}
              </span>
            ))}
          </div>
        </div>

        <IdentityCard />
      </section>

      <section id="about" className="border-t border-[#DDD3C7] py-20">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionLabel>關於我</SectionLabel>
            <h2 className="max-w-xl font-serif text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              一個普通人，在追求更自由的人生，並且系統化成可複製的方法論。
            </h2>
          </div>

          <div className="grid gap-8">
            <div className="border border-[#DDD3C7] bg-[#FFFCF7]/90 p-4 sm:p-5">
              <div className="grid gap-4 sm:grid-cols-3">
                {["軟體產品經理", "Product Builder", "一人事業實驗中"].map((item, index) => (
                  <div key={item} className="relative flex items-start gap-3 sm:flex-col sm:items-center sm:text-center">
                    {index < 2 ? (
                      <>
                        <span className="absolute left-4 top-8 h-full w-px bg-[#DDD3C7] sm:left-1/2 sm:top-4 sm:h-px sm:w-full" aria-hidden="true" />
                        <span className="absolute left-[13px] top-[calc(100%+14px)] h-2 w-2 rotate-45 border-r border-t border-[#8C857D] sm:left-auto sm:right-0 sm:top-[13px]" aria-hidden="true" />
                      </>
                    ) : null}
                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center border border-[#DDD3C7] bg-[#F7F4EF] text-xs font-bold tracking-[0.12em] text-[#7A2E22]">
                      0{index + 1}
                    </div>
                    <p className="mt-1 text-sm font-semibold leading-6 text-[#1E1D1A] sm:mt-3">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-5 text-base leading-8 text-[#4E4A45]">
              <p className="flex items-start gap-3">
                <BadgeCheck className="mt-1.5 h-4 w-4 shrink-0 text-[#7A2E22]" strokeWidth={1.8} />
                <span>我是鯛魚，一位 Product Builder 和創作者。</span>
              </p>
              <p>
                政大畢業後，一路做了五年軟體產品經理，在初步獲得世俗意義上的成功後，毅然放棄還算滋潤的生活，轉而追求不確定、但更自由的人生方向。
              </p>
              <p>
                我主要談論幾個主題：職涯發展、產品思維、AI 科普、人生探索，目的是讓後進者可以更有效率的通過以前自己走過的那些坎，至少獲得一些啟發。
              </p>
              <p>
                所以我開始寫作、做產品、提供 PM / 產品諮詢，也記錄自己走向一人事業的過程，希望透過親身實踐、並將過去的經驗與思考積累化做燃料，點亮同路人的思想火苗與可能性，讓通往未知前方的路更清楚，少一分迷惘、多一分勇氣與果決。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#DDD3C7] py-20">
        <div className="mb-10 max-w-3xl">
          <div>
            <SectionLabel>認識我的方式</SectionLabel>
            <h2 className="font-serif text-3xl font-semibold tracking-[-0.02em] sm:text-5xl">
              第一次來，可以從這裡開始
            </h2>
          </div>
          <p className="mt-5 max-w-2xl leading-8 text-[#6F6962]">
            你可以先透過文章或影音筆記了解我怎麼思考、重視什麼價值以及我的 Life Style。
          </p>
        </div>

        <div className="grid max-w-4xl gap-px overflow-hidden border border-[#DDD3C7] bg-[#DDD3C7] md:grid-cols-2">
          {startHere.map((item) => (
            <article
              id={item.anchorId}
              key={item.title}
              className={`flex h-full flex-col bg-[#FFFCF7] p-6 transition hover:bg-white sm:p-8 ${
                item.priority === "primary" ? "border-t-4 border-t-[#1E1D1A]" : item.priority === "secondary" ? "border-t-4 border-t-[#1F3A35]" : ""
              }`}
            >
              <IconMark icon={item.icon} className="mb-5" />
              <h3 className="font-serif text-2xl font-semibold">{item.title}</h3>
              <p className="mt-5 min-h-[168px] leading-8 text-[#6F6962]">{item.desc}</p>
              <div className="mt-8">
                <a
                  href={item.href}
                  className={`inline-flex items-center gap-2 text-sm font-semibold transition ${
                    item.priority === "primary"
                      ? "h-12 border border-[#1E1D1A] px-6 text-[#1E1D1A] hover:bg-[#1E1D1A] hover:text-[#FFFCF7]"
                      : item.priority === "secondary"
                        ? "h-12 border border-[#DDD3C7] px-6 text-[#1E1D1A] hover:border-[#1E1D1A]"
                        : "h-12 text-[#7A2E22] hover:text-[#1F3A35]"
                  }`}
                >
                  {item.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="topics" className="border-t border-[#DDD3C7] py-20">
        <div className="mb-12 max-w-3xl">
          <div>
            <SectionLabel>主題</SectionLabel>
            <h2 className="font-serif text-3xl font-semibold tracking-[-0.02em] sm:text-5xl">
              我長期書寫與探索的主題
            </h2>
          </div>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#6F6962]">
            我寫職涯、產品、AI 與生活探索，也逐步把部分內容做成影音。表面上題目很多，底層其實都在講述同一件事：目標導向的執行──先追求方向正確，少一點盲目努力。
          </p>
        </div>

        <div className="border-t border-[#DDD3C7]">
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <article key={topic.number} className="grid gap-4 border-b border-[#DDD3C7] py-7 last:border-b-0 last:pb-3 md:grid-cols-[90px_1fr] md:gap-8">
                <p className={`font-serif text-3xl ${topic.emphasis ? "text-[#7A2E22]" : "text-[#8C857D]"}`}>{topic.number}</p>
                <div className="grid gap-3 md:grid-cols-[0.45fr_0.55fr] md:items-baseline">
                  <h3 className="flex items-center gap-2 text-xl font-semibold">
                    <Icon className="h-4 w-4 text-[#1F3A35]" strokeWidth={1.8} />
                    {topic.title}
                  </h3>
                  <p className="leading-7 text-[#6F6962]">{topic.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="okareer" className="border-t border-[#DDD3C7] py-20">
        <div className="mb-12 max-w-3xl">
          <div>
            <SectionLabel>我能提供的服務</SectionLabel>
            <h2 className="font-serif text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              如果你已經有具體問題，可以用更直接的方式開始。
            </h2>
          </div>
          <p className="mt-5 max-w-2xl leading-8 text-[#6F6962]">
            協助你一起判斷問題、釐清方向、制定行動計畫，最終達成目標。
          </p>
        </div>

        <div className="grid max-w-4xl gap-px overflow-hidden border border-[#DDD3C7] bg-[#DDD3C7] md:grid-cols-2">
          {serviceEntries.map((entry) => (
            <article
              id={entry.anchorId}
              key={entry.title}
              className={`flex h-full flex-col bg-[#FFFCF7] p-6 transition hover:bg-white sm:p-8 ${
                entry.featured ? "border-t-4 border-t-[#1F3A35]" : ""
              }`}
            >
              <IconMark icon={entry.icon} className="mb-5" />
              <h3 className="font-serif text-3xl font-semibold">{entry.title}</h3>
              <p className="mt-5 min-h-[168px] leading-8 text-[#6F6962]">{entry.desc}</p>
              <div className="mt-6">
                <a
                  href={entry.href}
                  className={`inline-flex h-12 items-center gap-2 text-sm font-semibold transition ${
                    entry.featured
                      ? "border border-[#1E1D1A] bg-[#1E1D1A] px-6 text-[#FFFCF7] hover:border-[#1F3A35] hover:bg-[#1F3A35]"
                      : "text-[#7A2E22] hover:text-[#1F3A35]"
                  }`}
                >
                  {entry.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <WritingSection />
    </>
  );
}

function WritingSection() {
  return (
    <section id="writing" className="border-t border-[#DDD3C7] py-20">
      <div>
        <div className="mb-10 max-w-3xl">
          <SectionLabel>精選文章</SectionLabel>
          <h2 className="font-serif text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
            一些我寫過，也還想繼續寫下去的題目
          </h2>
          <p className="mt-5 max-w-md leading-8 text-[#6F6962]">
            文章目前主要發布在 Medium、Vocus 與 Facebook。
          </p>
        </div>

        <div className="border-t border-[#DDD3C7]">
          {writings.map((writing, index) => (
            <a
              key={writing.title}
              href={writing.href}
              className="group grid gap-4 border-b border-[#DDD3C7] py-6 transition hover:bg-[#FFFCF7] sm:grid-cols-[80px_1fr_auto] sm:px-4"
            >
              <p className="font-serif text-2xl text-[#8C857D] transition group-hover:text-[#7A2E22]">0{index + 1}</p>
              <div>
                <p className="mb-2 inline-flex items-center gap-2 border border-[#E7DED3] bg-[#FFFCF7] px-2.5 py-1 text-xs font-semibold tracking-[0.14em] text-[#7A2E22]">
                  <span className="h-1.5 w-1.5 bg-[#1F3A35]" />
                  {writing.category}
                </p>
                <h3 className="text-xl font-semibold transition group-hover:text-[#1F3A35]">{writing.title}</h3>
                <p className="mt-2 leading-7 text-[#6F6962]">{writing.desc}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-[#7A2E22] transition group-hover:translate-x-1 group-hover:text-[#1F3A35]" />
            </a>
          ))}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-6 text-sm text-[#6F6962] sm:px-4">
            <span>更多文章：</span>
            {writingPlatforms.map((platform) => (
              <a key={platform.label} href={platform.href} className="inline-flex items-center gap-1.5 font-semibold text-[#7A2E22] hover:text-[#1F3A35]">
                <span className="h-1.5 w-1.5 bg-[#1F3A35]" />
                {platform.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ConsultingPage() {
  return (
    <>
      <section className="border-b border-[#DDD3C7] py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <SectionLabel>諮詢 / 合作</SectionLabel>
            <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-tight tracking-[-0.02em] sm:text-6xl">
              目標導向、結果計費的陪跑與諮詢服務，致力於交付成果。
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-9 text-[#6F6962]">
              如果你卡在 PM 職涯、履歷面試、產品方向，或 side project 的早期判斷，我可以用資深產品經理的方式，<strong>幫你把問題轉成可執行的策略與行動方案</strong>。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={facebookUrl}>
                先聊聊適不適合 <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#services" variant="secondary">
                看看服務內容
              </Button>
            </div>
          </div>
          <div className="border border-[#DDD3C7] bg-[#FFFCF7] p-5 text-sm leading-7 text-[#1F3A35]">
            <div className="mb-4 flex items-center gap-3">
              <IconMark icon={MessageCircle} />
              <p className="text-xs font-bold tracking-[0.16em] text-[#7A2E22]">初談提示</p>
            </div>
            <p>第一次對談免費，主要用來確認問題、目標與彼此是否適合合作。</p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#DDD3C7] py-20">
        <SectionIntro
          label="我能幫你解什麼問題"
          title="有些問題，你需要的是一個外部專業視角，跟你一起動手解決。"
          desc="如果你已經卡在某段職涯、產品或 side project 問題裡很久，與其繼續在自己的思維框架裡原地打轉，不如引入一點專業協助，會節省很多時間。"
        />
        <div className="mb-8 border border-[#D6CABC] bg-[#EFE8DE] p-3 sm:p-4">
          <div className="grid gap-px overflow-hidden border border-[#DDD3C7] bg-[#DDD3C7] lg:grid-cols-[1fr_auto_1fr]">
          <div className="bg-[#FFFCF7] p-6 sm:p-7">
            <p className="text-xs font-bold tracking-[0.16em] text-[#7A2E22]">Before</p>
            <h3 className="mt-3 font-serif text-2xl font-semibold">卡住的狀態</h3>
            <div className="mt-5 grid gap-3 text-sm leading-6 text-[#6F6962] sm:grid-cols-2">
              {["方向不清楚", "問題拆不開", "優先級混亂", "不知道下一步"].map((item) => (
                <p key={item} className="border-l border-[#DDD3C7] bg-[#F7F4EF]/70 px-3 py-2">{item}</p>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center bg-[#F7F4EF] px-5 py-4 text-[#7A2E22] lg:px-5">
            <div className="flex h-11 w-11 items-center justify-center border border-[#DDD3C7] bg-[#FFFCF7]">
              <ArrowRight className="h-5 w-5" strokeWidth={1.6} />
            </div>
          </div>
          <div className="bg-[#FFFCF7] p-6 sm:p-7">
            <p className="text-xs font-bold tracking-[0.16em] text-[#1F3A35]">After</p>
            <h3 className="mt-3 font-serif text-2xl font-semibold">可行動的狀態</h3>
            <div className="mt-5 grid gap-3 text-sm leading-6 text-[#6F6962] sm:grid-cols-2">
              {["釐清問題", "定義目標", "拆出策略", "下一步行動"].map((item) => (
                <p key={item} className="border-l border-[#1F3A35]/40 bg-[#F7F4EF]/70 px-3 py-2">{item}</p>
              ))}
            </div>
          </div>
          </div>
        </div>
        <div className="grid gap-px overflow-hidden border border-[#DDD3C7] bg-[#DDD3C7] md:grid-cols-2 lg:grid-cols-4">
          {problemCards.map((card) => (
            <InfoCard key={card.title} title={card.title} desc={card.desc} icon={card.icon} />
          ))}
        </div>
      </section>

      <section className="border-b border-[#DDD3C7] py-20">
        <SectionIntro
          label="為什麼是我"
          title="我不是傳統職涯顧問，也不是只會講理論框架的產品諮詢。"
          desc="透過我親身實踐的方法論，在職場中四年多薪資翻三倍，具備產品管理、用戶增長、轉換率優化、AI 導入、產品從 0 到 1 實戰經驗與成果。"
        />
        <div className="mb-8 flex flex-wrap gap-2">
          {backgroundChips.map((chip) => (
            <span key={chip.label} className="inline-flex items-center gap-2 border border-[#DDD3C7] bg-[#FFFCF7] px-3 py-2 text-xs font-semibold text-[#6F6962]">
              <chip.icon className="h-3.5 w-3.5 text-[#1F3A35]" strokeWidth={1.8} />
              {chip.label}
            </span>
          ))}
        </div>
        <div className="grid gap-px overflow-hidden border border-[#DDD3C7] bg-[#DDD3C7] lg:grid-cols-2">
          <ArticleCard
            icon={RouteIcon}
            title="PM 陪跑"
            desc={
              <>
                我有 <strong>5 年軟體產品經理經驗</strong>，橫跨 AI、FinTech、AdTech、E-Commerce 與其他 B2C 平台，待過不到 10 人的新創公司，也待過超過 2000 人的大型上市櫃公司。透過目標導向的能力成長與跳槽方法，<strong>薪資在五年內翻了三倍</strong>，並且系統化成可複製的方法論。
              </>
            }
          />
          <ArticleCard
            icon={Layers}
            title="產品諮詢"
            desc={
              <>
                <strong>5 年經驗資深產品經理，專精產品策略與交付商業結果</strong>。做過產品從 0 到 1、PMF 探索、AI 降本增效、轉換率優化、內部系統與 revenue-driving product。代表性的經驗包括：主導公司 AI / RPA 導入，拆解並重建營運流程，<strong>平均降低單項任務 50–80% 的人工處理成本</strong>；從 0 到 1 規劃產品並推出市場，帶動產品線一年內達成 <strong>10x 營收成長</strong>。
              </>
            }
          />
        </div>
      </section>

      <section id="services" className="border-b border-[#DDD3C7] py-20">
        <SectionIntro
          label="服務內容"
          title="目前主要有兩種合作方式。"
          desc="一種是面向個人的 PM 陪跑，一種是面向團隊或產品的產品諮詢。兩者底層邏輯類似：先定義目標、然後把問題拆解，再把下一步行動設計出來，並採用迭代式滾動調整。"
        />
        <ServiceBlock
          title="PM 陪跑"
          subtitle="給想轉 PM、剛入門 PM，或想從初階往下一階段前進的人。"
          noteTitle="不是一次性諮詢"
          desc="這不是傳統「幾小時諮詢、講完就結束」的模式。我會更接近 mentor 的角色：先和你對齊目標，再拆出策略計畫，接著在合作期間陪你執行、討論與修正，直到你真的達成目標。"
          problems={pmProblems}
          steps={[
            ["職涯 / 求職策略計畫", "不是只改履歷，而是先釐清你的目標職缺、能力缺口、求職定位與行動順序。"],
            ["履歷、面試與作品集 review", "協助你把過去經歷整理成市場看得懂的價值，並對齊目標職缺需要的能力。"],
            ["持續問題討論", "合作期間可以持續提出卡住的問題，例如面試準備、職缺判斷、offer 選擇、工作中的 PM 判斷。"],
            ["行動校準與進度追蹤", "不是一次聊完就結束，而是依照實際回饋調整策略，讓你每一步都更接近目標。"],
          ]}
        />
        <ServiceBlock
          title="產品諮詢"
          subtitle="給公司、產品團隊、創業者或 side project builder。"
          noteTitle="不是一次性顧問簡報"
          desc="這不是傳統「開幾次會、產出一份策略簡報就結束」的模式。我會更接近外部產品夥伴：先對齊目標、限制與成功定義，釐清真正要解的問題，再拆出策略計畫、優先級與下一步行動，並在合作期間持續 review、討論與修正，直到達成目標。"
          problems={productProblems}
          steps={[
            ["產品問題診斷", "協助釐清現在真正卡住的是問題定義、受眾、價值主張、MVP 範圍、GTM，還是執行優先級。"],
            ["策略與優先級建議", "把混亂的產品想法與需求整理成可討論、可取捨、可執行的下一步行動。"],
            ["文件與決策 review", "可以協助 review PRD、roadmap、MVP scope、GTM Plan 或產品策略文件。"],
            ["外部 PM 視角", "在團隊內部視角之外，提供一個相對中立、商業與執行導向的產品判斷。"],
          ]}
        />
      </section>

      <section className="border-b border-[#DDD3C7] py-20">
        <SectionIntro
          label="我的合作方式"
          title="不是提供一次性建議，而是透過持續協作，收穫你想要的結果。"
          desc="無論是 PM 陪跑或產品諮詢，流程都會從定義目標、釐清問題開始，然後規劃策略、制定行動，並依實際回饋持續修正，直到收穫成效。"
        />
        <div className="relative">
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-12 hidden h-px bg-[#DDD3C7] lg:block" aria-hidden="true" />
          <div className="grid gap-px overflow-hidden border border-[#DDD3C7] bg-[#DDD3C7] md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="relative bg-[#FFFCF7] p-6 sm:p-8">
              {index < processSteps.length - 1 ? (
                <span className="absolute right-0 top-12 hidden h-px w-8 translate-x-1/2 bg-[#8C857D] lg:block" aria-hidden="true" />
              ) : null}
              <div className="mb-5 flex items-center gap-3">
                <IconMark icon={step.icon} />
                <p className="font-serif text-3xl text-[#8C857D]">0{index + 1}</p>
              </div>
              <h3 className="font-serif text-2xl font-semibold">{step.title}</h3>
              <p className="mt-5 leading-8 text-[#6F6962]">{step.desc}</p>
              {index === 2 ? (
                <div className="mt-6 inline-flex items-center gap-2 border border-[#DDD3C7] bg-[#F7F4EF] px-3 py-2 text-xs font-semibold text-[#1F3A35]">
                    <RefreshCw className="h-4 w-4" strokeWidth={1.7} />
                    持續討論 / review / 修正
                </div>
              ) : null}
            </article>
          ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#DDD3C7] py-20">
        <SectionIntro
          label="收費方式"
          title="基本合作費 + 成效費。"
          desc={
            <>
              我希望合作不是單純按時間收費，而是更接近 <strong>goal-driven 的合作</strong>。固定合作費不是完整顧問費，而是用來覆蓋持續陪跑、顧問時間與策略投入的基本成本，因此會刻意維持在相對低門檻。<strong>成效費則只會在合作前定義的目標真的達成後才收取，代表我也把一部分收入和結果綁在一起</strong>。當然，如果問題複雜度不高，也可以先從單次諮詢開始。
            </>
          }
        />
        <div className="mb-5 border border-[#DDD3C7] bg-[#FFFCF7]/90 p-4 sm:p-5">
          <div className="relative">
            <div className="absolute left-1/2 top-0 hidden h-6 w-px -translate-x-1/2 bg-[#DDD3C7] md:block" aria-hidden="true" />
            <div className="absolute left-1/4 right-1/4 top-6 hidden h-px bg-[#DDD3C7] md:block" aria-hidden="true" />
            <div className="absolute left-1/4 top-6 hidden h-2 w-px -translate-x-1/2 bg-[#DDD3C7] md:block" aria-hidden="true" />
            <div className="absolute left-3/4 top-6 hidden h-2 w-px -translate-x-1/2 bg-[#DDD3C7] md:block" aria-hidden="true" />
            <div className="grid gap-4 pt-0 md:grid-cols-2 md:pt-8">
              <article className="border border-[#DDD3C7] bg-[#F7F4EF] p-4 sm:p-5">
                <div className="flex items-start gap-3">
                  <IconMark icon={pricingLogic[0].icon} className="h-8 w-8" />
                  <div>
                    <p className="text-sm font-semibold text-[#1E1D1A]">{pricingLogic[0].title}</p>
                    <p className="mt-1.5 text-sm leading-6 text-[#6F6962]">{pricingLogic[0].desc}</p>
                  </div>
                </div>
              </article>
              <article className="border border-[#DDD3C7] bg-[#F7F4EF] p-4 sm:p-5">
                <div className="relative space-y-4">
                  <div className="absolute left-4 top-4 bottom-4 w-px bg-[#DDD3C7]" aria-hidden="true" />
                  {[pricingLogic[1], pricingLogic[2]].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <IconMark icon={item.icon} className="relative z-10 h-8 w-8" />
                      <div>
                        <p className="text-sm font-semibold text-[#1E1D1A]">{item.title}</p>
                        <p className="mt-1.5 text-sm leading-6 text-[#6F6962]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="grid gap-px overflow-hidden border border-[#DDD3C7] bg-[#DDD3C7] md:grid-cols-2 xl:grid-cols-3">
          <PricingCard
            label="低門檻入口"
            title="單次諮詢 / 問題診斷"
            fee="NTD 1,500 起"
            feeType="單次收費"
            note="適合有一個明確問題，想先輕量討論的人。可以用來討論 PM 職涯、履歷面試、產品方向等。"
            includes={[
              "45–60 分鐘諮詢",
              "會前簡單背景整理",
              "會後提供重點方向與下一步建議",
            ]}
            success="適合想先試一次合作方式，或目前只需要單點問題診斷的人。"
          />
          <PricingCard
            label="持續陪跑"
            title="PM 陪跑"
            fee="每月 NTD 2,500 起"
            feeType="基本費"
            note="依目標難度、陪跑密度與合作範圍討論。"
            includes={[
              "免費初談",
              "職涯 / 求職策略計畫",
              "履歷、面試敘事、作品集與投遞策略討論",
              "合作期間持續提問與必要會議",
              "目標達成後才收取成效費",
            ]}
            success="成效費依合作前定義的目標討論，例如取得 PM 面試、成功轉職、拿到 offer、薪資提升等。"
          />
          <PricingCard
            label="策略夥伴"
            title="產品諮詢"
            fee="每月 NTD 8,000 起"
            feeType="基本費"
            note="依合作範圍、問題複雜度、會議頻率與交付內容討論。公司或團隊案會 case by case 評估。"
            includes={[
              "免費初談",
              "產品問題診斷",
              "策略計畫與下一步行動建議",
              "每月顧問時間",
              "文件、策略、成效檢視與討論",
              "Milestone 達成後才收取成效費",
            ]}
            success="成效費或 milestone fee 依合作前定義的目標討論，例如完成 MVP scope、產品診斷、轉換率改善、作業成本下降、AI workflow 設計等。"
          />
        </div>
        <div className="mt-6 border border-[#DDD3C7] bg-[#FFFCF7] p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <IconMark icon={HelpCircle} />
                <h3 className="font-serif text-2xl font-semibold">不知道適合哪一種？可以先聊聊。</h3>
              </div>
              <p className="mt-4 max-w-3xl leading-8 text-[#6F6962]">
                你不需要一開始就決定要選單次諮詢、PM 陪跑或產品諮詢。先簡單說明你的背景、目前卡住的問題，以及想達成的目標，我會協助判斷哪種合作方式比較適合。
              </p>
              <p className="mt-4 text-sm leading-7 text-[#1F3A35]">
                如果我判斷目前不適合合作，也會直接說明，不會硬接。
              </p>
            </div>
            <a
              href={facebookUrl}
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#1E1D1A] bg-[#1E1D1A] px-5 text-sm font-semibold text-[#FFFCF7] transition hover:border-[#1F3A35] hover:bg-[#1F3A35]"
            >
              先聊聊適不適合 <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-[#DDD3C7] py-20">
        <SectionIntro label="適合誰" title="這種合作不適合所有人。" />
        <div className="grid gap-px overflow-hidden border border-[#DDD3C7] bg-[#DDD3C7] lg:grid-cols-2">
          <ListCard title="適合找我聊聊的人" items={fitList} icon={CheckCircle2} />
          <ListCard title="不太適合的人" items={notFitList} icon={Flag} />
        </div>
      </section>

      <section className="border-b border-[#DDD3C7] py-20">
        <SectionIntro label="FAQ" title="你可能會想先知道的幾件事。" />
        <div className="border-t border-[#DDD3C7]">
          {faqs.map((faq) => (
            <div key={faq.question} className="grid gap-4 border-b border-[#DDD3C7] py-6 lg:grid-cols-[0.45fr_0.55fr]">
              <h3 className="flex items-start gap-3 text-lg font-semibold">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center border border-[#DDD3C7] text-xs font-bold text-[#7A2E22]">
                  Q
                </span>
                {faq.question}
              </h3>
              <p className="leading-8 text-[#6F6962]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="grid gap-8 bg-[#20201E] p-7 text-[#F7F4EF] sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="max-w-3xl font-serif text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              如果你卡在一個值得認真解的問題，歡迎先來聊聊。
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-[#D8D0C8]">
              不用一開始就想清楚所有答案。你只需要帶著目前的背景、問題和目標，我們可以先用一次免費對談，看適不適合一起往下解決。
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
            <a href={facebookUrl} className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#F7F4EF] bg-[#F7F4EF] px-5 text-sm font-semibold text-[#20201E] transition hover:bg-transparent hover:text-[#F7F4EF]">
              <MessageCircle className="h-4 w-4" /> 私訊 Facebook <ArrowRight className="h-4 w-4" />
            </a>
            <div className="text-sm leading-6 text-[#D8D0C8]">
              <Mail className="mr-2 inline h-4 w-4 align-[-2px]" />
              <span>或寄 Email：</span>
              <a href="mailto:diaoyu1810@gmail.com" className="font-semibold text-[#F7F4EF] underline decoration-[#8C857D] underline-offset-4 transition hover:decoration-[#F7F4EF]">
                diaoyu1810@gmail.com
              </a>
            </div>
            <a href="/" className="inline-flex min-h-11 items-center justify-center border border-[#4B4945] px-5 text-sm font-semibold text-[#D8D0C8] transition hover:border-[#F7F4EF] hover:text-[#F7F4EF]">
              回到首頁
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionIntro({ label, title, desc }) {
  return (
    <div className="mb-12 max-w-3xl">
      <SectionLabel>{label}</SectionLabel>
      <h2 className="font-serif text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">{title}</h2>
      {desc ? <p className="mt-5 max-w-2xl leading-8 text-[#6F6962]">{desc}</p> : null}
    </div>
  );
}

function InfoCard({ kicker, title, desc, icon, flow = false }) {
  const Icon = icon;

  return (
    <article className="relative bg-[#FFFCF7] p-6 sm:p-8">
      {flow ? <span className="absolute right-0 top-11 hidden h-px w-8 translate-x-1/2 bg-[#8C857D] lg:block" /> : null}
      <div className="mb-5 flex items-center gap-3">
        {Icon ? <IconMark icon={Icon} /> : null}
        {kicker ? <p className="font-serif text-3xl text-[#8C857D]">{kicker}</p> : null}
      </div>
      <h3 className="font-serif text-2xl font-semibold">{title}</h3>
      <p className="mt-5 leading-8 text-[#6F6962]">{desc}</p>
    </article>
  );
}

function ArticleCard({ title, desc, icon }) {
  const Icon = icon;

  return (
    <article className="bg-[#FFFCF7] p-6 sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        {Icon ? <IconMark icon={Icon} /> : null}
        <h3 className="font-serif text-2xl font-semibold leading-snug">{title}</h3>
      </div>
      <p className="mt-5 leading-8 text-[#6F6962]">{desc}</p>
    </article>
  );
}

function ServiceBlock({ title, subtitle, noteTitle, desc, problems, steps }) {
  return (
    <article className="mb-10 border border-[#DDD3C7] bg-[#FFFCF7] p-6 last:mb-0 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <h3 className="font-serif text-4xl font-semibold">{title}</h3>
          <p className="mt-4 font-semibold text-[#1F3A35]">{subtitle}</p>
        </div>
        <div className="border border-[#E7DED3] bg-[#F7F4EF] p-5 sm:p-6">
          <div className="border-l-2 border-[#1F3A35] pl-4">
            <p className="text-xs font-bold tracking-[0.16em] text-[#7A2E22]">{noteTitle}</p>
            <p className="mt-3 leading-8 text-[#6F6962]">{desc}</p>
          </div>
        </div>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <h4 className="mb-4 text-sm font-bold tracking-[0.14em] text-[#7A2E22]">我們可以一起處理的問題</h4>
          <ul className="space-y-3 leading-7 text-[#4E4A45]">
            {problems.map((item) => (
              <li key={item}>・{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-bold tracking-[0.14em] text-[#7A2E22]">你會得到什麼</h4>
          <div className="space-y-4">
            {steps.map(([stepTitle, stepDesc], index) => (
              <div key={stepTitle} className="flex gap-4 border-l border-[#DDD3C7] pl-4">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center border border-[#DDD3C7] bg-[#F7F4EF] font-serif text-sm text-[#7A2E22]">
                  {index + 1}
                </span>
                <div>
                  <p className="font-semibold text-[#1E1D1A]">{stepTitle}</p>
                  <p className="mt-1 leading-7 text-[#6F6962]">{stepDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function PricingCard({ label, title, fee, feeType, note, includes, success }) {
  return (
    <article className="h-full bg-[#FFFCF7] p-5 sm:p-6">
      <div className="xl:min-h-[228px]">
        <p className="text-xs font-bold tracking-[0.16em] text-[#7A2E22]">{label}</p>
        <h3 className="mt-3 font-serif text-3xl font-semibold">{title}</h3>
        <p className="mt-4 font-serif text-2xl text-[#1F3A35]">{fee}</p>
        {feeType ? (
          <p className="mt-3 inline-flex border border-[#DDD3C7] bg-[#F7F4EF] px-2.5 py-1 text-xs font-semibold tracking-[0.12em] text-[#6F6962]">
            {feeType}
          </p>
        ) : null}
        <p className="mt-3 text-sm leading-7 text-[#6F6962]">{note}</p>
      </div>
      <div className="my-6 h-px bg-[#DDD3C7]" />
      <ul className="space-y-3 leading-7 text-[#4E4A45]">
        {includes.map((item) => (
          <li key={item}>・{item}</li>
        ))}
      </ul>
      <p className="mt-6 border-l border-[#1F3A35] pl-4 text-sm leading-7 text-[#1F3A35]">{success}</p>
    </article>
  );
}

function ListCard({ title, items, icon }) {
  const Icon = icon;

  return (
    <article className="bg-[#FFFCF7] p-6 sm:p-8">
      <div className="flex items-center gap-3">
        {Icon ? <IconMark icon={Icon} /> : null}
        <h3 className="font-serif text-2xl font-semibold">{title}</h3>
      </div>
      <ul className="mt-6 space-y-3 leading-7 text-[#4E4A45]">
        {items.map((item, index) => (
          <li key={index}>・{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/consulting" element={<ConsultingPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
