import React, { useState, useEffect, useRef } from "react";
import styles from "./AudioPlayer.module.css";
import { Col, Row } from "reactstrap";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";

const AudioPlayer = ({ songs }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audio = useRef(null);
  let nowplaying_image = songs[currentTrackIndex].image;

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

  useEffect(() => {
    const handleSpacebarPress = (event) => {
      if (event.code === "Space") {
        event.preventDefault(); // to prevent default action of space bar (scrolling down)
        setIsPlaying(!isPlaying); // toggle play/pause
        isPlaying ? pause() : play();
      }
    };

    window.addEventListener("keydown", handleSpacebarPress);

    return () => {
      // Cleanup - remove the event listener when the component is unmounted
      window.removeEventListener("keydown", handleSpacebarPress);
    };
  }, [isPlaying]); // depends on the isPlaying state

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
      <Col className={styles.songlistcol}>
        <div className={styles.songlistheader}>
          <div className={styles.songlistheaderinner}>Songs</div>
        </div>
        <div className={styles.songlist}>
          {songs.map((song, index) => {
            let iscurr = currentTrackIndex === index;
            return (
              <div
                className={
                  iscurr ? styles.songListItemSelected : styles.songListItem
                }
                key={index}
                onClick={() => changeTrack(index)}
              >
                {iscurr && (
                  <FontAwesomeIcon
                    className={styles.circleplay}
                    icon={faCirclePlay}
                  />
                )}
                &nbsp;
                <span>{song.name}</span>
              </div>
            );
          })}
        </div>
      </Col>
      <Col className={styles.playercol}>
        <div className={styles.playerheader}>
          <Controls isPlaying={isPlaying} play={play} pause={pause} />
          <div className={styles.displaytext}>
            <DisplayTrack track={songs[currentTrackIndex]} />{" "}
          </div>
        </div>
        <ProgressBar currentTime={currentTime} duration={duration} />
        {isPlaying && (
          <Image
            className={styles.subroutinebomb}
            src="/subroutinelogo_sm.gif" // Source path
            alt="Subroutine logo" // Good to provide alt text for accessibility
            width={150} // Width of the image
            height={80} // You need to provide a height value for Next.js Image component
          />
        )}
        {!isPlaying && (
          <Image
            className={styles.subroutinebomb}
            src="/subroutinelogo_sm_still.gif" // Source path
            alt="Subroutine logo" // Good to provide alt text for accessibility
            width={150} // Width of the image
            height={80} // You need to provide a height value for Next.js Image component
          />
        )}
      </Col>

      <Col className={styles.imagecol}>
        <Image
          className={styles.songimage}
          src={nowplaying_image} // Source path
          alt="Subroutine logo" // Good to provide alt text for accessibility
          width={150} // Width of the image
          height={80} // You need to provide a height value for Next.js Image component
        />
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
