import { WagmiProvider, createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { QueryClient } from "@tanstack/react-query";
import { createAppKit } from "@reown/appkit";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

export const queryClient = new QueryClient();

export const wagmiAdapter = new WagmiAdapter({
  networks: [sepolia],
  projectId: import.meta.env
    .VITE_REOWN_PROJECT_ID83cc208cdd2d492921e97a5c8f32a128,
});

export const wagmiConfig = createConfig({
  chains: [sepolia],
  transports: wagmiAdapter.transports,
});

createAppKit({
  adapters: [wagmiAdapter],
  networks: [sepolia],
  projectId: import.meta.env
    .VITE_REOWN_PROJECT_ID83cc208cdd2d492921e97a5c8f32a128,
  metadata: {
    name: "gianni-app",
    description: "E-commerce agricolo Web3",
    url: "http://localhost:5173",
    icons: [],
  },
});
