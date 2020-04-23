const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "AUTH - 👋🌎🌍🌏"
  });
});

// router.use('/emojis', emojis);

module.exports = router;
