import React, { useState } from 'react';
import Header from '../components/Header';

export default function Search() {
  const [musica, setMusica] = useState('');
  const valor2 = 2;

  return (
    <div data-testid="page-search">
      <Header />
      <form action="">
        <input
          type="text"
          value={ musica }
          onChange={ (event) => setMusica(event.target.value) }
          data-testid="search-artist-input"
        />
        <button
          type="button"
          data-testid="search-artist-button"
          disabled={ musica.length < valor2 }
        >
          pesquisar
        </button>
      </form>
    </div>
  );
}
