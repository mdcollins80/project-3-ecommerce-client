'use strict'

const config = require('../config')
const store = require('../store')
const ordersApi = require('../orders/api.js')

const handleToken = function (token) {
  console.log('store total is: ', store.total)
  return $.ajax({
    url: config.apiOrigin + '/charges',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      "amount": store.total,
      "token": token
    }
  })
    .then(ordersApi.updateOrderCompleted)
    .then(data => console.log('Order has been marked completed', data))
}
module.exports = {
  handleToken
}
