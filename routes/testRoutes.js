import express from "express";
import { testPostController } from "../controllers/testController.js";
import userAuth from "../middelwares/authMiddleware.js";

const router = express.Router();

// ✅ GET test route
router.get("/", (req, res) => {
  res.send("Test route working ✅");
});

// Existing POST route
router.post("/test-post", userAuth, testPostController);

export default router;
