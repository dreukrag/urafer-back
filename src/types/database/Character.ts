import { ObjectId } from "mongodb";
import { standardMongoTypes } from "./basicTypes";

export interface dbCharacterSkill extends standardMongoTypes {
  characterId: ObjectId;
  skillId: string;
  skillLevel: number;
}

export interface dbCharacter extends standardMongoTypes {
  userId: ObjectId;

  isLive: boolean;
  lastAction?: string;
  level: number;
  name: string;
  xp: number;

  endurance: number; // Health / Health regeneration
  inteligence: number; // Tech hit chance / Tech damage
  reflexes: number; // Melee / Ranged hit chance
  strength: number; // Melee damage, carry weight
}
