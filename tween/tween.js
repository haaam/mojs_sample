var circle = document.querySelector("#circle");
new mojs.Tween({
  repeat: 0,
  delay: 500,
  speed: 1,
  duration: 1500,
  onUpdate: function(progress) {
    var bounceProgress = mojs.easing.bounce.out(progress);
    circle.style.transform = "translateY(" + 300 * bounceProgress + "px)";
  }
}).play();
