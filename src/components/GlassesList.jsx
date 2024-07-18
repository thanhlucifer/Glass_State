import React from 'react';

const GlassesList = ({ glasses, onSelect }) => {
  return (
    <div className="w-1/3">
      <div className="grid grid-cols-2 gap-4">
        {glasses.map((glass) => (
          <div
            key={glass.id}
            className="cursor-pointer p-2 button-32"
            onClick={() => onSelect(glass)}
          >
            <img src={glass.url} alt={glass.name} className="w-full" />
            <p className="text-center">{glass.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlassesList;
