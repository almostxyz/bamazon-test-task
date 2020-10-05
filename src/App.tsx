import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import { theme, ThemeProvider, CSSReset } from '@chakra-ui/core'

import { Navbar } from './components/Navbar';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />

      <Navbar />
      <Router>
        <Switch>
          <Route path='/login'>
            <div>
              login page
            </div>
          </Route>

          <PrivateRoute
            path='/books'
            component={<div>books page</div>}
            redirectTo='/login'
          />

          <PrivateRoute
            path='/profile'
            component={<div>profile page</div>}
            redirectTo='/login'
          />

          <Route exact path='/'>
            <div>
              main page
            </div>
          </Route>

        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App;
