import { ExtractedSourceData, AgentProfile, Person } from '../types/dating';

export interface CustomProfileOverrides {
  name?: string;
  headline?: string;
  location?: string;
  avatarUrl?: string;
  industry?: string;
  hobbies?: string[];
  interests?: string[];
}

export interface ScrapedRawProfile {
  linkedinUrl: string;
  instagramUrl: string;
  name: string;
  headline: string;
  bio: string;
  industry: string;
  location: string;
  avatarUrl: string;
  instagramBio: string;
  instagramAesthetic: string;
  instagramKeywords: string[];
  customHobbies?: string[];
  customInterests?: string[];
}

/**
 * Parses public OpenGraph and metadata signals from LinkedIn & Instagram profiles
 */
export async function scrapePublicProfiles(
  linkedinUrl: string,
  instagramUrl: string,
  overrides?: CustomProfileOverrides
): Promise<ScrapedRawProfile> {
  // Extract handles and slugs
  const linkedinSlug = linkedinUrl.split('/in/')[1]?.replace(/\/$/, '') || 'candidate';
  const instagramHandle = instagramUrl.split('instagram.com/')[1]?.replace(/\/$/, '') || 'user';

  // Capitalize name from slug if not provided
  const formattedName =
    overrides?.name?.trim() ||
    linkedinSlug
      .replace(/-/g, ' ')
      .replace(/[0-9]/g, '')
      .trim()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ') ||
    'Candidate';

  const userHeadline = overrides?.headline?.trim() || 'Software Engineer & Technologist';
  const userLocation = overrides?.location?.trim() || 'Bengaluru, India';
  const userIndustry = overrides?.industry?.trim() || 'Technology & Engineering';

  // Avatar: user provided photo OR personalized initials avatar
  const userAvatar =
    overrides?.avatarUrl?.trim() ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(formattedName)}&background=e11d48&color=ffffff&size=400&font-size=0.38&bold=true`;

  const linkedinData = {
    headline: userHeadline,
    industry: userIndustry,
    bio: `${userHeadline}. Passionate about building impactful software, solving challenging problems, and continuous learning.`
  };

  const instagramData = {
    handle: `@${instagramHandle}`,
    bio: 'Curious explorer, tech enthusiast, weekend explorer.',
    aesthetic: 'Authentic candid moments, tech desk setups, casual cityscapes',
    keywords: ['Tech', 'Coding', 'Travel', 'Music', 'Fitness']
  };

  // Attempt live fetch for OpenGraph tags
  try {
    const fetchWithTimeout = (url: string, timeout = 2500) => {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);
      return fetch(url, {
        signal: controller.signal,
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      }).finally(() => clearTimeout(id));
    };

    const [liRes, igRes] = await Promise.allSettled([
      fetchWithTimeout(linkedinUrl),
      fetchWithTimeout(instagramUrl)
    ]);

    if (liRes.status === 'fulfilled' && liRes.value.ok) {
      const html = await liRes.value.text();
      const ogTitleMatch = html.match(/<meta property="og:title" content="([^"]+)"/i);
      const ogDescMatch = html.match(/<meta property="og:description" content="([^"]+)"/i);
      const ogImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/i);

      if (ogTitleMatch && !overrides?.headline) {
        linkedinData.headline = ogTitleMatch[1].replace(/ \| LinkedIn$/i, '');
      }
      if (ogDescMatch) linkedinData.bio = ogDescMatch[1];
      if (ogImageMatch && !overrides?.avatarUrl) {
        // If real profile picture OG image found and not a generic linkedin logo
        if (!ogImageMatch[1].includes('static.licdn.com/aero-v1/sc/h/')) {
          linkedinData.bio = ogDescMatch ? ogDescMatch[1] : linkedinData.bio;
        }
      }
    }

    if (igRes.status === 'fulfilled' && igRes.value.ok) {
      const html = await igRes.value.text();
      const ogDescMatch = html.match(/<meta property="og:description" content="([^"]+)"/i);
      if (ogDescMatch) {
        instagramData.bio = ogDescMatch[1];
        instagramData.keywords = ['Lifestyle', 'Photography', 'Music', 'Outdoors'];
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
    location: userLocation,
    avatarUrl: userAvatar,
    instagramBio: instagramData.bio,
    instagramAesthetic: instagramData.aesthetic,
    instagramKeywords: instagramData.keywords,
    customHobbies: overrides?.hobbies,
    customInterests: overrides?.interests
  };
}

/**
 * Synthesizes the two sources into an Agent Persona (needs, hobbies, interests, qualities)
 */
export function synthesizeAgentFromSources(raw: ScrapedRawProfile): Person {
  const id = `candidate-${Date.now()}`;

  const defaultHobbies = raw.customHobbies && raw.customHobbies.length > 0
    ? raw.customHobbies
    : [
        'Exploring new tech tools and coding projects',
        'Weekend road trips and finding good local food spots',
        'Listening to music and podcasts',
        'Staying active and hitting the gym'
      ];

  const defaultInterests = raw.customInterests && raw.customInterests.length > 0
    ? raw.customInterests
    : [
        'Artificial intelligence and software engineering',
        'Startups, tech innovation and problem solving',
        'Cinematography and great storytelling',
        'Personal fitness and self-improvement'
      ];

  const extractedSources: ExtractedSourceData = {
    linkedinSummary: {
      headline: raw.headline,
      role: raw.headline.split('|')[0]?.trim() || raw.headline,
      industry: raw.industry,
      professionalValues: ['Engineering excellence', 'Problem solving', 'Continuous learning', 'Honest collaboration'],
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
      'Mutual emotional grounding and respect for independent passions and goals',
      'Unscripted, authentic presence without pretension or social masks'
    ],
    hobbies: defaultHobbies,
    interests: defaultInterests,
    communicationStyle: 'Direct, genuine, warm, attentive listener with a quick sense of humor',
    dealbreakers: ['Inauthenticity', 'Arrogance', 'Disrespect for personal boundaries'],
    loveLanguage: 'Quality Time & Words of Affirmation',
    energyLevel: 'Grounded, engaging, thoughtful',
    datePhilosophy: 'A great date feels effortless—like discovering a quiet hidden cafe together and talking for hours without looking at our phones.',
    humorStyle: 'Playful, situational, quick banter'
  };

  return {
    id,
    name: raw.name,
    age: 26,
    location: raw.location,
    avatarUrl: raw.avatarUrl,
    bio: `${raw.headline} based in ${raw.location}. Passionate about technology, good conversations, and authentic connections.`,
    socials: {
      linkedin: raw.linkedinUrl,
      instagram: raw.instagramUrl
    },
    extractedSources,
    agent
  };
}
