
import './App.css';
import { Card, addition } from './components/card'
import MovieList from './components/movie/list'
import Row from "./components/row/index";
import Link from './components/link'
import Counter from './components/counter'
import Kason from './components/jim'
import SearchInput from './components/search'

import {useState} from 'react'

function App() {

  const [keyword, setKeyword] = useState("")


  function searchInput( phrase ){
    console.log( `Inside App.js ${phrase}`)
    setKeyword( phrase )
  }

  return (
    <div>
      <h1> Implementing Jim Kason Component in React</h1>
      {/* <SearchInput collectdata={searchInput}/> */}
      {/* <Row title={keyword}/> */}

      <Kason gender="male" complexion="black" height="tall" weight="slim" />
      <Kason gender="female" complexion="white" height="short"/>
      <Kason height="average" weight="fat"/>
      <Kason complexion="albino"/>
      
      {/* <a href="https://Google.com" alt="gogle">google</a> */}
      {/* <a href="https://microsoft.com">microsoft </a> */}
      {/* <a href="https://apple.com">apple </a> */}

      <Counter start={6}/>    
      <Counter start={11}/>    
      {/* <Link label="Jim Kason" bg="red" /> */}
      {/* <Link label="DivineFavour" bg="blue"/> */}
      {/* <Link label="Ikenna Wilson" bg="pink" /> */}
      
      {/* <a href="https://google.com" id="google_url" className="google" /> */}
      {/* <a href="https://microsoft.com" id="microsoft_url" className="google" /> */}
      {/* <Card /> */}
      
     
    </div>
  );
}

export default App;
