import React, {useState} from 'react'
import styled from 'styled-components'

import InfoCard from './infoCard'


const CharacterSection = styled.section`
    width: 40%;
    border: 1px solid white;
    padding: 2em;
    margin-bottom: 1rem;
`

export default function Character (props) {

    const {info} = props
    const [display, setDisplay] = useState('none')

    const toggleVisible = () => {
        display === 'none' ? setDisplay('block') : setDisplay('none')
    }

    return (
        <CharacterSection>
            <h1>{info.name}</h1>
            <button onClick={toggleVisible}>View Details</button>
            <InfoCard info={info} visible={display} />
        </CharacterSection>
    )
}
