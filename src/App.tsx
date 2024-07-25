
import React, { useEffect, useState } from 'react'
import axios from "axios";
import Movies from "./components/movies";
import NavBar from './components/navBar';
 


function App () {
  const [movies, setMovies] = useState([])

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
         setMovies(data.results)
         console.log(data.results)
      } catch( error ) {
        console.log('a the problem of request')
      }
    }
      
     getMovies()
  }, [])

 
  return (
    <div>
      {/* <NavBar/> */}
         <div className="App" style={{ display: 'flex', flexDirection:'row', justifyContent:'flex-start', flexWrap:'wrap', gap: 15, background: '#FAF5E9', height: '100%', width: '100%' }}>
           {movies.map((image, id) => (
            <ul key={id} style={{listStyle: 'none'}}>
             <div style={{}}><Movies movies={image} /></div>  
            </ul>
               
           ) )}
      </div>
    </div>
     
  )
}

export default App
