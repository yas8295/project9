// active page

document
  .querySelector(".links")
  .children[0].children[0].classList.remove("active");
document
  .querySelector(".links")
  .children[0].children[1].classList.remove("active");
document
  .querySelector(".links")
  .children[4].children[0].classList.add("active");

document.querySelectorAll(".drop-content a")[0].classList.remove("active");

document.querySelectorAll(".drop-content a")[1].classList.remove("active");

document.querySelectorAll(".drop-content a")[15].classList.add("active");

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
  // add animate form
  addressDiv.forEach((e) => moveUp(e));
  messageFormDiv.forEach((e) => moveUp(e));
  // end animate form
  moveUp(this.document.querySelector(".map"));
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
                    style="left: 0; top: 0; width: 100%; height: 100%; background-image: url(../images/bg-inner-page-02.png);opacity: 0.6; background-size: cover; z-index: -1;mix-blend-mode: screen;border-radius: inherit;">
                </div>
                <div class="d-flex gap-4 flex-column py-5 px-sm-5">
                    <h2 class="pb-4" style="transition: 1s; font-size: 60px;"><span
                            class="pb-4 border-5 border-bottom border-danger">C</span>ontact</h2>
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

// add form section

const addFormSection = function () {
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
                <h2 class="pb-4" style="transition: 1s;">Send <span
                        class="pb-4 border-5 border-bottom border-danger">Me</span>ssage
                </h2>
                <h1 class="mb-4" style="font-size: 45px;transition: 1s;line-height: 1.2;">Write Us Message for
                    Any Reason
                </h1>
            </div>
        </div>
    </div>
    <div class="container-xxl form-section overflow-hidden mt-3 p-xxl-5 py-5 m-auto" style="transition: 1s;">
        <div class="w-100 px-xxl-5 px-3">
            <div class="message d-flex flex-wrap gap-5">
                <div
                    class="address d-flex gap-5 flex-column col-md-4 col-12 flex-grow-1 justify-content-center justify-content-md-start">
                    <div class="d-flex gap-5 flex-md-row flex-column align-items-center justify-content-center justify-content-md-start"
                        style="transition: 1s;">
                        <div class="d-flex justify-content-center align-items-center"
                            style="width: 90px ; height: 90px; border-radius: 50%; background-color: #7153d9;">
                            <i class="fa-solid fa-location-dot"
                                style="color: #ffffff;font-size: 30px;transition: 1s;"></i>
                        </div>
                        <div class="d-flex flex-column gap-3 align-items-md-start align-items-center">
                            <h2>Address</h2>
                            <p style="font-size: 16px;">20, Backway Road, New York, US AB42
                            </p>
                        </div>
                    </div>
                    <div class="d-flex gap-5 flex-md-row flex-column align-items-center justify-content-center justify-content-md-start"
                        style="transition: 1s;">
                        <div class=" d-flex justify-content-center align-items-center"
                            style="width: 90px ; height: 90px; border-radius: 50%; background-color: #7153d9;">
                            <i class="fa-solid fa-phone" style="color: #ffffff;font-size: 30px;transition: 1s;"></i>
                        </div>
                        <div class="d-flex flex-column gap-3 align-items-md-start align-items-center">
                            <h2>Phone</h2>
                            <p style="font-size: 16px;">+123 456 7890
                            </p>
                        </div>
                    </div>
                    <div class="d-flex gap-5 flex-md-row flex-column align-items-center justify-content-center justify-content-md-start"
                        style="transition: 1s;">
                        <div class="d-flex justify-content-center align-items-center"
                            style="width: 90px ; height: 90px; border-radius: 50%; background-color: #7153d9;">
                            <i class="fa-solid fa-envelope" style="color: #ffffff;font-size: 30px;transition: 1s;"></i>
                        </div>
                        <div class="d-flex flex-column gap-3 align-items-md-start align-items-center">
                            <h2>Email</h2>
                            <p style="font-size: 16px;">hello@nftportfolio.com
                            </p>
                        </div>
                    </div>
                </div>
                <form class="message-form col-md-4 d-flex flex-column flex-grow-1 gap-4" action="">
                    <div class="d-flex gap-4" style="transition: 1s;">
                        <input class="flex-grow-1 col-5"
                            style="border-radius: 15px; border:none; font-size: 19px;padding: 18px 0px 18px 27px !important;"
                            type="text" placeholder="Your name">
                        <input class="flex-grow-1 col-5"
                            style="border-radius: 15px; border:none; font-size: 19px;padding: 18px 0px 18px 27px !important;"
                            type="text" placeholder="Your Email">
                    </div>
                    <div class="d-flex gap-4" style="transition: 1s;">
                        <input class="flex-grow-1 col-5"
                            style="border-radius: 15px; border:none; font-size: 19px;padding: 18px 0px 18px 27px !important;"
                            type="text" placeholder="Your phone">
                        <select class="flex-grow-1 col-5"
                            style="border-radius: 15px; border:none; font-size: 19px;padding: 18px 0px 18px 27px !important;color: black;appearance: none;"
                            name="subject" value="subject">
                            <option value="subject" selected>Subject</option>
                            <option value="subject">Subject1</option>
                            <option value="subject">Subject2</option>
                            <option value="subject">Subject3</option>
                            <option value="subject">Subject4</option>
                        </select>
                    </div>
                    <div class="flex-grow-1 col-12" style="transition: 1s">
                        <textarea name="" id="" cols="" rows=""
                            style="border: none; resize: none; width: 100%; height: 190px;border-radius:15px;font-size: 19px;padding: 18px 0px 18px 27px !important;color: black;transition: 1s;"
                            placeholder="Your message here"></textarea>
                    </div>
                    <button class="button main align-self-start"
                        style="padding: 20px 60px !important;transition: 1s; font-size: 20px;font-weight: 500;border: none;z-index: 1;">Send
                        Now
                        <div></div>
                    </button>
                </form>
            </div>
        </div>
    </div>`;

  $(html).insertAfter(".header");
};

addFormSection();

const addressDiv = document.querySelectorAll(".address div");
const messageFormDiv = Array.from(
  document.querySelector(".message-form").children
);

// end form section

// add map section

const addMap = function () {
  let html = ` <div class="container-xxl mt-5 map overflow-hidden mt-3 p-xxl-5 py-5 m-auto" style="transition: 1s;border-radius: 20px; margin-top: 100px !important">
        <div class="w-100 px-xxl-5 px-3">
            <div id="map" style="height: 400px;border-radius: 20px;"></div>
        </div>
    </div>



    <script>
        var map = L.map('map').setView([30.60427, 32.27225], 9);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([30.60427, 32.27225]).addTo(map)
    </script>`;

  $(html).insertAfter(".form-section");
};

addMap();

// end map section

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

  $(html).insertAfter(".map");
};

addNftPortfoilio();

// end nft portfolio section

const mainText = Array.from(document.querySelectorAll(".main-text"));
