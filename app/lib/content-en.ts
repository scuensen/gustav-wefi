import type { content } from "../content";
type ContentType = typeof content;

export const contentEn: ContentType = {
  nav: {
    logo: "GM",
    links: [
      { label: "Profile", href: "#about" },
      { label: "Methodology", href: "#process" },
      { label: "Partner System", href: "#wefi" },
      { label: "Baccarat", href: "#baccarat" },
      { label: "References", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: "Schedule Consultation",
  },

  hero: {
    badge: "Mentor for structured wealth building · DACH & South Tyrol",
    headline1: "Building a structured",
    headline2: "second income",
    headline3: "stream.",
    subtext:
      "I guide professionals in the DACH region and South Tyrol in methodically establishing a secondary income — based on two proven partner systems (WeFi & Baccarat Entertainment), with clear processes, personal mentoring, and transparent steps.",
    buttonPrimary: "Schedule Consultation",
    buttonSecondary: "View Profile",
    stats: [
      { value: "500+", label: "mentored partners" },
      { value: "12+", label: "years experience" },
      { value: "DACH", label: "region" },
    ],
  },

  about: {
    eyebrow: "PROFILE",
    headline1: "Over twelve years of experience in",
    headline2: "structured network building.",
    text1:
      "Since 2013, I have been guiding professionals, self-employed individuals, and career changers throughout the German-speaking world in building a secondary income. My focus is not on quick promises, but on creating a solid, long-term sustainable structure. My residence is now in Larnaca, Cyprus — my work remains anchored in the German-speaking region.",
    text2:
      "Our collaboration is based on clear processes, documented steps, and personal 1:1 mentoring. Instead of generic content, you receive a roadmap tailored to your lifestyle, available time, and goals.",
    highlights: [
      "Over 12 years of practice in structured network building",
      "More than 500 personally mentored partners in the DACH region & South Tyrol",
      "Two established partner systems: WeFi & Baccarat Entertainment",
      "Residence Larnaca · direct, personal availability",
    ],
  },

  process: {
    eyebrow: "METHODOLOGY",
    headline: "Three phases. One clear process.",
    subtext:
      "A clearly defined approach from the initial consultation to independently managing your network — with transparent milestones at each phase.",
    steps: [
      {
        number: "01",
        title: "Foundation",
        description:
          "Analysis of your starting point, introduction to the key principles, and development of an individual roadmap based on your professional and time constraints.",
      },
      {
        number: "02",
        title: "Building",
        description:
          "Structured market entry with personal guidance. Developing your positioning, communication, and first sustainable partner relationships.",
      },
      {
        number: "03",
        title: "Scaling",
        description:
          "Transition to a leadership role: mentoring your own partners, building long-term stable structures, and establishing recurring income streams.",
      },
    ],
  },

  wefi: {
    eyebrow: "PARTNER SYSTEM",
    headline1: "Established infrastructure for",
    headline2: "entrepreneurial wealth building.",
    text:
      "I have been working for years with an internationally established partner system in the field of financial education and wealth building. It combines a regulated product portfolio, a transparently documented compensation plan, and a professional mentoring structure. Detailed insights are available in a personal consultation.",
    features: [
      "International network active in over 20 countries",
      "Regulated environment and transparent compliance framework",
      "Fully documented, transparent compensation plan",
      "Established mentoring structures at all levels",
    ],
    button: "Open WeFi Gitbook (PDF)",
    wefiBtnPdf: "/WeFi-Gitbook-Deutsch.pdf",
    buttonHref: "#cta",
    card: {
      title: "wefi.co",
      subtitle: "Key data of the ecosystem",
      rows: [
        { label: "Network", value: "WeChain" },
        { label: "Model", value: "Deobank · compliant" },
        { label: "Token", value: "$WFI · Utility & Governance" },
      ],
      disclaimer:
        "Note: This representation does not constitute an investment or income promise. Business success depends significantly on individual effort.",
    },
  },

  wefiPartner: {
    eyebrow: "WEFI · INTERNATIONAL PARTNER",
    h1: "Built on",
    h2: "wefi.co.",
    lead: "The operational foundation of my work is the collaboration with wefi.co — an internationally positioned platform for financial education and wealth building that bundles regulated products, transparent compensation, and professional mentoring structures under one roof.",
    point1Title: "Internationally established",
    point1Desc: "A grown infrastructure with market presence in several countries.",
    point2Title: "Regulated environment",
    point2Desc: "Clearly defined legal framework and transparent compliance.",
    point3Title: "Personal mentoring",
    point3Desc: "1:1 mentoring from entry to independently managing your network.",
    point4Title: "Details in conversation",
    point4Desc: "Concrete figures, steps, and opportunities I explain individually.",
    quote: "Structures that deliver, not just promise.",
    btnPrimary: "More about wefi.co",
    btnSecondary: "WeFi Gitbook (PDF)",
  },

  baccarat: {
    eyebrow: "PARTNER · BACCARAT ENTERTAINMENT",
    h1: "Baccarat Staking —",
    h2: "passive participation.",
    lead: "Baccarat Entertainment is a staking platform where you passively participate in the winnings of experienced professional players — without having to play yourself. Terms, entry, and specific figures are best discussed in a personal conversation.",
    point1Title: "Passive participation",
    point1Desc: "You are a 'backer' — professional players handle the active play.",
    point2Title: "Calculated risk",
    point2Desc: "Stop-loss rules and transparent game rules at the platform level.",
    point3Title: "Freely available",
    point3Desc: "Stake available at any time, no fixed lock-up periods.",
    point4Title: "Details in conversation",
    point4Desc: "Participation model, entry, and figures I clarify personally.",
    disclaimer:
      "Note: Baccarat is and remains a game of chance — no guaranteed profits. Staking is to be understood as entertainment, not a classic investment.",
    btnPdf: "/Baccarat-Entertainment-Information.pdf",
    btnPdfLabel: "Open Baccarat Info (PDF)",
    btnSecondary: "Schedule Consultation",
  },

  testimonials: {
    eyebrow: "REFERENCES",
    headline: "Voices from our collaboration.",
    items: [
      {
        quote:
          "Mr. Mostetschnig's mentoring stands out for its high reliability and methodology. Even without a sales background, I was able to build my own team within clearly defined steps.",
        name: "Markus T.",
        role: "Career changer · Vienna",
        initials: "MT",
      },
      {
        quote:
          "What distinguishes the collaboration is the structured approach. Clear processes, honest feedback, and realistic goal-setting instead of exaggerated promises.",
        name: "Sabine K.",
        role: "Partner since 2024 · Bolzano, South Tyrol",
        initials: "SK",
      },
      {
        quote:
          "Substance over marketing. After about eight months of consistently implementing the jointly developed roadmap, I was able to realize first reliable income streams.",
        name: "Daniel R.",
        role: "Part-time · Munich",
        initials: "DR",
      },
    ],
  },

  faq: {
    eyebrow: "FREQUENTLY ASKED QUESTIONS",
    headline: "Answers to frequently asked questions.",
    items: [
      {
        question: "Is sales experience required?",
        answer:
          "No. Over 80% of the partners I mentor have no sales background. What is required is a willingness to learn, reliability, and communication skills. The professional know-how is imparted during the collaboration.",
      },
      {
        question: "What time commitment is realistic?",
        answer:
          "In part-time development, 5 to 10 hours per week is typically a sustainable range. Pace and intensity are jointly adjusted to your professional situation and goals.",
      },
      {
        question: "What costs should I expect?",
        answer:
          "On my side, there are no consulting or brokerage fees. The investments required in the partner system are transparently outlined in the initial consultation. If I believe the collaboration is not a good fit, I will communicate this openly.",
      },
      {
        question: "How does this system differ from a pyramid scheme?",
        answer:
          "The foundation is an established network marketing company with real products, a regulated compensation plan, and a transparent compliance structure. Pyramid schemes rely on pure recruitment — serious structures rely on real product value.",
      },
      {
        question: "What happens after the initial consultation?",
        answer:
          "The initial consultation lasts 30 to 45 minutes and serves as a mutual assessment. You then decide without time pressure. If there is mutual fit, the first concrete steps are developed together.",
      },
    ],
  },

  cta: {
    eyebrow: "CONTACT",
    headline1: "Schedule a",
    headline2: "personal initial consultation.",
    subtext:
      "30 minutes, non-binding and confidential. We clarify your starting point and jointly assess whether a collaboration adds value.",
    buttonPrimary: "Schedule appointment",
    buttonPrimaryHref: "https://www.wefi.co",
    buttonSecondary: "Send email",
    email: "kontakt@gustavmostetschnig.com",
    phone: "+43 660 123 4567",
    phoneHref: "tel:+43660123456",
    phone2: "+357 99 123 456",
    phone2Label: "Cyprus · Larnaca",
    phone2Href: "tel:+35799123456",
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/gmostet/", icon: "instagram" as const },
      { label: "Facebook", url: "https://www.facebook.com/gustav.mostetschnig", icon: "facebook" as const },
      { label: "Telegram", url: "https://t.me/", icon: "telegram" as const },
    ],
  },

  footer: {
    disclaimer:
      "This website does not constitute investment advice. All information is provided without guarantee.",
  },
};
