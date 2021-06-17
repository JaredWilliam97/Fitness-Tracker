const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,

      default: Date.now,
    },

    exercises: [
      {
        //type of workout
        type: {
          type: String,
          required: true,
        },
        //name of the workout
        name: {
          type: String,
          required: true,
        },
        //duration
        duration: {
          type: Number,
          required: true,
        },
        //weight
        weight: {
          type: Number,
          default: 0,
        },

        sets: {
          type: Number,
          default: 0,
        },

        reps: {
          type: Number,
          default: 0,
        },
        distance: {
          type: Number,
          default: 0,
        },
      },
    ],
    totalDuration: {
      type: Number,
      default: 0,
    },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
