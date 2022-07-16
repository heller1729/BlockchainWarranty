import React from 'react'
import './header.scss'

export default function Header({ account }) {
  return (
    <div className="header-container">
        <div className="logo">
          <h1>GRID</h1>
        </div>

        <div className={
          account ? "wallet-address wallet-green"
                  : "wallet-address wallet-red"
          }
        >
          <p>
            {account 
              ? account.slice(0, 5) + "...." + account.slice(-4)
              : "Not Connected"}
          </p>
        </div>
    </div>
  )
}
