addNavStyle = function () {
  let html = `<style>
  .nav{
    position: absolute;
    z-index: 100;
    transition: 0.5s;
    }
        .nav.fixed {
        background-color: #200b6a;
        box-shadow: #0000006e 0px 1px 8px 0px;
    }

    .drop-content {
        display: none;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: rgb(113 83 217);
        z-index: 3;
    }

    .links {
        translate: 0 4px;
    }

    .drop-content a,
    .links a {
        color: white;
        font-size: 18px;
        font-weight: 500;
        transition: 0.5s;
    }

    .links a {
        position: relative;
        padding-bottom: 10px !important;

    }

    .links a::before {
        position: absolute;
        content: "";
        bottom: 0;
        left: 0;
        height: 2px;
        width: 0%;
        background-color: rgb(253 86 42);
        transition: 0.5s;
    }

    .links a::after {
        position: absolute;
        content: "";
        bottom: 0;
        right: 0;
        height: 2px;
        width: 0%;
        background-color: rgb(253 86 42);
        transition: 0.5s;
    }

    .drop-content a.active,
    .links a.active {
        color: rgb(253 86 42);
    }

    .drop-content a:hover {
        color: rgb(253 86 42);
    }

    .links a:hover {
        color: rgb(253 86 42);
    }

    .links a:hover::before,
    .links a:hover::after {
        width: 50%;
    }

    .span1.x {
        transition: 0.5s;
        rotate: 45deg;
        translate: 0 7px;
    }

    .span1.e {
        transition: 0.5s;
        rotate: 0deg;
        translate: 0 0px;
    }

    .span2.x {
        transition: 0.5s;
        translate: -40px 0px
    }

    .span2.e {
        transition: 0.5s;
        translate: 0px 0px
    }

    .span3.x {
        transition: 0.5s;
        rotate: -45deg;
        translate: 0 -7px;
    }

    .span3.e {
        transition: 0.5s;
        rotate: 0deg;
        translate: 0 0px;
    }

    .link1-drop,
    .link2-drop {
        display: none;
    }

    .drop-home,
    .drop-pages {
        display: flex !important;
        flex-direction: column;
        opacity: 0;
        visibility: hidden;
        translate: 0px 35px;
        transition: all 0.5s ease;
        top: 30px;
        background-color: #4526b1;
        width: 200px;
        padding: 15px 20px !important;
        border-bottom: 3px solid rgb(253 86 42);
        z-index: 2;
    }

    .drop-home a,
    .drop-pages a {
        margin-bottom: 5px !important;
        font-size: 15px;
    }

    .drop-home a::before,
    .drop-home a:after,
    .drop-pages a::before,
    .drop-pages a::after {
        display: none;
    }


    .drop-home a:hover {
        color: rgb(253 86 42);
    }

    .home:hover .drop-home,
    .pages:hover .drop-pages {
        display: flex !important;
        flex-direction: column;
        opacity: 1;
        visibility: visible;
        translate: 0 20px;
    }

   .button {
        position: relative;
        background: transparent;
        color: white;
        font-size: 18px;
        font-size: 18px;
        font-weight: 500;
        transition: 0.5s;
        padding: 12px 45px !important;
        border-radius: 60px;
        border: 2px solid rgb(253 86 42);
        overflow: hidden;
        cursor: pointer;
        transition-delay: 0.2s;
    }

    .button::before {
        display: none;
        position: absolute;
        content: "";
        left: 0;
        top: 50%;
        translate: 0% -50%;
        width: 22px;
        height: 22px;
        background-color: rgb(253 86 42);
        border-radius: 50%;
        transition: 1s;
        z-index: -1;
    }

    .button::after {
        display: none;
        position: absolute;
        content: "";
        right: 0;
        top: 50%;
        translate: 0% -50%;
        width: 22px;
        height: 22px;
        background-color: rgb(253 86 42);
        border-radius: 50%;
        transition: 1s;
        z-index: -1;
    }

    .button:hover::after {
        display: block;
        animation: right 0.8s forwards ease-out;
    }

    .button:hover::before {
        display: block;
        animation: left 0.8s forwards ease-out;
    }

    @keyframes left {
        50% {
            left: 50%;
            translate: -50% -50%;
            height: 15px;
            width: 15px;
            border-radius: 50%;
        }

        55% {
            height: 100%;
            border-radius: 20%;
        }

        100% {
            height: 100%;
            width: 100%;
            border-radius: 0%;
        }
    }

    @keyframes right {
        50% {
            right: 50%;
            translate: 50% -50%;
            height: 15px;
            width: 15px;
            border-radius: 50%;
        }

        55% {
            height: 100%;
            border-radius: 20%;
        }

        100% {
            height: 100%;
            width: 100%;
            border-radius: 0%;
        }
    }
    
</style>`;

  document.head.insertAdjacentHTML("afterend", html);
};

