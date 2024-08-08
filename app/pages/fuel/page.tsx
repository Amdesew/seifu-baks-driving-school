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
      
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous"/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossOrigin="anonymous"></script>

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