import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import { Strategy as GitHubStrategy } from "passport-github2";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

// Serialize and deserialize user
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => User.findById(id).then(user => done(null, user)));

// Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await User.findOne({ oauthId: profile.id, provider: "google" });
      if (!user) {
        user = await User.create({
          oauthId: profile.id,
          provider: "google",
          name: profile.displayName,
        });
      }
      return done(null, user);
    }
  )
);

// Facebook Strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/api/auth/facebook/callback",
      profileFields: ["id", "displayName", "photos", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await User.findOne({ oauthId: profile.id, provider: "facebook" });
      if (!user) {
        user = await User.create({
          oauthId: profile.id,
          provider: "facebook",
          name: profile.displayName,
        });
      }
      return done(null, user);
    }
  )
);

// GitHub Strategy
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/api/auth/github/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await User.findOne({ oauthId: profile.id, provider: "github" });
      if (!user) {
        user = await User.create({
          oauthId: profile.id,
          provider: "github",
          name: profile.displayName,
        });
      }
      return done(null, user);
    }
  )
);

