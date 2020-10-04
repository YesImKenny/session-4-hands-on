import * as React from 'react';
import { getVideoIdFromPageUrl } from './utilities.js';
import { videosList } from "./constants";
import VideoList from './VideoList.js'


const VideoPlayer = () => {
  const [videos, setVideos] = React.useState(videosList);
  const [selectedVideoIndex, setSelectedVideoIndex] = React.useState(0);
  const [id, setId] = React.useState();

  React.useEffect(() => {
    setId(getVideoIdFromPageUrl(videos[selectedVideoIndex].url));
  });


  const changeVideo = (idx) => {
    setSelectedVideoIndex(idx);
    setId(getVideoIdFromPageUrl(videos[idx].ur));
  }
  
  let rootClassName = 'container-section';

  return (
    <div className={rootClassName}>
        <div className="main-section">
            <iframe
                className="video-player"
                title="Video Player"
                src={`https://player.vimeo.com/video/${id}?portrait=0`}
                width="1000"
                height="348"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
            />
        </div>
        <VideoList
                videos={videos}
                selectedVideoIndex={selectedVideoIndex}
                changeVideo={changeVideo}
        />
    </div>
  );
}

export default VideoPlayer;