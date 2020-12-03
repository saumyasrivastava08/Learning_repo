import React, {Component} from 'react';
import SingleTeam from './SingleTeam';
import img11 from '../assets/img/team/1.jpg';
import img12 from '../assets/img/team/2.png';
import img13 from '../assets/img/team/3.jpg';
import {Link} from 'react-router-dom';
import { ExternalLink } from 'react-external-link';

const team = [
      {title:'Facebook', subtitle:'tumse mai hu', image: img13},
      {title:'Instagram', subtitle:'na chahiye kuch ', image: img11},
    {title:'Twitter', subtitle:'tumse zda tumse kam nhi', image: img12},
   
];
class Team extends Component {
    render() {
        return (
            <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading ">Contact Us</h2>
                    <h3 class="section-subheading text-muted"> Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row">
                {team.map((item, index) => 
                   {
                       return <SingleTeam {...item} key={index} />
                   })}
                   
                   
                </div>
                <div class="row">
                    <div class="col-lg-3 mx-auto text-center"> <Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }}  >@__no_rape.__ </Link></div>
                    <div class="col-lg-3 mx-auto text-center"><p class="large text-muted">Email us :- </p></div>
                    <div class="col-lg-3 mx-auto text-center"><p class="large text-muted">Email us :- </p></div>
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center"><p style={{fontFamily:'sans-serif', fontSize:'30px', fontWeight:'bolder'}}>Contact Number :- .</p></div>
                    <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Email us :- </p></div>
                </div>
            </div>
        </section>
        )
    }
}
export default Team;