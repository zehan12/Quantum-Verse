"use client"
import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { EraCard } from "@/components/shared/EraCard";
import { Hammer, ScanEye, Smartphone, ArrowLeft } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const PREDEFINED_RESULTS: Record<string, { retroverse: string, nowverse: string, futureverse: string }> = {
  "smartphones": {
    retroverse: "A heavy rotary telephone sits on a desk, requiring operator assistance to connect. People communicate via telegrams for urgent matters.",
    nowverse: "A sleek, pocket-sized supercomputer connects you instantly to the world. It holds your memories, finances, and endless knowledge.",
    futureverse: "A neural-linked crystalline implant allows telepathic data transfer. Communication is instant, boundless, and purely thought-driven."
  },
  "social media": {
    retroverse: "People gather at local cafes to share gossip and read the daily newspaper. Information travels through word of mouth and letters.",
    nowverse: "Global digital platforms connect billions instantly, sharing photos and thoughts. It shapes culture, politics, and personal identities.",
    futureverse: "A collective consciousness mesh allows users to experience each other's memories and emotions in immersive virtual realities."
  },
  "ai assistants": {
    retroverse: "Human assistants and typists manage schedules and tasks manually. Mechanical calculators are the peak of automated assistance.",
    nowverse: "Voice-activated digital helpers manage schedules, answer questions, and control smart homes. They learn and adapt to user preferences.",
    futureverse: "Sentient quantum companions act as life partners and strategic advisors. They anticipate needs before they are even conceived."
  }
};

function TimelineContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q");

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [results, setResults] = useState({
    retroverse: "",
    nowverse: "",
    futureverse: "",
  });

  useEffect(() => {
    if (!query) {
      router.push("/");
      return;
    }

    const normalizedQuery = query.trim().toLowerCase();

    // Check predefined
    if (PREDEFINED_RESULTS[normalizedQuery]) {
      // Simulate a small loading delay for smooth UX
      setTimeout(() => {
        setResults(PREDEFINED_RESULTS[normalizedQuery]);
        setIsLoading(false);
      }, 800);
      return;
    }

    // Fetch from API
    const fetchTimelines = async () => {
      const apiKey = localStorage.getItem("gemini_api_key");
      if (!apiKey) {
        setError("API Key is missing. Please return home and set it in the top-right corner.");
        setIsLoading(false);
        return;
      }

      try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const promptText = `Describe the technology: "${query}" from three different eras. Keep each description to exactly 2-3 short sentences.
        Output JSON strictly in the following format without markdown formatting (no \`\`\`json):
        {
          "retroverse": "description for 1920s...",
          "nowverse": "description for present day...",
          "futureverse": "description for 2125..."
        }`;

        const result = await model.generateContent(promptText);
        const text = result.response.text();

        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
          throw new Error("Could not parse the response from the timelines.");
        }

        const parsed = JSON.parse(jsonMatch[0]);

        setResults({
          retroverse: parsed.retroverse || "No data",
          nowverse: parsed.nowverse || "No data",
          futureverse: parsed.futureverse || "No data"
        });
      } catch (err: unknown) {
        console.error("API Error:", err);
        const errorMessage = err instanceof Error ? err.message : "Failed to sync timelines.";
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTimelines();
  }, [query, router]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 font-mono">
        <div className="relative w-24 h-24 bg-[#050505] border-2 border-[#00E5FF] shadow-[8px_8px_0_#00E5FF] flex items-center justify-center animate-pulse">
          <div className="text-[#00E5FF] font-bold text-xl">...</div>
        </div>
        <div className="text-center space-y-2 mt-8">
          <h2 className="text-2xl font-space font-bold uppercase tracking-widest text-[#00E5FF]">
            SYNCHRONIZING...
          </h2>
          <p className="text-[#A0A0A0] text-sm tracking-widest">&gt; LOCATING_DATA: <span className="text-[#E0E0E0] font-bold">[{query}]</span></p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 font-mono">
        <div className="bg-[#111] border-2 border-[#FF0055] rounded-none p-8 max-w-md text-center shadow-[8px_8px_0_#FF0055]">
          <h2 className="text-xl font-space font-bold text-[#FF0055] mb-4 uppercase tracking-widest">SYNC_FAILED</h2>
          <p className="text-[#E0E0E0] mb-6 border-l-2 border-[#FF0055] pl-3 text-left text-sm">{error}</p>
          <button
            onClick={() => router.push("/")}
            className="w-full px-6 py-3 bg-[#FF0055] text-[#050505] hover:bg-[#050505] hover:text-[#FF0055] border-2 border-[#FF0055] rounded-sm transition-colors font-bold uppercase text-sm tracking-widest"
          >
            RETURN_TO_BASE()
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 w-full flex flex-col items-center justify-center">
      <div className="mb-8 w-full text-center relative pb-4">
        <button
          onClick={() => router.push("/")}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-[#00E5FF] hover:bg-[#00E5FF]/10 transition-colors border-2 border-transparent hover:border-[#00E5FF] rounded-sm"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl md:text-4xl font-space font-bold text-[#E0E0E0] mb-2 uppercase tracking-widest">
          {query}
        </h2>
        <p className="text-[#A0A0A0] text-xs font-mono tracking-widest">
          &gt; TIMELINES_SYNCHRONIZED
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
        <EraCard
          title="Retroverse:"
          subtitle="The Roaring Twenties"
          label="Signal from 1920"
          description={results.retroverse}
          color="text-orange-400"
          Icon={Hammer}
          imgPath={"/assets/image/1920.png"}
        />

        <EraCard
          title="Nowverse:"
          subtitle="The Digital Present"
          label="Ping from 2025"
          description={results.nowverse}
          color="text-cyan-400"
          Icon={Smartphone}
          imgPath={"/assets/image/2025.png"}
        />

        <EraCard
          title="Futureverse:"
          subtitle="The Quantum Horizon"
          label="Pulse from 2125"
          description={results.futureverse}
          color="text-fuchsia-400"
          Icon={ScanEye}
          imgPath={"/assets/image/2125.png"}
        />
      </div>
    </div>
  );
}

export default function TimelinesPage() {
  return (
    <main className="container mx-auto px-4 py-4 min-h-[calc(100vh-80px)] flex flex-col justify-center w-full">
      <Suspense fallback={
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="w-12 h-12 bg-[#00E5FF] animate-ping"></div>
        </div>
      }>
        <TimelineContent />
      </Suspense>
    </main>
  );
}
