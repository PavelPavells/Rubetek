import React, {Component} from 'react';
import ShowImage from './ShowImage';
import ShowDetails from './ShowDetails';
import CastList from './CastList';
import axios from 'axios';

class ShowDisplay extends Component{

updateData = (id) => {
    let api = 'http://api.tvmaze.com/shows/'+id;
    axios.get(api)
        .then(response => {
            const tvShow = response.data;
            console.log(tvShow);
            // this gives the current tv show image url to props
            tvShow.image ? this.props.getTvImageUrl(tvShow.image.original) : this.props.getTvImageUrl("http://www.angostura.com/wp-content/uploads/2017/06/no_image_available.jpeg")
            // this gives the show data to props - now can use in ShowDetails
            this.props.updateTvShowData(tvShow);
        })
        .catch(error => {
            // if no data:
            console.log(error.response)
        });
}
// prevents mega looping - if id changes recall the api
componentDidUpdate(prevProps){
    if(this.props.showId !== prevProps.showId){
        this.updateData(this.props.showId) 
    }
    
}

    // if tv item has been clicked this prop is true and can display the show picture
    showImage = () => {
        const isClicked = this.props.tvShowClicked;
        if (isClicked) {
          return <div className="w3-container">
            <div className="w3-row-padding" style={{paddingTop: '10px'}}>
            <ShowImage tvImageUrl={this.props.tvImageUrl}/>
            <ShowDetails tvShowData={this.props.tvShowData} />
            <CastList showId={this.props.showId} 
            updateCastList={this.props.updateCastList} 
            castList={this.props.castList}
            castListClicked={this.props.castListClicked}/>
            </div>
            </div>;
        }
      }
      
    render(){
        return(
            <div>
                {this.showImage()}
            </div>  
                 
        );
    }
}

export default ShowDisplay;