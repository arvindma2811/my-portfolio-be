const User = require("../models/User");

// Get all users
exports.getUsers = async (req, res) => {
    const users = await User.find().select("-password");
    res.json(users);
};

// Update user
exports.updateUser = async (req, res) => {
    const { name, email } = req.body;

    const user = await User.findByIdAndUpdate(
        req.params.id,
        { name, email },
        { new: true }
    ).select("-password");

    res.json(user);
};

// Delete user
exports.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User Deleted" });
};