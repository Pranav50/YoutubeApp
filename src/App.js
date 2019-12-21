import React, { Component } from 'react'
import {Grid} from '@material-ui/core'
import Youtube from './api/Youtube'
import {VideoList, SearchBar, VideoDetails} from './components'
import './App.css'

export class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.handleSubmit('buggati car')
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video})
  }

  handleSubmit = async (searchTerm) => {
    const response = await Youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 6,
        key: process.env.REACT_APP_YOUTUBE_KEY,
        q: searchTerm
    }
    });

    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
  }
  render() {
    const {selectedVideo, videos} = this.state;

    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12} style={{marginLeft: '4px'}}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              {/* Search Bar */}
              <SearchBar onFormSubmit={this.handleSubmit}/>
            </Grid>
            <Grid item xs={8}>
              {/* Video Details */}
              <VideoDetails video={selectedVideo}/>
            </Grid>
            <Grid item xs={4} className="grid-list">
              {/* Video List */}
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid> 
    )
  }
}

export default App
