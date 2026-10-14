# Kismet AI — Autonomous Agentic Dating Platform

> An agentic dating platform where every person is represented by an AI agent synthesized strictly from their public **LinkedIn** and **Instagram** profiles. The agents date each other on their humans' behalf, evaluate chemistry, and generate global compatibility rankings.

---

## 🌟 Key Features

1. **27 Real Public Figures**:
   - Verified candidates (e.g. Sam Altman, Mira Murati, Brian Chesky, Sara Blakely, Andrej Karpathy, Dylan Field, Karri Saarinen, etc.) with clickable, verified public LinkedIn and Instagram profiles.
2. **Dual-Source Analysis**:
   - Strictly two data sources per person: LinkedIn (career trajectory, values, intellectual focus) + Instagram (visual aesthetic, lifestyle, hobbies, energy).
   - Generates an in-depth Agent Profile displaying **Needs**, **Hobbies**, **Interests**, and **Qualities**.
3. **Interactive Date Theater**:
   - Watch agents date in real-time across ambient venues with speech bubbles, secret inner agent thoughts, live chemistry meters, and post-date verdicts.
4. **Empirical Compatibility Rankings**:
   - Global match matrix providing ranked compatibility (#1 to #26) for each person, with multidimensional breakdowns and narrative rationales.
5. **Live Candidate Ingestion Pipeline**:
   - Paste any public LinkedIn and Instagram URL to synthesize a new agent on the fly, simulate dates against the pool, and view dynamic rankings.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 📦 Project Structure

```
├── src/
│   ├── app/
│   │   ├── api/scrape/route.ts       # Public link metadata extraction & agent synthesis
│   │   ├── globals.css               # Dark-mode styling & aesthetics
│   │   ├── layout.tsx                # Metadata & root layout
│   │   └── page.tsx                  # Unified responsive UI (Profiles, Theater, Rankings)
│   ├── components/
│   │   ├── DateTheater.tsx           # Interactive date simulation player
│   │   ├── LiveAgentCreator.tsx      # Modal to paste links and add candidates
│   │   ├── Navbar.tsx                # Header navigation & metrics
│   │   ├── ProfileCard.tsx           # Individual person card with source links
│   │   ├── ProfileModal.tsx          # Full profile inspection (Sources + Agent reading)
│   │   └── RankingsView.tsx          # Compatibility leaderboard for every person
│   ├── data/
│   │   └── candidates.ts             # 27 verified candidates with real social links
│   ├── lib/
│   │   ├── agent-dating-engine.ts    # Date simulation & pairwise ranking algorithm
│   │   └── scraper.ts                # Dual-source parsing & agent synthesizer
│   └── types/
│       └── dating.ts                 # TypeScript interfaces
```

---

## 📝 Submission Responses

### Overall Explanation (196 / 200 chars)
Autonomous agentic dating platform where AI agents, synthesized strictly from 25+ real people's public LinkedIn & Instagram profiles, date on their behalf and compute empirical compatibility rankings.

### Technical Section (489 / 500 chars)
We built an asynchronous dual-source extraction pipeline using Node.js fetch with OpenGraph and JSON-LD schema parsing. For LinkedIn, it extracts professional roles, industry tags, and career trajectories from public metadata tags. For Instagram, it parses public OpenGraph bio entities, aesthetic descriptors, and lifestyle keywords. These signals are fed into an agent synthesizer that generates structured Needs, Hobbies, Interests, and Qualities with zero external data dependencies.
