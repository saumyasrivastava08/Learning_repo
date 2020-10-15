import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PageWrapper extends Component{
    render() {
        return (
            <div>
                
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" style={{backgroundColor:'black'}}>
            <div className="container">
                <Link className="navbar-brand js-scroll-trigger" to="/"><img src="assets/img/navbar-logo.svg" alt="" /></Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    lol
                    <i className="fas fa-bars ml-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/services">Upcoming Contest</Link></li>
                        <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/about">Phone Number List</Link></li>
                        <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/portfolio">Photo Gallery</Link></li>
                        <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/team">Team</Link></li>
                        <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/contact">File Complaint</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        {this.props.children}
            </div>
        )
    }

}
export default PageWrapper;