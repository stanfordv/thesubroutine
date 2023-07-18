import AudioPlayer from "@/components/AudioPlayer";
import styles from "@/components/AudioPlayer/AudioPlayer.module.css";
import { Row } from "reactstrap";

function Songlist() {
  const songs = [
    {
      name: "Without a sound",
      source: "/songs/withoutasound.mp3",
      image: "/songs/withoutasound.jpg",
    },
    {
      name: "What I Know",
      source: "/songs/whatiknow.mp3",
      image: "/songs/whatiknow.jpg",
    },
    {
      name: "The Machine ",
      source: "/songs/themachine.mp3",
      image: "/songs/themachine.jpg",
    },
    {
      name: "Busted ",
      source: "/songs/busted.mp3",
      image: "/songs/busted.jpg",
    },
    {
      name: "Critter Cams",
      source: "/songs/crittercams.mp3",
      image: "/songs/crittercams.png",
    },
    {
      name: "Sunrise",
      source: "/songs/sunrise.mp3",
      image: "/songs/sunrise.jpg",
    },

    {
      name: "Machine - Side 1",
      source: "/songs/machineside1.mp3",
      image: "/songs/machine_album.gif",
    },
    {
      name: "Machine - Side 2",
      source: "/songs/machineside2.mp3",
      image: "/songs/machine_album.gif",
    },
  ];
  return (
    <div className={styles.audioplayer_container}>
      <AudioPlayer songs={songs} />
    </div>
  );
}

export default Songlist;
