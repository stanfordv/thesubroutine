/* pages/register.js */

import VideoPlayer from "@/components/VideoPlayer/index";

export default () => {
  const videos = [
    {
      name: "Critter Cams",
      youtube_link: "https://youtu.be/watch?v=ZUOE-2lFHek",
      source: "https://www.youtube.com/embed/ZUOE-2lFHek",
      image: "/videos/crittercamslink.png",
      description: "",
      // "Lorem ipsum dolor sit amet, aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "The Machine",
      youtube_link: "https://www.youtube.com/watch?v=-7Ul4D3Rw78",
      source: "https://www.youtube.com/embed/-7Ul4D3Rw78",
      image: "/videos/machinethumb.png",
      description: "",
      // "Lorem ipsum dolor sit amet, aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Without a sound",
      youtube_link: "https://www.youtube.com/watch?v=Sq5ZtXGA2pE",
      source: "https://www.youtube.com/embed/Sq5ZtXGA2pE",
      image: "/videos/withoutasoundyoutubethumb.png",
      description: "",
      // "Lorem ipsum dolor sit amet, aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Being Here",
      youtube_link: "https://www.youtube.com/watch?v=m4ldiVdBheU",
      source: "https://www.youtube.com/embed/m4ldiVdBheU",
      image: "/videos/beingherethumb.png",
      description: "",
      // "Lorem ipsum dolor sit amet, aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Sway",
      youtube_link: "https://www.youtube.com/watch?v=KHSBaBe5X5g",
      source: "https://www.youtube.com/embed/KHSBaBe5X5g",
      image: "/videos/swayyoutubethumb.png",
      description: "",
      // "Lorem ipsum dolor sit amet, aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  return (
    <div>
      <VideoPlayer videos={videos} />
    </div>
  );
};
