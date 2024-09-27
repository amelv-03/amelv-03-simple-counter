import React from 'react'


const Counter = (props) => {
  return (
    <div className='w-100'>
        <h1 className='text-center'>
            {props.count} Seconds
        </h1>
    </div>
  )
}


export default Counter;