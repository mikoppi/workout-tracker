import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import { Workout } from "./models/workout";

const uri = process.env.MONGODB_URI;
const PORT = process.env.PORT;

mongoose
  .connect(uri as string)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("failed to connect to mongodb", error.message);
  });

const app = express();
app.use(express.json());

app.get("/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.post("/api/workouts", async (req, res) => {
  const workout = new Workout({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    title: req.body.title,
  });
  await workout.save();
  res.json(workout);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
