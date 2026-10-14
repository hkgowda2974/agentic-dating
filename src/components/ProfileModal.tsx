'use client';

import React from 'react';
import { Person } from '../types/dating';
import {
  X,
  ExternalLink,
  Heart,
  Sparkles,
  Compass,
  Target,
  ShieldAlert,
  MessageSquare,
  Zap,
  Smile,
  GraduationCap,
  Code2,
  Music,
  Coffee,
  Calendar,
  CheckCircle,
  HelpCircle,
  Clock
} from 'lucide-react';

interface ProfileModalProps {
  person: Person | null;
  onClose: () => void;
  onStartDate: (person: Person) => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  person,
  onClose,
  onStartDate
}) => {
  if (!person) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-5 sm:p-8 text-slate-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-slate-800">
          <img
            src={person.avatarUrl}
            alt={person.name}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover ring-4 ring-rose-500/30 shadow-2xl shrink-0"
          />
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {person.name}
              </h2>
              <span className="px-3 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                <span>Verified Social Footprint</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 mt-1">
              {person.location} • <strong className="text-slate-200">{person.extractedSources.linkedinSummary.role}</strong>
            </p>
            <p className="text-xs text-slate-300 mt-2 max-w-2xl leading-relaxed">
              {person.bio}
            </p>
          </div>

          <button
            onClick={() => {
              onClose();
              onStartDate(person);
            }}
            className="mt-2 sm:mt-0 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-rose-500/20 transition-all transform hover:scale-[1.02]"
          >
            <Sparkles className="w-4 h-4" />
            <span>Date Their Agent</span>
          </button>
        </div>

        {/* The Two Ground-Truth Sources */}
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              The Two Ground-Truth Sources (Minute Evidence)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* LinkedIn Source Box */}
            <div className="rounded-2xl bg-slate-950/80 border border-sky-900/40 p-4 relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-sky-950">
                  <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-wider">
                    <span>Source 1: LinkedIn Public Profile</span>
                  </div>
                  <a
                    href={person.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 hover:underline"
                  >
                    <span>View Link</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="mt-3 space-y-2 text-xs">
                  <div>
                    <span className="text-slate-400 font-medium">Headline & Role: </span>
                    <span className="text-slate-200 font-semibold">{person.extractedSources.linkedinSummary.headline}</span>
                  </div>

                  {person.extractedSources.linkedinSummary.education && (
                    <div className="flex items-start gap-1.5 text-slate-300">
                      <GraduationCap className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{person.extractedSources.linkedinSummary.education}</span>
                    </div>
                  )}

                  {person.extractedSources.linkedinSummary.skills && person.extractedSources.linkedinSummary.skills.length > 0 && (
                    <div>
                      <div className="flex items-center gap-1 text-slate-400 mb-1">
                        <Code2 className="w-3 h-3 text-sky-400" />
                        <span>Core Tech & Skills:</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {person.extractedSources.linkedinSummary.skills.map((skill, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-sky-950/80 border border-sky-800/40 text-sky-300 text-[10px] font-mono">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <span className="text-slate-400 font-medium">Professional Values: </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {person.extractedSources.linkedinSummary.professionalValues.map((val, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 text-[10px]">
                          {val}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Source Box */}
            <div className="rounded-2xl bg-slate-950/80 border border-pink-900/40 p-4 relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-pink-950">
                  <div className="flex items-center gap-2 text-pink-400 font-bold text-xs uppercase tracking-wider">
                    <span>Source 2: Instagram Public Profile</span>
                  </div>
                  <a
                    href={person.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-pink-400 hover:text-pink-300 hover:underline"
                  >
                    <span>View Link</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="mt-3 space-y-2 text-xs">
                  <div>
                    <span className="text-slate-400 font-medium">Handle: </span>
                    <span className="text-pink-300 font-mono font-bold">{person.extractedSources.instagramSummary.handle}</span>
                  </div>

                  {person.extractedSources.instagramSummary.bioQuote && (
                    <div className="p-2 rounded-xl bg-pink-950/20 border border-pink-900/30 text-[11px] text-pink-200 italic">
                      &quot;{person.extractedSources.instagramSummary.bioQuote}&quot;
                    </div>
                  )}

                  {person.extractedSources.instagramSummary.musicTaste && person.extractedSources.instagramSummary.musicTaste.length > 0 && (
                    <div>
                      <div className="flex items-center gap-1 text-slate-400 mb-1">
                        <Music className="w-3 h-3 text-pink-400" />
                        <span>Music & Audio Taste:</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {person.extractedSources.instagramSummary.musicTaste.map((song, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-pink-950/80 border border-pink-800/40 text-pink-300 text-[10px]">
                            {song}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {person.extractedSources.instagramSummary.coffeeOrFoodRitual && (
                    <div className="flex items-start gap-1.5 text-slate-300">
                      <Coffee className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-[11px]">{person.extractedSources.instagramSummary.coffeeOrFoodRitual}</span>
                    </div>
                  )}

                  {person.extractedSources.instagramSummary.weekendRoutine && (
                    <div className="flex items-start gap-1.5 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-[11px]">{person.extractedSources.instagramSummary.weekendRoutine}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Agent Reading: Analysis Section */}
        <div className="mt-8 pt-6 border-t border-slate-800">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-rose-400" />
            <h3 className="text-base font-bold text-white">
              The Agent Reading & Persona Architecture
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Needs */}
            <div className="rounded-2xl bg-slate-950/80 border border-rose-950/50 p-4">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">
                <Heart className="w-4 h-4" />
                <span>Needs</span>
              </div>
              <p className="text-[11px] text-slate-400 mb-3">
                Core relational & emotional prerequisites required to feel valued and safe.
              </p>
              <ul className="space-y-2">
                {person.agent.needs.map((need, i) => (
                  <li key={i} className="text-xs text-slate-200 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                    <span>{need}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hobbies */}
            <div className="rounded-2xl bg-slate-950/80 border border-amber-950/50 p-4">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
                <Compass className="w-4 h-4" />
                <span>Hobbies & Downtime</span>
              </div>
              <p className="text-[11px] text-slate-400 mb-3">
                Real-world downtime rituals derived from visual & lifestyle signals.
              </p>
              <ul className="space-y-2">
                {person.agent.hobbies.map((hobby, i) => (
                  <li key={i} className="text-xs text-slate-200 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>{hobby}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interests */}
            <div className="rounded-2xl bg-slate-950/80 border border-emerald-950/50 p-4">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
                <Target className="w-4 h-4" />
                <span>Interests & Obsessions</span>
              </div>
              <p className="text-[11px] text-slate-400 mb-3">
                Intellectual topics that trigger genuine conversational flow.
              </p>
              <ul className="space-y-2">
                {person.agent.interests.map((interest, i) => (
                  <li key={i} className="text-xs text-slate-200 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Granular Qualities Grid */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div className="rounded-xl bg-slate-950/50 border border-slate-800/80 p-3">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-1">
                <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
                <span>Communication Cadence</span>
              </div>
              <p className="text-xs text-slate-200 font-medium">
                {person.agent.communicationStyle}
              </p>
            </div>

            {person.agent.textingCadence && (
              <div className="rounded-xl bg-slate-950/50 border border-slate-800/80 p-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Texting Rhythm</span>
                </div>
                <p className="text-xs text-slate-200 font-medium">
                  {person.agent.textingCadence}
                </p>
              </div>
            )}

            <div className="rounded-xl bg-slate-950/50 border border-slate-800/80 p-3">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-1">
                <Zap className="w-3.5 h-3.5 text-yellow-400" />
                <span>Energy & Aura</span>
              </div>
              <p className="text-xs text-slate-200 font-medium">
                {person.agent.energyLevel}
              </p>
            </div>

            <div className="rounded-xl bg-slate-950/50 border border-slate-800/80 p-3">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-1">
                <Smile className="w-3.5 h-3.5 text-purple-400" />
                <span>Humor & Banter</span>
              </div>
              <p className="text-xs text-slate-200 font-medium">
                {person.agent.humorStyle}
              </p>
            </div>

            {person.agent.greenFlags && person.agent.greenFlags.length > 0 && (
              <div className="rounded-xl bg-slate-950/50 border border-emerald-900/30 p-3">
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold mb-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Green Flags Looked For</span>
                </div>
                <p className="text-xs text-slate-300">
                  {person.agent.greenFlags.slice(0, 2).join(' • ')}
                </p>
              </div>
            )}

            <div className="rounded-xl bg-slate-950/50 border border-rose-900/30 p-3">
              <div className="flex items-center gap-1.5 text-xs text-rose-400 font-semibold mb-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Dealbreakers</span>
              </div>
              <p className="text-xs text-slate-300">
                {person.agent.dealbreakers.join(' • ')}
              </p>
            </div>

            {person.agent.unusualQuirks && person.agent.unusualQuirks.length > 0 && (
              <div className="rounded-xl bg-slate-950/50 border border-slate-800/80 p-3 sm:col-span-2 md:col-span-3">
                <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold mb-1">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Unusual Quirks & Micro-Habits</span>
                </div>
                <p className="text-xs text-slate-300 italic">
                  {person.agent.unusualQuirks.join(' • ')}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
