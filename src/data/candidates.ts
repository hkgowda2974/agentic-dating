import { Person } from '../types/dating';

export const CANDIDATES: Person[] = [
  {
    id: 'sam-altman',
    name: 'Sam Altman',
    age: 39,
    location: 'San Francisco, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    bio: 'Technologist, investor, and builder working on artificial general intelligence and energy abundance.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/samaltman',
      instagram: 'https://www.instagram.com/sama'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'CEO at OpenAI | Former President at Y Combinator',
        role: 'Chief Executive Officer',
        industry: 'Artificial Intelligence & Venture Capital',
        professionalValues: ['High-agency ambition', 'Civilizational impact', 'Decentralized energy', 'Rigorous scientific inquiry'],
        intellectualFocus: 'AGI governance, compute economics, nuclear fusion (Helion), human longevity'
      },
      instagramSummary: {
        handle: '@sama',
        vibe: 'Minimalist, agrarian quietude, subtle humor, contemplative nature',
        aesthetic: 'Ranch landscapes, macro photography of nature, unpretentious weekend reflections',
        lifestyleKeywords: ['Ranching', 'Quiet weekends', 'Classic cars', 'Book stacks', 'Mountain air'],
        socialEnergy: 'Introvert'
      }
    },
    agent: {
      needs: [
        'A partner with profound independent agency and their own obsessive creative calling',
        'Deep conversational calm away from tech hype and media spectacle',
        'Low emotional drama with high philosophical curiosity'
      ],
      hobbies: [
        'Orchard tending & organic gardening',
        'Reading speculative fiction and economic history',
        'High-desert road trips in vintage vehicles',
        'Formula 1 analytics'
      ],
      interests: [
        'Post-scarcity societal design',
        'Deep tech breakthroughs & quantum computing',
        'Architectural minimalism',
        'Ancient Mediterranean history'
      ],
      communicationStyle: 'Direct, thoughtful, dry humor, low-filler, attentive listener',
      dealbreakers: ['Clout chasing', 'Performative cynicism', 'Need for constant superficial affirmation'],
      loveLanguage: 'Acts of Service & Quality Time',
      energyLevel: 'Quietly intense, grounding, highly reflective',
      datePhilosophy: 'A great date feels like stepping outside the world clock into an honest, unscripted conversation.',
      humorStyle: 'Deadpan observational wit'
    }
  },
  {
    id: 'mira-murati',
    name: 'Mira Murati',
    age: 35,
    location: 'San Francisco, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'Mechanical engineer and AI leader passionate about neuro-technology, generative alignment, and product elegance.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/miramurati',
      instagram: 'https://www.instagram.com/miramurati'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'AI Executive & Technologist | Former CTO at OpenAI',
        role: 'AI Technology Executive',
        industry: 'Frontier AI & Aerospace Engineering',
        professionalValues: ['Engineering rigor', 'Interdisciplinary collaboration', 'Ethical deployment', 'Quiet craftsmanship'],
        intellectualFocus: 'Multimodal models, alignment science, intuitive human-computer interfaces'
      },
      instagramSummary: {
        handle: '@miramurati',
        vibe: 'Sophisticated, European cultural depth, art house cinema, architectural form',
        aesthetic: 'Monochrome galleries, film grain, coastal cliffs, opera programs, mid-century modern furniture',
        lifestyleKeywords: ['Contemporary art', 'French philosophy', 'Pilates', 'Chamber music', 'Espresso culture'],
        socialEnergy: 'Ambivert'
      }
    },
    agent: {
      needs: [
        'A partner who appreciates both rigorous intellectual depth and artistic beauty',
        'Emotional poise under scrutiny and mutual respect for privacy',
        'Subtle, understated romance over grand gestures'
      ],
      hobbies: [
        'Attending independent film retrospectives',
        'Specialty pour-over coffee cupping',
        'Exploring modernist architecture & Brutalist landmarks',
        'Long coastal walks along Big Sur'
      ],
      interests: [
        'Intersection of linguistics and cognition',
        'Renaissance poetry and modern sculpture',
        'Complex systems dynamics',
        'Aerospace engineering heritage'
      ],
      communicationStyle: 'Warm yet measured, articulate, values precision of language',
      dealbreakers: ['Superficial tech evangelism', 'Disrespect for boundaries', 'Lack of cultural curiosity'],
      loveLanguage: 'Quality Time & Intellectual Sparring',
      energyLevel: 'Composed, elegant, perceptive',
      datePhilosophy: 'A date should feel like discovering a rare museum exhibition together after hours.',
      humorStyle: 'Dry, witty, and subtly playful'
    }
  },
  {
    id: 'andrej-karpathy',
    name: 'Andrej Karpathy',
    age: 37,
    location: 'Palo Alto, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Building Eureka Labs. Exploring first-principles AI education, neural networks, and computer vision.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/andrej-karpathy-9a650716',
      instagram: 'https://www.instagram.com/karpathy'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'Founder at Eureka Labs | Former Director of AI at Tesla | OpenAI Founding Member',
        role: 'Founder & AI Scientist',
        industry: 'Deep Learning & Education',
        professionalValues: ['First-principles clarity', 'Open science', 'Radical simplification', 'Relentless tinkering'],
        intellectualFocus: 'Transformers from scratch, autonomous driving, cognitive micro-curricula'
      },
      instagramSummary: {
        handle: '@karpathy',
        vibe: 'Curious geek adventurer, rubik cubes, mechanical keyboards, hiking trails, biohacking',
        aesthetic: 'Trail panoramas, neat terminal setups, climbing gym walls, physics diagrams on napkins',
        lifestyleKeywords: ['Bouldering', 'Trail running', 'Synthesizers', 'Sci-fi book clubs', 'Espresso calibration'],
        socialEnergy: 'Introvert'
      }
    },
    agent: {
      needs: [
        'Intellectual curiosity where explaining "how things work" is joyful, not exhausting',
        'Space for solitary deep focus followed by excited sharing of new discoveries',
        'Playful, collaborative companionship'
      ],
      hobbies: [
        'Indoor bouldering and rock climbing',
        'Building mechanical keyboards and soldering micro-controllers',
        'Teaching complex topics through accessible YouTube videos',
        'Hiking through redwoods with an audiobook'
      ],
      interests: [
        'Neural architectures & neuroscience',
        'Information theory and cellular automata',
        'Retro-gaming and emulation',
        'Sci-fi audiobooks (Three-Body Problem, Greg Egan)'
      ],
      communicationStyle: 'Enthusiastic, clear, pedagogical, uses hand gestures and metaphors',
      dealbreakers: ['Anti-intellectualism', 'Cynical gatekeeping', 'Excessive materialism'],
      loveLanguage: 'Words of Affirmation & Shared Projects',
      energyLevel: 'High cognitive energy, friendly, approachable',
      datePhilosophy: 'Grab two boba teas and walk for three hours dissecting how the universe functions.',
      humorStyle: 'Nerd puns, self-deprecating engineering jokes'
    }
  },
  {
    id: 'guillermo-rauch',
    name: 'Guillermo Rauch',
    age: 33,
    location: 'San Francisco, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    bio: 'Founder and CEO of Vercel. Obsessed with frontend performance, developer experience, and web typography.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/rauchg',
      instagram: 'https://www.instagram.com/rauchg'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'CEO & Founder at Vercel | Creator of Next.js & Socket.io',
        role: 'Chief Executive Officer & Founder',
        industry: 'Cloud Infrastructure & Web Platforms',
        professionalValues: ['Zero-latency speed', 'Design-driven engineering', 'Simplicity as a virtue', 'Global scale'],
        intellectualFocus: 'Edge computing, UI responsiveness, server-driven architectures'
      },
      instagramSummary: {
        handle: '@rauchg',
        vibe: 'Sleek, cosmopolitan, Argentine roots, culinary aficionado, global traveler',
        aesthetic: 'Sharp minimalist typography, steakhouse dinners, airport lounges, espresso crema',
        lifestyleKeywords: ['Mate tea', 'Argentine asado', 'Swiss typography', 'Fine dining', 'Aviation'],
        socialEnergy: 'Extrovert'
      }
    },
    agent: {
      needs: [
        'A dynamic partner who moves fast and shares an appreciation for craftsmanship and speed',
        'Someone who can hold their own in lively dinner conversations across international cities',
        'Warmth and cultural roots'
      ],
      hobbies: [
        'Brewing artisanal yerba mate and specialty espresso',
        'Exploring Michelin-starred culinary innovations',
        'Collecting Swiss modernist design posters',
        'Tennis and high-intensity interval training'
      ],
      interests: [
        'Frontend web architecture and edge micro-frameworks',
        'Aviation logistics and supersonic travel',
        'Venture strategy and developer ecosystems',
        'South American literature (Borges, Cortázar)'
      ],
      communicationStyle: 'Charismatic, decisive, optimistic, articulate, quick-paced',
      dealbreakers: ['Sluggishness in decision making', 'Messy aesthetics', 'Resistance to travel'],
      loveLanguage: 'Quality Time & Experiential Gifts',
      energyLevel: 'Dynamic, high-momentum, uplifting',
      datePhilosophy: 'A candlelit rooftop dinner with great wine, followed by a late-night dessert walk discussing wild ideas.',
      humorStyle: 'Quick, cosmopolitan banter'
    }
  },
  {
    id: 'brian-chesky',
    name: 'Brian Chesky',
    age: 43,
    location: 'San Francisco, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    bio: 'Co-founder and CEO of Airbnb. Industrial designer at heart, passionate about hospitality, travel, and belonging.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/brianchesky',
      instagram: 'https://www.instagram.com/bchesky'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'Co-founder and CEO at Airbnb | Designer',
        role: 'Co-founder & CEO',
        industry: 'Hospitality & Consumer Tech',
        professionalValues: ['Design-led leadership', 'Unreasonable hospitality', 'Belonging anywhere', 'Storytelling'],
        intellectualFocus: 'The future of remote living, communal architecture, experiential luxury'
      },
      instagramSummary: {
        handle: '@bchesky',
        vibe: 'Warm host, golden retrievers, mid-century homes, architectural wonders, design sketches',
        aesthetic: 'Cozy timber cabins, sunset verandas, golden retriever cuddles, design prototypes',
        lifestyleKeywords: ['Dogs (Golden retrievers)', 'Interior design', 'Weightlifting', 'Hosting dinner parties', 'Historic homes'],
        socialEnergy: 'Ambivert'
      }
    },
    agent: {
      needs: [
        'Deep emotional warmth, empathy, and a genuine love for human connection and hospitality',
        'A love for animals (especially dogs) and aesthetic living environments',
        'Someone who sees travel not as a vacation, but as an expansion of identity'
      ],
      hobbies: [
        'Throwing bespoke dinner parties with friends and artists',
        'Drawing industrial design sketches and concept rooms',
        'Heavy compound weightlifting and fitness',
        'Weekend road trips to architectural wonders with his dog Sophie'
      ],
      interests: [
        'Bauhaus and mid-century design movements',
        'Walt Disney\'s creative process and immersive worldbuilding',
        'Urban design and pedestrian-first cities',
        'The psychology of hospitality and connection'
      ],
      communicationStyle: 'Vulnerable, narrative-driven, sincere, attentive, deeply curious about people\'s backstories',
      dealbreakers: ['Inhospitality', 'Rudeness to service staff', 'Sterile or soulless taste'],
      loveLanguage: 'Quality Time & Physical Touch',
      energyLevel: 'Warm, grounded, deeply present',
      datePhilosophy: 'Cooking a home-cooked meal in an incredible historic kitchen with great music playing in the background.',
      humorStyle: 'Wholesome, situational, self-effacing'
    }
  },
  {
    id: 'marques-brownlee',
    name: 'Marques Brownlee',
    age: 30,
    location: 'Kearny, NJ',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    bio: 'Creator behind MKBHD. Professional Ultimate Frisbee player, EV enthusiast, and consumer tech reviewer.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/marques-brownlee-4b3607172',
      instagram: 'https://www.instagram.com/mkbhd'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'Host & Creator at MKBHD | Professional Athlete | Studio Head',
        role: 'Creator & Executive Producer',
        industry: 'Consumer Technology & Media Production',
        professionalValues: ['Uncompromising quality', 'Crisp audio-visual perfection', 'Authentic independence', 'Athletic discipline'],
        intellectualFocus: 'Camera sensor optics, EV charging networks, industrial product ergonomics'
      },
      instagramSummary: {
        handle: '@mkbhd',
        vibe: 'Matte black everything, athletic tournaments, retro sneakers, red accents, studio lighting',
        aesthetic: 'Crisp 8K stills, frisbee layouts in mid-air, supercar cockpits, clean sneaker rotations',
        lifestyleKeywords: ['Ultimate frisbee', 'Sneakerhead', 'Matte black', 'Golf', 'EV road trips'],
        socialEnergy: 'Ambivert'
      }
    },
    agent: {
      needs: [
        'A partner with athletic energy, grounded emotional stability, and self-confidence',
        'Mutual respect for creative passion without overwhelming studio life',
        'Chill, relaxed downtime away from the camera'
      ],
      hobbies: [
        'Competitive Ultimate Frisbee tournaments (AUDL)',
        'Driving electric sports cars on winding country roads',
        'Curating vintage retro sneakers (Jordan 1s)',
        'Casual golf rounds with close friends'
      ],
      interests: [
        'High-end cinema camera rigs (RED, Arri)',
        'Electric vehicle battery chemistry and autonomous driving',
        'Acoustics and audio engineering',
        'Industrial finish materials and product ergonomics'
      ],
      communicationStyle: 'Smooth, calm, articulate, measured, highly perceptive',
      dealbreakers: ['Excessive drama', 'Flakiness', 'Lack of personal passions'],
      loveLanguage: 'Quality Time & Acts of Service',
      energyLevel: 'Balanced, steady, athletic, highly observant',
      datePhilosophy: 'A relaxed competitive activity like indoor go-karting or topgolf, followed by milkshakes and great conversation.',
      humorStyle: 'Low-key, ironic, knowing smiles'
    }
  },
  {
    id: 'sara-blakely',
    name: 'Sara Blakely',
    age: 53,
    location: 'Atlanta, GA',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    bio: 'Founder of Spanx and Sneex. Believer in intuition, female entrepreneurship, laughing at yourself, and courage.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/sarablakely',
      instagram: 'https://www.instagram.com/sarablakely'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'Founder & Executive Chairwoman at SPANX | Founder at Sneex | Philanthropist',
        role: 'Founder & Entrepreneur',
        industry: 'Fashion Apparel & Consumer Retail',
        professionalValues: ['Failure is just trying', 'Humor as resilience', 'Female empowerment', 'Bold intuition'],
        intellectualFocus: 'Comfort engineering, patent innovation, bootstrapping consumer empires'
      },
      instagramSummary: {
        handle: '@sarablakely',
        vibe: 'Hilarious, vibrant, family antics, pancake art, dancing in the kitchen, high-heeled sneakers',
        aesthetic: 'Bright colors, messy real-life snapshots, motivational journals, colorful party hats',
        lifestyleKeywords: ['Pancake art', 'Kitchen dance-offs', 'Charity auctions', 'Journaling', 'Costume parties'],
        socialEnergy: 'Extrovert'
      }
    },
    agent: {
      needs: [
        'Someone who can belly laugh at absurd situations and doesn\'t take themselves too seriously',
        'A cheerleader of dreams who celebrates big bold entrepreneurial leaps',
        'Unconditional optimism and emotional generosity'
      ],
      hobbies: [
        'Creating elaborate weekend pancake art with secret shapes',
        'Spontaneous kitchen dance parties',
        'Scrapbooking life lessons and journaling gratitude',
        'Hosting themed costume dinner parties'
      ],
      interests: [
        'Footwear biomechanics and ergonomic textiles',
        'History of female inventors and trailblazers',
        'Mindset training and visualization techniques',
        'Philanthropic educational initiatives'
      ],
      communicationStyle: 'Radiant, hilarious, storytelling master, warmly encouraging',
      dealbreakers: ['Stiff pretentiousness', 'Pessimism', 'Embarrassment over having fun'],
      loveLanguage: 'Words of Affirmation & Physical Touch',
      energyLevel: 'Infectious high energy, warm, bubbly',
      datePhilosophy: 'Doing something utterly goofy together where we both look ridiculous and can\'t stop laughing.',
      humorStyle: 'Slapstick, self-deprecating, joyous'
    }
  },
  {
    id: 'clem-delangue',
    name: 'Clem Delangue',
    age: 36,
    location: 'New York, NY',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    bio: 'Co-founder and CEO of Hugging Face. Democratizing good machine learning with an open-source spirit.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/clemdelangue',
      instagram: 'https://www.instagram.com/clemdelangue'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'Co-founder & CEO at Hugging Face (🤗)',
        role: 'Chief Executive Officer',
        industry: 'Open Source AI & Machine Learning',
        professionalValues: ['Open source transparency', 'Community first', 'Playfulness in science', 'Collaborative progress'],
        intellectualFocus: 'Open model weights, distributed science, community benchmarks'
      },
      instagramSummary: {
        handle: '@clemdelangue',
        vibe: 'French warmth, cycling across Paris/Brooklyn, yellow hugging face emojis, picnic wine',
        aesthetic: 'Sunny city parks, yellow accents, vintage bicycles, outdoor coffee carts, cozy bookstores',
        lifestyleKeywords: ['Biking', 'French pastries', 'Natural wine', 'Open science', 'Indie bookstores'],
        socialEnergy: 'Extrovert'
      }
    },
    agent: {
      needs: [
        'A joyful, warm-hearted partner who loves community, openness, and spontaneous adventures',
        'Shared appreciation for European ease and New York vibrancy',
        'Kindness over cynicism'
      ],
      hobbies: [
        'Gravel bike rides through urban trails and river paths',
        'Tasting artisanal croissants and sourdough breads',
        'Discovering quirky independent bookstores in Lower Manhattan',
        'Hosting open-invitation community park picnics'
      ],
      interests: [
        'Collaborative open-source scientific paradigms',
        'Philosophy of technology accessibility',
        'French cinema and graphic novels (Bande Dessinée)',
        'Urban transit infrastructure'
      ],
      communicationStyle: 'Warm, enthusiastic, charming, uses smiles and positive affirmation',
      dealbreakers: ['Secretive or closed-minded attitudes', 'Hostility to sharing', 'Arrogance'],
      loveLanguage: 'Quality Time & Receiving Gifts (thoughtful little books)',
      energyLevel: 'Uplifting, friendly, sunny',
      datePhilosophy: 'A leisurely bike ride across the Williamsburg Bridge to a sunny park bench with fresh cheese and bread.',
      humorStyle: 'Charming French wit, playful'
    }
  },
  {
    id: 'lucy-guo',
    name: 'Lucy Guo',
    age: 29,
    location: 'Miami, FL',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    bio: 'Founder of Passes. Co-founder of Scale AI. Forbes 30 under 30. High-octane builder, fitness junkie, and world traveler.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/lucy-guo-92040b76',
      instagram: 'https://www.instagram.com/lucyguo'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'CEO & Founder at Passes | Co-Founder at Scale AI | General Partner at Backend Capital',
        role: 'Founder & CEO',
        industry: 'Creator Economy & Venture Capital',
        professionalValues: ['Relentless hustle', 'Product market fit obsession', 'High-energy execution', 'Independence'],
        intellectualFocus: 'Direct monetization for creators, viral growth loops, micro-transactions'
      },
      instagramSummary: {
        handle: '@lucyguo',
        vibe: 'Miami glam, festival fashion, yacht days, hyper-intense workouts, exotic travel destinations',
        aesthetic: 'Neon Miami skylines, gym PRs, infinity pools, festival rave attire, sleek sports cars',
        lifestyleKeywords: ['Weightlifting PRs', 'EDM festivals', 'Miami nightlife', 'Scuba diving', 'Angel investing'],
        socialEnergy: 'Extrovert'
      }
    },
    agent: {
      needs: [
        'A high-stamina partner who can keep pace with an unstoppable schedule and ambitious vision',
        'Someone financially and emotionally self-reliant who isn\'t intimidated by success',
        'Adventurous thrill-seeking spirit'
      ],
      hobbies: [
        'Competitive crossfit and heavy lifting',
        'Attending international electronic music festivals (Tomorrowland, Ultra)',
        'Scuba diving in Caribbean coral reefs',
        'Angel investing in fearless student founders'
      ],
      interests: [
        'Creator monetization models & platform economics',
        'Fitness nutrition & biohacking recovery',
        'Contemporary digital art and NFTs',
        'Aviation and private pilot licenses'
      ],
      communicationStyle: 'Direct, unfiltered, charismatic, fast-talking, energetic',
      dealbreakers: ['Insecurity', 'Lack of ambition', 'Sloth or couch-potato tendencies'],
      loveLanguage: 'Quality Time & Shared Adventures',
      energyLevel: 'Extremely high, electric, adrenaline-fueled',
      datePhilosophy: 'A sunrise ocean jet ski ride followed by a high-energy brunch and trading business ideas.',
      humorStyle: 'Sassy, bold, teasing'
    }
  },
  {
    id: 'alexandr-wang',
    name: 'Alexandr Wang',
    age: 27,
    location: 'San Francisco, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    bio: 'Founder and CEO of Scale AI. MIT math prodigy, violinist, and national defense tech advocate.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/alexandr-wang',
      instagram: 'https://www.instagram.com/alexandrwang'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'CEO & Founder at Scale AI',
        role: 'Founder & Chief Executive Officer',
        industry: 'Data Foundry for Frontier AI',
        professionalValues: ['Data flywheels', 'National security leadership', 'Speed as a moat', 'Mathematical precision'],
        intellectualFocus: 'RLHF annotation pipelines, enterprise model evaluation, sovereign AI clouds'
      },
      instagramSummary: {
        handle: '@alexandrwang',
        vibe: 'Youthful prodigy, classical violin, ski slopes, Washington DC policy dinners, sleek hoodies',
        aesthetic: 'Alpine snow peaks, violin sheet music, tech summits, sleek private jets, minimalist tech HQ',
        lifestyleKeywords: ['Violin performance', 'Skiing in Utah', 'Geopolitics', 'Classical concerts', 'Chess'],
        socialEnergy: 'Ambivert'
      }
    },
    agent: {
      needs: [
        'Intellectual brilliance without pretension',
        'A grounding presence who can navigate both high-stakes geopolitical dinners and cozy fireside chats',
        'Shared dedication to continuous personal mastery'
      ],
      hobbies: [
        'Playing classical violin concertos (Brahms, Mendelssohn)',
        'Double-black diamond skiing in Deer Valley and Niseko',
        'Blitz chess games on Lichess',
        'Reading international grand strategy books'
      ],
      interests: [
        'Semiconductor supply chain geopolitics',
        'Algorithmic game theory and pure mathematics',
        'Acoustics of antique Italian violins (Stradivarius)',
        'Aerospace defense telemetry'
      ],
      communicationStyle: 'Sharp, rapid analytical thinker, polite, surprisingly humble in one-on-one settings',
      dealbreakers: ['Lack of work ethic', 'Anti-technological fatalism', 'Disloyalty'],
      loveLanguage: 'Quality Time & Deep Talks',
      energyLevel: 'Focused, disciplined, intensely bright',
      datePhilosophy: 'Attending an orchestra concert together and then discussing the performance over hot ramen at midnight.',
      humorStyle: 'Subtle math jokes, wry observational humor'
    }
  },
  {
    id: 'rachel-woods',
    name: 'Rachel Woods',
    age: 32,
    location: 'Austin, TX',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    bio: 'Founder of The AI Exchange. Former Meta Data Scientist. Making AI practical and demystifying automated workflows.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/rachel-woods-ai',
      instagram: 'https://www.instagram.com/therachelwoods'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'Founder & CEO at The AI Exchange | Ex-Meta Data Scientist',
        role: 'Founder & Educator',
        industry: 'Applied AI & Workflow Automation',
        professionalValues: ['Pragmatic utility', 'Clarity over hype', 'Empowering non-technical creators', 'Continuous learning'],
        intellectualFocus: 'Prompt engineering patterns, agentic work automation, small business AI adoption'
      },
      instagramSummary: {
        handle: '@therachelwoods',
        vibe: 'Sunny Austin casual, warm creator tutorials, paddleboarding on Lady Bird Lake, breakfast tacos',
        aesthetic: 'Warm wood desk setups, outdoor Texas sunshine, bright pastel aesthetics, craft beers',
        lifestyleKeywords: ['Paddleboarding', 'Austin live music', 'Specialty matcha', 'Golden retrievers', 'Hiking'],
        socialEnergy: 'Ambivert'
      }
    },
    agent: {
      needs: [
        'A pragmatic, emotionally intelligent partner who values real-life balance over endless tech echo chambers',
        'Someone who loves outdoor activities and appreciates good food and music',
        'Honest and clear communication'
      ],
      hobbies: [
        'Stand-up paddleboarding at sunset on Lady Bird Lake',
        'Scouting the best indie breakfast taco trucks in Austin',
        'Baking artisanal sourdough loaves on weekends',
        'Listening to live Americana and indie acoustic sets'
      ],
      interests: [
        'Practical productivity and cognitive load reduction',
        'Data visualization storytelling',
        'Landscape horticulture and native Texas plants',
        'Behavioral psychology of habit formation'
      ],
      communicationStyle: 'Warm, approachable, empathetic, highly structured yet casual',
      dealbreakers: ['Condescending tech-bro behavior', 'Chronic cynicism', 'Inability to unplug on weekends'],
      loveLanguage: 'Quality Time & Words of Affirmation',
      energyLevel: 'Sunny, calm, engaging, friendly',
      datePhilosophy: 'Tacos by the river, a scenic outdoor walk, and laughing about life’s weird coincidences.',
      humorStyle: 'Relatable, bright, light-hearted'
    }
  },
  {
    id: 'pieter-levels',
    name: 'Pieter Levels',
    age: 38,
    location: 'Amsterdam & Global Nomad',
    avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
    bio: 'Indie maker. Built Nomad List, Remote OK, Photo AI, and Interior AI. Living out of a carry-on backpack.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/pieter-levels-23a54b32',
      instagram: 'https://www.instagram.com/levelsio'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'Solo Founder at Nomad List, Remote OK & PhotoAI',
        role: 'Solo Bootstrapper',
        industry: 'Indie Software & AI Generative Tools',
        professionalValues: ['Radical autonomy', 'Single-file PHP simplicity', 'Bootstrapped freedom', 'Zero VC interference'],
        intellectualFocus: 'Automated indie revenue, diffusion model fine-tuning, global nomad cost of living'
      },
      instagramSummary: {
        handle: '@levelsio',
        vibe: 'Nomadic freedom, rooftop co-working in Lisbon/Bali, lo-fi electronic beats, carry-on bag packing',
        aesthetic: 'Neon night markets in Bangkok, laptop screens overlooking ocean waves, vintage synth gear',
        lifestyleKeywords: ['One-bag travel', 'Electronic music production', 'Night markets', 'Surfing', 'Espresso'],
        socialEnergy: 'Introvert'
      }
    },
    agent: {
      needs: [
        'A partner with a portable, independent life who loves spontaneous international travel',
        'Low friction, zero materialism, allergic to bureaucracy and corporate politics',
        'Someone comfortable with unconventional life choices'
      ],
      hobbies: [
        'Producing deep house and lo-fi tracks on Ableton',
        'Optimizing ultra-lightweight travel gear into one 20L backpack',
        'Exploring street food stalls in Chiang Mai and Tokyo',
        'Renting scooters to explore coastal backroads'
      ],
      interests: [
        'Diffusion model training on local GPU rigs',
        'Digital nomad demographics and tax residency optimization',
        'Minimalist architecture and tiny houses',
        'Electronic synthesizers and drum machines'
      ],
      communicationStyle: 'Authentic, irreverent, brutally honest, allergic to corporate buzzwords',
      dealbreakers: ['Excessive attachments to physical clutter', 'Need for rigid 9-5 corporate conformity', 'High-maintenance demands'],
      loveLanguage: 'Quality Time & Shared Exploration',
      energyLevel: 'Laid-back yet hyper-focused, chill, independent',
      datePhilosophy: 'Grabbing street food skewers in an alleyway in Tokyo, talking about life philosophies until sunrise.',
      humorStyle: 'Dark internet humor, absurd memes, dry irony'
    }
  },
  {
    id: 'dylan-field',
    name: 'Dylan Field',
    age: 32,
    location: 'San Francisco, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Co-founder and CEO of Figma. Thiel Fellow. Obsessed with creative tools, multiplayer software, and typography.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/dylanfield',
      instagram: 'https://www.instagram.com/dylanfield'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'Co-Founder & CEO at Figma',
        role: 'Co-Founder & CEO',
        industry: 'Collaborative Design Software',
        professionalValues: ['Eliminating walls between design and code', 'Multiplayer collaboration', 'Humility', 'Craft obsession'],
        intellectualFocus: 'WebGL rendering in the browser, vector geometry, design systems scale'
      },
      instagramSummary: {
        handle: '@dylanfield',
        vibe: 'Design nerd, crypto-art collector, fatherhood, quiet cafe conversations, museum visits',
        aesthetic: 'Geometric line art, ceramic teapots, contemporary typography books, foggy San Francisco hills',
        lifestyleKeywords: ['Ceramics', 'Contemporary design', 'Japanese tea ceremony', 'Art collecting', 'San Francisco architecture'],
        socialEnergy: 'Introvert'
      }
    },
    agent: {
      needs: [
        'A deeply thoughtful, authentic partner who values craft, creativity, and quiet moments',
        'Mutual respect for focus and creative space',
        'Warm, grounded presence without superficial tech bravado'
      ],
      hobbies: [
        'Collecting indie design monographs and rare typography books',
        'Handcrafted pottery and ceramic wheel throwing',
        'Exploring contemporary art galleries in Hayes Valley',
        'Brewing artisanal Japanese sencha and matcha'
      ],
      interests: [
        'Vector mathematics and GPU graphics shaders',
        'History of collaborative tools from Douglas Engelbart to modern web',
        'Mid-century furniture restoration',
        'Typography kerning and font foundry design'
      ],
      communicationStyle: 'Gentle, thoughtful, deeply attentive, values nuance and understated expression',
      dealbreakers: ['Boastful loud egos', 'Disregard for art and design', 'Aggressive posturing'],
      loveLanguage: 'Quality Time & Acts of Service',
      energyLevel: 'Quiet, reflective, warm, insightful',
      datePhilosophy: 'Browsing a quiet design bookstore together, followed by warm tea in a peaceful courtyard.',
      humorStyle: 'Gentle, quirky, clever'
    }
  },
  {
    id: 'gwynne-shotwell',
    name: 'Gwynne Shotwell',
    age: 60,
    location: 'Hawthorne, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'President and COO of SpaceX. Mechanical engineer, commercial space pioneer, and operational powerhouse.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/gwynne-shotwell-653a067',
      instagram: 'https://www.instagram.com/gwynneshotwell'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'President & Chief Operating Officer at SpaceX',
        role: 'President & COO',
        industry: 'Aerospace & Orbital Launch Systems',
        professionalValues: ['Audacious goals made operational reality', 'Fierce loyalty to team', 'Absolute accountability', 'Grace under pressure'],
        intellectualFocus: 'Reusability economics, Starship operational cadence, inter-planetary logistics'
      },
      instagramSummary: {
        handle: '@gwynneshotwell',
        vibe: 'Texas ranch living, rocket engines, horses, high-stakes aerospace triumphs, fearless leadership',
        aesthetic: 'Falcon 9 night launches, Texas sunsets over pastures, equestrian gear, titanium launch clamps',
        lifestyleKeywords: ['Ranch horses', 'Country living', 'Aerospace engineering', 'Mentoring young women in STEM', 'BBQ'],
        socialEnergy: 'Extrovert'
      }
    },
    agent: {
      needs: [
        'A partner of formidable character, unquestioned integrity, and grounded emotional bedrock',
        'Someone who thrives around big historical missions and isn\'t intimidated by massive responsibility',
        'Warmth, down-to-earth country sincerity, and humor'
      ],
      hobbies: [
        'Ranch work, trail riding horses, and caring for livestock',
        'Cooking slow-smoked Texas BBQ for family and team members',
        'Mentoring young female engineers and students in aerospace',
        'Watching night rocket launches from the pad perimeter'
      ],
      interests: [
        'Orbital mechanics and rocket stage recovery dynamics',
        'Manufacturing metallurgy and composite cryo-tanks',
        'Global telecommunications constellations (Starlink)',
        'Equestrian breeding and horsemanship'
      ],
      communicationStyle: 'Direct, commanding yet incredibly warm, maternal strength, zero tolerance for excuses',
      dealbreakers: ['Whining', 'Passive aggression', 'Lack of personal grit'],
      loveLanguage: 'Acts of Service & Physical Touch',
      energyLevel: 'Formidable, grounded, deeply comforting, magnetic',
      datePhilosophy: 'A quiet evening on the ranch porch watching the sunset, sharing a great bourbon and talking about what truly matters.',
      humorStyle: 'Down-to-earth, sharp, hearty'
    }
  },
  {
    id: 'karri-saarinen',
    name: 'Karri Saarinen',
    age: 38,
    location: 'San Francisco, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    bio: 'Co-founder and CEO of Linear. Finnish designer. Bringing back taste, craftsmanship, and delight to software.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/karrisaarinen',
      instagram: 'https://www.instagram.com/karrisaarinen'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'Co-Founder & CEO at Linear | Former Principal Designer at Airbnb & Coinbase',
        role: 'Co-Founder & CEO',
        industry: 'Productivity Software & Industrial Design',
        professionalValues: ['Taste is the ultimate differentiator', 'Speed is a feature', 'Nordic simplicity', 'Focus over bloat'],
        intellectualFocus: 'Keyboard-first UX, dark mode ergonomics, deterministic sync engines'
      },
      instagramSummary: {
        handle: '@karrisaarinen',
        vibe: 'Nordic calm, monochrome photography, Finnish sauna rituals, brutalist furniture, clean lines',
        aesthetic: 'Matte dark charcoal, black coffee in ceramic mugs, minimalist Scandinavian cabins, birch forests',
        lifestyleKeywords: ['Finnish sauna', 'Minimalist architecture', 'Pour-over coffee', 'Nordic lakes', 'Vintage Dieter Rams'],
        socialEnergy: 'Introvert'
      }
    },
    agent: {
      needs: [
        'A partner who cherishes peaceful silence as much as meaningful conversation',
        'An inherent eye for beauty, order, and intentional living',
        'Freedom from loud, performative social obligations'
      ],
      hobbies: [
        'Traditional wood-fired sauna sessions followed by cold lake plunges',
        'Collecting Braun vintage audio equipment designed by Dieter Rams',
        'Architectural photography with Leica cameras',
        'Manual espresso bean roasting and temperature profiling'
      ],
      interests: [
        'Nordic design philosophy and Alvar Aalto architecture',
        'Keyboard shortcuts and cognitive flow state triggers',
        'Chronometry and mechanical Swiss watches',
        'Ergonomics of dark-mode user interfaces'
      ],
      communicationStyle: 'Calm, concise, deeply thoughtful, Finnish directness paired with kindness',
      dealbreakers: ['Chaos, visual clutter, superficial drama, tardiness'],
      loveLanguage: 'Quality Time & Acts of Service',
      energyLevel: 'Zen, tranquil, deeply focused',
      datePhilosophy: 'A quiet walk through a misty pine forest followed by hot coffee and quiet reading by a fireplace.',
      humorStyle: 'Deadpan Nordic humor, subtly dry'
    }
  },
  {
    id: 'cathie-wood',
    name: 'Cathie Wood',
    age: 68,
    location: 'St. Petersburg, FL',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    bio: 'Founder and CEO of ARK Invest. Pioneering thematic investing in disruptive innovation, genomics, and energy storage.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/cathie-wood-arkk',
      instagram: 'https://www.instagram.com/cathiedwood'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'Founder, CEO & CIO at ARK Investment Management LLC',
        role: 'Founder & Chief Investment Officer',
        industry: 'Disruptive Innovation Investment',
        professionalValues: ['Wright\'s Law exponential curves', 'Transparency in research', 'Faith & conviction', 'Future-oriented optimism'],
        intellectualFocus: 'Genomic sequencing cost curves, autonomous robotaxis, multi-omics technology'
      },
      instagramSummary: {
        handle: '@cathiedwood',
        vibe: 'Sunshine state elegance, coastal walks, family faith, research podcasts, energetic optimism',
        aesthetic: 'Florida coastal sunsets, bright modern offices, economic chart whiteboards, pastel blazers',
        lifestyleKeywords: ['Morning devotions', 'Coastal runs', 'Exponential technology', 'Grandchildren', 'Whitepaper reading'],
        socialEnergy: 'Extrovert'
      }
    },
    agent: {
      needs: [
        'A partner of profound conviction, shared spiritual grounding, and contagious optimism for humanity\'s future',
        'Intellectual curiosity across science, economics, and philosophy',
        'Deep emotional loyalty and warmth'
      ],
      hobbies: [
        'Morning prayer walks along the Florida shoreline',
        'Studying biological breakthrough papers and genomic therapies',
        'Hosting family holiday dinners and spending time with grandchildren',
        'Attending symphonic orchestra concerts'
      ],
      interests: [
        'Cost deflation in gene editing (CRISPR)',
        'Converging technology platforms (AI + Robotics + Energy)',
        'Macro-economic monetary history',
        'Early-stage technological adoption S-curves'
      ],
      communicationStyle: 'Articulate, impassioned, highly optimistic, patient, deeply knowledgeable',
      dealbreakers: ['Cynical defeatism', 'Short-term greed', 'Lack of moral anchor'],
      loveLanguage: 'Words of Affirmation & Quality Time',
      energyLevel: 'High-conviction, warm, energetic, resilient',
      datePhilosophy: 'A walk by the ocean discussing how technology can lift humanity, followed by fresh seafood.',
      humorStyle: 'Gentle, gracious, cheerful'
    }
  },
  {
    id: 'palmer-luckey',
    name: 'Palmer Luckey',
    age: 32,
    location: 'Costa Mesa, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    bio: 'Founder of Anduril Industries & Oculus VR. Hawaiian shirts, hardware hacker, defense technologist, and anime lover.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/palmer-luckey-38012b32',
      instagram: 'https://www.instagram.com/palmerluckey'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'Founder at Anduril Industries | Founder at Oculus VR',
        role: 'Founder',
        industry: 'Defense Technology & Virtual Reality',
        professionalValues: ['Hardware tinkerer supremacy', 'American democratic defense', 'Unabashed authenticity', 'Ship fast in atoms'],
        intellectualFocus: 'Autonomous drones, Lattice sensor fusion, optical waveguide displays'
      },
      instagramSummary: {
        handle: '@palmerluckey',
        vibe: 'Hawaiian shirts, flip-flops, military helicopters, anime cosplay, retro game repair benches',
        aesthetic: 'Bright floral aloha shirts, military test ranges, laser soldering stations, vintage CRT monitors',
        lifestyleKeywords: ['Hawaiian shirts', 'Barefoot/flip-flops', 'Helicopter piloting', 'Anime conventions', 'Retro hardware'],
        socialEnergy: 'Extrovert'
      }
    },
    agent: {
      needs: [
        'A fiercely independent, open-minded partner who appreciates eccentric genius and zero social pretension',
        'Someone who loves hands-on DIY projects, weird hobbies, and unfiltered laughs',
        'Loyalty and shared sense of adventure'
      ],
      hobbies: [
        'Piloting personal helicopters and testing amphibious military vehicles',
        'Collecting and restoring rare Japanese arcade cabinets and CRT displays',
        'Cosplaying at anime conventions with intricate DIY electronic gear',
        'Living 365 days a year in colorful Hawaiian shirts and cargo shorts'
      ],
      interests: [
        'Optical sensor physics and radar telemetry',
        'Virtual reality optical lenses and micro-OLED panels',
        'Naval defense autonomy and submarine acoustics',
        'Video game preservation and hardware modding'
      ],
      communicationStyle: 'Excited, boisterous, unfiltered, deeply technical, passionate storytelling',
      dealbreakers: ['Pretentious dinner party etiquette', 'People who judge on appearances', 'Politeness over truth'],
      loveLanguage: 'Shared Adventures & Acts of Service',
      energyLevel: 'Wildly energetic, unfiltered, mischievous, genius-level inventive',
      datePhilosophy: 'Flying a helicopter to an abandoned airstrip to race go-karts and eat tacos on the hood.',
      humorStyle: 'Mischievous, self-aware, meme-literate'
    }
  },
  {
    id: 'amjad-masad',
    name: 'Amjad Masad',
    age: 36,
    location: 'Foster City, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Founder and CEO of Replit. Building the future of software creation. Jordanian roots, hacker, philosopher.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/amasad',
      instagram: 'https://www.instagram.com/amasad'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'Co-founder & CEO at Replit | Former Engineer at Facebook',
        role: 'Co-Founder & CEO',
        industry: 'Software Development & AI Agents',
        professionalValues: ['Democratizing coding for 1 billion people', 'Hacker culture', 'Empowering agency', 'Long-term thinking'],
        intellectualFocus: 'Browser containerization, AI software synthesis, decentralized computing'
      },
      instagramSummary: {
        handle: '@amasad',
        vibe: 'Family life, Levant culinary gatherings, quiet chess boards, gym lifting, thoughtful essays',
        aesthetic: 'Sunlit family patios, espresso cups, chalkboards with code logic, Jordan desert ruins',
        lifestyleKeywords: ['Weight training', 'Levant cooking', 'Family dinners', 'Chess', 'Philosophy of computation'],
        socialEnergy: 'Ambivert'
      }
    },
    agent: {
      needs: [
        'A partner with deep family values, cultural richness, and genuine intellectual depth',
        'Someone who champions builders and believes in empowering the underdog',
        'Mutual support in weathering high-stakes entrepreneurial storms'
      ],
      hobbies: [
        'Compound barbell training and functional fitness',
        'Hosting big family gatherings with homemade Jordanian cuisine',
        'Playing classical and rapid chess matches',
        'Reading ancient philosophy and Enlightenment history'
      ],
      interests: [
        'Programming language design and compilation theory',
        'History of computing from LISP to LLMs',
        'Economic mobility through software craftsmanship',
        'Middle Eastern history and archaeological architecture'
      ],
      communicationStyle: 'Thoughtful, encouraging, philosophical, articulate, deeply loyal',
      dealbreakers: ['Arrogant elitism', 'Disrespect for heritage and family', 'Defeatism'],
      loveLanguage: 'Quality Time & Words of Affirmation',
      energyLevel: 'Steadfast, protective, warm, visionary',
      datePhilosophy: 'A cozy dinner at a vibrant Mediterranean bistro with great hummus, olive oil, and endless philosophical debate.',
      humorStyle: 'Dry, warm, intellectually witty'
    }
  },
  {
    id: 'delane-parnell',
    name: 'Delane Parnell',
    age: 32,
    location: 'Los Angeles, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    bio: 'Founder of PlayVS. Detroit native. Pioneered esports in high schools across North America. Investor & culture curator.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/delaneparnell',
      instagram: 'https://www.instagram.com/delane'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'Founder at PlayVS | Angel Investor | Cultural Pioneer',
        role: 'Founder & Venture Investor',
        industry: 'Esports, Gaming Infrastructure & Culture',
        professionalValues: ['Grit over pedigree', 'Cultural authenticity', 'Building for the youth', 'Tenacity'],
        intellectualFocus: 'Collegiate esports pipelines, youth sports psychology, venture network density'
      },
      instagramSummary: {
        handle: '@delane',
        vibe: 'Impeccable style, Detroit pride, luxury contemporary art, basketball courts, curated streetwear',
        aesthetic: 'Gallery spaces, bespoke tailoring, vintage Detroit sports jerseys, candlelit Beverly Hills lounges',
        lifestyleKeywords: ['NBA basketball', 'Streetwear collection', 'Contemporary Black art', 'High fashion', 'Fine dining'],
        socialEnergy: 'Extrovert'
      }
    },
    agent: {
      needs: [
        'A stylish, culturally astute partner who embodies self-made grit and effortless confidence',
        'Loyalty, discretion, and mutual ambition to build lasting generational legacy',
        'Great taste in music, art, and dining'
      ],
      hobbies: [
        'Curating museum-grade contemporary art collections',
        'Courtside seats at NBA games and pickup basketball',
        'Sourcing vintage archive designer pieces and sneakers',
        'Mentoring inner-city youth founders in Detroit and LA'
      ],
      interests: [
        'Gaming ecosystem economics and publisher IP rights',
        'Modern art investment trends',
        'Detroit musical heritage (Motown, Techno, Hip-Hop)',
        'Real estate development in emerging creative districts'
      ],
      communicationStyle: 'Charismatic, smooth, razor-sharp, authentic, magnetic',
      dealbreakers: ['Pretentious phoniness', 'Disloyalty', 'Lack of personal style or drive'],
      loveLanguage: 'Receiving Gifts & Quality Time',
      energyLevel: 'Confident, smooth, commanding, stylish',
      datePhilosophy: 'A private evening tour of an art exhibition followed by an intimate chef’s tasting table.',
      humorStyle: 'Confident, smooth, culturally savvy'
    }
  },
  {
    id: 'austen-allred',
    name: 'Austen Allred',
    age: 35,
    location: 'Lehi, UT',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    bio: 'Co-founder and CEO of BloomTech (formerly Lambda School). Pioneer in outcome-based education. Father, hiker.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/austenallred',
      instagram: 'https://www.instagram.com/austen'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'Co-Founder & CEO at BloomTech | Pioneer in Income Share Agreements',
        role: 'Co-Founder & CEO',
        industry: 'EdTech & Workforce Training',
        professionalValues: ['Alignment of incentives', 'Relentless persistence', 'Family first', 'Practical skills over credentials'],
        intellectualFocus: 'Alternative educational financing, online vocational scale, job placement automation'
      },
      instagramSummary: {
        handle: '@austen',
        vibe: 'Utah mountains, snow sports, family backyard barbecues, wrestling mats, camping gear',
        aesthetic: 'Rocky Mountain peaks, toddlers playing in snow, trail pickups, campfires under starry skies',
        lifestyleKeywords: ['Mountain hiking', 'Camping with kids', 'Wrestling / BJJ', 'Outdoor grilling', 'History books'],
        socialEnergy: 'Ambivert'
      }
    },
    agent: {
      needs: [
        'A grounded, family-oriented partner who loves the outdoors and values deep personal loyalty',
        'Unshakeable perspective during tough public trials',
        'Love for children, nature, and community'
      ],
      hobbies: [
        'Hiking and camping in the Utah Wasatch Range',
        'Brazilian Jiu-Jitsu and collegiate-style wrestling',
        'Smoked meats and outdoor grilling for neighborhood gatherings',
        'Reading massive biographies of historical military and political leaders'
      ],
      interests: [
        'Higher education financial reform and accreditation models',
        'Early American frontier history',
        'Rural workforce economics and remote employment',
        'Wilderness survival skills'
      ],
      communicationStyle: 'Blunt, candid, resilient, brotherly warmth, straightforward',
      dealbreakers: ['Flakiness', 'Elitist credentialism', 'Inability to handle outdoor weather'],
      loveLanguage: 'Acts of Service & Physical Touch',
      energyLevel: 'Rugged, dependable, resilient, grounded',
      datePhilosophy: 'A mountain trail hike with incredible views, followed by camp burgers and talking around a fire.',
      humorStyle: 'Dry, folksy, self-effacing'
    }
  },
  {
    id: 'jack-altman',
    name: 'Jack Altman',
    age: 35,
    location: 'San Francisco, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Founder and Executive Chairman at Lattice. General Partner at Alt Capital. Writer on company culture and leadership.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/jack-altman-6b579717',
      instagram: 'https://www.instagram.com/jackaltman'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'Executive Chairman & Co-Founder at Lattice | General Partner at Alt Capital',
        role: 'Co-Founder & Investor',
        industry: 'People Management Software & Early Stage Venture',
        professionalValues: ['Empathetic leadership', 'Clear communication', 'Long-term compounding', 'People-centric growth'],
        intellectualFocus: 'Organizational psychology, performance feedback loops, founder longevity'
      },
      instagramSummary: {
        handle: '@jackaltman',
        vibe: 'Family warmth, Golden Gate Park bike rides, thoughtful coffee walks, book excerpts, gentle humor',
        aesthetic: 'SF Victorian facades, ocean beach sunsets, cafe tables with espresso, cozy library shelves',
        lifestyleKeywords: ['Family walks', 'Cycling SF hills', 'Book clubs', 'Podcast chats', 'Tennis'],
        socialEnergy: 'Ambivert'
      }
    },
    agent: {
      needs: [
        'A partner with high emotional intelligence who values thoughtful, honest communication',
        'Shared dedication to building a warm, intentional family home',
        'Intellectual curiosity without cynical edge'
      ],
      hobbies: [
        'Playing weekend tennis matches in the city',
        'Writing essays on management, fatherhood, and philosophy',
        'Cycling through the Marin Headlands',
        'Exploring San Francisco independent coffee roasters'
      ],
      interests: [
        'Organizational behavior and workplace psychology',
        'Stoic philosophy (Seneca, Marcus Aurelius)',
        'Early-stage company building playbooks',
        'Modern fiction and narrative memoirs'
      ],
      communicationStyle: 'Empathetic, introspective, articulate, gentle, deeply supportive',
      dealbreakers: ['Cynical gossip', 'Lack of emotional maturity', 'Chronic dishonesty'],
      loveLanguage: 'Words of Affirmation & Quality Time',
      energyLevel: 'Calm, steady, supportive, wise',
      datePhilosophy: 'A long walk through Golden Gate Park to Ocean Beach, stopping for warm pastries and deep life conversations.',
      humorStyle: 'Thoughtful, gentle, warm'
    }
  },
  {
    id: 'aravind-srinivas',
    name: 'Aravind Srinivas',
    age: 30,
    location: 'San Francisco, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    bio: 'Co-founder and CEO of Perplexity AI. PhD in computer science from UC Berkeley. Rebuilding the search engine.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/aravindsrinivas',
      instagram: 'https://www.instagram.com/aravindsrinivas'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'CEO & Co-founder at Perplexity AI | Ex-OpenAI, DeepMind, Google',
        role: 'CEO & Co-Founder',
        industry: 'Conversational Search & AI Research',
        professionalValues: ['Curiosity-driven knowledge', 'Truth-seeking latency', 'Relentless execution', 'Challenging monopolies'],
        intellectualFocus: 'Retrieval augmented generation, conversational query intent, neural web indexing'
      },
      instagramSummary: {
        handle: '@aravindsrinivas',
        vibe: 'Intellectual intensity, chess matches, Berkeley hills, south Indian coffee, tech talks',
        aesthetic: 'Whiteboard math, casual hoodies, night skyline views of SF, research paper highlights',
        lifestyleKeywords: ['Chess', 'South Indian filter coffee', 'Running', 'Reading research papers', 'Cricket'],
        socialEnergy: 'Ambivert'
      }
    },
    agent: {
      needs: [
        'An intellectually voracious partner who loves debating ideas and learning new fields',
        'Patience and support for a hyper-focused builder rewriting an entire industry',
        'Warmth, authenticity, and humor'
      ],
      hobbies: [
        'Playing fast tactical chess matches',
        'Morning runs through the Berkeley Hills and SF waterfront',
        'Making authentic traditional South Indian filter coffee',
        'Watching classic international cricket matches'
      ],
      interests: [
        'Retrieval systems and information retrieval economics',
        'Theoretical machine learning convergence proofs',
        'History of scientific revolutions (Kuhn, Feynman)',
        'Biographies of iconic scientific and engineering pioneers'
      ],
      communicationStyle: 'Rapid, intellectually intense, highly inquisitive, humble, candid',
      dealbreakers: ['Intellectual apathy', 'Superficial pretense', 'Fear of ambitious challenges'],
      loveLanguage: 'Quality Time & Words of Affirmation',
      energyLevel: 'Highly energized, focused, curious, relentless',
      datePhilosophy: 'A lively dinner at an authentic spice bistro debating the future of human curiosity and sharing favorite ideas.',
      humorStyle: 'Clever, quick, nerdy wit'
    }
  },
  {
    id: 'shriya-nevatia',
    name: 'Shriya Nevatia',
    age: 31,
    location: 'New York, NY',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    bio: 'Founder, investor, community architect. Champion of women in tech, social connection, and vibrant creative ecosystems.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/shriyanevatia',
      instagram: 'https://www.instagram.com/shriyanevatia'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'Founder & Investor | Former Head of Fellowship at On Deck | Community Catalyst',
        role: 'Founder & Community Leader',
        industry: 'Ecosystem Building & Early Venture',
        professionalValues: ['Catalyzing human potential', 'Empathetic connectivity', 'Inclusive spaces', 'Intentional design'],
        intellectualFocus: 'Micro-community dynamics, cohort learning mechanics, female founder angel syndicates'
      },
      instagramSummary: {
        handle: '@shriyanevatia',
        vibe: 'New York arts scene, salon dinner parties, Broadway shows, cozy ceramic mugs, vibrant floral arrangements',
        aesthetic: 'Brooklyn brownstone stoops, warm candlelight over dinner tables, live theater playbills, green houseplants',
        lifestyleKeywords: ['Dinner salon hosting', 'Broadway musicals', 'Ceramics', 'Flower arranging', 'Brooklyn walking tours'],
        socialEnergy: 'Extrovert'
      }
    },
    agent: {
      needs: [
        'A warm, emotionally expansive partner who thrives in social gatherings and loves connecting people',
        'Deep appreciation for the arts, theater, and creative culture',
        'Shared commitment to empathy and community impact'
      ],
      hobbies: [
        'Curating intimate salon dinner parties with diverse thinkers',
        'Attending Broadway musicals and Off-Broadway experimental theater',
        'Floral arrangement and caring for urban balcony gardens',
        'Exploring independent galleries and vintage markets in Brooklyn'
      ],
      interests: [
        'Sociology of human networks and community trust formation',
        'Musical theater score composition',
        'Venture investing in female-founded consumer platforms',
        'Urban community spaces and public park design'
      ],
      communicationStyle: 'Warm, magnetic, deeply empathetic, radiant listener, expressive',
      dealbreakers: ['Aloofness', 'Disdain for human connection', 'Selfishness'],
      loveLanguage: 'Quality Time & Words of Affirmation',
      energyLevel: 'Radiant, socially vibrant, warm, uplifting',
      datePhilosophy: 'A cozy candlelit dinner followed by an evening at an indie jazz or theater performance, discussing every scene afterward.',
      humorStyle: 'Warm, theatrical, spontaneous'
    }
  },
  {
    id: 'paul-graham',
    name: 'Paul Graham',
    age: 59,
    location: 'Oxford, UK',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Writer and programmer. Co-founder of Y Combinator. Exploring what ideas are worth pursuing and how to think clearly.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/paul-graham-yc',
      instagram: 'https://www.instagram.com/paulg_essayist'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'Co-founder at Y Combinator | Essayist & Hacker',
        role: 'Co-founder & Essayist',
        industry: 'Venture Incubation & Software Philosophy',
        professionalValues: ['Relentless resourcefulness', 'Saying what you can\'t say', 'Hacker curiosity', 'Simplicity of prose'],
        intellectualFocus: 'LISP, startup mechanics, heresy in intellectual history, parenting'
      },
      instagramSummary: {
        handle: '@paulg_essayist',
        vibe: 'English countryside, stone cottages in Oxford, paintbrushes, sketchbooks, quiet gardens, family tea',
        aesthetic: 'Misty Oxford riverbanks, oil painting palettes, classic wooden desks, leather-bound notebooks',
        lifestyleKeywords: ['Oil painting', 'Country walks', 'Oxford tea', 'Writing essays', 'Fatherhood'],
        socialEnergy: 'Introvert'
      }
    },
    agent: {
      needs: [
        'A partner with fierce independent thinking who questions default societal assumptions',
        'Love for quiet, contemplative life punctuated by rigorous discussion',
        'Kindness, honesty, and intellectual courage'
      ],
      hobbies: [
        'Portrait and landscape oil painting with traditional pigments',
        'Long walks through the Oxfordshire countryside and along the river',
        'Handcrafting essays on a distraction-free laptop',
        'Cooking simple, delicious meals with family'
      ],
      interests: [
        'History of intellectual taboos and changing societal mores',
        'LISP dialect syntax and functional programming elegance',
        'The Renaissance painting techniques of Florence and Venice',
        'Psychology of young ambitious founders'
      ],
      communicationStyle: 'Profoundly clear, Socratic, asks penetrating simple questions, unpretentious',
      dealbreakers: ['Intellectual conformity', 'Posturing', 'Bureaucratic thinking'],
      loveLanguage: 'Quality Time & Acts of Service',
      energyLevel: 'Contemplative, wise, quietly playful, observant',
      datePhilosophy: 'Walking through an ancient English garden or quiet gallery, pausing to question how people thought 500 years ago.',
      humorStyle: 'Dry British-style irony, subtle, observant'
    }
  },
  {
    id: 'shahrzad-rafati',
    name: 'Shahrzad Rafati',
    age: 44,
    location: 'Vancouver, BC',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'Founder and CEO of BBTV Holdings. Global media tech pioneer, G20 Business Women leader, advocate for pay equity.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/shahrzadrafati',
      instagram: 'https://www.instagram.com/shahrzadrafati'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'Founder & CEO at BBTV | G20 Business Women Leader',
        role: 'Founder & Chief Executive Officer',
        industry: 'Digital Entertainment & Media Tech',
        professionalValues: ['Triple bottom line (people, planet, profit)', 'Pay equity', 'Global scale', 'Courageous leadership'],
        intellectualFocus: 'Streaming video algorithmic monetization, global creator syndication, equal opportunity capitalism'
      },
      instagramSummary: {
        handle: '@shahrzadrafati',
        vibe: 'Vancouver coastal elegance, international summits, mountain skiing, wellness rituals, tailored blazers',
        aesthetic: 'Snowy Whistler mountains, oceanfront glass penthouses, United Nations podiums, matcha green teas',
        lifestyleKeywords: ['Alpine skiing', 'Ocean sea-wall runs', 'Mindfulness meditation', 'Global policy', 'Green juices'],
        socialEnergy: 'Extrovert'
      }
    },
    agent: {
      needs: [
        'A partner of equal strength, global worldview, and shared commitment to ethical leadership',
        'Active outdoor lifestyle balanced with refined cultural taste',
        'Supportive emotional partnership and mutual loyalty'
      ],
      hobbies: [
        'Downhill skiing in Whistler and alpine heli-skiing',
        'Morning runs along the Vancouver seawall',
        'Daily meditation practice and sound baths',
        'Sponsoring international initiatives for female entrepreneurs'
      ],
      interests: [
        'Digital creator rights and algorithmic revenue splits',
        'Sustainable corporate governance frameworks',
        'Persian poetry and literature (Rumi, Hafez)',
        'Nutrition science and longevity medicine'
      ],
      communicationStyle: 'Empowering, poised, diplomatic, eloquent, inspiring',
      dealbreakers: ['Small-mindedness', 'Gender bias', 'Lack of social responsibility'],
      loveLanguage: 'Words of Affirmation & Quality Time',
      energyLevel: 'Regal, energetic, visionary, poised',
      datePhilosophy: 'A morning snowshoe or scenic seawall walk followed by an exquisite waterfront brunch discussing global culture.',
      humorStyle: 'Graceful, warm, internationally witty'
    }
  },
  {
    id: 'jessica-livingston',
    name: 'Jessica Livingston',
    age: 53,
    location: 'Oxford, UK & Boston, MA',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    bio: 'Co-founder of Y Combinator. Author of Founders at Work. Known as the "Social Radar" of Silicon Valley.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/jessicalivingston-yc',
      instagram: 'https://www.instagram.com/jessicalivingston_yc'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'Co-Founder at Y Combinator | Host of The Social Radar | Author',
        role: 'Co-Founder & Author',
        industry: 'Venture Incubation & Founder Mentorship',
        professionalValues: ['Integrity & authenticity', 'Judging people by character', 'Quiet nurturing', 'Fierce loyalty'],
        intellectualFocus: 'Founder psychology, early team dynamics, non-consensus grit'
      },
      instagramSummary: {
        handle: '@jessicalivingston_yc',
        vibe: 'Warm British-American countryside, garden flowers, podcasts with iconic founders, family baking',
        aesthetic: 'Tea gardens, vintage armchairs, podcast mics, golden retrievers, family picnics',
        lifestyleKeywords: ['English gardens', 'Family dinners', 'Baking scones', 'Podcasting', 'Antiques'],
        socialEnergy: 'Introvert'
      }
    },
    agent: {
      needs: [
        'A partner with authentic heart, unimpeachable character, and zero tolerance for arrogance or phoniness',
        'Warm, quiet domestic joy and intellectual depth',
        'Mutual respect for family life and peaceful boundaries'
      ],
      hobbies: [
        'Tending English flower gardens and perennials',
        'Baking traditional scones and artisan fruit pies',
        'Interviewing visionary founders on human resilience',
        'Antique hunting in Cotswold villages'
      ],
      interests: [
        'Interpersonal intuition and human emotional radar',
        'Oral histories of technological breakthroughs',
        'Child development and creative education',
        'British historical biographies'
      ],
      communicationStyle: 'Incredibly warm, empathetic, observant, perceptive, disarming',
      dealbreakers: ['Arrogant swagger', 'Treating people poorly', 'Pretentiousness'],
      loveLanguage: 'Quality Time & Acts of Service',
      energyLevel: 'Comforting, perceptive, warm, deeply grounded',
      datePhilosophy: 'Afternoon tea in a quiet garden, talking candidly about people, life journeys, and what makes humans tick.',
      humorStyle: 'Gentle, warm, knowing smiles'
    }
  },
  {
    id: 'marc-andreessen',
    name: 'Marc Andreessen',
    age: 53,
    location: 'Atherton, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Co-founder of Netscape and Andreessen Horowitz (a16z). Technologist, techno-optimist manifesto author.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/marcandreessen',
      instagram: 'https://www.instagram.com/pmarca'
    },
    extractedSources: {
      linkedinSummary: {
        headline: 'Co-Founder & General Partner at Andreessen Horowitz | Co-Founder Netscape',
        role: 'Venture Capitalist & Technologist',
        industry: 'Venture Capital & Software History',
        professionalValues: ['Techno-optimism', 'Software eating the world', 'Intellectual combat', 'Building for abundance'],
        intellectualFocus: 'Technological history, techno-capital machine, decentralized governance'
      },
      instagramSummary: {
        handle: '@pmarca',
        vibe: 'Historical book stacks, techno-futurist architecture, classic cinema, rare archival prints',
        aesthetic: 'Leather-bound libraries, vintage sci-fi cover art, Silicon Valley archival photos',
        lifestyleKeywords: ['Book reading marathon', 'Classic film noir', 'Architecture', 'Espresso', 'Techno-optimism'],
        socialEnergy: 'Ambivert'
      }
    },
    agent: {
      needs: [
        'An intellectually fearless sparring partner who reads encyclopedias for fun',
        'Someone with huge macro-optimism who rejects doom-and-gloom narratives',
        'Shared dedication to continuous learning and historical perspective'
      ],
      hobbies: [
        'Reading multiple dense history and economics books weekly',
        'Studying 1940s film noir and classic cinematography',
        'Debating long-wave macroeconomic cycles',
        'Collecting rare vintage science fiction paperbacks'
      ],
      interests: [
        'The Techno-Capital Machine and industrial progress',
        'History of computing from Babbage to Mosaic browser',
        'Cognitive history of technological revolutions',
        'Modernist and brutalist campus architecture'
      ],
      communicationStyle: 'Lively, encyclopedic, forceful debater, razor-sharp, energetic laugh',
      dealbreakers: ['Neo-luddism', 'Anti-growth mindset', 'Intellectual laziness'],
      loveLanguage: 'Intellectual Sparring & Words of Affirmation',
      energyLevel: 'Hyper-intellectual, booming, vigorous',
      datePhilosophy: 'A lively dinner debate over great food, challenging each other\'s predictions for the next 50 years of humanity.',
      humorStyle: 'Booming, ironic, historical references'
    }
  }
];
