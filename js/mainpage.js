// pages links

document.querySelectorAll(".links a")[2].attributes[0].value =
  "html/home2.html";
document.querySelectorAll(".links a")[3].attributes[0].value =
  "html/home3.html";
document.querySelectorAll(".links a")[5].attributes[0].value =
  "html/about.html";
document.querySelectorAll(".links a")[6].attributes[0].value =
  "html/collection.html";
document.querySelectorAll(".links a")[7].attributes[1].value = "html/team.html";
document.querySelectorAll(".links a")[8].attributes[1].value = "html/team.html";
document.querySelectorAll(".links a")[9].attributes[0].value = "html/road.html";
document.querySelectorAll(".links a")[10].attributes[0].value =
  "html/mission.html";
document.querySelectorAll(".links a")[15].attributes[0].value =
  "html/contact.html";
document.querySelectorAll(".drop-content a")[2].attributes[0].value =
  "html/home2.html";
document.querySelectorAll(".drop-content a")[3].attributes[0].value =
  "html/home3.html";
document.querySelectorAll(".drop-content a")[5].attributes[0].value =
  "html/about.html";
document.querySelectorAll(".drop-content a")[6].attributes[0].value =
  "html/collection.html";
document.querySelectorAll(".drop-content a")[7].attributes[1].value =
  "html/team.html";
document.querySelectorAll(".drop-content a")[8].attributes[1].value =
  "html/team.html";
document.querySelectorAll(".drop-content a")[9].attributes[0].value =
  "html/road.html";
document.querySelectorAll(".drop-content a")[10].attributes[0].value =
  "html/mission.html";
document.querySelectorAll(".drop-content a")[15].attributes[0].value =
  "html/contact.html";

// pages links

// nav logo

document.querySelector(
  "nav"
).children[0].children[0].children[0].children[0].attributes[0].value =
  "images/logo.png";
console.log(
  document.querySelector("nav").children[0].children[0].children[0].children[0]
    .attributes[0].value
);

// nav logo

// load logo

document.querySelector(".load").children[0].attributes[1].value =
  "images/loadlogo.png";

// load logo

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
  // animate cards
  for (let c of cards) {
    rotate3D(c);
    scale(c);
  }
  // end animate cards
  // animate portfolio cards
  porfolioCards.forEach((e) =>
    e.classList.contains("up") ? moveUp(e) : moveDown(e)
  );
  // end animate portfolio cards
  // add animate sqaure shapes
  squareShapes.forEach((e) => rotate360(e));
  squareShapes.forEach((e) => scale(e));
  // end animate sqaure shapes
  // animate map box
  mapBox.forEach((e) =>
    e.classList.contains("right") ? moveRight(e) : moveUp(e)
  );
  scale(document.querySelector(".map-button2"));
  // end animate map box
  // add animate newsletter
  moveUp(this.document.querySelector(".newsletter"));
  // end animate newsletter
  // add slider animate
  moveUp(swiperSlide);
  // end slider animate
  // add brand box animate
  brandBoxes.forEach((e) => scale(e));
  // end brand box animate
  // add swiper2 animate
  if (
    scrollY >=
    swiper2Height.offsetTop - document.documentElement.clientHeight + 150
  ) {
    swiper2Images.style.translate = "0% 0px";
    swiper2Images.style.opacity = "1";
  } else if (
    scrollY <=
    swiper2Height.offsetTop - document.documentElement.clientHeight + 100
  ) {
    swiper2Images.style.translate = "-100% 0px";
    swiper2Images.style.opacity = "0";
  }
  for (let e of swiper2Text) {
    for (let e2 of e.children) {
      if (
        scrollY >=
        swiper2Height.offsetTop - document.documentElement.clientHeight + 150
      ) {
        e2.style.translate = "0% 0px";
        e2.style.opacity = "1";
      } else if (
        scrollY <=
        swiper2Height.offsetTop - document.documentElement.clientHeight + 100
      ) {
        e2.style.translate = "0% 100px";
        e2.style.opacity = "0";
      }
    }
  }
  // end swiper2 animate
  // add questions animate
  questionsBoxes.forEach((e) => moveUp(e));
  // end questions animate
  // add animate nft
  moveUp(this.document.querySelector(".nft-portfolio"));
  // end animate nft
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
  background-image: url(images/background.jpg);
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

