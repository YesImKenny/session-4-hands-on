import * as React from 'react';

class VideoButton extends React.Component {

    render() {
      // Get the required props to be used in this component
        var {
            videoTitle,
            videoImage,
            videoDescription,
            isSelected,
        } = this.props;

        var buttonClassName = 'video';

        if (isSelected) {
            buttonClassName = 'video selected';
        }
        
      // Make sure you pass the right prop values in the blanks provided

        return (
            <div
                className={buttonClassName}
            >
                <img src={`${videoImage}`} alt="" className="video-image" />
                    <div className="description">
                        <h4>{videoTitle}</h4>
                        <p>{videoDescription}</p>
                    </div>
            </div>
        );
    }
}

export default VideoButton;