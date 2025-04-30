// Routes
const postRouter = require("../routes/post")
const dashboardRouter = require("../routes/dashboard")


module.exports = function (app){
    app.use('/api/posts', postRouter)
    app.use('/api/dashboard', dashboardRouter)

}