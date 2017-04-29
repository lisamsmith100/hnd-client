'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up button has been clicked')
  const data = getFormFields(event.target)
  console.log(data)
  api.signUp(data)
  .done(ui.success)
  .fail(ui.fail)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in button has been clicked')
  const data = getFormFields(event.target)
  console.log(data)
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.fail)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out button has been clicked')
  const data = getFormFields(event.target)
  console.log(data)
  api.signOut(data)
  .done(ui.signOutSuccess)
  .fail(ui.fail)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password button has been clicked')
  const data = getFormFields(event.target)
  console.log(data)
  api.changePassword(data)
  .done(ui.changePasswordSuccess)
  .fail(ui.fail)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
