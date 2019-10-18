const burst = new mojs.Burst({
  radius: { 0: 50 },
  left: "0%",
  top: "0%",
  count: 5,
  children: {
    shape: "polygon",
    points: 5,
    fill: { cyan: "black" },
    angle: { 360: 0 },
    duration: 2000,
    // delay: "stagger(0, 100)"
  }
});

document.addEventListener("mousedown", function(e) {
  burst
    .tune({ x: e.pageX, y: e.pageY })
    .setSpeed(3)
    .replay();
});
