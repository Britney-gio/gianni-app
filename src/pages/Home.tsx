import React from "react";
import { listaProdotti } from "../data/listaProdotti";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

  return (
    <div>
        <h1>Benvenuto nell'e-commerce innovativo di Gianni</h1>
        <p>
        Gianni è un agricoltore siciliano che porta i prodotti della sua terra
        nel mondo Web3.
      </p>
      <h2>I prodotti della nostra terra</h2>

      <ul>
        {listaProdotti.map((prodotto) => (
            <li key={prodotto.id}>
            <h3>{prodotto.nome}</h3>
            <p>{prodotto.descrizione}</p>
            <p>Origine: {prodotto.origine}</p>
            <p><strong>Prezzo:</strong> {prodotto.prezzo}</p>
            <img src={prodotto.immagine} alt={prodotto.nome} />
            <button onClick={() =>
                navigate("/checkout/", {
                    state: { prodotto },
                })
            }>
            Procedi all acquisto
            </button>
            </li>
        ))}
      </ul>
    </div>
  );
}
