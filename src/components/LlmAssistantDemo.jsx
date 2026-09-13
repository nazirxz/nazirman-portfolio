import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Send, Upload, Trash2, FileText, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react'

const API_BASE = import.meta.env.VITE_CHATDOC_API_BASE || 'https://chatdoc-api.vercel.app'
const SESSION_KEY = 'chatdoc_session_id'

const uuidv4 = () => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

const LlmAssistantDemo = () => {
  const [file, setFile] = useState(null)
  const [fileUrl, setFileUrl] = useState(null)
  const [fileText, setFileText] = useState('')
  const [uploading, setUploading] = useState(false)
  const [uploadMsg, setUploadMsg] = useState('')
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Ready for document ingestion. Upload a file above to begin semantic Q&A.' }
  ])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const [ending, setEnding] = useState(false)
  const [sessionId, setSessionId] = useState(() => {
    try {
      const saved = localStorage.getItem(SESSION_KEY)
      if (saved) return saved
    } catch {}
    const id = uuidv4()
    try { localStorage.setItem(SESSION_KEY, id) } catch {}
    return id
  })
  const inputRef = useRef(null)

  const isPdf = useMemo(() => file && file.type?.includes('pdf'), [file])
  const isImage = useMemo(() => file && file.type?.startsWith('image/'), [file])
  const isTextLike = useMemo(() => file && (
    file.type?.startsWith('text/') ||
    ['application/json', 'application/xml'].includes(file.type)
  ), [file])

  const handleSelectFile = (e) => {
    if (ending) return
    const f = e.target.files?.[0]
    if (!f) return
    if (fileUrl) URL.revokeObjectURL(fileUrl)
    setFile(f)
    const url = URL.createObjectURL(f)
    setFileUrl(url)
    setFileText('')

    if (f && (f.type?.startsWith('text/') || ['application/json', 'application/xml'].includes(f.type))) {
      const reader = new FileReader()
      reader.onload = () => setFileText(reader.result?.toString() || '')
      reader.readAsText(f)
    }
  }

  const handleUpload = async () => {
    if (!file || uploading || ending) return
    setUploading(true)
    setUploadMsg('')
    try {
      const fd = new FormData()
      fd.append('file', file)
      fd.append('session_id', sessionId)
      const res = await fetch(`${API_BASE}/api/v1/chat/upload`, {
        method: 'POST',
        body: fd
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data?.detail || data?.message || `Upload failed (HTTP ${res.status})`)
      setUploadMsg(data?.message || 'File indexed successfully. You may now query this document.')
      setMessages((m) => [
        ...m,
        { role: 'assistant', content: `Ingested ${file.name}. Ask any question regarding its content.` }
      ])
    } catch (err) {
      setUploadMsg(`Error: ${err.message}`)
    } finally {
      setUploading(false)
    }
  }

  const sendMessage = async () => {
    const q = input.trim()
    if (!q) return
    setInput('')
    setMessages((m) => [...m, { role: 'user', content: q }])
    setSending(true)
    try {
      const res = await fetch(`${API_BASE}/api/v1/chat/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q, session_id: sessionId })
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data?.detail || data?.message || `Failed (HTTP ${res.status})`)
      const content = data?.response || JSON.stringify(data)
      setMessages((m) => [...m, { role: 'assistant', content }])
    } catch (err) {
      setMessages((m) => [...m, { role: 'assistant', content: `Execution error: ${err.message}` }])
    } finally {
      setSending(false)
      inputRef.current?.focus()
    }
  }

  const endChat = async () => {
    if (!sessionId) return
    setEnding(true)
    try {
      await fetch(`${API_BASE}/api/v1/chat/session/${sessionId}`, { method: 'DELETE' }).catch(() => ({}))
      setUploadMsg('Session cleared.')
    } finally {
      if (fileUrl) URL.revokeObjectURL(fileUrl)
      setFile(null)
      setFileUrl(null)
      setFileText('')
      const newId = uuidv4()
      setSessionId(newId)
      try { localStorage.setItem(SESSION_KEY, newId) } catch {}
      setMessages([{ role: 'assistant', content: 'New session initialized. Upload a file to test RAG retrieval.' }])
      setEnding(false)
    }
  }

  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      if (ending || sending || uploading) return
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <section id="chat-doc" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16 space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-slate-400 text-xs font-mono tracking-wider uppercase">
          <Terminal className="w-3.5 h-3.5 text-sky-400" />
          <span>Live Interactive Sandbox</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Document AI <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-300 bg-clip-text text-transparent">Sandbox</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Test interactive multi-format document ingestion, semantic chunking, and LLM Q&A live in your browser.
        </p>
      </motion.div>

      {/* Main Terminal Frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Chat Terminal (7 cols) */}
        <div className="lg:col-span-7 card-minimal overflow-hidden flex flex-col h-[640px]">
          {/* Top Window Chrome */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#06080E] border-b border-white/[0.08]">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
              <span className="text-xs font-mono text-slate-400 ml-2 font-medium">doc_assistant.sh</span>
            </div>

            <button
              onClick={endChat}
              disabled={ending || uploading || sending}
              className="text-[11px] font-mono text-slate-400 hover:text-white px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.06] transition-colors cursor-pointer"
            >
              Reset Session
            </button>
          </div>

          {/* Upload Strip */}
          <div className="p-3.5 bg-white/[0.01] border-b border-white/[0.06] flex items-center justify-between gap-3 flex-wrap text-xs">
            <div className="flex items-center gap-2">
              <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-200 hover:bg-white/[0.08] cursor-pointer transition-colors font-mono">
                <Upload className="w-3.5 h-3.5 text-sky-400" />
                <span>Choose Document</span>
                <input type="file" className="hidden" onChange={handleSelectFile} />
              </label>

              <button
                onClick={handleUpload}
                disabled={!file || uploading || ending}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-slate-950 font-semibold hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-mono"
              >
                {uploading ? 'Processing...' : 'Index Document'}
              </button>
            </div>

            {file && (
              <span className="text-[11px] font-mono text-slate-400 truncate max-w-[200px]">
                {file.name} ({(file.size / 1024).toFixed(0)} KB)
              </span>
            )}
          </div>

          {uploadMsg && (
            <div className="px-4 py-2 bg-sky-500/[0.06] border-b border-sky-500/20 text-[11px] font-mono text-sky-300">
              {uploadMsg}
            </div>
          )}

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 font-sans">
            {messages.map((m, idx) => (
              <div key={idx} className={`max-w-[85%] ${m.role === 'user' ? 'ml-auto' : ''}`}>
                <div
                  className={`px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-white text-slate-950 font-medium'
                      : 'bg-white/[0.03] border border-white/[0.08] text-slate-200'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {sending && (
              <div className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                <span>Computing neural embeddings...</span>
              </div>
            )}
          </div>

          {/* Input Box */}
          <div className="p-3 border-t border-white/[0.08] bg-[#06080E]/60">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about the document... (Press Enter)"
                className="flex-1 rounded-xl bg-white/[0.03] border border-white/[0.08] px-3.5 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400/50 transition-colors"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || sending || uploading || ending}
                className="p-2.5 rounded-xl bg-white text-slate-950 font-semibold hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Document Viewer (5 cols) */}
        <div className="lg:col-span-5 card-minimal overflow-hidden flex flex-col h-[640px]">
          <div className="px-4 py-3 bg-[#06080E] border-b border-white/[0.08] flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400 font-medium">Document Inspector</span>
            {file && <span className="text-[11px] font-mono text-emerald-400">active_preview</span>}
          </div>

          <div className="flex-1 bg-[#04060A] flex items-center justify-center p-4 overflow-auto">
            {!file ? (
              <div className="text-center text-slate-500 text-xs font-mono max-w-xs leading-relaxed">
                <FileText className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                <span>No document loaded. Upload a PDF, text, or image file on the left to preview.</span>
              </div>
            ) : isPdf && fileUrl ? (
              <iframe title="pdf-viewer" src={fileUrl} className="w-full h-full rounded border-0" />
            ) : isImage && fileUrl ? (
              <img src={fileUrl} alt="preview" className="max-h-full max-w-full object-contain rounded" />
            ) : (
              <pre className="w-full h-full text-[11px] font-mono text-slate-300 whitespace-pre-wrap overflow-auto p-2">
                {fileText || 'Loading text representation...'}
              </pre>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LlmAssistantDemo
