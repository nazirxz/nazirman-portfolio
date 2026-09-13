export const projects = [
  {
    id: 'freshplate-mobile',
    number: '01',
    name: 'FreshPlate Mobile App',
    category: 'AI Health & Financial Telemetry • Mobile',
    year: '2024',
    description: 'Cross-platform mobile application combining multimodal Computer Vision food recognition with real-time financial and nutritional telemetry.',
    fullDescription: 'Production-ready mobile application built with Flutter 3.44+ and Supabase. Users take a photo of their meal, and within <3 seconds the OpenAI Vision edge pipeline identifies ingredients, calculates precise calories and macro/micronutrients, and correlates meal impact with real-time dining-out vs. grocery budgets. Features a dynamic portion recalculation engine with 100% master data consistency, 3-tier subscription monetization via RevenueCat, and passes 158+ automated unit, widget, and E2E tests.',
    tech: ['Flutter 3.44+', 'Dart', 'OpenAI Vision API', 'Supabase PostgreSQL', 'Row Level Security (RLS)', 'RevenueCat SDK', 'StoreKit 2 / Google Play Billing', 'Provider / Bloc'],
    image: '/images/freshplate/mobile_trio_preview.png',
    gallery: [
      { title: 'Mobile Suite Showcase', image: '/images/freshplate/mobile_trio_preview.png' },
      { title: 'Daily Health & Budget Dashboard', image: '/images/freshplate/dashboard_screen.png' },
      { title: 'AI Meal Photo Scanner (<3s)', image: '/images/freshplate/meal_analysis.png' },
      { title: 'Meal Impact Telemetry', image: '/images/freshplate/meal_impact.png' },
      { title: 'Weight Loss Goal Mode', image: '/images/freshplate/weightloss_dashboard_screen.png' },
      { title: 'Muscle Gain Goal Mode', image: '/images/freshplate/muslce_gaindashboard_screen.png' },
      { title: 'Maintenance Balance Mode', image: '/images/freshplate/maintenance_dashboard.png' },
      { title: 'Biometric Smart Onboarding', image: '/images/freshplate/onboarding_screen.png' }
    ],
    metrics: [
      { label: 'Automated QA', value: '158+ Tests Passed' },
      { label: 'Vision AI Speed', value: '< 3s Edge Recognition' },
      { label: 'Monetization', value: '3-Tier RevenueCat In-App' }
    ],
    highlights: [
      'Multimodal AI Food Scanner running on OpenAI Vision Edge Functions with instant macro & cost parsing',
      'Real-time financial telemetry linking caloric intake with daily food expenditure (home-cooked vs. dining out)',
      'Dynamic portion engine with 100% master data lock and zero recalculation drift',
      'Supabase Row Level Security (RLS) guaranteeing strict personal record isolation',
      'RevenueCat multi-tier subscription engine with VIP / Family invite token gateway',
      'Comprehensive automated testing suite (unit, widget, E2E integration) with zero linter errors'
    ]
  },
  {
    id: 'freshplate-web',
    number: '02',
    name: 'FreshPlate Web & Landing Page',
    category: 'Marketing Ecosystem & VIP Lead Engine • Web',
    year: '2024',
    link: 'https://freshaverstech.com',
    description: 'High-performance marketing landing page and interactive web platform for FreshPlate, featuring sub-second load times and VIP Early Access waitlist capture.',
    fullDescription: 'Official web portal and marketing ecosystem built with Astro SSG/SSR and Tailwind CSS (freshaverstech.com). Features an interactive multi-device showcase, responsive goal carousels, sub-second TTFB on Cloudflare edge CDN, and an integrated VIP Waitlist lead capture engine to drive pre-launch conversion.',
    tech: ['Astro SSG/SSR', 'Tailwind CSS', 'TypeScript', 'Cloudflare CDN', 'VIP Waitlist Engine', 'Responsive Web Design'],
    image: '/images/freshplate/freshaverstech_landing.png',
    gallery: [
      { title: 'Hero & VIP Early Access Waitlist', image: '/images/freshplate/freshaverstech_landing.png' },
      { title: 'Product Architecture & Showcase', image: '/images/freshplate/freshaverstech_showcase.png' },
      { title: 'Full Ecosystem Showcase', image: '/images/projects_freshplate_web.png' }
    ],
    metrics: [
      { label: 'Lighthouse Performance', value: '100 / 100 Speed & SEO' },
      { label: 'Page Load Latency', value: '< 400ms Cloudflare Edge' },
      { label: 'Conversion Engine', value: 'VIP Early Access Funnel' }
    ],
    highlights: [
      'Sub-second page load times and zero-JS hydration using Astro SSG/SSR architecture',
      'Interactive responsive device mockups displaying multi-screen app previews',
      'Integrated early-access waitlist and viral lead capture funnel',
      'Deployed globally on Cloudflare edge CDN with automated CI/CD deployment'
    ]
  },
  {
    id: 'urbuddy-llm',
    number: '03',
    name: 'URBuddy LLM',
    category: 'Enterprise AI Document Intelligence & RAG System',
    year: '2024',
    description: 'Enterprise-grade generative AI & document intelligence system integrating 5+ corporate SharePoint sources, semantic vector retrieval, and on-premise multi-GPU inference.',
    fullDescription: 'Enterprise AI document intelligence and corporate knowledge base system developed for Pertamina. Leverages LangChain multi-stage RAG pipelines, ColPali multimodal retrieval, and Milvus vector database to process complex enterprise formats (PDF, DOC, PPT, OCR). Deployed on-premise with air-gapped security, Oracle Database integration, and high-throughput multi-GPU (H100) inference.',
    tech: ['FastAPI (Python 3.10+)', 'LangChain', 'ColPali', 'Milvus Vector DB', 'Oracle DB (cx_Oracle)', 'MSSQL', 'Multi-GPU H100', 'Docker', 'NTLM & JWT'],
    image: '/images/snipe_urbuddy.png',
    gallery: [
      { title: 'Document AI Chat & Retrieval Interface', image: '/images/snipe_urbuddy.png' },
      { title: 'Milvus Vector DB Architecture', image: '/images/milvus_db.png' }
    ],
    metrics: [
      { label: 'Sources Unified', value: '5+ Enterprise SharePoint Sites' },
      { label: 'Retrieval Latency', value: '4 - 10s Multimodal RAG' },
      { label: 'Infrastructure', value: 'On-Premise Multi-GPU H100' }
    ],
    highlights: [
      'Automated ingestion and OCR indexing across 5+ enterprise SharePoint environments',
      'Advanced RAG pipeline combining semantic vector search with ColPali document ranking',
      'Zero external cloud data exfiltration ensuring strict corporate data governance',
      'Enterprise integration with Oracle DB connection pooling, MSSQL, and NTLM/Fernet encryption'
    ]
  }
]
