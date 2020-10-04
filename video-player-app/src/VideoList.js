import * as React from 'react';
import VideoButton from './VideoButton.js';

class VideoList extends React.Component {

    render() {
        var {
            videos,
            selectedVideoIndex,
            changeVideo
        } = this.props;

        return (
            <div className="video-list">
                {
                    videos.map(({ id, title, description, img }, index) => {
                        var isSelected = index === selectedVideoIndex;

                        return (
                            <VideoButton
                                key={`${id}-${index}`}
                                videoTitle={title}
                                videoImage={img}
                                videoDescription={description}
                                index={index}
                                isSelected={isSelected}
                                changeVideo={changeVideo.bind(null, index)}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default VideoList;