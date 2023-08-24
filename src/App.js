import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React,{useEffect,useState} from 'react';
import Images from './components/Images'

function App() {
  const [data,setData] = useState([])
  const getData = async()=>{
    let response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2023-08-10&end_date=2023-08-23')
    console.log(response.data)
    // setData(response.data)
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="App">
      {/* <Images data={data}/> */}
    </div>
  );
}

export default App;
