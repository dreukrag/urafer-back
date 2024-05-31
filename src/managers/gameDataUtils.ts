// import { WorldSpace, WorldSpaceTile } from "../types/database/Reality";

// export function generateWorldSpaceTileName(
//   worldSpaceSlug: string,
//   x: number,
//   y: number,
//   z: number
// ): string {
//   const floorSuffix = ["st", "nd", "rd", "th"];
//   const suffixIndex = z < 3 ? z : 3; // Handles 1st, 2nd, 3rd, and then 4th for everything else
//   return `${worldSpaceSlug} ${z + 1}${
//     floorSuffix[suffixIndex]
//   } floor - ${x} ${y} ${z}`;
// }

// export function createWorldSpace(
//   slug: string,
//   dimensions: { width: number; height: number; depth: number }
// ): WorldSpace {
//   const tiles: WorldSpaceTile[] = [];

//   for (let z = 0; z < dimensions.depth; z++) {
//     for (let y = 0; y < dimensions.height; y++) {
//       for (let x = 0; x < dimensions.width; x++) {
//         tiles.push({
//           slug: generateWorldSpaceTileName(slug, x, y, z),
//           coordinates: [x, y, z],
//         });
//       }
//     }
//   }

//   return {
//     slug,
//     tiles,
//   };
// }
