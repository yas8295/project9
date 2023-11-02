// active page

document
  .querySelector(".links")
  .children[0].children[0].classList.remove("active");
document
  .querySelector(".links")
  .children[0].children[1].classList.remove("active");
document
  .querySelector(".links")
  .children[2].children[0].classList.add("active");

document.querySelectorAll(".drop-content a")[0].classList.remove("active");

document.querySelectorAll(".drop-content a")[1].classList.remove("active");

document.querySelectorAll(".drop-content a")[6].classList.add("active");

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
  // add animate sqaure shapes
  squareShapes.forEach((e) => rotate360(e));
  squareShapes.forEach((e) => scale(e));
  // end animate sqaure shapes
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
        height: 100%;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
    }

    .swiper:first-of-type {
        width: 100%;
        min-height: 470px !important;
        margin-left: auto;
        margin-right: auto;
    }

    .swiper:last-of-type {
        min-height: 120px !important;
        margin-left: auto;
        margin-right: auto;
    }

    .swiper-slide {
        text-align: center;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .mySwiper2 {
        height: 75%;
        width: 100%;
    }

    .mySwiper2 .swiper-slide {
        background-color: rgb(69 38 177);
        border-radius: 20px;
    }

    .mySwiper2 .swiper-slide img {
        max-width: 100%;
        overflow: visible;
    }

    .mySwiper {
        height: 20%;
        box-sizing: border-box;
        padding: 10px 0 !important;
    }

    .mySwiper .swiper-slide {
        margin-right: 10px !important;
        height: 100%;
        opacity: 0.4;
        border-radius: 20px;
        background-color: rgb(69 38 177);
    }

    .mySwiper .swiper-slide img {
        display: block;
        height: 75%;
        overflow: visible;
    }

    .mySwiper .swiper-slide-thumb-active {
        opacity: 1;
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
        content: "";
    }

    .swiper-button-next,
    .swiper-button-prev {
        top: 88%;
        font-size: 32px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #fd544f;
    }

    .swiper-button-next {
        right: 0;
    }

    .swiper-button-prev {
        left: 0;
    }

    .about-monteno .main-text h1 {
        margin-bottom: 0px !important;
    }

    .about-monteno .main-text h2 {
        cursor: pointer;
    }

    .about-monteno .main-text h2:hover {
        color: #fd544f;
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
                    style="left: 0; top: 0; width: 100%; height: 100%; background-image: url(../images/bg-inner-page-02.png);opacity: 0.6; background-size: cover; z-index: -1;mix-blend-mode: screen;border-radius: inherit;">
                </div>
                <div class="d-flex gap-4 flex-column py-5 px-sm-5">
                    <h2 class="pb-4" style="transition: 1s; font-size: 60px;"><span
                            class="pb-4 border-5 border-bottom border-danger">N</span>FT</h2>
                    <p style="font-size: 24px;">Sed ut perspiciatis unde omnis iste natus <br>
                        error sit voluptatem accusantium
                    </p>
                </div>
                <div class="d-flex flex-grow-1 justify-content-center" style="position: relative;bottom: -40px">
                    <img class="w-100" style="transition: 1s; scale: 0;max-width: 300px; min-width: 290px;" src="../images/group-ntf-04.png" alt="">
                </div>
            </div>
        </div>
    </div>`;

  document.querySelector(".nav").insertAdjacentHTML("beforebegin", html);
};

addHeader();

// end header

// add about monteno section

const addAboutMontento = function () {
  let html = `<div class="container-xxl overflow-hidden mt-5 p-xxl-5 py-5 m-auto">
        <div class="position-relative">
            <div
                style="position: absolute; top: 0; left: 50%; translate: -50% 0;font-size: 210px;color: transparent;-webkit-text-stroke: 3px #311686;font-weight: 900;letter-spacing: 25px;">
                ABOUT
            </div>
        </div>
        <div class="px-xxl-5 px-4 w-100 d-flex gap-5 flex-wrap justify-content-center align-items-center"
            style="margin-top: 100px !important;">
            <div class="main-text text-center mb-5 col-12 justify-content-center d-flex flex-column gap-4">
                <h2 class="pb-4" style="transition: 1s;">About <span
                        class="pb-4 border-5 border-bottom border-danger">Mo</span>nteno
                </h2>
                <h1 class="mb-4" style="font-size: 45px;transition: 1s;line-height: 1.2;">Know More About
                    Monteno
                </h1>
            </div>
        </div>
    </div>
    <div class="container-xxl about-monteno overflow-hidden mt-3 p-xxl-5 py-5 m-auto" style="transition: 1s;">
        <div class="w-100 px-xxl-5 px-3">
            <div class="d-flex flex-row flex-wrap justify-content-between gap-5">
                <div class="col-md-5 col-12 position-relative" style="max-height: 650px;cursor: pointer;">
                    <div class="swiper-button-next d-none d-md-flex"><i class="fa-solid fa-circle-chevron-right"
                            style="color: #4526b1;"></i></div>
                    <div class="swiper-button-prev d-none d-md-flex"><i class="fa-solid fa-circle-chevron-left"
                            style="color: #4526b1;"></i></div>
                    <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
                        class="swiper mySwiper2 mb-5">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide d-flex justify-content-center align-items-end">
                                <img src="../images/item-26.png" />
                            </div>
                            <div class="swiper-slide d-flex justify-content-center align-items-end">
                                <img src="../images/item-08.png" />
                            </div>
                            <div class="swiper-slide d-flex justify-content-center align-items-end">
                                <img src="../images/item-09.png" />
                            </div>
                            <div class="swiper-slide d-flex justify-content-center align-items-end">
                                <img src="../images/item-10.png" />
                            </div>
                            <div class="swiper-slide d-flex justify-content-center align-items-end">
                                <img src="../images/item-26.png" />
                            </div>
                        </div>
                    </div>
                    <div thumbsSlider="" class="swiper mySwiper mx-auto col-md-9">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide d-flex justify-content-center align-items-end">
                                <img src="../images/item-26.png" />
                            </div>
                            <div class="swiper-slide d-flex justify-content-center align-items-end">
                                <img src="../images/item-08.png" />
                            </div>
                            <div class="swiper-slide d-flex justify-content-center align-items-end">
                                <img src="../images/item-09.png" />
                            </div>
                            <div class="swiper-slide d-flex justify-content-center align-items-end">
                                <img src="../images/item-10.png" />
                            </div>
                            <div class="swiper-slide d-flex justify-content-center align-items-end">
                                <img src="../images/item-26.png" />
                            </div>
                        </div>
                    </div>
                </div>

                <script>
                    var swiper = new Swiper(".mySwiper", {
                        spaceBetween: 10,
                        slidesPerView: 3,
                        freeMode: true,
                        watchSlidesProgress: true,
                    });
                    var swiper2 = new Swiper(".mySwiper2", {
                        spaceBetween: 0,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        thumbs: {
                            swiper: swiper,
                        },
                    });
                </script>
                <div class="col-md-5 col-12 main-text d-flex flex-column gap-5 flex-lg-grow-0 flex-md-grow-1">
                    <h1 style="font-size: 42px; transition: 1s;">About Monteno ii</h1>
                    <p style="font-size: 18px;line-height: 1.8;  transition: 1s;">Duis aute irure dolor in reprehenderit
                        in voluptate
                        velit esse cillum
                        dolore eu fugiat nulla
                        pariatur. Excepteur sint
                        occae cat cupidatat non proident, sunt in culpa
                    </p>
                    <h1
                        style="font-size: 32px;  transition: 1s;margin-bottom: -15px !important; margin-top: 10px !important;">
                        Features</h1>
                    <div class="d-flex flex-row flex-wrap gap-4 gap-md-5 justify-content-start"
                        style=" transition: 1s;">
                        <div class="d-flex flex-column gap-4 align-items-start">
                            <h2 style="font-weight: 500;font-size: 19px;  transition: 1s;"><i
                                    class="fa-solid fa-arrow-right"
                                    style="color: #de4823;margin-right: 15px !important;  transition: 1s;"></i>Latest
                                Technology</h2>
                            <h2 style="font-weight: 500;font-size: 19px; transition: 1s;"><i
                                    class="fa-solid fa-arrow-right"
                                    style="color: #de4823;margin-right: 15px !important; transition: 1s;"></i>Unlimited
                                Stock</h2>
                        </div>
                        <div class="d-flex flex-column gap-4 align-items-start" style=" transition: 1s;">
                            <h2 style="font-weight: 500;font-size: 19px; transition: 1s;"><i
                                    class="fa-solid fa-arrow-right"
                                    style="color: #de4823;margin-right: 15px !important; transition: 1s;"></i>Regular
                                Updates</h2>
                            <h2 style="font-weight: 500;font-size: 19px; transition: 1s;"><i
                                    class="fa-solid fa-arrow-right"
                                    style="color: #de4823;margin-right: 15px !important; transition: 1s;"></i>Quality
                                Assured</h2>
                        </div>
                    </div>
                    <h1
                        style="font-size: 32px; transition: 1s;margin-bottom: -15px !important;margin-top: 10px !important;">
                        Links</h1>
                    <div class="d-flex flex-column gap-4" style=" transition: 1s;">
                        <h2 style="font-weight: 500;font-size: 19px; transition: 1s;"><i
                                class="fa-solid fa-arrow-up-right-from-square"
                                style="color: #de4823;margin-right: 15px !important; transition: 1s;"></i>Open Sea</h2>
                        <h2 style="font-weight: 500;font-size: 19px; transition: 1s;"><i
                                class="fa-solid fa-arrow-up-right-from-square"
                                style="color: #de4823;margin-right: 15px !important; transition: 1s;"></i>Rarible</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

  $(html).insertAfter(".header");
};

addAboutMontento();

// end about monteno section

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
                View All
            </div>
        </div>
    </div>`;

  $(html).insertAfter(".about-monteno");
};

addSquareSection();

const squareShapes = Array.from($(".square-shapes .item"));

// end square shapes section

// add nft portfolio section

const addNftPortfoilio = function () {
  let html = ` <div class="container-xxl nft-portfolio overflow-hidden mt-5 p-xxl-5 py-5 m-auto" style="transition: 1s;">
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

  $(html).insertAfter(".square-shapes-section");
};

addNftPortfoilio();

// end nft portfolio section

const mainText = Array.from(document.querySelectorAll(".main-text"));
