import mongoose, { model, models, Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, 
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Review = models?.Review || model("Review", reviewSchema);
export default Review;
