'use strict'

const showEntriesTemplate = require('../templates/hnd-listing.handlebars')
const addEntryTemplate = require('../templates/hnd-listing.handlebars')
const updateEntryTemplate = require('../templates/hnd-listing.handlebars')
const deleteEntryTemplate = require('../templates/hnd-listing.handlebars')
const store = require('../store.js')
const events = require('./events.js')

const showEntriesSuccess = (data) => {
  // console.log('data is ', data)
  const showEntriesHtml = showEntriesTemplate({ entries: data.entries })
  $('.content').html(showEntriesHtml)
  // console.log('showEntries is a success')
}

const showEntriesFailure = (error) => {
  // console.log('showEntries failed')
  // console.error(error)
}

const addEntrySuccess = (data) => {
  // console.log('you have reached api function')
  store.entry = data.entry
  // console.log('data.entry is ', data.entry)
  const addEntryHtml = addEntryTemplate({ entries: data.entries })
  // console.log('addEntryHtml = ', addEntryHtml)
  $('.content').append(addEntryHtml)
  $('#addNewHnD').find('input:text, select, textarea').val('')
  // console.log('addEntry is a success')
}

const addEntryFailure = (error) => {
  // console.log('addEntry failed')
  // console.error(error)
}

const updateEntrySuccess = (data) => {
  // const updateInfo = data
  // console.log('data.entry is ', data)
  // const updateEntryHtml = updateEntryTemplate({ entry: data.entry })
  // const updateEntryHtml = updateEntryTemplate({ entry: data.entry })
  // console.log('updateEntryHtml = ', updateEntryHtml)
  // $('.content').replace(showEntriesHtml)
  $('#updateOneHnD').find('input:text, select, textarea').val('')
  // events.onShowEntries()
  // console.log('updateEntry is a success')
}

const updateEntryFailure = (error) => {
  // console.log('updateEntry failed')
  // console.error(error)
}

const deleteEntrySuccess = (data) => {
  // console.log('deleteEntry is a success')
  $('#deleteOneHnD').find('input:text, select, textarea').val('')
  // console.log('data is ', data)
  $('#delete').html(' ')
}

const deleteEntryFailure = (error) => {
  // console.log('deleteEntry failed')
  // console.error(error)
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
