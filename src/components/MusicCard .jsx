import React from 'react';

export default function MusicCard(prop) {
  const { trackName, previewUrl } = prop;

  return (
    <div>
      <h2>{trackName}</h2>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        <code>audio</code>
        .
      </audio>
    </div>
  );
}
