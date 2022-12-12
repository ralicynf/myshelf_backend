const Router = require('express').Router()
const controller = require('../controllers/BookController')

Router.post('/', controller.createBook)

module.exports = Router 