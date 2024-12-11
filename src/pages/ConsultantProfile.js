import React from 'react';
import { jsPDF } from 'jspdf'; 
import './ConsultantProfile.css';

function ConsultantProfile({ consultant, onBack }) {
  
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont('helvetica', 'normal', 12); 

    doc.text(`Konsultin Nimi: ${consultant.name}`, 10, 10);
    doc.text(`Koulutus: ${consultant.education}`, 10, 20);
    doc.text(`Valmistumisvuosi: ${consultant.graduationyear}`, 10, 30);
    doc.text(`Kokemus: ${consultant.experience}`, 10, 40);
    doc.text(`Taidot: ${consultant.skills.join(', ')}`, 10, 50);
    doc.text(`Sertifikaatiot: ${consultant.certifications.join(', ')}`, 10, 60);

    doc.save(`${consultant.name}_CV.pdf`);
  };

  return (
    <div>
      <h1>Profiili:</h1>
      <p><strong>Nimi:</strong> {consultant.name}</p>
      <p><strong>Koulutus:</strong> {consultant.education}</p>
      <p><strong>Valmistumisvuosi:</strong> {consultant.graduationyear}</p>
      <p><strong>Kokemus:</strong> {consultant.experience}</p>
      <p><strong>Taidot:</strong> {consultant.skills.join(', ')}</p>
      <p><strong>Sertifikaatiot:</strong> {consultant.certifications.join(', ')}</p>
      
      <button onClick={generatePDF}>Lataa CV PDF:na</button>
      <button onClick={onBack}>Takaisin listaan</button>
    </div>
  );
}

export default ConsultantProfile;
