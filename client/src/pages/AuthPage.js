import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {AuthContext} from '../context/AuthContext'
import Form from "@rjsf/bootstrap-4"

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const {loading, request, error, clearError} = useHttp()
  const message = useMessage()

  const handleSubmit = async (e,element) => {
    let but = element.nativeEvent.submitter.className.split(" ")[0]
    let key = await Object.keys(e.formData)
    let password = e.formData[key[1]]
    let address = e.formData[key[0]] 
    if(but == 'reg') {
      try {
        console.log('here', password)
        const data = await request('/api/auth/register', 'POST', {address, password})
        message(data.message)
      } catch (e) {}
    } else {
      try {
        const data = await request('/api/auth/login', 'POST', {address, password})
        auth.login(data.token, data.userId)
      } catch (e) {}
    } 
  }

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])
  
  const sch = `{
    "title": "Create or Log in account",
    "type": "object",
    "properties": {
      "address": {
        "type": "string",
        "title": "address"
      },
     "password": {
        "type": "string",
        "title":"password"
      }
    }
  }`

  return (
    <div> 
      <div className="col s6 offset-s3 card-panel blue-grey lighten-4">
        <Form schema={JSON.parse(sch)} onSubmit={handleSubmit} disabled = {false}>
          <div>
            <button type="submit" className="reg waves-effect waves-light btn">register</button>
            <button type="submit" className="login waves-effect waves-light btn">log in</button>
          </div>
        </Form>
      </div>
    </div>
  ) 
}
