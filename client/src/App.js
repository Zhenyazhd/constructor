import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {useAuth} from './hooks/auth.hook'
import {AuthContext} from './context/AuthContext'
import {Loader} from './components/Loader'
import 'materialize-css'

function App() {
  const {  login, logout, token, userId, ready } = useAuth() 
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  if (!ready) {
    return <Loader />
  }

  return (
    <Router>
      <AuthContext.Provider value = {{
        token, login, logout, userId, isAuthenticated 
      }}>
        <Router>
          { isAuthenticated}
            <div className="container">
              {routes}
            </div>
        </Router>
      </AuthContext.Provider> 
    </Router>
  )
}

export default App

