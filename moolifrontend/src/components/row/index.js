import { useEffect } from 'react'
import comingSoonMovies from './../../data/comingSoonMovies.json'

import './style.css'


function Row(props){

    const allTitles = comingSoonMovies.map( (item) => 
        <div>
         <p> {item.id} ==> {item.year}  {item.title}</p>
        
            {/* <img src={item.posterurl} alt={item.title} /> */}
        </div>
    )

    const allTitle2018 = comingSoonMovies.filter( (item) => item.year === '2018' )
    const allTitle2018Component = allTitle2018.map( (item) =>
        <div>
            <p> {item.year}  {item.title}</p>
        </div>
    )

    const allTitleByYear = comingSoonMovies.filter( (item) => item.year === props.year )
    const allTitleByYearComponent = allTitleByYear.map( (item) =>
        <div>
            <p> {item.year}  {item.title}</p>
        </div>
    )

    const allMoviesByTitle = comingSoonMovies.filter( (item) => 
        item.title.toLowerCase().split(" ").includes(props.title.toLowerCase()) 
    )
    const allMoviesByTitleComponent = allMoviesByTitle.map( (item) =>
        <div>
            <p> {item.id} ==> {item.year}  {item.title}</p>
        </div>
    )



    return(
        <div id="search_result">
            <h3>The are {allTitles.length} movies in total</h3>
            <h3>We found <span id="search_result_number">{allMoviesByTitle.length}</span> movies that have <span id="search_keyword"> {props.title}</span> in their title</h3>
            {/* { allTitles } */}
            {props.title === "" ? allTitles : allMoviesByTitleComponent}
        </div>
    )
}

export default Row;