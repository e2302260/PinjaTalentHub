import React, { useState } from 'react';
import './ConsultantList.css';
import consultants from '../data/consultants.js';

function ConsultantList({ onSelectConsultant }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredConsultants = consultants.filter((consultant) =>
    (consultant.name && consultant.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (consultant.education && consultant.education.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (consultant.experience && consultant.experience.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (consultant.skills && consultant.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))) ||
    (consultant.certifications && consultant.certifications.some(cert => cert.toLowerCase().includes(searchTerm.toLowerCase())))
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
              <div>
                <p><strong>Koulutus:</strong> {consultant.education}</p>
                <p><strong>Valmistumisvuosi:</strong> {consultant.graduationyear}</p>
                <p><strong>Kokemus:</strong> {consultant.experience}</p>
                <p><strong>Taidot:</strong> {consultant.skills.join(', ')}</p>
                <p><strong>Sertifikaatiot:</strong> {consultant.certifications.join(', ')}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ConsultantList;
