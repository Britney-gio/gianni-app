import { sepolia } from "wagmi/chains";
import { QueryClient } from "@tanstack/react-query";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

export const queryClient = new QueryClient();

const projectId = import.meta.env.VITE_REOWN_PROJECT_ID as string;

if (!projectId) {
  throw new Error("Missing VITE_REOWN_PROJECT_ID in .env");
}

export const wagmiAdapter = new WagmiAdapter({
  networks: [sepolia],
  projectId,
});

export const wagmiConfig = wagmiAdapter.wagmiConfig;
