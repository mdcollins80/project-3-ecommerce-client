'use strict'

const store = require('../store')
const productsApi = require('../products/api')
const productsUi = require('../products/ui')
const ordersApi = require('../orders/api')
const ordersUi = require('../orders/ui')

const resetForm = function resetForm ($form) {
  $form.find('input:text, input:password, input:file, select, textarea').val('')
  $form.find('input:radio, input:checkbox')
    .removeAttr('checked').removeAttr('selected')
}

const signUpSuccess = function (data) {
  // console.log(data)
  // console.log('Successfully signed up')
  $('#message').text('Successfully signed up').show().fadeOut(8000)
  resetForm($('#sign-up'))
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign up').show().fadeOut(8000)
  resetForm($('#sign-up'))
}

const signInSuccess = function (data) {
  // console.log(data)
  // console.log('Successfully signed in')
  $('#message').text('Successfully signed in').show().fadeOut(8000)
  store.user = data.user
  resetForm($('#sign-in'))
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('.container').show()
  // #create-order
  $('#create-order-button').show()
  $('#create-order').show()
  $('#previous-orders-button').show()
  $('#buttonCheckout').show()
  productsApi.getProduct()
    .then(productsUi.getProductSuccess)
    .catch(productsUi.getProductFailure)
  ordersApi.createOrder()
    .then(ordersUi.createOrderSuccess)
    .catch(ordersUi.createOrderFailure)
}

const signInFailure = function () {
  // console.error(error)
  $('#message').text('Error on sign in').show().fadeOut(8000)
  resetForm($('#sign-in'))
}

const changePasswordSuccess = function () {
  // console.log('Successfully changed password')
  $('#password-message').text('Successfully changed password!').show().fadeOut(8000)
  resetForm($('#change-password'))
}

const changePasswordFailure = function () {
  $('#password-message').text('Error on change password!').show().fadeOut(8000)
  resetForm($('#change-password'))
}

const signOutSuccess = function () {
  $('#message').text('Successfully signed out!').show().fadeOut(8000)
  store.user = null // empty store
  store.order = null // clear out unfulfilled order
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.container').hide()
  // #create-order, #get-products, #update-product, #delete-product
  $('#create-order').hide()
  $('#get-product').hide()
  $('#update-product').hide()
  $('#delete-product').hide()
  $('#create-order-button').hide()
  $('#previous-orders-button').hide()
  $('#buttonCheckout').hide()
  $('.shopping-cart').empty()
  $('.previous-orders').empty()
}

const signOutFailure = function () {
  // console.log(error)
  $('#message').text('Error on sign out!').show().fadeOut(8000)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
