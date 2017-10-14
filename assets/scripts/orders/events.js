'use strict'

const store = require('../store')
const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateOrder = (event) => {
  event.preventDefault()
  console.log('onCreateOrder events function reached!')
  api.createOrder()
    .then(ui.createOrderSuccess)
    .catch(ui.createOrderFailure)
}

const onUpdateOrderAdd = (event) => {
  event.preventDefault()
  if (event.target && event.target.matches('form.order-product')) {
    const products = getFormFields(event.target)
    const data = {
      order: {
        id: store.order.id,
        products: {
          name: products.products.name,
          category: products.products.category,
          price: products.products.price
        },
        purchaseStatus: 'false'
      }
    }
    api.updateOrder(data)
      .then(ui.onUpdateOrderSuccess)
      .catch(ui.onUpdateOrderFailure)
  } else {
    console.log('farts...Add to Cart button did not work!')
  }
}

const onUpdateOrderRemove = (event) => {
  event.preventDefault()
  if (event.target && event.target.matches('form.cart-product')) {
    const products = getFormFields(event.target)
    console.log('products is: ', products)
    const data = {
      order: {
        id: store.order.id,
        products: {
          id: products.product.id
        },
        purchaseStatus: 'false'
      }
    }
    api.updateOrder(data)
      .then(ui.onUpdateOrderSuccess)
      .catch(ui.onUpdateOrderFailure)
  } else {
    console.log('farts...Remove from Cart button did not work!')
  }
}

const onShowOrder = (event) => {
  event.preventDefault()
  api.showOrder()
    .then(ui.onShowOrderSuccess)
    .catch(ui.onShowOrderFailure)
}

const addHandlers = function () {
  $('#create-order-button').on('submit', onCreateOrder)
  $('#show-cart-button').on('submit', onShowOrder)
  $('.product-list').on('submit', onUpdateOrderAdd)
  $('.shopping-cart').on('submit', onUpdateOrderRemove)
}

module.exports = {
  addHandlers
}
