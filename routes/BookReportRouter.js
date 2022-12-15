const Router = require('express').Router()
const controller = require('../controllers/BookReportController')
const middleware = require('../middleware')

Router.get('/', controller.getAllBookReports)
Router.get('/:bookReport_id', controller.getBookReportById)
Router.get('/b/:book_id', controller.getBookReportByBook)

Router.post(
    '/', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.createBookReport
)

Router.put(
    '/:bookReport_id', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.updateBookReport
)

Router.delete(
    '/:bookReport_id', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.deleteBookReport
)

module.exports = Router 