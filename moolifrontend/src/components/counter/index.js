import { useState, useEffect } from 'react'

function Counter(props) {

    // let casper = "boy"
    // function changeCasper( phrase ){
    //     casper = phrase
    // }

    // changeCasper ( "girl" )

    // const [caspa, setCaspa] = useState("boy")
    // setCaspa("girl")

    // 1) set the variable value: variable == value
    // 2) change the value of the variable

    const [counter, setCounter] = useState( props.start )
    
    const increase = (e) => {
        console.log( counter, {e} )
        setCounter( counter + 1 )
    }

    function decrease(){
        setCounter( counter - 1 )
    }

    useEffect(() => {
        document.title = counter
    })

    return(
        <div>
            <p>{counter}</p>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default Counter;