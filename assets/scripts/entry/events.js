'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
// const store = require('../store')

const onShowEntries = function (event) {
  event.preventDefault()
  console.log('onShowEntries button has been clicked')
  api.showEntries()
  .then(ui.showEntriesSuccess)
  .catch(ui.showEntriesFailure)
}

const onAddEntry = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is ', data)
  api.addEntry(data)
  .done(ui.addEntrySuccess)
  .fail(ui.addEntryFailure)
}
//
// const onShowOneEntry = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.showOneEntry(data)
//   .done(ui.showOneEntrySuccess)
//   .fail(ui.showOneEntryFailure)
// }

const onUpdateEntry = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('onUpdateEntry has been called')
  console.log('event is ', event)
  console.log('data being sent to api is ', data)
  api.updateEntry(data)
  .done(ui.updateEntrySuccess)
  .fail(ui.updateEntryFailure)
}
//
// const onHideEntry = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.hideEntry(data)
//   .done(ui.hideEntrySuccess)
//   .fail(ui.hideEntryFailure)
// }

const onDeleteEntry = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('event is ', event)
  console.log('data being sent to api is ', data)
  api.deleteEntry(data)
  // commenting out the above to try this:
  // const data = event.target.id.split('-')
  // console.log('id: ', data[2])
  // api.deleteEntry(data[2])
  .done(ui.deleteEntrySuccess)
  .fail(ui.deleteEntryFailure)
}

const addHandlers = function (event) {
  $('#showAllHnD').on('click', onShowEntries)
  $('#addNewHnD').on('submit', onAddEntry)
  // $('#showOneHnD').on('submit', onShowOneEntry),
  $('#updateOneHnD').on('submit', onUpdateEntry)
  // $('#hideOneHnD').on('submit', onHideEntry)
  $('#deleteOneHnD').on('submit', onDeleteEntry)
}

module.exports = {
  addHandlers,
  onShowEntries,
  onAddEntry,
  // onShowOneEntry,
  onUpdateEntry,
  // onHideEntry,
  onDeleteEntry
}
