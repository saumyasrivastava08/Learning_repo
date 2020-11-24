import React, {Component} from 'react';


class SingleTeam extends Component {
    render() {
        return (
            <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src={this.props.image} alt="" />
                             <h4>{this.props.title}</h4>
                             <p class="text-muted">{this.props.subtitle}</p>
                            
                        </div>
                    </div>

        )
    }
}
export default SingleTeam;
