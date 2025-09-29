// Basic server setup
import express from "express";

const app = express();
const PORT = 4000;
// user route created using express
const router = express.Router();

// HTTP method handling
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

router.get("/user", (req, res) => {
  res.send("This is GET user");
});

app.use(router);
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
