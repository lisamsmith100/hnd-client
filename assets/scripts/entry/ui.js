'use strict'
// remove signIn and signOut
const store = require('../store.js')
// const entryEvents = require('./events.js')

const showEntriesSuccess = (data) => {
  store.entries = data.entries
  const userEntries = store.entries
  const userEntryArray = JSON.stringify(store.entries)
  // let showEntriesHtml = showEntriesTemplate({ entries: data.entries })
  // $('#content').append(showEntriesHtml)
  console.log('store.entries is ', userEntries)
  $('#content').html('userEntryArray is ', userEntryArray)
  console.log('store is', store)
  console.log('showEntries is a success')
}

const showEntriesFailure = (error) => {
  console.log('showEntries failed')
  console.error(error)
}

const addEntrySuccess = (data) => {
  store.entry = data.entry
  console.log('store.entry is ', store.entry)
  // $('#content').html('userEntryArray is ' + userEntryArray)
  console.log('addEntry is a success')
}

const addEntryFailure = (error) => {
  console.log('addEntry failed')
  console.error(error)
}

const showOneEntrySuccess = (data) => {
  store.entry = data.entry
  const userEntry = store.entry
  const userEntryArray = JSON.stringify(store.entry)
  console.log('store.entry is ', userEntry)
  $('#content').html('userEntryArray is ', userEntryArray)
  console.log('store is', store)
  console.log('showOneEntry is a success')
}

const showOneEntryFailure = (error) => {
  console.log('showOneEntry failed')
  console.error(error)
}

const updateEntrySuccess = (data) => {
  store.entry = data.entry
  console.log('store.entry is ', store.entry)
  // $('#content').html('userEntryArray is ' + userEntryArray)
  console.log('updateEntry is a success')
}

const updateEntryFailure = (error) => {
  console.log('updateEntry failed')
  console.error(error)
}

const hideEntrySuccess = (data) => {
  store.entry = data.entry
  console.log('store.entry is ', store.entry)
  // $('#content').html('userEntryArray is ' + userEntryArray)
  console.log('hideEntry is a success')
}

const hideEntryFailure = (error) => {
  console.log('hideEntry failed')
  console.error(error)
}

const deleteEntrySuccess = (data) => {
  store.entry = null
  console.log('store.entry is ', store.entry)
  // $('#content').html('userEntryArray is ' + userEntryArray)
  console.log('deleteEntry is a success')
}

const deleteEntryFailure = (error) => {
  console.log('deleteEntry failed')
  console.error(error)
}

const success = (data) => {
  console.log(data)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  showEntriesSuccess,
  showEntriesFailure,
  addEntrySuccess,
  addEntryFailure,
  showOneEntrySuccess,
  showOneEntryFailure,
  updateEntrySuccess,
  updateEntryFailure,
  hideEntrySuccess,
  hideEntryFailure,
  deleteEntrySuccess,
  deleteEntryFailure,
  success,
  failure
}
