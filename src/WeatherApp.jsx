

import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';



export default function WeatherApp()
{
    const[weatherInfo,setWeatherInfo]=useState({ 
          city:"Greater Noida ",
           temp: 35,
           max_temp: 40,
            min_temp: 30,
            humidity: 50
     })

      let UpdateInfo=(result)=>{
         setWeatherInfo(result);
                                }


      return(
              <>
              <h1>Weather App By Abdul  </h1>
              <h4>Search Weather By City Name </h4>
              <SearchBox UpdateInfo={UpdateInfo}/>
              <InfoBox info={weatherInfo}/>
              </>
  
            );
                            
  }