addNavStyle();

addNav = function () {
  let html = `<div class="nav w-100" style="top: 0; max-height: 80px;">
  <nav class="container-xxl nav1 w-100  px-xxl-5 py-5 m-auto d-flex align-items-center justify-content-between position-relative">
        <div class="px-xxl-5 px-4 w-100">
            <div class="d-flex flex-row gap-3 justify-content-between  align-items-center w-100">
                <a href="../index.html"><img src="../images/logo.png" alt=""></a>
                <!-- links large screen  -->
                <div class="links d-none d-lg-flex flex-row gap-5 align-items-center">
                    <div class="home position-relative">
                        <a class="active" href="../index.html">Home</a>
                        <div class="drop-home position-absolute">
                            <a class="active" href="../index.html">Home 01</a>
                            <a href="home2.html">Home 02</a>
                            <a href="home3.html">Home 03</a>
                            <a href="">OnePage</a>
                        </div>
                    </div>
                    <div>
                        <a href="about.html">About</a>
                    </div>
                    <div>
                        <a href="collection.html">Collections</a>
                    </div>
                    <div class="pages position-relative">
                        <a class="" href="team.html">Pages</a>
                        <div class="drop-pages position-absolute">
                            <a class="" href="team.html">Team</a>
                            <a href="road.html">Road Map</a>
                            <a href="mission.html">Our Mission</a>
                            <a href="">Blog List</a>
                            <a href="">Blog Grid</a>
                            <a href="">Blog Single</a>
                            <a href="">Faq</a>
                        </div>
                    </div>
                    <div>
                        <a href="contact.html">Contact</a>
                    </div>
                    <div class="button">
                        Join Now
                    </div>
                </div>
                <!-- links small screen -->
                <div class="drop-down d-block d-lg-none">
                    <div class="drop-button overflow-hidden position-relative" style="cursor: pointer; height: 50px; width: 30px;">
                        <span class="span1 e"
                            style="background-color: white; height: 3px; width: 100%;position: absolute; top: 39%;"></span>
                        <span class="span2 e"
                            style="background-color: white; height: 3px; width: 100%;position: absolute; top: 53%;"></span>
                        <span class="span3 e"
                            style="background-color: white; height: 3px; width: 100%;position: absolute; top: 67%;"></span>
                    </div>
                    <div class="drop-content position-absolute">
                        <div class="p-4 px-5 d-flex justify-content-between"
                            style="border-bottom: 1px solid rgba(255, 255, 255, 0.254);">
                            <a class="active" href="../index.html">Home</a>
                            <i class="fa-solid link1 fa-caret-left"
                                style="color: #ffffff;font-size: 20px;transition: 0.5s;cursor: pointer;"></i>
                        </div>
                        <div class="link1-drop">
                            <div class="p-4 px-5"
                                style="border-bottom: 1px solid rgba(255, 255, 255, 0.254);padding-left: 55px !important;">
                                <a class="active" href="../index.html">Home 01</a>
                            </div>
                            <div class="p-4 px-5"
                                style="border-bottom: 1px solid rgba(255, 255, 255, 0.254);padding-left: 55px !important;">
                                <a href="home2.html">Home 02</a>
                            </div>
                            <div class="p-4 px-5"
                                style="border-bottom: 1px solid rgba(255, 255, 255, 0.254);padding-left: 55px !important;">
                                <a href="home3.html">Home 03</a>
                            </div>
                            <div class="p-4 px-5"
                                style="border-bottom: 1px solid rgba(255, 255, 255, 0.254);padding-left: 55px !important;">
                                <a href="">OnePage</a>
                            </div>
                        </div>
                        <div class="p-4 px-5" style="border-bottom: 1px solid rgba(255, 255, 255, 0.254);">
                            <a href="about.html">About</a>
                        </div>
                        <div class="p-4 px-5" style="border-bottom: 1px solid rgba(255, 255, 255, 0.254);">
                            <a href="collection.html">Collections</a>
                        </div>
                        <div class="p-4 px-5 d-flex justify-content-between"
                            style="border-bottom: 1px solid rgba(255, 255, 255, 0.254);">
                            <a class="" href="team.html">Pages</a>
                            <i class="fa-solid link2 fa-caret-left"
                                style="color: #ffffff;font-size: 20px;transition: 0.5s;cursor: pointer;"></i>
                        </div>
                        <div class="link2-drop">
                            <div class="p-4 px-5"
                                style="border-bottom: 1px solid rgba(255, 255, 255, 0.254);padding-left: 55px !important;">
                                <a class="" href="team.html">Team</a>
                            </div>
                            <div class="p-4 px-5"
                                style="border-bottom: 1px solid rgba(255, 255, 255, 0.254);padding-left: 55px !important;">
                                <a href="road.html">Road Map</a>
                            </div>
                            <div class="p-4 px-5"
                                style="border-bottom: 1px solid rgba(255, 255, 255, 0.254);padding-left: 55px !important;">
                                <a href="mission.html">Our Mission</a>
                            </div>
                            <div class="p-4 px-5"
                                style="border-bottom: 1px solid rgba(255, 255, 255, 0.254);padding-left: 55px !important;">
                                <a href="">Blog List</a>
                            </div>
                            <div class="p-4 px-5"
                                style="border-bottom: 1px solid rgba(255, 255, 255, 0.254);padding-left: 55px !important;">
                                <a href="">Blog Grid</a>
                            </div>
                            <div class="p-4 px-5"
                                style="border-bottom: 1px solid rgba(255, 255, 255, 0.254);padding-left: 55px !important;">
                                <a href="">Blog Single</a>
                            </div>
                            <div class="p-4 px-5"
                                style="border-bottom: 1px solid rgba(255, 255, 255, 0.254);padding-left: 55px !important;">
                                <a href="">Faq</a>
                            </div>
                        </div>
                        <div class="p-4 px-5">
                            <a href="contact.html">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    </div>`;

  document.body.insertAdjacentHTML("afterbegin", html);
};

