
// console.log("JavaScript");

// Landing

let landing = document.querySelector(".landing");

let array = [
    "./img/sea-1337565_1920.jpg",
    "./img/verena.jpg",
    "./img/landscape-3369360_1920.jpg",
    "./img/sven-brandsma-5FmI4_iFVQk-unsplash.jpg"
];

setInterval(function () {
    let random=Math.floor(Math.random()*array.length);
    landing.style.backgroundImage='url('+array[random]+')';
},5000);


$('.carousel').carousel({
    interval: 10000
});

function my_function(){



}

