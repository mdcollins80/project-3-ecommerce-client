'use strict'

const ordersApi = require('../orders/api')
const ordersUi = require('../orders/ui')

const onCheckoutSuccess = function () {
  console.log('checkout success reached')
  ordersApi.updateOrderCompleted()
    .then(() => $('#message').show().text('Your order has been purchased.  Thanks for shopping with Nozama.com!'))
    .catch(() => $('#message').show().text('Your charge is complete, but your order has not been updated to purchased.  We will work to rectify this minor error. Do NOT submit your order again or you will be charged twice.'))
  $('.shopping-cart').empty()
  ordersApi.createOrder()
    .then(ordersUi.createOrderSuccess)
    .catch(ordersUi.createOrderFailure)
}

const onCheckoutFailure = function () {
  $('#message').text('We apologize for the inconvenience, but there was an error with your purchase.  Please try again.')
}

module.exports = {
  onCheckoutSuccess,
  onCheckoutFailure
}
