import { AiFillHome } from "react-icons/ai";
import { RxVideo } from "react-icons/rx";
import { BiSolidVideos } from "react-icons/bi";
import { BsPersonSquare } from "react-icons/bs";
import { GoHistory, GoVideo } from "react-icons/go";
import { AiOutlineLike } from "react-icons/ai";

export const nav_list = [
  {
    id: 1,
    name: "Home",
    image: <AiFillHome color="white" size={25} />,
  },
  {
    id: 2,
    name: "Shorts",
    image: <RxVideo color="white" size={25} />,
  },
  {
    id: 3,
    name: "Subscriptions",
    image: <BiSolidVideos color="white" size={25} />,
  },
];

export const nav_list_you = [
  {
    id: 1,
    name: "Your Channel",
    image: <BsPersonSquare color="white" size={25} />,
  },
  {
    id: 2,
    name: "History",
    image: <GoHistory color="white" size={25} />,
  },
  {
    id: 3,
    name: "Your Videos",
    image: <GoVideo color="white" size={25} />,
  },
  {
    id: 4,
    name: "Watch Later",
    image: <AiOutlineLike color="white" size={25} />,
  },
];

export const video_list = [
  {
    id: 1,
    link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4#t=5,15",
    name: "Big Buck Bunny",
    channel: "Xyz Channel",
    views: "230K views",
    time: "1 months ago",
    subs: "50.3K subscribers",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
  },
  {
    id: 2,
    link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4#t=5,15",
    name: "Elephant dreams",
    channel: "By Blender Foundation",
    views: "30K views",
    time: "1 months ago",
    subs: "23.3K subscribers",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
  },
  {
    id: 3,
    link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4#t=5,15",
    name: "Sample for Bigger Blazes",
    channel: "By Google",
    views: "50K views",
    time: "1 months ago",
    subs: "12.3K subscribers",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
  },
];
