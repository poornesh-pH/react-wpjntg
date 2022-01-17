import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import SideNav from './Components/SideNav';
import TopNav from './Components/TopNav';
import SideNavItem_1 from './Components/SideNavItems/SideNavItem_1';
import SideNavItem_2 from './Components/SideNavItems/SideNavItem_2';
import SideNavItem_3 from './Components/SideNavItems/SideNavItem_3';
const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="abc">
          <SideNav />
          <TopNav />
        </div>

        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/SN1" component={SideNavItem_1} />
          <Route exact path="/SN2" component={SideNavItem_2} />
          <Route exact path="/SN3" component={SideNavItem_3} />
          {/* <Route exact path="/TN1" component={TopNavItem_1} />
          <Route exact path="/TN2" component={TopNavItem_2} />
          <Route exact path="/TN3" component={TopNavItem_3} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default AppRouter;
