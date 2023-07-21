/* pages/register.js */

import VideoPlayer from "@/components/VideoPlayer/index";

export default () => {
  const videos = [
    {
      name: "Critter Cams",
      source: "https://youtu.be/TjZsLNdLNTk",
      image: "/videos/crittercamslink.png",
      description: "When the punks nuke Washington DC....",
    },
    {
      name: "The Machine",
      source: "https://www.youtube.com/watch?v=-7Ul4D3Rw78",
      image: "/videos/machinethumb.png",
      description: "Video description for The Machine...",
    },
    {
      name: "Without a sound",
      source: "https://www.youtube.com/watch?v=Sq5ZtXGA2pE",
      image: "/videos/withoutasoundyoutubethumb.png",
      description: "Video description for Without a sound...",
    },
    {
      name: "Sway",
      source: "https://www.youtube.com/watch?v=KHSBaBe5X5g",
      image: "/videos/swayyoutubethumb.png",
      description: "Video description for Sway...",
    },
  ];
  return (
    <div>
      <VideoPlayer videos={videos} />
    </div>
  );
};
