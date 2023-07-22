import AudioPlayer from "@/components/AudioPlayer";
import styles from "@/components/AudioPlayer/AudioPlayer.module.css";

function Songlist() {
  const songs = [
    {
      name: "Latest mix",
      source:
        "https://storage.googleapis.com/subroutinesongs/latest/sketch.mp3",
      image: "/songs/latestsketch.png",
    },
    {
      name: "The Machine ",
      source: "https://storage.googleapis.com/subroutinesongs/themachine.mp3",
      image: "/songs/themachine.jpg",
    },
    {
      name: "Without a sound",
      source:
        "https://storage.googleapis.com/subroutinesongs/withoutasound.mp3",
      image: "/songs/withoutasound.jpg",
    },
    {
      name: "What I Know",
      source: "https://storage.googleapis.com/subroutinesongs/whatiknow.mp3",
      image: "/songs/whatiknow.jpg",
    },

    {
      name: "Busted ",
      source: "https://storage.googleapis.com/subroutinesongs/busted.mp3",
      image: "/songs/busted.jpg",
    },
    {
      name: "Critter Cams",
      source: "https://storage.googleapis.com/subroutinesongs/crittercams.mp3",
      image: "/songs/crittercams.png",
    },
    {
      name: "Sunrise",
      source: "https://storage.googleapis.com/subroutinesongs/sunrise.mp3",
      image: "/songs/sunrise.jpg",
    },

    {
      name: "Machine - Side 1",
      source: "https://storage.googleapis.com/subroutinesongs/machineside1.mp3",
      image: "/songs/machine_album.gif",
    },
    {
      name: "Machine - Side 2",
      source: "https://storage.googleapis.com/subroutinesongs/machineside2.mp3",
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
