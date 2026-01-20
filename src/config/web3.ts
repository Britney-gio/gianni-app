import { createConfig, http } from "wagmi";
import { sepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const wagmiConfig = createConfig({
  chains: [sepolia],
  connectors: [
    injected({
      shimDisconnect: true, // utile in dev
    }),
  ],
  transports: {
    [sepolia.id]: http(),
  },
});
