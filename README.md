# Quantum Verse ⏳

> **A Temporal Exploration Terminal**

**Quantum Verse** is an interactive, speculative timeline generator built with Next.js and Google's Gemini AI. It acts as an "alternate reality terminal," taking any technological concept or historical pivot point and projecting how it would manifest across three distinct eras: the **Retroverse** (the past), the **Nowverse** (present), and the **Futureverse** (speculative future).

Featuring a striking, highly accessible **Industrial Sci-Fi Brutalist UI**, Quantum Verse pushes the boundaries of AI-driven creative storytelling with a hyper-stylized user experience.

---

## ✨ Features

- 🧠 **AI-Powered Timelines**: Harnesses Google's Gemini 1.5 Flash to dynamically generate rich, era-specific narratives based on your queries.
- 🎨 **Brutalist UI Aesthetics**: A meticulous design system leveraging `#050505` voids, `#00E5FF` neon cyan accents, sharp block drop shadows, and monospaced typography to create an authentic "terminal" feel.
- 🔐 **Client-Side API Enclave**: Secure, localized API key management. Users provide their own Gemini API Key directly in the UI, stored securely in `localStorage` without ever touching a backend server.
- ⚡ **Next.js 15 App Router**: Fully utilizing the latest features of React 19 and Next.js 15 for optimal performance and routing.
- ♿ **Highly Accessible**: Comprehensive ARIA labels, semantic HTML structuring, assertive alert roles, and a screen-reader-friendly interface.
- 🤖 **LLM-Friendly Architecture**: Includes a dedicated `llm.txt` manifest providing automated agents with context and structural insights about the codebase.

## 🛠️ Technology Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Components:** [Shadcn UI](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/)
- **AI Integration:** [Google Generative AI SDK](https://ai.google.dev/) (`@google/generative-ai`)
- **Typography:** `Space Grotesk` (Headings) & `JetBrains Mono` (Terminal text)

## 🚀 Getting Started

### Prerequisites

You will need a **Gemini API Key** from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:zehan12/Quantum-Verse.git
   cd Quantum-Verse
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open the Terminal:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

5. **Authenticate:**
   Click the **`[AUTH] SET_KEY`** button in the top right corner and paste your Gemini API Key. Your key is stored strictly on your local machine.

## 📁 Project Structure

- `src/app/page.tsx` - The main terminal landing page and query interface.
- `src/app/timelines/page.tsx` - The timeline generation engine and visualization view.
- `src/components/ApiKeyManager.tsx` - Secure local-storage authentication system.
- `src/components/shared/EraCard.tsx` - The interactive, dynamic cards displaying the AI timeline predictions.
- `src/app/globals.css` - Core brutalist design tokens and Tailwind theme injection.
- `public/llm.txt` - System architectural manifest for AI agents.

## 📝 License

This project is licensed under the MIT License.

---
*SYS.VER 1.0.4 // QUANTUM_VERSE CONNECTED*
