import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, GEMINIAPI_KEY } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";


const { GoogleGenerativeAI } = require("@google/generative-ai");

const GptSearchBar = () => {
  const dispatch=useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieOnTMDB=async(movie)=>{
    const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json= await data.json()
    return json.results;
  }

  const handleGptSearchClick = async () => {
     console.log(searchText.current.value);
    // Make a API Call to GPT API and get Movie Result

    const gptQuery =
      "Act as a movie Recommendation system and suggest some movies for query" +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example result : Gadar,shoeley,Don ,Goalmaal koi mil gaya ";

    const genAI = new GoogleGenerativeAI(GEMINIAPI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    // const prompt = "Explain how AI works";
    const result = await model.generateContent(gptQuery);
     console.log(result)
    // console.log(result.response.text())
    const newResult=result.response.text().split(",");
    const gptSearchMovies=newResult.map(movie=> movie.trim())
    console.log(gptSearchMovies);
  
     const promiseArray= gptSearchMovies.map(movie => searchMovieOnTMDB(movie));
    // we will get promise of array =[Promise,Promise,Promise,Promise,Promise]
    
     const tmdbResults= await Promise.all(promiseArray);
     console.log(tmdbResults);
     dispatch(addGptMovieResult({moviesName:gptSearchMovies, movieResult:tmdbResults}));
    

  };

  return (
    <div className="pt-[45%] md:pt-[10%] flex justify-center  ">
      <form
        className="w-full md:w-1/2  bg-gray-900 grid  grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].getSearchPlaceholder}
        />
        <button
          className="py-2 m-4 px-4 bg-red-700 rounded-lg text-white col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
