'use strict'

const store = require('../store')

const resetForm = function resetForm ($form) {
  $form.find('input:text, input:password, input:file, select, textarea').val('')
  $form.find('input:radio, input:checkbox')
    .removeAttr('checked').removeAttr('selected')
}

const signUpSuccess = function (data) {
  console.log(data)
  console.log('Successfully signed up')
  $('#message').text('Successfully signed up')
  resetForm($('#sign-up'))
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign up')
  resetForm($('#sign-up'))
}

const signInSuccess = function (data) {
  console.log(data)
  console.log('Successfully signed in')
  $('#message').text('Successfully signed in')
  store.user = data.user
  resetForm($('#sign-in'))
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('.banner').hide()
  // #create-order, #get-products, #update-product, #delete-product
  $('#create-order').show()
  $('#get-products').show()
  $('#update-product').show()
  $('#delete-product').show()
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign in')
  resetForm($('#sign-in'))
}

const changePasswordSuccess = function () {
  console.log('Successfully changed password')
  $('#message').text('Successfully changed password!')
  resetForm($('#change-password'))
}

const changePasswordFailure = function (error) {
  console.log(error)
  $('#message').text('Error on change password!')
  resetForm($('#change-password'))
}

const signOutSuccess = function () {
  console.log('Successfully signed out')
  $('#message').text('Successfully signed out!')
  store.user = null // empty store
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.banner').show()

  // #create-order, #get-products, #update-product, #delete-product
  $('#create-order').hide()
  $('#get-products').hide()
  $('#update-product').hide()
  $('#delete-product').hide()
}

const signOutFailure = function (error) {
  console.log(error)
  $('#message').text('Error on sign out!')
}

const createProductSuccess = (response) => {
  console.log('createProductSuccess ui reached!')
  resetForm($('#create-order'))
  $('#message').text('You have added a product!')
}

const createProductFailure = (response) => {
  $('#message').text('Adding an order failed. Try again.')
}

const onUpdateProductSuccess = (id) => {
  console.log('onUpdateProductSuccess ui reached!')
  resetForm($('#update-book'))
  $('#message').text('You have updated an order!')
}

const onUpdateProductFailure = (response) => {
  console.log('onUpdateProductFailure ui reached!')
  $('#message').text('Unable to update order! Try again.')
}

const onDeleteProductSuccess = (id) => {
  console.log('onDeleteProductSuccess ui reached!')
  resetForm($('#delete-product'))
  $('#message').text('You have deleted a product!')
}

const onDeleteProductFailure = (response) => {
  console.log('onDeleteProductFailure ui reached!')
  $('#message').text('Unable to delete a product! Try again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createProductSuccess,
  createProductFailure,
  onUpdateProductSuccess,
  onUpdateProductFailure,
  onDeleteProductSuccess,
  onDeleteProductFailure
}
