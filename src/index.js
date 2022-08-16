import React from 'react'
import ReactDOM from 'react-dom'

import ReduxProvider from './setup/store'
import ThemeProvider from './setup/theme'

import { Root } from './setup/root'

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <ThemeProvider>
        <Root />
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
