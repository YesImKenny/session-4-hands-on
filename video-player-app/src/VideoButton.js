import * as React from 'react';

const VideoButton = (props) => {
  const {
    videoTitle,
    videoImage,
    videoDescription,
    isSelected,
    changeVideo,
  } = props;

  let buttonClassName = 'video';

  if (isSelected) {
    buttonClassName = 'video selected';
  }

  return (
    <div
      className={buttonClassName} onClick={changeVideo}
    >
      <img src={`${videoImage}`} alt="" className="video-image" />
        <div className="description">
          <h4>{videoTitle}</h4>
          <p>{videoDescription}</p>
        </div>
    </div>
  );
}

export default VideoButton;