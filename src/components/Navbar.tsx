'use client';

import React from 'react';
import { Heart, Users, Sparkles, Trophy, PlusCircle } from 'lucide-react';

interface NavbarProps {
  activeTab: 'profiles' | 'theater' | 'rankings';
  setActiveTab: (tab: 'profiles' | 'theater' | 'rankings') => void;
  candidateCount: number;
  onOpenAddModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  candidateCount,
  onOpenAddModal
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-rose-950/20 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500 to-pink-500 flex items-center justify-center shadow-lg shadow-rose-500/25 ring-1 ring-white/20">
            <Heart className="w-5 h-5 text-white fill-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-white tracking-tight">Kismet AI</span>
              <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                Agentic Dating
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              Agents date on their humans&apos; behalf from LinkedIn & Instagram
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => setActiveTab('profiles')}
            className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'profiles'
                ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Profiles ({candidateCount})</span>
          </button>

          <button
            onClick={() => setActiveTab('theater')}
            className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'theater'
                ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Date Theater</span>
          </button>

          <button
            onClick={() => setActiveTab('rankings')}
            className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'rankings'
                ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>Rankings</span>
          </button>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenAddModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-xs sm:text-sm font-semibold shadow-md shadow-rose-500/20 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <PlusCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Add Profile</span>
            <span className="sm:hidden">Add</span>
          </button>
        </div>
      </div>
    </header>
  );
};
