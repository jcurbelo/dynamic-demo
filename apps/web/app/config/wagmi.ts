import { createConfig } from "wagmi";
import { http } from "viem";
import { baseSepolia } from "viem/chains";

export const wagmiConfig = createConfig({
  chains: [baseSepolia],
  multiInjectedProviderDiscovery: false,
  transports: {
    [baseSepolia.id]: http(),
  },
});
