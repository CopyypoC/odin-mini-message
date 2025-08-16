const { Router } = require("express");

const indexRouter = Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { messages });
});

// Go to /post and read from query params to get message details
indexRouter.get("/post", (req, res) => {
  const post = {
    text: req.query.text,
    user: req.query.user,
    added: req.query.added,
  };
  res.render("post", { post });
});

module.exports = { indexRouter, messages };
