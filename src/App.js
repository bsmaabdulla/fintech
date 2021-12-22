import{injected}from"./components/wallet/connecters"
import{useWeb3React}from"@web3-react/core"
import{Web3ReactProvider,getWeb3ReactConttext}from"@web3-react/core"
import{Web3Provider}from"@ethersproject/providers"
import {ethers,contract, Wallet} from "ethers"
import React from 'react'


export default function App(){

const InteractiveArea=()=>{
  const context = useWeb3React()
  const {chainId, provider, active, activate, deactivate} = context
  
  const connectwallet=()=>{
    activate(injected)
  }

  const disconnectWallet=()=>{
    deactivate(injected)
  }

  return(
    <div>
      <button>connect</button>
      <div>concted Adrress:{WalletAddress}</div>
      <button>Disconnect</button>
    </div>
  )
}
function getLibraryf(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}
return (
  <Web3ReactProvider getLibrary={getLibraryf}>
    <InteractiveArea />
  </Web3ReactProvider>
)
}