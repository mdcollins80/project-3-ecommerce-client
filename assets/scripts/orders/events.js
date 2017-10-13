'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateOrder = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  console.log('onCreateOrder events function reached!')
  api.createOrder(data)
    .then(ui.createOrderSuccess)
    .catch(ui.createOrderFailure)
}

const onUpdateOrder = (event) => {
  event.preventDefault()
  if (event.target && event.target.matches('form.order-product')) {
    const products = getFormFields(event.target)
    const data = {
      order: {
        id: '59de62b847bf685e5884174d',
        products: {
          name: products.products.name,
          category: products.products.category,
          price: products.products.price
        },
        purchaseStatus: 'bleep'
      }
    }
    api.updateOrder(data)
      .then(console.log)
      .catch(console.log)
  } else {
    console.log('farts')
  }
}

// const onCreatePick = function (event) {
//   event.preventDefault()
//   if (event.target && event.target.matches('form.pick')) {
//     const data = getFormFields(event.target)
//     data.pick.user_id = store.user.id.toString()
//     if (data.pick.winning_team.length > 0) {
//       $(event.target).children('button').remove()

const addHandlers = function () {
  $('#create-order').on('submit', onCreateOrder)
  $('.product-list').on('submit', onUpdateOrder)
}

module.exports = {
  addHandlers
}
