var timeline = gsap.timeline();

timeline.to("#page1",{
    y: "100vh",
    scale:0.6,
    duration:0,
   
})
timeline.to("#page1", {
  y: "ovh",
  duration: 1,
  delay: 1,
});
timeline.to("#page1", {
    rotate:360,
    scale:1,
    delay:0.8
})
