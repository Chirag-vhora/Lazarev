var nav=document.querySelector("nav")

nav.addEventListener("mouseenter",function () {
    
    let tl=gsap.timeline()

    tl.to("#nav-bottom",{
        height:"30vh",
        duration:0.5
    })
    tl.to("#nav-part2 h5",{
        
        display:"block",
        duration:0.1
    })
    tl.to("#nav-part2 h5 span",{

        y:0,
        stagger:{
            amount:0.5
        }
    })
    
})


nav.addEventListener("mouseleave",function () {
  //console.log("leave");
    
    
    let tl=gsap.timeline()

    tl.to("#nav-part2 h5 span",{

        y:20,
        stagger:{
            amount:0.2
        }
    })
    tl.to("#nav-part2 h5",{
        display:"none",
        duration:0.1
    })
    tl.to("#nav-bottom",{
        height:0
    })
   
})



var rightelem = document.querySelectorAll(".right-elem")

rightelem.forEach(function(elem) {
 //   var arr=0;
 
  // console.log(elem);
elem.addEventListener("mouseenter",function () {
        


        gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:1,
            duration:0.7,
            ease:Power2
        })
    /*  var diff = dets.clientY - elem.getBoundingClientRect().top;
    console.log(elem);
        gsap.to("#page2-right .right-elem img",{
            opacity:1,
//            scale:1,
  //          top:diff,
            
        })*/
})
   
    
elem.addEventListener("mouseleave",function (dets) {

       //  elem.childNodes[3].style.opacity=0

         gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0,
            duration:1

        })
    
     /*   gsap.to("#page2-right .right-elem img",{
            opacity:0,
           // scale:0,
            //ease:Power3,
            //duration:0.5
            
        })
*/
        })
elem.addEventListener("mousemove",function (dets) {
    gsap.to(elem.childNodes[3],{
        x:dets.x -elem.getBoundingClientRect().x-50,
        y:dets.y -elem.getBoundingClientRect().y-130
    })
})

})

function page3videoanimation(){
    
var center = document.querySelector("#center")
var video = document.querySelector("#page3 video")

center.addEventListener("click",function () {
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0
    })
})

video.addEventListener("click",function () {
    video.pause()
    gsap.to(video,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity:0,
        borderRadius:"30px"
    })
})
}

page3videoanimation()


 var section=document.querySelectorAll(".right-section")
 var video=document.querySelector(".right-section video")

section.forEach(function (elem) {
    
    elem.addEventListener("mousemove",function (dets) {
     
        video.play()
        gsap.to(".right-section video",{
            opacity:1,
            scale:1,
            ease:Power2
        })        
    })

    elem.addEventListener("mouseleave",function (dets) {
     
        video.pause()
        gsap.to(".right-section video",{
            opacity:0,
            scale:0,
            ease:Power2
            
        })        
    })
})


gsap.from("#page7-bottom h5",{
    x:0,
    duration:1,
    
    scrollTrigger:{
        trigger:"#page7-bottom",
        scroller:"body",
        
        start:"top 70%",
        end:"top 20%",
        scrub:true
    }
})

gsap.to("page7-bottom .el",{
    borderOpacity:0
})