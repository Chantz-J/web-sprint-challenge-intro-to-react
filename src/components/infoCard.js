import React from 'react'
import styled from 'styled-components'

const InfoSection = styled.div`
    border: 1px solid white;
    padding: 2em;
`

export default function InfoCard (props) {
    const {info} = props
    return (
        <InfoSection>
            <p>Birth Year: {info.birth_year}</p>
            <p>Gender: {info.gender === 'n/a' ? `Not specified` : info.gender}</p>
            <p>Height: {info.height}</p>
            <p>Skin Color: {info.skin_color}</p>
            <p>Mass: {info.mass}</p>
        </InfoSection>
    )
}