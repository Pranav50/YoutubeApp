import React from 'react'
import {Grid} from '@material-ui/core'
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect}) => {
    const listOfVideos = videos.slice(1).map((video, id) => 
    <div><VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/><br/></div>)

    return (
        <Grid>
            {listOfVideos} 
        </Grid>
    )
}

export default VideoList 
