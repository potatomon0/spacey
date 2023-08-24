import React from 'react';
import { useState } from 'react';

function Images(props) {
const [count, setCount] = useState(0)

  const plus = () =>
  {
    if(count >= 14)
    {
      return
    }
    else
    {
      setCount(count + 1)
    }
  }

  const minus = () =>
  {
    if(count <= 0)
    {
      return
    }
    else
    {
      setCount(count - 1)
    }
  }
console.log(count)
  return (
    <div className='wrapper'>
      <div className='imgBox'><img className='pic'src={props.data[count]?.hdurl} alt=''/></div>
      <div className='title'><h1>{props.data[count]?.title}</h1></div>
      <div className='description'><p>{props.data[count]?.explanation}</p></div>
      <div className='buttonBox'>
        <button onClick={minus}>Previous</button>
        <button onClick={plus}>Next</button>
      </div>
    </div>
  )
}

export default Images