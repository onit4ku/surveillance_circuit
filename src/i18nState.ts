import { atom } from "recoil";

const selectedLanguage = atom({
  key: "selectedLanguage",
  default: "en"
});

export default selectedLanguage;
