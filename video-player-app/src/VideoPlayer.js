import * as React from 'react';
import { getVideoIdFromPageUrl } from './utilities.js';
import { videosList } from "./constants";
import VideoList from './VideoList.js'


class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: videosList,
            selectedVideoIndex: 0,
        }
    }

    componentDidMount = () => {
      this.setState({
        id: getVideoIdFromPageUrl(this.state.videos[this.state.selectedVideoIndex].url)
      })
    }


    changeVideo = (idx) => {
      this.setState((state, props) => ({
        selectedVideoIndex: idx,
        id: getVideoIdFromPageUrl(state.videos[idx].url)
      }))
    }
      

    render() {
        var videos = this.state.videos;
        var selectedVideoIndex = this.state.selectedVideoIndex;
        var id = this.state.id;

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
                        changeVideo={this.changeVideo}
                />
            </div>
        );
    }
}

export default VideoPlayer;