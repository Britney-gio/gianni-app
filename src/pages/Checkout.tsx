import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import type { Prodotti } from "../types/prodotti";

export default function Checkout() {
  const location = useLocation();
  const prodotto = location.state?.prodotto as Prodotti | undefined;

  if (!prodotto) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <img src={prodotto.immagine} alt={prodotto.nome} />
      <h2>{prodotto.nome}</h2>
      <p>{prodotto.descrizione}</p>
      <p>Origine: {prodotto.origine}</p>
      <p>
        <strong>Prezzo:</strong> {prodotto.prezzo}
      </p>
      <button>Conferma Acquisto</button>
    </div>
  );
}
