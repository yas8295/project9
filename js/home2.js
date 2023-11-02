// active page

document
  .querySelector(".links")
  .children[0].children[1].children[0].classList.remove("active");
document
  .querySelector(".links")
  .children[0].children[1].children[1].classList.add("active");

document.querySelectorAll(".drop-content a")[1].classList.remove("active");

document.querySelectorAll(".drop-content a")[2].classList.add("active");

// active page

window.addEventListener("load", function () {
  const headerImages = document.querySelectorAll(".header .images-box div");
  headerImages.forEach((e) => (e.style.scale = "1"));
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
  // animate cards
  for (let c of cards) {
    moveUp(c);
  }
  // end animate cards
  // animate images box
  scale(imagesBox[0]);
  scale(imagesBox[1].children[0]);
  scale(imagesBox[1].children[1]);
  // end animate images box
  // add animate sqaure shapes
  squareShapes.forEach((e) => rotate360(e));
  squareShapes.forEach((e) => scale(e));
  // end animate sqaure shapes
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
  // add brand box animate
  moveUp(brands);
  // end brand box animate
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
  // add team animate
  teamMemberBox.forEach((e) => moveUp(e));
  // end team animate
  // add slider animate
  moveUp(swiperSlide);
  // end slider animate
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
  background-image: url(../images/bg-element-2.webp);
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

.cards .card:hover {
  transition: 0.2s;
 transition-delay: 0s;
}

.cards .card {
  background-color: #4526b1;
  border-radius: 20px;
  cursor: pointer;
  transition: 1s;
}

 .cards-section .card:nth-of-type(1) {
        transition-delay: 0s;
    }

    .cards-section .card:nth-of-type(2) {
        transition-delay: 0.1s;
    }

    .cards-section .card:nth-of-type(3) {
        transition-delay: 0.2s;
    }

    .cards-section .card:nth-of-type(4) {
        transition-delay: 0.3s;
    }
    .cards-section .card:nth-of-type(4):hover {
        transition-delay: 0s;
    }
    .cards-section .card:nth-of-type(3):hover {
        transition-delay: 0s;
    }
    .cards-section .card:nth-of-type(2):hover {
        transition-delay: 0s;
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

  .swiper {
        width: 100%;
        height: 100%;
        overflow-y: visible;
        overflow-x: clip;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 1s;
    }

   .swiper-slide img {
        display: block;
        height: 270px;
    }

    .swiper-button-next,
    .swiper-button-prev {
        position: absolute;
        color: #f9542a;
        top: 50%;
        translate: 0 -50%;
    }

    @media (max-width: 1405px) {

        .swiper-button-next,
        .swiper-button-prev {
            display: none;
        }
    }

    .swiper-button-next {
        right: -100px;
    }

    .swiper-button-prev {
        left: -100px;
    }

    .swiper-button-next.swiper-button-disabled,
    .swiper-button-prev.swiper-button-disabled {
        color: #ffffff;
        opacity: .35;
        cursor: auto;
        pointer-events: none;
    }

    .brands {
        transition: 1s;
    }

        .brand-box {
          cursor: pointer;
          transition: 1s;
        }

        .brand-box:hover img {
          opacity: 1 !important;
        }

           .brand-swiper .swiper {
        width: 100%;
        height: 100%;
    }

    .brand-swiper .swiper-slide {}

    .brand-swiper .swiper-slide img {
        width: 115px;
        height: 35px;
    }

       .team-member:nth-of-type(1) {
        transition: 1s;
        transition-delay: 0.2s;
    }

    .team-member:nth-of-type(2) {
        transition: 1s;
        transition-delay: 0.3s;
    }

    .team-member:nth-of-type(3) {
        transition: 1s;
        transition-delay: 0.4s;
    }

    .team-member:nth-of-type(4) {
        transition: 1s;
        transition-delay: 0.5s;
    }

    .team-member:nth-of-type(5) {
        transition: 1s;
        transition-delay: 0.2s;
    }

    .team-member:nth-of-type(6) {
        transition: 1s;
        transition-delay: 0.3s;
    }

    .team-member:nth-of-type(7) {
        transition: 1s;
        transition-delay: 0.4s;
    }

    .team-member h2 {
        transition: 0.4s;
        cursor: pointer;
    }

    .team-member h2:hover {
        color: hwb(13 18% 0%);
    }

    .team-member:hover .team-image div {
        height: 100%;
    }

    .team-member:hover .team-image div i {
        opacity: 1;
    }

    .team-image div {
        transition: 0.5s;
        height: 0;
    }

    .team-image div i {
        font-size: 19px;
        cursor: pointer;
    }

    .team-image div i:first-child {
        translate: -40px 125px;
        transition-duration: 0.5s;
        transition-delay: 0.7s;
        opacity: 0;
    }

    .team-image div i:nth-child(2) {
        translate: 0px 125px;
        transition-duration: 0.5s;
        transition-delay: 0.8s;
        opacity: 0;
    }

    .team-image div i:last-child {
        translate: 40px 125px;
        transition-duration: 0.5s;
        transition-delay: 1s;
        opacity: 0;
    }   

     .slider-section {
        transition: 1s;
    }

    .slider-section .swiper {
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

    .slider-section .swiper-pagination-bullet-active {
        opacity: var(--swiper-pagination-bullet-opacity, 1);
        background: white;
    }

    .slider-section .swiper-pagination-bullet-active::after {
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

    .slider-section .swiper-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        transition-property: transform;
        transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
        box-sizing: content-box;
        gap: 20px;
    }

    .slider-section .swiper-container {
        width: 100%;
        height: 100%;
        display: flex !important;
        gap: 15px;
    }

    .slider-section .swiper-slide {
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
        .slider-section .swiper-slide {
            width: 48% !important;
        }
    }

    @media (max-width: 500px) {
        .slider-section .swiper-slide {
            width: 96% !important;
        }
    }


    .slider-section .swiper-slide img {
        position: relative;
        display: block;
        width: 100%;
        object-fit: cover;
        border-radius: 15px;
        z-index: 0;
        transition: 1s;
    }

    .slider-section .slide-image {
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

// add social links

document.querySelector(".button").style.display = "none";
let html = ` <div class="d-flex flex-wrap gap-5 justify-content-center" style="transition: 1s;">
        <div class="social d-flex justify-content-center align-items-center" style=" font-size: 20px;cursor: pointer;">
            <i class=" fa-brands fa-twitter"></i>
        </div>
        <div class="social d-flex justify-content-center align-items-center" style="  font-size: 20px;cursor: pointer;">
            <i class=" fa-brands fa-facebook-f"></i>
        </div>
        <div class="social d-flex justify-content-center align-items-center" style="  font-size: 20px;cursor: pointer;">
            <i class=" fa-brands fa-linkedin-in"></i>
        </div>
        <div class="social d-flex justify-content-center align-items-center" style="  font-size: 20px;cursor: pointer;">
            <i class=" fa-brands fa-youtube"></i>
        </div>
    </div>`;

document.querySelector(".links").insertAdjacentHTML("beforeend", html);

// end social links

// add header

const addHeader = function () {
  let html = `<div class="w-100 header mt-5 px-xxl-5 px-3" style="transition: 1s;margin-top: 300px !important;margin-bottom: 150px !important">
        <div class="d-flex flex-row justify-content-center align-items-center">
            <div class="main-text position-relative col-12 mb-5 text-center d-flex flex-column gap-4">
                <h2 class="pb-4" style="transition: 1s;">We are <span
                        class="pb-4 border-5 border-bottom border-danger">Mon</span>teno NFT
                </h2>
                <h1 style="font-size: 60px;transition: 1s;line-height: 1.2;">Most Popular NFT <br> Collections
                </h1>
                <h2 style="font-weight: 500;transition: 1s;font-size: 23px;">Sed ut perspiciatis unde omnis iste
                    natus error sit vol
                    <br>uptatem accusantium
                </h2>
                <button class="button main align-self-center mt-5"
                    style="padding: 20px 50px !important;transition: 1s; font-size: 18px;font-weight: 500;border: none">Get
                    Connected
                    <div></div>
                </button>
                <div class="images-box d-none d-md-block position-absolute"
                    style="z-index: -2; transform: translate(160px, -100px);">
                    <div class="d-flex justify-content-center align-items-end mb-5 ms-5"
                        style="height: 120px;transition: 1s;width: 120px;border-radius: 20px;background-color:#7153d9; ">
                        <img style="width: 70px;" src="../images/roadImages/item-18.webp" alt="">
                    </div>
                </div>
                <div class="images-box d-none d-md-block  position-absolute"
                    style="z-index: -2; transform: translate(-20px, 100px);">
                    <div class="d-flex justify-content-center align-items-end mb-5 ms-5"
                        style="height: 160px;transition: 1s;width: 160px;border-radius: 20px;background-color:#3a1ca5; ">
                        <img style="width: 130px;" src="../images/item-02.png" alt="">
                    </div>
                </div>
                <div class="images-box d-none d-md-block  position-absolute"
                    style="z-index: -2; transform: translate(160px, 380px);">
                    <div class="d-flex justify-content-center align-items-end mb-5 ms-5"
                        style="height: 130px;transition: 1s;width: 130px;border-radius: 20px;background-color:#7455e1; ">
                        <img style="width: 130px;" src="../images/item-01.png" alt="">
                    </div>
                </div>
                <div class="images-box d-none d-md-block position-absolute"
                    style="z-index: -2; transform: translate(-260px, -100px);right: 0;">
                    <div class="d-flex justify-content-center align-items-end mb-5 ms-5"
                        style="height: 150px;transition: 1s;width: 150px;border-radius: 20px;background-color:#7153d9; ">
                        <img style="width: 120px;" src="../images/item-07.png" alt="">
                    </div>
                </div>
                <div class="images-box d-none d-md-block position-absolute"
                    style="z-index: -2; transform: translate(-50px, 100px);right: 0;">
                    <div class="d-flex justify-content-center align-items-end mb-5 ms-5"
                        style="height: 180px;transition: 1s;width: 180px;border-radius: 20px;background-color:#4428a8; ">
                        <img style="width: 160px;" src="../images/item-06.png" alt="">
                    </div>
                </div>
                <div class="images-box d-none d-md-block position-absolute"
                    style="z-index: -2; transform: translate(-200px, 400px);right: 0;">
                    <div class="d-flex justify-content-center align-items-end mb-5 ms-5"
                        style="height: 100px;transition: 1s;width: 100px;border-radius: 20px;background-color:#4428a8; ">
                        <img style="width: 65px;" src="../images/item-04.png" alt="">
                    </div>
                </div>
                <div class="images-box d-none d-md-block position-absolute"
                    style="z-index: -2; transform: translate(-370px, 470px);right: 0;">
                    <div class="d-flex justify-content-center align-items-end mb-5 ms-5"
                        style="height: 130px;transition: 1s;width: 130px;border-radius: 20px;background-color:#7459d5; ">
                        <img style="width: 105px;" src="../images/item-09.png" alt="">
                    </div>
                </div>

            </div>
        </div>
    </div>`;

  document.querySelector(".nav").insertAdjacentHTML("afterend", html);
};

addHeader();

// end header

// add cards section

const addCards = function () {
  let html = `  <div class="container-xxl cards overflow-hidden cards-section mt-5 p-xxl-5 py-5 m-auto">
        <div class="px-xxl-5 px-3 w-100 d-flex gap-5 flex-wrap justify-content-center align-items-center"
            style="margin-top: 100px !important;">
            <div class=" px-xxl-5 d-flex col-12 flex-grow-1 flex-wrap align-items-end">
                <div class="d-flex justify-content-center align-items-center px-3 gap-5 flex-lg-nowrap flex-wrap">
                    <div class="card col-lg-3 col-md-5 col-12 mb-0 mb-lg-5 d-flex gap-5 px-5 py-5 flex-column" data-tilt
                        data-tilt-glare data-tilt-max-glare="0.3"
                        style="padding-top: 50px !important;padding-bottom: 70px !important;transition-delay: 0s">
                        <img style="width: 60px;" src="../images/home2/hosting.png" alt="">
                        <a class="card-link">Huge Collection</a>
                        <h2 style="font-size: 17px;">Oficia dese runt mollit anim id est labo met, consectetur adipis
                        </h2>
                    </div>
                    <div class="card col-lg-3 col-md-5 col-12 mt-0 mt-lg-5 d-flex gap-5 px-5 py-5 flex-column" data-tilt
                        data-tilt-glare data-tilt-max-glare="0.3"
                        style="padding-top: 50px !important;padding-bottom: 70px !important;transition-delay: 0.2s">
                        <img style="width: 60px;" src="../images/home2/badge.png" alt="">
                        <a class="card-link">High Quality</a>
                        <h2 style="font-size: 17px;">Oficia dese runt mollit anim id est labo met, consectetur adipis
                        </h2>
                    </div>
                    <div class="card col-lg-3 col-md-5 col-12 mb-0 mb-lg-5 d-flex gap-5 px-5 py-5 flex-column" data-tilt
                        data-tilt-glare data-tilt-max-glare="0.3"
                        style="padding-top: 50px !important;padding-bottom: 70px !important;transition-delay: 0.4s">
                        <img style="width: 60px;" src="../images/home2/provision.png" alt="">
                        <a class="card-link">Top Resource</a>
                        <h2 style="font-size: 17px;">Oficia dese runt mollit anim id est labo met, consectetur adipis
                        </h2>
                    </div>
                    <div class="card col-lg-3 col-md-5 col-12 mt-0 mt-lg-5 d-flex gap-5 px-5 py-5 flex-column" data-tilt
                        data-tilt-glare data-tilt-max-glare="0.3"
                        style="padding-top: 50px !important;padding-bottom: 70px !important;transition-delay: 0.6s">
                        <img style="width: 60px;" src="../images/home2/chat.png" alt="">
                        <a class="card-link">Big Community</a>
                        <h2 style="font-size: 17px;">Oficia dese runt mollit anim id est labo met, consectetur adipis
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

  $(html).insertAfter(".header");
};

addCards();

const cards = $(".card");

// end cards section

// add about us section

const addAboutUs = function () {
  let html = `<div class="container-xxl about-us mt-5 p-xxl-5 py-5 m-auto">
        <div class="px-xxl-5 px-4 w-100 d-flex gap-5 flex-wrap-reverse justify-content-center align-items-center"
            style="margin-top: 100px !important;">
            <div class="images-box d-flex flex-wrap justify-content-center justify-content-xl-start flex-grow-1 gap-5">
                <div class="d-flex align-self-center justify-content-center align-items-center"
                    style="height: 320px;transition: 1s;width: 270px;border-radius: 20px;background-color:#7153d9">
                    <img src="../images/item-08.png" alt="">
                </div>
                <div class="d-flex gap-5 flex-column" style="transition: 1s;">
                    <div class="d-flex justify-content-center align-items-center"
                        style="height: 320px;transition: 1s;width: 270px;border-radius: 20px;background-color:#4526b1">
                        <img src="../images/item-09.png" alt="">
                    </div>
                    <div class="d-flex justify-content-center align-items-center"
                        style="height: 320px;transition: 1s;width: 270px;border-radius: 20px;background-color:#4c22e1">
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

  document.querySelector(".cards").insertAdjacentHTML("afterend", html);
};

addAboutUs();

const imagesBox = Array.from(
  document.querySelector(".about-us .images-box").children
);

// end about us section

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
                    <img class="col-12" src="../images/montono-01.png" alt="">
                    <div class="item-title ">
                        <h2>Monteno item 1</h2>
                    </div>
                </div>
                <div class="item">
                    <img class="col-12" src="../images/montono-02.png" alt="">
                    <div class="item-title ">
                        <h2>Monteno item 2</h2>
                    </div>
                </div>
                <div class="item">
                    <img class="col-12" src="../images/montono-03.png" alt="">
                    <div class="item-title ">
                        <h2>Monteno item 3</h2>
                    </div>
                </div>
                <div class="item">
                    <img class="col-12" src="../images/montono-04.png" alt="">
                    <div class="item-title ">
                        <h2>Monteno item 4</h2>
                    </div>
                </div>
                <div class="item">
                    <img class="col-12" src="../images/montono-05.png" alt="">
                    <div class="item-title ">
                        <h2>Monteno item 5</h2>
                    </div>
                </div>
                <div class="item">
                    <img class="col-12" src="../images/montono-06.png" alt="">
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

  $(html).insertAfter(".about-us");
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
    <div class="container-xxl road-map p-xxl-5 py-5 m-auto">
        <div class="w-100 px-3 px-xxl-5 d-flex flex-column gap-5" style="margin-top: 20px !important;">
            <div class="swiper mySwiper mb-5 d-none d-sm-block">
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
            <div class="swiper mySwiper mt-5 d-none d-sm-block">
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
            var swiper = new Swiper(".mySwiper", {
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

  $(html).insertAfter(".square-shapes-section");
};

addRoadMap();

const swiperHeight = document.querySelector(".road-map");
const aboveBoxes = document.querySelectorAll(".above-box");
const belowBoxes = document.querySelectorAll(".below-box");
const marks = document.querySelectorAll(".swiper .mark");

// end road map section

// add slider section

const addSlider = function () {
  let html = `<div class="swiper slide1 mySwiper" style="margin-top: 150px !important;">
        <div class="swiper-wrapper d-flex gap-5 px-3 ">
            <div class="swiper-slide flex-grow-1 d-flex justify-content-center align-items-end"
                style="background-color: #4526b1; border-radius: 20px;">
                <img src="../images/roadImages/item-17.webp" alt="">
            </div>
            <div class="swiper-slide flex-grow-1 d-flex justify-content-center align-items-end"
                style="background-color: #4526b1; border-radius: 20px;">
                <img src="../images/roadImages/item-18.webp" alt="">
            </div>
            <div class="swiper-slide flex-grow-1 d-flex justify-content-center align-items-end"
                style="background-color: #4526b1; border-radius: 20px;">
                <img src="../images/roadImages/item-19.webp" alt="">
            </div>
            <div class="swiper-slide flex-grow-1 d-flex justify-content-center align-items-end"
                style="background-color: #4526b1; border-radius: 20px;">
                <img src="../images/roadImages/item-20.webp" alt="">
            </div>
            <div class="swiper-slide flex-grow-1 d-flex justify-content-center align-items-end"
                style="background-color: #4526b1; border-radius: 20px;">
                <img src="../images/roadImages/item-21.webp" alt="">
            </div>
            <div class="swiper-slide flex-grow-1 d-flex justify-content-center align-items-end"
                style="background-color: #4526b1; border-radius: 20px;">
                <img src="../images/roadImages/item-17.webp" alt="">
            </div>
            <div class="swiper-slide flex-grow-1 d-flex justify-content-center align-items-end"
                style="background-color: #4526b1; border-radius: 20px;">
                <img src="../images/roadImages/item-18.webp" alt="">
            </div>
            <div class="swiper-slide flex-grow-1 d-flex justify-content-center align-items-end"
                style="background-color: #4526b1; border-radius: 20px;">
                <img src="../images/roadImages/item-19.webp" alt="">
            </div>
            <div class="swiper-slide flex-grow-1 d-flex justify-content-center align-items-end"
                style="background-color: #4526b1; border-radius: 20px;">
                <img src="../images/roadImages/item-20.webp" alt="">
            </div>
            <div class="swiper-slide flex-grow-1 d-flex justify-content-center align-items-end"
                style="background-color: #4526b1; border-radius: 20px;">
                <img src="../images/roadImages/item-21.webp" alt="">
            </div>
        </div>
        <div class="swiper slide2 mySwiper" style="margin-top:40px !important;margin-bottom:50px !important;">
            <div class="swiper-wrapper d-flex gap-5 px-3">
                <div class="swiper-slide flex-grow-1 d-flex justify-content-center align-items-end"
                    style="background-color: #4526b1; border-radius: 20px;">
                    <img src="../images/roadImages/item-23.webp" alt="">
                </div>
                <div class="swiper-slide flex-grow-1 d-flex justify-content-center align-items-end"
                    style="background-color: #4526b1; border-radius: 20px;">
                    <img src="../images/roadImages/item-24.webp" alt="">
                </div>
                <div class="swiper-slide flex-grow-1 d-flex justify-content-center align-items-end"
                    style="background-color: #4526b1; border-radius: 20px;">
                    <img src="../images/roadImages/item-25.webp" alt="">
                </div>
                <div class="swiper-slide flex-grow-1 d-flex justify-content-center align-items-end"
                    style="background-color: #4526b1; border-radius: 20px;">
                    <img src="../images/roadImages/item-17.webp" alt="">
                </div>
                <div class="swiper-slide flex-grow-1 d-flex justify-content-center align-items-end"
                    style="background-color: #4526b1; border-radius: 20px;">
                    <img src="../images/roadImages/item-22.webp" alt="">
                </div>
                <div class="swiper-slide flex-grow-1 d-flex justify-content-center align-items-end"
                    style="background-color: #4526b1; border-radius: 20px;">
                    <img src="../images/roadImages/item-23.webp" alt="">
                </div>
                <div class="swiper-slide flex-grow-1 d-flex justify-content-center align-items-end"
                    style="background-color: #4526b1; border-radius: 20px;">
                    <img src="../images/roadImages/item-24.webp" alt="">
                </div>
                <div class="swiper-slide flex-grow-1 d-flex justify-content-center align-items-end"
                    style="background-color: #4526b1; border-radius: 20px;">
                    <img src="../images/roadImages/item-25.webp" alt="">
                </div>
                <div class="swiper-slide flex-grow-1 d-flex justify-content-center align-items-end"
                    style="background-color: #4526b1; border-radius: 20px;">
                    <img src="../images/roadImages/item-20.webp" alt="">
                </div>
                <div class="swiper-slide flex-grow-1 d-flex justify-content-center align-items-end"
                    style="background-color: #4526b1; border-radius: 20px;">
                    <img src="../images/roadImages/item-21.webp" alt="">
                </div>
            </div>
        </div>
        <script>
            var swiper1 = new Swiper(".slide1", {
                loop: true,

                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1300: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                },
                autoplay: {
                    delay: 1,
                },
                speed: 2000,
            });
            $(".slide2").hover(function () {
                this.swiper.autoplay.stop();
            }, function () {
                this.swiper.autoplay.start();
            });

            var swiper2 = new Swiper(".slide2", {
                loop: true,

                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1300: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                },
                autoplay: {
                    delay: 1,
                    reverseDirection: true,
                },
                speed: 2000,
            });
            $(".slide1").hover(function () {
                this.swiper.autoplay.stop();
            }, function () {
                this.swiper.autoplay.start();
            });
        </script>
       `;
  $(html).insertAfter(".road-map");
};

addSlider();

// end slider section

// add team member

const addTeamMember = function () {
  let html = `  <div class="overflow-hidden w-100 p-xxl-5 mt-5 py-5 m-auto">
        <div class="position-relative">
            <h1
                style="position: absolute; top: 0; left: 50%; translate: -50% 0;font-size: 250px;color: transparent;-webkit-text-stroke: 3px #311686;font-weight: 900;letter-spacing: 25px;text-wrap: nowrap;">
                TEAM
            </h1>
        </div>
        <div class="px-xxl-5 mb-5 px-4 w-100 d-flex gap-5 flex-wrap justify-content-center align-items-center"
            style="margin-top: 100px !important;">
            <div class="main-text text-center mb-5 col-12 justify-content-center d-flex flex-column gap-4">
                <h2 class="pb-4" style="transition: 0.5s;">Team <span
                        class="pb-4 border-5 border-bottom border-danger">Me</span>mbers
                </h2>
                <h1 class="mb-4" style="font-size: 45px;transition: 1s;line-height: 1.2;">Our Amazing Team
                    Members
                </h1>
            </div>
        </div>
    </div>
    <div class="container-xxl team p-xxl-5 py-5 m-auto"
        style="margin-top: -60px !important; margin-bottom: 100px !important;">
        <div class="px-xxl-5 px-4 w-100 d-flex gap-5 flex-wrap justify-content-evenly">
            <div class="team-member d-flex flex-column gap-5 justify-content-center">
                <div class="team-image overflow-hidden rounded-circle  position-relative text-center  flex-grow-1"
                    style="max-width: 300px; height: 270px;min-width: 269px;">
                    <div class="position-absolute" style="top: 0; left: 0; width: 100%;
                    background-color: hsla(13, 100%, 59%, 0.71);">
                        <i class="fa-brands fa-facebook-f" style="color: #ffffff;"></i>
                        <i class="fa-brands fa-twitter" style="color: #ffffff;"></i>
                        <i class="fa-brands fa-linkedin-in" style="color: #ffffff;"></i>
                    </div>
                    <img src="../images/team-01.jpg" alt=""
                        style="height: 100%; width: 100%;object-fit: cover;border-radius: 50%;border: 5px solid #5c3ec0">
                </div>
                <div class="d-flex gap-3 flex-column align-items-center" style="max-width: 300px; ;">
                    <h2 style="font-size: 23px;">Mike Anderson</h2>
                    <p style="font-size: 16px;">Founder & CEO</p>
                </div>
            </div>
            <div class="team-member d-flex flex-column gap-5 justify-content-center">
                <div class="team-image position-relative overflow-hidden rounded-circle  text-center  flex-grow-1"
                    style="max-width: 300px; height: 270px;min-width: 269px;">
                    <div class="position-absolute" style="top: 0; left: 0; width: 100%;
                                        background-color: hsla(13, 100%, 59%, 0.71);">
                        <i class="fa-brands fa-facebook-f" style="color: #ffffff;"></i>
                        <i class="fa-brands fa-twitter" style="color: #ffffff;"></i>
                        <i class="fa-brands fa-linkedin-in" style="color: #ffffff;"></i>
                    </div>
                    <img src="../images/team-02.jpg" alt=""
                        style="height: 100%; width: 100%;object-fit: cover;border-radius: 50%;border: 5px solid #5c3ec0">
                </div>
                <div class="d-flex gap-3 flex-column align-items-center" style="max-width: 300px; ">
                    <h2 style="font-size: 23px;">Paul Harrison</h2>
                    <p style="font-size: 16px;">Founder & CEO</p>
                </div>
            </div>
            <div class="team-member d-flex flex-column gap-5 justify-content-center">
                <div class="team-image position-relative overflow-hidden rounded-circle  text-center  flex-grow-1"
                    style="max-width: 300px; height: 270px;min-width: 269px;">
                    <div class="position-absolute" style="top: 0; left: 0; width: 100%;
                                                            background-color: hsla(13, 100%, 59%, 0.71);">
                        <i class="fa-brands fa-facebook-f" style="color: #ffffff;"></i>
                        <i class="fa-brands fa-twitter" style="color: #ffffff;"></i>
                        <i class="fa-brands fa-linkedin-in" style="color: #ffffff;"></i>
                    </div>
                    <img src="../images/team-03.jpg" alt=""
                        style="height: 100%; width: 100%;object-fit: cover;border-radius: 50%;border: 5px solid #5c3ec0">
                </div>
                <div class="d-flex gap-3 flex-column align-items-center" style="max-width: 300px; ">
                    <h2 style="font-size: 23px;">Sarah Jenifer</h2>
                    <p style="font-size: 16px;">Founder & CEO</p>
                </div>
            </div>
            <div class="team-member d-flex flex-column gap-5 justify-content-center">
                <div class="team-image position-relative overflow-hidden rounded-circle  text-center  flex-grow-1"
                    style="max-width: 300px; height: 270px;min-width: 269px;">
                    <div class="position-absolute" style="top: 0; left: 0; width: 100%;
                                                            background-color: hsla(13, 100%, 59%, 0.71);">
                        <i class="fa-brands fa-facebook-f" style="color: #ffffff;"></i>
                        <i class="fa-brands fa-twitter" style="color: #ffffff;"></i>
                        <i class="fa-brands fa-linkedin-in" style="color: #ffffff;"></i>
                    </div>
                    <img src="../images/team-04.jpg" alt=""
                        style="height: 100%; width: 100%;object-fit: cover;border-radius: 50%;border: 5px solid #5c3ec0">
                </div>
                <div class="d-flex gap-3 flex-column align-items-center" style="max-width: 300px; ">
                    <h2 style="font-size: 23px;">James Smith</h2>
                    <p style="font-size: 16px;">Founder & CEO</p>
                </div>
            </div>
            <div class="team-member d-flex flex-column gap-5 justify-content-center">
                <div class="team-image position-relative overflow-hidden rounded-circle  text-center  flex-grow-1"
                    style="max-width: 300px; height: 270px;min-width: 269px;">
                    <div class="position-absolute" style="top: 0; left: 0; width: 100%;
                                                            background-color: hsla(13, 100%, 59%, 0.71);">
                        <i class="fa-brands fa-facebook-f" style="color: #ffffff;"></i>
                        <i class="fa-brands fa-twitter" style="color: #ffffff;"></i>
                        <i class="fa-brands fa-linkedin-in" style="color: #ffffff;"></i>
                    </div>
                    <img src="../images/team-05.webp" alt=""
                        style="height: 100%; width: 100%;object-fit: cover;border-radius: 50%;border: 5px solid #5c3ec0">
                </div>
                <div class="d-flex gap-3 flex-column align-items-center" style="max-width: 300px; ">
                    <h2 style="font-size: 23px;">Sarah Jenifer</h2>
                    <p style="font-size: 16px;">Founder & CEO</p>
                </div>
            </div>
            <div class="team-member d-flex flex-column gap-5 justify-content-center">
                <div class="team-image position-relative overflow-hidden rounded-circle  text-center  flex-grow-1"
                    style="max-width: 300px; height: 270px;min-width: 269px;">
                    <div class="position-absolute" style="top: 0; left: 0; width: 100%;
                                                            background-color: hsla(13, 100%, 59%, 0.71);">
                        <i class="fa-brands fa-facebook-f" style="color: #ffffff;"></i>
                        <i class="fa-brands fa-twitter" style="color: #ffffff;"></i>
                        <i class="fa-brands fa-linkedin-in" style="color: #ffffff;"></i>
                    </div>
                    <img src="../images/team-06.webp" alt=""
                        style="height: 100%; width: 100%;object-fit: cover;border-radius: 50%;border: 5px solid #5c3ec0">
                </div>
                <div class="d-flex gap-3 flex-column align-items-center" style="max-width: 300px; ">
                    <h2 style="font-size: 23px;">Mike Anderson</h2>
                    <p style="font-size: 16px;">Founder & CEO</p>
                </div>
            </div>
            <div class="team-member d-flex flex-column gap-5 justify-content-center">
                <div class="team-image position-relative overflow-hidden rounded-circle  text-center  flex-grow-1"
                    style="max-width: 300px; height: 270px;min-width: 269px;">
                    <div class="position-absolute" style="top: 0; left: 0; width: 100%;
                                                            background-color: hsla(13, 100%, 59%, 0.71);">
                        <i class="fa-brands fa-facebook-f" style="color: #ffffff;"></i>
                        <i class="fa-brands fa-twitter" style="color: #ffffff;"></i>
                        <i class="fa-brands fa-linkedin-in" style="color: #ffffff;"></i>
                    </div>
                    <img src="../images/team-07.webp" alt=""
                        style="height: 100%; width: 100%;object-fit: cover;border-radius: 50%;border: 5px solid #5c3ec0">
                </div>
                <div class="d-flex gap-3 flex-column align-items-center" style="max-width: 300px; ">
                    <h2 style="font-size: 23px;">Paul Harrison</h2>
                    <p style="font-size: 16px;">Founder & CEO</p>
                </div>
            </div>
        </div>
    </div>`;

  $(html).insertAfter(".slide1");
};

addTeamMember();

const teamMemberBox = document.querySelectorAll(".team-member");

// end team member

// add Register

const addRegister = function () {
  let html = `<div class="container-xxl register overflow-hidden mt-5 p-xxl-5 py-5 m-auto" style="transition: 1s;">
        <div class="w-100 px-xxl-5 px-3 d-flex gap-lg-0 gap-5 flex-wrap justify-content-center align-items-center">
            <div class="p-5 text-center w-100 position-relative d-flex gap-5 flex-wrap align-items-center justify-content-center"
                style="margin-top: 120px !important;background-color: #7153d9; border-radius: 18px;">
                <div class="d-flex gap-5 py-5 px-5 px-sm-5 justify-content-between w-100 flex-wrap">
                    <div class="d-flex gap-2 flex-grow-1 flex-column align-items-center">
                        <h1 style="font-size: 50px;"><span data-goal="100" style="transition: 0.3s;">0</span>K
                        </h1>
                        <h1>Registered User
                        </h1>
                    </div>
                    <div class="d-flex gap-2 flex-column align-items-center flex-grow-1">
                        <h1 style="font-size: 50px;"><span data-goal="5" style="transition: 0.3s;">0</span>M
                        </h1>
                        <h1>Total Assets
                        </h1>
                    </div>
                    <div class="d-flex gap-2 flex-column align-items-center flex-grow-1">
                        <h1 style="font-size: 50px;"><span data-goal="10" style="transition: 0.3s;">0</span>B
                        </h1>
                        <h1>Yearly Trading
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

  document.querySelector(".team").insertAdjacentHTML("afterend", html);
};

addRegister();

const registerCount = document.querySelectorAll(".register span");
const registerSection = document.querySelector(".register");

// end Register

// add slider images

const addSliderImages = function () {
  let html = `  <div class="overflow-hidden w-100 p-xxl-5 py-5 m-auto">
        <div class="position-relative">
            <h1
                style="position: absolute; top: 0; left: 50%; translate: -50% 0;font-size: 250px;color: transparent;-webkit-text-stroke: 3px #311686;font-weight: 900;letter-spacing: 25px;text-wrap: nowrap;">
                Testimonial
            </h1>
        </div>
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
    <div class="container-xxl px-xxl-5 slider-section py-5 m-auto" style="margin-top: -100px !important;">
        <div class="px-xxl-5 px-4 w-100">
            <div class="swiper mySwiper5 py-5">
                <div class="swiper-wrapper">
                    <div class="swiper-slide col-4 p-5 d-flex flex-column flex-grow-1  gap-5 position-relative">
                        <img class="align-self-start"
                            style="position: absolute;top: 10px;left: 10px;width: 115px; height: 115px;"
                            src="../images/home2/left-quote-1.png" alt="">
                        <p style="line-height: 1.8;font-size: 21px; font-style: italic;">Keniam, quis nostrud exerci ut
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
                            style="position: absolute;top: 10px;left: 10px;width: 115px; height: 115px;"
                            src="../images/home2/left-quote-1.png" alt="">
                        <p style="line-height: 1.8;font-size: 21px; font-style: italic;">Keniam, quis nostrud exerci ut
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
                            style="position: absolute;top: 10px;left: 10px;width: 115px; height: 115px;"
                            src="../images/home2/left-quote-1.png" alt="">
                        <p style="line-height: 1.8;font-size: 21px; font-style: italic;">Keniam, quis nostrud exerci ut
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
                    <div class="swiper-slide col-4 p-5 d-flex flex-column flex-grow-1  gap-5 position-relative">
                        <img class="align-self-start"
                            style="position: absolute;top: 10px;left: 10px;width: 115px; height: 115px;"
                            src="../images/home2/left-quote-1.png" alt="">
                        <p style="line-height: 1.8;font-size: 21px; font-style: italic;">Keniam, quis nostrud exerci ut
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
                            style="position: absolute;top: 10px;left: 10px;width: 115px; height: 115px;"
                            src="../images/home2/left-quote-1.png" alt="">
                        <p style="line-height: 1.8;font-size: 21px; font-style: italic;">Keniam, quis nostrud exerci ut
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

  $(html).insertAfter(".register");
};

addSliderImages();

const swiperSlide = document.querySelector(".slider-section");

// end slider images

// add questions sections

const addQuestionsSection = function () {
  let html = ` 
  <div class="overflow-hidden w-100 p-xxl-5 mt-5 py-5 m-auto">
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
    <div class="container-xxl questions p-xxl-5 py-5 m-auto"
        style="margin-top: -60px !important;margin-bottom: 30px !important;">
        <div class="w-100 px-xxl-5 px-3">
            <div class="d-flex gap-5 flex-wrap align-items-start">
                <div class="col-md-3 col-12 flex-grow-1">
                    <div class="questions-options d-flex justify-content-start">
                        <div class="p-5 col-md-10 col-12"
                            style="border: 1px solid rgba(240, 248, 255, 0.505);border-radius: 20px;">
                            <div class="d-flex flex-column">
                                <h2 class="py-4 active border-1 border-bottom"
                                    style="border-bottom-color: rgba(240, 248, 255, 0.505) !important;">Cryptocurrency
                                </h2>
                                <h2 class="py-4 border-1 border-bottom"
                                    style="border-bottom-color:  rgba(240, 248, 255, 0.505) !important;">NFT Token
                                </h2>
                                <h2 class="py-4 border-1 border-bottom"
                                    style="border-bottom-color:  rgba(240, 248, 255, 0.505) !important;">Collection
                                </h2>
                                <h2 class="py-4">Crypto Trading</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-8 px-3 flex-grow-1 questions-content show">
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

            </div>
        </div>
    </div>
`;

  $(html).insertAfter(".slider-section");
};

addQuestionsSection();

const questionsOptions = document.querySelectorAll(".questions-options h2");
const questionsContent = document.querySelector(".questions-content");

questionsOptions.forEach((e) =>
  e.addEventListener("click", function (e) {
    questionsOptions.forEach((e) => e.classList.remove("active"));
    questionsContent.classList.remove("show");
    e.target.classList.add("active");
    setTimeout(function () {
      questionsContent.classList.add("show");
    }, 300);
  })
);

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

// add Blog section

const addBlog = function () {
  let html = `   <div class="overflow-hidden w-100 p-xxl-5 mt-5 py-5 m-auto">
        <div class="position-relative">
            <h1
                style="position: absolute; top: 0; left: 50%; translate: -50% 0;font-size: 250px;color: transparent;-webkit-text-stroke: 3px #311686;font-weight: 900;letter-spacing: 25px;text-wrap: nowrap;z-index: -1;">
                Blog
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
        style="margin-top: -30px !important;margin-bottom: 120px !important;">
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

  $(html).insertAfter(".questions");
};

addBlog();

const blogBoxes = document.querySelectorAll(".blog-content div");

// end blog section

// add brand section

const addBrandSection = function () {
  let html = `
   <div class="container-xxl brands p-xxl-5 py-5 m-auto"
        style="margin-top: -60px !important; margin-bottom: 100px !important;">
        <div class="px-xxl-5 px-3 w-100 d-flex gap-lg-0 gap-5 flex-wrap justify-content-center align-items-center">
            <div class="swiper brand-swiper row w-100 mt-5 p-5" style="background-color: #4c22e1;border-radius: 25px;">
                <div class="swiper-wrapper">
                    <div class="swiper-slide brand-box col-md-3 col-6 p-5 d-flex justify-content-center"
                        style="height: 170px;transition-delay: 0.1s;"><img class="align-self-center"
                            style="opacity: 0.5; transition: 1s;" src="../images/logo-01.png" alt="" width="115px">
                    </div>
                    <div class="swiper-slide brand-box col-md-3 col-6 p-5 d-flex justify-content-center"
                        style="height: 170px;transition-delay: 0.1s;"><img class="align-self-center"
                            style="opacity: 0.5; transition: 1s;" src="../images/logo-02.png" alt="" width="115px">
                    </div>
                    <div class="swiper-slide brand-box col-md-3 col-6 p-5 d-flex justify-content-center"
                        style="height: 170px;transition-delay: 0.1s;"><img class="align-self-center"
                            style="opacity: 0.5; transition: 1s;" src="../images/logo-03.png" alt="" width="115px">
                    </div>
                    <div class="swiper-slide brand-box col-md-3 col-6 p-5 d-flex justify-content-center"
                        style="height: 170px;transition-delay: 0.1s;"><img class="align-self-center"
                            style="opacity: 0.5; transition: 1s;" src="../images/logo-04.png" alt="" width="115px">
                    </div>
                    <div class="swiper-slide brand-box col-md-3 col-6 p-5 d-flex justify-content-center"
                        style="height: 170px;transition-delay: 0.1s;"><img class="align-self-center"
                            style="opacity: 0.5; transition: 1s;" src="../images/logo-05.png" alt="" width="115px">
                    </div>
                    <div class="swiper-slide brand-box col-md-3 col-6 p-5 d-flex justify-content-center"
                        style="height: 170px;transition-delay: 0.1s;"><img class="align-self-center"
                            style="opacity: 0.5; transition: 1s;" src="../images/logo-06.png" alt="" width="115px">
                    </div>
                    <div class="swiper-slide brand-box col-md-3 col-6 p-5 d-flex justify-content-center"
                        style="height: 170px;transition-delay: 0.1s;"><img class="align-self-center"
                            style="opacity: 0.5; transition: 1s;" src="../images/logo-07.png" alt="" width="115px">
                    </div>
                    <div class="swiper-slide brand-box col-md-3 col-6 p-5 d-flex justify-content-center"
                        style="height: 170px;transition-delay: 0.1s;"><img class="align-self-center"
                            style="opacity: 0.5; transition: 1s;" src="../images/logo-08.png" alt="" width="115px">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        var swiper = new Swiper(".brand-swiper", {

            breakpoints: {
                0: {
                slidesPerView: 1,

                },
                450: {
                slidesPerView: 2,

                },
                600: {
                slidesPerView: 3,

                },
                1000: {
                    slidesPerView: 4,
                }
            }
        });
    </script>
   `;

  $(html).insertAfter(".blog");
};

addBrandSection();

const brands = document.querySelector(".brands");

// end brand section

// add nft portfolio section

const addNftPortfoilio = function () {
  let html = ` `;

  $(html).insertAfter(".brands");
};

addNftPortfoilio();

// end nft portfolio section

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
