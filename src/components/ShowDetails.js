import React, {Component} from 'react';

class ShowDetails extends Component{

displayTvData = () => {
    let striptags = require('striptags');
    // until data exists
    // some of the tv shows don't have a network, or webchannel - so will break app - use ? statement to see
    // summary has p tags - how to remove?
    // genres is an array - need to join
    if(!this.props.tvShowData){
            return <p>sorry no data for this show</p>
        }
    else{
            return <ul>
                    {this.props.tvShowData.name ? <h1>{this.props.tvShowData.name}</h1> : null}
                    {this.props.tvShowData.network ? <h3>{this.props.tvShowData.network.name}</h3> : null}
                    {this.props.tvShowData.webChannel ? <h5>{this.props.tvShowData.webChannel.name}</h5> : null}
                    {this.props.tvShowData.network ? <h3>({this.props.tvShowData.network.country.name})</h3> : null}
                    {this.props.tvShowData.summary ? <div>{striptags(this.props.tvShowData.summary)}</div> : null}
                    {this.props.tvShowData.genres ? <div><strong>Genres: </strong>{this.props.tvShowData.genres.join(', ')}</div> : null}
                    {this.props.tvShowData.type ? <div><strong>Type: </strong>{this.props.tvShowData.type}</div> : null}
                    {this.props.tvShowData.language ? <div><strong>Language: </strong>{this.props.tvShowData.language}</div> : null}
                    {this.props.tvShowData.premiered ? <div><strong>Premiered: </strong>{this.props.tvShowData.premiered}</div> : null}
                    {this.props.tvShowData.status ? <div><strong>Status: </strong>{this.props.tvShowData.status}</div> : null}
                    {this.props.tvShowData.officialSite ? <div><a href={this.props.tvShowData.officialSite}>Visit Official Site</a></div> : null}
                </ul>
              
        }
}

    render(){
        return(
            <div className="w3-col s4" style={{paddingLeft: "2em"}}>
                {/* {console.log(this.props.tvShowData)} */}
                {this.displayTvData()}
            </div>
        );
    }
}

export default ShowDetails;