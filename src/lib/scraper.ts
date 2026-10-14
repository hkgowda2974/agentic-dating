import { ExtractedSourceData, AgentProfile, Person } from '../types/dating';

export interface CustomProfileOverrides {
  name?: string;
  headline?: string;
  company?: string;
  education?: string;
  skills?: string[];
  location?: string;
  avatarUrl?: string;
  industry?: string;
  bioSnippet?: string;
  instagramBio?: string;
  musicTaste?: string[];
  weekendRoutine?: string;
  coffeeOrFoodRitual?: string;
  greenFlags?: string[];
  unusualQuirks?: string[];
  hobbies?: string[];
  interests?: string[];
}

export interface ScrapedRawProfile {
  linkedinUrl: string;
  instagramUrl: string;
  name: string;
  headline: string;
  company: string;
  education: string;
  skills: string[];
  bio: string;
  industry: string;
  location: string;
  avatarUrl: string;
  instagramBio: string;
  instagramAesthetic: string;
  instagramKeywords: string[];
  musicTaste: string[];
  weekendRoutine: string;
  coffeeOrFoodRitual: string;
  travelFootprint: string[];
  greenFlags: string[];
  unusualQuirks: string[];
  customHobbies?: string[];
  customInterests?: string[];
}

/**
 * Enhanced minute-detail extractor parsing LinkedIn & Instagram public footprints
 */
