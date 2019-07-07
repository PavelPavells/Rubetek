import React, { Component } from 'react';
import axios from 'axios';

class EpisodeList extends Component {
    loadEpsodeList = (id) => {
        axios.get(`http://api.tvmaze.com/shows/${id}/episodes`)
            .then(response => {
                const episodeList = response.data;
                console.log(episodeList);
                this.props.episodeList(episodeList);
            })
            .catch(error => {
                console.log(error.response);
            })
    }
    render() {
        return(
            <div>
                <button>Watch Episodes</button>
            </div>
        )
    }
}
export default EpisodeList;