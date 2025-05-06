// Routes
const postRouter = require("../routes/post");
const dashboardRouter = require("../routes/dashboard");
const authRouter = require("../routes/auth");

module.exports = function (app) {
  app.use("/api/posts", postRouter);
  app.use("/api/dashboard", dashboardRouter);
  app.use("/api/auth", authRouter);
};
