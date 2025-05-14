import { Executive } from "../types/executive";
import pr from "../assets/Images/pr.jpg";
import astpr from "../assets/Images/astpr.jpg";
import chairman from "../assets/Images/chairman.jpg";
import sec from "../assets/Images/sec.jpg";
import jointSec from "../assets/Images/astsec.jpg";
import vice from "../assets/Images/vice.jpg";
import fin from "../assets/Images/fin.jpg";
import treasure from "../assets/Images/treasure.jpg";
import music from "../assets/Images/music.jpg";
import info from "../assets/Images/info.jpg";
import caretaker from "../assets/Images/care.jpg";
import property from "../assets/Images/pro.jpg";

export const executives: Executive[] = [
  {
    id: "012025",
    name: "Rev. Minlen Haokip",
    portfolio: "Pastor",
    roleDescription: "",
    image: pr,
  },
  {
    id: "022025",
    name: "Ngamminsang Lhungdim",
    portfolio: "Pastor KWSB",
    roleDescription: "",
    image: astpr,
  },
  {
    id: "032025",
    name: "Thanglenmang Kipgen",
    portfolio: "Chairman",
    roleDescription: "",
    image: chairman,
  },
  {
    id: "042025",
    name: "Thangminlun Haokip",
    portfolio: "Vice Chairman",
    roleDescription: "",
    image: vice,
  },
  {
    id: "052025",
    name: "DS Thangboi Haokip",
    portfolio: "Secretary",
    roleDescription: "",
    image: sec,
  },
  {
    id: "062025",
    name: "Lhunminlal Lupheng",
    portfolio: "Joint Secretary",
    roleDescription: "",
    image: jointSec,
  },
  {
    id: "072025",
    name: "Manglallien Vaiphei",
    portfolio: "Finance",
    roleDescription: "",
    image: fin,
  },
  {
    id: "082025",
    name: "Veipineng Chongloi",
    portfolio: "Treasure",
    roleDescription: "",
    image: treasure,
  },
  {
    id: "092025",
    name: "Thanglen Haokip",
    portfolio: "Property Secretary",
    roleDescription: "",
    image: property,
  },
  {
    id: "102025",
    name: "Mangtinlen Haokip",
    portfolio: "Music Secretary",
    roleDescription: "",
    image: music,
  },
  {
    id: "112025",
    name: "Ngamlenmang Touthang",
    portfolio: "Info. & Media Secretary",
    roleDescription: "",
    image: info,
  },
  {
    id: "122025",
    name: "Alen Kom",
    portfolio: "Care Taker",
    roleDescription: "",
    image: caretaker,
  },
];

export default executives;
