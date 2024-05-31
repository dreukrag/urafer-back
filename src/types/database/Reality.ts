// This references a worldSpacetile whitin a worldspace
// this is a static piece of data that is cached to be accessed very fast and discarded afterwards
export interface WorldSpaceTile {
  coordinates: [number, number, number]; // [X, Y, Z]
  slug: string;
  name: string;
  connects_to: string[];
  description: string;
  other: string;
}

export interface WorldSpace {
  name: string;
  slug: string;
  tiles: WorldSpaceTile[];
}

export interface WorldSpaceMap {
  [key: string]: WorldSpace;
}
export interface RealityBubble {
  slug: string;
  position: [number, number, number];
  worldspaceTile: WorldSpaceTile;
  playerCharactersWithin: string[];
  actorsWithin: string[];
  persistent?: boolean; // If true, never delete this
}
