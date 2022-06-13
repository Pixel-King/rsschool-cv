

import  "./assets/styles/style.css";
import  "./assets/styles/normalize.css";
import myPhoto from "./assets/image/MyPhoto.jpg";
import KeyScrinImg from "./assets/image/virtual-keyboard.png";
import shelterScrin from "./assets/image/Shelter.png";
import cssMemScrin from "./assets/image/CSSslider.png";


const pageParam = {
    "language": "en"
}

const shelterWrap = document.querySelector('.slide_1');
const vKeyWrap = document.querySelector('.slide_2');
const cssMemSliderWrap = document.querySelector('.slide_3');
const myPhotoWrap = document.querySelector('.my-photo');
function addImg(url, wrap) {
    const img = document.createElement("img");
    img.src = url;
    wrap.appendChild(img);
};
addImg(myPhoto, myPhotoWrap);
addImg(shelterScrin, shelterWrap);
addImg(KeyScrinImg, vKeyWrap);
addImg(cssMemScrin, cssMemSliderWrap);


const codeExample = document.querySelector(".language-markup__wrap");
function createCodeExample(wrap){
    wrap.innerHTML = ` 
    class DepthCalculator {
        calculateDepth(arr) {
          if (!Array.isArray(arr)) return 0;
          return 1+ arr.reduce((dep, x)=> dep = + (Array.isArray(x)?this.calculateDepth(x):0),0);
        }
      }`;
}
createCodeExample(codeExample);