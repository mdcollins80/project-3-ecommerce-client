'use strict'

const store = require('../store')
const api = require('./api')
const showPreviousOrders = require('../templates/previous-orders.handlebars')

const showOrderProducts = require('../templates/shopping-cart.handlebars')

const resetForm = function resetForm ($form) {
  $form.find('input:text, input:password, input:file, select, textarea').val('')
  $form.find('input:radio, input:checkbox')
    .removeAttr('checked').removeAttr('selected')
}

const createOrderSuccess = (response) => {
  console.log('createOrderSuccess ui reached!')
  $('#message').text('You have added an order!')
  store.order = response.order
}

const createOrderFailure = (response) => {
  $('#message').text('Adding an order failed. Try again.')
}

const onUpdateOrderSuccess = (id) => {
  console.log('onUpdateOrderSuccess ui reached!')
  $('#message').text('You have updated an order!')
  api.showOrder()
    .then(onShowOrderSuccess)
    .catch(onShowOrderFailure)
}

const onUpdateOrderFailure = (response) => {
  console.log('onUpdateOrderFailure ui reached!')
  $('#message').text('Unable to update order! Try again.')
}

const onDeleteOrderSuccess = (id) => {
  console.log('onDeleteOrderSuccess ui reached!')
  resetForm($('#delete-order'))
  $('#message').text('You have deleted a order!')
}

const onDeleteOrderFailure = (response) => {
  console.log('onDeleteOrderFailure ui reached!')
  $('#message').text('Unable to delete a order! Try again.')
}

const onShowOrderSuccess = (data) => {
  console.log('data is: ', data)
  console.log('data.order.products is: ', data.order.products)
  console.log('ongetOrderSuccess ui reached!')
  const products = data.order.products
  console.log('products is: ', products)
  const total = products.reduce(function (sum, num) {
    return sum + num.price
  }
    , 0)
  store.total = total
  const showOrderProductsHtml = showOrderProducts({ products: products })
  $('.cart-table').remove()
  $('.shopping-cart').append(showOrderProductsHtml)
  $('#message').text('You got your cart!')
}

const onShowOrderFailure = () => {
  $('#message').text('Couldn\'t show your shopping cart!')
}

const ShowPreviousOrdersSuccess = (data) => {
  console.log('ShowPreviousOrdersSuccess ui function reached!')
  console.log('data is: ', data)
  console.log('data.orders is: ', data.orders)
  const orders = data.orders
  const showPreviousOrdersHtml = showPreviousOrders({ orders: orders })
  $('.previous-orders-table').remove()
  $('.previous-orders').append(showPreviousOrdersHtml)
}

const ShowPreviousOrdersFailure = (data) => {
  console.log('ShowPreviousOrdersFailure ui function reached!')
}

// const getOrderFailure = (response) => {
//   console.log('ongetOrderFailure ui reached!')
//   $('#message').text('Unable to get your cart! Try again.')
// }

module.exports = {
  createOrderSuccess,
  createOrderFailure,
  onUpdateOrderSuccess,
  onUpdateOrderFailure,
  onDeleteOrderSuccess,
  onDeleteOrderFailure,
  onShowOrderSuccess,
  onShowOrderFailure,
  ShowPreviousOrdersSuccess,
  ShowPreviousOrdersFailure
}
