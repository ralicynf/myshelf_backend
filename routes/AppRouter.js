const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const BookRouter = require('./BookRouter')
const BookReportRouter = require('./BookReportRouter')

Router.use('/users', UserRouter)
Router.use('/books', BookRouter)
Router.use('/bookreports', BookReportRouter)

module.exports = Router 