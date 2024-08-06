"use client"; // This directive marks the component as a Client Component

import React, {useState} from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/fuel/";

const Form: React.FC = () => {
    const [station, setStation] = useState('');
    const [price, setPrice] = useState('');
    const [platenumber, setPlateNumber] = useState<number>();
    const [filledgas, setFilledGas] = useState('');
    const [employename, setEmployeName] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = {
            station,
            price,
            plate_number: platenumber,
            filled_gas: filledgas,
            employe_name: employename,

        };

        try{
            const response = await axios.post(API_URL, data);
            console.log('Data Submitted Successfully', response.data);
        } catch(error){
            console.error("Error Submitting data", error);
        }
    };


  return(
    <div className="center">
      <br/>
      <h1>Fuel Fuilment</h1>
      
      <form className="form center" onSubmit={handleSubmit}>
        <br/>
        <h3>Gas Station</h3>
        <input type="text" id="station" name="station" value={station} onChange={(e) => setStation(e.target.value)} className="form-control"/>
        
        <br/>
        <h3>Gas Price(1L)</h3>
        <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control"/>

        <br/>
        <h3>Plate Number</h3>
        <input type="text" id="plate_number" name="plate_number" value={platenumber} onChange={(e) => setPlateNumber(Number(e.target.value))} className="form-control"/>

        <br/>
        <h3>Filled Gas(L)</h3>
        <input type="text" id="filled_gas" name="filled_gas" value={filledgas} onChange={(e) => setFilledGas(e.target.value)} className="form-control"/>


        <br/>
        <h3>Responsible Employe</h3>
        <input type="text" id="employe_name" name="employe_name" value={employename} onChange={(e) => setEmployeName(e.target.value)} className="form-control"/>

        <br/>
        <button type="submit" className="btn btn-secondary">Submit</button>

      </form>
    </div>
  )
};

export default Form;