import React from 'react';
import '../css/Pagination.css'

export function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePageChange = (page) => {
    if (page < 1) {
      onPageChange(1);
    } else if (page > totalPages) {
      onPageChange(totalPages);
    } else {
      onPageChange(page);
    }
  };

  const paginationItems = [];

  // Agregar los minibloques entre las flechas
  for (let i = 1; i <= totalPages; i++) {
    paginationItems.push(
      <div
        key={i}
        className={`pagination-bloque ${currentPage === i ? 'active' : ''}`}
        onClick={() => handlePageChange(i)}
      >
      </div>
    );
  }

  return (
    <>
      <div className="arrow" onClick={() => handlePageChange(currentPage - 1)}>
        &lt;
      </div>
      {paginationItems}
      <div className="arrow" onClick={() => handlePageChange(currentPage + 1)}>
        &gt;
      </div>
    </>
  );
}
