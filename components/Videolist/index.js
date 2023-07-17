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

import VideoPlayer from "../VideoPlayer";
import Link from "next/link";

function Videolist() {
  return (
    <Row>
      <Link href="https://youtu.be/TjZsLNdLNTk">
        <img width="250px" src="/crittercamslink.png" alt="crittercams image" />
      </Link>
      &nbsp;
      <Link href="https://www.youtube.com/watch?v=-7Ul4D3Rw78">
        <img width="250px" src="/machinethumb.png" alt="machine image" />
      </Link>
      &nbsp;
      <Link href="https://www.youtube.com/watch?v=Sq5ZtXGA2pE">
        <img
          width="250px"
          src="/withoutasoundyoutubethumb.png"
          alt="withoutasound image"
        />
      </Link>
      &nbsp;
      <Link href="https://www.youtube.com/watch?v=KHSBaBe5X5g">
        <img width="250px" src="/swayyoutubethumb.png" alt="sway image" />
      </Link>
    </Row>
  );
}
export default Videolist;
