// Rio Grande Valley cities served by Socially Awkward Media.
// Used by /locations/[city].astro to generate one landing page per city,
// and by /locations/index.astro to list them grouped by sub-region.

export type RgvRegion = 'West' | 'Central' | 'East';

export interface RgvCity {
  /** URL slug — also the filename produced by getStaticPaths(). */
  slug: string;
  /** Display name, e.g. "McAllen". */
  name: string;
  /** Texas county the city sits in. */
  county: string;
  /** Loose West / Central / East RGV grouping for the locations index. */
  region: RgvRegion;
  /** Meta description for this city's landing page — under 160 chars. */
  metaDescription: string;
  /** 2–3 sentence intro paragraph specific to this city, shown on the page. */
  intro: string;
  /** Shorter blurb about the area, shown below the intro. */
  areaBlurb: string;
}

export const rgvCities: RgvCity[] = [
  {
    slug: 'mcallen',
    name: 'McAllen',
    county: 'Hidalgo County',
    region: 'West',
    metaDescription:
      'Web design, logo design, and graphic design for McAllen small businesses. Veteran-owned, woman-owned studio in the Rio Grande Valley.',
    intro:
      "McAllen is the commercial heart of the Rio Grande Valley — a place where small businesses sit shoulder-to-shoulder with national retailers and still build the kind of customer loyalty the big chains spend millions chasing. We help McAllen owners put a website behind their hustle that does justice to the work.",
    areaBlurb:
      "From 10th Street storefronts to home-based shops anchoring neighborhoods near La Plaza, McAllen runs on small businesses that earned their following the hard way.",
  },
  {
    slug: 'brownsville',
    name: 'Brownsville',
    county: 'Cameron County',
    region: 'East',
    metaDescription:
      "Web and logo design for Brownsville small businesses. Brownsville's veteran- and woman-owned design studio in the Rio Grande Valley.",
    intro:
      "Brownsville has been doing 'small business' since long before the term meant what it does now — generations of local shops, restaurants, and trades passed down through families. We build websites and logos for Brownsville businesses ready to be as findable online as they are well-known on the block.",
    areaBlurb:
      "From historic downtown to the working-class neighborhoods along Boca Chica Boulevard, Brownsville's business landscape is built on people who know each other by name.",
  },
  {
    slug: 'harlingen',
    name: 'Harlingen',
    county: 'Cameron County',
    region: 'Central',
    metaDescription:
      'Web design, logo design, and graphic design for Harlingen small businesses. Veteran-owned RGV studio based in nearby Laguna Vista.',
    intro:
      "Harlingen sits at the crossroads of the Valley — the place businesses pass through, fly in and out of, and increasingly call home. We help Harlingen small businesses build websites that match the city's no-nonsense, get-it-done energy.",
    areaBlurb:
      "Harlingen's downtown, medical district, and growing northwest commercial corridors are full of operators who'd rather earn their reputation than buy it.",
  },
  {
    slug: 'weslaco',
    name: 'Weslaco',
    county: 'Hidalgo County',
    region: 'Central',
    metaDescription:
      'Web and logo design for Weslaco small businesses. Helping Mid-Valley operators look as good online as they do in person.',
    intro:
      "Weslaco is one of those Valley towns where everyone seems to know whose cousin owns what — a small-business ecosystem held together by reputation. We help Weslaco owners turn that local trust into a clean digital presence.",
    areaBlurb:
      "Sitting right in the middle of the Valley between McAllen and Harlingen, Weslaco has a steady pace and a tight-knit business community to match.",
  },
  {
    slug: 'edinburg',
    name: 'Edinburg',
    county: 'Hidalgo County',
    region: 'West',
    metaDescription:
      'Web design, logos, and branding for Edinburg small businesses. Veteran-owned, woman-owned studio serving the Rio Grande Valley.',
    intro:
      "Edinburg is the Valley's college town and county seat all in one — a steady mix of long-running family businesses and the newer shops springing up around UTRGV. We design websites and logos for the businesses making Edinburg's main streets feel alive.",
    areaBlurb:
      "Home to UTRGV's largest campus and the Hidalgo County government center, Edinburg has the kind of foot traffic and student energy small businesses thrive on.",
  },
  {
    slug: 'mission',
    name: 'Mission',
    county: 'Hidalgo County',
    region: 'West',
    metaDescription:
      'Web design and logo design for Mission small businesses. Branding help for shops, services, and trades across the Rio Grande Valley.',
    intro:
      "Mission is the kind of city where small businesses sit somewhere between roadside fruit stands and growing professional studios — and the line between the two keeps blurring beautifully. We build websites for Mission businesses ready to be found by every customer driving Conway and Bryan.",
    areaBlurb:
      "Famous for its citrus, its Winter Texans, and its strong main-street feel, Mission has a small-business community that's been built one handshake at a time.",
  },
  {
    slug: 'pharr',
    name: 'Pharr',
    county: 'Hidalgo County',
    region: 'West',
    metaDescription:
      'Web and logo design for Pharr small businesses. Veteran-owned RGV studio helping local owners look their best online.',
    intro:
      "Pharr lives at the intersection of trade, traffic, and Texas-style hustle — anchored by the Pharr International Bridge and the working-class neighborhoods that grew up around it. We help Pharr small businesses build websites worthy of how hard they work.",
    areaBlurb:
      "Pharr's growth has been quiet but real, with new restaurants, services, and trades opening alongside the city's long-established business district.",
  },
  {
    slug: 'san-benito',
    name: 'San Benito',
    county: 'Cameron County',
    region: 'Central',
    metaDescription:
      'Web design and logo design for San Benito small businesses. Veteran-owned studio serving the entire Rio Grande Valley.',
    intro:
      "San Benito is the home of conjunto music and Freddy Fender — a town that wears its heritage with the kind of pride that rubs off on its businesses. We build websites for San Benito owners who want their online presence to match the character they've already earned in person.",
    areaBlurb:
      "Sitting just inland from the coast, San Benito carries a cultural weight bigger than its size, and its small businesses do the same.",
  },
  {
    slug: 'laguna-vista',
    name: 'Laguna Vista',
    county: 'Cameron County',
    region: 'East',
    metaDescription:
      "Web design, logos, and branding for Laguna Vista small businesses. We're your local Rio Grande Valley design studio.",
    intro:
      "Laguna Vista is home base for Socially Awkward Media — a small bayside town between Port Isabel and South Padre Island where the businesses tend to be family-run, local-loved, and quietly excellent. We help our Laguna Vista neighbors build websites that match the town's calm confidence.",
    areaBlurb:
      "Tucked between the Laguna Madre and South Padre Island, Laguna Vista is small in population but big on the kind of trades, services, and shops that keep coastal towns running.",
  },
  {
    slug: 'south-padre-island',
    name: 'South Padre Island',
    county: 'Cameron County',
    region: 'East',
    metaDescription:
      'Web design and logo design for South Padre Island small businesses. Helping local shops, restaurants, and rentals stand out year-round.',
    intro:
      "South Padre Island is a small-business town in a beach town's clothing — every shop, restaurant, and rental operation lives or dies by how findable they are when visitors plan a trip. We build websites for SPI businesses that need to look as good online as the Gulf does in person.",
    areaBlurb:
      "From the bait shops and food trucks on Padre Boulevard to the boutique rentals tucked into residential streets, SPI runs on small operators with seasonal pressure to look sharp.",
  },
  {
    slug: 'los-fresnos',
    name: 'Los Fresnos',
    county: 'Cameron County',
    region: 'East',
    metaDescription:
      'Web design and logo design for Los Fresnos small businesses. Veteran-owned studio serving the Rio Grande Valley.',
    intro:
      "Los Fresnos has the feel of a town where you'll bump into the owner of half the businesses you visit — a community where reputation does the heavy lifting and a good website just makes it findable. We help Los Fresnos owners put that earned reputation online.",
    areaBlurb:
      "Sitting just east of Brownsville on the way to the coast, Los Fresnos is a tight community with a small-business backbone that punches well above the town's size.",
  },
  {
    slug: 'rio-grande-city',
    name: 'Rio Grande City',
    county: 'Starr County',
    region: 'West',
    metaDescription:
      'Web design and logo design for Rio Grande City small businesses. Helping Starr County owners build a strong online presence.',
    intro:
      "Rio Grande City sits at the western edge of the Valley — Starr County seat, historic border crossing, and a place where small businesses still run on relationships first. We help Rio Grande City owners build websites that travel as well as their reputation does.",
    areaBlurb:
      "Rio Grande City's downtown carries some of the oldest commercial buildings in deep South Texas, and the businesses around it have inherited the same staying power.",
  },
];

/** Look up a single city by slug. */
export const citiesBySlug: Record<string, RgvCity> = Object.fromEntries(
  rgvCities.map((c) => [c.slug, c])
);

/** Group cities by sub-region for the locations index page. */
export function citiesByRegion(): Record<RgvRegion, RgvCity[]> {
  return {
    West: rgvCities.filter((c) => c.region === 'West'),
    Central: rgvCities.filter((c) => c.region === 'Central'),
    East: rgvCities.filter((c) => c.region === 'East'),
  };
}
