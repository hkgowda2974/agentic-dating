export interface SocialLinks {
  linkedin: string;
  instagram: string;
}

export interface ExtractedSourceData {
  linkedinSummary: {
    headline: string;
    role: string;
    industry: string;
    professionalValues: string[];
    intellectualFocus: string;
  };
  instagramSummary: {
    handle: string;
    vibe: string;
    aesthetic: string;
    lifestyleKeywords: string[];
    socialEnergy: 'Introvert' | 'Ambivert' | 'Extrovert';
  };
}

export interface AgentProfile {
  needs: string[];
  hobbies: string[];
  interests: string[];
  communicationStyle: string;
  dealbreakers: string[];
  loveLanguage: string;
  energyLevel: string;
  datePhilosophy: string;
  humorStyle: string;
}

export interface Person {
  id: string;
  name: string;
  age: number;
  location: string;
  avatarUrl: string;
  bio: string;
  socials: SocialLinks;
  extractedSources: ExtractedSourceData;
  agent: AgentProfile;
}

export interface DateDialogueTurn {
  speakerId: string;
  speakerName: string;
  text: string;
  innerThought?: string;
  timestamp: string;
  reaction?: string;
}

export interface DateSimulation {
  id: string;
  personAId: string;
  personBId: string;
  venue: {
    name: string;
    type: string;
    location: string;
    ambiance: string;
  };
  dialogue: DateDialogueTurn[];
  metrics: {
    chemistryScore: number; // 0 - 100
    intellectualSynergy: number; // 0 - 100
    lifestyleAlignment: number; // 0 - 100
    vibeMatch: number; // 0 - 100
    overallCompatibility: number; // 0 - 100
  };
  sharedInterests: string[];
  potentialFrictions: string[];
  agentVerdict: {
    personAVerdict: string;
    personBVerdict: string;
    secondDateLikelihood: 'Definite Yes' | 'Cautious Yes' | 'Great Friendship' | 'Polite Pass';
    narrativeSummary: string;
  };
}

export interface CompatibilityRankItem {
  targetPerson: Person;
  rank: number;
  overallScore: number;
  breakdown: {
    intellectual: number;
    lifestyle: number;
    emotional: number;
  };
  compatibilityRationale: string;
  sampleDateId?: string;
}
