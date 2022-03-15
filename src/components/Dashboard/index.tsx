import arrowIcon from '../../assets/arrow.svg'

import {
    Container,
    Introduction,
    Title,
    SubTitle,
    Presentation,
    Skills,
    CardSkill,
    Spacer,
    ContentIcon,
    Icon,
} from './styles';

export function Dashboard() {
    return(
        <>
            <Container>
                <Introduction>
                    <Title>Hell<span>o</span>,</Title>
                    <SubTitle>I am Saulo Victor</SubTitle>
                    <Presentation>
                        2 years experience, and counting, as a developer
                        and project manager, majoring in physics and self-taught
                        student in mobile and front end programming.
                    </Presentation>
                </Introduction>

                <Skills>
                    <CardSkill>Front end developer</CardSkill>
                    <Spacer/>
                    <CardSkill>Mobile Developer</CardSkill>
                </Skills>


            </Container>
            <ContentIcon>
                <Icon src={arrowIcon}/>
            </ContentIcon>
        </>
    )
}