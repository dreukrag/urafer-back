export interface dbCharacterSkill {
  skillId: string;
  characterId: string;
  skillLevel: number;
}

export interface dbCharacterStats {
  statsId: string;
  characterId: string;
  strength: number; // Melee damage, carry weight
  endurance: number; // Health / Health regeneration
  reflexes: number; // Melee / Ranged / Tech hit chance
  inteligence: number; // XP per level / Tech damage
}

export interface dbCharacter {
  characterId: string;
  userId: string;
  name: string;
  isLive: boolean;
  lastAction: string;
  level: number;
  xp: number;
}
