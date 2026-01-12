import React from "react";
import { listaProdotti } from "../data/listaProdotti";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <header>
        <h1>Benvenuto nell'e-commerce innovativo di Gianni</h1>
        <h2>Dalla terra di Sicilia alla blockchain Ethereum</h2>

        <p>
          Gianni è un agricoltore siciliano che insieme alla sua famiglia da
          generazioni coltiva la propria terra con passione e rispetto per la
          natura. Oggi porta i suoi prodotti biologici e a km zero nel mondo
          Web3, unendo tradizione e innovazione.
        </p>

        <p>
          In questa piattaforma è possibile acquistare esclusivamente tramite
          token su blockchain Ethereum, utilizzando ETH di prova su rete test.
        </p>
      </header>

      {/*ALERT*/}
      <section className="alert">
        <h3>Perchè questa scelta ?</h3>
        <p>
          Questa scelta non rappresenta solo un’innovazione tecnologica, ma
          anche una scelta ecologica. I token ERC-20 costituiscono un metodo di
          pagamento a basso impatto ambientale, poiché non richiedono la stampa
          di denaro fisico e riducono le emissioni legate alla sua produzione e
          gestione.
        </p>
      </section>

      <section>
        <h2>I prodotti della nostra terra:</h2>
        <p>
          Tutti i prodotti provengono dai campi di Gianni, situati in Sicilia,
          coltivati e curati con metodi biologici e sostenibili da lui e dalla
          sua famiglia.
        </p>

        <ul>
          {listaProdotti.map((prodotto) => (
            <li key={prodotto.id}>
              <h3>{prodotto.nome}</h3>
              <p>{prodotto.descrizione}</p>
              <p>Origine: {prodotto.origine}</p>
              <p>
                <strong>Prezzo:</strong> {prodotto.prezzo}
              </p>
              <img src={prodotto.immagine} alt={prodotto.nome} />
              <button
                onClick={() =>
                  navigate("/checkout/", {
                    state: { prodotto },
                  })
                }
              >
                Procedi all acquisto
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/*FOOTER*/}
      <footer>
        <p>Grazie per aver scelto un’agricoltura sostenibile e trasparente.</p>
        <p>Lo staff dell’azienda agricola di Gianni</p>
        <img src="" alt="" />
      </footer>
    </main>
  );
}
