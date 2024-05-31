// import { createWorldSpace } from "./gameDataUtils";
import {
  RealityBubble,
  // WorldSpace,
  WorldSpaceTile,
} from "../types/database/Reality";
import { UserSession } from "../types/database/User";
import { Character } from "../types/live/Character";

export class GameDataManager {
  private static instance: GameDataManager;
  private realityBubbles: RealityBubble[] = [];

  private constructor() {}

  public static getInstance(): GameDataManager {
    if (!GameDataManager.instance) {
      GameDataManager.instance = new GameDataManager();
    }
    return GameDataManager.instance;
  }

  getRealityBubbles(): RealityBubble[] {
    return this.realityBubbles;
  }

  addRealityBubble(bubble: RealityBubble): void {
    this.realityBubbles.push(bubble);
  }

  findRealityBubbleBySlug(slug: string): RealityBubble | undefined {
    return this.realityBubbles.find((bubble) => bubble.slug === slug);
  }

  setupArrivalRealityBubble = () => {
    // if (this.findRealityBubbleBySlug("arrivals-persistant") === undefined) {
    //   const arrivals = createWorldSpace("Arrivals", {
    //     width: 8,
    //     depth: 2,
    //     height: 8,
    //   });

    //   const arrivalsRoot = arrivals.tiles.find(
    //     ({ coordinates }) => (coordinates = [0, 0, 0])
    //   );

    //   if (arrivalsRoot) {
    //     let baseBubble: RealityBubble = {
    //       slug: "arrivals-persistant",
    //       actorsWithin: [],
    //       playerCharactersWithin: [],
    //       worldspaceTile: arrivalsRoot,
    //       position: [0, 0, 0],
    //       persistent: true,
    //     };

    //     uraferGameStateRealityBubbles.push(baseBubble);
    //   }
    // }
  };
}

export const uraferGameStateRealityBubbles: RealityBubble[] = [];

export const onlineCharactersMap: { [key: string]: Character } = {};
