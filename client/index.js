import React from 'react'
import ReactDOM from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'

import store from './store'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Auth0Provider
      domain="roa-2022-amy1.au.auth0.com"
      clientId="h9FJclzSoVNiiTlMIEi79jz7YxqUXZdJ"
      redirectUri={window.location.origin}
      audience="https://roa-2022-amy1.au.auth0.com/api/v2/"
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
