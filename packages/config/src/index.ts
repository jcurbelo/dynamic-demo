import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';

export const wagmiConfig = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});

export type DynamicConfigSettings = {
  environmentId: string;
  walletConnectors: typeof EthereumWalletConnectors[];
};

export type CrossmintConfigSettings = {
  apiKey: string;
};

export const createDynamicConfig = (settings: DynamicConfigSettings) => ({
  settings: {
    environmentId: settings.environmentId,
    walletConnectors: [EthereumWalletConnectors],
  },
});

export const createCrossmintConfig = (settings: CrossmintConfigSettings) => ({
  apiKey: settings.apiKey,
});

// Export specific components and types we need
export { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
export { DynamicWagmiConnector } from '@dynamic-labs/wagmi-connector';
export { WagmiProvider } from 'wagmi';
export { QueryClient, QueryClientProvider } from '@tanstack/react-query';
export { CrossmintProvider } from '@crossmint/client-sdk-react-ui';
export { EthereumWalletConnectors } from '@dynamic-labs/ethereum'; 