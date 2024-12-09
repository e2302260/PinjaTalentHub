import React, { useState } from 'react';
import './ConsultantList.css';
import consultants from '../data/consultants.js';

function ConsultantList({ onSelectConsultant }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredConsultants = consultants.filter((consultant) =>
    consultant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Konsultti Lista</h1>
      <input
        type="text"
        placeholder="Etsi profiilia..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredConsultants.length === 0 ? (
        <p>Profiilia ei löytynyt</p>
      ) : (
      <ul>
      {filteredConsultants.map((consultant) => (
          <li key={consultant.id}>
            <button onClick={() => onSelectConsultant(consultant)}>
              {consultant.name}
            </button>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
}

export default ConsultantList;