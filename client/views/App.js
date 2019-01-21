import React from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader' //eslint-disable-line
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import App from '../views/App.jsx'
import appState from '../store/app.state'

const root = document.getElementById('root')
const render = Component => {
  ReactDom.render(
    <AppContainer>
      <Provider appState={appState}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    root,
  )
}

render(App)
if (module.hot) {
  module.hot.accept('../views/App', () => {
    const NextApp = App().default
    render(NextApp)
  })
}
