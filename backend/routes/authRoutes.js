const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUsers,
} = require("../controller/authController");
const { protect } = require("../middleware/authMiddleware");
const { admin } = require("../middleware/adminMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", protect, admin, getUsers);
// router.post("/verify-email", async (req, res) => {
//   const { email } = req.body;
//   //   implement email verification logic here
//   res.status(200).json({ message: `Verification email sent to ${email}` });
// });

module.exports = router;
