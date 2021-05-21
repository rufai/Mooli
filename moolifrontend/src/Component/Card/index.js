
// functional component

// ordinary js function
function addition( a, b ){
    return a + b // number, string, array, object 
}

// react component
// return html tags, element

// html is inside the javascript ==> JSX
function Card(){
    return(
        <div>
            <img src="https://utivawebsite.s3.amazonaws.com/utive_website_v2/landing1.png" />
            <button>Submit</button>
            <h1>Title of Program</h1>
            <p>This is the sub-title</p>
            <div>
                <h2>Another Title</h2>
            </div>
        </div>
    )
}


export default Card;