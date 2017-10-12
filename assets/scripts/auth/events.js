'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

//  sign-up, sign-in, change-password, sign-out authEvents

const onSignUp = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// end sign-up, sign-in, change-password, sign-out authEvents

const onCreateProduct = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  console.log('onCreateProduct events function reached!')
  api.createProduct(data)
    .then(ui.createProductSuccess)
    .catch(ui.createProductFailure)
}

const onGetAllProducts = (event) => {
  event.preventDefault()
  console.log('onGetAllProducts events function reached!')
  api.getProduct()
    .then(ui.getProductSuccess)
    .catch(ui.getProductFailure)
}

const onUpdateProduct = (event) => {
  event.preventDefault()
  console.log('onUpdateProduct events function reached!')
  const data = getFormFields(event.target)
  api.updateProduct(data)
    .then(ui.onUpdateProductSuccess)
    .catch(ui.onUpdateProductFailure)
}

const onDeleteProduct = (event) => {
  event.preventDefault()
  console.log('onDeleteProduct events function reached!')
  const id = getFormFields(event.target)
  api.deleteProduct(id.product.id)
    .then(ui.onDeleteProductSuccess)
    .catch(ui.onDeleteProductFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#create-product').on('submit', onCreateProduct)
  $('#update-product').on('submit', onUpdateProduct)
  $('#get-products').on('submit', onGetAllProducts)
  $('delete-product').on('submit', onDeleteProduct)
}

module.exports = {
  addHandlers
}
