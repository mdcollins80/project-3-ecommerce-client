'use strict'

// const getFormFields = require(`../../../lib/get-form-fields`)
// const api = require('./api')
// const ui = require('./ui')

// const handler = StripeCheckout.configure({
//   key: 'pk_test_IWtf8h0ew1zAXAmlNvnTtXKo',
//   image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
//   locale: 'auto',
//   token: function (token) {
//     // You can access the token ID with `token.id`.
//     // Get the token ID to your server-side code for use.
//   }
// })

// const onSwipeCheckout = function (event) {
//   event.preventDefault
//   const data = $(this).serializeArray()
//   console.log data
//   // process data and send ajax request
//
//   $.ajax()
//
//   // Prevent form submit.
//   return false;
// }

const addHandlers = function () {
  $('#stripe-form').get(0).submit = function (event) {
    const data = $(this).serializeArray()
    console.log(data)
    // process data and send ajax request

    // $.ajax(...)

    // Prevent form submit.
    return false
  }
}

module.exports = {
  addHandlers
}
