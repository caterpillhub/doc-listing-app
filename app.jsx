import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './App.css';
import DoctorCard from './components/DoctorCard';
import Filters from './components/Filters';
import SearchBar from './components/SearchBar';

const API_URL = 'https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json';

function App() {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setDoctors(data || []));
  }, []);

  useEffect(() => {
    const search = searchParams.get('search')?.toLowerCase() || '';
    const mode = searchParams.get('mode') || 'all';
    const specialties = searchParams.getAll('specialties');
    const sort = searchParams.get('sort');

    let result = [...doctors];

    // Search
    if (search) {
      result = result.filter((d) => d.name.toLowerCase().includes(search));
    }

    // Mode filter
    if (mode !== 'all') {
      result = result.filter((d) => d.mode === mode);
    }

    // Specialties filter
    if (specialties.length) {
      result = result.filter((d) => specialties.includes(d.speciality));
    }

    // Sort
    if (sort === 'price') {
      result.sort((a, b) => a.fees - b.fees);
    } else if (sort === 'experience') {
      result.sort((a, b) => b.experience - a.experience);
    }

    setFilteredDoctors(result);
  }, [searchParams, doctors]);

  return (
    <div className="flex h-screen">
      <aside className="w-1/4 p-4 border-r overflow-auto">
        <Filters searchParams={searchParams} setSearchParams={setSearchParams} doctors={doctors} />
      </aside>
      <main className="flex-1 p-4 overflow-auto">
        <SearchBar searchParams={searchParams} setSearchParams={setSearchParams} />
        <div className="space-y-4 mt-4">
          {filteredDoctors.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;