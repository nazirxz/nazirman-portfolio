# 🌟 Nazirman Portfolio — Featured Projects

---

## 1. 🥑 FreshPlate — AI Health & Financial Telemetry App & Web Platform
> **Ecosystem**: Cross-platform Mobile App (iOS & Android) + Marketing Landing Page ([Freshaverstech](https://freshaverstech.com))  
> **Status**: Production Ready • 158+ Automated Tests Passed • Store Release Ready

### 📋 Project Overview
FreshPlate adalah aplikasi mobile lintas platform (iOS & Android) berbasis Flutter & Supabase yang memadukan pelacakan nutrisi berbasis Computer Vision dengan telemetri pengeluaran makanan secara real-time. Pengguna cukup mengambil foto piring makanan, dan sistem cerdas dalam waktu <3 detik akan mengenali menu, memecah makronutrisi & mikronutrisi, serta mengestimasi biaya makan dan dampaknya terhadap anggaran bulanan.

Didukung oleh landing page resmi modern berbasis **Astro & Tailwind CSS** ([Freshaverstech](https://freshaverstech.com)) dengan integrasi VIP Waitlist lead capture dan preview interaktif multi-mode.

### 🛠 Tech Stack
- **Mobile Client**: Flutter 3.44+, Dart 3.12+, Provider / Bloc, Material 3, iOS Cupertino
- **Vision AI Engine**: OpenAI Vision Multimodal APIs, Supabase Edge Functions (Deno/TypeScript)
- **Database & Auth**: Supabase PostgreSQL, Row Level Security (RLS), Supabase Storage Buckets
- **Monetization**: RevenueCat SDK, Google Play In-App Billing, Apple StoreKit 2 (3-Tier: Free, Individual, Family 5-Seat)
- **Web & Landing Page**: Astro SSG/SSR, Tailwind CSS, TypeScript, Cloudflare / Vercel
- **Quality Assurance & DevOps**: 158+ automated tests (unit, widget, E2E integration), Docker, Colima, Automated Bash Release Pipelines

### 🎯 Key Engineering Innovations
1. **Multimodal AI Food Scanner**: Pengenalan makanan instan berbasis OpenAI Vision Edge Function dalam < 3 detik.
2. **Real-time Financial Telemetry**: Menghubungkan asupan kalori/protein dengan biaya makan, melacak perbandingan masak sendiri vs makan di luar.
3. **Dynamic Portion Engine**: 100% master data lock dengan rekalkulasi real-time saat porsi diubah oleh pengguna tanpa data drift.
4. **Arsitektur Langganan 3-Tier**: Integrasi RevenueCat lengkap dengan gateway kode undangan untuk akses VIP/Family.
5. **Keamanan & RLS**: Kebijakan Row Level Security ketat pada Supabase untuk melindungi data biometrik dan keuangan pengguna.
6. **158+ Automated Tests**: 0 linter errors, dual platform release build scripts untuk Android (APK/AAB) dan iOS (IPA/TestFlight).

---

## 2. 🚀 URBuddy LLM – AI-Powered Document Intelligence System
> **Scope**: Enterprise Document Intelligence & Corporate Knowledge Base  
> **Status**: Enterprise Production (On-Premise)

### 📋 Project Overview
URBuddy LLM adalah sistem AI enterprise untuk pemrosesan dan analisis dokumen korporasi dari berbagai sumber SharePoint Pertamina. Menggunakan pendekatan RAG (Retrieval-Augmented Generation), sistem ini mampu memberikan jawaban kontekstual dan cerdas berdasarkan konten dokumen perusahaan dan database internal.

### 🛠 Tech Stack
- **Backend & API**: FastAPI (Python 3.10+), Uvicorn ASGI production server, RESTful API + Streaming responses
- **AI & Machine Learning**: LangChain, Sentence Transformers, ColPali, OpenAI / Anthropic APIs, Milvus Vector DB
- **Document Processing**: SharePoint Integration (5+ enterprise sites), OCR (SmolDoc), PDF/PPT/DOC Extractors, Text Chunking
- **Database & Storage**: Oracle Database (primary) via cx_Oracle, MSSQL Server, Milvus Vector Database, Redis
- **Security**: NTLM Authentication, Fernet Encryption, JWT Tokens, Multi-site Credential Manager
- **Infrastructure & DevOps**: Docker & Docker Compose, Load Balancer, Multi-GPU H100 Orchestration, Comprehensive Logging

### 📊 Business Impact & Value
- **Unified Document Access**: Integrasi 5+ SharePoint site dalam satu gerbang pencarian.
- **AI-powered Search**: Menemukan informasi dokumen korporat lebih cepat & relevan.
- **Enterprise-grade AI**: Telah teruji dan berjalan stabil di lingkungan produksi on-premise.