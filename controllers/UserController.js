const { User } = require('../models')

// get all users by their ID number
const getAllUsers = async (req, res) => {
    console.log('hello')
    try {
        const users = await User.findAll()
        return res.send(users)
    } catch (error) {
        throw error
    }
}

//get a single user by their ID
const getUserById = async (req, res) => {
    try {
        const { user_id } = req.params
        const user = await User.findByPk(user_id)
        return res.send(user)
    } catch (error) {
        throw error
    }
}

// create new User
const createUser = async (req, res) => {
    try {
        const user = await new User(req.body)
        await user.save()
        return res.status(201).json({
            user,
            });
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

//update user information
const updateUser = async (req, res) => {
    try {
      const user = await User.update(
        { ...req.body },
        { where: { id: req.params.user_id }, returning: true }
      )
      res.send(user)
    } catch (error) {
      throw error
    }
  }

//delete a user by their id number
const deleteUser = async (req, res) => {
    try {
      await User.destroy({ where: { id: req.params.user_id } })
      res.send({
        msg: 'User Deleted',
        payload: req.params.user_id,
        status: 'Ok'
      })
    } catch (error) {
      throw error
    }
  }

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser

}