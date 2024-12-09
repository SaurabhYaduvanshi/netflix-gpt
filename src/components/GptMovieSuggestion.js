import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResult, moviesName } = gpt;
  if (!moviesName) return null;
  return (
    <div className="p-4 m-4 text-white bg-black opacity-90">
      <div>
        {moviesName.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResult[index]}
          />
        ))}
        {/* <MovieList title={moviesName[0]} movies={movieResult[0].filter(movie => movie.poster_path !== null)}/> */}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
