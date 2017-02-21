let homeController = require('./home-controllers')
let usersController = require('./users-controller')
let articleController = require('./articles-controller')
module.exports = {
    home: homeController,
    users: usersController,
    articles: articleController
}