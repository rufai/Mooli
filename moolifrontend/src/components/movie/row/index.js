import './style.css'

const search = require("youtube-search")

function MovieRow( props ){
    
    // var opts = {
    //     maxResults: 5,
    //     order: 'viewCount',
    //     videoDuration: 'short',
    //     key: 'AIzaSyA_aSQ3Fj_6-j1Zv6lT2gfqaun1lWOUyfo'
    // };

    // search( props.info.title, opts, function(err, results) {
    //     if(err) return console.log(err);
        
    //     console.dir(results);
    // });
    const youtubeTag = `https://www.youtube.com/hashtag/${props.info.title.split(" ").join("")}`

    return(
        <div>
            <span className="movie_id">{props.info.id}</span>
            <span className="movie_title">{props.info.title}</span>
            <span className="movie_title">{props.info.year}</span>
            <div>
                <span className="movie_title">{props.info.storyline}</span>
            </div>
            <div>
                <img alt={props.info.title} src={props.info.posterurl} />
            </div>
            <a href={youtubeTag} alt={props.info.title} ><button> Watch Trailer</button> </a>
        </div>
    )
}

export default MovieRow;