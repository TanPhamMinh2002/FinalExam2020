let img =
[
    document.querySelector(".displayed-img1"),
    document.querySelector(".displayed-img2"),
    document.querySelector(".displayed-img3"),
    document.querySelector(".displayed-img4"),
    document.querySelector(".displayed-img5"),
    document.querySelector(".displayed-img6"),
]

let div=document.querySelector("#thumb-bar");

for (let i of img){
    div.appendChild(i);
}

function makeSectionVisible() {
    document.querySelector("form").style.visibility = "visible";
    forms.removeEventListener("mousemove", makeSectionVisible);
}

let forms=document.querySelector("#thumb-bar");
forms.addEventListener("mousemove", makeSectionVisible);

let x=0;
let y=false;

img[0].addEventListener("mousemove", function(){
    if (y===false) {
        x=0;
        y=true;
    }
});
img[1].addEventListener("mousemove", function(){
    if (y===false) {
        x=1;
        y=true;
    }
});
img[2].addEventListener("mousemove", function(){
    if (y===false) {
        x=2;
        y=true;
    }
});
img[3].addEventListener("mousemove", function(){
    if (y===false) {
        x=3;
        y=true;
    }
});
img[4].addEventListener("mousemove", function(){
    if (y===false) {
        x=4;
        y=true;
    }
});
img[5].addEventListener("mousemove", function(){
    if (y===false) {
        x=5;
        y=true;
    }
});

function proceed(){
    document.querySelector("form").style.visibility = "hidden";
    let e=document.querySelector("#effect");
    if (e.value=="blur"){
        if (x===0){
            let img1 = document.querySelector(".displayed-img1");
            img1.src = "images/pic1B.jpg"; 
        } 
        if (x===1){
            let img1 = document.querySelector(".displayed-img2");
            img1.src = "images/pic2B.jpg"; 
        } 
        if (x===2){
            let img1 = document.querySelector(".displayed-img3");
            img1.src = "images/pic3B.jpg"; 
        } 
        if (x===3){
            let img1 = document.querySelector(".displayed-img4");
            img1.src = "images/pic4B.jpg"; 
        } 
        if (x===4){
            let img1 = document.querySelector(".displayed-img5");
            img1.src = "images/pic5B.jpg"; 
        } 
        if (x===5){
            let img1 = document.querySelector(".displayed-img6");
            img1.src = "images/pic6B.jpg"; 
        } 
    }
    else{
        alert("Invalid command");
    }
}

let btn=document.querySelector("#submit");
btn.addEventListener("click", proceed);