import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 30vh;

    background-color: var(--black);
    color: var(--shape);

    flex-direction: row;

    padding: 2rem 3.5rem;
`;

export const Contacts = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

`;

export const Title = styled.h2`

    font-family: 'Poppins' sans-serif;
    font-weight: 400;
    font-size: 3rem;

    margin-bottom: 0.5rem;

    span {
        color: var(--red)
    }

`;

export const Phone = styled.a`
    font-size: 1.5rem;
    font-weight: 300;

    margin-bottom: 0.5rem;

    span {
        color: var(--gold);
    }
`;

export const Email = styled.a`
    font-size: 1.5rem;
    font-weight: 300;

    span {
        color: var(--gold);
    }
`;

export const SocialMedias = styled.div`
    flex: 1;
    text-align: end;

`;

export const SocialMediaContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: end;
    margin-right: 5.5rem;
    margin-top: 0.5rem;
`;