addNav();

$(document).ready(function () {
  $(".drop-button").click(function () {
    $(".drop-content").slideToggle("slow");
    $(".span1").toggleClass("x");
    $(".span1").toggleClass("e");
    $(".span2").toggleClass("x");
    $(".span2").toggleClass("e");
    $(".span3").toggleClass("x");
    $(".span3").toggleClass("e");
  });
  $(".link1").click(function () {
    $(".link1-drop").slideToggle("slow");
    $(".link1").toggleClass("fa-caret-down");
  });
  $(".link2").click(function () {
    $(".link2-drop").slideToggle("slow");
    $(".link2").toggleClass("fa-caret-down");
  });
});

const navFixed = function (nav) {
  if (scrollY >= 1000) {
    document.querySelector(".nav").classList.add("fixed");
    document.querySelector(".nav").style.position = "fixed";
    document.querySelector(".nav").style.translate = "0 0";
    document.querySelector(".nav").style.height = `${
      document.querySelector(".nav1").scrollHeight + 10
    }px`;
    document.querySelector(".nav1").classList.add("py-3");
    document.querySelector(".nav1").classList.remove("py-5");
  } else if (scrollY >= 100) {
    document.querySelector(".nav").style.translate = "0 -100%";
  } else {
    document.querySelector(".nav").classList.remove("fixed");
    document.querySelector(".nav").style.position = "absolute";
    document.querySelector(".nav").style.translate = "0 0%";
    document.querySelector(".nav1").classList.add("py-5");
    document.querySelector(".nav1").classList.remove("py-3");
  }
};

window.addEventListener("scroll", function () {
  navFixed();
});

window.addEventListener("load", function () {
  if (this.scrollY > 1029) {
    navFixed();
  }
  return;
});
