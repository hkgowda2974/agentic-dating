'use client';

import React, { useState } from 'react';
import { Person } from '../types/dating';
import {
  X,
  Sparkles,
  Loader2,
  Link2,
  ArrowRight,
  Camera,
  MapPin,
  Briefcase,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Code2,
  Music,
  Coffee
} from 'lucide-react';
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
  const [name, setName] = useState('');
  const [headline, setHeadline] = useState('');
  const [education, setEducation] = useState('B.Tech in Computer Science & Engineering');
  const [skills, setSkills] = useState('TypeScript, React, Next.js, Python, PostgreSQL, Node.js');
  const [location, setLocation] = useState('Bengaluru, Karnataka, India');
  const [musicTaste, setMusicTaste] = useState('Lo-Fi Beats, A.R. Rahman, Indie Rock, Coldplay');
  const [coffeeRitual, setCoffeeRitual] = useState('Traditional South Indian filter coffee in brass dabarah & crispy dosas');
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [scanStep, setScanStep] = useState<number>(0);
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handlePreFillHemanth = () => {
    setLinkedinUrl('https://www.linkedin.com/in/hemanth-kumar');
    setInstagramUrl('https://www.instagram.com/hk_gowda2974');
    setName('Hemanth Kumar');
    setHeadline('Full-Stack Software Engineer & Builder');
    setEducation('B.Tech in Computer Science & Engineering');
    setSkills('TypeScript, Next.js, Python, React, Tailwind CSS, System Design');
    setLocation('Bengaluru, Karnataka, India');
    setMusicTaste('Lo-Fi Beats, Kannada Rock, A.R. Rahman, Synthwave');
    setCoffeeRitual('Strong South Indian filter coffee at sunrise, exploring heritage cafes');
    setShowAdvanced(true);
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
      setScanStep(1);
      setStatusMessage('Extracting verified endpoints and meta headers from LinkedIn...');
      await new Promise(r => setTimeout(r, 650));

      setScanStep(2);
      setStatusMessage('Parsing Instagram bio entities, visual aesthetic & music footprint...');
      await new Promise(r => setTimeout(r, 700));

      setScanStep(3);
      setStatusMessage('Synthesizing psychological profile (Needs, Hobbies, Quirks, Green Flags)...');
      await new Promise(r => setTimeout(r, 650));

      const res = await fetch('/api/scrape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          linkedinUrl,
          instagramUrl,
          name: name.trim() || undefined,
          headline: headline.trim() || undefined,
          education: education.trim() || undefined,
          skills: skills.split(',').map(s => s.trim()).filter(Boolean),
          location: location.trim() || undefined,
          musicTaste: musicTaste.split(',').map(m => m.trim()).filter(Boolean),
          coffeeOrFoodRitual: coffeeRitual.trim() || undefined,
          avatarUrl: avatarPreview || undefined
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to synthesize profile');
      }

      setScanStep(4);
      setStatusMessage('Simulating dates across 27 agent candidate matrices...');
      await new Promise(r => setTimeout(r, 550));

      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 }
      });

      onAgentCreated(data.person);
      onClose();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error creating agent. Please verify public URLs.';
      console.error(err);
      setError(msg);
    } finally {
      setIsLoading(false);
      setScanStep(0);
      setStatusMessage('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-5 sm:p-7 text-slate-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          disabled={isLoading}
          className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
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
              Deep Ingestion & Agent Synthesizer
            </h3>
            <p className="text-xs text-slate-400">
              Scrapes minute details from LinkedIn & Instagram to create a trustworthy dating agent.
            </p>
          </div>
        </div>

        {/* Quick Pre-fill Button */}
        <div className="mt-4 p-3 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-rose-300 block">Pre-fill Verified Profile:</span>
            <span className="text-[11px] text-slate-400">Loads Hemanth Kumar with real engineering & Bangalore details</span>
          </div>
          <button
            type="button"
            disabled={isLoading}
            onClick={handlePreFillHemanth}
            className="px-3 py-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-xs text-rose-300 font-semibold transition-colors shrink-0"
          >
            Hemanth Kumar (Pre-fill)
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
              <Link2 className="w-3.5 h-3.5 text-sky-400" />
              <span>LinkedIn Public Profile URL</span>
            </label>
            <input
              type="url"
              required
              placeholder="https://www.linkedin.com/in/hemanth-kumar"
              value={linkedinUrl}
              onChange={e => setLinkedinUrl(e.target.value)}
              disabled={isLoading}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
              <Link2 className="w-3.5 h-3.5 text-pink-400" />
              <span>Instagram Public Profile URL</span>
            </label>
            <input
              type="url"
              required
              placeholder="https://www.instagram.com/hk_gowda2974"
              value={instagramUrl}
              onChange={e => setInstagramUrl(e.target.value)}
              disabled={isLoading}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-pink-500 transition-colors"
            />
          </div>

          {/* Granular Micro-Details Accordion */}
          <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950/50">
            <button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="w-full px-4 py-3 flex items-center justify-between text-xs font-bold text-slate-300 hover:bg-slate-800/40 transition-colors"
            >
              <span className="flex items-center gap-2 text-rose-300">
                <Camera className="w-4 h-4 text-rose-400" />
                <span>Upload Profile Photo & Verify Minute Details</span>
              </span>
              {showAdvanced ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {showAdvanced && (
              <div className="p-4 border-t border-slate-800 space-y-3.5 text-xs">
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
                        className="w-14 h-14 rounded-xl object-cover ring-2 ring-rose-500"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400">
                        <Camera className="w-6 h-6" />
                      </div>
                    )}
                    <div>
                      <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs text-slate-200 font-semibold transition-colors">
                        <span>Upload Your Photo</span>
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
                          className="block text-[11px] text-rose-400 hover:text-rose-300 mt-1"
                        >
                          Reset to initials avatar
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Hemanth Kumar"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 focus:outline-none focus:border-rose-500"
                  />
                </div>

                {/* Actual Profession */}
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1 flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-sky-400" />
                    <span>Exact Headline / Profession (from LinkedIn):</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Software Engineer | Full-Stack Builder"
                    value={headline}
                    onChange={e => setHeadline(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 focus:outline-none focus:border-rose-500"
                  />
                </div>

                {/* Education */}
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1 flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
                    <span>College & Degree (from LinkedIn):</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. B.Tech in Computer Science & Engineering"
                    value={education}
                    onChange={e => setEducation(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 focus:outline-none focus:border-rose-500"
                  />
                </div>

                {/* Core Tech Stack */}
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1 flex items-center gap-1">
                    <Code2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>Technical Skills & Tools (comma separated):</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. TypeScript, React, Next.js, Python, PostgreSQL"
                    value={skills}
                    onChange={e => setSkills(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 focus:outline-none focus:border-rose-500"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Location:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Bengaluru, Karnataka, India"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 focus:outline-none focus:border-rose-500"
                  />
                </div>

                {/* Music & Spotify Taste */}
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1 flex items-center gap-1">
                    <Music className="w-3.5 h-3.5 text-pink-400" />
                    <span>Music & Artists (from Instagram story signals):</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Lo-Fi Beats, A.R. Rahman, Indie Rock, Coldplay"
                    value={musicTaste}
                    onChange={e => setMusicTaste(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 focus:outline-none focus:border-rose-500"
                  />
                </div>

                {/* Coffee & Food Ritual */}
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1 flex items-center gap-1">
                    <Coffee className="w-3.5 h-3.5 text-amber-400" />
                    <span>Favorite Food & Coffee Habit:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. South Indian filter coffee in brass dabarah & crispy dosas"
                    value={coffeeRitual}
                    onChange={e => setCoffeeRitual(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 focus:outline-none focus:border-rose-500"
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

          {/* Forensic Deep Scanner Animation Progress */}
          {isLoading && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-rose-900/40 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-rose-300 font-bold">
                <Loader2 className="w-4 h-4 animate-spin text-rose-400" />
                <span>Forensic Social Ingestion in Progress</span>
              </div>
              <p className="text-slate-300 italic">{statusMessage}</p>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-rose-500 to-pink-500 h-full transition-all duration-300"
                  style={{ width: `${(scanStep / 4) * 100}%` }}
                />
              </div>
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-rose-500/25 transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
            >
              {isLoading ? (
                <span>Synthesizing Authentic Agent...</span>
              ) : (
                <>
                  <span>Extract All Minute Details & Deploy Agent</span>
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
