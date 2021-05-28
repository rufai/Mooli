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

    let temp = 0
    
    
    const counterFromLocalStorage = parseInt( window.localStorage.getItem("counter") )

    if ( !counterFromLocalStorage ) {
        temp =  props.start // begining
    }
    else {
        temp = counterFromLocalStorage // reloading, continuing from where we stop
    }

    const [counter, setCounter] = useState( temp )
    
    const increase = (e) => {
        console.log( counter, {e} )
        setCounter( counter + 1 )
    }

    function decrease(){
        setCounter( counter - 1 )
    }
    
    // mounting
        // componentWillMount() ===> before component enters the V-DOM
        // componentDidMount()  ===> after component enters the V-DOM
        // 
    // updating
        // componentDidUpdate()
    // unmounting
        // componentWillUnmount()  ===> after component has left V-DOM

    useEffect(() => {
        document.title = counter
        window.localStorage.setItem("counter", counter)
    }, [counter, props.start])

    return(
        <div>
            <p>{counter}</p>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default Counter;