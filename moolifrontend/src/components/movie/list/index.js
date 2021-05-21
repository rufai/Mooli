import MovieRow from './../row'

//data
import comingSoonMovies from '../../../data/comingSoonMovies.json'

function MovieList() {
    
    const allposters =  comingSoonMovies.map( ( item ) => (
        <MovieRow info={item} key={item.id}/>
        // <div>
            
        //     <img alt={item.title} src={item.posterurl} />
        // </div>
    ))

    return(
        <div>
            {allposters}
        </div>
    )
}

export default MovieList;