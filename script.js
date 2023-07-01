let pics = [
    "images/kari-shea-FilM6ng7VGQ-unsplash.jpg",
    "/images/janko-ferlic-ou1e40Ekub8-unsplash.jpg",
    "/images/tran-mau-tri-tam-eHHKZ41Kh74-unsplash.jpg",
    "/images/superloop-wWxphrJJVfM-unsplash.jpg"
]

let btn = document.querySelector("button");
let img = document.querySelector("img");
let counter = 0;

btn.addEventListener("click",function(){

        img.src = pics[counter];
        counter += 1;

        if(counter === pics.length) counter = 0;
    
});
