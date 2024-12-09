import React, { useState } from 'react';
import ConsultantList from './components/ConsultantList';
import ConsultantProfile from './pages/ConsultantProfile';

function App() {

  const [activeView, setActiveView] = useState('list'); 
  const [selectedConsultant, setSelectedConsultant] = useState(null);

  const handleSelectConsultant = (consultant) => {
    setSelectedConsultant(consultant); 
    setActiveView('profile'); 
  };

  const handleBackToList = () => {
    setSelectedConsultant(null); 
    setActiveView('list'); 
  };

  return (
    <div>
      {activeView === 'list' && (
        <ConsultantList onSelectConsultant={handleSelectConsultant} />
      )}
      {activeView === 'profile' && selectedConsultant && (
        <ConsultantProfile consultant={selectedConsultant} onBack={handleBackToList} />
      )}
    </div>
  );
}

export default App;
