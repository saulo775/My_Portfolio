import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 3rem 3.5rem;

    background-color: var(--background);
`;

export const Title = styled.div`
    font-size: 3rem;
    padding-bottom: 3rem;
    color: var(--text-title);
`;

export const Projects = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 3rem;
    gap: 3rem;
`;

export const CardProject = styled.div`
    background-image: url("https://source.unsplash.com/random");
    flex: 1;
    height: 31rem;

    padding: 2rem 4rem;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    align-items: center;
`;

export const TitleProject = styled.h2`
    font-size: 2rem;
    font-family: 'Poppins' sans-serif;
    font-weight: 400;
    color: var(--gold);
`;

export const Year = styled.h2`
    font-size: 2rem;
    font-family: 'Poppins' sans-serif;
    font-weight: 400;
    color: var(--shape);

`;

export const ContentDescription = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
`;

export const Description = styled.p`
    font-size: 1rem;
    font-family: 'Poppins' sans-serif;
    font-weight: 400;

    padding-top: 0.5rem;
    color: var(--shape);
`;

export const ReadMore = styled.div`
    color: var(--shape);
    margin-top: 2rem;
`;

export const ContentIcon = styled.div`
    flex: 1;
    display: flex;
`;

export const Icon = styled.img`
    margin: 0 auto;
    width: 2.5rem;
    margin-top: 2rem;

`;
