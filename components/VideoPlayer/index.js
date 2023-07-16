const VideoPlayer = ({ video }) => {
  return (
    <div className="video-player">
      <div>
        <video controls src={video} />
      </div>
    </div>
  );
};

export default VideoPlayer;
