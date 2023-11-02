// active page

document
  .querySelector(".links")
  .children[0].children[1].children[0].classList.remove("active");
document
  .querySelector(".links")
  .children[0].children[1].children[2].classList.add("active");

document.querySelectorAll(".drop-content a")[1].classList.remove("active");

document.querySelectorAll(".drop-content a")[3].classList.add("active");

// active page

window.addEventListener("load", function () {
  const headerImages = document.querySelectorAll(".header .images-box div");
  headerImages.forEach((e) => (e.style.scale = "1"));
  $(".token").css("scale", "1");
  $(".token").css("opacity", "1");
  $(".progress span").css("width", "75%");
});

// scroll events

const moveUp = function (e) {
  if (scrollY >= e.offsetTop - document.documentElement.clientHeight + 150) {
    e.style.translate = "0px 0px";
    e.style.opacity = "1";
  } else if (
    scrollY <=
    e.offsetTop - document.documentElement.clientHeight + 100
  ) {
    e.style.translate = "0px 100px";
    e.style.opacity = "0";
  }
};

const moveDown = function (e) {
  if (scrollY >= e.offsetTop - document.documentElement.clientHeight + 150) {
    e.style.translate = "0px 0px";
    e.style.opacity = "1";
  } else if (
    scrollY <=
    e.offsetTop - document.documentElement.clientHeight + 100
  ) {
    e.style.translate = "0px -100px";
    e.style.opacity = "0";
  }
};

const moveRight = function (e) {
  if (scrollY >= e.offsetTop - document.documentElement.clientHeight + 150) {
    e.style.translate = "0% 0px";
    e.style.opacity = "1";
  } else if (
    scrollY <=
    e.offsetTop - document.documentElement.clientHeight + 100
  ) {
    e.style.translate = "-100% 0px";
    e.style.opacity = "0";
  }
};

const moveLeft = function (e, top) {
  if (scrollY >= e.offsetTop - document.documentElement.clientHeight + 150) {
    e.style.translate = "0% 0px";
    e.style.opacity = "1";
  } else if (
    scrollY <=
    e.offsetTop - document.documentElement.clientHeight + 100
  ) {
    e.style.translate = "100% 0px";
    e.style.opacity = "0";
  }
};

const scale = function (e) {
  if (scrollY >= e.offsetTop - document.documentElement.clientHeight + 150) {
    e.style.scale = "1";
    e.style.opacity = "1";
  } else if (
    scrollY <=
    e.offsetTop - document.documentElement.clientHeight + 100
  ) {
    e.style.scale = "0";
    e.style.opacity = "0";
  }
};

const rotate3D = function (e) {
  if (scrollY >= e.offsetTop - document.documentElement.clientHeight + 150) {
    e.style.transform = "rotate3d(1, 1, 1, 0deg)";
    e.style.opacity = "1";
  } else if (
    scrollY <=
    e.offsetTop - document.documentElement.clientHeight + 100
  ) {
    e.style.transform = "rotate3d(1, 1, 1, 720deg)";
    e.style.opacity = "0";
  }
};

const rotate360 = function (e) {
  if (scrollY >= e.offsetTop - document.documentElement.clientHeight + 150) {
    e.style.rotate = "0deg";
    e.style.opacity = "1";
  } else if (
    scrollY <=
    e.offsetTop - document.documentElement.clientHeight + 100
  ) {
    e.style.rotate = "360deg";
    e.style.opacity = "0";
  }
};

window.addEventListener("scroll", function () {
  // animate main text
  for (let e of mainText) {
    for (let e2 of e.children) {
      moveUp(e2);
    }
  }
  // end animate main text
  // animate images box
  scale(imagesBox[0]);
  scale(imagesBox[1].children[0]);
  scale(imagesBox[1].children[1]);
  // end animate images box
  // add animate token information
  scale(this.document.querySelector(".information"));
  // end animate token information
  // add road map animate
  aboveBoxes.forEach(function (e) {
    if (scrollY >= swiperHeight.offsetTop - 700) {
      e.style.translate = "0px 0px";
      e.style.opacity = "1";
    } else if (scrollY <= swiperHeight.offsetTop - 700) {
      e.style.translate = "0px -100px";
      e.style.opacity = "0";
    }
  });
  belowBoxes.forEach(function (e) {
    if (scrollY >= swiperHeight.offsetTop - 400) {
      e.style.translate = "0px 0px";
      e.style.opacity = "1";
    } else if (scrollY <= swiperHeight.offsetTop - 400) {
      e.style.translate = "0px 100px";
      e.style.opacity = "0";
    }
  });
  marks.forEach(function (e) {
    if (scrollY >= swiperHeight.offsetTop - 350) {
      e.style.scale = "1";
      e.style.opacity = "1";
    } else if (scrollY <= swiperHeight.offsetTop - 350) {
      e.style.scale = "0";
      e.style.opacity = "0";
    }
  });
  // end road map animate
  // add animate sqaure shapes
  squareShapes.forEach((e) => rotate360(e));
  squareShapes.forEach((e) => scale(e));
  // end animate sqaure shapes
  // add slider animate
  moveUp(swiperSlide);
  // end slider animate
  // add slider animate
  moveUp(testimonialsSections);
  // end slider animate
  // animate portfolio cards
  porfolioCards.forEach((e) =>
    e.classList.contains("up") ? moveUp(e) : moveDown(e)
  );
  // end animate portfolio cards
  // add animate newsletter
  moveUp(this.document.querySelector(".newsletter"));
  // end animate newsletter
  // add register animate
  moveDown(this.document.querySelector(".register"));
  if (scrollY >= registerSection.offsetTop - 550) {
    registerCount.forEach(function (e) {
      let goal = e.dataset.goal;
      let count = setInterval(function () {
        if (e.textContent == goal) {
          clearInterval(count);
        } else {
          e.textContent++;
        }
      }, 3000 / goal);
    });
  } else if (scrollY <= registerSection.offsetTop - 750) {
    registerCount.forEach((e) => (e.textContent = 0));
  }
  // end register animate
  // add questions animate
  questionsBoxes.forEach((e) => moveUp(e));
  // end questions animate
  // add blog animate
  blogBoxes.forEach((e) => moveUp(e));
  // end blog animate
});
// end scroll events

// add style sheet

