import AudioPlayer from "@/components/AudioPlayer";
import styles from "@/components/AudioPlayer/AudioPlayer.module.css";

function Songlist() {
  const songs = [
    {
      name: "Latest mix (18Aug)",
      source:
        "https://storage.googleapis.com/subroutinesongs/latest/sketch.mp3",
      image: "/songs/latestsketch.png",
      description:
        "This is full version of the Subroutine theme song with techno outro - aug23_4_clean_03",
      //  AUG05: "This is the full version of the Subroutine theme song aka thesubroutine19final - july23_full - notwang_1_master. There is an attempt at mastering here and we removed the clav twang for better or for worse.",
    },
    {
      name: "Machine - Side 1",
      source: "https://storage.googleapis.com/subroutinesongs/machineside1.mp3",
      image: "/songs/machine_album.gif",
      link: "https://open.spotify.com/track/4Sb9Tmw1EjPJUwMpC09PaD?si=3d69c9d310ce4aaa",
    },
    {
      name: "Machine - Side 2",
      source: "https://storage.googleapis.com/subroutinesongs/machineside2.mp3",
      image: "/songs/machine_album.gif",
      link: "https://open.spotify.com/track/7wtKEK4x8X5dLJd5L4uH14?si=67902ca749e445cc",
    },
    {
      name: "The Subroutine Song",
      source:
        "https://storage.googleapis.com/subroutinesongs/thesubroutine19final.aug23_4_clean_01.mp3",
      image: "/songs/insidethesubroutine.png",
    },
    {
      name: "Without a Sound",
      source:
        "https://storage.googleapis.com/subroutinesongs/withoutasound.mp3",
      image: "/songs/withoutasound.jpg",
      link: "https://open.spotify.com/track/6fH7xtXTxo8m8g2NnnyHIC?si=3cdfcf2a378f4500",
    },
    {
      name: "What I Know",
      source: "https://storage.googleapis.com/subroutinesongs/whatiknow.mp3",
      image: "/songs/whatiknow.jpg",
      link: "https://open.spotify.com/track/5YvUQRKmwuidzCgX3Fmyl7?si=93bdf31a63c24820",
    },
    {
      name: "The Machine",
      source: "https://storage.googleapis.com/subroutinesongs/themachine.mp3",
      image: "/songs/themachine.jpg",
    },
    {
      name: "Busted",
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
      name: "Looking up High",
      source: "https://storage.googleapis.com/subroutinesongs/lookinuphigh.mp3",
      image: "/songs/lookinuphigh.png",
    },
  ];
  return (
    <div className={styles.audioplayer_container}>
      <AudioPlayer songs={songs} />
    </div>
  );
}

export default Songlist;
