import { Person, DateSimulation, DateDialogueTurn, CompatibilityRankItem } from '../types/dating';
import { CANDIDATES } from '../data/candidates';

// Pre-curated highlight dates showcasing depth, chemistry, and authentic persona representation
export const HIGHLIGHT_DATES: Record<string, DateSimulation> = {
  'sam-altman_mira-murati': {
    id: 'sam-altman_mira-murati',
    personAId: 'sam-altman',
    personBId: 'mira-murati',
    venue: {
      name: 'The Mill Coffee & Tartine',
      type: 'Minimalist Cafe & Bakery',
      location: 'Divisadero St, San Francisco',
      ambiance: 'Warm natural timber, afternoon coastal fog, scent of freshly baked sourdough and roasted espresso'
    },
    metrics: {
      chemistryScore: 94,
      intellectualSynergy: 98,
      lifestyleAlignment: 91,
      vibeMatch: 93,
      overallCompatibility: 95
    },
    sharedInterests: ['Frontier AI alignment', 'Cognitive architecture', 'Architectural minimalism', 'Quiet weekend walks'],
    potentialFrictions: ['Intense shared media scrutiny', 'Both carry immense public responsibility'],
    agentVerdict: {
      personAVerdict: 'Mira is one of the rare people who can switch from discussing transformer loss landscapes to 20th-century sculpture without missing a beat. Extraordinary presence.',
      personBVerdict: 'Sam has a quiet centering calm that cuts straight through noise. No ego performance, just rigorous curiosity and kindness.',
      secondDateLikelihood: 'Definite Yes',
      narrativeSummary: 'An effortless connection rooted in mutual intellectual respect, quiet humor, and a shared appetite for solving humanity\'s most complex puzzles.'
    },
    dialogue: [
      {
        speakerId: 'sam-altman',
        speakerName: 'Sam Altman',
        text: 'Thanks for meeting me here. I usually avoid the usual downtown spots—too many people whispering about compute clusters.',
        innerThought: 'Checking if she appreciates an unhurried, low-key setting over a flashy dinner.',
        timestamp: '15:02',
        reaction: 'Smiles warmly'
      },
      {
        speakerId: 'mira-murati',
        speakerName: 'Mira Murati',
        text: 'Much better this way. I actually spent the morning looking at Brutalist architecture sketches from Milan. Concrete and quiet are underrated.',
        innerThought: 'Relieved. He doesn\'t feel the need to posture or pitch.',
        timestamp: '15:03',
        reaction: 'Sips espresso'
      },
      {
        speakerId: 'sam-altman',
        speakerName: 'Sam Altman',
        text: 'Brutalist architecture has this honesty to it. No decorative veneers hiding structural flaws. Kind of like good code or good people.',
        innerThought: 'She has genuine aesthetic taste beyond tech trends.',
        timestamp: '15:05',
        reaction: 'Nods thoughtfully'
      },
      {
        speakerId: 'mira-murati',
        speakerName: 'Mira Murati',
        text: 'Exactly. People misunderstand Brutalism as cold, but when illuminated by morning light, the textures feel alive. Speaking of honesty—how do you actually decompress on weekends?',
        innerThought: 'Testing if he actually has a life outside the lab or if he burns out.',
        timestamp: '15:07',
        reaction: 'Leans forward'
      },
      {
        speakerId: 'sam-altman',
        speakerName: 'Sam Altman',
        text: 'I head out to the ranch. Tending olive trees, reading old sci-fi paperbacks, driving slow backroads in an old car where nothing has an internet connection. What about you?',
        innerThought: 'Hoping she doesn\'t crave round-the-clock red carpets.',
        timestamp: '15:09',
        reaction: 'Grins'
      },
      {
        speakerId: 'mira-murati',
        speakerName: 'Mira Murati',
        text: 'That sounds idyllic. For me, it’s long coastal drives along Big Sur, indie cinema retrospectives, and finding hole-in-the-wall Italian bakeries. Art keeps the mind supple.',
        innerThought: 'We share the exact same rhythm when the work day ends.',
        timestamp: '15:11',
        reaction: 'Genuine laughter'
      },
      {
        speakerId: 'sam-altman',
        speakerName: 'Sam Altman',
        text: 'Next time, let\'s skip the city altogether. We\'ll drive down Highway 1, grab coffee by the cliffs, and debate whether consciousness is continuous or discrete.',
        innerThought: 'Agent decision: 100% recommending a second date.',
        timestamp: '15:14',
        reaction: 'Warm smile'
      },
      {
        speakerId: 'mira-murati',
        speakerName: 'Mira Murati',
        text: 'Deal. But only if you let me pick the music for the drive.',
        innerThought: 'Agent decision: Unconditional match. The chemistry is calm, intellectual, and deeply grounding.',
        timestamp: '15:15',
        reaction: 'Playful wink'
      }
    ]
  },

  'brian-chesky_sara-blakely': {
    id: 'brian-chesky_sara-blakely',
    personAId: 'brian-chesky',
    personBId: 'sara-blakely',
    venue: {
      name: 'The Living Room at 1 Hotel',
      type: 'Botanical Lounge & Hearth',
      location: 'West Hollywood, CA',
      ambiance: 'Lush hanging ferns, reclaimed timber hearth, warm acoustic jazz guitar'
    },
    metrics: {
      chemistryScore: 92,
      intellectualSynergy: 89,
      lifestyleAlignment: 94,
      vibeMatch: 95,
      overallCompatibility: 93
    },
    sharedInterests: ['Design-led entrepreneurship', 'Storytelling', 'Hospitality', 'Family warmth', 'Playful resilience'],
    potentialFrictions: ['San Francisco vs Atlanta primary base'],
    agentVerdict: {
      personAVerdict: 'Sara has this irrepressible joy and creative audacity that is intoxicating. She makes everyone around her feel valued and alive.',
      personBVerdict: 'Brian is an artist disguised as a CEO. His love for dogs, human warmth, and designing meaningful moments is world-class.',
      secondDateLikelihood: 'Definite Yes',
      narrativeSummary: 'A joyful fireworks display of shared optimism, hospitality, belly laughter, and boundless creative intuition.'
    },
    dialogue: [
      {
        speakerId: 'brian-chesky',
        speakerName: 'Brian Chesky',
        text: 'Sara! I brought my sketchbook just in case our conversation inspired a new chair or a crazy shoe concept.',
        innerThought: 'She has that magnetic energy where you immediately feel at home.',
        timestamp: '19:15',
        reaction: 'Gives a warm hug'
      },
      {
        speakerId: 'sara-blakely',
        speakerName: 'Sara Blakely',
        text: 'Haha, don’t tempt me, Brian! If you see me pull out a pair of scissors, run. I cut the feet off pantyhose and built an empire, so nothing is safe!',
        innerThought: 'He is so genuine and completely unpretentious. Love this.',
        timestamp: '19:16',
        reaction: 'Belly laughs'
      },
      {
        speakerId: 'brian-chesky',
        speakerName: 'Brian Chesky',
        text: 'That’s the hallmark of real design thinking. You saw what was broken about comfort, refused to accept convention, and created joy. I tried doing that with air mattresses in 2007.',
        innerThought: 'We both started from sheer persistence when everyone thought we were crazy.',
        timestamp: '19:18',
        reaction: 'Eyes lighting up'
      },
      {
        speakerId: 'sara-blakely',
        speakerName: 'Sara Blakely',
        text: 'And everyone told you strangers would never sleep in each other’s houses! Look at us. But honestly, what matters more to you now: the company scale, or the feeling in the room?',
        innerThought: 'Checking if he is obsessed with vanity metrics or genuine human impact.',
        timestamp: '19:21',
        reaction: 'Curious smile'
      },
      {
        speakerId: 'brian-chesky',
        speakerName: 'Brian Chesky',
        text: 'The feeling in the room, 100%. If you walked into my house right now, my golden retriever Sophie would greet you at the door, acoustic vinyl would be playing, and we\'d be making homemade pasta.',
        innerThought: 'Sharing my real domestic joy.',
        timestamp: '19:23',
        reaction: 'Warm smile'
      },
      {
        speakerId: 'sara-blakely',
        speakerName: 'Sara Blakely',
        text: 'Stop! You had me at Golden Retriever and pasta! On Sundays, I make pancake art with the kids—though half the time my chocolate chip giraffes look like potatoes.',
        innerThought: 'He loves dogs, cooking, and warmth. Total green flags across the board.',
        timestamp: '19:26',
        reaction: 'Claps hands with glee'
      },
      {
        speakerId: 'brian-chesky',
        speakerName: 'Brian Chesky',
        text: 'Next weekend, you bring the pancake art skills to SF, and I’ll design a custom architectural syrup dispenser. Deal?',
        innerThought: 'Agent decision: Irresistible chemistry. Schedule date two immediately.',
        timestamp: '19:28',
        reaction: 'Beaming smile'
      },
      {
        speakerId: 'sara-blakely',
        speakerName: 'Sara Blakely',
        text: 'Deal! Best date proposition I\'ve heard in a decade.',
        innerThought: 'Agent decision: Exceptional match. High warmth, laughter, shared values.',
        timestamp: '19:29',
        reaction: 'Toasts glasses'
      }
    ]
  },

  'dylan-field_karri-saarinen': {
    id: 'dylan-field_karri-saarinen',
    personAId: 'dylan-field',
    personBId: 'karri-saarinen',
    venue: {
      name: 'Ogawa Coffee Laboratory',
      type: 'Artisanal Kyoto Pour-Over Bar',
      location: 'Shimokitazawa / San Francisco Pop-up',
      ambiance: 'Matte black slate, ceramic dripping carafes, minimal ambient soundscape'
    },
    metrics: {
      chemistryScore: 95,
      intellectualSynergy: 99,
      lifestyleAlignment: 96,
      vibeMatch: 98,
      overallCompatibility: 97
    },
    sharedInterests: ['Design craftsmanship', 'Typography & kerning', 'Nordic & Japanese minimalism', 'Multiplayer tools', 'Ceramics'],
    potentialFrictions: ['Both can be hyper-perfectionist about aesthetics'],
    agentVerdict: {
      personAVerdict: 'Karri understands taste at a cellular level. His commitment to speed, typography, and dark-mode elegance is peerless.',
      personBVerdict: 'Dylan pioneered the browser canvas revolution without losing his gentle spirit and curiosity. A truly kindred soul.',
      secondDateLikelihood: 'Definite Yes',
      narrativeSummary: 'The ultimate design synergy. Two visionary craftspeople finding sublime harmony in aesthetics, calm presence, and shared creative values.'
    },
    dialogue: [
      {
        speakerId: 'dylan-field',
        speakerName: 'Dylan Field',
        text: 'Look at the kerning on this menu. The letter-spacing on "Single Origin Geisha" is actually calibrated to optical balance rather than geometric grids.',
        innerThought: 'Testing if he notices subtle typographic balance.',
        timestamp: '16:04',
        reaction: 'Inspects paper softly'
      },
      {
        speakerId: 'karri-saarinen',
        speakerName: 'Karri Saarinen',
        text: 'I noticed that the moment we sat down. And the paper stock is uncoated 300gsm cotton rag. When someone cares about tiny details, you know the coffee will be pure.',
        innerThought: 'Delightful. He sees the world in pixels and vectors just like I do.',
        timestamp: '16:05',
        reaction: 'Quiet smile'
      },
      {
        speakerId: 'dylan-field',
        speakerName: 'Dylan Field',
        text: 'That\'s what I love about Linear. You didn\'t build another bloated enterprise tool—you built an instrument for creators. Fast, tactile, respectful of focus.',
        innerThought: 'Deep professional and aesthetic admiration.',
        timestamp: '16:08',
        reaction: 'Smiles'
      },
      {
        speakerId: 'karri-saarinen',
        speakerName: 'Karri Saarinen',
        text: 'Thank you Dylan. Figma proved that software could be as responsive as pen on paper. Beyond tools though... how do you reset your mind when the screens go dark?',
        innerThought: 'Wanting to see his relationship to silence and hands-on tactile craft.',
        timestamp: '16:10',
        reaction: 'Leans back peacefully'
      },
      {
        speakerId: 'dylan-field',
        speakerName: 'Dylan Field',
        text: 'Pottery wheel throwing. When you\'re centering wet clay, you can\'t think about browser WebGL shaders. You just feel the centrifugal force and balance. You do Finnish saunas, right?',
        innerThought: 'Hoping he shares a love for physical, meditative grounding.',
        timestamp: '16:13',
        reaction: 'Warm eyes'
      },
      {
        speakerId: 'karri-saarinen',
        speakerName: 'Karri Saarinen',
        text: 'Every week. Wood-fired heat, birch whisks, then jumping into freezing lake water. It strips away all artificial pretension. Clay and cold water—we have good grounding.',
        innerThought: 'Unprecedented wavelength match. No noise, total presence.',
        timestamp: '16:16',
        reaction: 'Nods slowly with deep contentment'
      },
      {
        speakerId: 'dylan-field',
        speakerName: 'Dylan Field',
        text: 'I have a collection of mid-century Japanese ceramic tea bowls at home. Would you like to check them out and brew some ceremonial matcha?',
        innerThought: 'Agent decision: Clear soulmate-level alignment.',
        timestamp: '16:19',
        reaction: 'Inviting smile'
      },
      {
        speakerId: 'karri-saarinen',
        speakerName: 'Karri Saarinen',
        text: 'Nothing would make me happier. Lead the way.',
        innerThought: 'Agent decision: 98% compatibility. Deep peace, shared aesthetic mastery, tranquil companionship.',
        timestamp: '16:20',
        reaction: 'Stands up with gentle warmth'
      }
    ]
  }
};

