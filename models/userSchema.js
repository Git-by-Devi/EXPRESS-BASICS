const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true 
  },
  userId: { 
    type: String, 
    unique: true, 
    required: true 
  },
  role: { 
    type: String, 
    enum: ["Guest", "staff", "admin"], 
    required: true 
  }
});
const User = mongoose.model("User", userSchema);
module.exports = User;
