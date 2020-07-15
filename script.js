
// console.log("JavaScript");


// Setting _______________________________________
document.querySelector('.toggle .fa-gear').onclick=function(){
    document.querySelector(".setting").classList.toggle("open");
    this.classList.toggle("fa-spin");
};
//Colors______________________________________________

let color_options=document.querySelectorAll(".options_list li");
color_options.forEach(li  => {
   li.addEventListener("click" ,(event)=>{
        // console.log(event.target.dataset.color);
        document.documentElement.style.setProperty("--article-color" ,event.target.dataset.color);
        localStorage.setItem("options_list",event.target.dataset.color);
    });

});

//local storage
let local_storage=localStorage.getItem("options_list");
if (local_storage !==null){
    //console.log(local_storage);
    document.documentElement.style.setProperty("--article-color",local_storage);

}
// Landing____________________________

let landing = document.querySelector(".landing");
let array = [
    "./img/sea-1337565_1920.jpg",
    "./img/verena.jpg",
    "./img/landscape-3369360_1920.jpg",
    "./img/sven-brandsma-5FmI4_iFVQk-unsplash.jpg"
];
var stop_time=function () {
    let random=Math.floor(Math.random()*array.length);
    landing.style.backgroundImage='url('+array[random]+')';
};

//stop setInterval
let stop=document.getElementById("stop");


        if(stop.textContent==="Stop"){
            console.log("yes");
            setInterval(stop_time,1000);
        }else {

            setTimeout(stop_time);

        }

// carouse_______________________________________


document.getElementById("certificates_a").addEventListener("click", function(){
    window.scrollTo(610,600);

});


$('.carousel').carousel({
    interval: 10000
});