import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import "./config/passport.js";

dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Import routes
import authRoutes from "./routes/auth.js";
import searchRoutes from "./routes/search.js";
import historyRoutes from "./routes/history.js";

app.use("/api/auth", authRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/history", historyRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch(err => console.log("❌ MongoDB connection failed:", err));

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
