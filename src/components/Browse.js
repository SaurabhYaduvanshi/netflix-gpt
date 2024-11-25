
import Header from './Header'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
// import usePopularMovies from '../customHooks/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGptSearch=useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  // usePopularMovies();


  return (
    <div>
      <Header/>
      {showGptSearch ?  (<GptSearch/> ): (<>
        <MainContainer/>
        <SecondaryContainer/>
      </>)}
      {/* <GptSearch/>
      <MainContainer/>
      <SecondaryContainer/> */}

      {/* 
      Main Container
        - VideoBackground
        - Video Title
       
       Secondary Container 
         -MovieList *n
         - cards *n
       */}
    </div>
  )
}

export default Browse