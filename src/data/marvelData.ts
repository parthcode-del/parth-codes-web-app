export interface SpiderVariant {
  id: string;
  name: string;
  alias: string;
  universe: string;
  earthCode: string;
  status: string;
  quote: string;
  desc: string;
  imageUrl: string;
  badgeClass: string;
  powerColor: string;
  agility: number;
  sense: number;
  sigLabel: string;
  sigVal: number;
  intellect: number;
  powerAction: string;
  firstAppearance: string;
  specialTrappings: string[];
  threatLevel: string;
  canonEventsCount: number;
  audioSfx: 'venom' | 'thwip' | 'bzzzt' | 'pow';
}

export interface MarvelHero {
  id: string;
  name: string;
  realName: string;
  tier: string;
  level: number;
  category: 'avengers' | 'cosmic' | 'mutant' | 'midnight' | 'villain';
  tagBadge: string;
  tagColor: string;
  firstApp: string;
  shortDesc: string;
  longBio: string;
  powerMeterLabel: string;
  powerMeterVal: string;
  powerPercent: number;
  powerBarColor: string;
  powers: string;
  synergy: string;
  imageUrl: string;
}

export interface DimensionPortal {
  id: string;
  code: string;
  name: string;
  designation: string;
  status: 'STABLE' | 'ANOMALOUS' | 'CRITICAL BREACH' | 'LOCKED';
  glitchHz: number;
  dominantSpider: string;
  timelineIntegrity: number;
  description: string;
  bgAtmosphere: string;
  threatRank: 'ALPHA' | 'OMEGA' | 'EPSILON' | 'BETA';
}

export interface ComicArtifact {
  id: string;
  title: string;
  issueNumber: string;
  year: number;
  rarity: 'ULTRA RARE' | 'MYTHIC' | 'ORIGIN KEY' | 'CANON BREACH';
  significance: string;
  priceEstimate: string;
  variantCover: string;
  earthOrigin: string;
  status: string;
}

