import React, { Component } from 'react';
import 'w3-css/w3.css';
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import ShowDisplay from './components/ShowDisplay';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tvShowList: [],
      selectedShow: "",
      tvShowClicked: false,
      tvImageUrl: "",
      tvShowData: null,
      castList: null,
      castListClicked: false,
    }
  }
  updateTvShowList = (list) => {
      this.setState({
        tvShowList: list
      })
  }
  getShow = (id) => {
    this.setState({
      selectedShow: id
    })
    this.setState({
      tvShowClicked: true
    })
    this.setState({
      castListClicked: false
    })
    this.setState({
      castList: null
    })
  }
  getTvImageUrl = (url) => {
    this.setState({
      tvImageUrl: url
    })
  }
 updateTvShowData = (data) => {
    this.setState({
      tvShowData: data
    })
  }
  updateCastList = (data) => {
    this.setState({
      castList: data
    })
    this.setState({
      castListClicked: true
    })
  }
  render() {
    return (
      <div>
        <div className="w3-sidebar w3-light-white w3-bar-block w3-card-4" style={{ width:'15%' }}>
          <Search  updateTvShowList={this.updateTvShowList}/>
          <SearchResults listOfShows={this.state.tvShowList} getShow={this.getShow} tvShowClicked={this.state.tvShowClicked}/>
        </div>         
        <div style={{ marginLeft:'20%' }}>
          <div className="w3-container">
            <ShowDisplay showId={this.state.selectedShow} 
              tvShowClicked={this.state.tvShowClicked} 
              getTvImageUrl={this.getTvImageUrl}
              tvImageUrl={this.state.tvImageUrl}
              updateTvShowData={this.updateTvShowData}
              tvShowData={this.state.tvShowData}
              updateCastList={this.updateCastList}
              castList={this.state.castList}
              castListClicked={this.state.castListClicked}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
