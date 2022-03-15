import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    text-align: center;

    border-radius: 0.5rem;
    background-color: var(--shape);
    margin: 10px;

    padding: 1rem 1rem;

    &:hover{
        border: 2px solid var(--gold);
    }
`;

export const Icon = styled.img`
    height: 2rem;
    margin-bottom: 1rem;
`;

export const Title = styled.h2`
    font-size: 1.5rem;
    color: var(--text-title);
    font-family: 'Poppins', sans-serif;

    padding-bottom: 0.5rem;
`;

export const Description = styled.p`
    font-size: 1rem;
    color: var(--text-body);

    padding-bottom: 1rem;
`;
