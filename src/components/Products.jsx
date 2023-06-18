import { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Products.css';
import { AddToCartIcon } from './Icons';

export function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Obtener el token CSRF desde la aplicación Flask
    axios.get('http://127.0.0.1:5000/get_csrf_token')
      .then(csrfResponse => {
        const csrfToken = csrfResponse.data.csrf_token;
        
        // Incluir el token CSRF en el encabezado de la solicitud GET
        const headers = {
          'X-CSRF-Token': csrfToken
        };
        
        // Realizar la solicitud GET a la API para obtener los productos
        axios.get('http://localhost:5000/characters', { headers })
          .then(response => {
            // Almacenar los datos de los productos en el estado del componente
            setProducts(response.data);
            // console.log(response.data); Nos permite ver que datos se estan viendo en la solicitud
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch(csrfError => {
        console.error(csrfError);
      });
  }, []);

  return (
    <main className="products">
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image_url} alt={product.name} />
            <div>
              <strong>{product.name}</strong>
            </div>
            <div>
              <AddToCartIcon />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
