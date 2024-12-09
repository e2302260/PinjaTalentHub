import React from 'react';
import './ConsultantProfile.css';

function ConsultantProfile({ consultant, onBack }) {
  return (
    <div>
      <h1>Profiili:</h1>
      <p><strong>Nimi:</strong> {consultant.name}</p>
      <p><strong>Koulutus:</strong> {consultant.education}</p>
      <p><strong>Kokemus:</strong> {consultant.experience}</p>
      <p><strong>Taidot:</strong> {consultant.skills.join(', ')}</p>
      <button onClick={onBack}>Takaisin listaan</button>
    </div>
  );
}

export default ConsultantProfile;
