var mouse = document.querySelector(".point");
var main = document.querySelector(".main");
var foot = document.querySelector(".footer");

main.addEventListener("mousemove",function(dets){
    mouse.style.left = dets.x+"px";
    mouse.style.top = dets.y+"px";
    mouse.style.display = "block";

})

main.addEventListener("mouseleave",function(dets){
    mouse.style.display = "none";
})

foot.addEventListener("mousemove",function(dets){
    mouse.style.display = "none";
})


alert("The Mouse hover and project of visual code for view of mobile features are not able to suitable work in mobilephone and also mouse project.")
