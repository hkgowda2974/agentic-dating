export interface SocialLinks {
  linkedin: string;
  instagram: string;
}

export interface ExtractedSourceData {
  linkedinSummary: {
    headline: string;
    role: string;
    company?: string;
    education?: string;
    skills?: string[];
    industry: string;
    yearsOfExperience?: string;
    professionalValues: string[];
    intellectualFocus: string;
  };
  instagramSummary: {
    handle: string;
    bioQuote?: string;
    vibe: string;
    aesthetic: string;
    musicTaste?: string[];
    weekendRoutine?: string;
    coffeeOrFoodRitual?: string;
    travelFootprint?: string[];
    lifestyleKeywords: string[];
    socialEnergy: 'Introvert' | 'Ambivert' | 'Extrovert';
  };
}

export interface AgentProfile {
  needs: string[];
  hobbies: string[];
  interests: string[];
  communicationStyle: string;
  textingCadence?: string;
  dealbreakers: string[];
  greenFlags?: string[];
  loveLanguage: string;
  energyLevel: string;
  datePhilosophy: string;
  humorStyle: string;
  idealFirstDateItinerary?: string;
  unusualQuirks?: string[];
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
    chemistryScore: number;
    intellectualSynergy: number;
    lifestyleAlignment: number;
    vibeMatch: number;
    overallCompatibility: number;
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