const addStyle = function () {
  let style = `<style>
  * {
  box-sizing: border-box;
  margin: 0 !important;
  padding: 0 !important;
}

body {
  font-family: "Roboto";
  background-image: url(../images/bg-element-3.jpg);
  background-repeat: repeat;
  background-size: cover;
  color: white;
  scroll-behavior: smooth;
}

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar-thumb {
  border-radius: 50px;
  background-color: var(--hover-color);
}

::-webkit-scrollbar {
  transition: 1s;
  width: 5px;
  background-color: rgb(33 12 105);
}

::-webkit-scrollbar:hover {
  width: 10px;
}

:root {
  --hover-color: rgb(253 86 42);
}

 .links .social:nth-of-type(1) {
        padding-left: 20px !important;
        border-left: 1px solid rgba(255, 255, 255, 0.438);
    }
    .links .social {
        transition: 0.2s;
    }

    .links .social:hover {
        color: #ff5900 !important;
    }

.button.main {
  transition: 0s;
}

.button.main > div {
  left: 0;
  top: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  background: white;
  background-color: var(--hover-color);
  z-index: -2;
}

.button.main:hover {
  color: var(--hover-color);
}

.button.main::before {
  background-color: white;
  z-index: -1;
}

.button.main::after {
  background-color: white;
  z-index: -1;
}

.button.main:hover::after {
  display: block;
  animation: right 0.8s forwards ease-out;
}

.button.main:hover::before {
  display: block;
  animation: left 0.8s forwards ease-out;
}

.main-text h2:first-of-type {
  font-size: 25px;
}
.main-text h1 {
  margin-bottom: 30px !important;
}
.main-text h2:last-of-type {
  line-height: 1.8;
}

.header .images-box div {
    scale: 0;
  transition: 2s;
  animation: box-animation 1.5s infinite alternate linear;
}

.about-us .images-box img {
  transition: 1s;
  animation: box-animation 1.5s infinite alternate linear;
}

@keyframes box-animation {
  0% {
    translate: 0 0;
  }
  100% {
    translate: 0 30px;
  }
}

 .square-shapes div {
  position: relative;
  max-width: 380px;
  min-width: 290px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 20px;
  transition: 1s;
}

.square-shapes .item-title {
  opacity: 0;
  transition: 0.6s;
  min-width: 80%;
  overflow: hidden;
  background-color: #f9542a;
  border-radius: 15px;
  padding: 25px 0px !important;
  text-align: center;
  left: 50%;
  translate: -50% 50%;
  bottom: 50px;
  position: absolute;
}

.square-shapes img {
  transition: 0.6s;
}

.square-shapes div:hover img {
  scale: 1.1;
}

.square-shapes div:hover .item-title {
  opacity: 1;
  translate: -50% -15%;
}

 .road-map .swiper {
        width: 100%;
        height: 100%;
        overflow-y: visible;
        overflow-x: clip;
    }

  .road-map  .swiper-slide {
        text-align: center;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 1s;
    }

  .road-map .swiper-slide img {
        display: block;
        height: 270px;
    }

   .road-map .swiper-button-next,
   .road-map .swiper-button-prev {
        position: absolute;
        color: #f9542a;
        top: 50%;
        translate: 0 -50%;
    }

    @media (max-width: 1405px) {

       .road-map .swiper-button-next,
       .road-map .swiper-button-prev {
            display: none;
        }
    }

   .road-map .swiper-button-next {
        right: -100px;
    }

  .road-map  .swiper-button-prev {
        left: -100px;
    }

   .road-map .swiper-button-next.swiper-button-disabled,
   .road-map .swiper-button-prev.swiper-button-disabled {
        color: #ffffff;
        opacity: .35;
        cursor: auto;
        pointer-events: none;
    }

    .slider-section{
   transition: 1s;
}

      .slider-section  .swiper {
            margin-top: 70px !important;
            margin-left: auto;
            margin-right: auto;
            position: relative;
            /* overflow: hidden; */
            overflow-y: visible;
            list-style: none;
            padding: 0;
            z-index: 1;
            display: block;
            transition: 1s;
        }

       .slider-section .swiper-pagination-bullet {
            position: relative;
            width: 10px;
            height: 10px;
            display: inline-block;
            border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
            background: rgb(233, 233, 233);
            opacity: 0.3;
            transition: 1s;
        }

      .slider-section  .swiper-pagination-bullet-active {
            opacity: var(--swiper-pagination-bullet-opacity, 1);
            background: white;
        }

      .slider-section  .swiper-pagination-bullet-active::after {
            position: absolute;
            content: "";
            width: 25px;
            height: 25px;
            background: transparent;
            border-radius: 50%;
            top: 50%;
            left: 50%;
            translate: -50% -50%;
            border: 2px solid rgb(255, 81, 0);
        }

       .slider-section .swiper-pagination {
            position: absolute;
            text-align: center;
            transition: 0.3s opacity;
            transform: translate3d(0, 0, 0);
            z-index: 10;
            translate: 0px 50px;
        }

      .slider-section  .swiper-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            z-index: 1;
            display: flex;
            transition-property: transform;
            transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
            box-sizing: content-box;
            gap: 30px !important;
        }

       .slider-section .swiper-container {
            width: 100%;
            height: 100%;
            display: flex !important;
            gap: 15px;
        }

      .slider-section  .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #4526b1;
            border-radius: 15px;
            height: 100%;
            cursor: pointer;
            max-width: 325px;
            transition: 1s;
        }
        

      .slider-section  .swiper-slide img {
            position: relative;
            display: block;
            width: 100%;
            object-fit: cover;
            border-radius: 15px;
            z-index: 0;
            transition: 1s;
        }

      .slider-section  .swiper-slide h3{
          transition: 0.3s;
        }

      .slider-section  .swiper-slide h3:hover {
          color: #fd562a;
        }

      .slider-section  .slide-image {
            position: relative;
            width: 85%;
            overflow: hidden;
            transition: 1s;
        }

       .slider-section .slide-image div {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            border-radius: 50%;
            border: 150px solid white;
            border-color: transparent transparent rgba(255, 255, 255, 0.75) transparent;
            z-index: 1;
            translate: 30% 55%;
            rotate: 0deg;
            transition: 0.7s;
            opacity: 0;
        }

        @media (max-width: 1400px){
         .slider-section .slide-image div {
            top: 100%;
            left: 100%;
            translate: -48% -40%;
          }
        }

      .slider-section  .slide-image div i {
            transition: 0.5s ease-in;
            font-size: 22px;
            opacity: 0;
        }

      .slider-section  .slide-image div i:hover {
            color: rgb(255, 96, 16) !important;
        }

      .slider-section  .swiper-slide:hover .slide-image div {
            rotate: -225deg;
            opacity: 1;
        }

      .slider-section  .swiper-slide:hover .slide-image div i {
            opacity: 1;
        }

      .slider-section  .slide-image div i:first-child {
            transition-delay: 0.2s;
        }

      .slider-section  .slide-image div i:nth-child(2) {
            transition-delay: 0.3s;
        }

      .slider-section  .slide-image div i:last-child {
            transition-delay: 0.4s;
        }

     .slider-section   .swiper-slide:hover .slide-image div i:first-child {
            translate: 15px 100px !important;
        }

     .slider-section   .swiper-slide:hover .slide-image div i:nth-child(2) {
            translate: -29px 80px !important;
        }

      .slider-section  .swiper-slide:hover .slide-image div i:last-child {
            translate: -70px 40px !important;
        }

        .cards .card {
  background-color: #4526b1;
  border-radius: 20px;
  cursor: pointer;
  transition: 1s;
  will-change: transform;
}
.cards .card h2 {
  line-height: 1.8;
}

.cards a {
  transition: 0.5s;
  color: white;
  text-decoration: none;
  font-size: 25px;
  font-weight: 600;
  cursor: pointer;
}

.cards a:hover {
  color: var(--hover-color);
}

.portfolio .card {
  padding: 50px 35px !important;
  transition: 1s;
  cursor: default;
}

.portfolio .card > div {
  transition: 1s;
}

 .swing {
        transition: 1s;
        animation: swing ease-in-out 1s infinite alternate;
    }

    @keyframes swing {
        20% {
            transform: rotate3d(0, 0, 1, 15deg);
        }

        40% {
            transform: rotate3d(0, 0, 1, -10deg);
        }

        60% {
            transform: rotate3d(0, 0, 1, 5deg);
        }

        80% {
            transform: rotate3d(0, 0, 1, -5deg);
        }

        100% {
            transform: rotate3d(0, 0, 1, 0deg);
        }
    }

       .testimonials-section {
        transition: 1s;
    }

    .testimonials-section .swiper {
        margin-top: 70px !important;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow-y: visible;
        list-style: none;
        padding: 0;
        z-index: 1;
        display: block;
        transition: 1s;
    }

    .testimonials-section .swiper-pagination-bullet {
        position: relative;
        width: 10px;
        height: 10px;
        display: inline-block;
        border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
        background: rgb(233, 233, 233);
        opacity: 0.3;
        transition: 1s;
    }

    .testimonials-section .swiper-pagination-bullet-active {
        opacity: var(--swiper-pagination-bullet-opacity, 1);
        background: white;
    }

    .testimonials-section .swiper-pagination-bullet-active::after {
        position: absolute;
        content: "";
        width: 25px;
        height: 25px;
        background: transparent;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        border: 2px solid rgb(255, 81, 0);
    }

    .testimonials-section .swiper-pagination {
        position: absolute;
        text-align: center;
        transition: 0.3s opacity;
        transform: translate3d(0, 0, 0);
        z-index: 10;
        translate: 0px 50px;
    }

    .testimonials-section .swiper-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        transition-property: transform;
        transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
        box-sizing: content-box;
        gap: 20px;
    }

    .testimonials-section .swiper-container {
        width: 100%;
        height: 100%;
        display: flex !important;
        gap: 15px;
    }

    .testimonials-section .swiper-slide {
        text-align: center;
        font-size: 18px;
        display: flex;
        background-color: #4526b1;
        border-radius: 15px;
        height: 100%;
        transition: 1s;
        width: 32% !important;
        padding: 60px 50px !important;
        text-align: left;
    }

    @media (max-width: 800px) {
        .testimonials-section .swiper-slide {
            width: 48% !important;
        }
    }

    @media (max-width: 500px) {
        .testimonials-section .swiper-slide {
            width: 96% !important;
        }
    }


    .testimonials-section .swiper-slide img {
        position: relative;
        display: block;
        width: 100%;
        object-fit: cover;
        border-radius: 15px;
        z-index: 0;
        transition: 1s;
    }

    .testimonials-section .slide-image {
        position: relative;
        width: 85%;
        overflow: hidden;
        transition: 1s;
    }

    
          .questions-box {
      transition: 1s;
     }

     .questions-box h1 {
        font-size: 23px !important;
    }

    .questions-box h1 span {
        font-weight: 300;
    }

    .questions-box p {
        display: none;
        margin-bottom: 20px !important;
    }
    
      .questions-options h2 {
        transition: 0.3s;
        cursor: pointer;
    }

    .questions-options h2.active {
        color: rgb(253 86 42);
    }

    .questions-content {
        visibility: hidden;
        transition: 0.2s linear;
        opacity: 0;
    }


    .questions-content.show {
        visibility: visible;
        opacity: 1;
    }
     
   .social-icon {
        position: relative;
        overflow: hidden;
        transition: 0.7s all;
        z-index: 1;
        cursor: pointer;
    }

    .social-icon i {
        transition: 0.7s;
    }

    .social-icon:after {
        position: absolute;
        content: "";
        bottom: 0;
        left: 50%;
        translate: -50% 0;
        height: 0%;
        width: 100%;
        z-index: -1;
        transition: 0.7s;
    }

    .social-icon1:after {
        background-color: #55acee;
    }

    .social-icon2:after {
        background-color: #2374e1;
    }

    .social-icon3:after {
        background-color: #0077b5;
    }

    .social-icon4:after {
        background-color: #cc0000;
    }

    .social-icon:hover i {
        transform: rotateY(360deg);
    }

    .social-icon:hover::after {
        height: 100%;
    }

    .footer-links h3:hover {
        color: #fd544f;
    }

      .footer a {
        color: white;
        transition: .3s;
        font-size: 18px;
    }

    .footer a:hover {
        color: #fd544f;
    }
    </style>`;

  $(style).insertAfter(document.head);
};

addStyle();

// end style sheet

// add header

