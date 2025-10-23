import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCountries = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca3"
      );
      if (!response.ok) throw new Error(Erro HTTP: ${response.status});
      const data = await response.json();
      setCountries(data);
      setFiltered(data);
    } catch (err) {
      console.error(err);
      setCountries([]);
      setFiltered([]);
      setError("Não foi possível carregar os países 😢");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    const term = search.toLowerCase().trim();
    if (!term) {
      setFiltered(countries);
      return;
    }
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(term)
    );
    setFiltered(filteredCountries);
  }, [search, countries]);

  return (
    <div className="app">
      <h1>🌎 Buscador de Países</h1>

      <input
        type="text"
        placeholder="Digite o nome do país"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {loading && <p className="loading">🔄 Carregando...</p>}
      {error && <p className="error">{error}</p>}

      <div className="countries-grid">
        {filtered.map((country) => (
          <div className="country-card" key={country.cca3}>
            <img
              src={country.flags.png}
              alt={country.flags.alt || Bandeira de ${country.name.common}}
              className="flag"
            />
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital ? country.capital[0] : "N/A"}</p>
            <p>Região: {country.region}</p>
            <p>População: {country.population.toLocaleString("pt-BR")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;