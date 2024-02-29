const router = require("express").Router();

router.get("/health-check", (req, res) => {
  return res.send({ message: "App running..." });
});

module.exports = router;