const addHeader = function () {
  let html = ` <div class="container-xxl header mt-5 p-xxl-5 py-5 m-auto">
        <div class="px-xxl-5 px-4 gap-5 w-100 d-flex flex-wrap align-items-center" style="margin-top: 160px !important;    z-index: 0;
    position: relative;">
            <div class="main-text mb-5 col-xl-7 d-flex flex-column gap-4">
                <h2 class="pb-4" style="transition: 1s"><span
                        class="pb-4 border-5 border-bottom border-danger">We</span>
                    are
                    Monteno NFT</h2>
                <h1 style="font-size: 60px;transition: 1s;line-height: 1.2;margin-bottom: 10px !important">Collect Next <br> Generation NFTs <br>
                    Today
                </h1>
                <h2 style="font-weight: 500;transition: 1s;font-size: 23px;">Sed ut perspiciatis unde omnis iste natus
                    <br> error sit
                    voluptatem accusantium
                </h2>
                <button class="button main align-self-start mt-5"
                    style="padding: 20px 50px !important;transition: 1s; font-size: 18px;font-weight: 500;border: none">Get
                    Connected
                    <div></div>
                </button>
            </div>
            <div class="token col-4 flex-grow-1 p-5 d-flex flex-column gap-5 align-self-start"
                style="background-color: #4526b1;border-radius: 20px;transition: 2s;scale: 0.8;opacity: 0.3;">
                <h1 class="mt-5 ms-md-5">Token Sale Ends In
                </h1>
                <div class="d-flex py-5 flex-wrap justify-content-center gap-5 align-self-center">
                    <div class="d-flex flex-column gap-3 align-items-center">
                        <h1>33</h1>
                        <p style="font-size: 19px;">Days</p>
                    </div>
                    <div class="d-flex flex-column gap-3 align-items-center">
                        <h1>03</h1>
                        <p style="font-size: 19px;">Hours</p>
                    </div>
                    <div class="d-flex flex-column gap-3 align-items-center">
                        <h1 class="minutes">0</h1>
                        <p style="font-size: 19px;">Minutes</p>
                    </div>
                    <div class="d-flex flex-column gap-3 align-items-center">
                        <h1 class="seconds">0</h1>
                        <p style="font-size: 19px;">Seconds</p>
                    </div>
                </div>
                <div class="d-flex px-md-5 flex-column w-100 gap-4">
                    <div class="progress position-relative w-100"
                        style="background-color: transparent; border-radius:20px; border: 1px solid rgba(255, 255, 255, 0.435);height: 10px;">
                        <span class="position-absolute h-100"
                            style="background-color: white; border-radius: 20px;transition: 1.8s linear;width: 0%;"></span>
                    </div>
                    <div class="w-100 d-flex justify-content-between">
                        <p style="color: rgb(177, 176, 176);font-size: 16px"><span
                                style="font-weight: 900; color: white;">$18.090</span> Pledget
                        </p>
                        <p style="color: rgb(177, 176, 176); font-size: 16px;"><span
                                style="font-weight: 900; color: white;">$35.090
                            </span> Goal
                        </p>
                    </div>
                    <button class="button mb-5 main align-self-start mt-5"
                        style="padding: 20px 50px !important;transition: 1s; font-size: 18px;font-weight: 500;border: none;z-index: 1;">Purchase
                        Now
                        <div></div>
                    </button>
                </div>
            </div>
        </div>
    </div>`;

  document.querySelector(".nav").insertAdjacentHTML("afterend", html);
};

addHeader();

const minutes = document.querySelector(".minutes");
minutes.textContent = 59;
const seconds = document.querySelector(".seconds");
seconds.textContent = 59;
setInterval(function () {
  if (seconds.textContent == 1) {
    seconds.textContent = 59;
    minutes.textContent--;
  } else {
    seconds.textContent--;
  }
}, 1000);

// end header

// add about us section

const addAboutUs = function () {
  let html = `<div class="container-xxl about-us mt-5 p-xxl-5 py-5 m-auto">
        <div class="px-xxl-5 px-4 w-100 d-flex gap-5 flex-wrap-reverse justify-content-center align-items-center"
            style="margin-top: 100px !important;">
            <div class="images-box d-flex flex-wrap justify-content-center justify-content-xl-start flex-grow-1 gap-5">
                <div class="d-flex align-self-center justify-content-center align-items-center"
                    style="height: 450px;transition: 1s;width: 315px;border-radius: 20px;background-color:#7153d9;translate: 0px">
                    <img width="200px" src="../images/item-08.png" alt="">
                </div>
                <div class="d-flex gap-5 flex-column" style="transition: 1s;">
                    <div class="d-flex ms-5 justify-content-center align-items-center"
                        style="height: 150px;transition: 1s;width: 130px;border-radius: 20px;background-color:#4526b1">
                        <img width="80px" src="../images/item-09.png" alt="">
                    </div>
                    <div class="d-flex mt-5 justify-content-center align-items-center"
                        style="height: 320px;transition: 1s;width: 270px;border-radius: 20px;background-color:#4c22e1;translate: -40px">
                        <img src="../images/item-10.png" alt="">
                    </div>
                </div>
            </div>
            <div class="main-text mb-5 col-xl-5 d-flex flex-column gap-4">
                <h2 class="pb-4" style="transition: 1s;"><span class="pb-4 border-5 border-bottom border-danger" >Abo</span>ut Us</h2>
                <h1 style="font-size: 45px;transition: 1s;line-height: 1.2;">Hight Quality NFT Collections
                </h1>
                <h2 style="font-weight: 500;transition: 1s;font-size: 19px;">Sed ut perspiciatis unde omnis iste natus enim ad minim
                    veniam, quis nostrud exercit
                    <br><br> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint
                    occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum
                    velit esse cillum
                    dolore eu fugiat nulla pariatu epteur sint occaecat
                </h2>
                <button class="button main align-self-start mt-5"
                    style="padding: 20px 50px !important;transition: 1s; font-size: 18px;font-weight: 500;border: none">More About Us
                    <div></div>
                </button>
            </div>
        </div>
    </div>`;

  document.querySelector(".header").insertAdjacentHTML("afterend", html);
};

addAboutUs();

const imagesBox = Array.from(
  document.querySelector(".about-us .images-box").children
);

// end about us section

// add token information section

const addTokenInformation = function () {
  let html = ` <div class="container-xxl token-information mt-5 p-xxl-5 py-5 m-auto">
        <div class="px-xxl-5 px-4 gap-5 w-100 d-flex flex-wrap align-items-center" style="margin-top: 80px !important;">
            <div class="main-text mb-5 col-xl-7 d-flex flex-column gap-4">
                <h2 class="pb-4" style="transition: 1s"><span
                        class="pb-4 border-5 border-bottom border-danger">To</span>ken Information
                </h2>
                <h1 style="font-size: 48px;transition: 1s;line-height: 1.2;">Here’s what you need <br> to know about NFT
                </h1>
                <h2 style="font-weight: 500;transition: 1s;font-size: 21px;">Sed ut perspiciatis unde omnis iste natus
                    <br> error sit
                    voluptatem accusantium
                </h2>
                <button class="button main align-self-start mt-5"
                    style="padding: 20px 50px !important;transition: 1s; font-size: 18px;font-weight: 500;border: none">Buy
                    Token
                    <div></div>
                </button>
            </div>
            <div class="col-4 information flex-grow-1 p-5 d-flex gap-5 align-self-start align-items-start justify-content-center"
                style="background-color: #4526b1;border-radius: 20px;transition: 2s; padding: 60px 0px !important;">
                <div class="d-flex gap-5 flex-column">
                    <div class="d-flex pb-4 gap-4 align-items-center">
                        <i class="fa-regular fa-user" style="color: #d34b3c;font-size: 22px;"></i>
                        <h2 style="font-size: 18px;">Name :</h3>
                    </div>
                    <div class="d-flex pb-4 gap-4 align-items-center">
                        <i class="fa-solid fa-cube" style="color: #d34b3c;font-size: 22px;"></i>
                        <h2 style=" font-size: 18px;">Platform :</h3>
                    </div>
                    <div class="d-flex pb-4 gap-4 align-items-center">
                        <i class="fa-solid fa-cube" style="color: #d34b3c;font-size: 22px;"></i>
                        <h2 style=" font-size: 18px;">Total Supply :</h3>
                    </div>
                    <div class="d-flex pb-4 gap-4 align-items-center">
                        <i class="fa-solid fa-cube" style="color: #d34b3c;font-size: 22px;"></i>
                        <h2 style=" font-size: 18px;">ICO supply :</h3>
                    </div>
                    <div class="d-flex pb-4 gap-4 align-items-center">
                        <i class="fa-solid fa-tags" style="color: #d34b3c;font-size: 22px;"></i>
                        <h2 style=" font-size: 18px;">Token Price :</h3>
                    </div>
                </div>
                <div class="d-flex gap-5 flex-column">
                    <p class="pb-4" style="font-size: 17px;">Al Mahmud
                    </p>
                    <p class="pb-4" style="font-size: 17px;">Monteno
                    </p>
                    <p class="pb-4" style="font-size: 17px;">100'000tokens
                    </p>
                    <p class="pb-4" style="font-size: 17px;">60'000 tokens
                    </p>
                    <p class="pb-4" style="font-size: 17px;">0.25€ / 0.29 USD
                    </p>
                </div>
            </div>
        </div>
    </div>`;

  $(html).insertAfter(".about-us");
};

addTokenInformation();

// end token information section

// add road map section

