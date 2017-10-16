'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onDeleteProduct = (event) => {
  event.preventDefault()
  // console.log('onDeleteProduct events function reached!')
}

const addHandlers = function () {
  $('.remove-from-cart-btn').on('submit', onDeleteProduct)
}

module.exports = {
  addHandlers
}
