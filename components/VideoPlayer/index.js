import { useState } from "react";
import Modal from "react-modal";
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import styles from "@/components/VideoPlayer/videoplayer.module.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

Modal.setAppElement("#__next");

function VideoPlayer({ videos }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  function openModal(video) {
    setCurrentVideo(video);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles.videoplayercontainer}>
      {videos.map((video, index) => (
        <div className={styles.video_container} key={index}>
          <div className={styles.video_left}>
            <div className={styles.video_title}>{video.name}</div>
            <div onClick={() => openModal(video.source)}>
              <Image
                className={styles.video_img}
                src={video.image}
                alt={video.name}
                width={250}
                height={140}
              />
            </div>
          </div>
          <div className={styles.video_right}>
            <div className={styles.video_text}>{video.description}</div>
          </div>
        </div>
      ))}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 33, 71, 0.75)",
          },
          content: {
            background: "black", // Set the background color of the content area
            color: "var(--color-light)", // Set the color of any text in the content area
          },
        }}
        contentLabel="Example Modal"
      >
        <button className={styles.closebtn} onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <iframe
          width="100%"
          height="100%"
          src={currentVideo}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal>
    </div>
  );
}

export default VideoPlayer;
