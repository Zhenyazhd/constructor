import React, {useContext, useEffect, useState} from 'react'
import Form from "@rjsf/core"
import {useHttp} from '../hooks/http.hook'
import { Button } from 'semantic-ui-react'
import {useMessage} from '../hooks/message.hook'
import {AuthContext} from '../context/AuthContext'

// "start": "cross-env NODE_ENV=production node --max-old-space-size=8192 app.js",
//    "dev": "cross-env NODE_ENV=development concurrently \"npm run server\" \"npm run client\""
export const AuthPage1 = (props) => {
  const auth = useContext(AuthContext)
  const {loading, request, error, clearError} = useHttp()
  const [address, setAddress] = useState()
  const [password, setPassword] = useState()
  const [sm_token, setToken] = useState()
  const [type, setType] = useState()
  const message = useMessage()
  
  
  

  const registerHandler = async ({formData}) => {
    let key = await Object.keys(formData)
    setPassword(formData[key[1]])
    setAddress(formData[key[0]])
    setToken(props.sm_token)
    setType(props.type)
  }

  const handleRegister = async () => {
    let address_tkn = sm_token
    let type_abi = type
    try {
      const data = await request('/api/auth/register', 'POST', {address, password, address_tkn, type_abi})
      message(data.message)
    } catch (e) {}
  }
  
  const handleLogin = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {address, sm_token})
      auth.login(data.token, data.userId)
    } catch (e) {}
  }

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])
  
  const sch = `{
    "title": "User",
    "type": "object",
    "properties": {
      "address": {
        "type": "string",
        "title": "address",
        "default": "${props.account}"
      },
     "Password": {
        "type": "string",
        "title":"password"
      }
    }
  }`

  /*    "start": "cross-env NODE_ENV=production node --max-old-space-size=8192 app.js",
    "server": "nodemon app.js",
    "client": "npm run start  --prefix client",
    "client:install": "npm install --prefix client",
    "client:build": "npm run build --prefix client",
    "dev": "cross-env NODE_ENV=development concurrently \"npm run server\" \"npm run client\"" */
  //  
  return (
    <div> 
      <div>
       <h1>AUTH PAGE</h1>
        <Form schema={JSON.parse(sch)} onSubmit = {registerHandler} disabled = {false} />
        <Button onClick={handleRegister}>
          reqister
        </Button>
        <Button onClick={handleLogin}>
          Log in
        </Button>
      </div>
    </div>
  ) 
}

/* 
import schema from '../code_json/Schema.json'
import Stage from '../code_json/Stage.json'
import Timetable from '../code_json/Timetable.json'
import Escrow from '../code_json/Escrow.json'
import Timeescrow from '../code_json/Timeescrow.json'
import Min from '../code_json/Min.json'
import Pause from '../code_json/Pause.json'
import Max from '../code_json/Max.json'
import Min_max from '../code_json/Min_max.json'
import List from '../code_json/List.json'
import Capped_max from '../code_json/Capped_max.json'
import Capped_min from '../code_json/Capped_min.json'
import Capped_min_max from '../code_json/Capped_min_max.json'
import Changerate from '../code_json/Changerate.json'


const getBlockchain = async () => { 
    const provider = await detectEthereumProvider();

    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
    }

    if (provider) {
      await provider.request({method:'eth_requestAccounts'})
    } else {
      console.log('Please install MetaMask!');
    }

    const { ethereum } = window
      
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    //setAddress(accounts[0])
    //console.log(address)
      
    let params = [
      accounts[0],
      'latest'
    ]
    let eth_Balance = await ethereum.request({ method: 'eth_getBalance', params:params }); 
      
    eth_Balance = parseInt(eth_Balance, 16)/(10**18);
   // setEthBalance(eth_Balance)
    //console.log(ethBalance)
    let account = accounts[0]
    return {account, eth_Balance}
  }

  const { address1, ethBalance } = getBlockchain()
let content 
  if(chosen == 'false'){
    content = <Form schema={schema} onSubmit={handleChoice}/>
  } else {
   content = <Form schema={schema_deploy} onSubmit={handleDeploy}/>
  }

 let params = []
  let schema_deploy

  const handleChoice = ({formData}) => {
    if (formData['Stage']){
      data = Stage
    } 
    let template = []
    let name 
    data['abi'].forEach((element) => {
        if(element["type"] === "constructor"){
            element['inputs'].forEach((element) => {
                name = element['name']
                template.push(
                    `"${name}": {
                    "type": "string",
                    "title": "${name}"}`    
                )
              params.push(name)
            })
        }
    })
    let sch_ = `{
        "title": "Constructor",
        "type": "object",
        "properties": {${template}}
    }`

    schema_deploy = JSON.stringify(sch_)
    setChosen('true')
  }

  const handleDeploy = ({formData}) => {

  }
    <div>
        <h1>CREATE YOUR TOKEN</h1>
          {content}
      </div>*/