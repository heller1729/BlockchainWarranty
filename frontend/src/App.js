import { useState, useEffect } from 'react';
import { useMetaMask } from "metamask-react";

import './app.scss';

import { providerHandler, safeMint } from './web3/contractInteraction';

import Header from './components/Header/Header';
import WalletLogin from './components/WalletLogin/WalletLogin';

function App() {
  const { status, connect, account } = useMetaMask();

  const [passLoading, setPassLoading] = useState(true);   // set loader state

  const handleChainChange = async (reload) => {
    const currentChain = await window.ethereum.request({ method: 'eth_chainId' });
  
    if(currentChain != '0x1') {
      // setPassLoading(true);
  
      window.ethereum
        .request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x4" }],
        })
        .then(() => {
          if(reload)
            window.location.reload(false);
        });
    }
  }
  
  window.ethereum.on('chainChanged', handleChainChange);
  
  const accountSetup = async () => {
    setPassLoading(true);

    handleChainChange(true);
   
    const account = await providerHandler();
    const test = await safeMint("0x59DEeD6470Aa1127744B6863Bd9661Bf62f32E58", "someuri", "abc123", "30");
    console.log(test);

    setPassLoading(false);
  };
  
  useEffect(() => {
    accountSetup();
  }, [account]);


  return (
    <div className="App">
      <Header account={account}/> 
      <WalletLogin connect={connect} status={status} />
    </div>
  );
}

export default App;
