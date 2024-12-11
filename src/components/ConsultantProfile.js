import React, { useState } from 'react';
import { jsPDF } from 'jspdf'; 
import './ConsultantProfile.css';

function ConsultantProfile({ consultant, onBack, onSave }) {
  
   const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont('helvetica', 'normal', 12); 

    doc.text(`Konsultin Nimi: ${consultant.name}`, 10, 10);
    doc.text(`Koulutus: ${consultant.education}`, 10, 20);
    doc.text(`Valmistumisvuosi: ${consultant.graduationyear}`, 10, 30);
    doc.text(`Kokemus: ${consultant.experience}`, 10, 40);
    doc.text(`Taidot: ${consultant.skills}`, 10, 50);
    doc.text(`Sertifikaatiot: ${consultant.certifications}`, 10, 60);

    doc.save(`${consultant.name}_CV.pdf`);
  };

  const [editedConsultant, setEditedConsultant] = useState({ ...consultant });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedConsultant({
      ...editedConsultant,
      [name]: value,
    });
  };

  const handleSave = () => {
    onSave(editedConsultant);
  };


  return (
    <div>
      <h1>Profiili:</h1>
      <p><strong>Nimi:</strong> {consultant.name}</p>
      <p><strong>Koulutus:</strong> <input type="text" name="education" value={editedConsultant.education} onChange={handleChange} /></p>
      <p><strong>Valmistumisvuosi:</strong> <input type="number" name="graduationyear" value={editedConsultant.graduationyear} onChange={handleChange} /></p>
      <p><strong>Kokemus:</strong> <input type="text" name="experience" value={editedConsultant.experience} onChange={handleChange} /></p>
      <p><strong>Taidot:</strong> <input type="text" name="skills" value={editedConsultant.skills.join(', ')} onChange={handleChange} /></p>
      <p><strong>Sertifikaatiot:</strong> <input type="text" name="certifications" value={editedConsultant.certifications.join(', ')} onChange={handleChange} /></p>
      
      <button onClick={generatePDF}>Lataa CV PDF:na</button>
      <button onClick={onBack}>Takaisin listaan</button>
      <button onClick={handleSave}>Tallenna</button>
    </div>
  );
}

export default ConsultantProfile;
