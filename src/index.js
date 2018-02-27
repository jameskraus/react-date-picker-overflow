// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import ReactDatePicker from 'react-date-picker'

const App = () => (
  <div>
    <ReactDatePicker />
  </div>
)

const root = document.getElementById('root')

if (root == null) {
  throw new Error('Root not found')
}

ReactDOM.render(<App />, root)
