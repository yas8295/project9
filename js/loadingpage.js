const addLoading = function () {
  let html = `<div class="load position-fixed bg-light">
        <img class="position-fixed" src="../images/loadlogo.png" alt="" width="45px">
    </div>`;
  let css = `<style>
    .load {
        width: 100vw;
        height: 100vh;
        left: 0;
        top: 0;
        z-index: 100000000000;
    }

    .load img {
        left: 50%;
        top: 50%;
        translate: -50% -50%;
        animation: loading 1.5s infinite linear;
    }

    @keyframes loading {
        100% {
            rotate: 360deg;
        }
    }
</style>`;

  document.body.insertAdjacentHTML("afterbegin", html);
  document.head.insertAdjacentHTML("afterend", css);
};

addLoading();

window.addEventListener("load", function () {
  document.querySelector(".load").style.display = "none";
});
