import express from 'express';
import FeedbackModel from '../models/FeedbackModel.js';

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  try {
    const feedback = await FeedbackModel.find();
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
