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

window.addEventListener("scroll", function () {
  moveDown(document.querySelector(".footer").children[0].children[0]);
  moveUp(document.querySelector(".footer").children[0].children[1]);
  moveUp(document.querySelector(".footer").children[0].children[2]);
});

const addFooterSection = function () {
  let style = `<style>
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
</style>`;

  $(style).insertAfter(document.head);

  let html = ` <div class="container-xxl footer overflow-hidden mt-5 p-xxl-5 py-5 m-auto" style="transition: 1s;">
        <div class="px-xxl-5 px-4 w-100 d-flex gap-5 flex-column flex-wrap justify-content-center align-items-center">
            <img src="../images/logo.png" alt="" style="transition: 1s;">
            <p class="text-center" style="font-size: 18px;transition: 1s;line-height: 1.8;">Duis aute irure dolor in
                reprehenderit in
                voluptate velit esse cillum <br>
                dolore eu
                fugiat nulla pariatur.
                Excepteur sint
                occae cat cupidatat non <br> proident, sunt in culpa qui officia dese runt mollit ani
            </p>
            <div class="d-flex gap-5 flex-wrap justify-content-center" style="transition: 1s;">
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
            <br>
            <br>
            <br>
            <div class="d-flex justify-content-center gap-5 py-5 w-100 flex-wrap"
                style="border-top: 1px solid rgba(118, 118, 118, 0.538);">
                <h3 style="opacity: 0.8;">Copyright © 2022, Monteno - NFT Portfolio HTML Template. Designed by
                    Themesflat</h3>
                <div class="d-flex footer-links justify-content-lg-end justify-content-center flex-grow-1 gap-5">
                    <h3 style="opacity: 0.8;transition: 0.5s;cursor: pointer;">Terms & Condition</h3>
                    <h3 style="opacity: 0.8;transition: 0.5s;cursor: pointer;">Privacy Policy</h3>
                    <h3 style="opacity: 0.8;transition: 0.5s;cursor: pointer;">Cookie Policy</h3>
                </div>
            </div>
        </div>
    </div>`;

  document.body.insertAdjacentHTML("beforeend", html);
};

addFooterSection();
