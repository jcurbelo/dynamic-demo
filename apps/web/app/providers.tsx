"use client";

import {
  DynamicContextProvider,
  DynamicWagmiConnector,
  WagmiProvider,
  QueryClient,
  QueryClientProvider,
  CrossmintProvider,
  wagmiConfig,
  createDynamicConfig,
  createCrossmintConfig,
  EthereumWalletConnectors,
} from "@dynamic-demo/config";
import type { ReactNode } from "react";

const queryClient = new QueryClient();

const dynamicConfig = createDynamicConfig({
  environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID || '',
  walletConnectors: [EthereumWalletConnectors],
});

const crossmintConfig = createCrossmintConfig({
  apiKey: process.env.NEXT_PUBLIC_CROSSMINT_CLIENT_API_KEY || '',
});

export function Providers({ children }: { children: ReactNode }) {
  return (
    <DynamicContextProvider settings={dynamicConfig.settings}>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>
            <CrossmintProvider apiKey={crossmintConfig.apiKey}>
              {children}
            </CrossmintProvider>
          </DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  );
}
