'use strict'

// const app = require('../app.js')
const config = require('../config')
const store = require('../store')
// const getFormFields = require('../../../lib/get-form-fields.js');

// authApi.signUp(authUi.success, authUi.failure, data);

const showEntries = function () {
  console.log('called showEntries in the entry/api.js')
  return $.ajax({
    url: config.apiOrigin + '/entries',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addEntry = function (data) {
  console.log('called addEntry in the entry/api.js')
  console.log('data is' + data)
  return $.ajax({
    url: config.apiOrigin + '/entries/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showOneEntry = function (data) {
  console.log('called showOneEntry in the entry/api.js')
  console.log('data is' + data)
  return $.ajax({
    url: config.apiOrigin + '/entries/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateEntry = function (data) {
  console.log('called addEntry in the entry/api.js')
  console.log('data is' + data)
  return $.ajax({
    url: config.apiOrigin + '/entries/',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const hideEntry = function (data) {
  console.log('called hideEntry in the entry/api.js')
  console.log('data is' + data)
  return $.ajax({
    url: config.apiOrigin + '/entries/',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteEntry = function (data) {
  console.log('called deleteEntry in the entry/api.js')
  console.log('data is' + data)
  return $.ajax({
    url: config.apiOrigin + '/entries/',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  showEntries,
  addEntry,
  showOneEntry,
  updateEntry,
  hideEntry,
  deleteEntry
}
