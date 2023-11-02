// active page

document
  .querySelector(".links")
  .children[0].children[0].classList.remove("active");
document
  .querySelector(".links")
  .children[0].children[1].classList.remove("active");
document
  .querySelector(".links")
  .children[1].children[0].classList.add("active");

document.querySelectorAll(".drop-content a")[0].classList.remove("active");

document.querySelectorAll(".drop-content a")[1].classList.remove("active");

document.querySelectorAll(".drop-content a")[5].classList.add("active");

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
  // animate images box
  scale(imagesBox[0]);
  scale(imagesBox[1].children[0]);
  scale(imagesBox[1].children[1]);
  // end animate images box
  // animate portfolio cards
  porfolioCards.forEach((e) =>
    e.classList.contains("up") ? moveUp(e) : moveDown(e)
  );
  // end animate portfolio cards
  // add brand box animate
  brandBoxes.forEach((e) => scale(e));
  // end brand box animate
  // add animate nft
  moveUp(document.querySelector(".nft-portfolio"));
  // end animate nft
  // add register animate
  moveDown(this.document.querySelector(".register"));
  // end register animate
  teamMemberBox.forEach((e) => moveUp(e));
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

        .brand-box {
          cursor: pointer;
          transition: 1s;
        }

        .brand-box:hover img {
          opacity: 1 !important;
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
     
    </style>`;

  $(style).insertAfter(document.head);
};

addStyle();

// end style sheet

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

  document.querySelector(".nav").insertAdjacentHTML("afterend", html);
};

addAboutUs();

const imagesBox = Array.from(document.querySelector(".images-box").children);

// end about us section

// add header

const addHeader = function () {
  let html = `<div class="container-xxl header overflow-hidden mt-5 p-xxl-5 py-5 m-auto" style="transition: 1s;">
        <div class="w-100 px-xxl-5 px-3 d-flex gap-lg-0 gap-5 flex-wrap justify-content-center align-items-center">
            <div class="p-5 w-100 position-relative d-flex gap-5 flex-wrap align-items-center justify-content-center"
                style="margin-top: 120px !important;background-color: #4c22e1; border-radius: 18px; z-index: 1;min-height: 400px;">
                <div class="position-absolute"
                    style="left: 0; top: 0; width: 100%; height: 100%; background-image: url(../images/bg-inner-page-01.webp);opacity: 0.6; background-size: cover; z-index: -1;mix-blend-mode: screen;border-radius: inherit;">
                </div>
                <div class="d-flex gap-4 flex-column py-5 px-sm-5">
                    <h2 class="pb-4" style="transition: 1s; font-size: 60px;"><span
                            class="pb-4 border-5 border-bottom border-danger">A</span>bout Us</h2>
                    <p style="font-size: 24px;">Sed ut perspiciatis unde omnis iste natus <br>
                        error sit voluptatem accusantium
                    </p>
                </div>
                <div class="d-flex flex-grow-1 justify-content-center" style="position: relative;bottom: -30px">
                    <img class="w-100" style="transition: 1s; scale: 0;max-width: 550px; min-width: 290px" src="../images/group-ntf.webp" alt="">
                </div>
            </div>
        </div>
    </div>`;

  document.querySelector(".about-us").insertAdjacentHTML("beforebegin", html);
};

addHeader();

// end header

// add Register

const addRegister = function () {
  let html = `<div class="container-xxl register overflow-hidden mt-5 p-xxl-5 py-5 m-auto" style="transition: 1s;">
        <div class="w-100 px-xxl-5 px-3 d-flex gap-lg-0 gap-5 flex-wrap justify-content-center align-items-center">
            <div class="p-5 text-center w-100 position-relative d-flex gap-5 flex-wrap align-items-center justify-content-center"
                style="margin-top: 120px !important;background-color: #7153d9; border-radius: 18px;">
                <div class="d-flex gap-5 py-5 px-5 px-sm-5 justify-content-between w-100 flex-wrap">
                    <div class="d-flex gap-2 flex-grow-1 flex-column align-items-center">
                        <h1 style="font-size: 50px;">100K
                        </h1>
                        <h1>Registered User
                        </h1>
                    </div>
                    <div class="d-flex gap-2 flex-column align-items-center flex-grow-1">
                        <h1 style="font-size: 50px;">5M
                        </h1>
                        <h1>Total Assets
                        </h1>
                    </div>
                    <div class="d-flex gap-2 flex-column align-items-center flex-grow-1">
                        <h1 style="font-size: 50px;">10B
                        </h1>
                        <h1>Yearly Trading
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

  document.querySelector(".about-us").insertAdjacentHTML("afterend", html);
};

