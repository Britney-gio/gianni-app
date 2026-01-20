import React from "react";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import type { Prodotti } from "../types/prodotti";
import "../styles/home.scss";
import { useAccount } from "wagmi";
import { useAppKit } from "@reown/appkit/react";

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isConnected } = useAccount();
  const { open } = useAppKit();
  const prodotto = location.state?.prodotto as Prodotti | undefined;

  if (!prodotto) {
    return <Navigate to="/" replace />;
  }

  const handleConfirm = () => {
    if (!isConnected) {
      connect({ connector: injected() });
      return;
    }

    console.log("Acquisto confermato:", prodotto.nome);
    alert("Wallet connesso. Qui partirà il pagamento.");
  };

  return (
    <main className="page">
      <header className="hero">
        <h1>Checkout</h1>
        <p>Rivedi i dettagli e conferma il tuo ordine.</p>
      </header>

      <button
        className="alert-button"
        type="button"
        onClick={() => navigate("/")}
      >
        Home
      </button>

      <section className="prodotto-card checkout-card">
        <img src={prodotto.immagine} alt={prodotto.nome} />
        <h2>{prodotto.nome}</h2>
        <p>{prodotto.descrizione}</p>
        <p>Origine: {prodotto.origine}</p>
        <p>
          <strong>Prezzo:</strong> {prodotto.prezzo}
        </p>

        <button type="button" onClick={handleConfirm}>
          {isConnected
            ? "Conferma acquisto"
            : "Connetti Metamask e conferma acquisto"}
        </button>
      </section>

      <footer className="footer">
        <p>Grazie per aver scelto un'agricoltura sostenibile e trasparente.</p>
        <p>Lo staff dell’azienda agricola di Gianni</p>
        <img src="../src/img/img-footer.jpg" alt="campo Gianni vista Etna" />
      </footer>
    </main>
  );
}
