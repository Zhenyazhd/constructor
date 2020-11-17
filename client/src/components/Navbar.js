import React, { useContext } from 'react'
import {useHistory} from 'react-router-dom'
import { Button } from 'semantic-ui-react' 
import {AuthContext} from '../context/AuthContext'

import Identicon from 'identicon.js'

export const Navbar = (props) => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  
  const handleLogout = event => {  
    event.preventDefault()
    auth.logout()
    history.push('/')
  }

  const handleReturn = event => {  
    history.push('/')
  }
  /* <div className='top' >
            <h6 id="balance">Balance: {props.ethBalance}</h6>
            <div className="account">
            { props.account
            ? <img
              className="ml-2"
              src={`data:image/png;base64,${new Identicon(props.account, 30).toString()}`}
              alt=""
            />
            : <span></span>
          }
      <h6 id="account">{props.account}</h6>
            </div>
        <Button onClick={handleLogout}>
          Log out
        </Button>
        <Button onClick={handleReturn}>
            Return to profile
        </Button> <div className="account brand-logo">
      </div>
      
      
      <li><h6 id="balance center-align">Balance: {props.ethBalance}</h6></li>
            <li><h6 id="account flex-end">{props.account}</h6></li>*/

  return (
        <nav className="nav-extended">
        <div className="nav-wrapper  light-blue lighten-1">
            { props.account
            ? <img
              className="ml-2"
              src={`data:image/png;base64,${new Identicon(props.account, 30).toString()}`}
              alt=""
            />
            : <span></span>
          }
          
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a className="waves-effect waves-light white btn" onClick={handleReturn}> Return to profile</a></li>
          <li><a className="waves-effect waves-light white btn" onClick={handleLogout}>Log out</a></li>
          </ul>
        </div>
        <div className="nav-content fluorescent blue">
        <h6 id="account flex-end">Active account: {props.account}</h6>
        <h6 id="balance center-align">Balance: {props.ethBalance}</h6>  
        </div>
      </nav>   
  )
}
