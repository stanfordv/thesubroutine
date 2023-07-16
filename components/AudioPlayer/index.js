import { useRef, useState } from "react";

const AudioPlayer = ({ song }) => {
  const audioRef = useRef();

  return (
    <div className="audio-player">
      <div>
        <audio controls src={song} ref={audioRef} />
      </div>
    </div>
  );
};

export default AudioPlayer;
