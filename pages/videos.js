/* pages/register.js */

import VideoPlayer from "@/components/VideoPlayer/index";

export default () => {
  const videos = [
    {
      name: "Critter Cams",
      source: "https://youtu.be/TjZsLNdLNTk",
      image: "/videos/crittercamslink.png",
      description:
        "Lorem ipsum dolor sit amet, aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "The Machine",
      source: "https://www.youtube.com/watch?v=-7Ul4D3Rw78",
      image: "/videos/machinethumb.png",
      description:
        "Lorem ipsum dolor sit amet, aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Without a sound",
      source: "https://www.youtube.com/watch?v=Sq5ZtXGA2pE",
      image: "/videos/withoutasoundyoutubethumb.png",
      description:
        "Lorem ipsum dolor sit amet, aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Sway",
      source: "https://www.youtube.com/watch?v=KHSBaBe5X5g",
      image: "/videos/swayyoutubethumb.png",
      description:
        "Lorem ipsum dolor sit amet, aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  return (
    <div>
      <VideoPlayer videos={videos} />
    </div>
  );
};
