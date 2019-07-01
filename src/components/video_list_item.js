import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return(
         <div onClick={() =>onVideoSelect(video)} className="list-group-item">
             <div className="video-list media">
                 <div className="media-left">
                     <img  className="media-object" src={imageUrl} alt=""/>
                 </div>
                <div className="media-body">
                    <h5 className="media-heading">{video.snippet.title}</h5>
                </div>
             </div>

         </div>
    );
};

export default VideoListItem;