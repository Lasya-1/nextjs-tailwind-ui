import React from 'react';

const Pagination = ({ currentPage, totalPages }) => {
  return (
    <nav className="container mx-auto my-8 text-center">
      <ul className="inline-flex space-x-4">
        <li>
          <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600">Prev</button>
        </li>
        {[...Array(totalPages)].map((_, index) => (
          <li key={index}>
            <a href="#" className={`block py-2 px-4 rounded hover:bg-blue-600 ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'text-blue-600'}`}>{index + 1}</a>
          </li>
        ))}
        <li>
          <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600">Next</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
