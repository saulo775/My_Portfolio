import styled from 'styled-components';


export const Container = styled.header`
    display: flex;
    position: fixed;
    top: 0;

    width: 100%;
    max-height: 14vh;


    background-color: var(--black);

    flex-direction: row;
    justify-content: space-between;

    padding: 1rem 3.75rem;
    align-items: center;
`;

export const Logo = styled.img`
    width: 5rem;
    height: 5rem;
`;

export const MenuContent = styled.ul`
    display: flex;
    justify-content: row;

    color: var(--shape);
    list-style-type: none;
`;

export const MenuItem = styled.li`
    padding-left: 3rem;

    font-weight: 500;
    font-size: 1.5rem;
    color: var(--gold);
`;
