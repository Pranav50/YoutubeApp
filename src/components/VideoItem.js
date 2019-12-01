import React from 'react'
import {Grid, Paper, Typography} from '@material-ui/core'

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <Grid item xs={12}>
            <Paper style={{display: 'flex', alignItems: 'center', cursor: 'pointer',
            height: '170px', width: '310px'}}
            onClick={() => onVideoSelect(video)}>
                <img height="150px" width="225px" style={{marginRight: '5px'}} 
                alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
                <Typography variant="subtitle1">
                    {video.snippet.title.substring(0,20)+ "..."}
                </Typography>            
            </Paper>
        </Grid>
    )
}

export default VideoItem
