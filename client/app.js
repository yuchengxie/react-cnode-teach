import React from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app.jsx'

const root = document.getElementById('root')

const render = Component => {
  ReactDom.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    root,
  )
}

render(App)
if (module.hot) {
  module.hot.accept('./app.jsx', () => {
    const NextApp = App().default
    render(NextApp)
  })
}
