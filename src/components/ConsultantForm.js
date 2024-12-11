import React, { useState } from 'react';
import './ConsultantForm.css';

function ConsultantForm({ onCreate }) {
  const [newConsultant, setNewConsultant] = useState({
    name: '',
    education: '',
    graduationyear: '',
    experience: '',
    skills: '',
    certifications: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewConsultant({
      ...newConsultant,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const consultant = {
      ...newConsultant,
      skills: newConsultant.skills.split(','),
      certifications: newConsultant.certifications.split(','),
      id: Date.now(),
    };
    onCreate(consultant);
  };

  return (
    <div>
      <h1>Luo uusi konsultti</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nimi:
          <input type="text" name="name" value={newConsultant.name} onChange={handleChange} />
        </label>
        <label>
          Koulutus:
          <input type="text" name="education" value={newConsultant.education} onChange={handleChange} />
        </label>
        <label>
          Valmistumisvuosi:
          <input type="number" name="graduationyear" value={newConsultant.graduationyear} onChange={handleChange} />
        </label>
        <label>
          Kokemus:
          <input type="text" name="experience" value={newConsultant.experience} onChange={handleChange} />
        </label>
        <label>
          Taidot (pilkuilla eroteltuna):
          <input type="text" name="skills" value={newConsultant.skills} onChange={handleChange} />
        </label>
        <label>
          Sertifikaatit (pilkuilla eroteltuna):
          <input type="text" name="certifications" value={newConsultant.certifications} onChange={handleChange} />
        </label>
        <button type="submit">Tallenna</button>
      </form>
    </div>
  );
}

export default ConsultantForm;
