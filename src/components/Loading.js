import React from 'react'
import "./Loading.css"

const loading = () => {
  return (
    <div className='w-screen h-screen bg-black text-white flex items-center justify-center'>
        <div className='loader'></div>
    </div>
  )
}

export default loading