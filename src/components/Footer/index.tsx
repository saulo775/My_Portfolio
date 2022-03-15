import { SocialMedia } from "../SocialMedia";

import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import instagram from '../../assets/instagram.svg'

import {
    Container,
    Contacts,
    Title,
    Phone,
    Email,
    SocialMedias,
    SocialMediaContainer,
} from "./styles";

export function Footer() {
    return (
        <Container>
            <Contacts>
                <Title><span>C</span>ontacts</Title>
                <Phone href="tel:+55 (94)99179-1695">
                    Phone: <span>(94) 99179-1695</span>
                </Phone>
                <Email href="mailTo: saulovictor775@hotmail.com">
                    Email: <span>saulovictor775@hotmail.com</span>
                </Email>
            </Contacts>

            <SocialMedias>
                <Title><span>F</span>ollow me On</Title>
                <SocialMediaContainer>
                    <SocialMedia
                        image={linkedin}
                        link="https://www.linkedin.com/in/saulo-victor-5036311a1/"
                    />

                    <SocialMedia
                        image={github}
                        link="https://github.com/saulo775"
                    />

                    <SocialMedia
                        image={instagram}
                        link="https://www.instagram.com/saulo9418/"
                    />

                </SocialMediaContainer>
            </SocialMedias>
        </Container>
    )
}