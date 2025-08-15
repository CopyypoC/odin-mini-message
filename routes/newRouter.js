const { Router } = require("express");

const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("form", {});
});

newRouter.post("/", (req, res) => {
  res.locals.messages.push({
    text: res.body.msg,
    user: res.body.name,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = newRouter;
