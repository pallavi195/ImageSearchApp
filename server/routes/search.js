import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import Search from "../models/Search.js";

dotenv.config();
const router = express.Router();

// 🔍 Handle image search requests
router.post("/", async (req, res) => {
  try {
    const { term, userId } = req.body;

    // Save search term in database
    await Search.create({ userId, term });

    // Call Unsplash API
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: { query: term, per_page: 20 },
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
    });

    res.json(response.data.results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// 🏆 Get top 5 most searched terms
router.get("/top", async (req, res) => {
  try {
    const results = await Search.aggregate([
      { $group: { _id: "$term", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 },
    ]);
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch top searches" });
  }
});

export default router;
