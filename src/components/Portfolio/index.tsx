import 'animate.css'

import arrowIcon from '../../assets/arrow.svg';

import {
    Container,
    Title,
    Projects,
    CardProject,
    Header,
    TitleProject,
    Year,
    ContentDescription,
    Description,
    ReadMore,
    ContentIcon,
    Icon,
} from './styles';


export function Portfolio() {
    return(
        <Container>
            <Title>Selected Projects</Title>

            <Projects>

                <CardProject>
                    <Header>
                        <TitleProject>Próximos Passos</TitleProject>
                        <Year>2021</Year>
                    </Header>

                    <ContentDescription>
                        <Description>
                            Project carried out for the entrepreneurship
                            event Próximos Passos of UFV-Florestal.
                        </Description>
                    </ContentDescription>

                    <ReadMore >
                        Leia Mais
                    </ReadMore>
                </CardProject>

                <CardProject>
                    <Header>
                        <TitleProject>Próximos Passos</TitleProject>
                        <Year>2021</Year>
                    </Header>

                    <ContentDescription>
                        <Description>
                            Project carried out for the entrepreneurship
                            event Próximos Passos of UFV-Florestal.
                        </Description>
                    </ContentDescription>

                </CardProject>

                <CardProject>
                    <Header>
                        <TitleProject>Próximos Passos</TitleProject>
                        <Year>2021</Year>
                    </Header>

                    <ContentDescription>
                        <Description>
                            Project carried out for the entrepreneurship
                            event Próximos Passos of UFV-Florestal.
                        </Description>
                    </ContentDescription>

                </CardProject>

                <CardProject>
                    <Header>
                        <TitleProject>Próximos Passos</TitleProject>
                        <Year>2021</Year>
                    </Header>

                    <ContentDescription>
                        <Description>
                            Project carried out for the entrepreneurship
                            event Próximos Passos of UFV-Florestal.
                        </Description>
                    </ContentDescription>

                </CardProject>

            </Projects>

            <ContentIcon>
                <Icon src={arrowIcon}/>
            </ContentIcon>
        </Container>
    )
}