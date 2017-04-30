'use strict'

// const app = require('../app.js')
const config = require('../config')
const store = require('../store')
// const getFormFields = require('../../../lib/get-form-fields.js');

// authApi.signUp(authUi.success, authUi.failure, data);

const signUp = function (data) {
  console.log('signup data is ', data)
  return $.ajax({
    url: config.apiOrigin + 'sign-up/',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  console.log('signup data is ', data)
  return $.ajax({
    url: config.apiOrigin + 'sign-in/',
    method: 'POST',
    data
  })
}

const signOut = function () {
  console.log('signup data is ', data)
  return $.ajax({
    method: 'DELETE',
    url: config.apiOrigin + 'sign-out/' + store.user.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  console.log('chg pwd data is ', data)
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigin + 'change-password/' + store.user.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
