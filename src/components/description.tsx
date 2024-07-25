import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './description.css'
import { useMediaQuery } from 'react-responsive';

import { useParams } from 'react-router-dom'
import DescriptionMobile from './descriptionMobile';

interface Movie {
    id: number;
    poster_path: any
    backdrop_path: any
    title: string;
    overview: string;
    original_language: string
    backgroundImage: any
    popularity: string
    release_date: string
    vote_average: number
    video: boolean
    vote_count: number
    
  }

  const Description: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const [description, setDescription] = useState<Movie | null>(null)

    useEffect(() => {
        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc?api_key=4807bd84983a5d21524fa45027c13744'
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODA3YmQ4NDk4M2E1ZDIxNTI0ZmE0NTAyN2MxMzc0NCIsIm5iZiI6MTcyMTYwNzMxNi41NzQ5MTgsInN1YiI6IjY2OWM3N2Q1MmQzZGVkZDE1M2RlYjQwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gZSKK5Ti7gPRSCn02VN0pgFFkygOF_IxRB_3cGXuWsw'
        
        const getMovies = async () => {
          try{
            const { data } = await axios.get( url, {
              headers: {
                'Authorization': `Bearer ${token}`
              }
             }) 
             const openedItem = data.results.find((item: Movie) => item.id === parseInt(id || '0'));
        setDescription(openedItem || null);

          } catch( error ) {
            console.log('a the problem of request:')
          }
        }
          
         getMovies()
      }, [id])

    
      const isDesktopOrMobile = useMediaQuery({query: '(max-width: 400px)'})
    return (
        <div>
            {isDesktopOrMobile ? (
                <DescriptionMobile/>
            ): (
                <div  
                className="description-container"
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${description?.backdrop_path})`, backgroundSize: 'cover', height: '100%', width: '100%', margin: '0', padding: '0', position:'fixed', borderLeftColor: 'red', borderLeftWidth: '1000px' }}
                >
                {description ? (
                
                <div>
                    <h1 className='title-description'>{description.title}</h1>
                    <p className='detail'><span>Release Date: {description.release_date}</span> | <span>Vote: {description.vote_count}</span> |  <span>
        vote Average: <strong style={{color: 'wheat'}}>{description.vote_average}</strong>
        </span> <br/> <span>Popularity: { description.popularity}</span> </p>
                    
                    <p className='text-description'> {description.overview}</p>
                </div>
                ) : (
                <p>cet ID is not here</p>
                )}
            </div>
            ) }
             
        </div>
       
    )
}

export default Description
