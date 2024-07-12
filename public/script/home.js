 export const product = [{
  id: 'a',
  Image: './img/products/f1-1.webp',
  name: 'cooton astronot hoodie',
  priceCent: 5700,
  rating: {
    star: 4.5,
    brand: 'Dior'
  },
  go: ' fade-left '
},{
  id: 'b',
  Image: './img/products/f1-2.webp',
  name: 'cooton astronot hoodie',
  priceCent: 4700,
  rating: {
    star: 4,
    brand: 'Addidas'
  },
  go: 'fade-left '
},{
  id: 'c',
  Image: './img/products/f1-3.webp',
  name: 'cooton astronot hoodie',
  priceCent: 6700,
  rating: {
    star: 4,
    brand: 'Dior'
  },
  go: 'fade-right' 
},{
  id: 'd',
  Image: './img/products/f1-4.webp',
  name: 'cooton astronot hoodie',
  priceCent: 3700,
  rating: {
    star: 5,
    brand: 'lauviton'
  },
  go: 'fade-right'
},{
  id: 'e',
  Image: './img/products/f1-5.webp',
  name: 'cooton astronot hoodie',
  priceCent: 7800,
  rating: {
    star: 4.5,
    brand: 'Dior'
  }, 
  go: 'fade-left' 
},{
  id: 'f',
  Image: './img/products/f1-6.webp',
  name: 'cooton astronot hoodie',
  priceCent: 1700,
  rating: {
    star: 3.5,
    brand: 'Fendi'
  }, 
  go: 'fade-left' 
},{
  id: 'g',
  Image: './img/products/f1-7.webp',
  name: 'cooton astronot hoodie',
  priceCent: 5700,
  rating: {
    star: 5,
    brand: 'Adidas'
  },
  go: 'fade-right'
},{
  id: 'h',
  Image: './img/products/f8.jpg',
  name: 'cooton astronot hoodie',
  priceCent: 8700,
  rating: {
    star: 4.5,
    brand: 'Gucchi'
  },
  go: 'fade-right'
},{
  id: 'i',
  Image: './img/products/n1-1.jpg',
  name: 'cooton astronot hoodie',
  priceCent: 5700,
  rating: {
    star: 4.5,
    brand: 'Gucchi'
  },  go: ' fade-right'
},{
  id: 'j',
  Image: './img/products/n1-2.jpg',
  name: 'cooton astronot hoodie',
  priceCent: 1600,
  rating: {
    star: 5,
    brand: 'Dior'
  },
  go: 'fade-right '
},{
  id: 'k',
  Image: './img/products/n1-3.webp',
  name: 'cooton astronot hoodie',
  priceCent: 5700,
  rating: {
    star: 4.5,
    brand: 'Dior'
  },
  go: 'fade-left '
},{
  id: 'l',
  Image: './img/products/n1-4.webp',
  name: 'cooton astronot hoodie',
  priceCent: 7600,
  rating: {
    star: 4.5,
    brand: 'Dior'
  },
  go:  'fade-left '
},{
  id: 'm',
  Image: './img/products/n1-5.webp',
  name: 'cooton astronot hoodie',
  priceCent: 5000,
  rating: {
    star: 5,
    brand: 'Dior'
  }, 
  go: 'fade-right'
},{
  id: 'n',
  Image: './img/products/n1-6.webp',
  name: 'cooton astronot hoodie',
  priceCent: 4800,
  rating: {
    star: 4.5,
    brand: 'balaciaga'
  },
  go:' fade-right'
},{
  id: 'o',
  Image: './img/products/n1-7.webp',
  name: 'cooton astronot hoodie',
  priceCent: 7900,
  rating: {
    star: 4.5,
    brand: 'fendi'
  },
  go: 'fade-left '
},{
  id: 'p',
  Image: './img/products/n1-8.webp',
  name: 'cooton astronot hoodie',
  priceCent: 1700,
  rating: {
    star: 4.5,
    brand: 'aspotr'
  },
  go: 'fade-left' 
}];

document.addEventListener('DOMContentLoaded',()=>{

  document.querySelector('#js-fff').innerHTML = getItem(0,8);
  document.querySelector('#js-see').innerHTML =getItem(8,16) ;
  

})

function getItem(second,paramss) {
  let sumHtml = ``;
for (let index = second; index  < paramss; index++) {
  const item = product[index];
  
  sumHtml +=getHTML(item);

}

return sumHtml
} 

// shop and home use same genated html


export function getHTML(item){
let sumHtml =`<div class="box" data-aos="${item.go}"><div class="img"><img src="${item.Image}" alt=""></div>
<p>${item.rating.brand}</p>
<div class="name">${item.name}</div>
<div class="rating"><img src="./img/ratings/rating-${item.rating.star * 10}.png" alt=""></div>
<div class="price">
  <div class="money">$${item.priceCent}</div>
  <div class="cart"><i class=' car bx bx-cart-download'></i></div>
</div></div>`;

return sumHtml



}

