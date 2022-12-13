const Router = require('express').Router()
const controller = require('../controllers/BookReportController')

Router.post('/', controller.createBookReport)
Router.get('/', controller.getAllBookReports)
Router.get('/:bookReport_id', controller.getBookReportById)
Router.put('/:bookReport_id', controller.updateBookReport)
Router.delete('/:bookReport_id', controller.deleteBookReport)

module.exports = Router 