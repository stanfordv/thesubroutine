import AudioPlayer from "@/components/AudioPlayer";

import { Row } from "reactstrap";

function Songlist() {
  const songs = [
    { name: "Busted", source: "Busted1_album_MASTER_1.mp3" },
    { name: "Without a sound", source: "song2.mp3" },
  ];
  return (
    <div>
      <Row>
        <AudioPlayer songs={songs} />
      </Row>
    </div>
  );
}

export default Songlist;
