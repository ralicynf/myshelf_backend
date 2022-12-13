const Router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

Router.get('/', controller.getAllUsers)
Router.get('/:user_id', controller.getUserById)
//Router.post('/', controller.createUser)
Router.put(
    '/:user_id', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.updateUser
)
Router.delete(
    '/:user_id', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.deleteUser
)

module.exports = Router 