'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Person, DateSimulation } from '../types/dating';
import { simulateDateBetweenAgents } from '../lib/agent-dating-engine';
import { Play, Pause, RotateCcw, FastForward, Heart, Sparkles, MapPin, Coffee, CheckCircle2, MessageSquareHeart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DateTheaterProps {
  candidates: Person[];
  selectedPair: { personA: Person; personB: Person } | null;
  onSelectPair?: (personA: Person, personB: Person) => void;
}

export const DateTheater: React.FC<DateTheaterProps> = ({
  candidates,
  selectedPair
}) => {
  const [personAId, setPersonAId] = useState<string>(selectedPair?.personA.id || 'sam-altman');
  const [personBId, setPersonBId] = useState<string>(selectedPair?.personB.id || 'mira-murati');
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(2400); // ms per turn
  const dialogueContainerRef = useRef<HTMLDivElement>(null);

  // Sync if selectedPair changes externally
  useEffect(() => {
    if (selectedPair) {
      setPersonAId(selectedPair.personA.id);
      setPersonBId(selectedPair.personB.id);
      setCurrentStep(0);
      setIsPlaying(false);
    }
  }, [selectedPair]);

  const personA = candidates.find(c => c.id === personAId) || candidates[0];
  const personB = candidates.find(c => c.id === personBId) || candidates[1];

  // Generate or retrieve the simulation
  const simulation: DateSimulation = React.useMemo(() => {
    return simulateDateBetweenAgents(personA, personB);
  }, [personA, personB]);

  // Handle auto-play
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      if (currentStep < simulation.dialogue.length) {
        timer = setTimeout(() => {
          setCurrentStep(prev => prev + 1);
        }, playbackSpeed);
      } else {
        setIsPlaying(false);
        // Trigger celebratory confetti on high match
        if (simulation.metrics.overallCompatibility >= 90) {
          confetti({
            particleCount: 70,
            spread: 60,
            origin: { y: 0.6 }
          });
        }
      }
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStep, simulation.dialogue.length, playbackSpeed, simulation.metrics.overallCompatibility]);

  // Auto-scroll to bottom of conversation
  useEffect(() => {
    if (dialogueContainerRef.current) {
      dialogueContainerRef.current.scrollTo({
        top: dialogueContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [currentStep]);

  const quickPairs = [
    { a: 'sam-altman', b: 'mira-murati', label: 'Sam & Mira' },
    { a: 'dylan-field', b: 'karri-saarinen', label: 'Dylan & Karri' },
    { a: 'brian-chesky', b: 'sara-blakely', label: 'Brian & Sara' },
    { a: 'alexandr-wang', b: 'lucy-guo', label: 'Alexandr & Lucy' }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header and Quick Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/60 border border-slate-800 p-5 rounded-3xl backdrop-blur-md">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              The Agent Date Theater
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Watch two agents go on a real-time date on behalf of their humans.
          </p>
        </div>

        {/* Featured Quick Pairings */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs text-slate-400 font-medium mr-1">Featured:</span>
          {quickPairs.map((pair, idx) => (
            <button
              key={idx}
              onClick={() => {
                setPersonAId(pair.a);
                setPersonBId(pair.b);
                setCurrentStep(0);
                setIsPlaying(false);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                personAId === pair.a && personBId === pair.b
                  ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                  : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300'
              }`}
            >
              {pair.label}
            </button>
          ))}
        </div>
      </div>

      {/* Candidate Pickers & Matchup Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Person A Selector */}
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={personA.avatarUrl}
              alt={personA.name}
              className="w-14 h-14 rounded-2xl object-cover ring-2 ring-rose-500"
            />
            <div>
              <span className="text-[10px] uppercase font-bold text-rose-400 tracking-wider">Agent 1</span>
              <h3 className="text-base font-bold text-white">{personA.name}</h3>
              <p className="text-xs text-slate-400 line-clamp-1">{personA.extractedSources.linkedinSummary.role}</p>
            </div>
          </div>
          <select
            value={personAId}
            onChange={e => {
              setPersonAId(e.target.value);
              setCurrentStep(0);
              setIsPlaying(false);
            }}
            className="bg-slate-950 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-2 outline-none focus:border-rose-500"
          >
            {candidates.map(c => (
              <option key={c.id} value={c.id} disabled={c.id === personBId}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Person B Selector */}
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={personB.avatarUrl}
              alt={personB.name}
              className="w-14 h-14 rounded-2xl object-cover ring-2 ring-pink-500"
            />
            <div>
              <span className="text-[10px] uppercase font-bold text-pink-400 tracking-wider">Agent 2</span>
              <h3 className="text-base font-bold text-white">{personB.name}</h3>
              <p className="text-xs text-slate-400 line-clamp-1">{personB.extractedSources.linkedinSummary.role}</p>
            </div>
          </div>
          <select
            value={personBId}
            onChange={e => {
              setPersonBId(e.target.value);
              setCurrentStep(0);
              setIsPlaying(false);
            }}
            className="bg-slate-950 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-2 outline-none focus:border-pink-500"
          >
            {candidates.map(c => (
              <option key={c.id} value={c.id} disabled={c.id === personAId}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Date Venue & Live Metrics Bar */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-rose-950/20 to-slate-900 border border-rose-900/30 p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-xs">
          <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <Coffee className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-100">{simulation.venue.name}</span>
              <span className="text-[11px] text-slate-400">({simulation.venue.type})</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400 text-[11px] mt-0.5">
              <MapPin className="w-3 h-3 text-rose-400" />
              <span>{simulation.venue.location}</span>
              <span>•</span>
              <span className="italic">{simulation.venue.ambiance}</span>
            </div>
          </div>
        </div>

        {/* Live Compatibility Score Meter */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Predicted Spark</span>
            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">
              {simulation.metrics.overallCompatibility}%
            </div>
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-rose-500/40 flex items-center justify-center bg-rose-500/10 shadow-lg shadow-rose-500/20">
            <Heart className="w-6 h-6 text-rose-400 fill-rose-400/30" />
          </div>
        </div>
      </div>

      {/* Date Playback & Dialogue Stage */}
      <div className="rounded-3xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl flex flex-col h-[520px]">
        {/* Controls Bar */}
        <div className="px-5 py-3 border-b border-slate-800 bg-slate-900/70 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-semibold transition-all shadow-md shadow-rose-500/20"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Pause Date</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>{currentStep === 0 ? 'Start Date Simulation' : 'Resume'}</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                setCurrentStep(0);
                setIsPlaying(false);
              }}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Restart from beginning"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setCurrentStep(simulation.dialogue.length);
                setIsPlaying(false);
              }}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Jump to final outcome"
            >
              <FastForward className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <span>
              Dialogue Turn: <strong className="text-slate-200">{Math.min(currentStep, simulation.dialogue.length)}</strong> / {simulation.dialogue.length}
            </span>
            <div className="hidden sm:flex items-center gap-1">
              <span className="text-[11px]">Speed:</span>
              <button
                onClick={() => setPlaybackSpeed(3200)}
                className={`px-2 py-0.5 rounded text-[10px] ${playbackSpeed === 3200 ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-300'}`}
              >
                1x
              </button>
              <button
                onClick={() => setPlaybackSpeed(1800)}
                className={`px-2 py-0.5 rounded text-[10px] ${playbackSpeed === 1800 ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-300'}`}
              >
                2x
              </button>
            </div>
          </div>
        </div>

        {/* Conversation Stream */}
        <div
          ref={dialogueContainerRef}
          className="flex-1 overflow-y-auto p-6 space-y-5 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-900/50"
        >
          {currentStep === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-center text-slate-500 space-y-3">
              <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                <MessageSquareHeart className="w-8 h-8 text-rose-400" />
              </div>
              <div>
                <p className="text-base font-semibold text-slate-300">Ready to initiate simulated date</p>
                <p className="text-xs text-slate-500 max-w-sm mt-1">
                  Click &apos;Start Date Simulation&apos; to watch the AI agents converse, evaluate chemistry, and date on their persons&apos; behalf.
                </p>
              </div>
            </div>
          )}

          {simulation.dialogue.slice(0, currentStep).map((turn, index) => {
            const isPersonA = turn.speakerId === personA.id;
            const speaker = isPersonA ? personA : personB;

            return (
              <div
                key={index}
                className={`flex items-start gap-3.5 ${isPersonA ? 'justify-start' : 'justify-end'}`}
              >
                {isPersonA && (
                  <img
                    src={speaker.avatarUrl}
                    alt={speaker.name}
                    className="w-10 h-10 rounded-xl object-cover ring-2 ring-rose-500/40 shrink-0 mt-1"
                  />
                )}

                <div className={`max-w-lg space-y-1.5 ${isPersonA ? 'items-start' : 'items-end'}`}>
                  {/* Speaker Label & Timestamp */}
                  <div className={`flex items-center gap-2 text-xs ${isPersonA ? 'justify-start' : 'justify-end'}`}>
                    <span className="font-bold text-slate-300">{turn.speakerName}</span>
                    <span className="text-[10px] text-slate-500">{turn.timestamp}</span>
                    {turn.reaction && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 italic">
                        {turn.reaction}
                      </span>
                    )}
                  </div>

                  {/* Spoken Message Bubble */}
                  <div
                    className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-lg ${
                      isPersonA
                        ? 'bg-rose-950/40 text-slate-100 border border-rose-800/40 rounded-tl-sm'
                        : 'bg-pink-950/40 text-slate-100 border border-pink-800/40 rounded-tr-sm'
                    }`}
                  >
                    {turn.text}
                  </div>

                  {/* Agent Inner Thought Bubble */}
                  {turn.innerThought && (
                    <div
                      className={`text-[11px] px-3 py-1.5 rounded-xl border flex items-center gap-1.5 ${
                        isPersonA
                          ? 'bg-slate-900/80 text-rose-300 border-rose-900/30'
                          : 'bg-slate-900/80 text-pink-300 border-pink-900/30'
                      }`}
                    >
                      <Sparkles className="w-3 h-3 shrink-0" />
                      <span className="italic">
                        Agent internal thought: &quot;{turn.innerThought}&quot;
                      </span>
                    </div>
                  )}
                </div>

                {!isPersonA && (
                  <img
                    src={speaker.avatarUrl}
                    alt={speaker.name}
                    className="w-10 h-10 rounded-xl object-cover ring-2 ring-pink-500/40 shrink-0 mt-1"
                  />
                )}
              </div>
            );
          })}

          {/* Typing Indicator while playing */}
          {isPlaying && currentStep < simulation.dialogue.length && (
            <div className="flex items-center gap-2 text-xs text-slate-500 italic px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-bounce delay-150" />
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-bounce delay-300" />
              <span>Agents conversing and cross-analyzing values...</span>
            </div>
          )}
        </div>

        {/* Final Date Outcome & Verdict (when finished) */}
        {currentStep >= simulation.dialogue.length && (
          <div className="border-t border-slate-800 bg-slate-900/90 p-5 space-y-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <h4 className="text-sm font-bold text-white">Date Concluded • Agent Evaluation Verdict</h4>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Second Date Recommendation:</span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
                  {simulation.agentVerdict.secondDateLikelihood}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              {simulation.agentVerdict.narrativeSummary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-900/30">
                <span className="font-bold text-rose-300">{personA.name}&apos;s Agent Verdict:</span>
                <p className="text-slate-300 mt-1 italic">&quot;{simulation.agentVerdict.personAVerdict}&quot;</p>
              </div>
              <div className="p-3 rounded-xl bg-pink-950/20 border border-pink-900/30">
                <span className="font-bold text-pink-300">{personB.name}&apos;s Agent Verdict:</span>
                <p className="text-slate-300 mt-1 italic">&quot;{simulation.agentVerdict.personBVerdict}&quot;</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
