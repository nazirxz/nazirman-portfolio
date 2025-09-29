import React, { useEffect, useMemo, useRef, useState } from 'react'

const API_BASE = import.meta.env.VITE_CHATDOC_API_BASE || 'https://chatdoc-api.vercel.app'

const SESSION_KEY = 'chatdoc_session_id'

const uuidv4 = () => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  // Fallback
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
    { role: 'assistant', content: 'Please upload a document above, then ask your questions here.' }
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
    const f = e.target.files?.[0]
    if (!f) return
    // Revoke old URL
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
    if (!file) {
      setUploadMsg('Please choose a file first.')
      return
    }
    setUploading(true)
    setUploadMsg('')
    try {
      const form = new FormData()
      form.append('file', file)
      if (sessionId) form.append('session_id', sessionId)
      const res = await fetch(`${API_BASE}/api/v1/chat/upload`, {
        method: 'POST',
        body: form
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data?.message || `Upload failed (HTTP ${res.status})`)
      if (data?.session_id && data.session_id !== sessionId) {
        setSessionId(data.session_id)
      }
      setUploadMsg(data?.message || `File '${file.name}' uploaded and processed successfully.`)
      setMessages((m) => [
        ...m,
        { role: 'assistant', content: 'Document processed successfully. What would you like to know?' }
      ])
    } catch (err) {
      setUploadMsg(`Upload failed: ${err.message}`)
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
      if (!res.ok) throw new Error(data?.detail || data?.message || `Failed to get a response (HTTP ${res.status})`)
      const content = data?.response || JSON.stringify(data)
      setMessages((m) => [...m, { role: 'assistant', content }])
    } catch (err) {
      setMessages((m) => [...m, { role: 'assistant', content: `An error occurred: ${err.message}` }])
    } finally {
      setSending(false)
      inputRef.current?.focus()
    }
  }

  const endChat = async () => {
    if (!sessionId) return
    setEnding(true)
    try {
      const res = await fetch(`${API_BASE}/api/v1/chat/session/${sessionId}`, { method: 'DELETE' })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data?.message || `Failed to end session (HTTP ${res.status})`)
      setUploadMsg(data?.message || 'Session ended and files cleared.')
    } catch (err) {
      setUploadMsg(`End Chat failed: ${err.message}`)
    } finally {
      // Reset local state regardless of API result to keep UX clean
      if (fileUrl) URL.revokeObjectURL(fileUrl)
      setFile(null)
      setFileUrl(null)
      setFileText('')
      const newId = uuidv4()
      setSessionId(newId)
      try { localStorage.setItem(SESSION_KEY, newId) } catch {}
      setMessages([{ role: 'assistant', content: 'New chat started. Upload a document or ask a question.' }])
      setEnding(false)
    }
  }

  useEffect(() => {
    try { localStorage.setItem(SESSION_KEY, sessionId) } catch {}
  }, [sessionId])

  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <section id="chat-doc" className="section-padding bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">Chat Doc</h2>
          <p className="text-gray-300">Upload a document, preview it, and ask questions via chat.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Upload + Chat */}
          <div className="flex flex-col h-[70vh] card-glow">
            {/* Upload bar */}
            <div className="p-4 border-b border-gray-700/60">
              <div className="flex items-center gap-3 flex-wrap">
                <label
                  aria-disabled={ending}
                  className={`inline-flex items-center px-3 py-2 rounded-lg bg-gray-700/60 text-sm ${ending ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'hover:bg-gray-700 cursor-pointer'}`}
                >
                  <input type="file" className="hidden" onChange={handleSelectFile} />
                  <span>Choose File</span>
                </label>
                <button
                  onClick={handleUpload}
                  disabled={!file || uploading || ending}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    (uploading || ending) ? 'bg-gray-700 text-gray-300' : 'bg-neon-blue text-white hover:brightness-110'
                  }`}
                >
                  {uploading ? 'Uploading...' : (ending ? 'Please wait...' : 'Upload to Assistant')}
                </button>
                <button
                  onClick={endChat}
                  disabled={ending || uploading || sending}
                  className={`px-4 py-2 rounded-lg text-sm font-medium text-gray-100 ${ending ? 'bg-gray-700 cursor-not-allowed' : 'bg-gray-700/70 hover:bg-gray-700'}`}
                >
                  {ending ? (
                    <span className="inline-flex items-center">
                      <span className="inline-block h-4 w-4 border-2 border-white/60 border-t-transparent rounded-full animate-spin mr-2"></span>
                      Ending...
                    </span>
                  ) : 'End Chat'}
                </button>
                {file && (
                  <span className="text-xs text-gray-300 truncate">{file.name} ({Math.ceil(file.size/1024)} KB)</span>
                )}
                {sessionId && (
                  <span className="text-[10px] text-gray-400">Session: {sessionId}</span>
                )}
              </div>
              {uploadMsg && (
                <p className="mt-2 text-xs text-gray-300">{uploadMsg}</p>
              )}
            </div>

            {/* Chat area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, idx) => (
                <div key={idx} className={`max-w-[90%] md:max-w-[80%] ${m.role === 'user' ? 'ml-auto' : ''}`}>
                  <div className={`${m.role === 'user' ? 'bg-neon-blue text-white' : 'bg-gray-700/60 text-gray-100'} px-3 py-2 rounded-lg whitespace-pre-wrap`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {sending && (
                <div className="text-xs text-gray-400">Assistant is typing...</div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-700/60">
              <div className="flex gap-2">
                <textarea
                  ref={inputRef}
                  rows={2}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={"Ask about the document... (Ctrl/Cmd+Enter to send)"}
                  className="flex-1 resize-none rounded-lg bg-gray-800 text-gray-100 p-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue/50"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || sending || uploading || ending}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                    (sending || ending) ? 'bg-gray-700 text-gray-300' : 'bg-purple-gradient text-white hover:brightness-110'
                  }`}
                >
                  Send
                </button>
              </div>
            </div>
          </div>

          {/* Right: Viewer */}
          <div className="h-[70vh] card-glow overflow-hidden">
            <div className="p-4 border-b border-gray-700/60 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Document Viewer</h3>
                <p className="text-xs text-gray-400">Local preview of the selected file</p>
              </div>
              {file && (
                <span className="text-xs text-gray-300 truncate max-w-[50%]">{file.name}</span>
              )}
            </div>

            <div className="h-[calc(70vh-72px)] w-full bg-gray-900 flex items-center justify-center overflow-auto">
              {!file && (
                <div className="text-gray-400 text-sm">No file yet. Choose and upload a document on the left panel.</div>
              )}

              {file && isPdf && fileUrl && (
                <iframe title="pdf-viewer" src={fileUrl} className="w-full h-full" />
              )}

              {file && isImage && fileUrl && (
                <img src={fileUrl} alt="preview" className="max-h-full max-w-full object-contain" />
              )}

              {file && isTextLike && (
                <pre className="w-full h-full p-4 text-xs text-gray-200 whitespace-pre-wrap overflow-auto">{fileText || 'Loading text preview...'}</pre>
              )}

              {file && !isPdf && !isImage && !isTextLike && fileUrl && (
                <div className="p-4 text-center">
                  <p className="text-gray-300 mb-2">Preview is not available for this file type.</p>
                  <a href={fileUrl} download={file?.name} className="text-neon-blue underline">Download file</a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Helper notes */}
        <div className="mt-4 text-xs text-gray-400 text-center">
          <p>Server: {API_BASE}. Ensure the API is running and CORS allows this origin.</p>
        </div>
      </div>
    </section>
  )
}

export default LlmAssistantDemo
