import React from "react";
import { useState } from "react";
import "./App.css"

const App = () => {
  const [temperature,setTemperature] = useState(10)
  const [temperature_color,setTemperature_Color] = useState("cold")

  const incerment = () =>{
    if (temperature === 30) return;

    const new_temp = temperature+1;
    setTemperature(new_temp)

    if(new_temp >= 15){
      setTemperature_Color("hot")
    }
  }
  const decerment = () =>{
    if (temperature === 0) return;

    const new_temp = temperature-1;
    setTemperature(new_temp)

    if(new_temp < 15){
      setTemperature_Color("cold")
    }
  }
  return(
    <div className="wrapper_container">
        <div className="wrapper_temperature">
          <div className={`temperature-display ${temperature_color}`}>{temperature}°C</div>
        </div>
        <div className="btn_wrapper">
          <button onClick={()=>incerment()} className="btn_inc">+</button>
          <button onClick={()=>decerment()} className="btn_dec">-</button>
        </div>
    </div>
  )
}

export default App;