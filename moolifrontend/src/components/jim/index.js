import jim from './../../data/img/jim.jpg'


function Kason(props){
    console.log( {props} )
    return(
        <div>
            <h2>Jim Kason</h2>
            <img src={jim} />
            <table>
                <thead>
                    <tr>
                        <td>Attribute</td>
                        <td></td>
                        <td>Value</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Gender</td>
                        <td></td>
                        <td>{props.gender}</td>
                    </tr>
                    <tr>
                        <td>Complexion</td>
                        <td></td>
                        <td>{props.complexion}</td>
                    </tr>
                    <tr>
                        <td>Height</td>
                        <td></td>
                        <td>{props.height}</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td></td>
                        <td>{props.weight}</td>
                    </tr>
                </tbody>
            </table>
        </div>        
    )
}

export default Kason;