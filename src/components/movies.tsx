import { FC } from 'react';
import { Name } from '../App.types';
import { Link } from 'react-router-dom';
import './movies.css'
import { useMediaQuery } from 'react-responsive';

interface UserProps {
  movies: Name;
}

const Movies: FC<UserProps> = ({ movies }) => {
  const isDesktopOrMobile = useMediaQuery({query: '(max-width: 400px)'})
  return (
    <div> 
      {isDesktopOrMobile ? (
        <div>
            <li>
              <Link to = {`/DescriptionMobile/${movies.id}`}> <img className='imageM' src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt="" /> </Link> 
            </li>
        </div>
      ): (
        <div>
             <li>
              <Link to = {`/Description/${movies.id}`}> <img className='imageM' src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt="" /> </Link> 
            </li>
        </div>
      )}
      
    </div>
      
  
  );
};

export default Movies;