// 1. SPIDER-VARIANTS DATA
export const SPIDER_VARIANTS: SpiderVariant[] = [
  {
    id: 'miles',
    name: 'MILES MORALES',
    alias: 'MILES MORALES // THE ANOMALY SPIDER',
    universe: 'EARTH-1610 // BROOKLYN CORE',
    earthCode: 'EARTH-1610',
    status: 'ACTIVE TOTEM',
    quote: '"Nah, I\'ma do my own thing."',
    desc: 'Bitten by an Alchemax genetically altered spider from Earth-42. Possesses bio-electric venom burst capable of disabling electronic armor and synaptic circuitry, paired with reactive camouflage and high-level dimensional awareness.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjjyd1n5MK8lfuLd7dg6RfpImjcBfBgezTpbotrh3Q5YT_tWF-2KLZ1Q_dUQvhcsUjppbb2y8HYAxbHbvDWTBp8z5NsAE-PGZJcU5nSKv7PxIYV2N7gvhWTwf5UMP0VPfrC2j4-Dj315Paq0HgZIz6962mHkPNyKxOCB8deMPdgY40ukRuIZdk5Wmkp0SHW5pz1pfjmH4so71MH2aoxW9qJgsifUbHGr9Pskx74cTwqD_1Brb-lDaEqg',
    badgeClass: 'bg-[#ff525e] text-white',
    powerColor: '#facc15',
    agility: 99,
    sense: 98,
    sigLabel: 'VENOM STRIKE DISCHARGE',
    sigVal: 94,
    intellect: 92,
    powerAction: 'TEST POWER [VENOM DISCHARGE]',
    firstAppearance: 'Ultimate Fallout #4 (2011)',
    specialTrappings: ['Venom Saber Spark', 'Spider-Camouflage (Invisibility)', 'Air Jordans Shock-Absorbers', 'Dimensional Rift Resistance'],
    threatLevel: 'CLASS-OMEGA ANOMALY',
    canonEventsCount: 314,
    audioSfx: 'venom',
  },
  {
    id: 'peter',
    name: 'PETER B. PARKER',
    alias: 'PETER PARKER // THE CLASSIC TOTEM',
    universe: 'EARTH-616 // QUEENS VETERAN',
    earthCode: 'EARTH-616',
    status: 'MENTOR CLASS',
    quote: '"With great power comes great responsibility."',
    desc: 'Over 20 years of combat wisdom. Master of acrobatic web-slinging, hyper-precognitive Spider-Sense anticipating attacks before they manifest, and scientific chemistry genius behind high-tensile web-fluid formulas.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCELeeHCp_Gmf8YFvQWtUWfyByHA1beYtyIfEGm8eh0TJIxioE6JaIWuFVFYzztvZ1VlC5ri9givzlmrXer61ZhJvDWtxNsVtRkXNaJk69yJz55dh66pDBwp3vaN5b4hpSKXrZIsIdF6oEIvaWSM1TzzFcwRSguXs4bD_VWnmO5DL4um_y2EdGMp9n74fV47kjarObWtisHkaFjzWJZKE1Oe8ldjQCpt3y8QwMv9Qrv2yZagqIbhiNJfg',
    badgeClass: 'bg-[#00eefc] text-black',
    powerColor: '#00eefc',
    agility: 97,
    sense: 99,
    sigLabel: 'PRECOGNITIVE SPIDER-SENSE',
    sigVal: 99,
    intellect: 98,
    powerAction: 'TEST POWER [PRECOGNITIVE FLASH]',
    firstAppearance: 'Amazing Fantasy #15 (1962)',
    specialTrappings: ['High-Tensile Web Shooters', 'Wall-Crawling Electrostatic Cling', 'Photographic Scientific Memory', 'Spider-Tracer Radio Drones'],
    threatLevel: 'PRIME CANON ARCHETYPE',
    canonEventsCount: 1420,
    audioSfx: 'thwip',
  },
  {
    id: 'gwen',
    name: 'GHOST-SPIDER',
    alias: 'GWEN STACY // KINETIC DRUMMER',
    universe: 'EARTH-65 // MARY JANES CORE',
    earthCode: 'EARTH-65',
    status: 'DIMENSIONAL SCOUT',
    quote: '"I never figured out how to make friends... until now."',
    desc: 'Balancing rhythm percussion intuition with acrobatic martial arts. Equipped with a custom Multiverse transit watch, hood glider aerodynamic webbing, and frictionless kinetic reflexes.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTeh2VNcIlBWKQ1A17VGLIch3TK8PRczGPEghdig6_AS7e4v5VtlBjeqyhpN0N9J7GjLrTQmHHC3YvoeDzzwd4meFtfq-Jz_JwcwTpVjuJsr_UgT8tK7uR2L0rJGP0Wi2dqBI7VsJB5R9Zf_nqrI7tzffb22RatSlHO752_G-rK6FskCvfNblYvRgN4UKxiHshMX3B89CGnZZ_tJf-MZdXZMXKrzDmKRN8qyA9win_63NP_VnQuAQB_w',
    badgeClass: 'bg-[#deb7ff] text-black',
    powerColor: '#deb7ff',
    agility: 99,
    sense: 96,
    sigLabel: 'KINETIC DRUM RHYTHM ACROBATICS',
    sigVal: 95,
    intellect: 91,
    powerAction: 'TEST POWER [SONIC FLIP & GLIDE]',
    firstAppearance: 'Edge of Spider-Verse #2 (2014)',
    specialTrappings: ['Multiverse Gizmo Transit Watch', 'Ballet-Kinetic Combat', 'Cyan Web-Wings Glider', 'Acoustic Sound Resonance'],
    threatLevel: 'DIMENSIONAL NAVIGATOR',
    canonEventsCount: 204,
    audioSfx: 'thwip',
  },
  {
    id: 'miguel',
    name: 'SPIDER-MAN 2099',
    alias: 'MIGUEL O\'HARA // SOCIETY LEADER',
    universe: 'EARTH-928 // NUEVA YORK',
    earthCode: 'EARTH-928',
    status: 'PROTOCOL COMMANDER',
    quote: '"You don\'t belong here. Canon must be preserved."',
    desc: 'Head of the Spider-Society in Nueva York. Modified with 50% spider genetic splicing: fanged paralytic venom bite, talons capable of tearing steel, hard-light laser webbing, and accelerated vision.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp8m0IUHhhmqI7-f8cVLzBpyEZUwZAVLZH4j2RKe_tenxCqCoOmEtOpzJQxM8ZsG-dlbCzSxnuO-DCcDkuP4eJ4zMjSypBF26LPlsax2MFSyuWJfNuCMdBh4t8tvdw8IiwvTbYhKCqoXziveSUBWzWbaejxoifuzgX-TzTZBAHXxo-jUEomizCZvJjZVORBVLNKqHdXu3ZEtXiyfyOlT7dIcoMNfgP1yPk3A_PIixCukkdO_07uHhTeg',
    badgeClass: 'bg-[#ff525e] text-white',
    powerColor: '#ff525e',
    agility: 95,
    sense: 92,
    sigLabel: 'HARD-LIGHT LASER WEBBING',
    sigVal: 98,
    intellect: 97,
    powerAction: 'TEST POWER [DEPLOY LASER WEBS]',
    firstAppearance: 'Spider-Man 2099 #1 (1992)',
    specialTrappings: ['Alchemax Day-Byte Cape', 'Retractable Talons & Fangs', 'Hard-Light Geometric Webbing', 'Lyla Holographic AI Interface'],
    threatLevel: 'SOCIETY SUPREME COMMANDER',
    canonEventsCount: 990,
    audioSfx: 'bzzzt',
  },
  {
    id: 'punk',
    name: 'SPIDER-PUNK',
    alias: 'HOBIE BROWN // ANARCHY ICON',
    universe: 'EARTH-138 // LONDON REBEL',
    earthCode: 'EARTH-138',
    status: 'NON-CONFORMIST',
    quote: '"I don\'t believe in consistency. Or capitalism."',
    desc: 'Equipped with a custom electrified Gibson Les Paul guitar channeling 16,000 watts of raw punk distortion to shatter totalitarian surveillance grids and dimensional barrier frequencies.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUTg3sPmA7I_OprsD-cg9ck3ZdZ29kyNF0yR7QDt69_QE9L3G04l184Du_VvWdzHGmdSHxlD8ygRUFcZp2i6pVs6uGlB1FZ-Jtpd_qIPr9olqR5tLQJKUmqQtGNSPJOZhuX-J5EJs8tqxsA_EfxpcyUilGsAUuGS9lWoLVp_AZAkjbD3rvtl17to7phmVeEfO0hanAOrqjPfTeJSLzmp3mPLUfpNjuCfqYhPCwCCnvgWE4sARtusQIrg',
    badgeClass: 'bg-yellow-400 text-black',
    powerColor: '#facc15',
    agility: 96,
    sense: 95,
    sigLabel: 'SONIC AMP ANARCHY OVERDRIVE',
    sigVal: 97,
    intellect: 94,
    powerAction: 'TEST POWER [AMPLIFIER FEEDBACK BLAST]',
    firstAppearance: 'The Amazing Spider-Man vol. 3 #10 (2015)',
    specialTrappings: ['Marshall Tube Valve Guitar', 'Chuckle-Pin Denim Vest', 'Collage-Cut Paper Dimension Shift', '160dB Sonic Shockwaves'],
    threatLevel: 'ANTIAUTHORITARIAN ANOMALY',
    canonEventsCount: 77,
    audioSfx: 'pow',
  },
];

