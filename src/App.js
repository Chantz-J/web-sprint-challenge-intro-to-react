import React, {useState, useEffect }from 'react';
import axios from 'axios'
import styled from 'styled-components'
import './App.css';

import GlobalStyle from './styles/global'
import Character from './components/Character'

const StyledHeader = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`
const App = () => {
  
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios
    .get(`https://swapi.dev/api/people/?search=r9`)
    .then(res => {
      setCharacters(res.data)
    })
    .then(console.log(`Fetching`))
    .catch(err => {
      console.log(`FAILED: ${err}`)
    })
  }, [])


  return (
    <div className="App">
      <GlobalStyle />
      <StyledHeader>Characters</StyledHeader>
      {
        characters.map(chara => {
          return (
            <Character key={chara.url} info={chara} />
          )
        })
      }
    </div>
  );
}

export default App;
