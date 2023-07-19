import React, { useState } from "react";
import Modal from "react-modal";

// Define the function component
const VideoPlayer = () => {
  // Set up the state to keep track of the current video
  const [currentVideo, setCurrentVideo] = useState(null);

  // List of video URLs
  const videoLinks = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    // Add more links as needed
  ];

  // Function to open a video in the modal
  const openVideo = (video) => {
    setCurrentVideo(video);
  };

  // Function to close the modal
  const closeVideo = () => {
    setCurrentVideo(null);
  };

  return (
    <div>
      {videoLinks.map((video, index) => (
        <button key={index} onClick={() => openVideo(video)}>
          Play video {index + 1}
        </button>
      ))}

      <Modal isOpen={currentVideo !== null} onRequestClose={closeVideo}>
        {currentVideo && (
          <iframe
            width="560"
            height="315"
            src={currentVideo}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
        <button onClick={closeVideo}>Close video</button>
      </Modal>
    </div>
  );
};

export default VideoPlayer;
