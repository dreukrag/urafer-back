import { WorldSpace, WorldSpaceMap } from "src/types/database/Reality";
import arrivals from "../static/arrivals_full.json";

export class WorldSpaceManager {
  private static instance: WorldSpaceManager;
  private worldSpaces: WorldSpaceMap = {};

  private constructor() {
    this.worldSpaces["arrivals_ring_north"] = arrivals as WorldSpace
  }

  public static getInstance(): WorldSpaceManager {
    if (!WorldSpaceManager.instance) {
      WorldSpaceManager.instance = new WorldSpaceManager();
    }
    return WorldSpaceManager.instance;
  }

  getAllWorldSpaces(): WorldSpaceMap {
    return this.worldSpaces;
  }
  getSingleWorldSpace(slug: string): WorldSpace {
    return this.worldSpaces[slug];
  }
}
