import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  name: String,
});

const UserModel = mongoose.model("users", userSchema);

export default UserModel;
