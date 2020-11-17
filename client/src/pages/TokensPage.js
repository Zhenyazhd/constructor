import React, {useContext, useEffect, useState, useCallback} from "react"
import { Button } from 'semantic-ui-react' 
import {useParams} from 'react-router-dom'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {Loader} from '../components/Loader'
import {useHistory} from 'react-router-dom'
import '../style/TokensPage.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const TokensPage = () => {
  const history = useHistory()  
  const tokenId = useParams().id
  const {token} = useContext(AuthContext)
  const {loading,request} = useHttp()
  const [tokens, setTokens] = useState(null)

  const getTokens = useCallback(async () => {
    try {
      const fetched = await request(`/api/token/`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setTokens(fetched)
    } catch (e) {}
  }, [token, tokenId, request])

  useEffect(() => {
    getTokens()
  }, [getTokens])
  
  let templ = [] 
  //choice_(Number(e.target.innerHTML.split('</i>')[1].split('T')[0]))-1)).innerText.split('</i>')
  const functions = async() => {
    let t = []
    if(tokens != null){
      let n = tokens.length
      let k = n+1
      while( n > 0 ) {
        t.push(<Button className="waves-effect waves-light btn" onClick={(e)=> choice_((Number(e.target.innerHTML.split('</i>')[1].split('T')[0]))-1)}>
                 <i class="material-icons right">attach_money</i>
                  {k-(n)}Token: {tokens[n-1]['address']} with type: {tokens[n-1]['type_abi']}
              </Button>)
        n = n - 1 
      }  
    }
    templ = t
  }
  let token_id

  const choice_ = useCallback( async (n) => {
    let k = tokens.length
    token_id =  tokens[k-1-n]['_id']
    try {
      const fetched = await request(`/api/token/${token_id}`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      history.push(`/contract/${token_id}`)
    } catch (e) {}
  })

  /*<div class="row"></div>*/
  let content
  
  if (loading) {
    content = <Loader />
  } else if (tokens) {
    functions()
    content = <div>
                <span className="black-text">Your tokens:</span>
                <div className="container">
                   {templ}
                </div>
              </div>
  }

 
  return (
    <div>
      {content}
    </div>
  )
}

