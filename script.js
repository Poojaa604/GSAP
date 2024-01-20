var tl=gsap.timeline();
tl.from("#navbar img, #navbar h3, #navbar button",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.5,
})
tl.from("#contain h1,#contain button, #contain h4",{
    x:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.5,

})
tl.from("h5",{
    scale:0,
    opacity:0,
})
tl.to("h5",{
    y:50,
    repeat:-1,
    duration:1,
    yoyo:true
})
