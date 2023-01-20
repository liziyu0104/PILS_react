import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { propTypes } from 'react-bootstrap/esm/Image';

function Map(props) {
  const greeting = 'Hello Function Component!';
  const imgURLs = [
    'plan_BMC_R0.jpg','plan_BMC_R1.jpg','plan_BMC_R2.jpg'
  ];
  const zonesOLD = [<><circle cx="125" cy="50" r="18" fill="red" opacity="0.3" />
  <circle cx="75" cy="50" r="18" fill="yellow" opacity="0.3" />
  <circle cx="100" cy="20" r="18" fill="red" opacity="0.3" />
  <polygon points="53, 8, 62, 8, 62, 18, 53, 18" fill="green" opacity="0.3" className='026'/>
  <polygon points="53,18,62,18,62,28,53,28" fill="green" opacity="0.3" className='025'/>
  <polygon points="53,28 62,28 62,38 53,38" fill="green" opacity="0.3" className='024'/>
  <polygon points="53,38 62,38 62,48 53,48" fill="green" opacity="0.3" className='023'/>
  <polygon points="53,48 62,48 62,58 53,58" fill="green" opacity="0.3" className='022'/>
  <polygon points="137,8 146,8 146,18 137,18" fill="green" opacity="0.3" className='029'/>
  <polygon points="137,18 146,18 146,28 137,28" fill="green" opacity="0.3" className='028'/>
  <polygon points="137,28 146,28 146,38 137,38" fill="green" opacity="0.3" className='027'/>
  <polygon points="103,35 112,35 112,45 103,45"  fill="green" opacity="0.3" className='021'/>   
  </>,
  <><circle cx="125" cy="30" r="18" fill="yellow" opacity="0.3" />
  <circle cx="85" cy="30" r="18" fill="green" opacity="0.3" />
  <polygon points="146,2 157,2 157,17 146,17" fill="green" opacity="0.3" className='132'/>
  <polygon points="146,17 157,17 157,32 146,32" fill="green" opacity="0.3" className='131'/>
  <polygon points="146,32 157,32 157,47 146,47" fill="green" opacity="0.3" className='130'/>
  <polygon points="146,47 157,47 157,62 146,62" fill="green" opacity="0.3" className='129'/>
  <polygon points="100,37 109,37 109,50 100,50" fill="green" opacity="0.3" className='123'/>
  </>,
  <><circle cx="135" cy="30" r="18" fill="green" opacity="0.3" />
  <circle cx="85" cy="30" r="18" fill="green" opacity="0.3" />
  <polygon points="49,2 59,2 59,16 49,16" fill="green" opacity="0.3" className='222'/>
  <polygon points="49,16 59,16 59,29 49,29" fill="green" opacity="0.3" className='221'/>
  <polygon points="49,29 59,29 59,43 49,43" fill="green" opacity="0.3" className='220'/>
  <polygon points="49,43 59,43 59,56 49,56" fill="green" opacity="0.3" className='219'/>
  <polygon points="63,37 70,37 70,49 63,49" fill="green" opacity="0.3" className='218'/></>,
  ];

  const [zones, setZones] = useState(false);
  const [occupancy, setOccupancy] = useState([]);

  useEffect(() => {
    setZones(true)
    //props.date && console.log(props.date);
    const tomorrow = props.date
    tomorrow.setDate(tomorrow.getDate() + 1)
    props.date && axios.get('https://stalco.tk/api/area/'+props.area+'/latest?to='+tomorrow.toISOString()+'&from='+props.date.toISOString())
    .then(res => {
        setOccupancy(res.data.data);
    });
  }, []);

  useEffect(() => {
    var tomorrow = new Date(props.date)
    tomorrow.setDate(tomorrow.getDate() + 1)
    //console.log(tomorrow)
    props.date && axios.get('https://stalco.tk/api/area/'+props.area+'/latest?to='+tomorrow.toISOString()+'&from='+props.date.toISOString())
    .then(res => {
        setOccupancy(res.data.data);
    });
  }, [props.date]);  

  function color(id){
    let xZone = props.floor[0].zones.filter(zone => zone.id === id)
    if(occupancy){
      let data = occupancy.filter(o => o.id === id)
      data[0] && console.log(data[0].data)
      //console.log(xZone)
      if(data[0] && data[0].data > 0){
        if(data[0].data > 5){
          return "red"
        }else{
          return "yellow"
        }
      }else{
        return "green"
      }
    }
    else{
      return "gray"
    }
    
  }

  return (
    <>
    <svg width="900px" height="500px" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="0" y2="100%">
      <stop offset="0%"  />
    </linearGradient>
  </defs>
  
  <image width="100%" height="100%" href={props.floor[0].image} alt="test" />
  
  {
    props.floor[0].zones.map((zone) => {
      //console.log(zone);
      //return <p>ok</p>
      if(zone.type === "circle"){
        return <circle cx={zone.points[0]} cy={zone.points[1]} r={zone.radius} className={zone.name.toString()} fill={color(zone.id)} opacity="0.3" />
      } 
      else {
        return <polygon points={zone.points.toString()} fill={color(zone.id)} opacity="0.3" className={zone.name.toString()}/>
      }
    })
  }
    
      
</svg></>
  );
}

export default Map;