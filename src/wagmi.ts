import { http, createConfig } from 'wagmi'
//import { mainnet, sepolia } from 'wagmi/chains'
//import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'
import { monadTestnet } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'


export const config = createConfig({
  chains: [monadTestnet],
  connectors: [
    //injected(),
    //coinbaseWallet(),
    //walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
    metaMask(),
  ],
  transports: {
    [monadTestnet.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
