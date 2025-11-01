import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  oauthId: String,
  provider: String,
  name: String,
});

export default mongoose.model("User", userSchema);

