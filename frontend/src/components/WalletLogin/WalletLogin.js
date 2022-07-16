import React from 'react'

import { MdOutlineErrorOutline } from 'react-icons/md'
import { AiOutlineLoading } from 'react-icons/ai'

import './walletLogin.scss'

export default function WalletLogin({ status, connect }) {
  return (
    <div className="wallet-login-container">
        {
            (status === "initializing" || status === "connecting") 
                ?   <div className="wallet-loading">
                        <AiOutlineLoading />
                        <h1>Metamask Loading</h1>
                    </div>
                : null
        }
        {
            (status === "unavailable") 
                ?   <div className="metamask-unavailable">
                        <MdOutlineErrorOutline />
                        <h1>Install MetaMask to continue</h1>
                    </div>
                : null
        }
        {
            (status === "notConnected") 
                ?   <div className="metamask-login">
                        <h1>Connect MetaMask Wallet</h1>
                        <button onClick={() => {connect()}}>CONNECT</button>
                    </div>
                : null
        }
    </div>
  )
}
