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

document.querySelector(".clickhere__button").addEventListener("click", function() {
  document.getElementById("fake-ad").style.display = "block";
  document.querySelector(".fake-ad__close").focus();
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
      document.getElementById("fake-ad").style.display = "none";
  }
});
