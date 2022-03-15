import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 3rem 3.5rem;
    height: 65vh;
    text-align: center;
`;

export const TinyTitle = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 2.5rem;
    font-weight: 400;
    margin-top: 5rem;
`;

export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 6.5rem;
    font-weight: 600;
    margin-top: -20px ;

    span {
        color: var(--red);
    }
`;
