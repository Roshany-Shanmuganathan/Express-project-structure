import express from "express";
const router = express.Router();

router.get("/users", (req, res) => {
  res.send("This is GET Users...");
});
router.get("/users/:id", (req, res) => {
  res.send("This is GET one User...");
});
router.post("/users", (req, res) => {
  res.send("This is Create Users...");
});
router.put("/users/:id", (req, res) => {
  res.send("This is Update User...");
});
router.delete("/users/:id", (req, res) => {
  res.send("This is Delete User...");
});

export default router;
