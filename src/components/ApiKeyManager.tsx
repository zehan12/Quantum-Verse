"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Eye, EyeOff, Trash2, Copy } from "lucide-react"

const LOCAL_STORAGE_KEY = "gemini_api_key"
const LOCAL_STORAGE_DESC = "gemini_api_key_description"

export function APIKeyManager() {
    const [apiKey, setApiKey] = useState("")
    const [description, setDescription] = useState("")
    const [newKey, setNewKey] = useState("")
    const [newDesc, setNewDesc] = useState("")
    const [showKey, setShowKey] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)

    useEffect(() => {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
        const savedDesc = localStorage.getItem(LOCAL_STORAGE_DESC)
        if (saved) setApiKey(saved)
        if (savedDesc) setDescription(savedDesc)
    }, [])

    const handleSave = () => {
        if (!newKey.trim()) return
        localStorage.setItem(LOCAL_STORAGE_KEY, newKey)
        localStorage.setItem(LOCAL_STORAGE_DESC, newDesc)
        setApiKey(newKey)
        setDescription(newDesc)
        setNewKey("")
        setNewDesc("")
        setShowKey(false)
        setDialogOpen(false)
    }

    const handleClear = () => {
        localStorage.removeItem(LOCAL_STORAGE_KEY)
        localStorage.removeItem(LOCAL_STORAGE_DESC)
        setApiKey("")
        setDescription("")
        setShowKey(false)
        setDialogOpen(false)
    }

    return (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
                <Button className="bg-[#1A1A1A] border border-[#333] hover:border-[#00E5FF] hover:bg-[#00E5FF]/10 text-[#00E5FF] rounded-sm uppercase font-mono font-bold text-xs tracking-wider transition-colors px-4 py-2 flex items-center gap-2">
                    <span>[AUTH]</span>
                    {apiKey ? "MANAGE_KEY" : "SET_KEY"}
                </Button>
            </DialogTrigger>

            <DialogContent className="max-w-md bg-[#0A0A0A] border-2 border-[#333] rounded-sm shadow-[8px_8px_0_#00E5FF] p-6 font-mono">
                {!apiKey ? (
                    <>
                        <DialogHeader>
                            <DialogTitle className="font-space uppercase text-[#00E5FF] tracking-widest text-xl mb-2">AUTH // INITIALIZATION</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            <p className="text-xs text-[#A0A0A0] leading-relaxed">
                                &gt; ACQUIRE CREDENTIALS VIA <a
                                    href="https://aistudio.google.com/app/apikey"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#00E5FF] hover:underline"
                                >GOOGLE AI STUDIO</a>
                            </p>
                            <Input
                                aria-label="API Key Description"
                                placeholder="> ENTER_ALIAS_DESCRIPTION"
                                value={newDesc}
                                onChange={(e) => setNewDesc(e.target.value)}
                                className="bg-[#050505] border-2 border-[#333] focus-visible:ring-0 focus-visible:border-[#00E5FF] rounded-sm font-mono text-[#00E5FF] placeholder-[#555] rounded-none"
                            />
                            <Input
                                aria-label="Gemini API Key"
                                placeholder="> PASTE_GEMINI_API_KEY"
                                value={newKey}
                                onChange={(e) => setNewKey(e.target.value)}
                                type={showKey ? "text" : "password"}
                                className="bg-[#050505] border-2 border-[#333] focus-visible:ring-0 focus-visible:border-[#00E5FF] rounded-sm font-mono text-[#00E5FF] placeholder-[#555] rounded-none"
                            />
                        </div>
                        <DialogFooter className="mt-6">
                            <Button 
                                onClick={handleSave} 
                                disabled={!newKey.trim()}
                                className="w-full bg-[#00E5FF] text-[#050505] font-bold uppercase rounded-sm border-2 border-[#00E5FF] hover:bg-[#050505] hover:text-[#00E5FF] transition-colors disabled:opacity-50"
                            >
                                EXECUTE_SAVE()
                            </Button>
                        </DialogFooter>
                    </>
                ) : (
                    <>
                        <DialogHeader>
                            <DialogTitle className="font-space uppercase text-[#00E5FF] tracking-widest text-xl mb-2">AUTH // ACTIVE_SESSION</DialogTitle>
                        </DialogHeader>

                        <div className="bg-[#111] border-l-4 border-[#00E5FF] rounded-sm p-4 flex justify-between items-center text-sm font-mono">
                            <div className="flex flex-col gap-2">
                                <div className="text-xs text-[#00E5FF] uppercase font-bold">{description || "UNNAMED_NODE"}</div>
                                <div className="text-[#E0E0E0] tracking-widest text-xs">
                                    {showKey
                                        ? apiKey
                                        : apiKey.length > 6
                                            ? "*".repeat(apiKey.length - 6) + apiKey.slice(-6)
                                            : "*".repeat(apiKey.length)
                                    }
                                </div>
                                <p className="text-[10px] text-[#555] mt-1">&gt; SECURE_LOCAL_STORAGE_ENCLAVE</p>
                            </div>

                            <div className="flex items-center gap-1 ml-4 shrink-0">
                                <Button aria-label={showKey ? "Hide API Key" : "Show API Key"} size="icon" variant="ghost" onClick={() => setShowKey(!showKey)} className="text-[#00E5FF] hover:bg-[#00E5FF]/20 hover:text-[#00E5FF] rounded-sm">
                                    {showKey ? <EyeOff size={16} aria-hidden="true" /> : <Eye size={16} aria-hidden="true" />}
                                </Button>
                                <Button aria-label="Copy API Key" size="icon" variant="ghost" onClick={() => navigator.clipboard.writeText(apiKey)} className="text-[#00E5FF] hover:bg-[#00E5FF]/20 hover:text-[#00E5FF] rounded-sm">
                                    <Copy size={16} aria-hidden="true" />
                                </Button>
                                <Button aria-label="Delete API Key" size="icon" variant="ghost" onClick={handleClear} className="text-[#FF0055] hover:bg-[#FF0055]/20 hover:text-[#FF0055] rounded-sm">
                                    <Trash2 size={16} aria-hidden="true" />
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </DialogContent>
        </Dialog>
    )
}
