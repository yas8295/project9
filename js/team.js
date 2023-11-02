// active page

document
  .querySelector(".links")
  .children[0].children[0].classList.remove("active");
document
  .querySelector(".links")
  .children[3].children[0].classList.add("active");
document
  .querySelector(".links")
  .children[3].children[1].children[0].classList.add("active");

document.querySelectorAll(".drop-content a")[0].classList.remove("active");

document.querySelectorAll(".drop-content a")[7].classList.add("active");

document.querySelectorAll(".drop-content a")[8].classList.add("active");

// active page

window.addEventListener("load", function () {
  this.document.querySelector(".header img").style.scale = "1";
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
  // add animate nft
  moveUp(document.querySelector(".nft-portfolio"));
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
  background-image: url(../images/background.jpg);
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
            max-width: 275px;
            transition: 1s;
            margin-bottom: 70px !important;
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

 </style>`;

  $(style).insertAfter(document.head);
};

addStyle();

// end style sheet

// add header

const addHeader = function () {
  let html = `<div class="container-xxl header overflow-hidden mt-5 p-xxl-5 py-5 m-auto" style="transition: 1s;">
        <div class="w-100 px-xxl-5 px-3 d-flex gap-lg-0 gap-5 flex-wrap justify-content-center align-items-center">
            <div class="p-5 w-100 position-relative d-flex gap-5 flex-wrap align-items-center justify-content-center"
                style="margin-top: 120px !important;background-color: #4c22e1; border-radius: 18px; z-index: 1;min-height: 400px;">
                <div class="position-absolute"
                    style="left: 0; top: 0; width: 100%; height: 100%; background-image: url(../images/bg-inner-page-01.webp  );opacity: 0.6; background-size: cover; z-index: -1;mix-blend-mode: screen;border-radius: inherit;">
                </div>
                <div class="d-flex gap-4 flex-column py-5 px-sm-5">
                    <h2 class="pb-4" style="transition: 1s; font-size: 60px;"><span
                            class="pb-4 border-5 border-bottom border-danger">T</span>eam</h2>
                    <p style="font-size: 24px;">Sed ut perspiciatis unde omnis iste natus <br>
                        error sit voluptatem accusantium
                    </p>
                </div>
                <div class="d-flex flex-grow-1 justify-content-center" style="position: relative;bottom: -40px">
                    <img class="w-100" style="transition: 1s; scale: 0;max-width: 300px; min-width: 290px;" src="../images/group-ntf-02.webp" alt="">
                </div>
            </div>
        </div>
    </div>`;

  document.querySelector(".nav").insertAdjacentHTML("beforebegin", html);
};

addHeader();

// end header

// add team section

const addTeamSection = function () {
  let html = ` <div class="overflow-hidden w-100 p-xxl-5 py-5 m-auto">
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
                <div class="swiper-wrapper d-felx flex-wrap justify-content-center justify-content-md-between">
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
                            </div><img src="../images/team-05.webp" alt="">
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
                            </div><img src="../images/team-06.webp" alt="">
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
                            </div><img src="../images/team-07.webp" alt="">
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
                            </div><img src="../images/team-08.webp" alt="">
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
                            </div><img src="../images/team-09.webp" alt="">
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
                            </div><img src="../images/team-10.webp" alt="">
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
                            </div><img src="../images/team-11.webp" alt="">
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
                            </div><img src="../images/team-12.webp" alt="">
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
`;

  $(html).insertAfter(".header");
};

addTeamSection();

const swiperSlide = document.querySelector(".slider-section");

// end team section

// add nft portfolio section

const addNftPortfoilio = function () {
  let html = ` <div class="container-xxl nft-portfolio overflow-hidden mt-5 p-xxl-5 py-5 m-auto" style="transition: 1s;margin-top: -50px !important">
        <div class="w-100 px-xxl-5 px-3 d-flex gap-lg-0 gap-5 flex-wrap justify-content-center align-items-center">
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

  $(html).insertAfter(".slider-section");
};

addNftPortfoilio();

// end nft portfolio section

const mainText = Array.from(document.querySelectorAll(".main-text"));
