const { MongoClient, ServerApiVersion } = require("mongodb");
const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const { v4: uuid } = require("uuid");

export const uraniumFeverAPIService = express(); // Setup the server

uraniumFeverAPIService.listen(3000, () =>
  console.log("API server is running?")
);

const uri =
  "mongodb+srv://cass_uf_adm:sdUJHxCyff5tlr7cEN8o@project-uranium-fever.t2pzckk.mongodb.net/?retryWrites=true&w=majority&appName=project-uranium-fever";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
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
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