// 2. MARVEL MULTIVERSE ALL-STAR MATRIX (8 Primary + Extra)
export const MARVEL_HEROES: MarvelHero[] = [
  {
    id: 'ironman',
    name: 'IRON MAN',
    realName: 'Tony Stark',
    tier: 'TECH GOD',
    level: 96,
    category: 'avengers',
    tagBadge: 'TECH GOD',
    tagColor: 'bg-red-600 text-white',
    firstApp: 'Tales of Suspense #39 (1963)',
    shortDesc: 'Tony Stark. Nanotech Mark 85 with 100% Arc Reactor energy routing, Smart Web counter-protocols, and orbital satellites.',
    longBio: 'Genius billionaire Tony Stark engineered the Bleeding Edge and Mark 85 armor units featuring rapid nano-molecular reconfiguration, Friday quantum tactical interface, and orbital energy rerouting.',
    powerMeterLabel: 'ARC OUTPUT',
    powerMeterVal: '100% MAXIMUM',
    powerPercent: 100,
    powerBarColor: 'bg-[#00eefc]',
    powers: 'Mark 85 Nanotech Armor, Repulsor Blasts, Uni-Beam, Orbital Micro-Missile Swarms, Zero-Point Energy Shielding.',
    synergy: 'Created Peter Parker\'s original Iron-Spider suit with golden waldoes and Stark HUD targeting uplink.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1zRiGIov4joB_EQcgQaXh-OkMpQup3uAXlYX0J92T0sasBKeFdDSuQebscrwzy0ZyNoApBwX97uDdJlb15DsrtsQyne5xpMIaPezgtbV-_MLlZbqrdkoWYnw_IswWpohWNNMft87-vxRAgzThYdBXBlXligNaXN5-DgnS3doZwU7RPeXW32rjYeVRek-mndMLL29g3egMkPCs25Zoy8Yy0TbRhfywrdxdXUF-w-9kb8A99s9ez2p_8w',
  },
  {
    id: 'scarletwitch',
    name: 'SCARLET WITCH',
    realName: 'Wanda Maximoff',
    tier: 'OMEGA THREAT',
    level: 99,
    category: 'cosmic',
    tagBadge: 'OMEGA THREAT',
    tagColor: 'bg-[#ff525e] text-white',
    firstApp: 'X-Men #4 (1964)',
    shortDesc: 'Wanda Maximoff. Master of Chaos Magic, probability distortion, and dimensional reality-warping altering all timeline strands.',
    longBio: 'A mythical Nexus Being anchored across all known dimensions. Capable of reshaping multiversal matter and probability hexes simply through intent ("No More Mutants").',
    powerMeterLabel: 'CHAOS FLUX',
    powerMeterVal: 'REALITY WARP',
    powerPercent: 98,
    powerBarColor: 'bg-[#ff525e]',
    powers: 'Chaos Magic Projection, Hex Spheres, Probability Manipulation, Astral Transcendence, Multiversal Timeline Fracturing.',
    synergy: 'Can destabilize the Web of Life and Destiny across infinite Earths simultaneously with a single chaotic incantation.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGShqMrbUfDj8nr0e4lZWHhlXhUiXmq_8pAP2001qo-tDGlUqUV4YrUQwS4v9Iqib6JjVdeAnF6V7Gl8f5uqyueC0su7qxU2lyzA8VlU2E2y1rR2Jkq59SNDrjdGJMvznjPu8YguXGxUzjO_LH3C7asZGsl5CdDDrknVQ_5twRx4PrivM8jZZyW2kvO5NN1ZteaVeUtNwThHkc7zXX7ppfI7ceu_RCcUxl2qsqo6eri6dgs0ANmdDRww',
  },
  {
    id: 'thor',
    name: 'THOR ODINSON',
    realName: 'Thor Odinson',
    tier: 'ASGARDIAN',
    level: 97,
    category: 'avengers',
    tagBadge: 'ASGARDIAN',
    tagColor: 'bg-blue-600 text-white',
    firstApp: 'Journey into Mystery #83 (1962)',
    shortDesc: 'God of Thunder. Wielder of Mjolnir & Stormbreaker, Bifrost quantum teleportation, and cosmic weather manipulation.',
    longBio: 'The Asgardian Crown Prince channeling god-tier atmospheric electricity and cosmic tempest energy. Capable of planetary cleaves and multi-dimensional Bifrost travel.',
    powerMeterLabel: 'GOD-FORCE',
    powerMeterVal: 'THUNDER CLAP',
    powerPercent: 95,
    powerBarColor: 'bg-[#7df4ff]',
    powers: 'Mjolnir Flight & Gravitational Toss, Stormbreaker Bifrost Bridge, Lightning Conduit, Superhuman Asgardian Density.',
    synergy: 'Provides cosmic refuge for displaced Spider-variants during cosmic Incursions and multiversal breakdowns.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5a7KMMWpKrd-lHjLajUXGVt5HzEOfgb2JUV7zgfjLZMPjVidgkCS6FsE2LCQE56Goa8Eu6gZ3dGBLouIreRatVF4zsbAUHG_uzoEKzIM5NcNxnvpBD8bIk1kf1QdPSGQES8uleYoxVgq6bBhf2UbFibM9wd6n0YGYdsAtJxZiKajHecWy2mhh_a7cW5MdYgnh-K-2hZlhsMso98IE1ZU4nH8s9cx0EXKC3fHBoXssbxOV8ud6CQA4Rg',
  },
  {
    id: 'wolverine',
    name: 'WOLVERINE',
    realName: 'Logan / James Howlett',
    tier: 'WEAPON X',
    level: 91,
    category: 'mutant',
    tagBadge: 'WEAPON X',
    tagColor: 'bg-yellow-400 text-black',
    firstApp: 'Incredible Hulk #180 (1974)',
    shortDesc: 'Logan. Adamantium laced skeleton, cellular accelerated regeneration, enhanced animal tracking, and berserker rage mode.',
    longBio: 'Century-old mutant warrior forged through the Weapon X clandestine program. Possesses unbreakable Adamantium bone claws, rapid tissue cellular repair, and primal hyper-instincts.',
    powerMeterLabel: 'HEALING FACTOR',
    powerMeterVal: 'HYPER-CELLULAR',
    powerPercent: 94,
    powerBarColor: 'bg-yellow-400',
    powers: 'Six Retractable Adamantium Claws, Micro-Second Regenerative Healing, Hypersonic Sensory Tracking, Berserker Overdrive.',
    synergy: 'Longtime gritty partner to Spider-Man during New York turf wars and Secret Wars; respects Spidey\'s moral code.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzIWtXh0aocCbCFD2Fld-RB6uzUkI32fFBLJzNYHq2HeTCLAKXgD_PYDIGEtYih5xeJG9RqJwQzUmWIQWQbYL3fO4OKOLj-7EzVGWtLFjr8vX6FJUVCKPSrEQQp9n6WbPrUxr0lNEUDKatRbfkuCvHOQP6cyrCWPAzQyKMV4S6cVDlXyIwv4XFOXv2D37k9GCSfZ611IFgEk5XlHavgkf4ziBIa344zYYLZvamL8jhCUQ8asLc5kLMfQ',
  },
  {
    id: 'doctorstrange',
    name: 'DOCTOR STRANGE',
    realName: 'Stephen Strange',
    tier: 'SORCERER SUPREME',
    level: 98,
    category: 'midnight',
    tagBadge: 'SORCERER SUPREME',
    tagColor: 'bg-purple-600 text-white',
    firstApp: 'Strange Tales #110 (1963)',
    shortDesc: 'Stephen Strange. Master of the Mystic Arts, wielder of the Eye of Agamotto, and guardian of the Mirror Dimension gateway.',
    longBio: 'Former neurosurgeon turned Master of Mystic Arts. Guardian of the Sanctum Sanctorum, utilizing ancient Eldritch spells, the Cloak of Levitation, and the Book of the Vishanti.',
    powerMeterLabel: 'MYSTIC ARTS',
    powerMeterVal: 'MIRROR DIMENSION',
    powerPercent: 96,
    powerBarColor: 'bg-[#deb7ff]',
    powers: 'Eldritch Magic Shields, Mirror Dimension Banishment, Astral Body Projection, Runes of Kof-Kol, Dimensional Scrying.',
    synergy: 'Cast the Runes of Kof-Kol memory wipe spell which accidentally fractured the multiversal boundaries in Spider-Man: No Way Home.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp8m0IUHhhmqI7-f8cVLzBpyEZUwZAVLZH4j2RKe_tenxCqCoOmEtOpzJQxM8ZsG-dlbCzSxnuO-DCcDkuP4eJ4zMjSypBF26LPlsax2MFSyuWJfNuCMdBh4t8tvdw8IiwvTbYhKCqoXziveSUBWzWbaejxoifuzgX-TzTZBAHXxo-jUEomizCZvJjZVORBVLNKqHdXu3ZEtXiyfyOlT7dIcoMNfgP1yPk3A_PIixCukkdO_07uHhTeg',
  },
  {
    id: 'deadpool',
    name: 'DEADPOOL',
    realName: 'Wade Wilson',
    tier: 'CHAOS GREMLIN',
    level: 89,
    category: 'mutant',
    tagBadge: 'CHAOS GREMLIN',
    tagColor: 'bg-red-700 text-white',
    firstApp: 'New Mutants #98 (1991)',
    shortDesc: 'Wade Wilson. 4th-Wall dismantling mercenary, immortal regenerative cancer factor, and unpredictable dual-katana chaos.',
    longBio: 'The Merc with a Mouth. Endowed with experimental Weapon X healing and unhinged fourth-wall omniscience that allows him to break comic panel borders and subvert probability laws.',
    powerMeterLabel: 'CHAOS QUOTIENT',
    powerMeterVal: 'BREAKS MATRIX',
    powerPercent: 90,
    powerBarColor: 'bg-[#ff525e]',
    powers: '4th Wall Deconstruction, Extreme Immortal Tissue Regeneration, Dual Katana Flurry, Bottomless Ammo Pouch, Comic Gags.',
    synergy: 'Beloved yet chaotic frenemy; Spider-Man and Deadpool have one of the highest-selling team-up comic runs in Marvel history.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUTg3sPmA7I_OprsD-cg9ck3ZdZ29kyNF0yR7QDt69_QE9L3G04l184Du_VvWdzHGmdSHxlD8ygRUFcZp2i6pVs6uGlB1FZ-Jtpd_qIPr9olqR5tLQJKUmqQtGNSPJOZhuX-J5EJs8tqxsA_EfxpcyUilGsAUuGS9lWoLVp_AZAkjbD3rvtl17to7phmVeEfO0hanAOrqjPfTeJSLzmp3mPLUfpNjuCfqYhPCwCCnvgWE4sARtusQIrg',
  },
  {
    id: 'blackpanther',
    name: 'BLACK PANTHER',
    realName: 'Shuri / T\'Challa',
    tier: 'APEX KING',
    level: 94,
    category: 'avengers',
    tagBadge: 'APEX KING',
    tagColor: 'bg-purple-900 text-white',
    firstApp: 'Fantastic Four #52 (1966)',
    shortDesc: 'Shuri / T\'Challa. Vibranium kinetic dispersion weave, Heart-Shaped Herb agility, and Wakandan tactical genius.',
    longBio: 'Protector of the Golden City of Wakanda. Employs royal Vibranium nanotech woven through microscopic panther mesh to absorb kinetic blows and redirect them with concussive shockwaves.',
    powerMeterLabel: 'KINETIC DISCHARGE',
    powerMeterVal: 'VIBRANIUM WEAVE',
    powerPercent: 93,
    powerBarColor: 'bg-[#deb7ff]',
    powers: 'Kinetic Absorption Suit, Retractable Vibranium Claws, Heart-Shaped Herb Speed & Reflexes, Wakandan Kimoyo Net.',
    synergy: 'Co-developed advanced stealth polymer threading for Peter Parker\'s stealth Big Time suit and Miles Morales tech.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdG9ZCG4dd-xCA71haBk8pVeVmUUmtk6gMI8QUnN6S1qyh578e_GiHfFPssNDNdTXk8RXOJry9bhjtVHlQudu8huZ-zttWT2ojiMzFre8qtym17tTK5BijLtTDMwbcMPOo8rHB5zPCI4JanR6_g-u0FQ8CzZtbfkpQJecJfwEbHu6G-R4RMEsFdAWZSwsg2q_VjLgabhJ--LqPYjlcgdHqx7GWeiekxZMVNHJf_06-dxfTCbUgDXY3XQ',
  },
  {
    id: 'venom',
    name: 'VENOM',
    realName: 'Eddie Brock',
    tier: 'ANTI-HERO',
    level: 93,
    category: 'villain',
    tagBadge: 'ANTI-HERO',
    tagColor: 'bg-emerald-600 text-white',
    firstApp: 'Amazing Spider-Man #300 (1988)',
    shortDesc: 'Eddie Brock. Klyntar Symbiote bonding, total Spider-Sense immunity, lethal tendril generation, and brute superhuman strength.',
    longBio: 'Bonded with the primordial alien Klyntar symbiote that previously bonded with Peter Parker. Retains all of Spider-Man\'s physical powers but amplified tenfold, plus organic web fluid and total Spider-Sense stealth.',
    powerMeterLabel: 'SYMBIOTE DENSITY',
    powerMeterVal: 'IMMUNITY ACTIVE',
    powerPercent: 92,
    powerBarColor: 'bg-[#ff525e]',
    powers: 'Full Spider-Sense Invisibility, Polymorphic Tendril Blades, Symbiote Webbing, 70-Ton Superhuman Press, Camouflage.',
    synergy: 'The greatest dark reflection of Spider-Man who evolved from mortal nemesis to the Multiverse\'s Lethal Protector.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8Qlogk866AzB_yH3H7omDXMHL8qh7II8q2AkOISr9wCA-JVxrPDDEi_mYA12QJf1R7ZEBHYxCTn3DQEbeCn-XenQG0JiqixMk3xguEVBLE4L-gw43kOMI_8By62lVV5Vzkno7-vQ5Mxq5Hnn5OjHcVk5vgbqrbaZd0N1E_YGOJCwyKs1rXbC0ytjQM6zGiJmAs2FQt56iVDMyWh8OcG-kTtLrNSl68hxxt7ZFYhsCVHVccE-tscWd9Q',
  },
];

