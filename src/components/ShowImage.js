import React, {Component} from 'react';

class ShowImage extends Component{

    render(){
        return(
            <div className="w3-col s4">
                <img src={this.props.tvImageUrl} alt="tvImg" style={{maxWidth: '400px'}}></img>
            </div>
        );
    }
}

export default ShowImage;