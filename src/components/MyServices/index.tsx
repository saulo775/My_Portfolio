
import arrowIcon from '../../assets/arrow.svg';
import { ServiceCard } from '../../ultils/service/ServiceCard';

import mobileIcon from '../../assets/mobile_icon.svg'
import webIcon from '../../assets/web_icon.svg'
import shopIcon from '../../assets/shop_icon.svg'
import landIcon from '../../assets/landing_icon.svg'

import {
    Container,
    Title,
    Services,
    ContentIcon,
    Icon,
} from './styles';




export function MyServices() {

    return(
        <Container>
            <Title>My Services</Title>

            <Services>
                <ServiceCard
                    title="Mobile"
                    description="Native cross-platform apps for Android and iOS mobile devices."
                    image={mobileIcon}
                />

                <ServiceCard
                    title="Web"
                    description="
                        Extremely fast and adaptable websites and web
                        applications for various screen sizes.
                    "
                    image={webIcon}
                />


                <ServiceCard
                    title="E-Commerce"
                    description="
                        Need to sell on the internet? I can build your
                        store in very little time using cms wordpress and WooCommerce.
                    "
                    image={shopIcon}
                />

                <br/>

                <ServiceCard
                    title="Website Update"
                    description="I optimize performance and adapt your site to new internet standards."
                    image={landIcon}
                />

            </Services>

            <ContentIcon>
                <Icon src={arrowIcon}/>
            </ContentIcon>
        </Container>
    )
}