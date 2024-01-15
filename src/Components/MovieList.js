import MovieCard from "./MovieCard"


const MovieList = ({movies, search, etoile}) =>{
    var x = movies.filter((el,i,t)=> el.title.toUpperCase().includes(search.toUpperCase()) && el.rating >= etoile)
    return(
        <div className="cards">
            {
                x.length == 0 ? <h1>Pas de Film</h1> : x.map((el,i,t)=> <MovieCard el={el}/> )
            }
        </div>
    )
}
export default MovieList  