'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  return $.ajax({ // return ajax then set up, url, method, data
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    // add Token
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function () {
  return $.ajax({ // return ajax then set up, url, method, data
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    // add Token
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createProduct = (data) => {
  console.log(data)
  console.log('createProduct api function reached!')
  return $.ajax({
    url: config.apiOrigin + '/products/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
    .then((response) => {
      store.product = response.product
    })
}

const getProduct = () => {
  // console.log('getProducts api function reached!')
  return $.ajax({
    url: config.apiOrigin + '/products/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
    .then((response) => {
      store.product = response.product
      return store
    })
}

const updateProduct = (data) => {
  console.log('updateProduct api function reached!')
  return $.ajax({ // return ajax then set up, url, method, data
    url: config.apiOrigin + '/products/' + data.product.id,
    method: 'PATCH',
    // add Token
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteProduct = (id) => {
  console.log('deleteProduct api function reached!')
  return $.ajax({ // return ajax then set up, url, method, data
    url: config.apiOrigin + '/products/' + id,
    method: 'DELETE',
    // add Token
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createProduct,
  updateProduct,
  getProduct,
  deleteProduct
}
