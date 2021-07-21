const express = require("express");
const userRouter = require("./routes/userRoutes");
const groupRouter = require("./routes/groupRoutes");

const app = express();

app.use(express.json());

app.use("/api/v1/users", userRouter);

app.use("/api/v1/groups", groupRouter);

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  //   console.log(req.headers);

  next();
});

module.exports = app;
