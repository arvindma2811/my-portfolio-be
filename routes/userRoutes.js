const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { getUsers, updateUser, deleteUser } = require("../controllers/userController");

const router = express.Router();

router.get("/", authMiddleware, getUsers);
router.put("/:id", authMiddleware, updateUser);
router.delete("/:id", authMiddleware, deleteUser);

module.exports = router;