import { useState } from "react";
import "./App.css";

function App() {
  const [valorBRL, setValorBRL] = useState("");
  const [valorUSD, setValorUSD] = useState(null);

  const taxaCambio = 5.10; // 1 USD = 5.10 BRL

  const converter = () => {
    const brl = parseFloat(valorBRL.replace(",", "."));
    if (!isNaN(brl)) {
      const usd = brl / taxaCambio;
      setValorUSD(usd.toFixed(2));
    } else {
      setValorUSD(null);
    }
  };

  return (
    <>
      <div style={estilo.container}>
        <h2>Conversor BRL → USD</h2>
        <input
          type="text"
          placeholder="Digite o valor em R$"
          value={valorBRL}
          onChange={(e) => setValorBRL(e.target.value)}
          style={estilo.input}
        />
        <button onClick={converter} style={estilo.botao}>
          Converter
        </button>

        {valorUSD !== null && (
          <p>
            Valor em dólares: <strong>US$ {valorUSD}</strong>
          </p>
        )}
      </div>
    </>
  );
}

const estilo = {
   background: {
    backgroundColor: "#7ee065a6", 
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    maxWidth: "400px",
    margin: "100px auto",
    padding: "20px",
    borderRadius: "50px",
    boxShadow: "0 0 100px rgba(224, 0, 0, 0.1)",
    textAlign: "center",
    fontFamily: "Arial",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  botao: {
    padding: "10px 20px",
    backgroundColor: "#44A246",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default App;
