'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const productEvents = require('./products/events')
const ordersEvents = require('./orders/events')
const swipeEvents = require('./swipe/events')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  authEvents.addHandlers()
  productEvents.addHandlers()
  ordersEvents.addHandlers()
  swipeEvents.addHandlers()
})
