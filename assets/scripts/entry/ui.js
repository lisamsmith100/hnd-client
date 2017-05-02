'use strict'

const showEntriesTemplate = require('../templates/hnd-listing.handlebars')
const addEntryTemplate = require('../templates/hnd-listing.handlebars')
const updateEntryTemplate = require('../templates/hnd-listing.handlebars')
const store = require('../store.js')
const events = require('./events.js')

const showEntriesSuccess = (data) => {
  console.log('data is ', data)
  const showEntriesHtml = showEntriesTemplate({ entries: data.entries })
  $('.content').append(showEntriesHtml)
  console.log('showEntries is a success')
}

const showEntriesFailure = (error) => {
  console.log('showEntries failed')
  console.error(error)
}

const addEntrySuccess = (data) => {
  console.log('you have reached api function')
  store.entry = data.entry
  console.log('data.entry is ', data.entry)
  console.log('data.user is ', data.user)
  const addEntryHtml = addEntryTemplate({ entries: data.entries })
  console.log('addEntryHtml = ', addEntryHtml)
  $('.content').append(addEntryHtml)
  $('#addNewHnD').find('input:text, select, textarea').val('')
  console.log('addEntry is a success')
  events.onShowEntries()
}

const addEntryFailure = (error) => {
  console.log('addEntry failed')
  console.error(error)
}

const updateEntrySuccess = (data) => {
  store.entry = data.entry
  console.log('data.entry is ', data.entry)
  console.log('data.user is ', data.user)
  const updateEntryHtml = updateEntryTemplate({ entry: data.entry })
  console.log('updateEntryHtml = ', updateEntryHtml)
  $('.content').replace(updateEntryHtml)
  $('#updateOneHnD').find('input:text, select, textarea').val('')
  events.onShowEntries()
  console.log('updateEntry is a success')
}

const updateEntryFailure = (error) => {
  console.log('updateEntry failed')
  console.error(error)
}

const deleteEntrySuccess = (data) => {
  store.entry = data.entry
  console.log('store.entry is ', store.entry)
  console.log('deleteEntry is a success')
  $('#deleteOneHnD').find('input:text, select, textarea').val('')
  events.onShowEntries()
}

const deleteEntryFailure = (error) => {
  console.log('deleteEntry failed')
  console.error(error)
}

module.exports = {
  showEntriesSuccess,
  showEntriesFailure,
  addEntrySuccess,
  addEntryFailure,
  updateEntrySuccess,
  updateEntryFailure,
  deleteEntrySuccess,
  deleteEntryFailure
}
