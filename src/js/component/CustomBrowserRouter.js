
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import { RouterContext } from '../hooks/contexts'

const CustomBrowserRouter = ( { children } ) => (
    <BrowserRouter>
      <Route>
        {( routeProps ) => (
          <RouterContext.Provider value={routeProps}>
            {children}
          </RouterContext.Provider>
        )}
      </Route>
    </BrowserRouter>
)

CustomBrowserRouter.propTypes = {
    children: PropTypes.oneOfType( [
        PropTypes.arrayOf( PropTypes.node ),
        PropTypes.node
    ] ).isRequired
}
export default CustomBrowserRouter