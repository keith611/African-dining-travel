export const DESTINATIONS = [
  {
    id: "kenya",
    name: "Kenya",
    country: "Kenya",
    region: "Safari, Coast & City",
    tags: ["Safari", "Wildlife", "Coastal", "City", "Culture"],
    coordinates: "1.29°S, 36.82°E",
    tagline: "Coastlines, capital city and classic savannah, all in one country",
    accent: "teal",
    heroImage: "HOT AIR BALLOONS AT DAWN",
    cardImage: "ELEPHANT HERD ON SAFARI — KENYA IMAGE",
    description:
      "Kenya pairs the classic safari circuit — the Maasai Mara, Amboseli, Samburu and beyond — with a working coastline of dhow harbours and reef-sheltered beaches, and a capital city where wildlife and skyline share a fence line.",
    bestTime: "June – October (dry season) for most parks; the coast is a year-round destination",
    highlights: [
      "The Maasai Mara's Great Migration and big cat sightings",
      "Amboseli's elephant herds beneath Mount Kilimanjaro",
      "Mombasa's Old Town and dhow-lined coastline",
      "Nairobi, the only capital with a national park at its edge",
    ],
    quote: "Kenya was never just one trip — it's a coastline, a capital and half a dozen distinct safari ecosystems, each worth its own itinerary.",
    categories: [
      {
        title: "Coast & Cities",
        icon: "Building2",
        items: [
          { name: "Mombasa", blurb: "Kenya's historic coastal city, with Old Town, Fort Jesus and dhow-lined beaches — covered in full on its own page.", linksTo: "mombasa", linksToLabel: "Mombasa" },
          { name: "Diani Beach", blurb: "Ten kilometres of white sand on the south coast — covered in full on its own page.", linksTo: "diani", linksToLabel: "Diani" },
          { name: "Nairobi", blurb: "Kenya's capital, where Nairobi National Park sits at the edge of the skyline — covered in full on its own page.", linksTo: "nairobi", linksToLabel: "Nairobi" },
        ],
      },
      {
        title: "Coastal Kenya",
        icon: "Waves",
        items: [
          { name: "Malindi", blurb: "A historic coastal town north of Mombasa, known for its beaches and marine park." },
          { name: "Watamu", blurb: "A quiet beach town near Malindi, known for its marine national park and reef diving." },
          { name: "Bamburi", blurb: "A beach suburb of Mombasa, home to hotels and the Haller Park nature sanctuary." },
          { name: "Kilifi", blurb: "A coastal town on Kilifi Creek, known for its beaches and historic ruins nearby." },
          { name: "Fort Jesus / Mombasa City Tour", blurb: "A guided tour of Mombasa's 16th-century Portuguese fort and the surrounding Old Town." },
          { name: "Wasini Island", blurb: "An island off Shimoni on Kenya's south coast, known for dolphin tours and marine park excursions." },
          { name: "Chale Island", blurb: "A small island off Diani, ringed by coral reef and beach." },
          { name: "Shimoni", blurb: "A coastal village near Wasini Island, the departure point for dolphin-watching and reef excursions." },
        ],
      },
      {
        title: "Safari & Wildlife",
        icon: "PawPrint",
        items: [
          { name: "Maasai Mara", blurb: "Kenya's best-known safari reserve, home to the Great Migration — covered in full on its own page.", linksTo: "maasai-mara", linksToLabel: "Maasai Mara" },
          { name: "Amboseli National Park", image: "AMBOSELI ELEPHANTS", blurb: "Famous for its large elephant herds and spectacular views of Mount Kilimanjaro.", linksTo: "amboseli", linksToLabel: "Amboseli" },
          { name: "Samburu Game Reserve", image: "SAMBURU ZEBRA", blurb: "Discover rugged northern landscapes and unique wildlife, including species rarely found elsewhere in Kenya.", linksTo: "samburu", linksToLabel: "Samburu" },
          { name: "Lake Nakuru National Park", image: "LAKE NAKURU RHINO", blurb: "Explore a scenic Rift Valley park known for rhinos, flamingos, diverse birdlife and beautiful lake views.", linksTo: "lake-nakuru", linksToLabel: "Lake Nakuru" },
          { name: "Lake Naivasha", image: "LAKE NAIVASHA BIRD", blurb: "Enjoy a peaceful freshwater lake surrounded by wildlife, birdlife and opportunities for boat rides and nature experiences." },
          { name: "Tsavo National Park", blurb: "Discover one of Kenya's largest wilderness areas, famous for elephants, dramatic landscapes and unforgettable safari experiences." },
          { name: "Taita Hills", blurb: "Explore scenic hills, rich wildlife and intimate safari experiences in one of Kenya's beautiful private conservancies." },
          { name: "Hell's Gate National Park", image: "HELL'S GATE GORGE", blurb: "Experience dramatic cliffs, gorges and geothermal landscapes while enjoying hiking, cycling and wildlife encounters." },
          { name: "Nairobi National Park", blurb: "A unique safari park bordering Nairobi's skyline, home to lion, rhino and giraffe." },
        ],
      },
    ],
    gallery: ["CHEETAHS ON THE CHASE", "MOMBASA TUDOR CREEK AT DUSK", "GIRAFFE CENTRE", "HOT AIR BALLOONS AT DAWN", "KENYA WILD DOGS"],
  },
  {
    id: "amboseli", name: "Amboseli National Park", country: "Kenya", region: "Safari",
    hidden: true, tags: ["Wildlife", "Safari"], coordinates: "2.65°S, 37.26°E",
    tagline: "Elephants beneath the wide skies of Mount Kilimanjaro", accent: "gold",
    heroImage: "AMBOSELI KILIMANJARO", cardImage: "AMBOSELI ELEPHANTS",
    description: "Amboseli is known for its large elephant herds and open views toward Mount Kilimanjaro. Its swamps, plains and acacia woodland support a rich variety of wildlife.",
    bestTime: "June – October and January – February",
    highlights: ["Elephant herds", "Views of Mount Kilimanjaro", "Swamps and open plains"],
    quote: "In Amboseli, elephants move across the plain beneath one of Africa’s most recognisable mountain silhouettes.",
    categories: [{ title: "Wildlife & Scenery", icon: "PawPrint", items: [{ name: "Elephants of Amboseli", image: "AMBOSELI ELEPHANTS", blurb: "See Amboseli’s elephant herds moving beneath Kilimanjaro." }] }],
    gallery: ["AMBOSELI ELEPHANTS"],
  },
  {
    id: "samburu", name: "Samburu Game Reserve", country: "Kenya", region: "Safari",
    hidden: true, tags: ["Wildlife", "Safari", "Culture"], coordinates: "0.62°N, 37.53°E",
    tagline: "Wildlife and rugged landscapes in Kenya’s northern frontier", accent: "gold",
    heroImage: "SAMBURU LANDSCAPE", cardImage: "SAMBURU ZEBRA",
    description: "Samburu’s dry northern landscape is home to distinctive wildlife and the Ewaso Ng’iro River, which draws animals through the reserve.",
    bestTime: "June – October",
    highlights: ["Grevy’s zebra", "Dry-country wildlife", "Rugged northern scenery"],
    quote: "Samburu’s wildlife and dry-country scenery give Kenya’s northern safari circuit its own character.",
    categories: [{ title: "Wildlife", icon: "PawPrint", items: [{ name: "Northern Kenya Wildlife", image: "SAMBURU ANTELOPE", blurb: "Look for wildlife adapted to the reserve’s dry northern habitats." }] }],
    gallery: ["SAMBURU ANTELOPE", "SAMBURU BIRD AND CHICK"],
  },
  {
    id: "lake-nakuru", name: "Lake Nakuru National Park", country: "Kenya", region: "Safari",
    hidden: true, tags: ["Wildlife", "Safari", "Birdlife"], coordinates: "0.37°S, 36.09°E",
    tagline: "Rift Valley lake scenery and a sanctuary for rhinos", accent: "teal",
    heroImage: "LAKE NAKURU SCENIC LAKE", cardImage: "LAKE NAKURU RHINO",
    description: "Lake Nakuru National Park combines Rift Valley lake scenery with woodland and grassland habitats that support rhinos, antelope and abundant birdlife.",
    bestTime: "Year-round; June – February is generally drier",
    highlights: ["Rhino sanctuary", "Lake and escarpment views", "Birdlife and antelope"],
    quote: "At Lake Nakuru, wildlife sightings and changing lake views share the same compact park.",
    categories: [{ title: "Wildlife & Scenery", icon: "PawPrint", items: [{ name: "Lake Nakuru Wildlife", image: "LAKE NAKURU ANTELOPE", blurb: "Explore the park’s lake, grassland and wildlife habitats." }] }],
    gallery: ["LAKE NAKURU ANTELOPE", "LAKE NAKURU RHINO"],
  },
  {
    id: "mombasa",
    name: "Mombasa",
    country: "Kenya",
    region: "Coastal",
    // Now reachable via its country's cross-link (see VISIBLE_DESTINATIONS,
    // which excludes anything hidden: true) rather than as a top-level card.
    hidden: true,
    tags: ["Coastal", "Culture"],
    coordinates: "4.05°S, 39.66°E",
    tagline: "Where the Indian Ocean meets centuries of Swahili history",
    accent: "teal",
    heroImage: "MOMBASA — HERO IMAGE",
    cardImage: "MOMBASA — COASTLINE IMAGE",
    description:
      "Kenya's old harbour city layers Swahili, Portuguese and Omani history along a coastline of warm, reef-sheltered water. Spend your mornings in the coral-stone lanes of Old Town and your afternoons on sand the colour of bone china — Mombasa rewards a slow itinerary.",
    bestTime: "June – March",
    highlights: [
      "Old Town's carved doors and coral-stone alleys",
      "Fort Jesus, a 16th-century Portuguese garrison",
      "Reef-sheltered beaches from Nyali to Diani",
      "Dhow sails at sunset off Tudor Creek",
    ],
    quote: "Mombasa doesn't perform for visitors — it simply continues, and lets you in.",
    categories: [
      {
        title: "Beaches",
        icon: "Waves",
        items: [
          { name: "Nyali Beach", blurb: "Wide, reef-protected sand a short drive from the city centre — calm water, good for families." },
          { name: "Bamburi Beach", blurb: "The liveliest stretch of coast, with beach bars, camel rides at dusk and watersports operators." },
        ],
      },
      {
        title: "Culture & History",
        icon: "Landmark",
        items: [
          { name: "Fort Jesus", blurb: "A UNESCO World Heritage garrison built by the Portuguese in 1593, guarding the old harbour mouth." },
          { name: "Old Town", blurb: "Narrow coral-stone streets lined with intricately carved Swahili and Omani doors." },
        ],
      },
      {
        title: "Dining",
        icon: "UtensilsCrossed",
        items: [
          { name: "Swahili Seafood Kitchens", blurb: "Coconut-and-tamarind curries, grilled kingfish and biryani rooted in centuries of trade." },
          { name: "Tamarind Dhow Dinner", blurb: "A restored dhow moored at sunset, seafood platters served on deck." },
        ],
      },
      {
        title: "Activities",
        icon: "Compass",
        items: [
          { name: "Dhow Sunset Cruise", blurb: "Traditional sail out past the harbour, drinks and grilled snacks included." },
          { name: "Mombasa Marine Park", blurb: "Glass-bottom boat snorkelling over shallow coral gardens." },
        ],
      },
    ],
    gallery: ["OLD TOWN DOORWAY", "FORT JESUS RAMPARTS", "DHOW AT SUNSET", "NYALI BEACH AERIAL", "SWAHILI SEAFOOD PLATE", "TUDOR CREEK", "DHOW HARBOUR AT DUSK"],
  },
  {
    id: "nairobi",
    name: "Nairobi",
    country: "Kenya",
    region: "City",
    // Now reachable via its country's cross-link (see VISIBLE_DESTINATIONS,
    // which excludes anything hidden: true) rather than as a top-level card.
    hidden: true,
    tags: ["City", "Wildlife", "Culture"],
    coordinates: "1.29°S, 36.82°E",
    tagline: "The only capital in the world with a national park at its edge",
    accent: "gold",
    heroImage: "NAIROBI — SKYLINE HERO IMAGE",
    cardImage: "NAIROBI — SKYLINE IMAGE",
    description:
      "Nairobi moves between two identities without friction — a fast, design-forward East African capital, and a city where giraffes graze against a backdrop of glass towers. It's the natural first and last stop on an East African itinerary.",
    bestTime: "Year-round; driest Jun–Oct",
    highlights: [
      "Nairobi National Park, wildlife within city limits",
      "The Nairobi Gallery and Maasai Market for design and craft",
      "A fast-growing, chef-led restaurant scene",
      "Giraffe Centre and the David Sheldrick elephant nursery",
    ],
    quote: "Nairobi is proof that a capital city and a savannah can share a fence line.",
    categories: [
      {
        title: "Wildlife",
        icon: "PawPrint",
        items: [
          { name: "Nairobi National Park", blurb: "Lion, rhino and giraffe roam within sight of the skyline — a half-day safari from breakfast." },
          { name: "Sheldrick Wildlife Trust", blurb: "Orphaned elephant calves, hand-raised and readied for release into the wild." },
        ],
      },
      {
        title: "Culture & History",
        icon: "Landmark",
        items: [
          { name: "Maasai Market", blurb: "A rotating open-air market for beadwork, textiles and carvings, sold directly by makers." },
          { name: "Nairobi National Museum", blurb: "Kenya's natural and cultural history, from hominid fossils to contemporary art." },
        ],
      },
      {
        title: "Dining",
        icon: "UtensilsCrossed",
        items: [
          { name: "Chef-Led Tasting Rooms", blurb: "A new generation of Nairobi kitchens reworking Kenyan staples with technique and provenance." },
          { name: "Nyama Choma Gardens", blurb: "Open-fire grilling done communally, best eaten outdoors, late into the evening." },
        ],
      },
    ],
    gallery: ["NAIROBI SKYLINE AT DUSK", "GIRAFFE CENTRE", "MAASAI MARKET COMMUNITY", "NATIONAL PARK LIONESS", "ROOFTOP DINING", "BLACK RHINO SIGHTING"],
  },
  {
    id: "diani",
    name: "Diani Beach",
    country: "Kenya",
    region: "Coastal",
    // Now reachable via its country's cross-link (see VISIBLE_DESTINATIONS,
    // which excludes anything hidden: true) rather than as a top-level card.
    hidden: true,
    tags: ["Coastal", "Adventure"],
    coordinates: "4.28°S, 39.59°E",
    tagline: "Ten kilometres of white sand backed by ancient coastal forest",
    accent: "teal",
    heroImage: "DIANI BEACH — HERO IMAGE",
    cardImage: "DIANI BEACH — SHORELINE IMAGE",
    description:
      "South of Mombasa, Diani trades city history for pure coastline — a long, palm-lined beach with some of the clearest water on the East African coast, backed by remnant forest that still holds colobus monkeys.",
    bestTime: "December – March",
    highlights: [
      "Ten uninterrupted kilometres of white sand",
      "Kite-surfing conditions among East Africa's best",
      "Colobus Conservation forest walks",
      "Kaya Kinondo, a sacred Mijikenda forest",
    ],
    quote: "The sand here is fine enough to forget you're wearing shoes at all.",
    categories: [
      {
        title: "Beaches",
        icon: "Waves",
        items: [
          { name: "Diani Main Beach", blurb: "Powder-soft sand, calm reef-protected shallows, sun loungers under makuti-thatch shade." },
          { name: "Galu Beach", blurb: "The quieter southern stretch, favoured for long, uninterrupted morning walks." },
        ],
      },
      {
        title: "Activities",
        icon: "Compass",
        items: [
          { name: "Kite-Surfing Diani", blurb: "Reliable cross-shore wind and a wide, shallow lagoon make this a training-ground favourite." },
          { name: "Colobus Forest Walk", blurb: "Guided walks through remnant coastal forest, home to the endangered Angolan colobus." },
        ],
      },
      {
        title: "Nature",
        icon: "TreePine",
        items: [
          { name: "Kaya Kinondo Sacred Forest", blurb: "A living Mijikenda sacred site, still used for ceremony, opened to visitors with a guide." },
        ],
      },
    ],
    gallery: ["DIANI SHORELINE", "KITE SURFER AT SUNSET", "COLOBUS MONKEY", "MAKUTI BEACH LOUNGERS"],
  },
  {
    id: "maasai-mara",
    name: "Maasai Mara",
    country: "Kenya",
    region: "Safari",
    // Now reachable via its country's cross-link (see VISIBLE_DESTINATIONS,
    // which excludes anything hidden: true) rather than as a top-level card.
    hidden: true,
    tags: ["Wildlife", "Safari"],
    coordinates: "1.50°S, 35.14°E",
    tagline: "The grass sea where the Great Migration crosses the Mara River",
    accent: "gold",
    heroImage: "MAASAI MARA — HERO IMAGE",
    cardImage: "MAASAI MARA — SAVANNAH IMAGE",
    description:
      "An extension of Tanzania's Serengeti across the border, the Mara is short-grass plain to the horizon, dense with resident wildlife year-round and the stage for the wildebeest migration's most dramatic river crossings.",
    bestTime: "July – October, for the migration",
    highlights: [
      "Wildebeest and zebra river crossings, Jul–Oct",
      "Dense, resident lion and cheetah populations",
      "Sunrise hot-air balloon flights over the plains",
      "Maasai cultural visits with local communities",
    ],
    quote: "There is a particular quiet to the Mara at first light, just before the plain wakes up.",
    categories: [
      {
        title: "Wildlife",
        icon: "PawPrint",
        items: [
          { name: "Great Migration Crossings", blurb: "Watch a million wildebeest and zebra cross the crocodile-filled Mara River, Jul–Oct." },
          { name: "Big Cat Territories", blurb: "Some of Africa's most-studied lion prides and a healthy resident cheetah population." },
        ],
      },
      {
        title: "Activities",
        icon: "Compass",
        items: [
          { name: "Hot-Air Balloon Safari", blurb: "A sunrise flight over the plains, followed by a champagne bush breakfast on landing." },
          { name: "Guided Game Drives", blurb: "Dawn and dusk drives with trackers who read the plain like a shared language." },
        ],
      },
      {
        title: "Culture & History",
        icon: "Landmark",
        items: [
          { name: "Maasai Village Visit", blurb: "A hosted visit to a local manyatta, with beadwork, song and grazing-economy insight." },
        ],
      },
    ],
    gallery: ["WILDEBEEST RIVER CROSSING", "HOT AIR BALLOONS AT DAWN", "LION PRIDE ON PLAIN", "MAASAI VILLAGE VISIT", "ELEPHANT ON THE PLAINS", "CHEETAHS ON THE CHASE", "LIONS RESTING BY THE TRACK", "BALLOON LAUNCH AT DAWN"],
  },
  {
    id: "zanzibar",
    name: "Zanzibar",
    country: "Tanzania",
    region: "Islands",
    // Now reachable via its country's cross-link (see VISIBLE_DESTINATIONS,
    // which excludes anything hidden: true) rather than as a top-level card.
    hidden: true,
    tags: ["Islands", "Coastal", "Culture"],
    coordinates: "6.16°S, 39.20°E",
    tagline: "Spice-island shores off the Tanzanian coast",
    accent: "teal",
    heroImage: "ZANZIBAR — HERO IMAGE",
    cardImage: "ZANZIBAR — TURQUOISE WATER IMAGE",
    description:
      "Zanzibar pairs Stone Town's dense, UNESCO-listed old quarter with a ring of turquoise coastline. Clove and cardamom farms sit inland; further out, sandbanks appear and vanish with the tide.",
    bestTime: "June – October",
    highlights: [
      "Stone Town's alleyways, markets and rooftop cafés",
      "Spice-farm tours through clove and cardamom groves",
      "Sandbank swimming trips at low tide",
      "Jozani Forest, home to the red colobus monkey",
    ],
    quote: "You can smell Zanzibar before you see it — clove, salt, frangipani.",
    categories: [
      {
        title: "Beaches",
        icon: "Waves",
        items: [
          { name: "Nungwi & Kendwa", blurb: "The island's northern tip — white sand, turquoise shallows and reliable calm water." },
          { name: "Sandbank Excursions", blurb: "Boat trips to sandbars that surface only at low tide, ringed by open ocean." },
        ],
      },
      {
        title: "Culture & History",
        icon: "Landmark",
        items: [
          { name: "Stone Town", blurb: "A dense UNESCO old quarter of coral-stone buildings, carved doors and spice markets." },
          { name: "Spice Farm Tours", blurb: "Guided walks through clove, cardamom and vanilla plantations, with tastings." },
        ],
      },
      {
        title: "Nature",
        icon: "TreePine",
        items: [
          { name: "Jozani Forest", blurb: "The last significant native forest on the island, home to the endemic red colobus." },
        ],
      },
    ],
    gallery: ["STONE TOWN ALLEY", "NUNGWI SHORELINE", "SPICE FARM CLOVES", "SANDBANK AT LOW TIDE", "RED COLOBUS MONKEY"],
  },
  {
    id: "cape-town",
    name: "Cape Town",
    country: "South Africa",
    region: "City",
    // Cape Town is reachable directly (own route, own experiences/dining) but
    // is no longer a top-level destination — it now lives under "South Africa".
    // See VISIBLE_DESTINATIONS below, which excludes anything hidden: true.
    hidden: true,
    tags: ["City", "Coastal", "Culture"],
    coordinates: "33.92°S, 18.42°E",
    tagline: "A city held between a flat-topped mountain and two oceans",
    accent: "gold",
    heroImage: "CAPE TOWN — HERO IMAGE",
    cardImage: "CAPE TOWN — TABLE MOUNTAIN IMAGE",
    description:
      "Table Mountain anchors a city that shifts from vineyard valleys to Atlantic surf breaks within an hour's drive. Cape Town's food and wine culture is among the continent's most internationally decorated.",
    bestTime: "November – March",
    highlights: [
      "Table Mountain cable car and hiking trails",
      "Cape Winelands day trips to Stellenbosch and Franschhoek",
      "Boulders Beach's resident African penguin colony",
      "Bo-Kaap's coloured houses and Cape Malay cuisine",
    ],
    quote: "Few cities put a mountain, two oceans and a wine valley within the same afternoon.",
    categories: [
      {
        title: "Nature",
        icon: "TreePine",
        items: [
          { name: "Table Mountain", blurb: "A cable car or a half-day hike to a flat summit with views over both oceans." },
          { name: "Boulders Beach", blurb: "A sheltered cove shared with a resident colony of African penguins." },
        ],
      },
      {
        title: "Dining",
        icon: "UtensilsCrossed",
        items: [
          { name: "Winelands Tasting Rooms", blurb: "Estate lunches paired with Stellenbosch and Franschhoek's award-winning wines." },
          { name: "Bo-Kaap Cape Malay Kitchens", blurb: "Slow-cooked bredies and bright spice pastes rooted in Cape Malay history." },
        ],
      },
      {
        title: "Culture & History",
        icon: "Landmark",
        items: [
          { name: "Bo-Kaap", blurb: "A hillside quarter of brightly painted houses and centuries of Cape Malay heritage." },
          { name: "Robben Island", blurb: "A ferry crossing to the former prison island, guided by former political prisoners." },
        ],
      },
    ],
    gallery: ["TABLE MOUNTAIN AERIAL", "BOULDERS BEACH PENGUINS", "BO-KAAP HOUSES", "WINELANDS VINEYARD", "ATLANTIC COASTLINE"],
  },
  {
    id: "south-africa",
    name: "South Africa",
    country: "South Africa",
    region: "Safari & City",
    tags: ["Safari", "Wildlife", "City", "Coastal", "Culture"],
    coordinates: "26.20°S, 28.05°E",
    tagline: "From Kruger's bushveld to Cape Town's mountain-and-ocean skyline",
    accent: "gold",
    heroImage: "CAPE TOWN — HERO IMAGE",
    cardImage: "CAPE TOWN — TABLE MOUNTAIN IMAGE",
    description:
      "South Africa pairs one of the continent's most storied safari parks with a city framed by an iconic flat-topped mountain and two oceans. Kruger National Park anchors the wildlife side of an itinerary here; Cape Town anchors the food, wine and coastline side.",
    bestTime: "May – September (dry season) for Kruger's best game viewing; November – March for Cape Town",
    highlights: [
      "Kruger National Park's reliable Big Five sightings",
      "Table Mountain cable car and hiking trails",
      "Cape Winelands day trips to Stellenbosch and Franschhoek",
      "Boulders Beach's resident African penguin colony",
      "Bo-Kaap's coloured houses and Cape Malay cuisine",
    ],
    quote: "Few countries put a Big Five reserve and a mountain-ringed, ocean-fronted city on the same itinerary without a long flight in between.",
    categories: [
      {
        title: "Locations",
        icon: "Compass",
        items: [
          { name: "Kruger National Park", region: "Mpumalanga & Limpopo", blurb: "Experience one of Africa's premier safari destinations, home to the Big Five and an incredible diversity of wildlife.", activities: ["Game drives", "Walking safaris"] },
          { name: "Cape Town", blurb: "Discover a vibrant coastal city combining Table Mountain, beautiful beaches, world-class dining and unforgettable scenery.", linksTo: "cape-town", linksToLabel: "Cape Town" },
        ],
      },
    ],
    gallery: ["KRUGER GAME DRIVE", "TABLE MOUNTAIN AERIAL", "BOULDERS BEACH PENGUINS", "BO-KAAP HOUSES", "ATLANTIC COASTLINE"],
  },
  {
    id: "tanzania",
    name: "Tanzania",
    country: "Tanzania",
    region: "Safari & Islands",
    tags: ["Safari", "Wildlife", "Islands", "Culture"],
    coordinates: "3.37°S, 36.68°E",
    tagline: "Serengeti plains, crater highlands and spice-island coastline in one country",
    accent: "teal",
    heroImage: "TANZANIA — HERO IMAGE",
    cardImage: "TANZANIA — SERENGETI IMAGE",
    description:
      "Tanzania spans the classic northern safari circuit of the Serengeti and Ngorongoro Crater, the peak of Mount Kilimanjaro, and — across the channel — the spice-scented lanes of Zanzibar. Few countries hold this much variety together without feeling stretched thin.",
    bestTime: "June – October (dry season); late January – March for the calving season",
    highlights: [
      "The Great Migration crossing the Serengeti's plains",
      "Ngorongoro Crater's dense, self-contained ecosystem",
      "Mount Kilimanjaro, Africa's highest peak",
      "Stone Town and the spice-scented shores of Zanzibar",
    ],
    quote: "Tanzania doesn't ask you to choose between mountain, plain and coastline — it hands you all three.",
    categories: [
      {
        title: "Wildlife & Safari",
        icon: "PawPrint",
        items: [
          { name: "Serengeti National Park", region: "Northern Circuit", blurb: "Experience endless savannahs, abundant wildlife and the spectacular Great Migration.", activities: ["Game drives", "Hot-air balloon safaris"] },
          { name: "Ngorongoro Conservation Area", region: "Northern Circuit", blurb: "Descend into the spectacular Ngorongoro Crater, where an extraordinary concentration of wildlife thrives within an ancient volcanic landscape.", activities: ["Crater floor game drives", "Cultural visits"] },
          { name: "Tarangire National Park", region: "Northern Circuit", blurb: "Explore a beautiful safari landscape famous for its elephants, ancient baobabs and seasonal wildlife gatherings.", activities: ["Game drives", "Walking safaris"] },
          { name: "Lake Manyara National Park", region: "Northern Circuit", blurb: "Discover diverse landscapes, abundant birdlife and the famous tree-climbing lions of Lake Manyara.", activities: ["Game drives", "Canoeing (seasonal)"] },
          { name: "Nyerere National Park", region: "Southern Circuit", blurb: "Tanzania's largest protected area, centred on the Rufiji River, with a quieter, more remote safari feel.", activities: ["Boat safaris", "Walking safaris"] },
          { name: "Ruaha National Park", region: "Southern Circuit", blurb: "A remote, less-visited park known for large elephant populations and rugged, riverine landscapes.", activities: ["Game drives", "Walking safaris"] },
        ],
      },
      {
        title: "Mountains & Adventure",
        icon: "Compass",
        items: [
          { name: "Mount Kilimanjaro", region: "Northern Tanzania", blurb: "Africa's highest peak and the world's tallest free-standing mountain, climbed via several established routes.", activities: ["Summit trekking", "Day hikes on lower slopes"] },
          { name: "Arusha National Park", region: "Northern Tanzania", blurb: "A compact park in the shadow of Mount Meru, with crater lakes, forest trails and giraffe herds.", activities: ["Day hikes", "Canoeing"] },
        ],
      },
      {
        title: "Coast & Islands",
        icon: "Waves",
        items: [
          { name: "Zanzibar & Stone Town", blurb: "Tanzania's spice island and its UNESCO-listed old quarter — already covered on this site as its own destination.", linksTo: "zanzibar", linksToLabel: "Zanzibar" },
          { name: "Pemba Island", region: "Zanzibar Archipelago", blurb: "A quieter, less-visited island north of Zanzibar known for clove plantations and pristine reef diving.", activities: ["Diving", "Snorkelling"] },
        ],
      },
      {
        title: "Culture & History",
        icon: "Landmark",
        items: [
          { name: "Maasai Cultural Experiences", blurb: "Community-hosted visits with Maasai communities near several northern parks, offered where local hosts make them available.", activities: ["Village visits", "Beadwork demonstrations"] },
          { name: "Local Cultural Experiences", blurb: "Markets, craft workshops and coastal Swahili culture round out a Tanzania itinerary beyond the parks." },
        ],
      },
    ],
    gallery: ["SERENGETI PLAINS", "NGORONGORO CRATER RIM", "KILIMANJARO SUMMIT", "TARANGIRE BAOBABS", "STONE TOWN ALLEY"],
  },
  {
    id: "uganda",
    name: "Uganda",
    country: "Uganda",
    region: "Safari & Forest",
    tags: ["Safari", "Wildlife", "Culture"],
    coordinates: "1.05°S, 29.63°E",
    tagline: "Mountain gorillas in the misted forests of Bwindi",
    accent: "teal",
    heroImage: "MOUNTAIN GORILLA IN THE FOREST",
    cardImage: "MOUNTAIN GORILLA CLOSE-UP",
    description:
      "Uganda's Bwindi Impenetrable National Park is one of the last strongholds of the mountain gorilla, reached through dense, ancient rainforest in the country's southwest.",
    bestTime: "June – August and December – February (drier, more comfortable trekking conditions)",
    highlights: [
      "Mountain gorilla trekking in Bwindi Impenetrable National Park",
      "Ranger-guided treks through dense, ancient rainforest",
    ],
    quote: "Bwindi doesn't reveal its gorillas easily — the trek there is part of what makes finding them feel earned.",
    categories: [
      {
        title: "Wildlife & Safari",
        icon: "PawPrint",
        items: [
          { name: "Bwindi Impenetrable National Park", image: "MOUNTAIN GORILLA IN THE FOREST", blurb: "Journey into Uganda's ancient rainforest for an unforgettable mountain gorilla trekking experience.", activities: ["Mountain gorilla trekking"] },
          { name: "Mountain Gorilla Trekking", image: "MOUNTAIN GORILLA CLOSE-UP", blurb: "A permitted, ranger-guided trek to a habituated gorilla family — Bwindi's signature experience." },
        ],
      },
    ],
    gallery: ["MOUNTAIN GORILLA IN THE FOREST", "MOUNTAIN GORILLA CLOSE-UP", "HIGHLAND LAKE VIEW", "THATCHED LODGE COTTAGE"],
  },
  {
    id: "zimbabwe",
    name: "Zimbabwe",
    country: "Zimbabwe",
    region: "Adventure",
    tags: ["Adventure", "Wildlife", "Culture"],
    coordinates: "17.93°S, 25.86°E",
    tagline: "Home to Victoria Falls, one of the world's largest waterfalls, and the adventures built around it",
    accent: "gold",
    heroImage: "VICTORIA FALLS — HERO IMAGE",
    cardImage: "VICTORIA FALLS — MAIN IMAGE",
    description:
      "Zimbabwe's headline attraction is Victoria Falls, straddling the Zambezi River on the border with Zambia — one of the largest waterfalls in the world. Beyond the falls, the country opens into a wider wilderness that includes Hwange's elephant herds and the Matobo Hills' granite kopjes.",
    bestTime: "February – May for peak water flow; August – December for lower water and clearer viewing of the gorge",
    highlights: [
      "Victoria Falls, one of the largest waterfalls in the world",
      "Sunset cruises and whitewater rafting on the Zambezi",
      "Hwange National Park's large elephant herds",
      "Great Zimbabwe's centuries-old stone ruins",
    ],
    quote: "You hear Victoria Falls before you see it — locally, Mosi-oa-Tunya, \"the smoke that thunders.\"",
    categories: [
      {
        title: "The Falls & Zambezi River",
        icon: "Waves",
        items: [
          { name: "Victoria Falls", blurb: "Witness one of the world's most spectacular waterfalls, surrounded by breathtaking scenery and unforgettable adventure experiences.", activities: ["Falls viewing walks", "Scenic helicopter flights (visibility is seasonal)"] },
          { name: "Zambezi River", blurb: "The river that feeds the falls, and the setting for sunset cruises, fishing and rafting downstream of the gorge.", activities: ["Sunset cruises", "Whitewater rafting (seasonal, water-level dependent)"] },
          { name: "Victoria Falls National Park", blurb: "The Zimbabwean park protecting the falls themselves, with a network of viewpoints along the rainforest edge." },
          { name: "Zambezi National Park", blurb: "Upstream of the falls, a riverside park known for elephant, buffalo and birdlife along the Zambezi.", activities: ["Game drives", "River safaris"] },
        ],
      },
      {
        title: "Wildlife & National Parks",
        icon: "PawPrint",
        items: [
          { name: "Hwange National Park", blurb: "Zimbabwe's largest national park, with one of Africa's largest elephant populations.", activities: ["Game drives", "Walking safaris"] },
          { name: "Mana Pools National Park", blurb: "A UNESCO World Heritage floodplain on the Zambezi, known for walking safaris among elephant and buffalo.", activities: ["Walking safaris", "Canoeing"] },
          { name: "Matobo National Park", blurb: "A landscape of ancient granite kopjes holding San rock art, black and white rhino, and historic gravesites.", activities: ["Rhino tracking", "Rock art viewing"] },
        ],
      },
      {
        title: "Heritage & Culture",
        icon: "Landmark",
        items: [
          { name: "Great Zimbabwe", blurb: "The stone ruins of a medieval city and the country's namesake — one of Sub-Saharan Africa's most significant archaeological sites." },
        ],
      },
    ],
    gallery: ["VICTORIA FALLS AERIAL", "ZAMBEZI SUNSET CRUISE", "HWANGE ELEPHANT HERD", "MATOBO ROCK FORMATIONS", "GREAT ZIMBABWE RUINS"],
  },
  {
    id: "botswana",
    name: "Botswana",
    country: "Botswana",
    region: "Safari",
    tags: ["Safari", "Wildlife", "Wilderness"],
    coordinates: "19.98°S, 23.42°E",
    tagline: "Wilderness where the safari vehicle gives way to a mokoro canoe",
    accent: "teal",
    heroImage: "BOTSWANA — HERO IMAGE",
    cardImage: "BOTSWANA — OKAVANGO IMAGE",
    description:
      "Botswana trades the classic vehicle-based safari for something slower — a mokoro gliding through the Okavango Delta's channels, or a boat easing along the Chobe River past elephant herds. Beyond the delta, the country opens into vast salt pans and one of the world's largest protected wilderness areas in the Central Kalahari.",
    bestTime: "May – October (dry season, the most reliable stretch for wildlife viewing)",
    highlights: [
      "Mokoro (canoe) safaris through the Okavango Delta",
      "Chobe National Park's riverside elephant herds",
      "The vast salt expanses of the Makgadikgadi Pans",
      "San rock art at the Tsodilo Hills",
    ],
    quote: "In the Okavango, the vehicle stops and the mokoro starts — the delta only shows itself at paddling pace.",
    categories: [
      {
        title: "Wilderness & Safari",
        icon: "PawPrint",
        items: [
          { name: "Okavango Delta", blurb: "A UNESCO-listed inland delta where the Okavango River fans into channels and lagoons, explored by mokoro canoe as much as by vehicle.", activities: ["Mokoro (canoe) safaris", "Game drives"] },
          { name: "Moremi Game Reserve", blurb: "Part of the Okavango system, known for a dense concentration of predators alongside the delta's wetlands.", activities: ["Game drives", "Boat safaris"] },
          { name: "Chobe National Park", blurb: "Home to one of Africa's largest elephant populations, especially along the Chobe River during the dry season.", activities: ["Boat safaris", "Game drives"] },
          { name: "Savuti", blurb: "A remote area of the Chobe region known for predator sightings and the unpredictable Savuti Channel." },
          { name: "Linyanti", blurb: "A private wilderness area bordering Chobe and the Okavango, known for wild dog sightings and low visitor numbers." },
        ],
      },
      {
        title: "Desert & Landscapes",
        icon: "TreePine",
        items: [
          { name: "Makgadikgadi Pans", blurb: "Among the largest salt pan systems in the world, hosting a seasonal zebra migration across otherwise stark, open terrain.", activities: ["Quad biking", "Zebra migration viewing (seasonal)"] },
          { name: "Nxai Pan National Park", blurb: "Known for its ancient baobabs and a resident zebra population that grows during the wet season.", activities: ["Game drives"] },
          { name: "Central Kalahari Game Reserve", blurb: "One of the world's largest protected wildlife reserves, with desert-adapted wildlife and San Bushmen heritage.", activities: ["Game drives", "Cultural walks"] },
        ],
      },
      {
        title: "Culture & Heritage",
        icon: "Landmark",
        items: [
          { name: "Tsodilo Hills", blurb: "A UNESCO World Heritage site holding thousands of San rock paintings, sometimes called the \"Louvre of the Desert.\"" },
        ],
      },
      {
        title: "Conservation",
        icon: "Compass",
        items: [
          { name: "Khama Rhino Sanctuary", blurb: "A community-run sanctuary near Serowe dedicated to protecting and reintroducing white and black rhino." },
        ],
      },
    ],
    gallery: ["OKAVANGO DELTA AERIAL", "MOKORO CANOE SAFARI", "CHOBE RIVER ELEPHANTS", "MAKGADIKGADI SALT PANS", "TSODILO HILLS ROCK ART"],
  },
];

