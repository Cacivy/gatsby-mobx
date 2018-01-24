/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'mobx-react'
import Store from './src/store/'

exports.replaceRouterComponent = ({ history }) => {
  return ({ children }) => (
    <Provider store={Store}>
      <Router history={history}>{children}</Router>
    </Provider>
  )
}
