import React from 'react'
import ReactDOM from 'react-dom'

import ReduxProvider from './setup/store'

import { Root } from './setup/root'

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <Root />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