// Destinations shown in top-level listings, cards, and filter chips.
// Cape Town is deliberately excluded here (hidden: true) now that it lives
// under South Africa — but it stays in DESTINATIONS above so its own route,
// its experiences/dining, and the "Explore Cape Town" cross-link from the
// South Africa page all keep resolving correctly by id.

export const VISIBLE_DESTINATIONS = DESTINATIONS.filter((d) => !d.hidden);

// ── BOOKING DATA LAYER ──────────────────────────────────────────────────
// Single source of truth for "what can be booked": derived live from
// VISIBLE_DESTINATIONS' own categories/items, so adding, renaming or
// removing a destination anywhere above automatically updates Booking too
// — nothing here is a separately-maintained list.

export const BOOKABLE_COUNTRIES = VISIBLE_DESTINATIONS.map((d) => d.name);

export const BOOKABLE_DESTINATIONS = VISIBLE_DESTINATIONS.flatMap((country) =>
  country.categories.flatMap((cat) =>
    cat.items.map((item) => {
      const name = item.linksToLabel || item.name;
      return {
        id: `${country.id}__${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
        name,
        country: country.name,
      };
    })
  )
);

// Given a plain destination/place name (as already resolved from an
// experience's destinationSlug, a dining item's destinationSlug, or a
// destination page's own name), find its booking entry. Falls back to
// matching a country name itself, for "Book Now" clicked from a country's
// own top-level page rather than one specific place inside it.

export function findBookableByName(name) {
  if (!name) return null;
  const match = BOOKABLE_DESTINATIONS.find((b) => b.name.toLowerCase() === name.toLowerCase());
  if (match) return match;
  const countryMatch = BOOKABLE_COUNTRIES.find((c) => c.toLowerCase() === name.toLowerCase());
  if (countryMatch) return { id: "", name: "", country: countryMatch };
  return null;
}
