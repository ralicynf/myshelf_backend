const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const BookRouter = require('./BookRouter')
const BookReportRouter = require('./BookReportRouter')
//const AuthRouter = require('./AuthRouter')

Router.use('/users', UserRouter)
Router.use('/books', BookRouter)
Router.use('/bookreports', BookReportRouter)
//Router.use('/auth', AuthRouter)

module.exports = Router 