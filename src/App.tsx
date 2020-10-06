import React, { useEffect } from 'react';
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

import data from './data/data.json'
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux'

const store = createStore(
  rootReducer
)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Provider store={store}>
        <Navbar />
        <Router>
          <Switch>
            <Route path='/login' component={Login} />

            <PrivateRoute
              path='/books'
              Component={Books}
              props={data}
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
      </Provider>
    </ThemeProvider>
  )
}

export default App;
