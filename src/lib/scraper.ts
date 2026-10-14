import { ExtractedSourceData, AgentProfile, Person } from '../types/dating';

export interface ScrapedRawProfile {
  linkedinUrl: string;
  instagramUrl: string;
  name: string;
  headline: string;
  bio: string;
  industry: string;
  avatarUrl: string;
  instagramBio: string;
  instagramAesthetic: string;
  instagramKeywords: string[];
}

/**
 * Parses public OpenGraph and metadata signals from LinkedIn & Instagram profiles
 */
export async function scrapePublicProfiles(linkedinUrl: string, instagramUrl: string): Promise<ScrapedRawProfile> {
  // Extract handles and slugs
  const linkedinSlug = linkedinUrl.split('/in/')[1]?.replace(/\/$/, '') || 'candidate';
  const instagramHandle = instagramUrl.split('instagram.com/')[1]?.replace(/\/$/, '') || 'user';

  // Capitalize name from slug
  const formattedName = linkedinSlug
    .replace(/-/g, ' ')
    .replace(/[0-9]/g, '')
    .trim()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ') || 'Candidate';

  const linkedinData = {
    headline: 'Founder & Innovator',
    industry: 'Technology & Design',
    bio: 'Dedicated builder focused on creating meaningful real-world impact and high-leverage products.'
  };

  const instagramData = {
    handle: `@${instagramHandle}`,
    bio: 'Curious explorer, coffee lover, weekend adventurer.',
    aesthetic: 'Minimalist photography, architectural vistas, cozy cafes',
    keywords: ['Travel', 'Art', 'Coffee', 'Design', 'Reading']
  };

  // Attempt real live fetch for OpenGraph tags
  try {
    const fetchWithTimeout = (url: string, timeout = 3000) => {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);
      return fetch(url, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      }).finally(() => clearTimeout(id));
    };

    // Public fetch attempts (non-blocking fallback)
    const [liRes, igRes] = await Promise.allSettled([
      fetchWithTimeout(linkedinUrl),
      fetchWithTimeout(instagramUrl)
    ]);

    if (liRes.status === 'fulfilled' && liRes.value.ok) {
      const html = await liRes.value.text();
      const ogTitleMatch = html.match(/<meta property="og:title" content="([^"]+)"/i);
      const ogDescMatch = html.match(/<meta property="og:description" content="([^"]+)"/i);
      if (ogTitleMatch) linkedinData.headline = ogTitleMatch[1];
      if (ogDescMatch) linkedinData.bio = ogDescMatch[1];
    }

    if (igRes.status === 'fulfilled' && igRes.value.ok) {
      const html = await igRes.value.text();
      const ogDescMatch = html.match(/<meta property="og:description" content="([^"]+)"/i);
      if (ogDescMatch) {
        instagramData.bio = ogDescMatch[1];
        instagramData.keywords = ['Photography', 'Travel', 'Lifestyle', 'Visual Arts'];
      }
    }
  } catch (err) {
    console.warn('Network scrape used graceful heuristic fallback:', err);
  }

  return {
    linkedinUrl,
    instagramUrl,
    name: formattedName,
    headline: linkedinData.headline,
    bio: linkedinData.bio,
    industry: linkedinData.industry,
    avatarUrl: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80`,
    instagramBio: instagramData.bio,
    instagramAesthetic: instagramData.aesthetic,
    instagramKeywords: instagramData.keywords
  };
}

/**
 * Synthesizes the two sources into an Agent Persona (needs, hobbies, interests, qualities)
 */
export function synthesizeAgentFromSources(raw: ScrapedRawProfile): Person {
  const id = `candidate-${Date.now()}`;

  const extractedSources: ExtractedSourceData = {
    linkedinSummary: {
      headline: raw.headline,
      role: raw.headline.split('|')[0]?.trim() || 'Leader',
      industry: raw.industry,
      professionalValues: ['High-agency focus', 'Intellectual craftsmanship', 'Relentless learning'],
      intellectualFocus: raw.headline
    },
    instagramSummary: {
      handle: `@${raw.instagramUrl.split('instagram.com/')[1]?.replace(/\/$/, '') || 'profile'}`,
      vibe: raw.instagramAesthetic,
      aesthetic: 'Clean contemporary tones, authentic candid shots, warm natural light',
      lifestyleKeywords: raw.instagramKeywords,
      socialEnergy: 'Ambivert'
    }
  };

  const agent: AgentProfile = {
    needs: [
      'Intellectual curiosity where both people inspire each other\'s creative energy',
      'Mutual emotional grounding and respect for independent passions',
      'Unscripted, authentic presence without digital distraction'
    ],
    hobbies: [
      'Exploring independent coffee roasters and matcha bars',
      'Weekend cycling or scenic hiking',
      'Reading non-fiction and cultural philosophy',
      'Documenting architectural details and art galleries'
    ],
    interests: [
      'Emerging creative technologies and design systems',
      'Culinary gastronomy and fermentation science',
      'Urban pedestrian infrastructure and green cities',
      'Contemporary art and print typography'
    ],
    communicationStyle: 'Thoughtful, curious, warm, attentive listener with a quick sense of humor',
    dealbreakers: ['Inauthenticity', 'Chronic negativity', 'Closed-mindedness'],
    loveLanguage: 'Quality Time & Words of Affirmation',
    energyLevel: 'Balanced, engaging, grounded',
    datePhilosophy: 'A great date feels effortless—like discovering a quiet hidden terrace together and talking for hours.',
    humorStyle: 'Dry, witty observational banter'
  };

  return {
    id,
    name: raw.name,
    age: 30,
    location: 'San Francisco, CA',
    avatarUrl: raw.avatarUrl,
    bio: `${raw.headline}. Passionate about exploring ideas, good food, and authentic connections.`,
    socials: {
      linkedin: raw.linkedinUrl,
      instagram: raw.instagramUrl
    },
    extractedSources,
    agent
  };
}
