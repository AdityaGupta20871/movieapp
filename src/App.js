import {useEffect , useState} from 'react'
import './App.css';
import Moviecard from './components/moviecard';
import SearchIcon from './search.svg';
const App = () => {
    const API_url = 'http://www.omdbapi.com/?apikey=e22cd0bf'
    
    const [movies,setmovies] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');
       const movie1 =  {
            "Title": "Spider-Man Title Reveal",
            "Year": "2021",
            "imdbID": "tt14122734",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjRjMmQ2NDQtNmI5NC00N2EwLTkwYWQtOTM2OGZjMmI5YmRjXkEyXkFqcGdeQXVyMTI0NTA1MDI3._V1_SX300.jpg"
        }
 
    const searchmovies = async(title) =>{
        const response = await fetch(`${API_url}&s={title}`)
        const data = await response.json();
        setmovies(data.Search);
    }
    useEffect(() =>{
       searchmovies('spiderman')
    },[]);
   
   
    return ( 
       <div className="app">
        <h1>Movieland</h1>
        <div className="search">
            <input type="text" placeholder='Search for movies '  value = {searchTerm} onChange={(e) =>setSearchTerm(e.target.value)}/>
            <img src={SearchIcon} alt="search" onClick={()=>searchmovies(searchTerm)}/>
            </div>
            {
                movies?.length > 0 ?(
            <div className="container">
            {
            movies.map((movie)=>
            (<Moviecard movie ={movie}/>))
            }
            </div>
                ):(
                    <div className="empty">
                        <h2>no movies found</h2>
                    </div>
                )
            }
        
        </div>
      
     );
}
 
export default App;