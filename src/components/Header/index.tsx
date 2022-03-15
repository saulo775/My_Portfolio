import logoImg from '../../assets/logo.png';

import {
    Container,
    Logo,
    MenuContent,
    MenuItem,
} from './styles';

export function Header() {
    return (
        <Container>
            <Logo src={logoImg}/>
            <MenuContent>
                <MenuItem>Home</MenuItem>
                <MenuItem>Projects</MenuItem>
                <MenuItem>Services</MenuItem>
                <MenuItem>Contact</MenuItem>
            </MenuContent>
        </Container>
    )
}