const addRoadMap = function () {
  let html = ` <div class="overflow-hidden w-100 mt-5 p-xxl-5 py-5 m-auto">
        <div class="position-relative">
            <h1
                style="position: absolute; top: 0; left: 50%; translate: -50% 0;font-size: 250px;color: transparent;-webkit-text-stroke: 3px #311686;font-weight: 900;letter-spacing: 25px;text-wrap: nowrap;">
                ROAD MAP
            </h1>
        </div>
        <div class="px-xxl-5 px-4 w-100 d-flex gap-5 flex-wrap justify-content-center align-items-center"
            style="margin-top: 100px !important;">
            <div class="main-text text-center mb-5 col-12 justify-content-center d-flex flex-column gap-4">
                <h2 class="pb-4" style="transition: 0.5s;">Roa<span class="pb-4 border-5 border-bottom border-danger">d
                    </span>Map
                </h2>
                <h1 class="mb-4" style="font-size: 45px;transition: 1s;line-height: 1.2;">The Journey of
                NFT Portfolio
                </h1>
            </div>
        </div>
    </div>
    <div class="container-xxl road-map p-xxl-5 py-5 m-auto">
        <div class="w-100 px-3 px-xxl-5 d-flex flex-column gap-5" style="margin-top: 20px !important;">
            <div class="swiper mySwiper-road mb-5 d-none d-sm-block">
                <div class="swiper-wrapper d-flex flex-row">
                    <div class="swiper-slide above-box position-relative d-flex col-3 flex-grow-1">
                        <div class="d-flex p-5 gap-4 text-center flex-column"
                            style="background-color: #4526b1; border-radius: 15px;">
                            <h2>Idea Generation</h2>
                            <p style="font-size: 18px; line-height: 1.8;">Oficia dese runt molit anim iesod est labo
                                met
                                conse ctetur
                                adipi</p>
                        </div>
                        <div class="position-absolute "
                            style="top: 100%; left: 50%;translate: -50%;width: 4px;height: 94px;background-color: white;">
                            <div class="position-absolute d-flex justify-content-center align-items-center mark"
                                style="width:35px;height: 35px;border-radius:50%;background-color: white;top: 80%; left: 50%;translate: -50%;transition: 1s;">
                                <i class="fa-solid fa-check" style="color: #ff5900;"></i>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide above-date d-flex align-self-end col-2 flex-grow-1">
                        <div class=" flex-grow-1 text-center">
                            <p style="font-size: 16px; line-height: 1.8;color: #f9542a;">February 01, 2022</p>
                        </div>
                    </div>
                    <div class="swiper-slide above-box position-relative d-flex col-3 flex-grow-1">
                        <div class=" d-flex p-5 gap-4 text-center flex-column"
                            style="background-color: #4526b1; border-radius: 15px;">
                            <h2>Development</h2>
                            <p style="font-size: 18px; line-height: 1.8;">Oficia dese runt molit anim iesod est labo
                                met
                                conse ctetur
                                adipi</p>
                        </div>
                        <div class="position-absolute "
                            style="top: 100%; left: 50%;translate: -50%;width: 4px;height: 94px;background-color: white;">
                            <div class="position-absolute d-flex justify-content-center align-items-center mark"
                                style="width:35px;height: 35px;border-radius:50%;background-color: white;top: 80%; left: 50%;translate: -50%;transition: 1s;">
                                <div style="width: 45%;height: 45%;border-radius:50%;background-color:#f9542a;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide above-date d-flex align-self-end col-2 flex-grow-1">
                        <div class=" flex-grow-1 text-center">
                            <p style="font-size: 16px; line-height: 1.8;color: #f9542a;">February 01, 2022</p>
                        </div>
                    </div>
                    <div class="swiper-slide above-box position-relative d-flex col-3 flex-grow-1">
                        <div class="d-flex p-5 gap-4 text-center flex-column"
                            style="background-color: #4526b1; border-radius: 15px;">
                            <h2>Idea Generation</h2>
                            <p style="font-size: 18px; line-height: 1.8;">Oficia dese runt molit anim iesod est labo
                                met
                                conse ctetur
                                adipi</p>
                        </div>
                        <div class="position-absolute "
                            style="top: 100%; left: 50%;translate: -50%;width: 4px;height: 94px;background-color: white;">
                            <div class="position-absolute d-flex justify-content-center align-items-center mark"
                                style="width:35px;height: 35px;border-radius:50%;background-color: white;top: 80%; left: 50%;translate: -50%;transition: 1s;">
                                <i class="fa-solid fa-check" style="color: #ff5900;"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="map-line w-100 mt-5 mb-5 position-relative d-none d-sm-block"
                style="height: 4px; background-color: white; border-radius: 20px;">
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
            <div class="swiper mySwiper-road mt-5 d-none d-sm-block">
                <div class="swiper-wrapper d-flex flex-row">
                    <div class="swiper-slide above-date d-flex align-self-start col-2 flex-grow-1">
                        <div class=" flex-grow-1 text-center">
                            <p style="font-size: 16px; line-height: 1.8;color: #f9542a;">February 01, 2022</p>
                        </div>
                    </div>
                    <div class="swiper-slide below-box  d-flex col-3 flex-grow-1">
                        <div class="d-flex p-5 gap-4 text-center flex-column"
                            style="background-color: #4526b1; border-radius: 15px;">
                            <h2>Research</h2>
                            <p style="font-size: 18px; line-height: 1.8;">Oficia dese runt molit anim iesod est labo
                                met
                                conse ctetur
                                adipi</p>
                        </div>
                        <div class="position-absolute "
                            style="bottom: 100%; left: 50%;translate: -50%;width: 4px;height: 94px;background-color: white;">
                            <div class="position-absolute d-flex justify-content-center align-items-center mark"
                                style="width:35px;height: 35px;border-radius:50%;background-color: white;bottom: 80%; left: 50%;translate: -50%;transition: 1s;">
                                <i class="fa-solid fa-check" style="color: #ff5900;"></i>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide above-date d-flex align-self-start col-2 flex-grow-1">
                        <div class=" flex-grow-1 text-center">
                            <p style="font-size: 16px; line-height: 1.8;color: #f9542a;">February 01, 2022</p>
                        </div>
                    </div>
                    <div class="swiper-slide below-box d-flex col-3 flex-grow-1">
                        <div class=" d-flex p-5 gap-4 text-center flex-column"
                            style="background-color: #4526b1; border-radius: 15px;">
                            <h2>Result</h2>
                            <p style="font-size: 18px; line-height: 1.8;">Oficia dese runt molit anim iesod est labo
                                met
                                conse ctetur
                                adipi</p>
                        </div>
                        <div class="position-absolute "
                            style="bottom: 100%; left: 50%;translate: -50%;width: 4px;height: 94px;background-color: white;">
                            <div class="position-absolute d-flex justify-content-center align-items-center mark"
                                style="width:35px;height: 35px;border-radius:50%;background-color: white;bottom: 80%; left: 50%;translate: -50%;transition: 1s;">
                                <i class="fa-solid fa-angle-right" style="color: #adadad;"></i>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide above-date d-flex align-self-start col-2 flex-grow-1">
                        <div class=" flex-grow-1 text-center">
                            <p style="font-size: 16px; line-height: 1.8;color: #f9542a;">February 01, 2022</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper mySwiper2 mb-5 d-sm-none">
                <div class="swiper-wrapper d-flex flex-row">
                    <div class="swiper-slide above-box position-relative d-flex col-3 flex-grow-1">
                        <div class="d-flex p-5 gap-4 text-center flex-column"
                            style="background-color: #4526b1; border-radius: 15px;">
                            <h2>Idea Generation</h2>
                            <p style="font-size: 18px; line-height: 1.8;">Oficia dese runt molit anim iesod est labo
                                met
                                conse ctetur
                                adipi</p>
                        </div>
                        <div class="position-absolute "
                            style="top: 100%; left: 50%;translate: -50%;width: 4px;height: 94px;background-color: white;">
                            <div class="position-absolute d-flex justify-content-center align-items-center mark"
                                style="width:35px;height: 35px;border-radius:50%;background-color: white;top: 80%; left: 50%;translate: -50%;transition: 1s;">
                                <i class="fa-solid fa-check" style="color: #ff5900;"></i>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide above-box position-relative d-flex col-3 flex-grow-1">
                        <div class=" d-flex p-5 gap-4 text-center flex-column"
                            style="background-color: #4526b1; border-radius: 15px;">
                            <h2>Development</h2>
                            <p style="font-size: 18px; line-height: 1.8;">Oficia dese runt molit anim iesod est labo
                                met
                                conse ctetur
                                adipi</p>
                        </div>
                        <div class="position-absolute "
                            style="top: 100%; left: 50%;translate: -50%;width: 4px;height: 94px;background-color: white;">
                            <div class="position-absolute d-flex justify-content-center align-items-center mark"
                                style="width:35px;height: 35px;border-radius:50%;background-color: white;top: 80%; left: 50%;translate: -50%;transition: 1s;">
                                <div style="width: 45%;height: 45%;border-radius:50%;background-color:#f9542a;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide above-box position-relative d-flex col-3 flex-grow-1">
                        <div class="d-flex p-5 gap-4 text-center flex-column"
                            style="background-color: #4526b1; border-radius: 15px;">
                            <h2>Idea Generation</h2>
                            <p style="font-size: 18px; line-height: 1.8;">Oficia dese runt molit anim iesod est labo
                                met
                                conse ctetur
                                adipi</p>
                        </div>
                        <div class="position-absolute "
                            style="top: 100%; left: 50%;translate: -50%;width: 4px;height: 94px;background-color: white;">
                            <div class="position-absolute d-flex justify-content-center align-items-center mark"
                                style="width:35px;height: 35px;border-radius:50%;background-color: white;top: 80%; left: 50%;translate: -50%;transition: 1s;">
                                <i class="fa-solid fa-check" style="color: #ff5900;"></i>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide above-box position-relative d-flex col-3 flex-grow-1">
                        <div class=" d-flex p-5 gap-4 text-center flex-column"
                            style="background-color: #4526b1; border-radius: 15px;">
                            <h2>Development</h2>
                            <p style="font-size: 18px; line-height: 1.8;">Oficia dese runt molit anim iesod est labo
                                met
                                conse ctetur
                                adipi</p>
                        </div>
                        <div class="position-absolute "
                            style="top: 100%; left: 50%;translate: -50%;width: 4px;height: 94px;background-color: white;">
                            <div class="position-absolute d-flex justify-content-center align-items-center mark"
                                style="width:35px;height: 35px;border-radius:50%;background-color: white;top: 80%; left: 50%;translate: -50%;transition: 1s;">
                                <div style="width: 45%;height: 45%;border-radius:50%;background-color:#f9542a;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="map-line w-100 mt-5 mb-5 position-relative d-sm-none"
                style="height: 4px; background-color: white; border-radius: 20px;">
            </div>
        </div>


        <script>
            var swiper = new Swiper(".mySwiper-road", {
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    1000: {
                        slidesPerView: 3,
                    },
                    1405: {
                        slidesPerView: 4,
                    }
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
            var swiper = new Swiper(".mySwiper2", {
                slidesPerView: 1,
            });
        </script>
    </div>`;

  $(html).insertAfter(".token-information");
};

