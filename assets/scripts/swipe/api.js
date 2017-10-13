'use strict'

const config = require('../config')
const store = require('../store')

const handleToken = function (token) {
  return $.ajax({
    url: config.apiOrigin + '/charges',
    method: 'POST',
    data: {
      "amount": 800,
      "token": token
    }
  })
    .then(data => console.log('data is ', data))
}
module.exports = {
  handleToken
}
