import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 3rem 3.5rem;
    height: 86vh;
`;

export const Title = styled.div`
    font-size: 3rem;
    padding-bottom: 3rem;
    color: var(--text-title);
`;

export const Services = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
`;

export const ContentIcon = styled.div`
    flex: 1;
    display: flex;
`;

export const Icon = styled.img`
    margin: 0 auto;
    width: 2.5rem;
    margin-top: 2rem;
    margin-bottom: 5px;
`;