addRegister();

// end Register

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
                        <img src="../images/wallet.png" alt="">
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
                        <img src="../images/shopping-cart.png" alt="">
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
                        <img src="../images/folder.png" alt="">
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
                        <img src="../images/money-bag.png" alt="">
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

  $(html).insertAfter(".register");
};

addPortfolio();

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

//  end portfolio section

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

  $(html).insertAfter(".join-porfolio");
};

addTeamMember();

const teamMemberBox = document.querySelectorAll(".team-member");

// end team member

// add brand section

const addBrandSection = function () {
  let html = `<div class="overflow-hidden w-100 p-xxl-5 mt-5 py-5 m-auto">
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
                        style="opacity: 0.5; transition: 1s;" src="../images/logo-01.png" alt="" width="115px">
                </div>
                <div class="brand-box col-md-3 col-6 p-5 d-flex justify-content-center"
                    style="height: 170px;border: 1px solid rgba(255, 255, 255, 0.188); transition-delay: 0.7s;"><img class="align-self-center"
                        style="opacity: 0.5; transition: 1s;" src="../images/logo-02.png" alt="" width="115px">
                </div>
                <div class="brand-box col-md-3 col-6 p-5 d-flex justify-content-center"
                    style="height: 170px;border: 1px solid rgba(255, 255, 255, 0.188); transition-delay: 1s;"><img class="align-self-center"
                        style="opacity: 0.5; transition: 1s;" src="../images/logo-03.png" alt="" width="115px">
                </div>
                <div class="brand-box col-md-3 col-6 p-5 d-flex justify-content-center"
                    style="height: 170px;border: 1px solid rgba(255, 255, 255, 0.188); transition-delay: 0.4s;"><img class="align-self-center"
                        style="opacity: 0.5; transition: 1s;" src="../images/logo-04.png" alt="" width="115px">
                </div>
                <div class="brand-box col-md-3 col-6 p-5 d-flex justify-content-center"
                    style="height: 170px;border: 1px solid rgba(255, 255, 255, 0.188); transition-delay: 0.5s;"><img class="align-self-center"
                        style="opacity: 0.5; transition: 1s;" src="../images/logo-05.png" alt="" width="115px">
                </div>
                <div class="brand-box col-md-3 col-6 p-5 d-flex justify-content-center"
                    style="height: 170px;border: 1px solid rgba(255, 255, 255, 0.188); transition-delay: 0.8s;"><img class="align-self-center"
                        style="opacity: 0.5; transition: 1s;" src="../images/logo-06.png" alt="" width="115px">
                </div>
                <div class="brand-box col-md-3 col-6 p-5 d-flex justify-content-center"
                    style="height: 170px;border: 1px solid rgba(255, 255, 255, 0.188); transition-delay: 0.6s;"><img class="align-self-center"
                        style="opacity: 0.5; transition: 1s;" src="../images/logo-07.png" alt="" width="115px">
                </div>
                <div class="brand-box col-md-3 col-6 p-5 d-flex justify-content-center"
                    style="height: 170px;border: 1px solid rgba(255, 255, 255, 0.188); transition-delay: 0.3s;"><img class="align-self-center"
                        style="opacity: 0.5; transition: 1s;" src="../images/logo-08.png" alt="" width="115px">
                </div>
            </div>
        </div>
    </div>`;

  $(html).insertAfter(".team");
};

addBrandSection();

const brandBoxes = document.querySelectorAll(".brand-box");

// end brand section

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

  $(html).insertAfter(".brands");
};

addNftPortfoilio();

// end nft portfolio section

const mainText = Array.from(document.querySelectorAll(".main-text"));
