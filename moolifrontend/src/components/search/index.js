import './style.css'

function SearchInput(props){

    function userInput(e){
        const searchTerm = e.target.value
        console.log( searchTerm )
        props.collectdata(searchTerm)
    }

    return(
        <div>
            <input onKeyUp={userInput} type="text" id="search_movies" placeholder="Enter the name of the movie" />
        </div>
    )
}

export default SearchInput;