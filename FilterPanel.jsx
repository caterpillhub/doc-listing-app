import React from 'react';
import { useSearchParams } from 'react-router-dom';

const specialties = ['Neurologist', 'Oncologist', 'Ayurveda', 'Homeopath'];

const FilterPanel = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSpecialties = searchParams.getAll('specialty');
  const selectedMode = searchParams.get('mode') || '';

  const toggleSpecialty = (spec) => {
    const newSpecs = selectedSpecialties.includes(spec)
      ? selectedSpecialties.filter(s => s !== spec)
      : [...selectedSpecialties, spec];

    searchParams.delete('specialty');
    newSpecs.forEach(s => searchParams.append('specialty', s));
    setSearchParams(searchParams);
  };

  const handleModeChange = (mode) => {
    searchParams.set('mode', mode);
    setSearchParams(searchParams);
  };

  return (
    <div className="bg-white p-4 rounded shadow space-y-4">
      <div>
        <h2 className="font-semibold mb-2">Specialities</h2>
        {specialties.map(spec => (
          <div key={spec} className="flex items-center">
            <input
              type="checkbox"
              checked={selectedSpecialties.includes(spec)}
              onChange={() => toggleSpecialty(spec)}
              className="mr-2"
            />
            <label>{spec}</label>
          </div>
        ))}
      </div>
      <div>
        <h2 className="font-semibold mb-2">Mode of Consultation</h2>
        {['Video Consultation', 'In-clinic Consultation', 'All'].map(mode => (
          <div key={mode} className="flex items-center">
            <input
              type="radio"
              name="mode"
              checked={selectedMode === mode}
              onChange={() => handleModeChange(mode)}
              className="mr-2"
            />
            <label>{mode}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterPanel;
