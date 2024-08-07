"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';


export default function Home() {
  async function getDjangoAPIData() {
    const response = await fetch("http://127.0.0.1:8000/api/oil/");
    const data = await response.json();
    console.log(data);
  }

  async function handleClick(){
    await getDjangoAPIData()
  }
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://lp-auto-assets.s3.amazonaws.com/first-buyer/M1/secc1.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://fairlawndrivingschool.org/wp-content/uploads/2022/04/Fair-lawn-driving-school-16-year-old-programs.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://road-safety.transport.ec.europa.eu/sites/default/files/styles/embed_medium/public/2021-07/driving_school_car.jpg?itok=n6WCl_nB" className="d-block w-100" alt="..."/>
          </div>
        </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
      </div>

        <br/>
      <div className='center'>
        <h1>Seifu Baks Driving School </h1>
      </div>

      <br/>
      <div className="center box row align-items-start bg-body-dark">
        
        <div className="card card-style border-light center col">
          <img src="https://cdn-icons-png.freepik.com/512/2554/2554991.png" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Fuel Form</h5>
            <p className="card-text">Everytime a fuel is filled in to the cars, employes need to inform the organization.</p>
            <a href="/webpages" className="btn btn-primary">Fuel Form</a>
          </div>       
        </div>
      
        
        <div className="card card-style border-light center col">
          <img src="https://i.pinimg.com/564x/fe/85/9c/fe859ca386c0636462c5f0ee8e826d9f.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Oil Changing Form</h5>
            <p className="card-text">Everytime an oil is changed, employes need to inform the organization.</p>
            <a href="/webpages/oilform" className="btn btn-primary">Oil Form</a>
          </div>
        </div>
        
        <div className="card card-style border-light center col">
          <img src="https://cdn-icons-png.flaticon.com/512/3893/3893176.png" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Student Files</h5>
            <p className="card-text">These Files Are Confidential And Required Admin To Acess.</p>
            <a href="/#" className="btn btn-primary">Student Files</a>
          </div>
        </div>


        <footer className="bg-body-tertiary text-center text-lg-start">
          <div className="text-center p-3 footers">
            <h4 className="text-body">©️Seifu Baks Driving School (2024)</h4>
          </div>
        </footer>


      </div>
    </div>
  );
}
