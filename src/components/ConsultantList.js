import React, { useState } from 'react';
import consultants from '../data/consultants';
import './ConsultantList.css';

const ConsultantList = () => {
    const [searchTerm, setSearchTerm] = useState("");

  const filteredConsultants = consultants.filter(consultant =>
    consultant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="consultant-list">
      <h1>Konsulttilista</h1>
      <input
        type="text"
        placeholder="Hae nimellä..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredConsultants.map(consultant => (
          <li key={consultant.id}>
            <h2>{consultant.name}</h2>
            <p>{consultant.technologies.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConsultantList;
