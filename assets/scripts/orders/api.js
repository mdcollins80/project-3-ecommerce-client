'use strict'

const config = require('../config')
const store = require('../store')

const createOrder = () => {
  console.log('createOrder api function reached!')
  return $.ajax({
    url: config.apiOrigin + '/orders/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'order': {
        'purchaseStatus': 'false'
      }
    }
  })
}

const showOrder = () => {
  // console.log('showOrder api function reached!')
  return $.ajax({
    url: config.apiOrigin + '/orders/' + store.order.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateOrder = (data) => {
  console.log('updateOrder api function reached!')
  return $.ajax({
    url: config.apiOrigin + '/orders/' + data.order.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteOrder = (id) => {
  console.log('deleteOrder api function reached!')
  return $.ajax({ // return ajax then set up, url, method, data
    url: config.apiOrigin + '/orders/' + id,
    method: 'DELETE',
    // add Token
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showPreviousOrders = () => {
  console.log('showPreviousOrders api function reached!')
  console.log('store.user.id is ', store.user.id) // shows user id
  return $.ajax({
    url: config.apiOrigin + '/orders/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createOrder,
  updateOrder,
  deleteOrder,
  showOrder,
  showPreviousOrders
}
