import * as React from 'react';
import './InfoBox.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';






export default function InfoBox({info}) //props pas kiyea from weatherApp.jsx


{
 let dusting="https://media.istockphoto.com/id/1052047454/photo/sandstorm.jpg?s=612x612&w=0&k=20&c=HadEWnaOMrBDXsE8nFNJrtB2guJ5MkwIMsoiLqjO0jc=";
    // let info = {
       
    // }; iskka object kpo move kar diyea weather info state variablke ko




    return(
        <div className='infobox'>
  
      <Card sx={{ width:400}}>
      <CardMedia
        sx={{ height: 200 }}
        image={dusting}
        title="green iguana"/>



    <CardContent>
    <Typography variant="body2" sx={{ color: 'black',fontSize:20 }} component="div">
            <div>
            <p>City={info.city}</p>
            <p>Temperature={info.temp}&deg;C</p>
            <p>max_temp={info.temp_max}&deg;C</p>
            <p>min_temp={info.temp_min}&deg;C</p>
            <p>humidity={info.humidity}</p>
            </div>
</Typography>
</CardContent>
      
    </Card>
    
      </div>
    
    );
}