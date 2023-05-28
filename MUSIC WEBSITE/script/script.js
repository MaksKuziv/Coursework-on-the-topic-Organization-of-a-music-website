//Javascript of responsive navigation menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});


//Javascript for video slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");

var sliderNav = function(manual){
  btns.forEach((btn) =>{
    btn.classList.remove("active");
  });

  slides.forEach((slide) =>{
    slide.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

// Кнопка плеєра на головній сторінці
let song = document.getElementById("song");
let icon = document.getElementById("icon-play");

icon.onclick = function(){
    if(song.paused){
        song.play();
        icon.src = "image/main-page/pause.png";
    }else{
        song.pause();
        icon.src = "image/main-page/play.png"
    }
}