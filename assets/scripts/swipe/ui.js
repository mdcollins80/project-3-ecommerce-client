'use strict'

const store = require('../store')
const ordersApi = require('../orders/api.js')

const onCheckoutSuccess = function () {
  ordersApi.updateOrderCompleted()
    .then(() => $('#message').text('Your order has been purchased.  Thanks for shopping with Nozama.com!'))
    .catch(() => $('#message').text('Your charge is complete, but your order has not been updated to purchased.  We will work to rectify this minor error. Do NOT submit your order again or you will be charged twice.'))
  $('.shopping-cart').empty()
  store.order = null // removes the stored order
}

const onCheckoutFailure = function () {
  $('#message').text('We apologize for the inconvenience, but there was an error with your purchase.  Please try again.')
}

module.exports = {
  onCheckoutSuccess,
  onCheckoutFailure
}
