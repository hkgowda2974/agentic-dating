'use client';

import React, { useState } from 'react';
import { Person } from '../types/dating';
import { X, Sparkles, Loader2, Link2, ArrowRight, Camera, MapPin, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import confetti from 'canvas-confetti';

interface LiveAgentCreatorProps {
  isOpen: boolean;
  onClose: () => void;
  onAgentCreated: (newPerson: Person) => void;
}

export const LiveAgentCreator: React.FC<LiveAgentCreatorProps> = ({
  isOpen,
  onClose,
  onAgentCreated
}) => {
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [instagramUrl, setInstagramUrl] = useState('');
  const [headline, setHeadline] = useState('');
  const [location, setLocation] = useState('Bengaluru, India');
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [statusStep, setStatusStep] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleQuickFill = (li: string, ig: string, hl: string, loc: string) => {
    setLinkedinUrl(li);
    setInstagramUrl(ig);
    setHeadline(hl);
    setLocation(loc);
    setError(null);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!linkedinUrl || !instagramUrl) {
      setError('Please provide both a LinkedIn URL and a public Instagram URL.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      setStatusStep('Fetching public metadata from LinkedIn & Instagram...');
      await new Promise(r => setTimeout(r, 600));

      setStatusStep('Analyzing visual aesthetics, career signals & lifestyle tags...');
      await new Promise(r => setTimeout(r, 700));

      const res = await fetch('/api/scrape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          linkedinUrl,
          instagramUrl,
          headline: headline.trim() || undefined,
          location: location.trim() || undefined,
          avatarUrl: avatarPreview || undefined
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to analyze social profiles');
      }

      setStatusStep('Synthesizing Agent Persona (Needs, Hobbies, Interests)...');
      await new Promise(r => setTimeout(r, 600));

      setStatusStep('Deploying agent to date on their behalf...');
      await new Promise(r => setTimeout(r, 500));

      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 }
      });

      onAgentCreated(data.person);
      onClose();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error creating agent. Please try valid public URLs.';
      console.error(err);
      setError(msg);
    } finally {
      setIsLoading(false);
      setStatusStep('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-7 text-slate-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          disabled={isLoading}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500 to-pink-500 flex items-center justify-center shadow-lg shadow-rose-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Add Candidate Profile
            </h3>
            <p className="text-xs text-slate-400">
              Paste LinkedIn + Instagram links. The agent reads both and dates on your behalf.
            </p>
          </div>
        </div>

        {/* Quick Fill Helpers */}
        <div className="mt-4 p-3 rounded-2xl bg-slate-950/60 border border-slate-800/80">
          <span className="text-[11px] text-slate-400 font-medium block mb-2">
            One-Click Test Samples:
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              disabled={isLoading}
              onClick={() =>
                handleQuickFill(
                  'https://www.linkedin.com/in/hemanth-kumar',
                  'https://www.instagram.com/hk_gowda2974',
                  'Software Engineer & Full Stack Builder',
                  'Bengaluru, India'
                )
              }
              className="px-2.5 py-1 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/30 text-[11px] text-rose-300 transition-colors font-medium"
            >
              Hemanth Kumar (Pre-fill)
            </button>
            <button
              type="button"
              disabled={isLoading}
              onClick={() =>
                handleQuickFill(
                  'https://www.linkedin.com/in/vitalik-buterin',
                  'https://www.instagram.com/vitalik_eth',
                  'Blockchain Researcher & Cryptographer',
                  'Singapore'
                )
              }
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] text-slate-200 transition-colors font-medium"
            >
              Vitalik Buterin
            </button>
          </div>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
              <Link2 className="w-3.5 h-3.5 text-sky-400" />
              <span>LinkedIn Public Profile URL</span>
            </label>
            <input
              type="url"
              required
              placeholder="https://www.linkedin.com/in/your-profile"
              value={linkedinUrl}
              onChange={e => setLinkedinUrl(e.target.value)}
              disabled={isLoading}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
              <Link2 className="w-3.5 h-3.5 text-pink-400" />
              <span>Instagram Public Profile URL</span>
            </label>
            <input
              type="url"
              required
              placeholder="https://www.instagram.com/your_handle"
              value={instagramUrl}
              onChange={e => setInstagramUrl(e.target.value)}
              disabled={isLoading}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-pink-500 transition-colors"
            />
          </div>

          {/* Profile Accuracy / Custom Details Accordion */}
          <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950/40">
            <button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="w-full px-4 py-2.5 flex items-center justify-between text-xs font-semibold text-slate-300 hover:bg-slate-800/40 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Camera className="w-3.5 h-3.5 text-rose-400" />
                <span>Upload Real Profile Photo & Customize Role (Optional)</span>
              </span>
              {showAdvanced ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {showAdvanced && (
              <div className="p-4 border-t border-slate-800 space-y-3.5">
                {/* Photo Upload */}
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1.5">
                    Your Real Profile Picture:
                  </label>
                  <div className="flex items-center gap-3">
                    {avatarPreview ? (
                      <img
                        src={avatarPreview}
                        alt="Preview"
                        className="w-12 h-12 rounded-xl object-cover ring-2 ring-rose-500"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400">
                        <Camera className="w-5 h-5" />
                      </div>
                    )}
                    <label className="cursor-pointer px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs text-slate-200 font-medium transition-colors">
                      <span>Choose File...</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                    {avatarPreview && (
                      <button
                        type="button"
                        onClick={() => setAvatarPreview(null)}
                        className="text-xs text-rose-400 hover:text-rose-300"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">
                    (If omitted, a custom avatar matching your name initials will be generated instead of a random stock photo).
                  </p>
                </div>

                {/* Actual Headline / Role */}
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1 flex items-center gap-1">
                    <Briefcase className="w-3 h-3 text-sky-400" />
                    <span>Your Actual Profession / Headline (e.g. Software Engineer):</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Software Engineer, Student, UI Designer"
                    value={headline}
                    onChange={e => setHeadline(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-rose-500"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    <span>Your City / Location:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Bengaluru, India"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>
            )}
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
              {error}
            </div>
          )}

          {isLoading && (
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2.5 text-xs text-slate-300">
              <Loader2 className="w-4 h-4 text-rose-500 animate-spin shrink-0" />
              <span className="italic">{statusStep}</span>
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-rose-500/25 transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
            >
              {isLoading ? (
                <span>Synthesizing Agent...</span>
              ) : (
                <>
                  <span>Synthesize Agent & Start Dating</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
