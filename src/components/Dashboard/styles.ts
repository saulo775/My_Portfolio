import styled from 'styled-components';


export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;

    height: 80vh;

    padding: 2.5rem 3.75rem;

    background-color: var(--black);
`;

export const Introduction = styled.div`
    border: 3px solid var(--gold);
    padding: 1.5rem 3rem;
`;

export const Title = styled.h1`
    font-size: 6.25rem;
    color: var(--shape);

    span {
        color: var(--red);
    }
`;

export const SubTitle = styled.h2`
    font-size: 2.75rem;
    color: var(--shape);
`;

export const Presentation = styled.p`
    font-size: 1rem;
    color: var(--shape);
    margin-top: 0.5rem;
`;


export const Skills = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 12rem;
    justify-content: center;


    border: 3px solid var(--gold);
    background-color: var(--black);

    margin-left: -3.5rem;
    margin-top: 18rem;

    padding: 2.5rem 0 2.5rem 6rem;
`;


export const Spacer = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--shape);
    margin: 0.5rem 0;

`;

export const CardSkill = styled.h3`
    font-weight: 400;
    font-size: 1.5rem;
    color: var(--shape);

    &:last-child {
        color: var(--red);
    }
`;

export const ContentIcon = styled.div`
    width: 100%;
    height: 6vh;
    background-color: var(--black);
`;


export const Icon = styled.img`
    display: flex;
    bottom: 1rem;
    width: 2.5rem;
    text-align: center;
    margin: 0 auto;


    &:hover{
        bottom: 2rem;
        transition: 0.75s;
    }
`;