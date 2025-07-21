
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';




export default function SearchBox({UpdateInfo}){

    let[city ,setCity]=useState("")
    

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="93f2f12a02532cf1198a93e87b4aac46";

    
       let GetWeather=async()=>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
         let Jsonresponse = await response.json();

         let result={
                     city:city,
                     temp: Jsonresponse.main.temp,
                     temp_max:Jsonresponse.main.temp_max,
                     temp_min:Jsonresponse.main.temp_min ,
                     humidity: Jsonresponse.main.humidity

                      }
                      console.log(result);
                      return result;
                  
                      
     }

    let handlechange=(e)=>
            {
            setCity(e.target.value);  
            }

        let handlesubmit=async(e)=>
            {
            e.preventDefault();

            console.log(city);
            setCity("");

            let NewInfo=await GetWeather();
            UpdateInfo(NewInfo);
            }
     
    return(
        <>
        <h3>Search box</h3>
        <form onSubmit={handlesubmit}>
         <TextField 
         value={city}
         onChange={handlechange}
         id="city" 
         label="city name" 
         variant="outlined" required/>
         <br></br><hr></hr>
            <Button 
               variant="contained"
               type="submit"
               
               >Search</Button>

               
        </form>
        </>
    ) 




}