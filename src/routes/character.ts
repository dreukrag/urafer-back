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

          position: [0, 0, 0],
          worldspace: "",

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

characterRouter.post("/move", async (_req, _res) => {
  try {
    isSessionValid(_req.headers.authorization, async (userId) => {
      const characters = await db
        .collection("uf_characters")
        .find<dbCharacter>({ userId: new ObjectId(userId) })
        .toArray();

      _res.json({ success: true, characters });
    });
  } catch (error) {}

  const { userId, directions } = _req.body; // Assuming directions is something like "w w w w w w w"
  const currentCoordinates = [0, 0, 0]; // Starting position

  // Parse directions
  const parsedDirections = directions.split(" ");

  // Calculate new coordinates
  let newCoordinates = [...currentCoordinates];
  parsedDirections.forEach((direction: string) => {
    const change = directionMappings[direction];
    if (change) {
      const potentialNewCoordinates = newCoordinates.map(
        (coord, index) => coord + change[index]
      );

      // Check if the potential new coordinates are within worldspace boundaries
      if (
        potentialNewCoordinates[0] >= 0 &&
        potentialNewCoordinates[0] <= worldSpaceDimensions.maxX &&
        potentialNewCoordinates[1] >= 0 &&
        potentialNewCoordinates[1] <= worldSpaceDimensions.maxY &&
        potentialNewCoordinates[2] >= 0 &&
        potentialNewCoordinates[2] <= worldSpaceDimensions.maxZ
      ) {
        newCoordinates = potentialNewCoordinates;
      }
    }
  });

  // Update character position in the database with the newCoordinates
  // Assuming you have a method to update the character's position in the database
  await db
    .collection<dbCharacter>("uf_characters")
    .updateOne(
      { _id: new ObjectId(userId) },
      { $set: { "position.coordinates": newCoordinates } }
    );

  _res.json({ success: true, newCoordinates });
});

export default characterRouter;
