'use strict'
// remove signIn and signOut
const store = require('../store.js')
// const app = require('../app.js')
// const entryEvents = require('../entries/events.js')

const signUpSuccess = (data) => {
  store.user = data.user
  console.log('store is' + store)
  console.log('signup is a success')
  $('.user-status').html('You signed up. Please sign-in.')
  // $('.navbar-brand').html('<p>You have successfully signed up! To play, sign in.</p>')
  $('.sign-up').find('input:text, input:password, select, textarea').val('')
}

const signUpFailure = (error) => {
  console.log('signup was a failure')
  console.log(error)
  $('.user-status').html('Your sign-up failed.  Try a new email or password combo.')
  $('.sign-up').find('input:text, input:password, select, textarea').val('')
}

const signInSuccess = (data) => {
  store.user = data.user
  console.log('data is', data)
  console.log('signin was a success')
  console.log('store is', store)
  $('.first-display').addClass('hiding')
  $('.logged-in-display').removeClass('hiding')
  $('.user-status').html('You signed in successfully.')
  $('.sign-in').find('input:text, input:password, select, textarea').val('')
}

const signInFailure = (error) => {
  console.log('sign in failed')
  console.error(error)
  $('.user-status').html('Hm. Your sign-in failed.  Try again.')
  $('.sign-in').find('input:text, input:password, select, textarea').val('')
}

const signOutSuccess = () => {
  store.user = null
  console.log('sign out was a success')
  $('.first-display').removeClass('hiding')
  $('.logged-in-display').addClass('hiding')
  $('.user-status').html('You signed out.')
}

const signOutFailure = (error) => {
  console.log(store)
  console.log('sign out failed')
  console.error(error)
  $('.user-status').html('Your sign out failed.')
}

const changePasswordSuccess = () => {
  console.log('Password Successfully Changed.')
  $('.logged-in-display').removeClass('hiding')
  $('.user-status').html('You changed your password.')
  $('.change-password').find('input:text, input:password, select, textarea').val('')
}

const changePasswordFailure = (error) => {
  console.log(store)
  console.log('change password failed')
  console.error(error)
  $('.user-status').html('Your password-change failed.')
}

const success = (data) => {
  console.log(data)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  success,
  failure
}
