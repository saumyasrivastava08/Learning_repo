import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/stop.jpg';

import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import Team from '../Common/Team';
import Timeline from '../Common/Timeline';
class Home extends Component{
    render() {
        return (
            <div>
                 <Header 
                   title="Immortality of her's is curse since his,
                   Humanity had turned into brutality"
                 buttonText="File Complaint"
                   link="/contact"
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
export default Home;