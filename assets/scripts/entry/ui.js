'use strict'

const showEntriesTemplate = require('../templates/hnd-listing.handlebars')
const addEntryTemplate = require('../templates/hnd-listing.handlebars')
const updateEntryTemplate = require('../templates/hnd-listing.handlebars')
const deleteEntryTemplate = require('../templates/hnd-listing.handlebars')
const store = require('../store.js')
const events = require('./events.js')
const api = require('./api.js')

const showEntriesSuccess = (data) => {
  // console.log('data is ', data)
  data.entries.sort(function (a, b) {
    return a.id - b.id
  })
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
  api.showEntries(data)
    .then(showEntriesSuccess)
    .then($('#addEntryFailure').html(' '))
    .catch(showEntriesFailure)
}

const addEntryFailure = (error) => {
  // console.log('addEntry failed')
  // console.error(error)
  $('#addEntryFailure').html('We were unable to add your entry.  Did you add a title?  Please try again.')
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
  api.showEntries(data)
    .then(showEntriesSuccess)
    .then($('#updateEntryFailure').html(' '))
    .catch(showEntriesFailure)
}

const updateEntryFailure = (error) => {
  // console.log('updateEntry failed')
  // console.error(error)
  $('#updateEntryFailure').html('We were unable to update your entry.  Did you add an ID?  Please try again.')
}

const deleteEntrySuccess = (data) => {
  // console.log('deleteEntry is a success')
  $('#deleteOneHnD').find('input:text, select, textarea').val('')
  // console.log('data is ', data)
  $('#delete').html(' ')
  api.showEntries(data)
    .then(showEntriesSuccess)
    .then($('#deleteEntryFailure').html(' '))
    .catch(showEntriesFailure)
}

const deleteEntryFailure = (error) => {
  // console.log('deleteEntry failed')
  // console.error(error)
  $('#deleteEntryFailure').html('We were unable to delete your entry.  Did you add an ID?  Please try again.')
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
