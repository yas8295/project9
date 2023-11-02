//Scroll back to top

const addscrollTopBtn = function () {
  let html = ` <div class="progress-wrap position-fixed d-flex justify-content-center align-items-center">
        <i class="fa-solid fa-chevron-up" style="position: absolute;color: rgb(255, 104, 62);"></i>
        <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
    </div>`;

  let style = `<style>
   
 .progress-wrap {
        position: fixed;
        right: 30px;
        bottom: 30px;
        height: 46px;
        width: 46px;
        cursor: pointer;
        border-radius: 50%;
        box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.093);
        z-index: 99;
        opacity: 0;
        visibility: hidden;
        transform: translateY(15px);
        -webkit-transition: all 200ms linear;
        transition: all 200ms linear;
        background-color: #7153d9;
    }

    .progress-wrap:hover {
        scale: 1.1;
    }

    .progress-wrap.active-progress {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    .progress-wrap svg path {
        fill: none;
    }

    .progress-wrap svg.progress-circle path {
        stroke: rgb(255, 66, 14);
        /* --- Lijn progres kleur --- */
        stroke-width: 3;
        box-sizing: border-box;
        -webkit-transition: all 200ms linear;
        transition: all 200ms linear;
    }
    </style>`;
  $(html).insertAfter("body");
  $(style).insertAfter("head");
};

addscrollTopBtn();

(function ($) {
  "use strict";

  $(document).ready(function () {
    "use strict";

    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 0;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  });
})(jQuery);

// end Scroll back to top