addRoadMap();

const swiperHeight = document.querySelector(".road-map");
const aboveBoxes = document.querySelectorAll(".above-box");
const belowBoxes = document.querySelectorAll(".below-box");
const marks = document.querySelectorAll(".swiper .mark");

// end road map section

// add square shapes section

const addSquareSection = function () {
  let html = ` <div class="container-xxl overflow-hidden mt-5 p-xxl-5 py-5 m-auto">
        <div class="position-relative">
            <div
                style="position: absolute; top: 0; left: 50%; translate: -50% 0;font-size: 210px;color: transparent;-webkit-text-stroke: 3px #311686;font-weight: 900;letter-spacing: 25px;">
                Collections
            </div>
        </div>
        <div class="px-xxl-5 px-4 w-100 d-flex gap-5 flex-wrap justify-content-center align-items-center"
            style="margin-top: 100px !important;">
            <div class="main-text text-center col-12 justify-content-center d-flex flex-column gap-4">
                <h2 class="pb-4" style="transition: 1s;">NFT Portfo<span
                        class="pb-4 border-5 border-bottom border-danger">lio </span>Collections
                </h2>
                <h1 class="mb-4" style="font-size: 45px;transition: 1s;line-height: 1.2;">Checkout Our NFT
                    Collections
                </h1>
            </div>
        </div>
    </div>
    <div class="container-xxl square-shapes-section overflow-hidden p-xxl-5 py-5 m-auto" style="transition: 1s;">
        <div class="w-100 d-flex px-xxl-5 px-3 gap-5 flex-wrap justify-content-center align-items-center">
            <div class="square-shapes flex-grow-1 mb-5 d-flex justify-content-evenly flex-wrap gap-5">
                <div class="item">
                    <img class="col-12" src="../images/home3/montono-09.png" alt="">
                    <div class="item-title ">
                        <h2>Monteno item 1</h2>
                    </div>
                </div>
                <div class="item">
                    <img class="col-12" src="../images/home3/montono-10.png" alt="">
                    <div class="item-title ">
                        <h2>Monteno item 2</h2>
                    </div>
                </div>
                <div class="item">
                    <img class="col-12" src="../images/home3/montono-11.png" alt="">
                    <div class="item-title ">
                        <h2>Monteno item 3</h2>
                    </div>
                </div>
                <div class="item">
                    <img class="col-12" src="../images/home3/montono-12.png" alt="">
                    <div class="item-title ">
                        <h2>Monteno item 4</h2>
                    </div>
                </div>
                <div class="item">
                    <img class="col-12" src="../images/home3/montono-13.png" alt="">
                    <div class="item-title ">
                        <h2>Monteno item 5</h2>
                    </div>
                </div>
                <div class="item">
                    <img class="col-12" src="../images/home3/montono-14.png" alt="">
                    <div class="item-title ">
                        <h2>Monteno item 6</h2>
                    </div>
                </div>
            </div>
            <div class="button mt-5">
                <a class="d-block" href="collection.html" style="color: white; width: 100%;">View All</a>
            </div>
        </div>
    </div>`;

  $(html).insertAfter(".road-map");
};

addSquareSection();

const squareShapes = Array.from($(".square-shapes .item"));

// end square shapes section

// add slider images

const addSliderImages = function () {
  let html = `<div class="overflow-hidden w-100 p-xxl-5 py-5 m-auto">
    <div class="position-relative">
        <h1
            style="position: absolute; top: 0; left: 50%; translate: -50% 0;font-size: 250px;color: transparent;-webkit-text-stroke: 3px #311686;font-weight: 900;letter-spacing: 25px;text-wrap: nowrap;">
            TEAM
        </h1>
    </div>
    <div class="px-xxl-5 px-4 w-100 d-flex gap-5 flex-wrap justify-content-center align-items-center"
        style="margin-top: 100px !important;">
        <div class="main-text text-center mb-5 col-12 justify-content-center d-flex flex-column gap-4">
            <h2 class="pb-4" style="transition: 0.5s;">Team<span class="pb-4 border-5 border-bottom border-danger">
                    Me</span>mbers
            </h2>
            <h1 class="mb-4" style="font-size: 45px;transition: 1s;line-height: 1.2;">Our Amazing Team
                Members
            </h1>
        </div>
    </div>
</div>
<div class="container-xxl slider-section py-5 m-auto" style="margin-top: -60px !important;">
    <div class="px-xxl-5 px-4 w-100 d-flex gap-lg-0 gap-5 flex-wrap justify-content-center align-items-center">
        <div class="swiper mySwiper container-xxl p-xxl-5 py-5 m-auto">
            <div class="swiper-wrapper">
                <div class="swiper-slide col-4 d-flex flex-column">
                    <div class="slide-image d-flex justify-content-center" style="translate: 0 -60px;">
                        <div>
                            <i class="fa-brands fa-telegram" style="color: #6354b0;translate: -60px 100px;
    rotate: 225deg;"></i>
                            <i class="fa-brands fa-facebook" style="color: #6354b0;translate: -90px 65px;
    rotate: 225deg;"></i>
                            <i class="fa-brands fa-square-twitter" style="color: #6354b0;translate: -120px 10px;
    rotate: 225deg;"></i>
                        </div>
                        <img src="../images/team-01.jpg" alt="">
                    </div>
                    <div style="translate: 0 -40px;line-height: 1.8;">
                        <h3 class="flex-grow-1" style="font-size: 23px;">Mike Anderson</h3>
                        <p class="flex-grow-1" style="font-size: 16px;">Founder & CEO</p>
                    </div>
                </div>
                <div class="swiper-slide col-4 d-flex flex-column">
                    <div class="slide-image d-flex justify-content-center" style="translate: 0 -60px;">
                        <div><i class="fa-brands fa-telegram" style="color: #6354b0;translate: -60px 100px;
                        rotate: 225deg;"></i>
                            <i class="fa-brands fa-facebook" style="color: #6354b0;translate: -90px 65px;
                        rotate: 225deg;"></i>
                            <i class="fa-brands fa-square-twitter" style="color: #6354b0;translate: -120px 10px;
                        rotate: 225deg;"></i>
                        </div><img src="../images/team-02.jpg" alt="">
                    </div>
                    <div style="translate: 0 -40px;line-height: 1.8;">
                        <h3 class="flex-grow-1" style="font-size: 23px;">Paul Harrison</h3>
                        <p class="flex-grow-1" style="font-size: 16px;">Founder & CEO</p>
                    </div>
                </div>
                <div class="swiper-slide col-4 d-flex flex-column">
                    <div class="slide-image d-flex justify-content-center" style="translate: 0 -60px;">
                        <div><i class="fa-brands fa-telegram" style="color: #6354b0;translate: -60px 100px;
                        rotate: 225deg;"></i>
                            <i class="fa-brands fa-facebook" style="color: #6354b0;translate: -90px 65px;
                        rotate: 225deg;"></i>
                            <i class="fa-brands fa-square-twitter" style="color: #6354b0;translate: -120px 10px;
                        rotate: 225deg;"></i>
                        </div><img src="../images/team-03.jpg" alt="">
                    </div>
                    <div style="translate: 0 -40px;line-height: 1.8;">
                        <h3 class="flex-grow-1" style="font-size: 23px;">Sarah Jenifer</h3>
                        <p class="flex-grow-1" style="font-size: 16px;">Founder & CEO</p>
                    </div>
                </div>
                <div class="swiper-slide col-4 d-flex flex-column">
                    <div class="slide-image d-flex justify-content-center" style="translate: 0 -60px;">
                        <div><i class="fa-brands fa-telegram" style="color: #6354b0;translate: -60px 100px;
                        rotate: 225deg;"></i>
                            <i class="fa-brands fa-facebook" style="color: #6354b0;translate: -90px 65px;
                        rotate: 225deg;"></i>
                            <i class="fa-brands fa-square-twitter" style="color: #6354b0;translate: -120px 10px;
                        rotate: 225deg;"></i>
                        </div><img src="../images/team-04.jpg" alt="">
                    </div>
                    <div style="translate: 0 -40px;line-height: 1.8;">
                        <h3 class="flex-grow-1" style="font-size: 23px;">James Smith</h3>
                        <p class="flex-grow-1" style="font-size: 16px;">Founder & CEO</p>
                    </div>
                </div>
                <div class="swiper-slide col-4 d-flex flex-column">
                    <div class="slide-image d-flex justify-content-center" style="translate: 0 -60px;">
                        <div><i class="fa-brands fa-telegram" style="color: #6354b0;translate: -60px 100px;
                        rotate: 225deg;"></i>
                            <i class="fa-brands fa-facebook" style="color: #6354b0;translate: -90px 65px;
                        rotate: 225deg;"></i>
                            <i class="fa-brands fa-square-twitter" style="color: #6354b0;translate: -120px 10px;
                        rotate: 225deg;"></i>
                        </div><img src="../images/team-01.jpg" alt="">
                    </div>
                    <div style="translate: 0 -40px;line-height: 1.8;">
                        <h3 class="flex-grow-1" style="font-size: 23px;">Mike Anderson</h3>
                        <p class="flex-grow-1" style="font-size: 16px;">Founder & CEO</p>
                    </div>
                </div>
                <div class="swiper-slide col-4 d-flex flex-column">
                    <div class="slide-image d-flex justify-content-center" style="translate: 0 -60px;">
                        <div><i class="fa-brands fa-telegram" style="color: #6354b0;translate: -60px 100px;
                        rotate: 225deg;"></i>
                            <i class="fa-brands fa-facebook" style="color: #6354b0;translate: -90px 65px;
                        rotate: 225deg;"></i>
                            <i class="fa-brands fa-square-twitter" style="color: #6354b0;translate: -120px 10px;
                        rotate: 225deg;"></i>
                        </div><img src="../images/team-02.jpg" alt="">
                    </div>
                    <div style="translate: 0 -40px;line-height: 1.8;">
                        <h3 class="flex-grow-1" style="font-size: 23px;">Paul Harrison</h3>
                        <p class="flex-grow-1" style="font-size: 16px;">Founder & CEO</p>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination d-flex gap-5 justify-content-center"></div>
        </div>
    </div>
</div>


<script>
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        breakpoints: {
            450: {
                slidesPerView: 2,
            },
            650: {
                slidesPerView: 3,
            },
            960: {
                slidesPerView: 4,
            }
        },
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
</script>`;

  $(html).insertAfter(".square-shapes-section");
};