// 3. MULTIVERSE CRISIS SIMULATOR RIVALS
export interface CrisisRival {
  id: string;
  name: string;
  universe: string;
  tier: string;
  stat1Label: string;
  stat1: string;
  stat2Label: string;
  stat2: string;
  stat3Label: string;
  stat3: string;
  spideyProb: number;
  rivalProb: number;
  verdict: string;
  tacticalTip: string;
  imageUrl: string;
}

export const CRISIS_RIVALS: Record<string, CrisisRival> = {
  wolverine: {
    id: 'wolverine',
    name: 'WOLVERINE',
    universe: 'EARTH-616',
    tier: 'CHALLENGER B // MUTANT',
    stat1Label: 'DURABILITY RATING:',
    stat1: '98 / 100',
    stat2Label: 'COMBAT IQ:',
    stat2: '92 / 100',
    stat3Label: 'SPEED / AGILITY:',
    stat3: '84 / 100',
    spideyProb: 62,
    rivalProb: 38,
    verdict: 'VERDICT: Spider-Man outpaces claw attacks using precognitive Spider-Sense and distance web-traps.',
    tacticalTip: 'Keep engagement distance $\\ge$ 15m. Wrap Adamantium joints with high-density tensile web fluid to restrict leverage.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzIWtXh0aocCbCFD2Fld-RB6uzUkI32fFBLJzNYHq2HeTCLAKXgD_PYDIGEtYih5xeJG9RqJwQzUmWIQWQbYL3fO4OKOLj-7EzVGWtLFjr8vX6FJUVCKPSrEQQp9n6WbPrUxr0lNEUDKatRbfkuCvHOQP6cyrCWPAzQyKMV4S6cVDlXyIwv4XFOXv2D37k9GCSfZ611IFgEk5XlHavgkf4ziBIa344zYYLZvamL8jhCUQ8asLc5kLMfQ',
  },
  ironman: {
    id: 'ironman',
    name: 'IRON MAN',
    universe: 'EARTH-616',
    tier: 'CHALLENGER B // TECH GOD',
    stat1Label: 'BALLISTIC ARMOR:',
    stat1: '94 / 100',
    stat2Label: 'SYSTEM COMPUTATION:',
    stat2: '99 / 100',
    stat3Label: 'ENERGY OUTPUT:',
    stat3: '96 / 100',
    spideyProb: 49,
    rivalProb: 51,
    verdict: 'VERDICT: Extremely narrow split. Iron Man\'s targeting telemetry counters evasions, but Spidey EMP fluid disrupts Arc reactor circuits.',
    tacticalTip: 'Target the Arc Reactor casing with conductive web line; avoid Friday AI long-range trajectory prediction traps.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1zRiGIov4joB_EQcgQaXh-OkMpQup3uAXlYX0J92T0sasBKeFdDSuQebscrwzy0ZyNoApBwX97uDdJlb15DsrtsQyne5xpMIaPezgtbV-_MLlZbqrdkoWYnw_IswWpohWNNMft87-vxRAgzThYdBXBlXligNaXN5-DgnS3doZwU7RPeXW32rjYeVRek-mndMLL29g3egMkPCs25Zoy8Yy0TbRhfywrdxdXUF-w-9kb8A99s9ez2p_8w',
  },
  venom: {
    id: 'venom',
    name: 'VENOM',
    universe: 'EARTH-616',
    tier: 'CHALLENGER B // SYMBIOTE',
    stat1Label: 'PHYSICAL BRUTE MASS:',
    stat1: '96 / 100',
    stat2Label: 'SPIDER-SENSE IMMUNITY:',
    stat2: '100 / 100',
    stat3Label: 'TENDRIL LETHALITY:',
    stat3: '94 / 100',
    spideyProb: 54,
    rivalProb: 46,
    verdict: 'VERDICT: Symbiote nullifies Spider-Sense detection, giving Venom initial physical advantage until Spidey introduces high-frequency sonic resonance.',
    tacticalTip: 'Exploit Klyntar thermal and sonic vulnerabilities. Pipe church bells or high-frequency church pipes through web amplifiers.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8Qlogk866AzB_yH3H7omDXMHL8qh7II8q2AkOISr9wCA-JVxrPDDEi_mYA12QJf1R7ZEBHYxCTn3DQEbeCn-XenQG0JiqixMk3xguEVBLE4L-gw43kOMI_8By62lVV5Vzkno7-vQ5Mxq5Hnn5OjHcVk5vgbqrbaZd0N1E_YGOJCwyKs1rXbC0ytjQM6zGiJmAs2FQt56iVDMyWh8OcG-kTtLrNSl68hxxt7ZFYhsCVHVccE-tscWd9Q',
  },
  deadpool: {
    id: 'deadpool',
    name: 'DEADPOOL',
    universe: 'EARTH-12101',
    tier: 'CHALLENGER B // CHAOS',
    stat1Label: 'REGENERATION FACTOR:',
    stat1: '99 / 100',
    stat2Label: 'UNPREDICTABILITY:',
    stat2: '100 / 100',
    stat3Label: 'MARTIAL ARSENAL:',
    stat3: '88 / 100',
    spideyProb: 71,
    rivalProb: 29,
    verdict: 'VERDICT: Spider-Man effortlessly wraps Deadpool in web-cocoons within 90 seconds while enduring constant 4th-wall quips.',
    tacticalTip: 'Do not debate philosophy. Subdue with 40-layer cocoon web-bind and attach to the side of a water tower.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUTg3sPmA7I_OprsD-cg9ck3ZdZ29kyNF0yR7QDt69_QE9L3G04l184Du_VvWdzHGmdSHxlD8ygRUFcZp2i6pVs6uGlB1FZ-Jtpd_qIPr9olqR5tLQJKUmqQtGNSPJOZhuX-J5EJs8tqxsA_EfxpcyUilGsAUuGS9lWoLVp_AZAkjbD3rvtl17to7phmVeEfO0hanAOrqjPfTeJSLzmp3mPLUfpNjuCfqYhPCwCCnvgWE4sARtusQIrg',
  },
  thor: {
    id: 'thor',
    name: 'THOR ODINSON',
    universe: 'EARTH-616',
    tier: 'CHALLENGER B // ASGARDIAN GOD',
    stat1Label: 'GODLY STRENGTH:',
    stat1: '100 / 100',
    stat2Label: 'COSMIC DURABILITY:',
    stat2: '99 / 100',
    stat3Label: 'STORM MANIPULATION:',
    stat3: '98 / 100',
    spideyProb: 32,
    rivalProb: 68,
    verdict: 'VERDICT: Pure divine overpower. Spider-Man can evade Mjolnir strikes for ~4 minutes before thunder shockwaves disorient nervous balance.',
    tacticalTip: 'Web up Mjolnir handle to disrupt flight trajectory, but disengage and negotiate Asgardian diplomatic ceasefire immediately.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5a7KMMWpKrd-lHjLajUXGVt5HzEOfgb2JUV7zgfjLZMPjVidgkCS6FsE2LCQE56Goa8Eu6gZ3dGBLouIreRatVF4zsbAUHG_uzoEKzIM5NcNxnvpBD8bIk1kf1QdPSGQES8uleYoxVgq6bBhf2UbFibM9wd6n0YGYdsAtJxZiKajHecWy2mhh_a7cW5MdYgnh-K-2hZlhsMso98IE1ZU4nH8s9cx0EXKC3fHBoXssbxOV8ud6CQA4Rg',
  },
  doctorstrange: {
    id: 'doctorstrange',
    name: 'DOCTOR STRANGE',
    universe: 'EARTH-616',
    tier: 'CHALLENGER B // SORCERER SUPREME',
    stat1Label: 'ELDRITCH MASTERY:',
    stat1: '98 / 100',
    stat2Label: 'DIMENSIONAL TRAPPING:',
    stat2: '99 / 100',
    stat3Label: 'ASTRAL SPEED:',
    stat3: '95 / 100',
    spideyProb: 44,
    rivalProb: 56,
    verdict: 'VERDICT: Geometry vs Magic. Spider-Man\'s mathematical spatial intuition counters mirror distortions, but mystical hexes ignore kinetic laws.',
    tacticalTip: 'Use Archimedean spirals when slinging webs across the Mirror Dimension to match fractal refractions.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp8m0IUHhhmqI7-f8cVLzBpyEZUwZAVLZH4j2RKe_tenxCqCoOmEtOpzJQxM8ZsG-dlbCzSxnuO-DCcDkuP4eJ4zMjSypBF26LPlsax2MFSyuWJfNuCMdBh4t8tvdw8IiwvTbYhKCqoXziveSUBWzWbaejxoifuzgX-TzTZBAHXxo-jUEomizCZvJjZVORBVLNKqHdXu3ZEtXiyfyOlT7dIcoMNfgP1yPk3A_PIixCukkdO_07uHhTeg',
  },
};

