const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userController");

const router = express.Router();

router.post("/", registerUser);
router.post("/login", authUser);

router.get("/", allUsers);

module.exports = router;
