import React, { useState } from 'react';
import ConsultantProfile from './ConsultantProfile';
import ConsultantForm from './ConsultantForm';
import ConsultantData from '../data/ConsultantData'; 

import './ConsultantList.css';

function ConsultantList() { 
  const [consultants, setConsultants] = useState(ConsultantData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedConsultant, setSelectedConsultant] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

  const filteredConsultants = consultants.filter((consultant) =>
    consultant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    consultant.education.toLowerCase().includes(searchTerm.toLowerCase()) ||
    consultant.experience.toLowerCase().includes(searchTerm.toLowerCase()) ||
    consultant.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
    consultant.certifications.some(cert => cert.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleCreate = (newConsultant) => {
    setConsultants([...consultants, newConsultant]);
    setIsCreating(false);
  };

  const handleSave = (updatedConsultant) => {
    setConsultants(consultants.map((consultant) =>
      consultant.id === updatedConsultant.id ? updatedConsultant : consultant
    ));
  };

  const handleSelectConsultant = (consultant) => {
    setSelectedConsultant(consultant);
  };

  const handleBack = () => {
    setSelectedConsultant(null);
    setIsCreating(false);
  };

  return (
    <div>
      {selectedConsultant ? (
        <ConsultantProfile
          consultant={selectedConsultant}
          onBack={handleBack}
          onSave={handleSave}
        />
      ) : isCreating ? (
        <ConsultantForm 
        onCreate={handleCreate}
        onBack={handleBack} 
        />
      ) : (
        <div>
          <h1>PinjaTalentHub</h1>
          <input
            type="text"
            placeholder="Etsi profiilia..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={() => setIsCreating(true)}>Luo uusi profiili</button>
          {filteredConsultants.length === 0 ? (
            <p>Profiilia ei löytynyt</p>
          ) : (
            <ul>
              {filteredConsultants.map((consultant) => (
                <li key={consultant.id}>
                  <button onClick={() => handleSelectConsultant(consultant)}>
                    {consultant.name}
                  </button>
                  <div>
                    <p><strong>Koulutus:</strong> {consultant.education}</p>
                    <p><strong>Valmistumisvuosi:</strong> {consultant.graduationyear}</p>
                    <p><strong>Kokemus:</strong> {consultant.experience}</p>
                    <p><strong>Taidot:</strong> {Array.isArray(consultant.skills) ? consultant.skills.join(', ') : consultant.skills}</p>
                    <p><strong>Sertifikaatiot:</strong> {Array.isArray(consultant.certifications) ? consultant.certifications.join(', ') : consultant.certifications}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default ConsultantList;