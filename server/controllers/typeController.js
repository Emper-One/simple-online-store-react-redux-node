const Types = require('../models').Types

async function create(req, res) {
    const {name} = req.body
    try {
      const type = await Types.create({name})
      return res.status(201).json(type)
    } catch (error) {
      return res.status(404).json(error.message)
    }
}

async function getAll(req, res) {
  try {
    const types = await Types.findAll()
    return res.status(201).json(types)
  } catch (error) {
    return res.status(404).json(error.message)
  } 
}

module.exports = {
  create,
  getAll
}