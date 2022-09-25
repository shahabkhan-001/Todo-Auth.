import React, {useState } from 'react'
import axios from 'axios';
import './Weather.css'
import { useEffect } from 'react';




const App = () => {
    const [weatherInput , setWeatherInput] = useState("karachi");
    const [weatherData , setWeatherData] = useState("")
    const [city , setCity] = useState(false)
    const ApiKey = "af2a52854de6bb896328a64c50c3d928"
    useEffect(() => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${weatherInput}&appid=${ApiKey}&units=metric`)
        .then((res) => {
            console.log(res)
            setWeatherData(res.data)
            setWeatherInput("")
        })
        .catch((err) => {console.log(err)})
        // eslint-disable-next-line
    },[city]);
    const Controller = (e) => {
        e.preventDefault();
        if(!weatherInput){
            alert("filed it")
            return
        } 
        setCity(!city);
    }
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light mb-5">
    <a className="navbar-brand" href='_'>
    WeatherApi 
    </a>
    <button
     className="navbar-toggler"
     type="button"
     data-toggle="collapse"
     data-target="#navbarSupportedContent"
     aria-controls="navbarSupportedContent"
     aria-expanded="false"
     aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

  <div className="collapse navbar-collapse Input-Field" id="navbarSupportedContent">
    <form onSubmit={Controller} className="form-inline">
      <input 
        type="text"
        value={weatherInput}
        onChange={(e) => 
            {setWeatherInput(e.target.value)
        }}
        className={"Input"}
        placeholder="Search here ..."
      />
    </form>    
  </div>
</nav>

      
        <section className="card mx-auto Card-Box" style={{ maxWidth: 740}}>
         <h1 className='card-title'>{weatherData.name}</h1>
         <div className='Div-Box'>
            <ul>
                <li><i className="fa-solid fa-arrow-up"></i> {" "} {weatherData && weatherData.main && weatherData.main.temp_max}</li>
                <li><i className="fa-solid fa-arrow-down"></i> {" "} {weatherData && weatherData.main && weatherData.main.temp_min}</li>
                <li>Condition : {weatherData && weatherData.weather && weatherData.weather[0] && weatherData.weather[0].main}</li>
                <li>Country : {weatherData && weatherData.sys && weatherData.sys.country}</li>
            </ul>
         </div>
         </section>
        </>
    )
    
}
export default App;