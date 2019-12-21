import React from 'react'
import {Grid, Paper, Typography} from '@material-ui/core'

const VideoItem = ({video, onVideoSelect}) => {
    if(!video) return <div>Loading...</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <Grid item xs={12}>
            <Paper className="video-list"
            onClick={() => onVideoSelect(video)} key={video.id}>
                <img  style={{marginRight: '5px'}} 
                alt="thumbnail" src={video.snippet.thumbnails.medium.url} />            
            </Paper>
            <Paper className="video-list" elevation={6} style={{padding: '15px'}}>
                <Typography variant="subtitle1">
                    {video.snippet.title.substring(0,20)+ "..."}
                </Typography>
            </Paper> 
        </Grid>
    )
}

export default VideoItem


{/* <Grid item xs={12}>
            <Paper className="video-list"
            onClick={() => onVideoSelect(video)} key={video.id}>
                <img  style={{marginRight: '5px'}} 
                alt="thumbnail" src={video.snippet.thumbnails.medium.url} />            
            </Paper>
            <Paper className="video-list" elevation={6} style={{padding: '15px'}}>
                <Typography variant="subtitle1">
                    {video.snippet.title.substring(0,20)+ "..."}
                </Typography>
            </Paper> 
        </Grid> */}
