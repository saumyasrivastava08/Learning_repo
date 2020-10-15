import React, {Component} from 'react';


class SingleTeam extends Component {
    render() {
        return (
            <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src={this.props.image} alt="" />
                             <h4>{this.props.title}</h4>
        <p class="text-muted">{this.props.subtitle}</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

        )
    }
}
export default SingleTeam;
