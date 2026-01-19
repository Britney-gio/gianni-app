import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider } from "@tanstack/react-query";
import { createAppKit } from "@reown/appkit";

import App from "./App";
import { wagmiConfig, queryClient, wagmiAdapter } from "./config/web3";

import "./index.css";
import "./styles/_base.scss";
import "./styles/media-query.scss";

createAppKit({
  adapters: [wagmiAdapter],
  networks: wagmiConfig.chains,
  projectId: import.meta.env.VITE_REOWN_PROJECT_ID,
  metadata: {
    name: "gianni-app",
    description: "E-commerce agricolo Web3",
    url: window.location.origin,
    icons: [],
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <WagmiProvider config={wagmiConfig}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </WagmiProvider>,
);
