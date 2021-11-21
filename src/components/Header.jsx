import React, { useEffect, useState } from 'react';
import { getUser } from '../services/userAPI';
import NavBar from './NavBar';

export default function Header() {
  const [wait, setWait] = useState(false);
  const [name, setName] = useState();
  const mensagemLoading = 'Carregando...';
  async function loading() {
    setWait(true);
    const user = await getUser();
    setName(user.name);
    setWait(false);
  }
  useEffect(() => {
    loading();
  }, []);

  return (
    <div data-testid="header-component">
      <h1>Trybe-Tune</h1>
      <h3 data-testid="header-user-name">{name}</h3>
      <NavBar />
      {wait ? <p>{mensagemLoading}</p> : null}
    </div>
  );
}
