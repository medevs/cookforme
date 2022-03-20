const router = require("express").Router();

const {
  registerUser,
  loginUser,
  verifyEmail,
  forgotPassword,
  resetPassword,
  onboarding,
} = require("../controllers/userController");

const { auth } = require("../middlewares/auth");
const upload = require("../middlewares/upload");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/verify/:verificationToken", verifyEmail);
router.put("/forgot-password", forgotPassword);
router.put("/reset-password/:resetToken", resetPassword);
router.post(
  "/onboarding",
  auth,
  upload.fields([
    { name: "profilePic", maxCount: 1 },
    { name: "verificationDocument" },
  ]),
  onboarding
);

module.exports = router;