.images-box img {
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

.square-shapes div {
  position: relative;
  max-width: 420px;
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
  background-color: #765bd4;
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

.slider-section{
   transition: 1s;
}

        .swiper {
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

        .swiper-pagination-bullet {
            position: relative;
            width: 10px;
            height: 10px;
            display: inline-block;
            border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
            background: rgb(233, 233, 233);
            opacity: 0.3;
            transition: 1s;
        }

        .swiper-pagination-bullet-active {
            opacity: var(--swiper-pagination-bullet-opacity, 1);
            background: white;
        }

        .swiper-pagination-bullet-active::after {
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

        .swiper-pagination {
            position: absolute;
            text-align: center;
            transition: 0.3s opacity;
            transform: translate3d(0, 0, 0);
            z-index: 10;
            translate: 0px 50px;
        }

        .swiper-wrapper {
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

        .swiper-container {
            width: 100%;
            height: 100%;
            display: flex !important;
            gap: 15px;
        }

        .swiper-slide {
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
        

        .swiper-slide img {
            position: relative;
            display: block;
            width: 100%;
            object-fit: cover;
            border-radius: 15px;
            z-index: 0;
            transition: 1s;
        }

        .swiper-slide h3{
          transition: 0.3s;
        }

        .swiper-slide h3:hover {
          color: #fd562a;
        }

        .slide-image {
            position: relative;
            width: 85%;
            overflow: hidden;
            transition: 1s;
        }

        .slide-image div {
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
          .slide-image div {
            top: 100%;
            left: 100%;
            translate: -48% -40%;
          }
        }

        .slide-image div i {
            transition: 0.5s ease-in;
            font-size: 22px;
            opacity: 0;
        }

        .slide-image div i:hover {
            color: rgb(255, 96, 16) !important;
        }

        .swiper-slide:hover .slide-image div {
            rotate: -225deg;
            opacity: 1;
        }

        .swiper-slide:hover .slide-image div i {
            opacity: 1;
        }

        .slide-image div i:first-child {
            transition-delay: 0.2s;
        }

        .slide-image div i:nth-child(2) {
            transition-delay: 0.3s;
        }

        .slide-image div i:last-child {
            transition-delay: 0.4s;
        }

        .swiper-slide:hover .slide-image div i:first-child {
            translate: 15px 100px !important;
        }

        .swiper-slide:hover .slide-image div i:nth-child(2) {
            translate: -29px 80px !important;
        }

        .swiper-slide:hover .slide-image div i:last-child {
            translate: -70px 40px !important;
        }

        .brand-box {
          cursor: pointer;
          transition: 1s;
        }

        .brand-box:hover img {
          opacity: 1 !important;
        }

         .swiper-button-next:after,
    .swiper-button-prev:after {
        content: '';
    }

    .swiper-button-next,
    .swiper-button-prev {
        font-size: 50px;
        top: 92%;
    }

    .swiper-button-next {
        left: 65%;
    }

    .swiper-button-prev {
        left: 57%;
    }

    .swiper-button-next.swiper-button-disabled,
    .swiper-button-prev.swiper-button-disabled {
        font-size: 35px;
        opacity: .35;
        cursor: auto;
        pointer-events: none;
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
    
    </style>`;

  $(style).insertAfter(document.head);
};

addStyle();

// end style sheet

// add main header

const addMainHeader = function () {
  let html = `<div class="container-xxl main-header mt-5 p-xxl-5 py-5 m-auto">
        <div class="px-xxl-5 px-4 w-100 d-flex flex-wrap align-items-center" style="margin-top: 160px !important;    z-index: 0;
    position: relative;">
            <div class="main-text mb-5 col-xl-6 d-flex flex-column gap-4">
                <h2 class="pb-4" style="transition: 1s"><span class="pb-4 border-5 border-bottom border-danger">We</span> are
                    Monteno NFT</h2>
                <h1 style="font-size: 60px;transition: 1s;line-height: 1.2;">Collect Next Generation NFTs Today
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
            <div class="animation-images mt-5 justify-content-between d-flex flex-grow-1 gap-5 overflow-hidden"
                style="max-height: 569px !important; z-index: -1;">
                <div class="slide1 d-flex flex-column gap-5" style="transition:2s;cursor: grab;touch-action: pan-y;">
                </div>
                <div class="slide2 d-flex flex-column gap-5"
                    style="transition:2s;cursor: grab;touch-action: pan-y;translate: 0 -600px;">

                </div>
                <div class="slide3 d-flex flex-column gap-5" style="transition:2s;cursor: grab;touch-action: pan-y;">
                </div>
            </div>
        </div>
    </div>`;

  document.querySelector(".nav").insertAdjacentHTML("afterend", html);
};

addMainHeader();

let slide1 = [
  `<img class="image1" src="images/item-01.png" alt="">`,
  ` <div class="d-flex align-items-end justify-content-center"
                        style="background-color: #4526b1;min-height: 170px; border-radius: 20px;">
                        <img class="image2" src="images/item-02.png" alt="">
                    </div>`,
  `<div class="d-flex align-items-end justify-content-center"
                        style="background-color: #4526b1;min-height: 170px; border-radius: 20px;">
                        <img class="image3" src="images/item-02.png" alt="">
                    </div>`,
  `<img class="image1" src="images/item-01.png" alt="">`,
  ` <div class="d-flex align-items-end justify-content-center"
                        style="background-color: #4526b1;min-height: 170px; border-radius: 20px;">
                        <img class="image2" src="images/item-02.png" alt="">
                    </div>`,
  `<img class="image1" src="images/item-01.png" alt="">`,
  ` <div class="d-flex align-items-end justify-content-center"
                        style="background-color: #4526b1;min-height: 170px; border-radius: 20px;">
                        <img class="image2" src="images/item-02.png" alt="">
                    </div>`,
];

const addSlide1 = function (slide1) {
  slide1.forEach((e) => {
    document.querySelector(".slide1").insertAdjacentHTML("beforeend", e);
  });
};

addSlide1(slide1);

const slideImages1 = document.querySelector(".slide1");

let count1 = 200;
let slide1Animate = setInterval(function () {
  slideImages1.style.translate = `0% ${-count1}px`;
  count1 += 200;
  if (count1 > 600) {
    count1 = 0;
  }
}, 2000);

slideImages1.addEventListener("mouseenter", function () {
  clearInterval(slide1Animate);
});

slideImages1.addEventListener("mouseleave", function () {
  slide1Animate = setInterval(function () {
    slideImages1.style.translate = `0% ${-count1}px`;
    count1 += 200;
    if (count1 > 600) {
      count1 = 0;
    }
  }, 2000);
});

const slideImages2 = document.querySelector(".slide2");

const addSlide2 = function () {
  let html = ` <div class="d-flex align-items-end justify-content-center"
                        style="background-color: #4526b1;min-height: 170px; border-radius: 20px;">
                        <img src="images/item-03.png" alt="">
                    </div>
                    <div class="d-flex align-items-end justify-content-center"
                        style="background-color: #7153d9;min-height: 170px; border-radius: 20px;">
                        <img src="images/item-04.png" alt="">
                    </div>
                    <div class="d-flex align-items-end justify-content-center"
                        style="background-color: #7153d9;min-height: 170px; border-radius: 20px;">
                        <img src="images/item-05.png" alt="">
                    </div>
                    <div class="d-flex align-items-end justify-content-center"
                        style="background-color: #4526b1;min-height: 170px; border-radius: 20px;">
                        <img src="images/item-03.png" alt="">
                    </div>
                    <div class="d-flex align-items-end justify-content-center"
                        style="background-color: #7153d9;min-height: 170px; border-radius: 20px;width: 170px;">
                        <img src="images/item-04.png" alt="">
                    </div>
                    <div class="d-flex align-items-end justify-content-center"
                        style="background-color: #7153d9;min-height: 170px; border-radius: 20px;">
                        <img src="images/item-05.png" alt="">
                    </div>`;

  slideImages2.insertAdjacentHTML("afterbegin", html);
};

addSlide2();

let count2 = -400;
let slide2Animate = setInterval(function () {
  slideImages2.style.translate = `0% ${count2}px`;
  count2 -= -200;
  if (count2 > 0) {
    count2 = -600;
  }
}, 2000);

slideImages2.addEventListener("mouseenter", function () {
  clearInterval(slide2Animate);
});

slideImages2.addEventListener("mouseleave", function () {
  slide2Animate = setInterval(function () {
    slideImages2.style.translate = `0% ${count2}px`;
    count2 -= -200;
    if (count2 > 0) {
      count2 = -600;
    }
  }, 2000);
});

const slideImages3 = document.querySelector(".slide3");

const addSlide3 = function () {
  let html = `  <div class="d-flex align-items-end justify-content-center"
                        style="background-color: #7153d9;min-height: 170px; border-radius: 20px;">
                        <img src="images/item-07.png" alt="">
                    </div>
                    <div class="d-flex align-items-end justify-content-center"
                        style="background-color: #7153d9;min-height: 170px; border-radius: 20px;width: 170px;">
                        <img src="images/item-06.png" alt="">
                    </div>
                    <div class="d-flex align-items-end justify-content-center"
                        style="background-color: #7153d9;min-height: 170px; border-radius: 20px;">
                        <img src="images/item-06.png" alt="">
                    </div>
                    <div class="d-flex align-items-end justify-content-center"
                        style="background-color: #7153d9;min-height: 170px; border-radius: 20px;">
                        <img src="images/item-07.png" alt="">
                    </div>
                    <div class="d-flex align-items-end justify-content-center"
                        style="background-color: #7153d9;min-height: 170px; border-radius: 20px;width: 170px;">
                        <img src="images/item-06.png" alt="">
                    </div> 
                    <div class="d-flex align-items-end justify-content-center"
                        style="background-color: #7153d9;min-height: 170px; border-radius: 20px;width: 170px;">
                        <img src="images/item-06.png" alt="">
                    </div>`;

  slideImages3.insertAdjacentHTML("afterbegin", html);
};

addSlide3();

let count3 = 200;
let slide3Animate = setInterval(function () {
  slideImages3.style.translate = `0% ${-count3}px`;
  count3 += 200;
  if (count3 > 600) {
    count3 = 0;
  }
}, 2000);

slideImages3.addEventListener("mouseenter", function () {
  clearInterval(slide3Animate);
});

slideImages3.addEventListener("mouseleave", function () {
  slide3Animate = setInterval(function () {
    slideImages3.style.translate = `0% ${-count3}px`;
    count3 += 200;
    if (count3 > 600) {
      count3 = 0;
    }
  }, 2000);
});

// end main header

// add about us section

const addAboutUs = function () {
  let html = `<div class="container-xxl about-us mt-5 p-xxl-5 py-5 m-auto">
        <div class="px-xxl-5 px-4 w-100 d-flex gap-5 flex-wrap-reverse justify-content-center align-items-center"
            style="margin-top: 100px !important;">
            <div class="images-box d-flex flex-wrap justify-content-center justify-content-xl-start flex-grow-1 gap-5">
                <div class="d-flex align-self-center justify-content-center align-items-center"
                    style="height: 320px;transition: 1s;width: 270px;border-radius: 20px;background-color:#7153d9">
                    <img src="images/item-08.png" alt="">
                </div>
                <div class="d-flex gap-5 flex-column" style="transition: 1s;">
                    <div class="d-flex justify-content-center align-items-center"
                        style="height: 320px;transition: 1s;width: 270px;border-radius: 20px;background-color:#4526b1">
                        <img src="images/item-09.png" alt="">
                    </div>
                    <div class="d-flex justify-content-center align-items-center"
                        style="height: 320px;transition: 1s;width: 270px;border-radius: 20px;background-color:#4c22e1">
                        <img src="images/item-10.png" alt="">
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

  document.querySelector(".main-header").insertAdjacentHTML("afterend", html);
};

addAboutUs();

const imagesBox = Array.from(document.querySelector(".images-box").children);

// end about us section

// add cards section

const addCards = function () {
  let html = `
  <div class="container-xxl overflow-hidden cards-section mt-5 p-xxl-5 py-5 m-auto">
        <div class="px-xxl-5 px-4 w-100 d-flex gap-5 flex-wrap justify-content-center align-items-center"
            style="margin-top: 100px !important;">
            <div class="main-text mb-5 col-xl-5 d-flex flex-column gap-4">
                <h2 class="pb-4" style="transition: 1s;"><span
                        class="pb-4 border-5 border-bottom border-danger">Our</span>
                    Speciality
                </h2>
                <h1 class="mb-4" style="font-size: 45px;transition: 1s;line-height: 1.2;">Complete Solutions for your
                    NFT
                </h1>
                <h2 style="font-weight: 500;transition: 1s;font-size: 19px;">Sed ut perspiciatis unde omnis iste natus
                    enim ad minim veniam, quis nostrud exercit
                </h2>
            </div>
            <div class="cards flex-column d-flex col-xl-6 col-12 flex-grow-1 flex-wrap align-items-end">
                <div
                    class="d-flex col-xl-10 col-12  justify-content-center align-items-center px-3 gap-5 flex-lg-nowrap flex-wrap">
                    <div class="card mb-0 mb-lg-5 col-lg-6 col-12 d-flex gap-5 px-5 py-5 flex-column" data-tilt
                        data-tilt-glare data-tilt-max-glare="0.3">
                        <h1 style="font-size: 50px;">01</h1>
                        <a class="card-link">Huge Collection</a>
                        <h2 style="font-size: 17px;">Oficia dese runt mollit anim id est labo met, consectetur adipis
                        </h2>
                    </div>
                    <div class="card mt-0 mt-lg-5 col-lg-6 col-12 d-flex gap-5 px-5 py-5 flex-column" data-tilt
                        data-tilt-glare data-tilt-max-glare="0.3">
                        <h1 style="font-size: 50px;">02</h1>
                        <a class="card-link">High Quality</a>
                        <h2 style="font-size: 17px;">Oficia dese runt mollit anim id est labo met, consectetur adipis
                        </h2>
                    </div>
                </div>
                <div
                    class="d-flex col-xl-10 col-12  justify-content-center align-items-center px-3 gap-5 flex-lg-nowrap flex-wrap">
                    <div class="card mt-5 mt-lg-0 mb-0 mb-lg-5 col-lg-6 col-12 d-flex gap-5 px-5 py-5 flex-column"
                        data-tilt data-tilt-glare data-tilt-max-glare="0.3">
                        <h1 style="font-size: 50px;">03</h1>
                        <a class="card-link">Top Resource</a>
                        <h2 style="font-size: 17px;">Oficia dese runt mollit anim id est labo met, consectetur adipis
                        </h2>
                    </div>
                    <div class="card mt-0 mt-lg-5 col-lg-6 col-12 d-flex gap-5 px-5 py-5 flex-column" data-tilt
                        data-tilt-glare data-tilt-max-glare="0.3">
                        <h1 style="font-size: 50px;">04</h1>
                        <a class="card-link">Big Community</a>
                        <h2 style="font-size: 17px;">Oficia dese runt mollit anim id est labo met, consectetur adipis
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div> 
   `;

  $(html).insertAfter(".about-us");
};

addCards();

const cards = $(".card");

// end cards section

//  add portfolio section

const addPortfolio = function () {
  let html = `<div class="container-xxl overflow-hidden join-porfolio mt-5 p-xxl-5 py-5 m-auto">
  <div class="position-relative"><div
        style="position: absolute; top: 0; left: 50%; translate: -50% 0;font-size: 250px;color: transparent;-webkit-text-stroke: 3px #311686;font-weight: 900;letter-spacing: 25px;">
        JOIN
    </div></div>
        <div class="px-xxl-5 px-4 w-100 d-flex gap-5 flex-wrap justify-content-center align-items-center"
            style="margin-top: 100px !important;">
            <div class="main-text text-center mb-5 col-12 justify-content-center d-flex flex-column gap-4">
                <h2 class="pb-4" style="transition: 1s;">Join NF<span
                        class="pb-4 border-5 border-bottom border-danger">T Po</span>rtfolio
                </h2>
                <h1 class="mb-4" style="font-size: 45px;transition: 1s;line-height: 1.2;">Become a Monteno
                    Player Now
                </h1>
            </div>
            <div class="cards portfolio d-flex col-12 align-items-center gap-5 flex-wrap">
                <div
                    class="card down col-12 col-lg-5 text-center text-lg-start flex-column flex-lg-row d-flex gap-5 flex-grow-1 px-5 py-5">
                    <div class="d-flex p-5 justify-content-center align-items-center align-self-lg-start align-self-center"
                        style="border-radius: 50%; background-color: white; width: 80px; height: 80px;">
                        <img src="images/wallet.png" alt="">
                    </div>
                    <div>
                        <p style="color: rgb(253 86 42);font-size: 18px;">Step 01
                        </p>
                        <a>Connect Your Wallet
                        </a>
                        <p class="mt-4" style="font-size: 19px; line-height: 1.8;">Oficia dese runt mollit anim id est
                            labo met, conse ctetur adipi smod tempor inc
                            ididunt ut
                            labore et dolore quis
                        </p>
                    </div>
                </div>
                <div
                    class="card down col-12 col-lg-5 text-center text-lg-start flex-column flex-lg-row d-flex gap-5 flex-grow-1 px-5 py-5">
                    <div class="d-flex p-5 justify-content-center align-items-center align-self-lg-start align-self-center"
                        style="border-radius: 50%; background-color: white; width: 80px; height: 80px;">
                        <img src="images/shopping-cart.png" alt="">
                    </div>
                    <div>
                        <p style="color: rgb(253 86 42);font-size: 18px;">Step 02
                        </p>
                        <a>Buy Your NFT
                        </a>
                        <p class="mt-4" style="font-size: 19px; line-height: 1.8;">Oficia dese runt mollit anim id est
                            labo met, conse ctetur adipi smod tempor inc
                            ididunt ut
                            labore et dolore quis
                        </p>
                    </div>
                </div>
                <div
                    class="card up col-12 col-lg-5 text-center text-lg-start flex-column flex-lg-row d-flex gap-5 flex-grow-1 px-5 py-5">
                    <div class="d-flex p-5 justify-content-center align-items-center align-self-lg-start align-self-center"
                        style="border-radius: 50%; background-color: white; width: 80px; height: 80px;">
                        <img src="images/folder.png" alt="">
                    </div>
                    <div>
                        <p style="color: rgb(253 86 42);font-size: 18px;">Step 03
                        </p>
                        <a>Create Collection
                        </a>
                        <p class="mt-4" style="font-size: 19px; line-height: 1.8;">Oficia dese runt mollit anim id est
                            labo met, conse ctetur adipi smod tempor inc
                            ididunt ut
                            labore et dolore quis
                        </p>
                    </div>
                </div>
                <div
                    class="card up col-12 col-lg-5 text-center text-lg-start flex-column flex-lg-row d-flex gap-5 flex-grow-1 px-5 py-5">
                    <div class="d-flex p-5 justify-content-center align-items-center align-self-lg-start align-self-center"
                        style="border-radius: 50%; background-color: white; width: 80px; height: 80px;">
                        <img src="images/money-bag.png" alt="">
                    </div>
                    <div>
                        <p style="color: rgb(253 86 42);font-size: 18px;">Step 04
                        </p>
                        <a>Sell Your NFT
                        </a>
                        <p class="mt-4" style="font-size: 19px; line-height: 1.8;">Oficia dese runt mollit anim id est
                            labo met, conse ctetur adipi smod tempor inc
                            ididunt ut
                            labore et dolore quis
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

  $(html).insertAfter(".cards-section");
};

addPortfolio();

// add image animation
const porfolioCards = Array.from($(".card")).splice(4, 8);

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

// end portfolio section

// add square shapes section

const addSquareSection = function () {
  let html = `<div
        class="w-100 d-flex mt-5 square-shapes-section overflow-hidden px-3 gap-5 flex-wrap justify-content-center align-items-center">
        <br>
        <br>
        <div class="square-shapes flex-grow-1 mt-5 d-flex justify-content-evenly flex-wrap gap-5">
            <div class="item">
                <img class="col-12" src="images/montono-01.png" alt="">
                <div class="item-title ">
                    <h2>Monteno item 1</h2>
                </div>
            </div>
            <div class="item">
                <img class="col-12" src="images/montono-02.png" alt="">
                <div class="item-title ">
                    <h2>Monteno item 2</h2>
                </div>
            </div>
            <div class="item">
                <img class="col-12" src="images/montono-03.png" alt="">
                <div class="item-title ">
                    <h2>Monteno item 3</h2>
                </div>
            </div>
            <div class="item">
                <img class="col-12" src="images/montono-04.png" alt="">
                <div class="item-title ">
                    <h2>Monteno item 4</h2>
                </div>
            </div>
            <div class="item">
                <img class="col-12" src="images/montono-05.png" alt="">
                <div class="item-title ">
                    <h2>Monteno item 5</h2>
                </div>
            </div>
            <div class="item">
                <img class="col-12" src="images/montono-06.png" alt="">
                <div class="item-title ">
                    <h2>Monteno item 6</h2>
                </div>
            </div>
            <div class="item">
                <img class="col-12" src="images/montono-07.png" alt="">
                <div class="item-title ">
                    <h2>Monteno item 7</h2>
                </div>
            </div>
            <div class="item">
                <img class="col-12" src="images/montono-08.png" alt="">
                <div class="item-title ">
                    <h2>Monteno item 8</h2>
                </div>
            </div>
        </div>
    </div>`;

  $(html).insertAfter(".join-porfolio");
};

addSquareSection();

const squareShapes = Array.from($(".square-shapes .item"));

// end square shapes section

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
                    Monteno NFT
                </h1>
            </div>
        </div>
    </div>
    <div class="container-xxl road-map p-xxl-5 py-5 m-auto" style="margin-top: -60px !important;">
        <div class="position-relative map-line d-none d-lg-block w-100">
            <div class="position-absolute"
                style="left: 50%; top: 120px; translate: -50% 0%; height: 1140px;width: 4px; background-color:white; border-radius:30px;">
            </div>
            <div class="button map-button main d-none d-lg-flex justify-content-center align-items-center"
                style="position: absolute;bottom: -1301px; left: 50%; translate: -50% 0%; width: 128px;font-size: 15px;padding: 8px 0px !important;transition: 1s">
                View Full
                <div></div>
            </div>
        </div>
        <div class="px-xxl-5 px-4 w-100 d-flex gap-lg-0 gap-5 flex-wrap justify-content-center align-items-center">
            <div class="d-flex w-100 mt-lg-5">
                <div class="map-box right position-relative d-flex gap-4 align-self-end flex-column p-5 col-lg-5 mt-lg-5"
                    style="background-color: #4526b1;
  border-radius: 20px;transition: 1s;">
                    <p style="color: rgb(253 86 42);font-size: 16px;">February 01, 2022
                    </p>
                    <h1>Idea Generation
                    </h1>
                    <p style="font-size: 19px; line-height: 1.8;">Oficia dese runt mollit anim id est labo met conse
                        ctetur
                        adipi smod tempor inc ididunt ut labore et dolore quis
                    </p>
                    <div class="position-absolute d-none d-lg-block" style="top: 50%;
                        left: 100%;
                        translate: 0 -50%;
                        width: 20%;
                        height: 4px;
                        background-color: white;">
                        <span class="position-absolute d-flex justify-content-center align-items-center" style="left: 100%;
                        top: 50%;
                        translate: -50% -50%;
                        color: rgb(253 86 42);
                        font-size: 22px;
                        border-radius: 50%;
                        width: 35px;
                        height: 35px;
                        background-color: white;">
                            <i class="fa-solid fa-check"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="d-flex w-100 justify-content-end mb-lg-5">
                <div class="map-box up position-relative d-flex gap-4 flex-column p-5 col-lg-5 mb-lg-5" style="background-color: #4526b1;
  border-radius: 20px;transition: 1s;">
                    <p style="color: rgb(253 86 42);font-size: 16px;">March 30, 2022
                    </p>
                    <h1>Design & Development
                    </h1>
                    <p style="font-size: 19px; line-height: 1.8;">Oficia dese runt mollit anim id est labo met conse
                        ctetur
                        adipi smod tempor inc ididunt ut labore et
                        dolore quis
                    </p>
                    <div class="position-absolute d-none d-lg-block" style="top: 50%;
                                            right: 100%;
                                            translate: 0 -50%;
                                            width: 20%;
                                            height: 4px;
                                            background-color: white;">
                        <span class="position-absolute d-flex justify-content-center align-items-center" style="right: 100%;
                                            top: 50%;
                                            translate: 50% -50%;
                                            color: rgb(253 86 42);
                                            font-size: 22px;
                                            border-radius: 50%;
                                            width: 35px;
                                            height: 35px;
                                            background-color: white;">
                            <i class="fa-solid fa-check"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="d-flex w-100 mt-lg-5">
                <div class="map-box right position-relative d-flex gap-4 align-self-end flex-column p-5 col-lg-5 mt-lg-5"
                    style="background-color: #4526b1;
  border-radius: 20px;transition: 1s;">
                    <p style="color: rgb(253 86 42);font-size: 16px;">April 20, 2022
                    </p>
                    <h1>Initial Release
                    </h1>
                    <p style="font-size: 19px; line-height: 1.8;">Oficia dese runt mollit anim id est labo met conse
                        ctetur
                        adipi smod tempor inc ididunt ut labore et dolore quis
                    </p>
                    <div class="position-absolute d-none d-lg-block" style="top: 50%;
                                            left: 100%;
                                            translate: 0 -50%;
                                            width: 20%;
                                            height: 4px;
                                            background-color: white;">
                        <span class="position-absolute d-flex justify-content-center align-items-center" style="left: 100%;
                                            top: 50%;
                                            translate: -50% -50%;
                                            color: rgb(253 86 42);
                                            font-size: 17px;
                                            border-radius: 50%;
                                            width: 35px;
                                            height: 35px;
                                            background-color: white;">
                            <i class="fa-solid fa-circle" style="color: #ff2600;"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="d-flex w-100 justify-content-end mb-lg-5">
                <div class="map-box up position-relative d-flex gap-4 flex-column p-5 col-lg-5 mb-lg-5" style="background-color: #4526b1;
  border-radius: 20px;transition: 1s;">
                    <p style="color: rgb(253 86 42);font-size: 16px;">May 30, 2022
                    </p>
                    <h1>Result & Final Report
                    </h1>
                    <p style="font-size: 19px; line-height: 1.8;">Oficia dese runt mollit anim id est labo met conse
                        ctetur
                        adipi smod tempor inc ididunt ut labore et
                        dolore quis
                    </p>
                    <div class="position-absolute d-none d-lg-block" style="top: 50%;
                                                                right: 100%;
                                                                translate: 0 -50%;
                                                                width: 20%;
                                                                height: 4px;
                                                                background-color: white;">
                        <span class="position-absolute d-flex justify-content-center align-items-center" style="right: 100%;
                                                                top: 50%;
                                                                translate: 50% -50%;
                                                                color: rgb(253 86 42);
                                                                font-size: 17px;
                                                                border-radius: 50%;
                                                                width: 35px;
                                                                height: 35px;
                                                                background-color: white;">
                            <i class="fa-solid fa-angle-down" style="color: #b3b3b3;"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="button map-button2 main text-center d-lg-none d-block"
                style="width: 150px;font-size: 15px;padding: 8px 0px !important;transition: 1s">
                View Full
                <div></div>
            </div>
        </div>
    </div>`;

  $(html).insertAfter(".square-shapes-section");
};

addRoadMap();

let mapBox = document.querySelectorAll(".map-box");

// end road map section

// add newsletter section

const addNewsletter = function () {
  let html = `  <div class="container-xxl newsletter overflow-hidden mt-5 p-xxl-5 py-5 m-auto" style="transition: 1s;">
   <div class="px-xxl-5 px-4 w-100 d-flex gap-lg-0 gap-5 flex-wrap justify-content-center align-items-center">
        <div class="p-5 w-100 d-flex gap-5 flex-wrap align-items-center justify-content-center"
            style="margin-top: 100px !important;background-color: #7153d9; border-radius: 18px">
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

  $(html).insertAfter(".road-map");
};

addNewsletter();

// end newsletter section

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
                        <img src="images/team-01.jpg" alt="">
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
                        </div><img src="images/team-02.jpg" alt="">
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
                        </div><img src="images/team-03.jpg" alt="">
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
                        </div><img src="images/team-04.jpg" alt="">
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
                        </div><img src="images/team-01.jpg" alt="">
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
                        </div><img src="images/team-02.jpg" alt="">
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

  $(html).insertAfter(".newsletter");
};

addSliderImages();

const swiperSlide = document.querySelector(".slider-section");

// end slider images

// add brand section

const addBrandSection = function () {
  let html = `   <div class="overflow-hidden w-100 p-xxl-5 mt-5 py-5 m-auto">
        <div class="position-relative">
            <h1
                style="position: absolute; top: 0; left: 50%; translate: -50% 0;font-size: 250px;color: transparent;-webkit-text-stroke: 3px #311686;font-weight: 900;letter-spacing: 25px;text-wrap: nowrap;">
                TEAM
            </h1>
        </div>
        <div class="px-xxl-5 mb-5 px-4 w-100 d-flex gap-5 flex-wrap justify-content-center align-items-center"
            style="margin-top: 100px !important;">
            <div class="main-text text-center mb-5 col-12 justify-content-center d-flex flex-column gap-4">
                <h2 class="pb-4" style="transition: 0.5s;">Pa<span
                        class="pb-4 border-5 border-bottom border-danger">rtne</span>rs
                </h2>
                <h1 class="mb-4" style="font-size: 45px;transition: 1s;line-height: 1.2;">We Are Partnered
                    with Top Brands
                </h1>
            </div>
        </div>
    </div>
    <div class="container-xxl brands p-xxl-5 py-5 m-auto" style="margin-top: -60px !important; margin-bottom: 100px !important;">
        <div class="px-xxl-5 px-4 w-100 d-flex gap-lg-0 gap-5 flex-wrap justify-content-center align-items-center">
            <div class="row w-100 mt-5">
                <div class="brand-box col-md-3 col-6 p-5 d-flex justify-content-center"
                    style="height: 170px;border: 1px solid rgba(255, 255, 255, 0.188); transition-delay: 0.1s;"><img class="align-self-center"
                        style="opacity: 0.5; transition: 1s;" src="images/logo-01.png" alt="" width="115px">
                </div>
                <div class="brand-box col-md-3 col-6 p-5 d-flex justify-content-center"
                    style="height: 170px;border: 1px solid rgba(255, 255, 255, 0.188); transition-delay: 0.7s;"><img class="align-self-center"
                        style="opacity: 0.5; transition: 1s;" src="images/logo-02.png" alt="" width="115px">
                </div>
                <div class="brand-box col-md-3 col-6 p-5 d-flex justify-content-center"
                    style="height: 170px;border: 1px solid rgba(255, 255, 255, 0.188); transition-delay: 1s;"><img class="align-self-center"
                        style="opacity: 0.5; transition: 1s;" src="images/logo-03.png" alt="" width="115px">
                </div>
                <div class="brand-box col-md-3 col-6 p-5 d-flex justify-content-center"
                    style="height: 170px;border: 1px solid rgba(255, 255, 255, 0.188); transition-delay: 0.4s;"><img class="align-self-center"
                        style="opacity: 0.5; transition: 1s;" src="images/logo-04.png" alt="" width="115px">
                </div>
                <div class="brand-box col-md-3 col-6 p-5 d-flex justify-content-center"
                    style="height: 170px;border: 1px solid rgba(255, 255, 255, 0.188); transition-delay: 0.5s;"><img class="align-self-center"
                        style="opacity: 0.5; transition: 1s;" src="images/logo-05.png" alt="" width="115px">
                </div>
                <div class="brand-box col-md-3 col-6 p-5 d-flex justify-content-center"
                    style="height: 170px;border: 1px solid rgba(255, 255, 255, 0.188); transition-delay: 0.8s;"><img class="align-self-center"
                        style="opacity: 0.5; transition: 1s;" src="images/logo-06.png" alt="" width="115px">
                </div>
                <div class="brand-box col-md-3 col-6 p-5 d-flex justify-content-center"
                    style="height: 170px;border: 1px solid rgba(255, 255, 255, 0.188); transition-delay: 0.6s;"><img class="align-self-center"
                        style="opacity: 0.5; transition: 1s;" src="images/logo-07.png" alt="" width="115px">
                </div>
                <div class="brand-box col-md-3 col-6 p-5 d-flex justify-content-center"
                    style="height: 170px;border: 1px solid rgba(255, 255, 255, 0.188); transition-delay: 0.3s;"><img class="align-self-center"
                        style="opacity: 0.5; transition: 1s;" src="images/logo-08.png" alt="" width="115px">
                </div>
            </div>
        </div>
    </div>`;

  $(html).insertAfter(".slider-section");
};

addBrandSection();

const brandBoxes = document.querySelectorAll(".brand-box");

// end brand section

// add slider images 2

const addSliderImages2 = function () {
  let html = ` <div class="container-xxl px-2 py-5 m-auto" style="margin-top: -60px !important;">
        <div class="px-xxl-5 px-4 w-100">
            <div class="swiper mySwiper2 container-xxl py-5 m-auto">
                <div class="swiper-wrapper" style="gap: 0px !important;">
                    <div class="swiper-slide w-100 slide2 d-flex flex-lg-row flex-column col-lg-6 col-12"
                        style="min-width: 100% !important;background-color: transparent;min-height: 530px;">
                        <div class="slider2-image mb-lg-0 mb-5 d-flex justify-content-lg-start justify-content-center flex-grow-1"
                            style="transition: 1s;">
                            <img style="min-width: 200px; max-width: 500px; border-radius: 50%"
                                src="images/testimonial-01.jpg" alt="">
                        </div>
                        <div class="main-text align-self-baseline col-lg-6 col-12 d-flex flex-column gap-4"
                            style="text-align: left;">
                            <h2 class="pb-4" style="transition: 1s;"><span
                                    class="pb-4 border-5 border-bottom border-danger">Tes</span>timonials
                            </h2>
                            <h1 style="font-size: 45px;transition: 1s;line-height: 1.2;">What People Say
                            </h1>
                            <div class="d-flex gap-4 align-content-start" style="transition: 1s;">
                                <img class="d-none d-sm-block align-self-start" style="width: 55px"
                                    src="images/left-quote.png" alt="">
                                <div class="d-flex mt-4 flex-column gap-5">
                                    <p style="font-size: 20px;line-height: 1.8;"><I>Lorem ipsum dolor sit amet,
                                            consectetur adipisicing
                                            elit. Temporibus porro
                                            possimus consectetur dicta quae eaque veritatis incidunt a enim consequatur
                                            fugit, consequuntur aspernatur </I>
                                    </p>
                                    <div class="d-flex gap-4 align-items-center">
                                        <img style="width: 50px;height: 50px;" src="images/avt-01.png" alt="">
                                        <h1 style="margin-bottom: 0 !important; font-size: 21px;">Paul Harrison,</h1>
                                        <p style="font-size: 17px;">Founder & CEO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide w-100 slide2 d-flex flex-lg-row flex-column col-lg-6 col-12"
                        style="min-width: 100% !important;background-color: transparent;">
                        <div class="slider2-image mb-lg-0 mb-5 d-flex justify-content-lg-start justify-content-center flex-grow-1"
                            style="transition: 1s;">
                            <img style="min-width: 200px; max-width: 500px; border-radius: 50%"
                                src="images/testimonial-01.jpg" alt="">
                        </div>
                        <div class="main-text align-self-baseline col-lg-6 col-12 d-flex flex-column gap-4"
                            style="text-align: left;">
                            <h2 class="pb-4" style="transition: 1s;"><span
                                    class="pb-4 border-5 border-bottom border-danger">Tes</span>timonials
                            </h2>
                            <h1 style="font-size: 45px;transition: 1s;line-height: 1.2;">What People Say
                            </h1>
                            <div class="d-flex gap-4 align-content-start" style="transition: 1s;">
                                <img class="d-none d-sm-block align-self-start" style="width: 55px"
                                    src="images/left-quote.png" alt="">
                                <div class="d-flex mt-4 flex-column gap-5">
                                    <p style="font-size: 20px;line-height: 1.8;text-wrap: wrap;"><I>Lorem ipsum dolor
                                            sit amet,
                                            consectetur adipisicing
                                            elit. Temporibus porro
                                            possimus consectetur dicta quae eaque veritatis incidunt a enim consequatur
                                            fugit, consequuntur aspernatur </I>
                                    </p>
                                    <div class="d-flex gap-4 align-items-center">
                                        <img style="width: 50px;height: 50px;" src="images/avt-01.png" alt="">
                                        <h1 style="margin-bottom: 0 !important; font-size: 21px;">Paul Harrison,</h1>
                                        <p style="font-size: 17px;">Founder & CEO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide w-100 slide2 d-flex flex-lg-row flex-column col-lg-6 col-12"
                        style="min-width: 100% !important;background-color: transparent;">
                        <div
                            class="slider2-image mb-lg-0 mb-5 d-flex justify-content-lg-start justify-content-center flex-grow-1">
                            <img style="min-width: 200px; max-width: 500px; border-radius: 50%"
                                src="images/testimonial-01.jpg" alt="">
                        </div>
                        <div class="main-text align-self-baseline col-lg-6 col-12 d-flex flex-column gap-4"
                            style="text-align: left;transition: 1s;">
                            <h2 class="pb-4" style="transition: 1s;"><span
                                    class="pb-4 border-5 border-bottom border-danger">Tes</span>timonials
                            </h2>
                            <h1 style="font-size: 45px;transition: 1s;line-height: 1.2;">What People Say
                            </h1>
                            <div class="d-flex gap-4 align-content-start" style="transition: 1s;">
                                <img class="d-none d-sm-block align-self-start" style="width: 55px;transition: 1s;"
                                    src="images/left-quote.png" alt="">
                                <div class="d-flex mt-4 flex-column gap-5" style="transition: 1s;">
                                    <p style="font-size: 20px;line-height: 1.8;text-wrap: wrap;transition: 1s;"><I>Lorem
                                            ipsum dolor
                                            sit amet,
                                            consectetur adipisicing
                                            elit. Temporibus porro
                                            possimus consectetur dicta quae eaque veritatis incidunt a enim consequatur
                                            fugit, consequuntur aspernatur </I>
                                    </p>
                                    <div class="d-flex gap-4 align-items-center" style="transition: 1s;">
                                        <img style="width: 50px;height: 50px;transition: 1s;" src="images/avt-01.png"
                                            alt="">
                                        <h1 style="margin-bottom: 0 !important; font-size: 21px;transition: 1s;">Paul
                                            Harrison,</h1>
                                        <p style="font-size: 17px;transition: 1s;">Founder & CEO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-next d-none d-md-flex" style="color: white;"><i
                        class="fa-solid fa-arrow-right-long"></i>
                </div>
                <div class="swiper-button-prev d-none d-md-flex" style="color: white;"><i
                        class="fa-solid fa-arrow-left-long"></i>
                </div>
            </div>
        </div>
    </div>


 <script>
        var swiper = new Swiper(".mySwiper2", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    </script>`;

  $(html).insertAfter(".brands");
};

addSliderImages2();

const swiper2Height = document.querySelector(".mySwiper2");
const swiper2Images = document.querySelector(".slider2-image");
const swiper2Text = document.querySelectorAll(".mySwiper2 .main-text");

// end slider images 2

// add questions sections

const addQuestionsSection = function () {
  let html = `<div class="overflow-hidden w-100 p-xxl-5 mt-5 py-5 m-auto">
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
    <div class="container-xxl questions p-xxl-5 py-5 m-auto" style="margin-top: -60px !important;">
        <div class="w-100">
            <div class="d-flex gap-md-5 flex-wrap">
                <div class="col-md-5 col-12 flex-grow-1">
                    <div class="questions-box d-flex flex-column gap-4">
                        <h1 style="font-size: 25px;cursor: pointer;"><span
                                style="font-size: 35px;margin-right: 10px !important;">+</span> When the
                            musics over
                            turn off the
                            light?
                        </h1>
                        <p class="ms-5" style="font-size: 18px; line-height: 1.8;">Oficia dese runt mollit anim id est
                            labo met, conse ctetur adipi smod tempor inc ididunt ut
                            labore et dolore qui inim
                            veniam, quis nostrud ex ercitation ullamco laboris nisi ut aliquip</p>
                    </div>
                    <div class="questions-box d-flex flex-column gap-4">
                        <h1 style="font-size: 25px;cursor: pointer;"><span
                                style="font-size: 35px;margin-right: 10px !important;">+</span> What is the best way to
                            collect NFT?

                        </h1>
                        <p class="ms-5" style="font-size: 18px; line-height: 1.8;">Oficia dese runt mollit anim id est
                            labo met, conse ctetur adipi smod tempor inc ididunt ut
                            labore et dolore qui inim
                            veniam, quis nostrud ex ercitation ullamco laboris nisi ut aliquip</p>
                    </div>
                    <div class="questions-box d-flex flex-column gap-4">
                        <h1 style="font-size: 25px;cursor: pointer;"><span
                                style="font-size: 35px;margin-right: 10px !important;">+</span> Why NFT Trading is so
                            popular?
                        </h1>
                        <p class="ms-5" style="font-size: 18px; line-height: 1.8;">Oficia dese runt mollit anim id est
                            labo met, conse ctetur adipi smod tempor inc ididunt ut
                            labore et dolore qui inim
                            veniam, quis nostrud ex ercitation ullamco laboris nisi ut aliquip</p>
                    </div>
                    <div class="questions-box d-flex flex-column gap-4">
                        <h1 style="font-size: 25px;cursor: pointer;"><span
                                style="font-size: 35px;margin-right: 10px !important;">+</span> How do you trade on
                            Montono easily?
                        </h1>
                        <p class="ms-5" style="font-size: 18px; line-height: 1.8;">Oficia dese runt mollit anim id est
                            labo met, conse ctetur adipi smod tempor inc ididunt ut
                            labore et dolore qui inim
                            veniam, quis nostrud ex ercitation ullamco laboris nisi ut aliquip</p>
                    </div>
                </div>
                <div class="col-5 flex-grow-1">
                    <div class="questions-box d-flex flex-column gap-4">
                        <h1 style="font-size: 25px;cursor: pointer;"><span
                                style="font-size: 35px;margin-right: 10px !important;">+</span>
                            When the
                            musics over
                            turn off the
                            light?
                        </h1>
                        <p class="ms-5" style="font-size: 18px; line-height: 1.8;">Oficia dese runt mollit anim id est
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
                        <p class="ms-5" style="font-size: 18px; line-height: 1.8;">Oficia dese runt mollit anim id est
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
                        <p class="ms-5" style="font-size: 18px; line-height: 1.8;">Oficia dese runt mollit anim id est
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
                        <p class="ms-5" style="font-size: 18px; line-height: 1.8;">Oficia dese runt mollit anim id est
                            labo met, conse ctetur adipi smod tempor inc ididunt ut
                            labore et dolore qui inim
                            veniam, quis nostrud ex ercitation ullamco laboris nisi ut aliquip</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

  $(html).insertAfter(".mySwiper2");
};

addQuestionsSection();

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

// add nft portfolio section

const addNftPortfoilio = function () {
  let html = ` <div class="container-xxl nft-portfolio overflow-hidden mt-5 p-xxl-5 py-5 m-auto" style="transition: 1s;">
        <div class="w-100 d-flex gap-lg-0 gap-5 flex-wrap justify-content-center align-items-center">
            <div class="p-5 w-100 d-flex gap-5 flex-wrap align-items-center justify-content-center"
                style="margin-top: 50px !important;background-color: #4c22e1; border-radius: 18px">
                <div class="d-flex gap-4 flex-column py-5 px-5 px-sm-5">
                    <h1 style="font-size: 50px;line-height: 1;letter-spacing: 2px;">Create Your NFT Portfolio
                    </h1>
                    <p style="font-size: 21px;">Get udpated with news, tips & tricks
                    </p>
                </div>
                <div class="d-flex flex-grow-1 justify-content-center">
                    <button class="button main"
                        style="padding: 20px 60px !important;transition: 1s; font-size: 20px;font-weight: 500;border: none;z-index: 1;">Join
                        Now
                        <div></div>
                    </button>
                </div>
            </div>
        </div>
    </div>`;

  $(html).insertAfter(".questions");
};

addNftPortfoilio();

// end nft portfolio section

const mainText = Array.from(document.querySelectorAll(".main-text"));
