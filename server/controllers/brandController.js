const Brands = require('../models').Brands

async function create(req, res) {
    const {name} = req.body
    try {
      const brand = await Brands.create({name})
      return res.status(201).json(brand)
    } catch (error) {
      return res.status(404).json(error.message)
    }
    
}

async function getAll(req, res) {
    try {
      const brands = await Brands.findAll()
      return res.status(201).json(brands)
    } catch (error) {
      return res.status(404).json(error.message)
    }
}


module.exports = {
  create,
  getAll
}