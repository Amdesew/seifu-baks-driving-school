// pages/Form.tsx
"use client";

import React, { useState } from 'react';
import axios from 'axios';

const API_URL = "https://amdesew.pythonanywhere.com/api/oil/";

const Form: React.FC = () => {
  const [place, setPlace] = useState('');
  const [changedOil, setChangedOil] = useState('');
  const [plateNumber, setPlateNumber] = useState<number>();
  const [employeeName, setEmployeeName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      place,
      changed_oil: changedOil,
      plate_number: plateNumber,
      employe_name: employeeName,
    };

    try {
      const response = await axios.post(API_URL, data);
      console.log('Data submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <form className='form center' onSubmit={handleSubmit}>
        <br/>
        <h1>Oil Fuilment</h1>
        
        <br/>
        <h3>Place:</h3>
        <input type="text" id="place" value={place} onChange={(e) => setPlace(e.target.value)} className="form-control"/>

        <br/>
        <h3>Changed Oil:</h3>
        <input type="text" id="changedOil" value={changedOil} onChange={(e) => setChangedOil(e.target.value)} className="form-control" />
      
        <br/>
        <h3>Plate Number:</h3>
        <input type="number" id="plateNumber" value={plateNumber} onChange={(e) => setPlateNumber(Number(e.target.value))} className="form-control"/>
      
        <br/>
        <h3>Employee Name:</h3>
        <input type="text" id="employeeName" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} className="form-control" />
        
        <br/>
        <button type="submit" className='btn btn-secondary'>Submit</button>
    </form>
  );
};

export default Form;
