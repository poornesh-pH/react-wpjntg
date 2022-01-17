import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import App from './App';

const AppRouter = () => {
  return (
    <div>
      <div>AppRouter</div>
      <BrowserRouter>
        <Switch>
          <Route  path="/" component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default AppRouter;
