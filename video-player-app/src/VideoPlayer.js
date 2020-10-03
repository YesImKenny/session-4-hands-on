import * as React from 'react';
import { getVideoIdFromPageUrl } from './utilities.js';
import { videosList } from "./constants";
import VideoList from './VideoList.js'


class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var videos = videosList;
        var selectedVideoIndex = 0;

        var id = getVideoIdFromPageUrl(videos[selectedVideoIndex].url);
        console.log(videos);

        var rootClassName = 'container-section';

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
                />
            </div>
        );
    }
}

export default VideoPlayer;