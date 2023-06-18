import React, { useState } from 'react';
import axios from 'axios';

const CharacterToysForm = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (event, method) => {
    event.preventDefault();

    try {
      // Obtener el token CSRF desde la API
      const csrfResponse = await axios.get('http://127.0.0.1:5000/get_csrf_token');
      const csrfToken = csrfResponse.data.csrf_token;

      // Configurar los encabezados con el token CSRF
      const headers = {
        'X-CSRF-Token': csrfToken
      };

      // Configurar los datos a enviar
      const data = {
        name: name,
        price: parseFloat(price)
      };

      // Realizar la solicitud según el método especificado
      let response;
      if (method === 'POST') {
        response = await axios.post(`http://127.0.0.1:5000/characters/${id}/toys`, data, { headers });
      } else if (method === 'PUT') {
        response = await axios.put(`http://127.0.0.1:5000/characters/${id}/toys`, data, { headers });
      } else if (method === 'DELETE') {
        response = await axios.delete(`http://127.0.0.1:5000/characters/${id}/toys`, { headers });
      }

      console.log('Operación exitosa:', response.data);
    } catch (error) {
      console.error('Error al realizar la operación:', error.response.data);
    }
  };

  return (
    <div>
      <h2>Agregar/Actualizar/Eliminar Juguete</h2>
      <form onSubmit={event => handleSubmit(event, 'POST')}>
        <label>
          ID del Personaje:
          <input type="text" value={id} onChange={event => setId(event.target.value)} />
        </label>
        <br />
        <label>
          Nombre del Juguete:
          <input type="text" value={name} onChange={event => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Precio del Juguete:
          <input type="text" value={price} onChange={event => setPrice(event.target.value)} />
        </label>
        <br />
        <button type="submit">Agregar</button>
      </form>
      <br />
      <form onSubmit={event => handleSubmit(event, 'PUT')}>
        <label>
          ID del Personaje:
          <input type="text" value={id} onChange={event => setId(event.target.value)} />
        </label>
        <br />
        <label>
          Nombre del Juguete:
          <input type="text" value={name} onChange={event => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Precio del Juguete:
          <input type="text" value={price} onChange={event => setPrice(event.target.value)} />
        </label>
        <br />
        <button type="submit">Actualizar</button>
      </form>
      <br />
      <form onSubmit={event => handleSubmit(event, 'DELETE')}>
        <label>
          ID del Personaje:
          <input type="text" value={id} onChange={event => setId(event.target.value)} />
</label>
<br />
<button type="submit">Eliminar</button>
</form>
</div>
);
};

export default CharacterToysForm;