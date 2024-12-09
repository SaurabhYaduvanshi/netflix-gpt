import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className=' w-screen  aspect-video pt-[15%] px-6 md:px-32   absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/2'>{overview}</p>

      <div className='my-2 md:my-0'>
        <button className=' bg-white py-1 md:py-4 px-3 md:px-14 text-black text-xl rounded-lg hover:bg-opacity-80'>▶️Play</button>
        <button className='hidden md:inline-block bg-gray-500 p-4 px-14 mx-2 text-white text-xl rounded-lg bg-opacity-50 hover:bg-opacity-80'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle