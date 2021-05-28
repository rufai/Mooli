
import './App.css';
import Row from "./components/row/index";
import SearchInput from './components/search'
import Kason from './components/jim'
import Counter from './components/counter'
import { Card, Addition } from './components/card'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link 
} from "react-router-dom";

import {useState} from 'react'

function App() {

  const [keyword, setKeyword] = useState("")


  function searchInput( phrase ){
    console.log( `Inside App.js ${phrase}`)
    setKeyword( phrase )
  }

  return (
    <Router>
      <div>
        <nav>
          <ol>
            <li> 
              <Link to="/">Home Page</Link>
            </li>
            <li> 
              <Link to="/jim">Jim Page</Link>
            </li>
            <li> 
              <Link to="/tola">Tola Page</Link>
            </li>
            <li> 
              <Link to="/Stanley">Stanley's Page</Link>
            </li>
            <li> 
              <Link to="/counter">Counter</Link>
            </li>
            <li> 
              <Link to="/mooli">Mooli</Link>
            </li>
            <li> 
              <Link to="/card">Card</Link>
            </li>
          </ol>
        </nav>
      </div>
      <Switch>
       <Route path="/jim">
         <Kason gender={"male"} complexion={"dark"} height={170} weight={100}/>
       </Route>
        <Route path="/counter">
          <Counter start={10}/>
        </Route>
        <Route path="/card">
          <Card />
        </Route>
        <Route path="/mooli">
          <SearchInput collectdata={searchInput}/>
          <Row title={keyword}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
