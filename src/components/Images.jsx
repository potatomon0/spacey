import React from 'react';
import { useState } from 'react';

function Images(props) {
  const [count, setCount] = useState(0)

  const plus = () => {
    if (count < props.data.length-1) {
      setCount(count + 1)
    }
    else {
      return
    }
  }

  const minus = () => {
    if (count <= 0) {
      return
    }
    else {
      setCount(count - 1)
    }
  }
  console.log(count)
  return (
    <div className='wrapper'>
      <div className='title'>
        <h1>{props.data[count]?.title}</h1>
      </div>

      <div className="info">
        <img className='pic' src={props.data[count]?.hdurl} alt='' />

        <div className='description'>
          <p>{props.data[count]?.explanation}</p>
        </div>
      </div>

      <div className='buttonBox'>
        <button onClick={minus}>Previous</button>
        <button onClick={plus}>Next</button>
      </div>
    </div>
  )
}

export default Images