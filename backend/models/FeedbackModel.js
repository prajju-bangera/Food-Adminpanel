import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      // Set a maximum length for the name
    },
    message: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1, // Rating can't be lower than 1
      max: 5, // Rating can't be higher than 5
    },
    createdAt: {
      type: Date,
      default: Date.now, // Auto-generate timestamp for when the feedback was submitted
    },
  },
 
);

const FeedbackModel = mongoose.model('feedback', FeedbackSchema);

export default FeedbackModel;
