import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className=' w-screen  aspect-video pt-[20%] px-32   absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/2'>{overview}</p>

      <div className=''>
        <button className='bg-white p-4 px-14 text-black text-xl rounded-lg hover:bg-opacity-80'>▶️Play</button>
        <button className='bg-gray-500 p-4 px-14 mx-2 text-white text-xl rounded-lg bg-opacity-50 hover:bg-opacity-80'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle