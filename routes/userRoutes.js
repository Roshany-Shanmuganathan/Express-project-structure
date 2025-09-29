import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is GET Users...");
});
router.get("/:id", (req, res) => {
  res.send("This is GET one User...");
});
router.post("/", (req, res) => {
  res.send("This is Create Users...");
});
router.put("/:id", (req, res) => {
  res.send("This is Update User...");
});
router.delete("/:id", (req, res) => {
  res.send("This is Delete User...");
});

export default router;