addSliderImages();

const swiperSlide = document.querySelector(".slider-section");

// end slider images

//  add technology section

const addTechnology = function () {
  let html = `  <div class="container-xxl overflow-hidden join-portfolio mt-5 p-xxl-5 py-5 m-auto">
        <div class="px-xxl-5 px-4 w-100 d-flex gap-5 flex-wrap justify-content-center align-items-center"
            style="margin-top: 100px !important;">
            <div class="main-text text-center mb-5 col-12 justify-content-center d-flex flex-column gap-4">
                <h2 class="pb-4" style="transition: 1s;">Tech<span
                        class="pb-4 border-5 border-bottom border-danger">no</span>logy
                </h2>
                <h1 class="mb-4" style="font-size: 45px;transition: 1s;line-height: 1.2;">Monteno unique Technology
                </h1>
            </div>
            <div class="d-flex flex-wrap gap-5">
                <div class="cards portfolio d-flex col-lg-4 flex-grow-1 align-items-center gap-5 flex-wrap">
                    <div
                        class="card down col-12 col-lg-5 text-center text-lg-start flex-column d-flex gap-5 flex-grow-1 px-5 py-5">
                        <div class="d-flex p-5 justify-content-center align-items-center align-self-lg-start align-self-center"
                            style="border-radius: 50%; background-color: white; width: 80px; height: 80px;">
                            <img src="../images/home3/database.png" alt="">
                        </div>
                        <div>
                            <a>Safe Database
                            </a>
                            <p class="mt-4" style="font-size: 19px; line-height: 1.8;">Aliquam erat volutpat. Fusce sit
                                amet
                        </div>
                    </div>
                    <div
                        class="card down col-12 col-lg-5 text-center text-lg-start flex-column d-flex gap-5 flex-grow-1 px-5 py-5">
                        <div class="d-flex p-5 justify-content-center align-items-center align-self-lg-start align-self-center"
                            style="border-radius: 50%; background-color: white; width: 80px; height: 80px;">
                            <img src="../images/home3/lock.png" alt="">
                        </div>
                        <div>
                            <a>Safe Database
                            </a>
                            <p class="mt-4" style="font-size: 19px; line-height: 1.8;">Aliquam erat volutpat. Fusce sit
                                amet
                        </div>
                    </div>
                    <div
                        class="card up col-12 col-lg-5 text-center text-lg-start flex-column d-flex gap-5 flex-grow-1 px-5 py-5">
                        <div class="d-flex p-5 justify-content-center align-items-center align-self-lg-start align-self-center"
                            style="border-radius: 50%; background-color: white; width: 80px; height: 80px;">
                            <img src="../images/home3/paymentt.png" alt="">
                        </div>
                        <div>
                            <a>verify payment
                            </a>
                            <p class="mt-4" style="font-size: 19px; line-height: 1.8;">Aliquam erat volutpat. Fusce sit
                                amet
                        </div>
                    </div>
                    <div
                        class="card up col-12 col-lg-5 text-center text-lg-start flex-column d-flex gap-5 flex-grow-1 px-5 py-5">
                        <div class="d-flex p-5 justify-content-center align-items-center align-self-lg-start align-self-center"
                            style="border-radius: 50%; background-color: white; width: 80px; height: 80px;">
                            <img src="../images/home3/timestaps.png" alt="">
                        </div>
                        <div>
                            <a style="text-wrap: nowrap;">Timestamp server
                            </a>
                            <p class="mt-4" style="font-size: 19px; line-height: 1.8;">Aliquam erat volutpat. Fusce sit
                                amet
                        </div>
                    </div>
                </div>
                <img class="swing col-4 ms-5 align-self-center flex-grow-1" src="../images/home3/technology.png" alt="">
            </div>
        </div>
    </div>`;

  $(html).insertAfter(".slider-section");
};

addTechnology();

// add image animation
const porfolioCards = Array.from($(".card"));

porfolioCards.forEach((e) =>
  e.addEventListener("mouseover", function (e) {
    e.target.closest(".card").children[0].style.transform = "rotateY(-360deg)";
  })
);
porfolioCards.forEach((e) =>
  e.addEventListener("mouseout", function (e) {
    e.target.closest(".card").children[0].style.transform = "rotateY(0deg)";
  })
);
// end image animation

// end technology section

// add Testimonials images

const addTestimonialsImages = function () {
  let html = `<div class="overflow-hidden w-100 p-xxl-5 py-5 m-auto">
        <div class="px-xxl-5 px-4 w-100 d-flex gap-5 flex-wrap justify-content-center align-items-center"
            style="margin-top: 100px !important;">
            <div class="main-text text-center mb-5 col-12 justify-content-center d-flex flex-column gap-4">
                <h2 class="pb-4" style="transition: 0.5s;">Test<span
                        class="pb-4 border-5 border-bottom border-danger">imo</span>nials
                </h2>
                <h1 class="mb-4" style="font-size: 45px;transition: 1s;line-height: 1.2;">What People Say
                    About us
                </h1>
            </div>
        </div>
    </div>
    <div class="container-xxl px-xxl-5 testimonials-section py-5 m-auto" style="margin-top: -100px !important;">
        <div class="px-xxl-5 px-4 w-100">
            <div class="swiper mySwiper5 py-5">
                <div class="swiper-wrapper">
                    <div class="swiper-slide col-4 p-5 d-flex flex-column flex-grow-1  gap-5 position-relative">
                        <img class="align-self-start"
                            style="position: absolute;top: -30px;left: 50%;translate: -50%;width: 80px; height: 80px;"
                            src="../images/home3/left-quote1.webp" alt="">
                        <p class="text-center mt-5" style="line-height: 1.8;font-size: 21px; font-style: italic;">
                            Keniam,
                            quis nostrud exerci ut
                            aliquip ex ea com
                            modo cons equat. Duis aute irure dolor in
                            reprehen derit in voluptate
                            velit esse cillum dolore eu fu giat nulla parinon proid</p>
                        <div class="d-flex gap-5 flex-row align-items-center">
                            <img style="width: 80px; height: 80px;" src="../images/home2/avt-02.png" alt="">
                            <div class="d-flex flex-column gap-2 align-items-start">
                                <h3>Paul Harrison</h3>
                                <p>Founder & CEO</p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide col-4 p-5 d-flex flex-column flex-grow-1  gap-5 position-relative">
                        <img class="align-self-start"
                            style="position: absolute;top: -30px;left: 50%;translate: -50%;width: 80px; height: 80px;"
                            src="../images/home3/left-quote1.webp" alt="">
                        <p class="text-center mt-5" style="line-height: 1.8;font-size: 21px; font-style: italic;">
                            Keniam,
                            quis nostrud exerci ut
                            aliquip ex ea com
                            modo cons equat. Duis aute irure dolor in
                            reprehen derit in voluptate
                            velit esse cillum dolore eu fu giat nulla parinon proid</p>
                        <div class="d-flex gap-5 flex-row align-items-center">
                            <img style="width: 80px; height: 80px;" src="../images/home2/avt-03.png" alt="">
                            <div class="d-flex flex-column gap-2 align-items-start">
                                <h3>Paul Harrison</h3>
                                <p>Founder & CEO</p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide col-4 p-5 d-flex flex-column flex-grow-1  gap-5 position-relative">
                        <img class="align-self-start"
                            style="position: absolute;top: -30px;left: 50%;translate: -50%;width: 80px; height: 80px;"
                            src="../images/home3/left-quote1.webp" alt="">
                        <p class="text-center mt-5" style="line-height: 1.8;font-size: 21px; font-style: italic;">
                            Keniam,
                            quis nostrud exerci ut
                            aliquip ex ea com
                            modo cons equat. Duis aute irure dolor in
                            reprehen derit in voluptate
                            velit esse cillum dolore eu fu giat nulla parinon proid</p>
                        <div class="d-flex gap-5 flex-row align-items-center">
                            <img style="width: 80px; height: 80px;" src="../images/home2/avt-04.png" alt="">
                            <div class="d-flex flex-column gap-2 align-items-start">
                                <h3>Paul Harrison</h3>
                                <p>Founder & CEO</p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide col-4 p-5 d-flex flex-column flex-grow-1 gap-5 position-relative">
                        <img class="align-self-start"
                            style="position: absolute;top: -30px;left: 50%;translate: -50%;width: 80px; height: 80px;"
                            src="../images/home3/left-quote1.webp" alt="">
                        <p class="text-center mt-5" style="line-height: 1.8;font-size: 21px; font-style: italic;">
                            Keniam,
                            quis nostrud exerci ut
                            aliquip ex ea com
                            modo cons equat. Duis aute irure dolor in
                            reprehen derit in voluptate
                            velit esse cillum dolore eu fu giat nulla parinon proid</p>
                        <div class="d-flex gap-5 flex-row align-items-center">
                            <img style="width: 80px; height: 80px;" src="../images/home2/avt-02.png" alt="">
                            <div class="d-flex flex-column gap-2 align-items-start">
                                <h3>Paul Harrison</h3>
                                <p>Founder & CEO</p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide col-4 p-5 d-flex flex-column flex-grow-1  gap-5 position-relative">
                        <img class="align-self-start"
                            style="position: absolute;top: -30px;left: 50%;translate: -50%;width: 80px; height: 80px;"
                            src="../images/home3/left-quote1.webp" alt="">
                        <p class="text-center mt-5" style="line-height: 1.8;font-size: 21px; font-style: italic;">
                            Keniam,
                            quis nostrud exerci ut
                            aliquip ex ea com
                            modo cons equat. Duis aute irure dolor in
                            reprehen derit in voluptate
                            velit esse cillum dolore eu fu giat nulla parinon proid</p>
                        <div class="d-flex gap-5 flex-row align-items-center">
                            <img style="width: 80px; height: 80px;" src="../images/home2/avt-03.png" alt="">
                            <div class="d-flex flex-column gap-2 align-items-start">
                                <h3>Paul Harrison</h3>
                                <p>Founder & CEO</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="swiper-pagination d-flex gap-5 justify-content-center"></div>
            </div>
        </div>
    </div>  

    <script>
        var swiper = new Swiper(".mySwiper5", {
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                500: {
                    slidesPerView: 2,
                },
                800: {
                    slidesPerView: 3,
                }
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    </script>`;

  $(html).insertAfter(".join-portfolio");
};

