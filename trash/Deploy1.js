import React, { Component } from "react"
import { render } from "react-dom"

import Form from "@rjsf/material-ui"
import Web3 from 'web3'


class Deploy extends Component {

  async componentWillMount() {
    await this.deploy()
  }

  constructor(props){
    super(props)
    this.state = {
      deployed:'false',
      schema:'',
      params:'',
      address:'',
    }
  }

  async deploy() {
    let name
    let v = []
    let template = [] 
    this.props.data['abi'].forEach((element) => {
        if(element["type"] === "constructor"){
            element['inputs'].forEach((element) => {
                name = element['name']
                template.push(
                    `"${name}": {
                    "type": "string",
                    "title": "${name}"}`    
                )
              v.push(name)
            })
        }
    })
    let sch = `{
        "title": "Constructor",
        "type": "object",
        "properties": {${template}}
    }`

    this.setState({params:v})
    this.setState({schema:JSON.parse(sch)})
  }
  
  onSubmit_deploy = async ({formData}) => {
    let address
    const web3 = new Web3(Web3.givenProvider,  null, { transactionConfirmationBlocks: 1});

    let contract = new web3.eth.Contract(this.props.data['abi'])
    let params = []
    this.state.params.forEach((element) => {
      params.push(formData[element.toString()])
    })
    contract = await contract.deploy( { 
        data: this.props.data['bytecode'],
        arguments: params
    }).send({
        from: this.props.account,
    }).then(function(newContractInstance){
        address = newContractInstance.options.address  
    })
    console.log(address)
    this.setState({address})
    this.setState({deployed: 'true'}) 
  }

  render() {
    let content
    let dep = `{
      "title": "Do you agree use that account for deploying?",
      "type": "object",
      "properties": {
        "Your account": {
          "type": "string",
          "title": "address",
          "default": "${this.props.account}"
        },
        "Your balance": {
          "type": "string",
          "title": "balance",
          "default":"${this.props.ethBalance}"
        }
      }
    }`
    dep = JSON.parse(dep)

    if (this.state.deployed === 'false') {
      content = <Form schema={this.state.schema} onSubmit={this.onSubmit_deploy}/>
    } else {
      console.log(this.state.address)  
    }
    
    return (
      <div> 
        {content}
      </div>
    );
  }  
}


export default Deploy;
            
