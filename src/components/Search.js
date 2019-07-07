import React, {Component} from 'react';
import _ from 'lodash';
import axios from 'axios';

class Search extends Component {
    constructor(props){
        super(props);
        // this is from debounced tutorial
        this.onChange = this.onChange.bind(this);
        this.debouncedOnChange = _.debounce(this.debouncedOnChange.bind(this), 200);
    }

    onChange(event){
        this.debouncedOnChange(event.target.value);  // send values
    }

    debouncedOnChange(value){
        this.search(value); // perform search once every 200ms
    }

    search(value){
        // fetch objects from backend
        axios.get("http://api.tvmaze.com/search/shows?q="+ value +"")
        .then(response => {
            const tvShow = response.data;
            // passes data from api into upDateTvShowList function that takes in a list and puts it in tvShowArray state:
            this.props.updateTvShowList(tvShow);
        })
        .catch(error => {
            // if no data:
            console.log(error.response)
        });
    }
    
    render(){
        return(
            <div>
                <input onChange={this.onChange} className="w3-bar-item w3-input w3-border" placeholder="Enter a show..."/>
            </div>
        );
    }
}

export default Search;