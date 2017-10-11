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
}

const signOutFailure = function (error) {
  console.log(error)
  $('#message').text('Error on sign out!')
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
