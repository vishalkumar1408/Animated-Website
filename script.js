function pageOneAnimation(){
    var tl =  gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    y:-30,
    opacity:0,
    duration:.4,
    delay:.5,
    stagger:0.15
})

tl.from(".center-part1 h1",{
    x:-200,
    opacity:0,
    duration:.5
},"-=.2")
tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:.4
},"-=.2")
tl.from(".center-part1 button",{
    x:-50,
    opacity:0,
    duration:.3
},"-=.2")

tl.from(".center-part2 img",{
    x:200,
    opacity:0,
    duration:.5,
},"-=.5")

tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    duration:.5,
    stagger:.15
})
}
function midPageAnimation(){
    gsap.to("#page2 h1",{
        transform:"translateX(-145%)",
        scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            start:"top 0%",
            end:"top -150%",
            scrub:true,
            pin:true
        }
    })
}
function pageTwoAnimation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            // markers:true,
            start:"top 50%",
            end:"top 0",
            scrub:2
        }
    })
    
    tl2.from(".services",{
        y:-30,
        opacity:0,
    })
    
    tl2.from(".elem.line1.left",{
        x:-300,
        opacity:0,
        duration:2
    })
    tl2.from(".elem.line1.right",{
        x:300,
        opacity:0,
        duration:2
    },"-=2")
    tl2.from(".elem.line2.left",{
        x:-300,
        opacity:0,
        duration:2
    })
    tl2.from(".elem.line2.right",{
        x:300,
        opacity:0,
        duration:2
    },"-=2")
}
function finalPageAnimation(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".final-section",
            scroller:"body",
            // markers:true,
            start:"top 60%",
            end:"top 10%", 
            scrub:2
        }
    })
    
    tl3.from(".final-part1",{
        y:150,
        opacity:0,
        duration:.8,
    })
    tl3.from(".final-part2",{
        y:150,
        opacity:0,
        duration:.6,
    })
    tl3.from(".final-part3",{
        y:150,
        opacity:0,
        duration:.6,
    })
}

pageOneAnimation();
midPageAnimation();
pageTwoAnimation();
finalPageAnimation();

