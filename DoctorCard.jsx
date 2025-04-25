import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white p-4 rounded shadow flex gap-4 items-center">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-20 h-20 rounded-full object-cover"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{doctor.name}</h3>
        <p className="text-gray-700">{doctor.specialty}</p>
        <p className="text-sm text-gray-600">{doctor.qualifications}</p>
        <p className="text-sm text-gray-600">{doctor.experience} yrs exp.</p>
        <p className="text-sm text-gray-600">{doctor.hospital}</p>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <FaMapMarkerAlt className="mr-1" />
          {doctor.location}
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold text-lg mb-2">₹ {doctor.fees}</p>
        <button className="border px-4 py-1 rounded text-blue-600 border-blue-600 hover:bg-blue-50">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
