import React, { Fragment } from "react";

const VideoDetail = ({ selectedVideo }) => {
    if (!selectedVideo) {
       return <div>Loading spinner goes here someday...</div>
    }
    const videoId = selectedVideo.id.videoId;
    const videoUrl = `https:/www.youtube.com/embed/${videoId}`;
    return (
        <Fragment>
           <iframe width="640" height="360" src={videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
           <h2>{selectedVideo.snippet.title}</h2>
           <p>{selectedVideo.snippet.description}</p>
        </Fragment>
    )
}


export default VideoDetail;