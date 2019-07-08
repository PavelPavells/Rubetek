import React, {Component} from 'react';
import axios from 'axios';

class CastList extends Component {
loadCastList = (id) => {
    axios.get(`http://api.tvmaze.com/shows/${id}/cast`)
    .then(response => {
        const castList = response.data;
        console.log(castList);
        this.props.updateCastList(castList)
    })
    .catch(error => {
        console.log(error.response)
    });
}
hideButtonShowCount = () => {
    return <h1>{this.props.castList.length}</h1>
}
showCastList = () => {
        const castClicked = this.props.castListClicked;
        if (castClicked) {
          return this.props.castList.length > 0 ? 
          this.props.castList.map((p) => 
                <li key={p.character.id} className="w3-bar">
                {p.person.image ? <img src={p.person.image.medium} alt={p.person.name} className="w3-bar-item w3-hide-small" style={{width: "100px"}}></img>
                 : <img src={"http://www.angostura.com/wp-content/uploads/2017/06/no_image_available.jpeg"} alt={p.person.name} 
                 className="w3-bar-item w3-hide-small" style={{width: "100px"}}></img>}
                <div className="w3-bar-item"><span className="w3-large">{p.person.name}</span><br/>
                <span>{p.character.name}</span></div></li>)
                : <h3>no cast list available for this show</h3>
        }
}
    render(){
        return(
            <div className="w3-col s4">
                {this.props.castListClicked && this.props.castList.length > 0 ? <h2>Cast List ({this.props.castList.length})</h2> : 
                <button onClick={()=> this.loadCastList(this.props.showId)} className="w3-button w3-round-large w3-blue-grey" id="buttonCast">retrieve cast list</button>}
                <div className="w3-sidebar" style={{width: "100%"}}><ul className="w3-ul">{this.showCastList()}</ul></div>
            </div>
        );
    }
}
export default CastList;