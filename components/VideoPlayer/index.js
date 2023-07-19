/* components/videolist/index.js */
import {
  Card,
  CardBody,
  CardText,
  CardImg,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import styles from "@/components/VideoPlayer/videoplayer.module.css";

import Link from "next/link";

function VideoPlayer() {
  return (
    <div className={styles.videoplayercontainer}>
      <Link href="https://youtu.be/TjZsLNdLNTk">
        <img
          width="250px"
          src="/videos/crittercamslink.png"
          alt="crittercams image"
        />
      </Link>
      &nbsp;
      <Link href="https://www.youtube.com/watch?v=-7Ul4D3Rw78">
        <img width="250px" src="/videos/machinethumb.png" alt="machine image" />
      </Link>
      &nbsp;
      <Link href="https://www.youtube.com/watch?v=Sq5ZtXGA2pE">
        <img
          width="250px"
          src="/videos/withoutasoundyoutubethumb.png"
          alt="withoutasound image"
        />
      </Link>
      &nbsp;
      <Link href="https://www.youtube.com/watch?v=KHSBaBe5X5g">
        <img
          width="250px"
          src="/videos/swayyoutubethumb.png"
          alt="sway image"
        />
      </Link>
    </div>
  );
}
export default VideoPlayer;
