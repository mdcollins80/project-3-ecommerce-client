'use strict'

const store = require('../store')

// const showOrders = require('../templates/order-list.handlebars')

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
  resetForm($('#update-book'))
  $('#message').text('You have updated an order!')
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

// const getOrderSuccess = (data) => {
//   console.log(data)
//   console.log('ongetOrderSuccess ui reached!')
//   resetForm($('#get-order'))
//
//   const showOrdersHtml = showOrders({ orders: data.orders })
//   $('.orders-table').remove()
//   $('.order-list').append(showOrdersHtml)
//   $('#message').text('You have get a order!')
// }

const getOrderFailure = (response) => {
  console.log('ongetOrderFailure ui reached!')
  $('#message').text('Unable to get a order! Try again.')
}

module.exports = {
  createOrderSuccess,
  createOrderFailure,
  onUpdateOrderSuccess,
  onUpdateOrderFailure,
  onDeleteOrderSuccess,
  onDeleteOrderFailure,
  // getOrderSuccess,
  getOrderFailure
}
