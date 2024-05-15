import { Db, MongoClient, ServerApiVersion } from "mongodb";
import express from "express";

// Routes
import userRouter from "./routes/user";
import characterRouter from "./routes/character";
export let db: Db;

const uraniumFeverAPIService = express(); // Setup the server
uraniumFeverAPIService.use(express.json());

uraniumFeverAPIService.use("/user", userRouter);
uraniumFeverAPIService.use("/character", characterRouter);

uraniumFeverAPIService.listen(8000, () => {
  console.log("Express: online");
  console.log("API: online");
});

const uri = process.env.MONGO_API_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri || "", {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    db = client.db("uranium_fever_db");
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });

    console.log("MongoDb: online");
    console.log("All systems nominal");
  } catch {
    console.log("Error on the mongo connection, Closing");
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
