import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import App from './App'

const AppRouter = ()=>{
  return(
    <div>
    <Switch>
      {/* <Route exact path="/" children={<App />}/> */}
      {/* <Route exact path="/SNitem1" component={<Dashboard />}/>
      <Route exact path="/SNitem2" component={<Dashboard />}/>
      <Route exact path="/SNitem3" component={<Dashboard />}/> */}
    </Switch>
    </div>
  )
}
export default AppRouter