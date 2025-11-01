import express from "express";
import Search from "../models/Search.js";

const router = express.Router();

// 📜 Get a user's search history
router.get("/:userId", async (req, res) => {
  try {
    const history = await Search.find({ userId: req.params.userId })
      .sort({ timestamp: -1 });
    res.json(history);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch history" });
  }
});

export default router;
