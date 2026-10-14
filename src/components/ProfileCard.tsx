'use client';

import React from 'react';
import { Person } from '../types/dating';
import { ExternalLink, Sparkles, Compass, HeartHandshake, Eye } from 'lucide-react';

interface ProfileCardProps {
  person: Person;
  onSelect: (person: Person) => void;
  onStartDate: (person: Person) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  person,
  onSelect,
  onStartDate
}) => {
  return (
    <div className="group relative rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-rose-500/40 p-5 transition-all duration-300 hover:shadow-xl hover:shadow-rose-950/20 flex flex-col justify-between backdrop-blur-sm">
      {/* Top Banner & Avatar */}
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={person.avatarUrl}
                alt={person.name}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-rose-500/30 group-hover:ring-rose-500/80 transition-all"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-slate-900" title="Agent Online & Ready to Date" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white group-hover:text-rose-300 transition-colors">
                {person.name}
              </h3>
              <p className="text-xs text-slate-400">
                {person.location}
              </p>
              <p className="text-xs text-rose-400 font-medium line-clamp-1 mt-0.5">
                {person.extractedSources.linkedinSummary.role}
              </p>
            </div>
          </div>
        </div>

        {/* Official Links Badges */}
        <div className="mt-4 flex items-center gap-2">
          <a
            href={person.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-1 px-2 rounded-lg bg-sky-950/40 hover:bg-sky-900/60 border border-sky-800/40 text-[11px] font-medium text-sky-300 transition-colors"
            title="Open Verified LinkedIn Profile"
          >
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <a
            href={person.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-1 px-2 rounded-lg bg-pink-950/40 hover:bg-pink-900/60 border border-pink-800/40 text-[11px] font-medium text-pink-300 transition-colors"
            title="Open Verified Instagram Profile"
          >
            <span>Instagram</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Agent Analysis Extracted Snippets */}
        <div className="mt-4 space-y-2.5 text-xs">
          {/* Needs */}
          <div className="bg-slate-950/60 rounded-xl p-2.5 border border-slate-800/50">
            <div className="flex items-center gap-1.5 text-rose-400 font-semibold mb-1">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Core Need</span>
            </div>
            <p className="text-slate-300 line-clamp-2 leading-relaxed">
              {person.agent.needs[0]}
            </p>
          </div>

          {/* Hobbies & Interests Tags */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
              <Compass className="w-3 h-3 text-amber-400" />
              <span>Hobbies & Downtime</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {person.agent.hobbies.slice(0, 2).map((hobby, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-[10px] text-amber-300 font-medium"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center gap-2">
        <button
          onClick={() => onSelect(person)}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Full Profile</span>
        </button>

        <button
          onClick={() => onStartDate(person)}
          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-xs font-semibold text-rose-300 transition-colors"
          title="Date with this person's agent"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Date Agent</span>
        </button>
      </div>
    </div>
  );
};
