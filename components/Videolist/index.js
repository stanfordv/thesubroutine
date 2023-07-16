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
        <img width="300px" src="/crittercamslink.png" alt="crittercams image" />
      </Link>
    </Row>
  );
}
export default Videolist;
