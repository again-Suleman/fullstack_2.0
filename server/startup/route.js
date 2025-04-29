// Routes
const postRouter = require("../routes/post")


module.exports = function (app){
    app.use('/api/post', postRouter)

}