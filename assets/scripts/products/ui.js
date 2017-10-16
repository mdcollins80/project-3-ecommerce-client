'use strict'

const store = require('../store')

const showProducts = require('../templates/product-list.handlebars')

const resetForm = function resetForm ($form) {
  $form.find('input:text, input:password, input:file, select, textarea').val('')
  $form.find('input:radio, input:checkbox')
    .removeAttr('checked').removeAttr('selected')
}

const createProductSuccess = (response) => {
  // console.log('createProductSuccess ui reached!')
  resetForm($('#create-product'))
  $('#message').text('You have added a product!').show().fadeOut(8000)
}

const createProductFailure = (response) => {
  $('#message').text('Adding an order failed. Try again.').show().fadeOut(8000)
}

const onUpdateProductSuccess = (id) => {
  // console.log('onUpdateProductSuccess ui reached!')
  resetForm($('#update-book'))
  $('#message').text('You have updated an order!').show().fadeOut(8000)
}

const onUpdateProductFailure = (response) => {
  // console.log('onUpdateProductFailure ui reached!')
  $('#message').text('Unable to update order! Try again.').show().fadeOut(8000)
}

const onDeleteProductSuccess = (id) => {
  // console.log('onDeleteProductSuccess ui reached!')
  resetForm($('#delete-product'))
  $('#message').text('You have deleted a product!').show().fadeOut(8000)
}

const onDeleteProductFailure = (response) => {
  // console.log('onDeleteProductFailure ui reached!')
  $('#message').text('Unable to delete a product! Try again.').show().fadeOut(8000)
}

const getProductSuccess = (data) => {
  // console.log(data)
  // console.log('ongetProductSuccess ui reached!')
  resetForm($('#get-product'))

  const showProductsHtml = showProducts({ products: data.products })
  $('.products-table').remove()
  $('.product-list').append(showProductsHtml)
  $('#message').text('You have got products!').show().fadeOut(8000)
}

const getProductFailure = (response) => {
  // console.log('ongetProductFailure ui reached!')
  $('#message').text('Unable to get a product! Try again.').show().fadeOut(8000)
}

module.exports = {
  createProductSuccess,
  createProductFailure,
  onUpdateProductSuccess,
  onUpdateProductFailure,
  onDeleteProductSuccess,
  onDeleteProductFailure,
  getProductSuccess,
  getProductFailure
}
