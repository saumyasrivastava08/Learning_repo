import React, {Component} from 'react';
import PortfolioItem from './PortfolioItem';
import img1 from '../assets/img/portfolio/01-thumbnail.jpg';
import img2 from '../assets/img/portfolio/02-thumbnail.jpg';
import img3 from '../assets/img/portfolio/03-thumbnail.jpg';
import img4 from '../assets/img/portfolio/04-thumbnail.jpg';
import img5 from '../assets/img/portfolio/05-thumbnail.jpg';
import img6 from '../assets/img/portfolio/06-thumbnail.jpg';

const portfolio = [
    {title:'Threads', subtitle:'na chahiye kuch ', image: img1},
    {title:'Explore', subtitle:'tumse zda tumse kam nhi', image: img2},
    {title:'Chutiya', subtitle:'tumse mai hu', image: img3},
    {title:'halkat', subtitle:'mujhme tu h', image: img4},
    {title:'bewkoof', subtitle:'tujhse y zindagi ka safar h', image: img5},
    {title:'lol', subtitle:'tujhpe hi mere sare raste khtm', image: img6}

];
class Portfolio extends Component {
    render() {
        return(
            <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                   {portfolio.map((item, index) => 
                   {
                       return <PortfolioItem {...item} key={index} />
                   })}
                
                  
                    
                   
                </div>
            </div>
        </section>
        )
    }

}
export default Portfolio;