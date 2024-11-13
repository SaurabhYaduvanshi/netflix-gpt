
import Header from './Header'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

  useNowPlayingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>

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