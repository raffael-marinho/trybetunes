import React, { useState } from 'react';
import { addSong } from '../services/favoriteSongsAPI';

export default function MusicCard(prop) {
  const { trackName, previewUrl, trackId, song, checked } = prop;

  const mensagemLoading = 'Carregando...';

  const [wait, setWait] = useState(false);

  async function addFavorite(event) {
    setWait(true);
    if (event.target.checked) {
      await addSong(song);
    }
    setWait(false);
  }

  return (
    <div>
      <h2>{trackName}</h2>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        <code>audio</code>
        .
      </audio>
      <label htmlFor={ trackId }>
        Favorita
        <input
          id={ trackId }
          type="checkbox"
          data-testid={ `checkbox-music-${trackId}` }
          onChange={ (event) => addFavorite(event) }
          checked={ checked }
        />
      </label>
      {wait ? <p>{mensagemLoading}</p> : null}
    </div>
  );
}
