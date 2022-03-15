import { Header } from '../../components/Header';
import { Dashboard } from '../../components/Dashboard';
import { Portfolio } from '../../components/Portfolio';
import { MyServices } from '../../components/MyServices';
import { Contacts } from '../../modules/Contacts';
import { Footer } from '../../components/Footer';


import { Container } from './styles'

export function Home(){

    return (
        <Container>
            <Header/>
            <Dashboard/>
            <Portfolio/>
            <MyServices/>
            <Contacts/>
            <Footer/>
        </Container>
    )
}