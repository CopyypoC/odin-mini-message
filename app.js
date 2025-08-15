const express = require("express");
const indexRouter = require("./routes/indexRouter.js");
const newRouter = require("./routes/newRouter.js");
const path = require("node:path");

const PORT = 3000;
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/new", newRouter);
app.use("/", indexRouter);
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Open on localhost:${PORT}`);
});
