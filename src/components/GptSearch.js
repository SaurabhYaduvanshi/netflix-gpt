import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'
import { LOGIN_BACKGROUND_IMG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      
      <div className="absolute -z-10 opacity-90">
        <img
          src={LOGIN_BACKGROUND_IMG}
          alt="logo"
        />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch