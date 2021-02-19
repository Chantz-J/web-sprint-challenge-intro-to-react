import React from 'react'
import styled from 'styled-components'

import InfoCard from './infoCard'

const CharacterSection = styled.section`
    width: 40%;
    border: 1px solid white;
    padding: 2em;
`

export default function Character (props) {
    const {info} = props
    return (
        <CharacterSection>
            <h1>{info.name}</h1>
            <InfoCard info={info} />
        </CharacterSection>
    )
}