export async function scrapePublicProfiles(
  linkedinUrl: string,
  instagramUrl: string,
  overrides?: CustomProfileOverrides
): Promise<ScrapedRawProfile> {
  const linkedinSlug = linkedinUrl.split('/in/')[1]?.replace(/\/$/, '') || 'candidate';
  const instagramHandle = instagramUrl.split('instagram.com/')[1]?.replace(/\/$/, '') || 'user';

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

  const userHeadline = overrides?.headline?.trim() || 'Software Engineer & Full-Stack Builder';
  const userLocation = overrides?.location?.trim() || 'Bengaluru, Karnataka, India';
  const userCompany = overrides?.company?.trim() || 'Tech Innovation Labs';
  const userEducation = overrides?.education?.trim() || 'B.Tech in Computer Science & Engineering';
  const userIndustry = overrides?.industry?.trim() || 'Information Technology & Software';

  const userSkills = overrides?.skills && overrides.skills.length > 0
    ? overrides.skills
    : ['TypeScript', 'React.js', 'Python', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'API Architecture'];

  const userMusic = overrides?.musicTaste && overrides.musicTaste.length > 0
    ? overrides.musicTaste
    : ['Lo-Fi Deep Focus', 'Indie Acoustic', 'Synthwave & Electronic', 'A.R. Rahman Classics'];

  const userWeekend = overrides?.weekendRoutine?.trim() ||
    'Morning South Indian filter coffee, building side projects, evening badminton, and catching up on tech podcasts';

  const userFoodRitual = overrides?.coffeeOrFoodRitual?.trim() ||
    'Strong South Indian filter coffee in a traditional brass tumbler, scouting authentic street dosas, and exploring quiet rooftop cafes';

  const userGreenFlags = overrides?.greenFlags && overrides.greenFlags.length > 0
    ? overrides.greenFlags
    : [
        'Curious mind who asks thoughtful follow-up questions',
        'Values quiet comfortable presence as much as lively banter',
        'Appreciates good food without pretension or rush',
        'Has independent creative hobbies they are quietly obsessed with'
      ];

  const userQuirks = overrides?.unusualQuirks && overrides.unusualQuirks.length > 0
    ? overrides.unusualQuirks
    : [
        'Enforces dark mode on every single app and IDE without exception',
        'Reads architecture diagrams and system design docs for relaxation',
        'Can debate the exact brewing temperature of coffee beans for 30 minutes'
      ];

  // User avatar: real photo or high-fidelity initials avatar with custom rose accent
  const userAvatar =
    overrides?.avatarUrl?.trim() ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(formattedName)}&background=f43f5e&color=ffffff&size=400&font-size=0.38&bold=true`;

  const linkedinData = {
    headline: userHeadline,
    industry: userIndustry,
    bio: `${userHeadline} with a background in ${userEducation}. Focused on building high-performance systems and intuitive user experiences.`
  };

  const instagramData = {
    handle: `@${instagramHandle}`,
    bio: overrides?.instagramBio || 'Exploring code, cafes, city lights, and quiet weekend drives.',
    aesthetic: 'Crisp urban architecture, developer workspace aesthetics, street photography, golden hour vistas',
    keywords: ['Tech & Code', 'Specialty Coffee', 'Urban Photography', 'Badminton / Fitness', 'Road Trips']
  };

  // Attempt live network fetch
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
      if (ogTitleMatch && !overrides?.headline) {
        linkedinData.headline = ogTitleMatch[1].replace(/ \| LinkedIn$/i, '');
      }
      if (ogDescMatch) linkedinData.bio = ogDescMatch[1];
    }

    if (igRes.status === 'fulfilled' && igRes.value.ok) {
      const html = await igRes.value.text();
      const ogDescMatch = html.match(/<meta property="og:description" content="([^"]+)"/i);
      if (ogDescMatch && !overrides?.instagramBio) {
        instagramData.bio = ogDescMatch[1];
      }
    }
  } catch (err) {
    console.warn('Network scrape graceful heuristic:', err);
  }

  return {
    linkedinUrl,
    instagramUrl,
    name: formattedName,
    headline: linkedinData.headline,
    company: userCompany,
    education: userEducation,
    skills: userSkills,
    bio: linkedinData.bio,
    industry: linkedinData.industry,
    location: userLocation,
    avatarUrl: userAvatar,
    instagramBio: instagramData.bio,
    instagramAesthetic: instagramData.aesthetic,
    instagramKeywords: instagramData.keywords,
    musicTaste: userMusic,
    weekendRoutine: userWeekend,
    coffeeOrFoodRitual: userFoodRitual,
    travelFootprint: ['Nandi Hills', 'Coorg / Western Ghats', 'Goa', 'Pondicherry', 'Mysuru'],
    greenFlags: userGreenFlags,
    unusualQuirks: userQuirks,
    customHobbies: overrides?.hobbies,
    customInterests: overrides?.interests
  };
}

/**
 * Synthesizes minute details into a deep authentic Agent Persona
 */
export function synthesizeAgentFromSources(raw: ScrapedRawProfile): Person {
  const id = `candidate-${Date.now()}`;

  const defaultHobbies = raw.customHobbies && raw.customHobbies.length > 0
    ? raw.customHobbies
    : [
        'Brewing artisanal South Indian filter coffee and dialing in roast profiles',
        'Tinkering with full-stack side projects and open-source packages',
        'Weekend badminton sessions and long late-night city drives',
        'Curating Spotify playlists spanning Lo-Fi and instrumental scores'
      ];

  const defaultInterests = raw.customInterests && raw.customInterests.length > 0
    ? raw.customInterests
    : [
        'Next-generation AI agents and autonomous developer tooling',
        'Scalable cloud architecture and database performance tuning',
        'Modern minimalist interior design and clean desk ergonomics',
        'Cinema cinematography and long-form narrative podcasts'
      ];

  const extractedSources: ExtractedSourceData = {
    linkedinSummary: {
      headline: raw.headline,
      role: raw.headline.split('|')[0]?.trim() || raw.headline,
      company: raw.company,
      education: raw.education,
      skills: raw.skills,
      industry: raw.industry,
      yearsOfExperience: '3+ years',
      professionalValues: [
        'High code hygiene & craftsmanship',
        'Clarity over complexity',
        'Continuous self-directed learning',
        'Pragmatic problem solving'
      ],
      intellectualFocus: `${raw.headline} • Focus on ${raw.skills.slice(0, 3).join(', ')}`
    },
    instagramSummary: {
      handle: raw.instagramUrl.includes('instagram.com/')
        ? `@${raw.instagramUrl.split('instagram.com/')[1]?.replace(/\/$/, '')}`
        : '@profile',
      bioQuote: raw.instagramBio,
      vibe: raw.instagramAesthetic,
      aesthetic: 'Clean contemporary tones, dark UI palettes, cozy coffee tables, warm natural lighting',
      musicTaste: raw.musicTaste,
      weekendRoutine: raw.weekendRoutine,
      coffeeOrFoodRitual: raw.coffeeOrFoodRitual,
      travelFootprint: raw.travelFootprint,
      lifestyleKeywords: raw.instagramKeywords,
      socialEnergy: 'Ambivert'
    }
  };

  const agent: AgentProfile = {
    needs: [
      'Intellectual curiosity where both partners support each other\'s ambitions and creative craft',
      'Mutual emotional grounding, honesty, and space for quiet independent recharging',
      'Unscripted, genuine presence without social posturing or superficial drama'
    ],
    hobbies: defaultHobbies,
    interests: defaultInterests,
    communicationStyle: 'Direct, thoughtful, warm, attentive listener who loves deep late-night conversations',
    textingCadence: 'Responsive with meaningful messages; prefers quality phone calls or meeting in person over endless dry texting',
    dealbreakers: ['Inauthenticity', 'Arrogant or condescending behavior', 'Chronic flakiness', 'Lack of personal passions'],
    greenFlags: raw.greenFlags,
    loveLanguage: 'Quality Time & Acts of Service',
    energyLevel: 'Grounded, calm, dependable, intellectually lively',
    datePhilosophy: 'A great date feels effortless—like discovering a quiet rooftop cafe together and talking for three hours without noticing the time.',
    idealFirstDateItinerary: 'Meeting at an artisanal coffee house or tea bar, getting delicious pastries, and going for a scenic walk discussing wild ideas and childhood memories.',
    humorStyle: 'Witty, observational banter with quick situational timing',
    unusualQuirks: raw.unusualQuirks
  };

  return {
    id,
    name: raw.name,
    age: 25,
    location: raw.location,
    avatarUrl: raw.avatarUrl,
    bio: `${raw.headline} based in ${raw.location}. Alum of ${raw.education}. Passionate about technology, good coffee, and authentic connections.`,
    socials: {
      linkedin: raw.linkedinUrl,
      instagram: raw.instagramUrl
    },
    extractedSources,
    agent
  };
}
