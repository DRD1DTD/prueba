import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../css/ClothesandToys.css'

function CharacterDetails({ characterId }) {
  const [character, setCharacter] = useState({});
  const [clothing, setClothing] = useState([]);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    if (characterId) {
      axios.get(`http://127.0.0.1:5000/characters/${characterId}`)
        .then(response => {
          setCharacter(response.data);
        })
        .catch(error => {
          console.log(error);
        });

      axios.get(`http://127.0.0.1:5000/characters/${characterId}/clothing`)
        .then(response => {
          setClothing(response.data.clothing);
        })
        .catch(error => {
          console.log(error);
        });

      axios.get(`http://127.0.0.1:5000/characters/${characterId}/toys`)
        .then(response => {
          setToys(response.data.toys);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [characterId]);

  return (
    <div className="clothes-and-toys-container">
      {/* Renderizar detalles del personaje */}
      <h2>{character.name}</h2>
      <p>{character.description}</p>

      {/* Renderizar ropa */}
      <h3>Ropa:</h3>
      {clothing.map(item => (
        <div key={item.id} className='clothes-and-toys-tar'>
          <img src={item.image_url} alt={item.name} />
         <div className='clothes-and-toys-tar-p'>
            <p>{item.name}</p>
            <p> Precio {item.price}</p>
         </div>
        </div>
      ))}

      {/* Renderizar juguetes */}
      <h3>Juguetes:</h3>
      {toys.map(item => (
        <div key={item.id} className='clothes-and-toys-tar'>
          <img src={item.image_url} alt={item.name} />
          <div className='clothes-and-toys-tar-p'>
            <p>{item.name}</p>
            <p> Precio {item.price}</p>
         </div>
        </div>
      ))}
    </div>
  );
}

export { CharacterDetails };
