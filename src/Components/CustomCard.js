import React from 'react'
import Container from './Container'

export default function CustomCard({ title, description, component: Component, state, setState  }) {
    return (
        <Container>
            <h3>{title}</h3>
            <p>{description}</p>
            <Component state={state} setState={setState} />
        </Container>
    )
}