// 4. MULTIVERSE PORTALS
export const MULTIVERSE_PORTALS: DimensionPortal[] = [
  {
    id: 'p-1610',
    code: 'EARTH-1610',
    name: 'Miles Morales Dimension',
    designation: 'Ultimate Universe // Brooklyn Core',
    status: 'STABLE',
    glitchHz: 14.28,
    dominantSpider: 'Miles Morales',
    timelineIntegrity: 94,
    description: 'Vibrant neon street culture, Brooklyn graffiti rooftops, Alchemax bio-engineering conglomerate, and quantum particle collider epicenter.',
    bgAtmosphere: 'from-[#ff525e]/20 via-[#121318] to-[#00eefc]/20',
    threatRank: 'ALPHA',
  },
  {
    id: 'p-616',
    code: 'EARTH-616',
    name: 'Peter Parker Prime Continuum',
    designation: 'Original Marvel Core // Queens HQ',
    status: 'STABLE',
    glitchHz: 4.12,
    dominantSpider: 'Peter B. Parker',
    timelineIntegrity: 99,
    description: 'The prime timeline anchor of the Web of Life and Destiny. Midtown Manhattan, Daily Bugle, Baxter Building, and Avengers Compound.',
    bgAtmosphere: 'from-blue-600/20 via-[#121318] to-red-600/20',
    threatRank: 'BETA',
  },
  {
    id: 'p-65',
    code: 'EARTH-65',
    name: 'Ghost-Spider Dimension',
    designation: 'Mary Janes Indie Rock // Pastel Noir',
    status: 'STABLE',
    glitchHz: 18.65,
    dominantSpider: 'Gwen Stacy',
    timelineIntegrity: 91,
    description: 'Expressionistic watercolor world that shifts hues dynamically according to Gwen\'s emotional state. Heavy percussion riot-grrrl soundtrack.',
    bgAtmosphere: 'from-[#deb7ff]/20 via-[#121318] to-[#00eefc]/20',
    threatRank: 'BETA',
  },
  {
    id: 'p-928',
    code: 'EARTH-928',
    name: 'Nueva York 2099',
    designation: 'Spider-Society Central Citadel',
    status: 'ANOMALOUS',
    glitchHz: 42.09,
    dominantSpider: 'Miguel O\'Hara',
    timelineIntegrity: 87,
    description: 'Towering multi-kilometer cybernetic megastructures, autonomous flying mag-lev cars, and the colossal headquarters of the Spider-Society.',
    bgAtmosphere: 'from-[#ff525e]/25 via-[#121318] to-blue-900/30',
    threatRank: 'ALPHA',
  },
  {
    id: 'p-138',
    code: 'EARTH-138',
    name: 'Anarchic London',
    designation: 'Spider-Punk Anti-Establishment',
    status: 'ANOMALOUS',
    glitchHz: 77.13,
    dominantSpider: 'Hobie Brown',
    timelineIntegrity: 82,
    description: 'Collage-cutout punk zine reality bathed in newsprint halftones, xerox grain, Camden pub venues, and anti-Norman Osborn rebellion banners.',
    bgAtmosphere: 'from-yellow-400/20 via-[#121318] to-[#ff525e]/20',
    threatRank: 'OMEGA',
  },
  {
    id: 'p-42',
    code: 'EARTH-42',
    name: 'The Spider-Less Dimension',
    designation: 'Sinister Syndicate / The Prowler Miles',
    status: 'CRITICAL BREACH',
    glitchHz: 104.5,
    dominantSpider: 'Miles G. Morales (Prowler)',
    timelineIntegrity: 61,
    description: 'The universe whose spider bit Earth-1610 Miles. With no Spider-Man to protect it, New York fell completely to crime syndicates and The Prowler.',
    bgAtmosphere: 'from-purple-900/30 via-[#121318] to-emerald-950/20',
    threatRank: 'CRITICAL BREACH' as unknown as 'OMEGA',
  },
  {
    id: 'p-50101',
    code: 'EARTH-50101',
    name: 'Mumbattan',
    designation: 'Pavitr Prabhakar Gateway',
    status: 'STABLE',
    glitchHz: 22.4,
    dominantSpider: 'Pavitr Prabhakar',
    timelineIntegrity: 93,
    description: 'Hyper-vibrant geometric fusion of Mumbai and Manhattan. High-density suspension bridges, colorful autorickshaws, and kaleidoscopic kinetic webbing.',
    bgAtmosphere: 'from-amber-500/20 via-[#121318] to-sky-500/20',
    threatRank: 'BETA',
  },
  {
    id: 'p-8311',
    code: 'EARTH-8311',
    name: 'Larval Realm',
    designation: 'Peter Porker Cartoon Physics',
    status: 'STABLE',
    glitchHz: 8.88,
    dominantSpider: 'Spider-Ham',
    timelineIntegrity: 98,
    description: 'Rubber-hose animation continuum where physics obeys classic cartoon slapstick logic: giant wooden mallets, portable hole portals, and falling anvils.',
    bgAtmosphere: 'from-pink-500/20 via-[#121318] to-yellow-400/20',
    threatRank: 'EPSILON',
  },
];

