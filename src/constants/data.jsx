import firstSuite from "../assets/standardSuite.jpg";
import secondSuite from "../assets/deluxeSuite.jpg";
import thirdSuite from "../assets/luxurySuite.jpg";
import { PiCircleDashedFill } from "react-icons/pi";
import { WiTime7 } from "react-icons/wi";
import { PiPuzzlePieceBold } from "react-icons/pi";
import { BsPuzzle } from "react-icons/bs";
import { BsCup } from "react-icons/bs";
import { PiLockThin } from "react-icons/pi";
import { TbLock } from "react-icons/tb";
import { BiSolidTrafficCone } from "react-icons/bi";

export const suitesInfo = [
  {
    price: "$49/night",
    room: "Standard Room",
    image: firstSuite,
    details:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, sequi atque impedit beatae perferendis at magni officia ut nulla iure illo nam, fuga dolor vero!",
  },
  {
    price: "$69/night",
    room: "Deluxe Room",
    image: secondSuite,
    details:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, sequi atque impedit beatae perferendis at magni officia ut nulla iure illo nam, fuga dolor vero!",
  },
  {
    price: "$99/night",
    room: "Luxury Room",
    image: thirdSuite,
    details:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, sequi atque impedit beatae perferendis at magni officia ut nulla iure illo nam, fuga dolor vero!",
  },
];
export const features = [
  {
    icon: <PiCircleDashedFill />,
    heading: "Swimming",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit volupt accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.",
  },
  {
    icon: <WiTime7 />,
    heading: "Jogging Track",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit volupt accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.",
  },
  {
    icon: <BsPuzzle />,
    heading: "Kids Playground",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit volupt accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.",
  },
  {
    icon: <BsCup />,
    heading: "Public Facilities Nearby",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit volupt accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.",
  },
  {
    icon: <BiSolidTrafficCone />,
    heading: "Quick Highway Access",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit volupt accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.",
  },
  {
    icon: <TbLock />,
    heading: "24/7 Security",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit volupt accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.",
  },
];
