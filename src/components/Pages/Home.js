import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import Team from '../Common/Team';
import Timeline from '../Common/Timeline';
class Home extends Component{
    render() {
        return (
            <div>
                 <Header 
                   title="Play the Quiz!!"
                   subtitle="APKA SWAGAT HAI"
                   buttonText="CLICK TO KNOW MORE"
                   link="/services"
                   showButton={true}
                   image={image}
                 />
                 <Services />
                 <Portfolio />
                 <Timeline />
                 <Team />
            </div>
        )
    }

}
export default Home