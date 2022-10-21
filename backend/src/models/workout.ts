import { Schema, model } from "mongoose";

interface Workout {
  title: string;
}

const workoutSchema = new Schema<Workout>({
  title: { type: String, required: true },
});

export const Workout = model<Workout>("Workout", workoutSchema);
