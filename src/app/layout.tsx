import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quantum Verse | Temporal Exploration Terminal",
  description: "Navigate alternate histories and future possibilities using advanced AI temporal predictions. A brutalist interface for speculative technology timelines.",
  keywords: ["quantum", "timeline", "AI", "speculative history", "technology", "brutalist"],
  authors: [{ name: "Zehan Khan" }],
  openGraph: {
    title: "Quantum Verse",
    description: "Navigate alternate histories and future possibilities using advanced AI.",
    type: "website",
    url: "https://quantum-verse.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Verse",
    description: "Temporal Exploration Terminal",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-mono antialiased min-h-screen bg-[#050505] text-[#E0E0E0] relative before:absolute before:inset-0 before:opacity-[0.03] before:pointer-events-none before:bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgibm9pc2VGaWx0ZXIpIi8+PC9zdmc+')]`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow flex flex-col">
            {children}
          </main>
          <footer className="container mx-auto px-4 py-6 border-t-2 border-[#1A1A1A] mt-auto shrink-0 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#555] font-mono">
            <p>SYS.VER 1.0.4 // BY <a href="https://github.com/Zehan12" target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:underline" aria-label="Author GitHub Profile">ZEHAN KHAN</a></p>
            <div className="flex gap-4">
              <a href="https://github.com/Quantum-Verse" target="_blank" rel="noopener noreferrer" className="hover:text-[#00E5FF] transition-colors" aria-label="GitHub Repository">GITHUB</a>
              <span>//</span>
              <a href="/llm.txt" className="hover:text-[#00E5FF] transition-colors" aria-label="LLM Text Document">LLM.TXT</a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
