import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import App from './App';

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" children={<App />} />
          {/* <Route exact path="/SNitem1" component={<Dashboard />}/>
      <Route exact path="/SNitem2" component={<Dashboard />}/>
      <Route exact path="/SNitem3" component={<Dashboard />}/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default AppRouter;
