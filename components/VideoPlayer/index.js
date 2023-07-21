import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import styles from "@/components/VideoPlayer/videoplayer.module.css";

import Link from "next/link";
import Image from "next/image";

function VideoPlayer({ videos }) {
  return (
    <div className={styles.videoplayercontainer}>
      {videos.map((video, index) => (
        <div className={styles.video_container} key={index}>
          <div className={styles.video_title}>{video.name}</div>
          <Link href={video.source} target="_blank">
            <Image
              className={styles.video_img}
              src={video.image}
              alt={video.name}
              width={250}
              height={140}
            />
          </Link>
          <div className={styles.video_body}>
            <div className={styles.video_text}>{video.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoPlayer;
