var circle = document.querySelector("#circle");
var frames = document.querySelectorAll(".frame");
const lerp = (x, y, a) => x * (1 - a) + y * a;


frames.forEach(frame => {
    frame.addEventListener("mousemove", function (dets) {

        var dims = frame.getBoundingClientRect();
        var xstart = dims.x;
        var xend = xstart + dims.width;

        var zeroOne = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

        console.log(lerp(-50, 50, zeroOne));


        gsap.to(circle, {
            scale: 5
        })

        gsap.to(frame.children, {
            color: "white",
            duration: .4,
            y: "-4vw"
        })
        gsap.to(frame.children, {
            x: lerp(-50, 50, zeroOne),
            duration: .3
        })

    })

    frame.addEventListener("mouseleave", function (dets) {
        gsap.to(circle, {
            scale: 1
        })
        gsap.to(frame.children, {
            color: "black",
            duration: .4,
            y: "0"
        })
        gsap.to(frame.children, {
            x: 0,
            duration: .3
        })
    })

});
window.addEventListener("mousemove", function (dets) {
    // console.log(dets.clientX,dets.clientY);
    // circle.style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
    gsap.to(circle, {
        x: dets.clientX,
        y: dets.clientY,
        duration: .2,
        ease: Expo
    })
});


