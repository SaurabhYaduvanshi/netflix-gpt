import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'
import { LOGIN_BACKGROUND_IMG } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
    <div className="fixed -z-10 ">
        <img
          className='h-screen object-cover md:w-screen'
          src={LOGIN_BACKGROUND_IMG}
          alt="logo"
        />
      </div>
    <div className=''>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
    </>
  )
}

export default GptSearch