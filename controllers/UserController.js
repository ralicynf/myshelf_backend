const { User } = require('../models')

const getAllUsers = async (req, res) => {
    console.log('hello')
    try {
        const users = await User.findAll()
        return res.send(users)
    } catch (error) {
        throw error
    }
}

const getUserById = async (req, res) => {
    try {
        const { user_id } = req.params
        const user = await User.findByPk(user_id)
        return res.send(user)
    } catch (error) {
        throw error
    }
}

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