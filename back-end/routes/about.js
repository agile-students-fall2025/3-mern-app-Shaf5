const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    name: "Shaf Khalid",
    tagline: "CS + Business @ NYUAD (study away at NYU Stern/Tandon)",
    paragraphs: [
      "I’m an undergrad exploring the intersections of quantum computing, AI, and finance.",
      "I’ve worked on multi-objective optimization for quantum neural networks and QAE for option pricing.",
      "I also enjoy case competitions, building side projects, and grilling an excellent chicken tikka."
    ],
    photoUrl: "/images/me.jpg"
  });
});

module.exports = router;

