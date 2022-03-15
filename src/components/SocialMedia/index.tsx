import {
    Container,
    Icon
} from "./styles";

interface Props {
    link: string;
    image: string;
}

export function SocialMedia({link, image}: Props) {
    return(
        <Container>
            <a href={link} target="_blank">
                <Icon src={image}/>
            </a>
        </Container>
    )
}