import { DynamicWagmiConnector } from '@dynamic-labs/wagmi-connector';
import { CrossmintEmbeddedCheckout } from '@crossmint/client-sdk-react-ui';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';

export const wagmiConfig = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});

export const dynamicConfig = {
  environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID || '',
  settings: {
    walletConnectors: [DynamicWagmiConnector],
  },
};

export const crossmintConfig = {
  projectId: process.env.NEXT_PUBLIC_CROSSMINT_PROJECT_ID || '',
  Checkout: CrossmintEmbeddedCheckout,
}; 