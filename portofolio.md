🚀 URBuddy LLM – AI-Powered Document Intelligence System
📋 Project Overview

URBuddy LLM adalah sistem AI enterprise untuk pemrosesan dan analisis dokumen korporasi dari berbagai sumber SharePoint Pertamina.
Menggunakan pendekatan RAG (Retrieval-Augmented Generation), sistem ini mampu memberikan jawaban kontekstual dan intelligent berdasarkan konten dokumen perusahaan.

🛠 Tech Stack
Backend & API

FastAPI – Modern web framework (Python 3.10+)

Uvicorn – ASGI production server
1
RESTful API + Streaming Responses – Untuk real-time query dan document serving

AI & Machine Learning

LangChain – LLM application framework

Sentence Transformers – Embedding generation

ColPali – Advanced retrieval system

OpenAI / Anthropic APIs – LLM integration

Vector Database – High-performance embedding storage

Document Processing

SharePoint Integration – Multi-site access (URBuddy, TCS, DWI, STK, dll.)

OCR (SmolDoc) – Extract text dari scan/image

PDF/PPT/DOC Extractors – Multi-format ingestion

Text Chunking – Intelligent segmentation for RAG

Database & Storage

Oracle Database (primary) via cx_Oracle

MSSQL Server (secondary support)

Vector DB – Embedding persistence

Authentication & Security

NTLM Authentication – SharePoint secure access

Fernet Encryption – Credential protection

JWT Tokens – Session management

Multi-site Credential Manager

Infrastructure & DevOps

Docker & Docker Compose – Multi-service containerization

Load Balancer – Scalable traffic handling

Multi-GPU Support – H100-ready for LLM workloads

Comprehensive Logging & Monitoring

🏗 System Architecture

Core RAG Engine – Semantic search + retrieval

Document Proxy Pattern – Abstraction for SharePoint access

Component Manager – Modular services (scalable & pluggable)

Caching Layer – Faster response & lower infra cost

🎯 Key Features

Multi-site SharePoint Integration (5+ enterprise sites)

Intelligent Semantic Retrieval & Document Search

Real-time Document Processing (with OCR)

Advanced RAG Implementation

Scalable Architecture with Load Balancing

Production-ready with GPU orchestration

📊 Business Impact

Unified Document Access – Integrasi 5+ SharePoint site

AI-powered Search – Temukan informasi lebih cepat & relevan

Automation – Eliminasi manual document lookup

Knowledge Management – Knowledge base perusahaan yang terpusat

📈 Portfolio Value

Enterprise-grade AI System – Sudah terbukti di lingkungan produksi

Full-stack Development – Backend, AI, Database, DevOps

Complex Integration Challenges – SharePoint, Oracle/MSSQL, LLM APIs

Scalable & Modular – Future-proof untuk integrasi sistem lain

Modern AI Tech Stack – Menggunakan LangChain, ColPali, GPU orchestration