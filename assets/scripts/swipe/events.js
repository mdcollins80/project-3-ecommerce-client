'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const checkoutHandler = StripeCheckout.configure({
  key: 'pk_test_IWtf8h0ew1zAXAmlNvnTtXKo',
  locale: 'auto'
})

// function handleToken (token) {
//   fetch('http://localhost:4741/charges', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(token)
//   })
//     .then(data => console.log('data is ', data))
// }

const addHandlers = function () {
  $('#buttonCheckout').on('click', function (ev) {
    checkoutHandler.open({
      token: api.handleToken,
      amount: store.total
    })
  })
}

module.exports = {
  addHandlers
}
