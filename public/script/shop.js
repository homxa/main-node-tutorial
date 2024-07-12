import { product } from "./home.js";
import { getHTML } from "./home.js";

document.addEventListener('DOMContentLoaded',()=>{

  let sumHMTL = '';
  product.forEach((item)=>{
   sumHMTL += getHTML(item);
  });
document.querySelector('.js-shop').innerHTML = sumHMTL;
console.log(sumHMTL)

});
