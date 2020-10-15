import React, {Component} from 'react';
import SingleTeam from './SingleTeam';
import img11 from '../assets/img/team/1.jpg';
import img12 from '../assets/img/team/2.jpg';
import img13 from '../assets/img/team/3.jpg';

const team = [
    {title:'Saumya', subtitle:'na chahiye kuch ', image: img11},
    {title:'Shubh', subtitle:'tumse zda tumse kam nhi', image: img12},
    {title:'Sanu', subtitle:'tumse mai hu', image: img13},
   
];
class Team extends Component {
    render() {
        return (
            <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">team</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row">
                {team.map((item, index) => 
                   {
                       return <SingleTeam {...item} key={index} />
                   })}
                   
                   
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
        )
    }
}
export default Team;