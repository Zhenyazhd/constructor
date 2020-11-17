import React, { Component } from "react"
import { render } from "react-dom"
//import {Deploy} from './Deploy.js'

import Form from "@rjsf/material-ui"

import sch from '../code_json/Schema.json'
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
import Changerate from '../code_json/Changerate.json'*/

class Type extends Component {
    
    constructor(props){
      super(props)
      this.state = {
        data:'',
        chosen:'false',
        type:'',
        schema:'',
        params:''
      }
    }

    onSubmit_sch = ({formData}) => {
        let Abi
        if (formData['Stage']) {
            this.setState({data: Stage})
            this.setState({type: 'Stage'})
            Abi = Stage['abi']
        }
       /* else if(formData['Timetable'] ) {
            this.setState({data: Timetable})
            this.setState({type: 'Timetable'})
            Abi = Timetable['abi']
        }
        else if(formData['Escrow'] ) {
            this.setState({data: Escrow})
            this.setState({type: 'Escrow'})
            Abi = Escrow['abi']
        }
        else if(formData['TimeEscrow'] ) {
            this.setState({data: Timeescrow})
            this.setState({type: 'TimeEscrow'})
            Abi = Timeescrow['abi']
        }
        else if(formData['Min'] ) {
            this.setState({data: Min})
            this.setState({type: 'Min'})
            Abi = Min['abi']
        }
        else if(formData['Max'] ) {
            this.setState({data: Max})
            this.setState({type: 'Max'})
            Abi = Max['abi']
        }
        else if(formData['Min'] && formData['Max'] ) {
            this.setState({data: Min_max})
            this.setState({type: 'Min_max'})
            Abi = Min_max['abi']
        }
        else if(formData['Min'] && formData['Max_Wei'] ) {
            this.setState({data: Capped_min})
            this.setState({type: 'Capped_min'})
            Abi = Capped_min['abi']
        }
        else if(formData['Max_Wei'] && formData['Max'] ) {
            this.setState({data: Capped_max})
            this.setState({type: 'Capped_max'})
            Abi = Capped_max['abi']
        }
        else if(formData['Min'] && formData['Max'] && formData['Max_Wei']) {
            this.setState({data: Capped_min_max})
            this.setState({type: 'Capped_min_max'})
            Abi = Capped_min_max['abi']
        }
        else if(formData['Capped_min'] ) {
            this.setState({data: Capped_min})
            this.setState({type: 'Capped_min'})
            Abi = Capped_min['abi']
        }
        else if(formData['Capped_max'] ) {
            this.setState({data: Capped_max})
            this.setState({type: 'Capped_max'})
            Abi = Capped_max['abi']
        }
        else if(formData['List'] ) {
            this.setState({data: List})
            this.setState({type: 'List'})
            Abi = List['abi']
        }
        else if(formData['Changerate'] ) {
            this.setState({data: Changerate})
            this.setState({type: 'Changerate'})
            Abi = Changerate['abi']
        }
        else if(formData['Pause'] ) {
            this.setState({data: Pause})
            this.setState({type: 'Pause'})
            Abi = Pause['abi']
        }*/
        this.deploy(Abi)
        this.setState({chosen: 'true'})     
    }



    //for deploy
    
    async deploy(Abi) {
        let name
        let v = []
        let template = [] 
        Abi.forEach((element) => {
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

    render() {
    let content 

    /*
    <Deploy   schema = {this.state.schema}
                            params = {this.state.params}
                            data = {this.state.data}
                            type = {this.state.type}
                            account = {this.props.account}
                            ethBalance = {this.props.ethBalance}  /> 
    
    */
    

    if (this.state.chosen === 'true') {
        content = <h1>kek</h1>
    } else {
        content = <Form schema={sch} onSubmit={this.onSubmit_sch}/>
    }
   
    return (
        <div> 
            {content}
        </div>
        );
    }
}

export default Type;
            
                                                                                                                                                                                    