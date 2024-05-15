import express from "express";
import { isSessionValid } from "./isSessionValid";
import { db } from "../index";
import { ObjectId } from "mongodb";
import { dbCharacter, dbCharacterSkill } from "src/types/database/Character";
import uniqid from "uniqid";

const characterRouter = express.Router();

characterRouter.post("/", async (_req, _res) => {
  try {
    isSessionValid(_req.headers.authorization, async (userId) => {
      db.collection<Omit<dbCharacter, "_id">>("uf_characters")
        .insertOne({
          userId: new ObjectId(userId),
          name: `RPT-INBND-#${uniqid.time()}`,
          isLive: false,
          lastAction: undefined,
          level: 0,
          xp: 0,
          endurance: 0,
          inteligence: 0,
          reflexes: 0,
          strength: 0,

          created_at: new Date(),
          modified_at: new Date(),
        })
        .then((insertedCharacter) => {
          db.collection<Omit<dbCharacterSkill, "_id">>(
            "uf_characters_skills"
          ).insertOne({
            characterId: insertedCharacter.insertedId,
            skillLevel: 0,
            skillId: "basic skill testing",
            created_at: new Date(),
            modified_at: new Date(),
          });
        });

      _res.json({ success: true });
    });
  } catch (error) {}
});

characterRouter.get("/list", async (_req, _res) => {
  try {
    isSessionValid(_req.headers.authorization, async (userId) => {
      const characters = await db
        .collection("uf_characters")
        .find<dbCharacter>({ userId: new ObjectId(userId) })
        .toArray();

      _res.json({ success: true, characters });
    });
  } catch (error) {}
});

export default characterRouter;