// 5. COMIC ARTIFACTS
export const COMIC_ARTIFACTS: ComicArtifact[] = [
  {
    id: 'art-1',
    title: 'Edge of Spider-Verse #1',
    issueNumber: '#1',
    year: 2014,
    rarity: 'ORIGIN KEY',
    significance: 'First canonical appearance of Spider-Man Noir, introducing the multi-dimensional spider hunt lore.',
    priceEstimate: '$680.00',
    variantCover: 'Virgin Foil Cover',
    earthOrigin: 'EARTH-90214',
    status: 'MINT CONDITION [CGC 9.8]',
  },
  {
    id: 'art-2',
    title: 'Edge of Spider-Verse #2',
    issueNumber: '#2',
    year: 2014,
    rarity: 'MYTHIC',
    significance: 'Debut of Gwen Stacy as Spider-Woman (Spider-Gwen / Ghost-Spider) by Jason Latour & Robbi Rodriguez.',
    priceEstimate: '$2,450.00',
    variantCover: 'Original 1st Print Sketch',
    earthOrigin: 'EARTH-65',
    status: 'VAULT RESTRICTED',
  },
  {
    id: 'art-3',
    title: 'Ultimate Fallout #4',
    issueNumber: '#4',
    year: 2011,
    rarity: 'MYTHIC',
    significance: 'First full appearance of Miles Morales donning the Spider-Man mask following the death of Ultimate Peter Parker.',
    priceEstimate: '$3,800.00',
    variantCover: 'Djurdjevic 1:25 Ratio Variant',
    earthOrigin: 'EARTH-1610',
    status: 'CANON PILLAR [CGC 9.9]',
  },
  {
    id: 'art-4',
    title: 'Spider-Man 2099 #1',
    issueNumber: '#1',
    year: 1992,
    rarity: 'ORIGIN KEY',
    significance: 'First solo series for Miguel O\'Hara, establishing Nueva York and the cybernetic Spider-Society protocols.',
    priceEstimate: '$340.00',
    variantCover: 'Red Foil Embossed Collector',
    earthOrigin: 'EARTH-928',
    status: 'ARCHIVE SECURED',
  },
  {
    id: 'art-5',
    title: 'Secret Wars #8',
    issueNumber: '#8',
    year: 1984,
    rarity: 'ORIGIN KEY',
    significance: 'Origin and first acquisition of the alien Black Symbiote Suit on Battleworld, spawning Venom.',
    priceEstimate: '$1,900.00',
    variantCover: 'Mike Zeck Classic Newsstand',
    earthOrigin: 'BATTLEWORLD',
    status: 'MINT SYMBIO-RECORD',
  },
  {
    id: 'art-6',
    title: 'Spider-Verse #1 [Anomaly Edition]',
    issueNumber: '#1',
    year: 2023,
    rarity: 'CANON BREACH',
    significance: 'Temporal anomaly documented during Spot\'s dimension leap into Alchemax collider room.',
    priceEstimate: '$850.00',
    variantCover: 'Glitch Hologram 3D Lenticular',
    earthOrigin: 'THE NEXUS',
    status: 'ACTIVE BREACH DETECTED',
  },
];

