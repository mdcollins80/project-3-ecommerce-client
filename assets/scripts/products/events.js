'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

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
  $('#create-product').on('submit', onCreateProduct)
  $('#update-product').on('submit', onUpdateProduct)
  $('#get-product').on('submit', onGetAllProducts)
  $('delete-product').on('submit', onDeleteProduct)
}

module.exports = {
  addHandlers
}
