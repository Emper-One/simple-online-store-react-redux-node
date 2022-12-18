const uuid = require('uuid')
const path = require('path');
const DeviceInfos = require('../models').DeviceInfos
const Devices = require('../models').Devices

async function create(req, res, next) {
  let { name, price, brandId, typeId, info } = req.body
  console.log(name, price, brandId, typeId, info)

    try {
      const {img} = req.files
      let fileName = uuid.v4() + ".jpg"
      img.mv(path.resolve(__dirname, '..', 'static', fileName))
      const device = await Devices.create({name, price, brandId, typeId, img: fileName});

      if (info) {
        info = JSON.parse(info)
        info.forEach(i =>
          DeviceInfos.create({
            title: i.title,
            description: i.description,
            deviceId: device.id
          })
        )
      }
      return res.status(201).json(device)
    } catch (error) {
      return res.status(404).json(error.message)
    }

} 

async function getAll(req, res) {
  let {brandId, typeId, limit, page} = req.query
  try {
    page = page || 1
    limit = limit || 9
    let offset = page * limit - limit
    let devices;
    if (!brandId && !typeId) {
      devices = await Devices.findAndCountAll({limit, offset})
    }
    if (brandId && !typeId) {
      devices = await Devices.findAndCountAll({where:{brandId}, limit, offset})
    }
    if (!brandId && typeId) {
      devices = await Devices.findAndCountAll({where:{typeId}, limit, offset})
    }
    if (brandId && typeId) {
      devices = await Devices.findAndCountAll({where:{typeId, brandId}, limit, offset})
    }
    return res.status(201).json(devices)
  } catch (error) {
    console.log(error)
    return res.status(404).json(error.message)
  }
}

async function getOne(req, res) {
  const {id} = req.params
  try {
    const device = await Devices.findOne(
      {
        where: {id},
        include: [{model: DeviceInfos, as: 'info'}]
      },
    )
    return res.status(201).json(device)
  } catch (error) {
    return res.status(404).json(error.message)
  }
}

module.exports = {
  create,
  getAll,
  getOne
}