// 6. MULTIVERSE MIXTAPE TRACKS
export interface MixtapeTrack {
  id: string;
  title: string;
  artist: string;
  subGenre: string;
  duration: string;
  bpm: number;
}

export const MIXTAPE_TRACKS: MixtapeTrack[] = [
  {
    id: 'track-1',
    title: 'SUNFLOWER REDUX [BROOKLYN DRIFT]',
    artist: 'MILES MORALES x POST MALONE',
    subGenre: 'LO-FI BOOM BAP & VINYL CRACKLE',
    duration: '03:42',
    bpm: 94,
  },
  {
    id: 'track-2',
    title: 'PUNK ROCK ANARCHY [CAMDEN FUZZ]',
    artist: 'HOBIE BROWN // 200W MARSHALL VALVE TUBE',
    subGenre: '160dB DISTORTION RIOT-PUNK',
    duration: '02:18',
    bpm: 155,
  },
  {
    id: 'track-3',
    title: 'WHAT\'S UP DANGER 2099 [SYNTHWAVE TRAP]',
    artist: 'BLACKWAY x CAVI (CYBERPUNK DISTORTION MIX)',
    subGenre: 'NUEVA YORK HYPER-SYNTH 808',
    duration: '04:05',
    bpm: 138,
  },
  {
    id: 'track-4',
    title: 'NOIR MONOCHROME [RAIN ON BROADWAY]',
    artist: 'PETER PARKER 1933 // PRIVATE EYE QUINTET',
    subGenre: 'DARK SMOKY JAZZ & RAIN DRIP',
    duration: '03:15',
    bpm: 76,
  },
];
