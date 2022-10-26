import { atom } from "recoil";


const selectedRegionState = atom({
    key: "selectedRegion",
    default: "andalucia"
});


export default selectedRegionState;