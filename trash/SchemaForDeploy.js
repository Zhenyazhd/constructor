import React from 'react'

export const SchemaForDeploy = (data) => {
    let name
    let params = []
    let template = [] 
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
    let sch = `{
        "title": "Constructor",
        "type": "object",
        "properties": {${template}}
    }`

    //sch = JSON.parse(sch)

    console.log(sch)
    return {params, sch}
}