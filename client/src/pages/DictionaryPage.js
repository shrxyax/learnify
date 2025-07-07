import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style.css";

export default function DictionaryPage() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!word) return;

    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!res.ok) {
        setError("Word not found 😓");
        setResult(null);
        return;
      }
      const data = await res.json();
      setResult(data[0]);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to fetch word");
      setResult(null);
    }
  };

  return (
    <div className="dashboard-page">
      <Header />

      <section className="section">
        <h2 className="section-heading neon-text">📚 Dictionary</h2>
        <div className="dictionary-box">
          <input
            type="text"
            placeholder="Type a word..."
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <button className="cta-btn neon-button" onClick={handleSearch}>
            Search
          </button>
        </div>

        {error && <p className="error-msg">{error}</p>}

        {result && (
          <div className="result-box">
            <h3>{result.word} <span className="phonetic">{result.phonetics?.[0]?.text}</span></h3>
            {result.meanings?.map((m, idx) => (
              <div key={idx} className="meaning-box">
                <h4>{m.partOfSpeech}</h4>
                <p><strong>Definition:</strong> {m.definitions?.[0]?.definition}</p>
                {m.definitions?.[0]?.example && (
                  <p><strong>Example:</strong> <em>"{m.definitions[0].example}"</em></p>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
