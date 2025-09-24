const express = require("express");
const User = require("../models/userSchema");
const router = express.Router();
const checkRole = require("../middleware/rolemiddleware");
router.get("/", checkRole(["Guest", "staff", "admin"]), async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Could not fetch users"});
  }
});
router.post("/", checkRole(["staff", "admin"]), async (req, res) => {
  try {
    const { username, userId, role } = req.body;
    const newUser = new User({ username, userId, role });
    await newUser.save();
    res.status(201).json({ message: "User created successfully"});
  } catch (err) {
    res.status(400).json({ message: "Access for only Admin and Staff" });
  }
});
router.delete("/:userId", checkRole(["admin"]), async (req, res) => {
  try {
    const deleteUser = await User.findOneAndDelete({
      userId: req.params.userId,
    });
    if (!deleteUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully"});
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error"});
  }
});
module.exports = router;
