// active page

document
  .querySelector(".links")
  .children[0].children[0].classList.remove("active");
document
  .querySelector(".links")
  .children[3].children[0].classList.add("active");
document
  .querySelector(".links")
  .children[3].children[1].children[2].classList.add("active");

document.querySelectorAll(".drop-content a")[0].classList.remove("active");

document.querySelectorAll(".drop-content a")[7].classList.add("active");

document.querySelectorAll(".drop-content a")[10].classList.add("active");

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

const rotateY = function (e) {
  if (scrollY >= e.offsetTop - document.documentElement.clientHeight + 150) {
    e.style.transform = "rotateY(0deg)";
    e.style.opacity = "1";
  } else if (
    scrollY <=
    e.offsetTop - document.documentElement.clientHeight + 100
  ) {
    e.style.transform = "rotateY(90deg)";
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
  // add mission animate
  missionVisionImages.forEach((e) => rotateY(e));
  // end mission animate
  // animate map box
  mapBox.forEach((e) =>
    e.classList.contains("right") ? moveRight(e) : moveUp(e)
  );
  // end animate map box
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
                            class="pb-4 border-5 border-bottom border-danger">V</span>isions & Mission

</h2>
                    <p style="font-size: 24px;">Sed ut perspiciatis unde omnis iste natus <br>
                        error sit voluptatem accusantium
                    </p>
                </div>
                <div class="d-flex flex-grow-1 justify-content-center" style="position: relative;bottom: -40px">
                    <img class="w-100" style="transition: 1s; scale: 0;max-width: 450px; min-width: 290px;" src="../images/group-ntf-03.webp" alt="">
                </div>
            </div>
        </div>
    </div>`;

  document.querySelector(".nav").insertAdjacentHTML("beforebegin", html);
};

addHeader();

// end header

// add mission vision section

const addMissionVision = function () {
  let html = `<div class="container-xxl mission-vision mt-5 p-xxl-5 py-5 m-auto">
        <div class="px-xxl-5 px-4 w-100 d-flex gap-5 flex-wrap-reverse justify-content-center align-items-center"
            style="margin-top: 100px !important;">
            <div class="images-box  col-xl-5 flex-grow-1">
                <img src="../images/our-mission.webp" alt="" style="width: 100%;transition: 1s linear;">
            </div>
            <div class="main-text mb-5 col-xl-5 d-flex flex-column gap-4">
                <h2 class="pb-4" style="transition: 1s;"><span
                        class="pb-4 border-5 border-bottom border-danger">Our</span>
                    Visions</h2>
                <h1 style="font-size: 45px;transition: 1s;line-height: 1.2;">Build Strong NFT Portfolio Community
                </h1>
                <h2 style="font-weight: 500;transition: 1s;font-size: 19px;">Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non
                    proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse
                </h2>
                <button class="button main align-self-start mt-5"
                    style="padding: 20px 50px !important;transition: 1s; font-size: 18px;font-weight: 500;border: none">More
                    About Us
                    <div></div>
                </button>
            </div>
        </div>
        <div class="px-xxl-5 px-4 w-100 d-flex gap-5 flex-wrap justify-content-start align-items-center"
            style="margin-top: 160px !important;">
            <div class="main-text mb-5 col-xl-5 d-flex flex-column gap-4">
                <h2 class="pb-4" style="transition: 1s;"><span
                        class="pb-4 border-5 border-bottom border-danger">Our</span>
                    Mission</h2>
                <h1 style="font-size: 45px;transition: 1s;line-height: 1.2;">Change The Way People Trade NFT
                </h1>
                <h2 class="mb-3" style="font-weight: 500;transition: 1s;font-size: 19px;">Duis aute irure dolor in
                    reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </h2>
                <div class="d-flex gap-5 align-items-start" style="font-weight: 500;transition: 1s;font-size: 19px;">
                    <i class="fa-solid fa-check mt-2" style="color: #e63900;transition: 1s;font-size: 23px;"></i>
                    <h2 style="font-weight: 500;transition: 1s;font-size: 19px;">Excepteur sint occae cat cupidatat non
                        proident sunt in culpa qui officia</h2>
                </div>
                <div class="d-flex gap-5 align-items-start" style="font-weight: 500;transition: 1s;font-size: 19px;">
                    <i class="fa-solid fa-check mt-2" style="color: #e63900;transition: 1s;font-size: 23px;"></i>
                    <h2 style="font-weight: 500;transition: 1s;font-size: 19px;">Bnon proident, sunt in culpa qui
                        officia dese runt mollit anim id est laborum velit esse
                    </h2>
                </div>
                <div class="d-flex gap-5 align-items-start" style="font-weight: 500;transition: 1s;font-size: 19px;">
                    <i class="fa-solid fa-check mt-2" style="color: #e63900;transition: 1s;font-size: 23px;"></i>
                    <h2 style="font-weight: 500;transition: 1s;font-size: 19px;">Dese runt mollit anim id est laborum
                        velit esse
                    </h2>
                </div>
            </div>
            <div class="images-box  col-xl-5 flex-grow-1">
                <img src="../images/our-vission.webp" alt="" style="width: 100%;transition: 1s linear;">
            </div>
        </div>
    </div>`;

  document.querySelector(".header").insertAdjacentHTML("afterend", html);
};

addMissionVision();

const missionVisionImages = document.querySelectorAll(".mission-vision img");

// end mission vision section

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

  $(html).insertAfter(".mission-vision");
};

addRoadMap();

let mapBox = document.querySelectorAll(".map-box");

// end road map section

// add nft portfolio section

const addNftPortfoilio = function () {
  let html = ` <div class="container-xxl nft-portfolio overflow-hidden mt-5 p-xxl-5 py-5 m-auto" style="transition: 1s;margin-top: 70px !important">
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

  $(html).insertAfter(".road-map");
};

addNftPortfoilio();

// end nft portfolio section

const mainText = Array.from(document.querySelectorAll(".main-text"));
