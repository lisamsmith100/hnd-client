'use strict'

// const app = require('../app.js')
const config = require('../config')
const store = require('../store')

const showEntries = function () {
  // console.log('called showEntries in the entry/api.js')
  return $.ajax({
    url: config.apiOrigin + '/entries',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addEntry = function (data) {
  // console.log('called addEntry in the entry/api.js')
  // console.log('data is', data)
  return $.ajax({
    url: config.apiOrigin + '/entries/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateEntry = function (data) {
  // console.log('called updateEntry in the entry/api.js')
  // console.log('data is ', data)
  return $.ajax({
    url: config.apiOrigin + '/entries/' + data.entry.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteEntry = function (data) {
  // console.log('called deleteEntry in the entry/api.js')
  // console.log('data is', data)
  // console.log('data.id is ', data.entry.id)
  return $.ajax({
    url: config.apiOrigin + '/entries/' + data.entry.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  showEntries,
  addEntry,
  updateEntry,
  deleteEntry
}
