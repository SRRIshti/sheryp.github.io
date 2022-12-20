let t2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#sri",
      // pin: true,
      start: "top 9.9%",
      // markers: true,
      end: "+=00",
      scrub: 0,
    }
  });
  t2.to('#sri', {
    opacity:0,
   duration: 18,
    y:3400,
  });


  let t4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#sri",
      // pin: true,
      start: "1% 9.9%",
      // markers: true,
      end: "+=200",
      scrub: 0,
    }
  });
  t4.to('#mainitem img', {
    opacity:1,
   duration: 1,
    // y:3400,
  });



  let t3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#mainitem",
      // pin: true,
      opacity:1,
      start: "top 10%",
      // markers: true,
      end: "+=4300",
      scrub: 0,
    }
  });
 
  t3.to('#mainitem', {
    opacity:1,
   duration: 1,
    y:3300,
  
  });


  // let t3 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "#mainitem",
  //     // pin: true,
  //     opacity:1,
  //     start: "top 10%",
  //     markers: true,
  //     end: "+=4300",
  //     scrub: 0,
  //   }
  // });
  // t3.to('#mainitem', {
  //   opacity:1,
  //  duration: 1,
  //   y:3100,
  
  // });


let t1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#f2",
    // pin: true,
    start: "top 15%",
    // markers: true,
    end: "+=600",
    scrub: 2,
  }
});
t1.to('#f2', {
  // opacity:1,
 duration: 2,
  y:440,
});