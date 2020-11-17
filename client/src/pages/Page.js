import React, { useContext } from 'react'
import {useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'

export const Page = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const handleLogout = event => {  
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    return (
        <div> 
           <h1>HERE</h1>
           <a className="waves-effect waves-light white btn" onClick={handleLogout}>Log out</a>
        </div>
    ) 
}
