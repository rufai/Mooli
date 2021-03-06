
// functional component

// ordinary js function
function Addition( a, b ){
    return a + b // number, string, array, object 
}

console.log( Addition(4, 5) )

// react component
// return html tags, element

// html is inside the javascript ==> JSX
function Card(){
    
    return(
        <div>
           <a href="https://google.com">
                <img alt="lady" src="https://utivawebsite.s3.amazonaws.com/utive_website_v2/landing1.png" />
            </a> 
            <button>Submit</button>
            <h1>Title of Program</h1>
            <p>This is the sub-title</p>
            <div>
                <h2>Another Title</h2>
            </div>
        </div>
    )
}



export { Card, Addition };