import axios from 'axios';
import { useState, useEffect } from 'react';
import { Pagination } from './Pagination';
import { CharacterDetails } from './ClothesandToys.jsx';
import '../css/Products.css';
import { AddToCartIcon } from './Icons';

export function Products({ handleCharacterClick }) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

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
        axios.get(`http://127.0.0.1:5000/characters/paginated?page=${currentPage}`, { headers })
          .then(response => {
            // Almacenar los datos de los productos en el estado del componente
            setProducts(response.data.characters);
            setTotalPages(response.data.total_pages);
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch(csrfError => {
        console.error(csrfError);
      });
  }, [currentPage]);

  const handleClickNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClickPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className='section_products'>
      <h3>Personajes de chaisawman</h3>
      <div className='products-container'>
        <main className="products">
          <ul>
            {products.map(product => (
              <li key={product.id} onClick={() => handleCharacterClick(product.id)}>
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
      </div>
      <div className="pagination-container">
        <div className="pagination">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            onNextPage={handleClickNext}
            onPreviousPage={handleClickPrevious}
          />
        </div>
      </div>
    </section>
  );
}
