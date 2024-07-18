import React, { useState } from 'react';
import dataGlasses from './../assets/dataGlasses.json';
import GlassesList from './GlassesList';
import Model from './Model';


const App = () => {
  const [selectedGlasses, setSelectedGlasses] = useState(null);

  const handleGlassesSelect = (glasses) => {
    setSelectedGlasses(glasses);
  };

  return (
    <div className="container mx-auto p-4 bg-costom">
    <h1 className="text-3xl font-bold mb-4 text-center txtdeepshadow">TRY GLASSES APP</h1>
      <div className="flex max-h-screen relative z-10">
        <GlassesList glasses={dataGlasses} onSelect={handleGlassesSelect} />
        <Model selectedGlasses={selectedGlasses} />
      </div>
    </div>
  );
};

export default App;