addTestimonialsImages();

const testimonialsSections = document.querySelector(".testimonials-section");

// end slider images

// add Register

const addRegister = function () {
  let html = `<div class="container-xxl register overflow-hidden mt-5 p-xxl-5 py-5 m-auto" style="transition: 1s;">
        <div class="w-100 px-xxl-5 px-3 d-flex gap-lg-0 gap-5 flex-wrap justify-content-center align-items-center">
            <div class="p-5 text-center w-100 position-relative d-flex gap-5 flex-wrap align-items-center justify-content-center"
                style="margin-top: 120px !important;background: url(../images/home3/counter.webp) no-repeat;background-size: cover; border-radius: 45px;">
                <div class="d-flex gap-5 py-5 px-5 px-sm-5 justify-content-between w-100 flex-wrap">
                    <div class="d-flex gap-2 flex-grow-1 flex-column align-items-center">
                        <img src="../images/home3/users.webp" alt="">
                        <h1 style="font-size: 50px;"><span data-goal="100" style="transition: 0.3s;">0</span>K
                        </h1>
                        <h1>Registered User
                        </h1>
                    </div>
                    <div class="d-flex gap-2 flex-column align-items-center flex-grow-1">
                        <img src="../images/home3/assets.webp" alt="">
                        <h1 style="font-size: 50px;"><span data-goal="5" style="transition: 0.3s;">0</span>M
                        </h1>
                        <h1>Total Assets
                        </h1>
                    </div>
                    <div class="d-flex gap-2 flex-column align-items-center flex-grow-1">
                        <img src="../images/home3/trading.webp" alt="">
                        <h1 style="font-size: 50px;"><span data-goal="10" style="transition: 0.3s;">0</span>B
                        </h1>
                        <h1>Yearly Trading
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

  document
    .querySelector(".testimonials-section")
    .insertAdjacentHTML("afterend", html);
};

addRegister();

const registerCount = document.querySelectorAll(".register span");
const registerSection = document.querySelector(".register");

// end Register

// add Blog section

const addBlog = function () {
  let html = `   <div class="overflow-hidden w-100 p-xxl-5 mt-5 py-5 m-auto">
        <div class="position-relative">
            <h1
                style="position: absolute; top: 0; left: 50%; translate: -50% 0;font-size: 250px;color: transparent;-webkit-text-stroke: 3px #311686;font-weight: 900;letter-spacing: 25px;text-wrap: nowrap;z-index: -1;">
                BLOG
            </h1>
        </div>
        <div class="px-xxl-5 px-4 w-100 d-flex gap-5 flex-wrap justify-content-center align-items-center"
            style="margin-top: 100px !important;">
            <div class="main-text text-center mb-5 col-12 justify-content-center d-flex flex-column gap-4">
                <h2 class="pb-4" style="transition: 0.5s;">From <span
                        class="pb-4 border-5 border-bottom border-danger">Our </span>Blog
                </h2>
                <h1 class="mb-4" style="font-size: 45px;transition: 1s;line-height: 1.2;">Read Our Recent
                    News & Articles
                </h1>
            </div>
        </div>
    </div>
    <div class="container-xxl blog p-xxl-5 py-5 m-auto"
        style="margin-top: -30px !important;margin-bottom: 30px !important;">
        <div class="w-100 px-xxl-5 px-3">
            <div class="d-flex blog-content gap-5 flex-wrap">
                <div class="d-flex col-md-3 col-6 flex-grow-1 gap-1 flex-column"
                    style="border-radius: 20px ;background-color: #492da7;transition: 1s; transition-delay: 0.2s;">
                    <img style="border-top-right-radius: 20px;border-top-left-radius: 20px;"
                        src="../images/home2/blog-01-2.jpg" alt="">
                    <div class="d-flex flex-column gap-4 p-5">
                        <p style="font-size: 18px; color: #ff6a00;">Nft trading</p>
                        <h2>How to buy and sale nft in a easiest way</h2>
                    </div>
                </div>
                <div class="d-flex col-md-3 col-6 flex-grow-1 gap-1 flex-column"
                    style="border-radius: 20px ;background-color: #492da7;transition: 1s; transition-delay: 0.3s;">
                    <img style="border-top-right-radius: 20px;border-top-left-radius: 20px;t"
                        src="../images/home2/blog-02-2.jpg" alt="">
                    <div class="d-flex flex-column gap-4 p-5">
                        <p style="font-size: 18px; color: #ff6a00;">Nft trading</p>
                        <h2>How to buy and sale nft in a easiest way</h2>
                    </div>
                </div>
                <div class="d-flex col-md-3 col-6 flex-grow-1 gap-1 flex-column"
                    style="border-radius: 20px ;background-color: #492da7;transition: 1s; transition-delay: 0.4s;">
                    <img style="border-top-right-radius: 20px;border-top-left-radius: 20px;"
                        src="../images/home2/blog-03-2.jpg" alt="">
                    <div class="d-flex flex-column gap-4 p-5">
                        <p style="font-size: 18px; color: #ff6a00;">Nft trading</p>
                        <h2>How to buy and sale nft in a easiest way</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

  $(html).insertAfter(".register");
};

addBlog();

const blogBoxes = document.querySelectorAll(".blog-content div");

// end blog section

// add questions sections

