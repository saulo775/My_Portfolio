import React from "react"

import {
    Container,
    Icon,
    Title,
    Description,
} from './styles'

interface Props {
    title: string;
    description: string;
    image: string;
}

export function ServiceCard({
    title,
    description,
    image,
}: Props) {
    return (
        <Container>
            <Icon src={image}/>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Container>
    )
}