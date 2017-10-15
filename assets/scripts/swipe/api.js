'use strict'

const config = require('../config')
const store = require('../store')

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
    .then(data => console.log('data is ', data))
}
module.exports = {
  handleToken
}
