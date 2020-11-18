import React, { useState, useEffect, useContext, useCallback } from "react"
import { Button } from 'semantic-ui-react' 
import {useParams} from 'react-router-dom'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {Loader} from '../components/Loader'
import {Navbar} from '../components/Navbar'
//import Modal from 'react-bootstrap/Modal'

//import Web3 from 'web3'
import Form from "@rjsf/material-ui"
import Stage from '../code_json/Stage.json'
/*import Timetable from '../code_json/Timetable.json'
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
import d_stage from '../code_json/desciption/d_stage.json'*/
import detectEthereumProvider from '@metamask/detect-provider'
//import 'bootstrap/dist/css/bootstrap.min.css'

export const Contract = () => {
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
/* 
    const [sm_token, setToken] = useState(null)
    const tokenId = useParams().id
    const [type, setType] = useState(null)
    const [account, setAccount] = useState(null)
    const [ethBalance, setEthBalance] = useState(null)

    const getToken = useCallback(async () => {
        try {
          const fetched = await request(`/api/token/${tokenId}`, 'GET', null, {
            Authorization: `Bearer ${token}`
          })
          setToken(fetched)
          setType(fetched['type_abi'])
        } catch (e) {}
    }, [token, tokenId, request])
    

    
    useEffect(() => {
        getToken()
    }, [getToken])
    
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
        setAccount(accounts[0])
        
        let params = [
            account,
            'latest'
        ]
        let eth_Balance = await ethereum.request({ method: 'eth_getBalance',
                                                    params:params,
                                                }); 
        
        eth_Balance = parseInt(eth_Balance, 16)/(10**18);
        setEthBalance(eth_Balance)
    }
   
    let form = []
    
    const functions = async() => {
        let Abi
        console.log(sm_token)
        if (type == 'Stage') {
            Abi = Stage['abi']
        }*/
       /* else if(type === 'Timetable') {
            Abi = Timetable['abi']
        }
        else if(type === 'Escrow' ) {
            Abi = Escrow['abi'] 
        }
        else if(type === 'TimeEscrow' ) {
            Abi = Timeescrow['abi']
        }
        else if(type === 'Min' ) {
            Abi = Min['abi']
        }
        else if( type === 'Max' ) {
            Abi = Max['abi']
        }
        else if(type === 'Capped_min') {
            Abi = Capped_min['abi']
        }
        else if(type === 'Capped_max') {
            Abi = Capped_max['abi'] 
        }
        else if(type === 'List') {
            Abi = List['abi'] 
        }
        else if(type === 'Changerate') {
            Abi = Changerate['abi']
        }
        else if(type === 'Pause') {
            Abi = Pause['abi'] 
        }*/
      /*  try {
        let name
        let uiSchema
        let properties 
        let template = `{"title": ${name}, 
                     "type":"object", 
                     "properties":${properties}}`
        let temp_prop = []
        //const web3 = new Web3(Web3.givenProvider,  null, { transactionConfirmationBlocks: 1});
        //let contract = new web3.eth.Contract(Stage['abi'], this.state.account)
        console.log(type, Abi)
        Abi.forEach((element) => {
            if (element['type'] === 'function') {
                if (JSON.stringify(element['inputs']) !== '[]') {
                    element['inputs'].forEach((element) => {
                        name = element['name'] 
                        temp_prop.push(`"${name}":{"title":"${name}", "type":"string"}`) 
                    }) 
                }
                if( element["stateMutability"] === "payable"){
                    temp_prop.push(`"ether_value":{"title":"ether_value", "type":"string"}`) 
                }
                name =  element['name']
                template = `{"title": "${name}", 
                            "type":"object",
                            "description":"${d_stage[name]}",
                            "properties":{${temp_prop}}}`
                temp_prop = []
                uiSchema = {
                    classNames: name//waves-effect waves-light
                }
                let shm = JSON.parse(template)
            form.push(<Form schema = {JSON.parse(template)} uiSchema = {uiSchema} onSubmit = {onSubmit}> <button type="submit" className="waves-effect waves-light btn light-blue lighten-4">{name}<i class="material-icons right">send</i></button></Form>)
            } 
        }) } catch(e){
            
        }
    }


    const onSubmit = async ({formData}, e) => {
        let Abi
        if (type == 'Stage') {
            Abi = Stage['abi']
        }*/
       /* else if(type == 'Timetable') {
            Abi = Timetable['abi']
        }
        else if(type == 'Escrow' ) {
            Abi = Escrow['abi'] 
        }
        else if(type == 'TimeEscrow' ) {
            Abi = Timeescrow['abi']
        }
        else if(type == 'Min' ) {
            Abi = Min['abi']
        }
        else if( type == 'Max' ) {
            Abi = Max['abi']
        }
        else if(type == 'Capped_min') {
            Abi = Capped_min['abi']
        }
        else if(type == 'Capped_max') {
            Abi = Capped_max['abi'] 
        }
        else if(type == 'List') {
            Abi = List['abi'] 
        }
        else if(type == 'Changerate') {
            Abi = Changerate['abi']
        }
        else if(type == 'Pause') {
            Abi = Pause['abi'] 
        }
        let isReached
        let value = '0'
        let params = []
        let x = Object.keys(formData).forEach((element) => { 
            if( element !== "ether_value") {
                if (element !== "_aim") {
                    params.push(formData[element])
                }
                else {
                    params.push(Web3.utils.toWei(formData[element], 'ether'))
                }
            } else {
                value = formData[element]
            }
        })
        let method = e.target.getElementsByTagName('div')[0].getElementsByTagName('h5')[0]['innerText']//.classList[3] здесь получаешь доступ к названии функции
        let change_state = 'false'
        Abi.forEach((element) => {
            if (element['name'] === method && element['type'] === 'function' && element['stateMutability'] !== 'pure' && element['stateMutability'] !== 'view') {
                change_state = 'true'
            } 
        })*/
     /*   const web3 = new Web3(Web3.givenProvider,  null, { transactionConfirmationBlocks: 1});
        let contract = new web3.eth.Contract(Abi, sm_token['address'])
        if ( change_state === 'false'){
            await contract.methods[method](...params).call({from: account}).then(function(result){
                isReached = result.toString()  
            }) 
        } else {
            await contract.methods[method](...params).send({from: account , value: Web3.utils.toWei(value, 'ether')}).on('receipt', function(receipt){
                isReached = receipt.toString();
            }).on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                isReached = error.toString(); 
            })
        }
        let toastHTML = `<h5 class="black-text text-darken-2">${method}:${isReached}</h5>`*/
      //  window.M.toast({html: toastHTML }) 
    //}
    
    //functions()
    //getBlockchain()
/*
    let content

    if (loading) {
       content =  <Loader />
    } else {
        content = form
    }*/

   // {content}   <Navbar account={account} ethBalance = {ethBalance}/>

  

    return (
        <div> 
            
           
        </div>
    )
}



/* 


<Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{res_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{res}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>*/