import React, {useContext, useEffect, useState, useCallback } from 'react'
import { Button } from 'semantic-ui-react' 
import {Navbar} from '../components/Navbar'
import {TokensPage} from './TokensPage'
//import Web3 from 'web3'

import detectEthereumProvider from '@metamask/detect-provider'
//import Type from './Type'

export const AccountPage = () => {
    const [account, setAccount] = useState(null)
    const [ethBalance, setEthBalance] = useState(null)
    const [cr_token, setCrToken] = useState(false)

    const handleCreate = () => {
        setCrToken(true)
    }
    
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
        console.log(accounts)
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

    useEffect(() => {
        getBlockchain()
      }, [getBlockchain])
    //getBlockchain()    <Type account={account} ethBalance = {ethBalance}/>
    
    let content 
    if( !cr_token ){
        content = <div class="card-panel">
                    <Button className="waves-effect waves-light btn" onClick={handleCreate}>
                        Create New Token
                    </Button>
                    <TokensPage/>
                </div>
    } else {
        content = <h1>fhdgjn</h1>//<Type account={account} ethBalance = {ethBalance}/>
    } 

    return (
        <div> 
            <Navbar account={account}
                ethBalance = {ethBalance}/>
            {content}
        </div>
    ) 
}
