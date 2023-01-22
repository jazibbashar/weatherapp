import { useState } from 'react';
import './App.css';
import axios from "axios"

function App() {
  const[temp , setTemp]=useState(100);
  const[humidity , setHumidity]=useState(0);
  const [cityText , setCityText]=useState("")
  async function fetchWeather(){
    console.log("fetch Weather of"+" "+ cityText);
  
  //https://openweathermap.org/data/2.5/weather?q=${cityText}&appid=84f4844eb02e8696dc818c95b3e5611f
    try{
      let response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityText}&appid=84f4844eb02e8696dc818c95b3e5611f`)
      setHumidity(response.data.main.humidity)
     setTemp(response.data.main.temp)
    }catch(error){
      console.log("error");
    }
  }
  return (
    <div className="App">
      <h1>WEATHER APP</h1>
    <div>
    <input className="form-control" 
    value={cityText}
    onChange={(e)=>{
      setCityText(e.target.value)
    }}
    type="text"/>
    <button onClick={fetchWeather} style={{marginTop:"10px"}}className="btn btn-outline-info">Submit</button>
    </div>
    <div className='box'>
    <h3> temp :  {temp} F</h3>
    <h3> humidity :  {humidity} </h3>
    </div>
    </div>
  );
}
export default App;
