const express = require('express')
const router = express.Router()

const { getHomePage, postHomePage } = require('./index.controller')

// GET && POST  home page.
router.route('/')
  .get(getHomePage)
  .post(postHomePage)

module.exports = router
