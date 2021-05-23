import './style.css'

// properties === parameters
function Link(props){
    console.log( {props} )
    return (
        <div id="link_label" className="label">
            <p> {props.label} </p>
        </div>
    )
}

export default Link;