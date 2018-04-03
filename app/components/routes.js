import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IndividualTable from './IndividualTable';
import ShowRecord from './showRecord';
import LoginPage from './login';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path='/' component={LoginPage} />
      <Route path='/individualTable' component={IndividualTable} />
      <Route path='/showRecord/:name/:status' component={ShowRecord} />
    </Switch>
      </div>
)
export default Routes;