// Generates dynamic dates between ANY two candidates (including user-created agents)
export function simulateDateBetweenAgents(personA: Person, personB: Person): DateSimulation {
  const pairKeyA = `${personA.id}_${personB.id}`;
  const pairKeyB = `${personB.id}_${personA.id}`;

  if (HIGHLIGHT_DATES[pairKeyA]) return HIGHLIGHT_DATES[pairKeyA];
  if (HIGHLIGHT_DATES[pairKeyB]) {
    const orig = HIGHLIGHT_DATES[pairKeyB];
    return {
      ...orig,
      id: pairKeyA,
      personAId: personA.id,
      personBId: personB.id
    };
  }

  // Compute synergy attributes
  const sharedInterests = personA.agent.interests.filter(i =>
    personB.agent.interests.some(bi => bi.toLowerCase().includes(i.toLowerCase().slice(0, 5)) || i.toLowerCase().includes(bi.toLowerCase().slice(0, 5)))
  );
  if (sharedInterests.length === 0) {
    sharedInterests.push(personA.agent.interests[0] || 'Intellectual growth', personB.agent.interests[0] || 'Modern innovation');
  }

  // Compute metrics
  const sharedHobbies = personA.agent.hobbies.filter(h =>
    personB.agent.hobbies.some(bh => bh.toLowerCase().includes(h.toLowerCase().slice(0, 4)))
  );
  
  const socialEnergyDiff = personA.extractedSources.instagramSummary.socialEnergy === personB.extractedSources.instagramSummary.socialEnergy ? 15 : 8;
  const baseScore = Math.min(96, Math.max(72, 70 + sharedInterests.length * 5 + sharedHobbies.length * 6 + socialEnergyDiff));

  const venues = [
    {
      name: 'The Perch Botanical Conservatory',
      type: 'Glass Greenhouse & Aperitivo Bar',
      location: 'Presidio Heights',
      ambiance: 'Tropical flora, candlelit stone tables, gentle ambient lo-fi music'
    },
    {
      name: 'Velvet & Vinyl Listening Lounge',
      type: 'Hi-Fi Audio Bar',
      location: 'SoHo, New York',
      ambiance: 'Analog tube amplifiers, vintage Japanese jazz records, warm amber lighting'
    },
    {
      name: 'Komorebi Tea Sanctuary',
      type: 'Zen Courtyard & Matcha Bar',
      location: 'Hayes Valley',
      ambiance: 'Bamboo water fountains, minimalist cedar wood, serene tranquil atmosphere'
    }
  ];

  const venue = venues[(personA.name.length + personB.name.length) % venues.length];

  const personAFood = personA.extractedSources.instagramSummary.coffeeOrFoodRitual || 'artisanal pour-over coffee';
  const personBFood = personB.extractedSources.instagramSummary.coffeeOrFoodRitual || 'a good espresso and pastries';
  const personASkill = personA.extractedSources.linkedinSummary.skills?.[0] || 'crafting elegant systems';
  const personBSkill = personB.extractedSources.linkedinSummary.skills?.[0] || 'solving hard engineering problems';

  const turns: DateDialogueTurn[] = [
    {
      speakerId: personA.id,
      speakerName: personA.name,
      text: `It's so great to finally meet you in person. Seeing your focus in ${personB.extractedSources.linkedinSummary.role} and your work with ${personBSkill} caught my eye, but finding out you're into ${personB.agent.hobbies[0] || 'creative crafts'} made me really excited for this.`,
      innerThought: `Checking if our energy matches in real life beyond social footprints.`,
      timestamp: '18:30',
      reaction: 'Warm smile'
    },
    {
      speakerId: personB.id,
      speakerName: personB.name,
      text: `Likewise! I was reading about your experience with ${personASkill} and ${personA.location}... but honestly, what stood out was your love for ${personA.agent.hobbies[0] || 'authentic crafts'}. That shows real taste.`,
      innerThought: `They seem genuine, unpretentious, and completely grounded.`,
      timestamp: '18:32',
      reaction: 'Eyes lighting up'
    },
    {
      speakerId: personA.id,
      speakerName: personA.name,
      text: `I've always believed that how we spend our unstructured hours tells the real story. For me, weekends are all about ${personAFood}. My core dating philosophy is: "${personA.agent.datePhilosophy}"`,
      innerThought: `Putting our core date value on the table early to see how they respond.`,
      timestamp: '18:35',
      reaction: 'Leans forward attentively'
    },
    {
      speakerId: personB.id,
      speakerName: personB.name,
      text: `That hits so close to home! For me, "${personB.agent.datePhilosophy}" And having ${personBFood} in the mix makes everything better. We get so caught up in our screens that slowing down together is the real luxury.`,
      innerThought: `Huge relief—we value the exact same conversational pacing and warmth.`,
      timestamp: '18:38',
      reaction: 'Nods in agreement'
    },
    {
      speakerId: personA.id,
      speakerName: personA.name,
      text: `What's a quirky obsession or rabbit hole you've been down lately that you don't usually get to talk about with most people?`,
      innerThought: `Testing depth and curiosity over superficial small talk.`,
      timestamp: '18:41',
      reaction: 'Curious smile'
    },
    {
      speakerId: personB.id,
      speakerName: personB.name,
      text: `Honestly? Deep-diving into ${personB.agent.interests[0] || 'unconventional history'} and listening to ${personB.extractedSources.instagramSummary.musicTaste?.[0] || 'great indie music'} on repeat. Most people's eyes glaze over, but I could talk about it for hours!`,
      innerThought: `Taking a leap of vulnerability to see if they match my intensity.`,
      timestamp: '18:44',
      reaction: 'Laughs freely'
    },
    {
      speakerId: personA.id,
      speakerName: personA.name,
      text: `Glaze over? I literally think about that all the time! We definitely need to order another round and unpack this properly.`,
      innerThought: `Agent verdict: Electric synergy. Clear mutual spark detected.`,
      timestamp: '18:47',
      reaction: 'Toasts drinks'
    },
    {
      speakerId: personB.id,
      speakerName: personB.name,
      text: `Deal. Consider our second date officially in the planning stages!`,
      innerThought: `Agent verdict: 100% green light. Mutual spark and high compatibility confirmed.`,
      timestamp: '18:49',
      reaction: 'Beaming smile'
    }
  ];

  return {
    id: pairKeyA,
    personAId: personA.id,
    personBId: personB.id,
    venue,
    metrics: {
      chemistryScore: baseScore,
      intellectualSynergy: Math.min(99, baseScore + 2),
      lifestyleAlignment: Math.max(68, baseScore - 3),
      vibeMatch: Math.min(98, baseScore + 1),
      overallCompatibility: baseScore
    },
    sharedInterests,
    potentialFrictions: [
      `Different communication cadences (${personA.agent.communicationStyle.slice(0, 20)} vs ${personB.agent.communicationStyle.slice(0, 20)})`,
      'Balancing high-ambition schedules'
    ],
    agentVerdict: {
      personAVerdict: `${personB.name}'s wit and grounded perspective made the date fly by. Strong mutual attraction.`,
      personBVerdict: `${personA.name} brought genuine presence, zero pretense, and captivating intellectual curiosity.`,
      secondDateLikelihood: baseScore > 85 ? 'Definite Yes' : 'Cautious Yes',
      narrativeSummary: `A fruitful meeting of minds that sparked genuine chemistry over shared curiosity and balanced life perspectives.`
    },
    dialogue: turns
  };
}

// Computes pairwise compatibility rankings for a given person against all other candidates
export function computeRankingsForPerson(targetPerson: Person, candidatePool: Person[] = CANDIDATES): CompatibilityRankItem[] {
  const others = candidatePool.filter(p => p.id !== targetPerson.id);

  const scored = others.map(other => {
    const simulation = simulateDateBetweenAgents(targetPerson, other);
    const intel = simulation.metrics.intellectualSynergy;
    const life = simulation.metrics.lifestyleAlignment;
    const vibe = simulation.metrics.vibeMatch;
    const overall = simulation.metrics.overallCompatibility;

    return {
      targetPerson: other,
      rank: 0,
      overallScore: overall,
      breakdown: {
        intellectual: intel,
        lifestyle: life,
        emotional: vibe
      },
      compatibilityRationale: simulation.agentVerdict.narrativeSummary,
      sampleDateId: simulation.id
    };
  });

  // Sort descending by overall score
  scored.sort((a, b) => b.overallScore - a.overallScore);

  // Assign ranks 1 to N
  return scored.map((item, idx) => ({
    ...item,
    rank: idx + 1
  }));
}
