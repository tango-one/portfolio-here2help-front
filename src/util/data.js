import PersonWork from "../assets/person-work.png";

import Pc from "../assets/pc.png";
import Mobile from "../assets/mobile.jpg";
import Tab from "../assets/tab.jpg";

export default {
  hero: {
    title: "Here to help",
    info:
      "We offer high qulity online tutorials to guide you when you need help",
    btnText: "Choose a course",
    bgImag: PersonWork,
  },
  courses: [
    {
      id: 1,
      title: "How to clean your PC",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo possimus soluta vel numquam facere reiciendis?",
      price: "20",
      image: Pc,
      category: "pc",
    },
    {
      id: 2,
      title: "Remove App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo possimus soluta vel numquam facere reiciendis?",
      price: "20",
      image: Mobile,
      category: "mobile",
    },
    {
      id: 3,
      title: "Free Memory on Ipad",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo possimus soluta vel numquam facere reiciendis?",
      price: "20",
      image: Tab,
      category: "tablet",
    },
  ],
};
