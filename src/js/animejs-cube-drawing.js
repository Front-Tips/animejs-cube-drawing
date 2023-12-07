import anime from "animejs"

anime
  .timeline({ loop: true })
  // front
  .add({
    targets: "#front",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
  })
  // top
  .add({
    targets: "#top",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
  })
  // side
  .add({
    targets: "#side",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
  })