const addQuestionsSection = function () {
  let html = ` 
    <div class="overflow-hidden w-100 p-xxl-5 py-5 m-auto">
        <div class="position-relative">
            <h1
                style="position: absolute; top: 0; left: 50%; translate: -50% 0;font-size: 250px;color: transparent;-webkit-text-stroke: 3px #311686;font-weight: 900;letter-spacing: 25px;text-wrap: nowrap;z-index: -1;">
                FAQ
            </h1>
        </div>
        <div class="px-xxl-5 px-4 w-100 d-flex gap-5 flex-wrap justify-content-center align-items-center"
            style="margin-top: 100px !important;">
            <div class="main-text text-center mb-5 col-12 justify-content-center d-flex flex-column gap-4">
                <h2 class="pb-4" style="transition: 0.5s;"><span
                        class="pb-4 border-5 border-bottom border-danger">FAQ</span>
                </h2>
                <h1 class="mb-4" style="font-size: 45px;transition: 1s;line-height: 1.2;">Frequently Aksed
                    Questions
                </h1>
            </div>
        </div>
    </div>
    <div class="container-xxl questions p-xxl-5 py-5 m-auto" style="margin-top: -10px !important;">
        <div class="w-100 px-xxl-5 px-3">
            <div class="d-flex gap-5 flex-wrap align-items-start">
                <div class="col-5 px-3 flex-grow-1 questions-content show">
                    <div class="questions-box d-flex flex-column gap-4">
                        <h1 style="font-size: 25px;cursor: pointer;"><span
                                style="font-size: 35px;margin-right: 10px !important;">+</span>
                            When the
                            musics over
                            turn off the
                            light?
                        </h1>
                        <p class="ms-5" style="font-size: 18px; line-height: 1.8;">Oficia dese runt mollit anim id
                            est
                            labo met, conse ctetur adipi smod tempor inc ididunt ut
                            labore et dolore qui inim
                            veniam, quis nostrud ex ercitation ullamco laboris nisi ut aliquip</p>
                    </div>
                    <div class="questions-box d-flex flex-column gap-4">
                        <h1 style="font-size: 25px;cursor: pointer;"><span
                                style="font-size: 35px;margin-right: 10px !important;">+</span>
                            What is the best way to
                            collect NFT?

                        </h1>
                        <p class="ms-5" style="font-size: 18px; line-height: 1.8;">Oficia dese runt mollit anim id
                            est
                            labo met, conse ctetur adipi smod tempor inc ididunt ut
                            labore et dolore qui inim
                            veniam, quis nostrud ex ercitation ullamco laboris nisi ut aliquip</p>
                    </div>
                    <div class="questions-box d-flex flex-column gap-4">
                        <h1 style="font-size: 25px;cursor: pointer;"><span
                                style="font-size: 35px;margin-right: 10px !important;">+</span>
                            Why NFT Trading is so
                            popular?
                        </h1>
                        <p class="ms-5" style="font-size: 18px; line-height: 1.8;">Oficia dese runt mollit anim id
                            est
                            labo met, conse ctetur adipi smod tempor inc ididunt ut
                            labore et dolore qui inim
                            veniam, quis nostrud ex ercitation ullamco laboris nisi ut aliquip</p>
                    </div>
                    <div class="questions-box d-flex flex-column gap-4">
                        <h1 style="font-size: 25px;cursor: pointer;"><span
                                style="font-size: 35px;margin-right: 10px !important;">+</span>
                            How do you trade on
                            Montono easily?
                        </h1>
                        <p class="ms-5" style="font-size: 18px; line-height: 1.8;">Oficia dese runt mollit anim id
                            est
                            labo met, conse ctetur adipi smod tempor inc ididunt ut
                            labore et dolore qui inim
                            veniam, quis nostrud ex ercitation ullamco laboris nisi ut aliquip</p>
                    </div>
                </div>
                <div class="col-md-6 col-12 flex-grow-1">
                    <img style="width: 100%;" src="../images/home3/faq.webp" alt="">
                </div>
            </div>
        </div>
    </div>
`;

  $(html).insertAfter(".blog");
};

addQuestionsSection();

const questionsContent = document.querySelector(".questions-content");

$(document).ready(function () {
  $(".questions-box h1").click(function (e) {
    $(e.target).next().slideToggle("Slow");
    $(e.target).toggleClass("show");
    if (e.target.classList.contains("show")) {
      $(e.target.children[0]).text("-");
    } else {
      $(e.target.children[0]).text("+");
    }
  });
});

const questionsBoxes = document.querySelectorAll(".questions-box");

// end questions sections

// add newsletter section

const addNewsletter = function () {
  let html = `  <div class="container-xxl newsletter overflow-hidden mt-5 p-xxl-5 py-5 m-auto" style="transition: 1s;">
   <div class="px-xxl-5 px-4 w-100 d-flex gap-lg-0 gap-5 flex-wrap justify-content-center align-items-center">
        <div class="p-5 w-100 d-flex gap-5 flex-wrap align-items-center justify-content-center"
            style="margin-top: 50px !important;background-color: #7153d9; border-radius: 18px">
            <div class="d-flex gap-4 flex-column py-5 px-5 px-sm-5">
                <h1 style="font-size: 50px;line-height: 1;letter-spacing: 2px;">Get Newsletter
                </h1>
                <p style="font-size: 21px;">Get udpated with news, tips & tricks
                </p>
            </div>
            <form class="d-flex flex-grow-1 px-sm-5" style="font-size: 18px;" action="">
                <div class="d-flex flex-grow-1 p-sm-5">
                    <input class="p-5 col-9"
                        style="border: none; border-top-left-radius: 5px; border-bottom-left-radius: 5px;" type="email"
                        placeholder="Your email">
                    <input class="p-5 col-3 d-none d-sm-flex justify-content-center"
                        style="border: none; border-top-right-radius: 5px; border-bottom-right-radius: 5px;background-color: rgb(253 86 42)"
                        type="submit" value="Subscribe">
                    <input class="p-5 col-3 d-flex justify-content-center d-sm-none"
                        style="border: none; border-top-right-radius: 5px; border-bottom-right-radius: 5px;background-color: rgb(253 86 42)"
                        type="submit" value="Go">
                </div>
            </form>
        </div>
        </div>
    </div>`;

  $(html).insertAfter(".questions");
};

addNewsletter();

// end newsletter section

// add footer

const addFooterSection = function () {
  let html = `<div class="container-xxl footer overflow-hidden mt-5 p-xxl-5 py-5 m-auto" style="transition: 1s;">
        <div class="d-flex flex-wrap gap-5 px-xxl-5 px-4 w-100">
            <div
                class="d-flex col-md-3 col-sm-5 col-12 flex-grow-1 gap-5 flex-column flex-wrap justify-content-start align-items-start">
                <img width="160px" src="../images/logo.png" alt="" style="transition: 1s;">
                <p style="font-size: 18px;transition: 1s;line-height: 1.8;">Duis aute irure dolor in
                    reprehenderit in
                    <br> voluptate velit br esse cillum
                    dolore <br> eu
                    fugiat nulla pariatur
                </p>
                <div class="d-flex gap-3 flex-wrap justify-content-center" style="transition: 1s;">
                    <div class="social-icon1 social-icon d-flex justify-content-center align-items-center"
                        style="width: 60px; height: 60px; background-color: #775bdc; border-radius: 50%; font-size: 18px;">
                        <i class="icon1 fa-brands fa-twitter" style="color: #ffffff;"></i>
                    </div>
                    <div class="social-icon2 social-icon d-flex justify-content-center align-items-center"
                        style="width: 60px; height: 60px; background-color: #775bdc; border-radius: 50%; font-size: 18px;">
                        <i class="icon2 fa-brands fa-facebook-f" style="color: #ffffff;"></i>
                    </div>
                    <div class="social-icon3 social-icon d-flex justify-content-center align-items-center"
                        style="width: 60px; height: 60px; background-color: #775bdc; border-radius: 50%; font-size: 18px;">
                        <i class="icon3 fa-brands fa-linkedin-in" style="color: #ffffff;"></i>
                    </div>
                    <div class="social-icon4 social-icon d-flex justify-content-center align-items-center"
                        style="width: 60px; height: 60px; background-color: #775bdc; border-radius: 50%; font-size: 18px;">
                        <i class="icon4 fa-brands fa-youtube" style="color: #ffffff;"></i>
                    </div>
                </div>
            </div>
            <div class="d-flex col-md-1 col-5 flex-grow-1 gap-5 flex-column flex-wrap justify-content-start align-items-start"
                style="margin-right: 30px !important;">
                <h2 style="font-size: 23px;">Quick links
                </h2>
                <div class="d-flex flex-column gap-3">
                    <a href="collection.html">NFT Trading</a>
                    <a href="about.html">Development</a>
                    <a href="about.html">Advertisement</a>
                    <a href="about.html">Career</a>
                </div>
            </div>
            <div
                class="d-flex col-md-1 col-5 flex-grow-1 gap-5 flex-column flex-wrap justify-content-start align-items-start">
                <h2 style="font-size: 23px;">Help
                </h2>
                <div class="d-flex flex-column gap-3">
                    <a href="about.html">About Us</a>
                    <a href="team.html">Team Members</a>
                    <a href="about.html">Support</a>
                    <a href="about.html">Refund Policy</a>
                </div>
            </div>
            <div
                class="d-flex col-md-2 col-7 flex-grow-1 gap-5 flex-column flex-wrap justify-content-start align-items-start">
                <h2 style="font-size: 23px;">Newsletter
                </h2>
                <p style="font-size: 18px;transition: 1s;line-height: 1.8;">Duis aute irure dolor in reprehen derit in
                    voluptate velit.
                </p>
                <input class="p-4 px-5" style="font-size: 19px;border-radius: 15px" type="email"
                    placeholder="Your email here">
            </div>
        </div>
        <div class="d-flex px-xxl-5 px-3 justify-content-center gap-5 py-5 w-100 flex-wrap"
            style="border-top: 1px solid rgba(118, 118, 118, 0.538);margin-top: 120px !important;">
            <h3 style="opacity: 0.8;">Copyright © 2022, Monteno - NFT Portfolio HTML Template. Designed by
                Themesflat</h3>
            <div class="d-flex footer-links justify-content-lg-end justify-content-center flex-grow-1 gap-5">
                <h3 style="opacity: 0.8;transition: 0.5s;cursor: pointer;">Terms & Condition</h3>
                <h3 style="opacity: 0.8;transition: 0.5s;cursor: pointer;">Privacy Policy</h3>
                <h3 style="opacity: 0.8;transition: 0.5s;cursor: pointer;">Cookie Policy</h3>
            </div>
        </div>
    </div>`;

  document.body.insertAdjacentHTML("beforeend", html);
};

addFooterSection();

// end footer

const mainText = Array.from(document.querySelectorAll(".main-text"));
