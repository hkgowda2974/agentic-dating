'use client';

import React, { useState } from 'react';
import { Person } from '../types/dating';
import { computeRankingsForPerson } from '../lib/agent-dating-engine';
import { Trophy, Medal, Sparkles, ArrowRight, Eye } from 'lucide-react';

interface RankingsViewProps {
  candidates: Person[];
  onWatchDate: (personA: Person, personB: Person) => void;
  onViewProfile: (person: Person) => void;
}

export const RankingsView: React.FC<RankingsViewProps> = ({
  candidates,
  onWatchDate,
  onViewProfile
}) => {
  const [selectedPersonId, setSelectedPersonId] = useState<string>(candidates[0]?.id || 'sam-altman');
  const focalPerson = candidates.find(c => c.id === selectedPersonId) || candidates[0];

  // Compute rankings for the selected person
  const rankings = React.useMemo(() => {
    if (!focalPerson) return [];
    return computeRankingsForPerson(focalPerson, candidates);
  }, [focalPerson, candidates]);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header and Focal Subject Picker */}
      <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 backdrop-blur-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-amber-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Agent Compatibility Rankings
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
            For every person in the pool, their agent evaluates all candidate agents and produces an empirical ranking of who fits them best.
          </p>
        </div>

        {/* Focal Subject Switcher */}
        <div className="flex items-center gap-3 w-full md:w-auto bg-slate-950 p-2.5 rounded-2xl border border-slate-800">
          <img
            src={focalPerson.avatarUrl}
            alt={focalPerson.name}
            className="w-10 h-10 rounded-xl object-cover ring-2 ring-rose-500 shrink-0"
          />
          <div className="flex-1 md:w-56">
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Rankings for</span>
            <select
              value={selectedPersonId}
              onChange={e => setSelectedPersonId(e.target.value)}
              className="bg-transparent text-xs font-bold text-white outline-none w-full cursor-pointer"
            >
              {candidates.map(c => (
                <option key={c.id} value={c.id} className="bg-slate-950 text-white">
                  {c.name} ({c.extractedSources.linkedinSummary.role})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Top 3 Podium Highlights */}
      {rankings.length >= 3 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* #2 Rank */}
          <div className="order-2 md:order-1 rounded-2xl bg-slate-900/40 border border-slate-800/80 p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="flex items-center gap-1 text-slate-300 font-bold text-xs uppercase tracking-wider">
                  <Medal className="w-4 h-4 text-slate-300" />
                  #2 Runner Up
                </span>
                <span className="text-sm font-extrabold text-slate-200">
                  {rankings[1].overallScore}% Match
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={rankings[1].targetPerson.avatarUrl}
                  alt={rankings[1].targetPerson.name}
                  className="w-12 h-12 rounded-xl object-cover ring-1 ring-slate-400"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{rankings[1].targetPerson.name}</h4>
                  <p className="text-[11px] text-slate-400">{rankings[1].targetPerson.extractedSources.linkedinSummary.role}</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 mt-3 line-clamp-2 italic">
                &quot;{rankings[1].compatibilityRationale}&quot;
              </p>
            </div>

            <button
              onClick={() => onWatchDate(focalPerson, rankings[1].targetPerson)}
              className="mt-4 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Watch Date</span>
            </button>
          </div>

          {/* #1 Crown Best Match */}
          <div className="order-1 md:order-2 rounded-2xl bg-gradient-to-b from-rose-950/40 via-slate-900 to-slate-900 border-2 border-rose-500/60 p-6 shadow-xl shadow-rose-950/30 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-l from-rose-500 to-pink-500 text-white text-[10px] font-extrabold uppercase tracking-widest rounded-bl-xl shadow-md">
              Best Match
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-amber-400 font-black text-sm uppercase tracking-wider mb-3">
                <Trophy className="w-5 h-5 text-amber-400 fill-amber-400" />
                <span>#1 Top Compatibility</span>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={rankings[0].targetPerson.avatarUrl}
                  alt={rankings[0].targetPerson.name}
                  className="w-16 h-16 rounded-2xl object-cover ring-2 ring-rose-400 shadow-md"
                />
                <div>
                  <h4 className="text-base font-extrabold text-white">{rankings[0].targetPerson.name}</h4>
                  <p className="text-xs text-rose-300 font-medium">{rankings[0].targetPerson.extractedSources.linkedinSummary.role}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-xl font-black text-white">{rankings[0].overallScore}%</span>
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      Mutual Spark
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-200 mt-3.5 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                &quot;{rankings[0].compatibilityRationale}&quot;
              </p>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <button
                onClick={() => onWatchDate(focalPerson, rankings[0].targetPerson)}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-xs font-bold shadow-lg shadow-rose-500/20 transition-all transform hover:scale-[1.02]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Watch #1 Date</span>
              </button>
              <button
                onClick={() => onViewProfile(rankings[0].targetPerson)}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300"
                title="View Full Profile"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* #3 Rank */}
          <div className="order-3 md:order-3 rounded-2xl bg-slate-900/40 border border-slate-800/80 p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="flex items-center gap-1 text-amber-600 font-bold text-xs uppercase tracking-wider">
                  <Medal className="w-4 h-4 text-amber-600" />
                  #3 Third Fit
                </span>
                <span className="text-sm font-extrabold text-slate-200">
                  {rankings[2].overallScore}% Match
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={rankings[2].targetPerson.avatarUrl}
                  alt={rankings[2].targetPerson.name}
                  className="w-12 h-12 rounded-xl object-cover ring-1 ring-amber-700"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{rankings[2].targetPerson.name}</h4>
                  <p className="text-[11px] text-slate-400">{rankings[2].targetPerson.extractedSources.linkedinSummary.role}</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 mt-3 line-clamp-2 italic">
                &quot;{rankings[2].compatibilityRationale}&quot;
              </p>
            </div>

            <button
              onClick={() => onWatchDate(focalPerson, rankings[2].targetPerson)}
              className="mt-4 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Watch Date</span>
            </button>
          </div>
        </div>
      )}

      {/* Complete Rankings List Table */}
      <div className="rounded-3xl bg-slate-900/60 border border-slate-800 overflow-hidden shadow-xl">
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-sm font-bold text-white">
            Full Ranked Roster for {focalPerson.name} ({rankings.length} Candidates Evaluated)
          </h3>
          <span className="text-xs text-slate-400 font-medium">Sorted by Match Affinity</span>
        </div>

        <div className="divide-y divide-slate-800/60">
          {rankings.map(item => (
            <div
              key={item.targetPerson.id}
              className="px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-800/30 transition-colors"
            >
              {/* Rank and Info */}
              <div className="flex items-center gap-4">
                <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                  item.rank === 1
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-black text-sm'
                    : item.rank === 2
                    ? 'bg-slate-300/20 text-slate-200 border border-slate-400/30'
                    : item.rank === 3
                    ? 'bg-amber-700/20 text-amber-400 border border-amber-700/30'
                    : 'bg-slate-800 text-slate-400'
                }`}>
                  #{item.rank}
                </span>

                <img
                  src={item.targetPerson.avatarUrl}
                  alt={item.targetPerson.name}
                  className="w-12 h-12 rounded-xl object-cover ring-1 ring-slate-700 shrink-0"
                />

                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-white">{item.targetPerson.name}</h4>
                    <span className="text-[10px] text-slate-400">({item.targetPerson.location})</span>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-1">{item.targetPerson.extractedSources.linkedinSummary.role}</p>
                  <p className="text-[11px] text-slate-300 mt-1 max-w-lg line-clamp-1 italic">
                    &quot;{item.compatibilityRationale}&quot;
                  </p>
                </div>
              </div>

              {/* Score Breakdown & Action */}
              <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                <div className="text-right">
                  <div className="text-base font-extrabold text-rose-300">
                    {item.overallScore}%
                  </div>
                  <div className="text-[10px] text-slate-400 flex items-center gap-2">
                    <span>Intel: {item.breakdown.intellectual}%</span>
                    <span>•</span>
                    <span>Life: {item.breakdown.lifestyle}%</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onViewProfile(item.targetPerson)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    title="View Profile Analysis"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onWatchDate(focalPerson, item.targetPerson)}
                    className="flex items-center gap-1.5 py-2 px-3 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 text-rose-300 text-xs font-semibold transition-colors"
                  >
                    <span>Watch Date</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
