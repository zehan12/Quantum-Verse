"use client"
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const predefinedTags = [
    "smartphones",
    "social media",
    "AI assistants"
  ];

  const handleSync = async () => {
    if (!prompt.trim()) {
      setError("Please describe a technology first.");
      return;
    }

    const normalizedPrompt = prompt.trim().toLowerCase();
    const isPredefined = predefinedTags.some(tag => tag.toLowerCase() === normalizedPrompt);

    if (!isPredefined) {
      const apiKey = localStorage.getItem("gemini_api_key");
      if (!apiKey) {
        setError("API Key is missing. Please set it in the top-right corner to explore custom technologies.");
        return;
      }
    }

    setError("");
    setIsLoading(true);
    
    // Navigate to timelines page with the query
    router.push(`/timelines?q=${encodeURIComponent(prompt.trim())}`);
  };

  return (
    <>
      <main className="container mx-auto px-4 py-4 flex flex-col min-h-[calc(100vh-80px)]">
        <div className="flex-grow flex flex-col justify-center shrink-0 py-2">
          <header className="text-center mb-6">
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="text-4xl md:text-5xl border-2 border-[#00E5FF] text-[#00E5FF] p-2 rounded-sm shadow-[4px_4px_0_#00E5FF]">
                ⏳
              </div>
              <h1 className="text-4xl md:text-6xl font-space font-bold text-[#E0E0E0] uppercase tracking-widest">
                Quantum<span className="text-[#00E5FF]">Verse</span>
              </h1>
            </div>
            <p className="text-base md:text-xl text-[#A0A0A0] max-w-2xl mx-auto border-l-4 border-[#00E5FF] pl-4 text-left font-mono">
              &gt; SYSTEM: INITIALIZING TEMPORAL RELAY...<br/>
              &gt; STATUS: AWAITING QUERY SYNCHRONIZATION
            </p>
          </header>
          <section className="max-w-2xl mx-auto w-full flex flex-col space-y-4">
            <div className="space-y-1">
              <h2 className="text-xl md:text-2xl font-space font-bold text-[#E0E0E0] tracking-tight border-b-2 border-[#1A1A1A] pb-1 inline-block">
                TARGET_TECHNOLOGY_NODE
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {predefinedTags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => setPrompt(tag)}
                  className="px-4 py-2 text-sm font-bold uppercase bg-[#1A1A1A] text-[#E0E0E0] border border-[#333] hover:border-[#00E5FF] hover:text-[#00E5FF] transition-colors rounded-sm"
                >
                  [{tag}]
                </button>
              ))}
              <button
                onClick={() => {
                  setPrompt("");
                  setError("");
                }}
                className="px-4 py-2 text-sm font-bold uppercase bg-[#1A1A1A] text-[#FF0055] border border-[#333] hover:border-[#FF0055] transition-colors rounded-sm"
              >
                [CLEAR]
              </button>
            </div>

            <div className="flex flex-col space-y-2 w-full relative">
              <div className="absolute -top-3 left-4 bg-[#050505] px-2 text-xs text-[#00E5FF] font-mono z-10">
                INPUT_STREAM
              </div>
              <Textarea
                placeholder="> Enter temporal target here..."
                className="min-h-[120px] text-lg bg-[#0A0A0A] border-2 border-[#333] focus:border-[#00E5FF] rounded-sm p-4 w-full resize-none font-mono text-[#00E5FF] placeholder-[#444] shadow-[4px_4px_0_#1A1A1A] focus:shadow-[4px_4px_0_#00E5FF] transition-all outline-none"
                aria-label="Technology query input"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />

              {error && (
                <div className="bg-[#FF0055]/10 border-l-4 border-[#FF0055] px-4 py-3 text-[#FF0055] text-sm font-mono w-full mt-4 flex items-center gap-2">
                  <span className="animate-pulse">⚠</span> {error}
                </div>
              )}
            </div>

            <div className="pt-4">
              <button
                onClick={handleSync}
                disabled={isLoading}
                className={`w-full group relative overflow-hidden bg-[#00E5FF] text-[#050505] font-space font-bold uppercase text-xl py-5 rounded-sm border-2 border-[#00E5FF] hover:bg-[#050505] hover:text-[#00E5FF] transition-colors shadow-[6px_6px_0_#1A1A1A] hover:shadow-[2px_2px_0_#1A1A1A] hover:translate-x-[4px] hover:translate-y-[4px] active:shadow-none active:translate-x-[6px] active:translate-y-[6px] ${isLoading ? "opacity-50 cursor-wait shadow-none translate-x-[6px] translate-y-[6px]" : ""}`}
              >
                <span className="relative z-10 flex items-center justify-center gap-3 tracking-wider">
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      SYNCHRONIZING...
                    </>
                  ) : (
                    <>
                      EXECUTE_SYNC()
                    </>
                  )}
                </span>
              </button>
            </div>
          </section>
        </div>
        <footer className="py-4 border-t-2 border-[#1A1A1A] mt-auto shrink-0 flex justify-between items-center text-xs text-[#555] font-mono">
          <p>SYS.VER 1.0.4</p>
          <p>QUANTUM_VERSE // CONNECTED</p>
        </footer>
      </main>
    </>
  );
}
