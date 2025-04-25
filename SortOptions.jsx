import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SortOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSort = searchParams.get('sort') || '';

  const handleChange = (value) => {
    searchParams.set('sort', value);
    setSearchParams(searchParams);
  };

  return (
    <div className="bg-white p-4 mb-4 rounded shadow">
      <h2 className="font-semibold mb-2">Sort by</h2>
      <div className="flex flex-col space-y-2">
        <label>
          <input
            type="radio"
            name="sort"
            value="price"
            checked={selectedSort === 'price'}
            onChange={() => handleChange('price')}
            className="mr-2"
          />
          Price: Low–High
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="experience"
            checked={selectedSort === 'experience'}
            onChange={() => handleChange('experience')}
            className="mr-2"
          />
          Experience – Most Experience first
        </label>
      </div>
    </div>
  );
};

export default SortOptions;
