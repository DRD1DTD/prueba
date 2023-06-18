import React, { useState } from 'react';
import { Products } from './Products';
import { Pagination } from './Pagination';
import { CharacterDetails } from './ClothesandToys';
//import { useHistory } from 'react-router-dom';


import '../css/Index.css'
import '../css/ClothesandToys.css'

export function Index() {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); 
  //const history = useHistory();


  const handleCharacterClick = (characterId) => {
    setSelectedCharacterId(characterId);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <header>
        <div>
            <section className='heder_section'>
                <p htmlFor="">Bienvenido a Tienda Chaisawman</p>
                <div className='elements_header'>
                    <button>
                        Ir a Compras
                    </button>
                    <button>
                        Ir a Carrito de Compras
                    </button>
                    <button>
                        Ir Juguetes
                    </button>
                    <button /*onClick={() => history.push('./components/Admin')}*/>
                      Ir a Admin
                    </button>
                </div>
            </section>
            <section className='section_intro'>
                <p>
                    <p className='section-intro-p'>Chaisawman</p>
                    <p className='section-intro-p_2'>Lorem ipsum dolor 
                        sit amet consectetur adipisicing 
                        elit. Odit, debitis ea dolore unde 
                        vitae suscipit aliquid. Temporibus delectus 
                        enim corrupti magni obcaecati, ducimus incidunt 
                        maxime? Veniam illo dignissimos vel dolore.
                    </p>

                    <button className='section_intro_button'>
                        Ir a Descuentos
                    </button>
                </p>
            </section>
        </div>
      </header>
      <body>
        <Products
          handleCharacterClick={handleCharacterClick}
          currentPage={currentPage} 
          setCurrentPage={handlePageChange} 
        />
       <div className='details_character'>
       {selectedCharacterId && <CharacterDetails characterId={selectedCharacterId} />}
        <div className="pagination-container">
          <div className="pagination">
            <Pagination
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
       </div>

       <section className='body-middle'>
            <div className='body-middle-div'>
                <div className='body-middle_1'>
                <p>
                    <p className='body-pmiddle-p'>Chaisawman</p>
                    <p className='body-pmiddle-p_2'>Lorem ipsum dolor 
                        sit amet consectetur adipisicing 
                        elit. Odit, debitis ea dolore unde 
                        vitae suscipit aliquid. Temporibus delectus 
                        enim corrupti magni obcaecati, ducimus incidunt 
                        maxime? Veniam illo dignissimos vel dolore.
                    </p>

                    <button className='body-middle-button'>
                        Ir a Descuentos
                    </button>
                </p>
                </div>
                <div className='body-middle_2'>
                    .
                </div>
            </div>
       </section>

     <div className='tarjetas'>
        <div className='tarjetas-wh tarjetas-wh_1'> 
            <h5>Paquete Motosierra</h5>
                <ul>
                    <li>Incluye juguete de coleccion</li>
                    <li>Incluye juguete de coleccion</li>
                    <li>Incluye juguete de coleccion</li>
                    <li>Incluye juguete de coleccion</li>
                </ul>
            </div>
            <div className='tarjetas-wh_m'>
            <   h5>Paquete Makima</h5>
            <ul>
                    <li>Incluye juguete de coleccion</li>
                    <li>Incluye juguete de coleccion</li>
                    <li>Incluye juguete de coleccion</li>
                    <li>Incluye juguete de coleccion</li>
                </ul>
            </div>
            <div className='tarjetas-wh tarjetas-wh_2'>
                <h5>Paquete Himeno</h5>
                <ul>
                    <li>Incluye juguete de coleccion</li>
                    <li>Incluye juguete de coleccion</li>
                    <li>Incluye juguete de coleccion</li>
                    <li>Incluye juguete de coleccion</li>
                </ul>
            </div>
     </div>

            
      </body>
      <footer>
        <div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;
