const Router = require('express')
const router = new Router()

const { create, getAll, getOne } = require('../controllers/deviceController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), create)
router.get('/', getAll)
router.get('/:id', getOne)

module.exports = router