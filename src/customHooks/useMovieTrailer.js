import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer=(movieId)=>{
  
  const dispatch=useDispatch();

// fetch trailer video and updating the store by trailer video data
  const getMovieVideos=async ()=>{
    // const data = await fetch("https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US", API_OPTIONS);

    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const json =await data.json()
    // console.log(json.results)

    // const filterAllTrailerData=json.results.filter((video)=>{ return video.type === "Trailer"})
    // const trailer=filterAllTrailerData[0]

    const filterAllTrailerData=json.results.filter((video)=> video.type === "Trailer");
    const trailer=filterAllTrailerData.length ? filterAllTrailerData[0] : json.results[0]
    // console.log(trailer)

    dispatch(addTrailerVideo(trailer));
  }

  useEffect(()=>{
    getMovieVideos();
  },[])

}

export default useMovieTrailer;