document.addEventListener("DOMContentLoaded", function () {
  const ad = document.getElementById("fake-ad");
  const showAdButton = document.querySelector(".clickhere__button");
  const closeAdButton = document.querySelector(".fake-ad__close");

  showAdButton.addEventListener("click", function () {
    ad.style.display = "block";
  });

  closeAdButton.addEventListener("click", function () {
    ad.style.display = "none";
  });
});

function playVideo() {
  var video = document.getElementById("myVideo");
  video.play();
}

function pauseVideo() {
  var video = document.getElementById("myVideo");
  video.pause();
}
