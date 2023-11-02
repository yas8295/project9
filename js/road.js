// active page

document
  .querySelector(".links")
  .children[0].children[0].classList.remove("active");
document
  .querySelector(".links")
  .children[3].children[0].classList.add("active");
document
  .querySelector(".links")
  .children[3].children[1].children[1].classList.add("active");

document.querySelectorAll(".drop-content a")[0].classList.remove("active");

document.querySelectorAll(".drop-content a")[7].classList.add("active");

document.querySelectorAll(".drop-content a")[9].classList.add("active");

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
  // animate map box
  mapBox.forEach((e) =>
    e.classList.contains("right") ? moveRight(e) : moveUp(e)
  );
  // end animate map box
  // add animate nft
  moveUp(document.querySelector(".nft-portfolio"));
  // end animate nft
  // add questions animate
  questionsBoxes.forEach((e) => moveUp(e));
  // end questions animate
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
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        background: transparent;
        height: 300px;
    }

    .swiper-slide img {
        display: block;
        height: 270px;
    }

    .swiper {
        margin-left: auto;
        margin-right: auto;
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
                            class="pb-4 border-5 border-bottom border-danger">R</span>oad Map
</h2>
                    <p style="font-size: 24px;">Sed ut perspiciatis unde omnis iste natus <br>
                        error sit voluptatem accusantium
                    </p>
                </div>
                <div class="d-flex flex-grow-1 justify-content-center" style="position: relative;bottom: -40px">
                    <img class="w-100" style="transition: 1s; scale: 0;max-width: 450px; min-width: 290px;" src="../images/group-ntf-01.webp" alt="">
                </div>
            </div>
        </div>
    </div>`;

  document.querySelector(".nav").insertAdjacentHTML("beforebegin", html);
};

addHeader();

// end header

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

  $(html).insertAfter(".header");
};

addRoadMap();

let mapBox = document.querySelectorAll(".map-box");

// end road map section

// add slider section

const addSlider = function () {
  let html = `<div class="swiper slide1 mySwiper" style="margin-top: 180px !important;">
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
        <div class="swiper slide2 mySwiper slider-section" style="margin-top:40px !important;margin-bottom:50px !important;">
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
        style="margin-top: -60px !important;margin-bottom: 120px !important;">
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
                <div class="col-8 flex-grow-1 questions-content show">
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

  $(html).insertAfter(".questions");
};

addNftPortfoilio();

// end nft portfolio section

const mainText = Array.from(document.querySelectorAll(".main-text"));
