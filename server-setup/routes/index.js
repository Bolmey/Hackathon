const router = require("express").Router();
const authRoutes = require("./auth");
const User = require('../models/User');
const Message = require('../models/Message');

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/chat", (req, res, next) => {
  // find all messages and send them
  Message.find('')
  .then((messages) => {
    res.send(messages)
  })
  .catch(err => next(err))
});

router.post('/chat', (req, res, next) => {
  // receive incoming message
  const { message } = req.body;
  Message.create({
    message,
    // created_by: 
  });
})


router.use("/auth", authRoutes);

module.exports = router;
