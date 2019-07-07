import React from 'react';
import './index.css';

class SearchResults extends React.Component {
    render(){
        if(this.props.listOfShows.length === 0) {
            return <div style={{paddingLeft: "1em"}}>no results found...</div>
        } else {
        return(       
            <div>
                <ul>
                    {this.props.listOfShows.map(show => { 
                        if(!show.show.image){
                            // need logic here to plug in a default image instead
                            return <li key={show.show.id} onClick={()=> this.props.getShow(show.show.id)} className="w3-bar-item w3-button w3-border-bottom w3-padding-large">
                            <img src={"http://www.angostura.com/wp-content/uploads/2017/06/no_image_available.jpeg"} alt={show.show.name} id="listImg"></img>
                            <span>{show.show.name}</span>
                        </li>
                        }
                        else{
                        return <li key={show.show.id} onClick={()=> this.props.getShow(show.show.id)} className="w3-bar-item w3-button w3-border-bottom w3-padding-large">
                            <img src={show.show.image.medium} alt={show.show.name} id="listImg"></img>
                            <span>{show.show.name}</span>
                        </li>
                        }
                    })}
            </ul>
            </div>
        );
        }
    }

}

export default SearchResults;