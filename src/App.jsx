import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);

  const getApi = async () => {
    try {
      const res = await fetch('https://rickandmortyapi.com/api/character');
      const data = await res.json();

      console.log(data.results);
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="App">
      <h1>Personajes de Rick and Morty</h1>
      <div className="character-list">
        {characters.map((character) => (
          <div className="character-card" key={character.id}>
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} />
            <p>{character.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
