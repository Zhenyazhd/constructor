import React, { useState, useContext, useEffect } from "react"
/*import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {useHistory} from 'react-router-dom'
import Form from "@rjsf/material-ui"
import Web3 from 'web3'
*/


export const Deploy = (props) => {
  /*  const history = useHistory()  
    const auth = useContext(AuthContext)
    const {request} = useHttp()

    const [deployed, setDeployed] = useState(false)
    const [address, setAddress] = useState(null)
 
  
    useEffect(() => {
        window.M.updateTextFields()
    }, [])


    const onSubmit_deploy = async ({formData}) => {
        let address
        const web3 = new Web3(Web3.givenProvider,  null, { transactionConfirmationBlocks: 1});
    
        let contract = new web3.eth.Contract(props.data['abi'])
        let params = []
        props.params.forEach((element) => {
          params.push(formData[element.toString()])
        })
        contract = await contract.deploy( { 
            data: props.data['bytecode'],
            arguments: params
        }).send({
            from: props.account,
        }).then(function(newContractInstance){
            address = newContractInstance.options.address  
        })
        setAddress(address)
        setDeployed(true) 

        const type_abi = props.type

        try {
            const data = await request('/api/token/deploy', 'POST', {address, type_abi}, {
              Authorization: `Bearer ${auth.token}`
            })
            history.push('/')
        } catch (e) { }
    }

    let content
    let dep = `{
      "title": "Do you agree use that account for deploying?",
      "type": "object",
      "properties": {
        "Your account": {
          "type": "string",
          "title": "address",
          "default": "${props.account}"
        },
        "Your balance": {
          "type": "string",
          "title": "balance",
          "default":"${props.ethBalance}"
        }
      }
    }`
    dep = JSON.parse(dep)

    if (deployed === false) {
      content = <Form schema={props.schema} onSubmit={onSubmit_deploy}/>
    }*/
    
    return (
      <div> 
        <h1>vcb n</h1>
      </div>
    )
}