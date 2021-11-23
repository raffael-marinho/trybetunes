import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard ';

export default function Album() {
  const [lista, setLista] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function loading() {
      const quardarMusica = await getMusics(id);
      setLista(quardarMusica);
    }
    loading();
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
          />
        ),
      )}
    </div>
  );
}
