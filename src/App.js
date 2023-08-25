import './App.css';
import axios from 'axios'
import React,{useEffect,useState} from 'react';
import Images from './components/Images'

function App() {
  const [data, setData] = useState([0])
  const getData = () =>
  {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=K9vc50ZRLMSuAdILI5KKxBj2TDzBfKd3HA11WprL&start_date=2023-08-10&end_date=2023-08-23')
    .then(res =>
      {
        console.log(res.data)
        setData(res.data)
      })
      .catch(err =>
        {
          console.log(err)
        })
        
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="App">
      <Images data={data}/>
    </div>
  );
}

export default App;
