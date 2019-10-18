const polygon = new mojs.Shape({
  parent: "#polygon",
  shape: "polygon",
  scale: { 0: 1 },
  fill: "blue",
  duration: 1000,
  left: "25%",
  top: "50%",
  points: 5,
  easing: "cubic.out"
}).then({
  scale: { 1: 0 },
  duration: 1000,
  delay: 1000,
  angle: 720
});

const zigzag = new mojs.Shape({
  parent: "#zigzag",
  shape: "zigzag",
  opacity: { 0: 1 },
  scale: { 0: 1 },
  stroke: "green",
  fill: "transparent",
  points: 5,
  duration: 1000,
  left: "75%",
  top: "50%",
  delay: 1000,
  easing: "cubic.out"
}).then({
  scaleX: { 1: 5 },
  scaleY: { 1: 0 },
  duration: 1000,
  delay: 1000,
  opacity: { 1: 0 }
});

const timeline = new mojs.Timeline({
  delay: 500,
  onComplete() {
    this.replay();
  }
});

timeline.add(polygon, zigzag).play();
