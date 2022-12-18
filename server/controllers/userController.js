const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Baskets = require('../models').Baskets
const Users = require('../models').Users

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}


async function registration(req, res, next) {
    const {email, password, role} = req.body
    console.log(email, password, role)
    try {
      if (!email || !password) {
        return res.status(500).json({message: 'Invalid email or password'})
      }
      const candidate = await Users.findOne({where: {email}})
      if (candidate) {
        return res.status(500).json({ message: 'User with this email already exists' })
      }
      const hashPassword = await bcrypt.hash(password, 5)
      const user = await Users.create({email, role, password: hashPassword})
      console.log(user.id)
      const basket = await Baskets.create({userId: user.id})
      console.log(basket)
      const token = generateJwt(user.id, user.email, user.role)

      return res.status(201).json(token)
    } catch (error) {
      console.log(error)
      return res.status(404).json(error.message)
    }
}

  async function login(req, res, next) {
      const {email, password} = req.body
      try {
        const user = await Users.findOne({where: {email}})
        if (!user) {
          return res.status(500).json({message: 'User not found'})
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
          return res.status(500).json({message: 'Invalid password'})
        }
        const token = generateJwt(user.id, user.email, user.role)

        return res.status(201).json(token)
      } catch (error) {
        return res.status(404).json(error.message)
      }
  }

  async function check(req, res, next) {
    try {
      const token = generateJwt(req.user.id, req.user.email, req.user.role)
      return res.status(201).json(token)
    } catch (error) {
      return res.status(404).json(error.message)
    }
  }

module.exports = {
  registration,
  login,
  check
}