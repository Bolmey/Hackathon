const router = require("express").Router();
const authRoutes = require("./auth");
const User = require('../models/User');
const Message = require('../models/Message');

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes);

module.exports = router;
