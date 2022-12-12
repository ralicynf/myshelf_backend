const Router = require('express').Router()
const controller = require('../controllers/BookController')

Router.post('/', controller.createBook)
Router.get('/', controller.getAllBooks)
Router.get('/:book_id', controller.getBookById)
Router.put('/:book_id', controller.updateBook)
Router.delete('/:book_id', controller.deleteBook)

module.exports = Router 