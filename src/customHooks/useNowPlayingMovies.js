import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

  const useNowPlayingMovies=()=>{
  // Fetch Data from TMDM API and Update in Redux store
  const nowPlayingMovies=useSelector(store=> store.movies.nowPlayingMovies);
  const dispatch=useDispatch()

  const getNowPlayingMovies= async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json= await data.json();
    // console.log(json.results)
    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(()=>{
     !nowPlayingMovies && getNowPlayingMovies();
  },[])


}

export default useNowPlayingMovies;