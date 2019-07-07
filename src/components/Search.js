import React, {Component} from 'react';
import _ from 'lodash';
import axios from 'axios';

class Search extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.debouncedOnChange = _.debounce(this.debouncedOnChange.bind(this), 200);
    }
    onChange(event){
        this.debouncedOnChange(event.target.value); 
    }
    debouncedOnChange(value){
        this.search(value);
    }
    search(value){
        axios.get(`http://api.tvmaze.com/search/shows?q=${value}`)
        .then(response => {
            const tvShow = response.data;
            this.props.updateTvShowList(tvShow);
        })
        .catch(error => {
            console.log(error.response)
        });
    }   
    render(){
        return(
            <div>
                <input onChange={this.onChange} className="w3-bar-item w3-input w3-border" placeholder="Search..."/>
            </div>
        );
    }
}
export default Search;