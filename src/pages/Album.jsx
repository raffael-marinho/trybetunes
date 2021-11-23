import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard ';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

export default function Album() {
  const [lista, setLista] = useState([]);

  const [favorites, setFavorites] = useState([]);

  const [wait, setWait] = useState(false);

  const { id } = useParams();

  const mensagemLoading = 'Carregando...';

  async function getFavorites() {
    setWait(true);
    const pegaFavorita = await getFavoriteSongs();
    setFavorites(pegaFavorita);
    setWait(false);
  }

  useEffect(() => {
    async function loading() {
      const quardarMusica = await getMusics(id);
      setLista(quardarMusica);
    }
    loading();
    getFavorites();
  }, [id]);

  // console.log(lista);

  return (
    <div data-testid="page-album">
      <Header />
      <h2 data-testid="album-name">{lista[0]?.collectionName}</h2>
      <p data-testid="artist-name">{lista[0]?.artistName}</p>
      {lista.map(
        (list, index) => index !== 0 && (
          <MusicCard
            key={ index }
            trackName={ list.trackName }
            previewUrl={ list.previewUrl }
            trackId={ list.trackId }
            song={ list }
            checked={ favorites.find((favorite) => favorite.trackId === list.trackId) }
          />
        ),
      )}
      {wait ? <p>{mensagemLoading}</p> : null}
    </div>
  );
}
