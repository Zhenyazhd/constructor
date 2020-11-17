import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {AccountPage} from './pages/AccountPage'
import {AuthPage} from './pages/AuthPage'
import {Contract} from './pages/Contract'

export const useRoutes = isAuthenticated => {

  if (isAuthenticated) {//exact for access<Redirect to="/use" /> 
    return (
      <Switch>
        <Route path="/account" exact> 
          <AccountPage />
        </Route>  
        <Route path="/contract/:id">
          <Contract />
        </Route>
      <Redirect to="/account" />
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
