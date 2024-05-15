import { RealityBubble } from "./types/database/Reality";
import { UserSession } from "./types/database/User";
import { Character } from "./types/live/Character";

const uraferGameStateRealityBubbles: RealityBubble[] = [];

const onlineCharactersMap: { [key: string]: Character } = {};
