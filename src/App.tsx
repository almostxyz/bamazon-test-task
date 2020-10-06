import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import { theme, ThemeProvider, CSSReset } from '@chakra-ui/core'

import { Navbar } from './components/Navbar';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { Books } from './pages/Books';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />

      <Navbar />
      <Router>
        <Switch>
          <Route path='/login' component={Login} />

          <PrivateRoute
            path='/books'
            Component={Books}
            redirectTo='/login'
          />

          <PrivateRoute
            path='/profile'
            Component={Profile}
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
