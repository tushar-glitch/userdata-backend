const express = require('express')
const route = express.Router()
const userController = require('../controllers/userController')
route.get('/',userController.get_all)
route.get('/:id',userController.get_by_id)
route.post('/',userController.create_user)
route.patch('/:id',userController.update_user)
route.delete('/:id',userController.delete_user)

module.exports = route