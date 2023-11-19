const express = require('express')
const router = express.Router()


const usercontroller = require('../contollers/user')

router.get('/users', usercontroller.index)

  router.post('/users', usercontroller.store)

  router.put('/user/:id', usercontroller.update)

  router.delete('/user/:id', usercontroller.delete)

  module.exports = router
