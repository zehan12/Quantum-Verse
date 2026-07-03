import { APIKeyManager } from "@/components/ApiKeyManager";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b-2 border-[#1A1A1A] bg-[#050505]">
      <div className="flex items-center gap-3">
        <span className="text-xl border border-[#00E5FF] text-[#00E5FF] p-1 shadow-[2px_2px_0_#00E5FF]">⏳</span>
        <span className="text-lg font-space font-bold text-[#E0E0E0] tracking-widest uppercase">Quantum<span className="text-[#00E5FF]">Verse</span></span>
      </div>
      <div>
        <APIKeyManager />
      </div>
    </nav>
  );
}
