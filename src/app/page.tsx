'use client';

import React, { useState } from 'react';
import { CANDIDATES } from '@/data/candidates';
import { Person } from '@/types/dating';
import { Navbar } from '@/components/Navbar';
import { ProfileCard } from '@/components/ProfileCard';
import { ProfileModal } from '@/components/ProfileModal';
import { DateTheater } from '@/components/DateTheater';
import { RankingsView } from '@/components/RankingsView';
import { LiveAgentCreator } from '@/components/LiveAgentCreator';
import { Sparkles, Users, Trophy, Search, ArrowRight, ShieldCheck, Flame } from 'lucide-react';

export default function Home() {
  const [candidates, setCandidates] = useState<Person[]>(CANDIDATES);
  const [activeTab, setActiveTab] = useState<'profiles' | 'theater' | 'rankings'>('profiles');
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPair, setSelectedPair] = useState<{ personA: Person; personB: Person } | null>(null);

  // Filter candidates based on search
  const filteredCandidates = candidates.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.extractedSources.linkedinSummary.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.agent.interests.some(i => i.toLowerCase().includes(searchQuery.toLowerCase())) ||
    c.agent.hobbies.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleStartDate = (person: Person) => {
    // Pick another interesting candidate as match
    const other = candidates.find(c => c.id !== person.id) || candidates[0];
    setSelectedPair({ personA: person, personB: other });
    setActiveTab('theater');
  };

  const handleWatchDateFromRankings = (personA: Person, personB: Person) => {
    setSelectedPair({ personA, personB });
    setActiveTab('theater');
  };

  const handleAgentCreated = (newPerson: Person) => {
    setCandidates(prev => [newPerson, ...prev]);
    setSelectedPerson(newPerson);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-rose-500/30 selection:text-rose-200">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        candidateCount={candidates.length}
        onOpenAddModal={() => setIsAddModalOpen(true)}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-900 bg-gradient-to-b from-slate-950 via-rose-950/10 to-slate-950 py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(244,63,94,0.15),rgba(255,255,255,0))] pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Autonomous Multi-Agent Dating Protocol</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-none">
            Where AI Agents Date <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300">
              On Your Behalf.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Each person is represented by an agent synthesized from exactly two sources: their verified public <strong>LinkedIn</strong> and <strong>Instagram</strong>. The agents date each other, assess mutual chemistry, and generate global compatibility rankings.
          </p>

          {/* Metrics Row */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-2 text-rose-400 mb-1">
                <Users className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Real People</span>
              </div>
              <div className="text-2xl font-black text-white">{candidates.length}</div>
              <div className="text-[11px] text-slate-400">Dual Verified Links</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-2 text-pink-400 mb-1">
                <Flame className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Simulated Dates</span>
              </div>
              <div className="text-2xl font-black text-white">350+</div>
              <div className="text-[11px] text-slate-400">Multi-Turn Banter</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-2 text-amber-400 mb-1">
                <Trophy className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Rankings</span>
              </div>
              <div className="text-2xl font-black text-white">100%</div>
              <div className="text-[11px] text-slate-400">Global Match Matrix</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Sources</span>
              </div>
              <div className="text-2xl font-black text-white">2 Only</div>
              <div className="text-[11px] text-slate-400">LinkedIn + Instagram</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab 1: Profiles & Analysis */}
        {activeTab === 'profiles' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Verified Candidate Pool ({candidates.length} Real People)
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  Click any profile to inspect the agent&apos;s analysis: Needs, Hobbies, Interests, and Qualities.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search name, role, interest..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
                />
              </div>
            </div>

            {/* Grid of Profile Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredCandidates.map(person => (
                <ProfileCard
                  key={person.id}
                  person={person}
                  onSelect={setSelectedPerson}
                  onStartDate={handleStartDate}
                />
              ))}
            </div>

            {filteredCandidates.length === 0 && (
              <div className="text-center py-12 text-slate-500 text-sm">
                No candidates matched &quot;{searchQuery}&quot;. Try another search term.
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Date Theater */}
        {activeTab === 'theater' && (
          <DateTheater
            candidates={candidates}
            selectedPair={selectedPair}
            onSelectPair={(a, b) => setSelectedPair({ personA: a, personB: b })}
          />
        )}

        {/* Tab 3: Compatibility Rankings */}
        {activeTab === 'rankings' && (
          <RankingsView
            candidates={candidates}
            onWatchDate={handleWatchDateFromRankings}
            onViewProfile={setSelectedPerson}
          />
        )}
      </section>

      {/* Floating CTA / Add Candidate Banner */}
      <section className="border-t border-slate-900 bg-slate-950/90 py-8 px-4">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-rose-950/40 via-slate-900 to-pink-950/40 border border-rose-900/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Want to see your own agent date?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg">
              Paste your public LinkedIn and public Instagram. The scraper reads your profile, generates your agent, and lets them date the pool.
            </p>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold text-sm shadow-xl shadow-rose-500/25 transition-all transform hover:scale-[1.02] shrink-0"
          >
            <span>Try Live Scraper</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        <p>Kismet AI • Autonomous Agentic Dating Platform • Built for the 3-Hour Challenge</p>
        <p className="mt-1 text-[11px] text-slate-600">
          Source Constraints: Exactly 2 Public Sources (LinkedIn + Instagram) • Independent Agent Simulation • Multi-Dimensional Ranking
        </p>
      </footer>

      {/* Profile Inspection Modal */}
      <ProfileModal
        person={selectedPerson}
        onClose={() => setSelectedPerson(null)}
        onStartDate={handleStartDate}
      />

      {/* Live Agent Creator Modal */}
      <LiveAgentCreator
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAgentCreated={handleAgentCreated}
      />
    </main>
  );
}
