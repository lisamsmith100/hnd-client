'use strict'

const showEntriesTemplate = require('../templates/hnd-listing.handlebars')
const addEntryTemplate = require('../templates/hnd-listing.handlebars')
const updateEntryTemplate = require('../templates/hnd-listing.handlebars')
const deleteEntryTemplate = require('../templates/hnd-listing.handlebars')
const store = require('../store.js')
const entryEvents = require('./events.js')

const showEntriesSuccess = (data) => {
  console.log('data is ', data)
  const showEntriesHtml = showEntriesTemplate({ entries: data.entries })
  $('.content').append(showEntriesHtml)
  // const showEntriesHtml = showEntriesTemplate({ entries: data.entries })
  // $('.content').append(showEntriesHtml)
  console.log('showEntries is a success')
}

const showEntriesFailure = (error) => {
  console.log('showEntries failed')
  console.error(error)
}

const addEntrySuccess = (data) => {
  store.entry = data.entry
  console.log('data.entry is ', data.entry)
  console.log('data.user is ', data.user)
  const addEntryHtml = addEntryTemplate({ entry: data.entry })
  console.log('addEntryHtml = ', addEntryHtml)
  $('.content').append(addEntryHtml)
  $('#addNewHnD').find('input:text, select, textarea').val('')
  entryEvents.onShowEntries()
  console.log('addEntry is a success')
}

const addEntryFailure = (error) => {
  console.log('addEntry failed')
  console.error(error)
}

const showOneEntrySuccess = (data) => {
  store.entry.id = data.entry.id
  console.log('data.entry.id is ', data.entry.id)
  const showOneEntryHtml = showEntriesTemplate({ entries: data.entry.id })
  $('.content').replace(showEntriesHtml)
  console.log('showOneEntry is a success')
  $('#showOneHnD').find('input:text, select, textarea').val('')
}

const showOneEntryFailure = (error) => {
  console.log('showOneEntry failed')
  console.error(error)
}

const updateEntrySuccess = (data) => {
  store.entry = data.entry
  console.log('data.entry is ', data.entry)
  console.log('data.user is ', data.user)
  const updateEntryHtml = updateEntryTemplate({ entry: data.entry })
  console.log('updateEntryHtml = ', updateEntryHtml)
  $('.content').append(updateEntryHtml)
  $('#updateOneHnD').find('input:text, select, textarea').val('')
  entryEvents.onShowEntries()
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
  $('#hideOneHnD').find('input:text, select, textarea').val('')
}

const hideEntryFailure = (error) => {
  console.log('hideEntry failed')
  console.error(error)
}

const deleteEntrySuccess = (data) => {
  store.entry = data.entry
  console.log('store.entry is ', store.entry)
  const deleteEntryHtml = deleteEntryTemplate({ entry: data.entry })
  console.log('deleteEntry is a success')
  $('#deleteOneHnD').find('input:text, select, textarea').val('')
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
