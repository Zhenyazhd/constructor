import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {AccountPage} from './pages/AccountPage'
import {AuthPage} from './pages/AuthPage'
/*import {Contract} from './pages/Contract'
<Route path="/contract/:id">
          <Contract />
        </Route> */

export const useRoutes = isAuthenticated => {

  if (isAuthenticated) {//exact for access<Redirect to="/use" /> 
    return (
      <Switch>
        <Route path="/account" exact> 
          <AccountPage />
        </Route> 
        
        <Redirect to="/account" exact/>
      </Switch>
    )
  } 
   

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}
