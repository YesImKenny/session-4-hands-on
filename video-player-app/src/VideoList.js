import * as React from 'react';
import VideoButton from './VideoButton.js';

class VideoList extends React.Component {

    render() {
        var {
            videos,
            selectedVideoIndex,
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
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default VideoList;