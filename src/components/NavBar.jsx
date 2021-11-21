import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <Link data-testid="link-to-search" to="/search">pesquisar</Link>

      <Link data-testid="link-to-favorites" to="/favorites">favoritas</Link>

      <Link data-testid="link-to-profile" to="/profile">perfil</Link>
    </div>
  );
}
