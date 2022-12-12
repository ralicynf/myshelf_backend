const { User } = require('../models')
const middleware = require('../middleware')

const Register = async (req, res) => {
    try {
        const { username, name, email, password } = req.body
        let passwordDigest = await middleware.hashPassword(password)
        const user = await User.create({ username, name, email, password })
        res.send(user)
    } catch (error) {
      throw error
    }
  }

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
        where: { email: req.body.email },
        raw: true 
    })
    if (
        user &&
        middleware.comparePassword(user.passwordDigest, req.body.password)
    ) {
        let payload = {
            id: user.id,
            email: user.email
        }
        let token = middleware.createToken(payload)
        return res.send({ user: payload, token})
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized'})
  } catch (error) {
    throw error
  }
}



module.exports = {
  Login,
  Register
}