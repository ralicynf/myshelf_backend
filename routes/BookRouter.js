const Router = require('express').Router()
const controller = require('../controllers/BookController')
const middleware = require('../middleware')

Router.post(
    '/', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.createBook
)

Router.get('/', controller.getAllBooks)

Router.get('/:book_id', controller.getBookById)

Router.put(
    '/:book_id',
    middleware.stripToken,
    middleware.verifyToken, 
    controller.updateBook
)

Router.delete(
    '/:book_id', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.deleteBook
)

module.exports = Router 