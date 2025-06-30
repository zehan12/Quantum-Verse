"use client"
import { Textarea } from "@/components/ui/textarea";
import { EraCard } from "@/components/shared/EraCard";
import { Hammer, ScanEye, Smartphone } from "lucide-react";
import img1920 from "../assets/image/1920.png"

export default function Home() {

  const predefinedTags = [
    "smartphones",
    "social media",
    "AI assisstants"
  ];

  return (
    <>
      <main className="flex-grow container mx-auto px-4 py-8 md:px-6 md:py-12">
        <header className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-2">
            <div className="md:text-6xl">
              ⏳
            </div>
            <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl text-inter font-bold text-transparent md:text-7xl">
              Quantum Verse
            </h1>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Step into the Quantum Verse — Witness technology through the eyes of time
          </p>
        </header>
        <main>
          <section className="mb-10 md:mb-16 max-w-2xl mx-auto flex flex-col space-y-3">
            <div className="flex flex-wrap gap-2 py-2">
              {predefinedTags.map((tag, index) => (
                <button
                  key={index}
                  // onClick={() => addTagToInput(tag)}
                  className="px-3 py-1 text-xs bg-muted-foreground/90 text-background rounded-lg hover:bg-muted-foreground cursor-pointer"
                >
                  {tag}
                </button>
              ))}
              <button
                // onClick={handleClearInput}
                className="px-3 py-1 text-xs bg-red-600 text-white rounded-lg hover:bg-red-600/90 cursor-pointer"
              >
                clear
              </button>
            </div>

            <div className="flex flex-col space-y-5 items-center justify-center">
              <Textarea
                placeholder="Describe a piece of today's technology (e.g., 'smartphones', 'social media', 'AI assistants')..."
                className="min-h-[100px] text-base bg-card"
                aria-label="Technology query input"
              />
              {/*  */}
              <button
                className="w-80 text-center cursor-pointer bg-gradient-to-b from-indigo-500 to-indigo-600 transition-shadow hover:shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-none text-primary-foreground font-medium group"
              >
                <p
                  className=""
                >
                  🧭 Initiate Time Sync
                </p>
              </button>
            </div>
          </section>

          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <EraCard
              title="Retroverse:"
              subtitle="The Roaring Twenties"
              label="Signal from 1920"
              description="No perspective generated for this era."
              color="text-orange-400"
              Icon={Hammer}
              imgPath={"/assets/image/1920.png"}
            />

            <EraCard
              title="Nowverse:"
              subtitle="The Digital Present"
              label="Ping from 2025"
              description="No perspective generated for this era."
              color="text-cyan-400"
              Icon={Smartphone}
              imgPath={"/assets/image/2025.png"}
            />

            <EraCard
              title="Futureverse:"
              subtitle="The Quantum Horizon"
              label="Pulse from 2125"
              description="No perspective generated for this era."
              color="text-fuchsia-400"
              Icon={ScanEye}
              imgPath={"/assets/image/2125.png"}
            />
          </div>
        </main>
        <footer className="text-center mt-12 py-6 border-t border-border">
          <p className="text-sm text-muted-foreground font-body">
            Quantum Verse — Echoing innovation through timelines and dimensions.
          </p>
        </footer>
      </main >
    </>
  );
}
