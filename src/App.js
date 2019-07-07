import React, { Component } from 'react';
import 'w3-css/w3.css';
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import ShowDisplay from './components/ShowDisplay';

class App extends Component {
  constructor(props){
    super(props)
    // all state is expected to be maintained in here
    this.state={
      // tvShowList is loaded in Search
      tvShowList: [],
      selectedShow: "",
      tvShowClicked: false,
      tvImageUrl: "",
      tvShowData: null,
      castList: null,
      castListClicked: false
    }
  }
  // set tvShowList array here
  updateTvShowList = (list) => {
      this.setState({tvShowList: list})
  }
  
  // find out what show is selected by here and set it in the selectedShow state 
  getShow = (id) => {
    this.setState({selectedShow: id})
    this.setState({tvShowClicked: true})
    // reset cast list stuff:
    this.setState({castListClicked: false})
    this.setState({castList: null})
  }

  // set state of image url
  getTvImageUrl = (url) => {
    this.setState({tvImageUrl: url})
  }

  // set state of show info from api call of just the current show
 updateTvShowData = (data) => {
    this.setState({tvShowData: data})
  }

  // update cast list to be mapped thru 
  updateCastList = (data) => {
    this.setState({castList: data})
    this.setState({castListClicked: true})
  }


  render() {
    return (
      <div>
        <div className="w3-sidebar w3-light-grey w3-bar-block w3-card-4" style={{ width:'20%' }}>
          <img style={{width:'100%'}} src="https://static.tvmaze.com/images/tvm-header-logo.png" alt='' />
          {/* send tvShowList and upDateTvShowList to Search component to update state of tvShowList with response data */}
          <Search  updateTvShowList={this.updateTvShowList}/>
          {/* send updated tvShowList to search results to map thru + display */}
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
