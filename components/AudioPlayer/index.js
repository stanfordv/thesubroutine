import React, { useState, useEffect, useRef } from "react";
import styles from "./AudioPlayer.module.css";
import { Col, Row } from "reactstrap";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const AudioPlayer = ({ songs }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audio = useRef(null);

  useEffect(() => {
    audio.current = new Audio(songs[0].source);
    audio.current.addEventListener("timeupdate", updateProgress);
    audio.current.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.current.removeEventListener("timeupdate", updateProgress);
      audio.current.removeEventListener("loadedmetadata", updateDuration);
      audio.current = null;
    };
  }, [songs]);

  const updateProgress = () => {
    setCurrentTime(audio.current.currentTime);
  };

  const updateDuration = () => {
    setDuration(audio.current.duration);
  };

  const changeTrack = (index) => {
    audio.current.src = songs[index].source;
    setCurrentTrackIndex(index);
    play();
  };

  const play = () => {
    audio.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audio.current.pause();
    setIsPlaying(false);
  };

  return (
    <Row className={styles.audio}>
      <Col>
        <div className={styles.container}>
          <Controls isPlaying={isPlaying} play={play} pause={pause} />
          <div className={styles.displaytext}>
            <DisplayTrack track={songs[currentTrackIndex]} />{" "}
          </div>
          <ProgressBar currentTime={currentTime} duration={duration} />
        </div>
        <Image
          src="/subroutinelogo_sm.gif" // Source path
          alt="Subroutine logo" // Good to provide alt text for accessibility
          width={150} // Width of the image
          height={80} // You need to provide a height value for Next.js Image component
        />
      </Col>
      <Col className={styles.songList}>
        {songs.map((song, index) => (
          <div
            className={styles.songListItem}
            key={index}
            onClick={() => changeTrack(index)}
          >
            <span>{song.name}</span>
          </div>
        ))}
      </Col>
    </Row>
  );
};

const DisplayTrack = ({ track }) => <div>{track.name}</div>;

const ProgressBar = ({ currentTime, duration }) => (
  <div className={styles.progressBar}>
    <progress value={currentTime} max={duration}></progress>
  </div>
);

const Controls = ({ isPlaying, play, pause }) => (
  <div className={styles.controlbtns}>
    {isPlaying ? (
      <div className={styles.pausebtn} onClick={pause}>
        <FontAwesomeIcon icon={faPause} />
      </div>
    ) : (
      <div className={styles.playbtn} onClick={play}>
        <FontAwesomeIcon icon={faPlay} />
      </div>
    )}
  </div>
);

export default AudioPlayer;
