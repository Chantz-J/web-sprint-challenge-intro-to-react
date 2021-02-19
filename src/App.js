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
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

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
