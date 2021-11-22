import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

export default function Search() {
  const [musica, setMusica] = useState('');

  const [artista, setArtista] = useState('');

  const [albuns, setAlbuns] = useState([]);

  const [wait, setWait] = useState(false);

  const mensagemLoading = 'Carregando...';

  const valor2 = 2;

  async function pesquisar() {
    setWait(true);
    const result = await searchAlbumsAPI(musica);
    setAlbuns(result);
    setArtista(musica);
    setWait(false);
    setMusica('');
  }

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
          onClick={ pesquisar }
          data-testid="search-artist-button"
          disabled={ musica.length < valor2 }
        >
          Pesquisar
        </button>
      </form>
      {wait ? <p>{mensagemLoading}</p> : null}
      {!wait ? <p>{`Resultado de álbuns de: ${artista}`}</p> : null}
      {albuns.map((album, index) => (
        <Link
          data-testid={ `link-to-album-${album.collectionId}` }
          to={ `/album/${album.collectionId}` }
          key={ index }
        >
          {album.collectionName}
        </Link>
      ))}
      {albuns.length === 0 ? <p>Nenhum álbum foi encontrado</p> : null}
    </div>
  );
}
