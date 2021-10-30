import {BrowserRouter, Switch, Route  } from 'react-router-dom';

import { SignIn } from './pages/SignIn';
import { Dashboard } from './pages/Dashboard'; 
import { NewSpot } from './pages/New';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={SignIn} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/new' component={NewSpot} />
      </Switch>
    </BrowserRouter>
  )
}

export { Routes };