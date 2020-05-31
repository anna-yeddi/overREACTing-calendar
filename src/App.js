import React from 'react'
import moment from 'moment'
import Calendar from './components/Calendar'
import './App.css'

function App() {
  // const now = new Date(2017, 2, 8)
  moment.locale(window.navigator.language)
  const now = moment('2017-02-08')

  console.log(`Time localization: ${moment.locale()}`)

  return <Calendar date={now} />
}

export default App
