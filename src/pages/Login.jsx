import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createUser } from '../services/userAPI';

export default function Login() {
  const [name, setName] = useState('');

  const [wait, setWait] = useState(false);

  const valor3 = 3;

  const mensagemLoading = 'Carregando...';

  const history = useHistory();

  async function loading() {
    setWait(true);
    await createUser({ name });
    setWait(false);
    history.push('/search');
  }

  return (
    <div data-testid="page-login">
      <form action="">
        <label htmlFor="name">
          digite seu nome
          <input
            type=""
            id="name"
            value={ name }
            onChange={ (event) => setName(event.target.value) }
            data-testid="login-name-input"
          />
          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ name.length < valor3 }
            onClick={ loading }
          >
            Entrar
          </button>
        </label>
        {wait ? <p>{mensagemLoading}</p> : null}
      </form>
    </div>
  );
}
