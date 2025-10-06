const express = require("express");
const router = express.Router();

const messages = [];

router.get("/", (req, res) => {
  res.json(messages);
});

router.post("/", (req, res) => {
  const { name, message } = req.body || {};
  if (!name || !message) return res.status(400).json({ error: "name and message required" });
  const doc = { id: Date.now(), name, message, createdAt: new Date().toISOString() };
  messages.push(doc);
  res.status(201).json(doc);
});

module.exports = router;
