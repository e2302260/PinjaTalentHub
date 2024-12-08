import React from 'react';
import consultants from '../data/consultants';
import './ConsultantList.css';

const ConsultantList = () => {
  return (
    <div className="consultant-list">
      <h1>Konsulttilista</h1>
      <ul>
        {consultants.map(consultant => (
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
