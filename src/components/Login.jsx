import React, { useState, useHistory } from 'react';


export function LoginForm() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Realizar la solicitud al backend para verificar las credenciales
    const response = await fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      // Inicio de sesión exitoso, redirigir al usuario a la página Index.jsx
      history.push('/Index.jsx');
    } else {
      // Credenciales inválidas, mostrar mensaje de error
      setError('Credenciales inválidas');
    }
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuario:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <button type="submit">Iniciar sesión</button>
        </div>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
}


export default LoginForm;
