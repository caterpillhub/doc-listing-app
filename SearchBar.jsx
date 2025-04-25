import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') || '';

  const handleChange = (e) => {
    const value = e.target.value;
    searchParams.set('search', value);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center bg-white px-4 py-2 rounded shadow w-full max-w-4xl mx-auto">
      <FiSearch className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Search Symptoms, Doctors, Specialists, Clinics"
        value={search}
        onChange={handleChange}
        className="w-full outline-none"
      />
    </div>
  );
};

export default SearchBar;
