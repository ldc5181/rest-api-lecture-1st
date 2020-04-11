'use strict'

const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  return res.json({ message: 'ping' })
})

router.use('/v1', require('./v1'))

module.exports = router
