const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All users");
});

router.get("/:usersId", (req, res) => {
  res.send(req.params);
});

router.post("/", (req, res) => {
  res.send(req.body);
});
router.put("/:usersId", (req, res) => {
  res.send("put request in user");
});

module.exports = router;
