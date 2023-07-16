/* components/Songlist/index.js */
import AudioPlayer from "@/components/AudioPlayer";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";

function Songlist() {
  return (
    <div>
      <Row>
        <Col>
          <AudioPlayer song="Busted1_album_MASTER_1.mp3" />
        </Col>

        <Col>
          <AudioPlayer song="Busted1_album_MASTER_1.mp3" />
        </Col>
        <Col>
          <AudioPlayer song="Busted1_album_MASTER_1.mp3" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AudioPlayer song="Busted1_album_MASTER_1.mp3" />
        </Col>
      </Row>
    </div>
  );
}

export default Songlist;
