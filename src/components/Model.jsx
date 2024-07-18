import React from 'react';

const Model = ({ selectedGlasses }) => {
  return (
    <div className="w-2/3 flex justify-center items-center ">
      <div className="relative ">
        <img
          src="./../../public/glassesImage/model.jpg"
          alt="Model"
          className="w-full max-w-sm"
        />
        {selectedGlasses && (
          <>
            <img
              src={selectedGlasses.url}
              alt={selectedGlasses.name}
              className="absolute glasses"
            />
            <div className="absolute glasses-info bg-white p-2 rounded shadow-lg">
              <h3 className="text-lg font-bold text-blue-700">{selectedGlasses.name}</h3>
              <p>{selectedGlasses.desc}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Model;
