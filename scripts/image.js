var img = new Image();
img.onload=function(){
    document.getElementById("main-img").src=this.src;
};

window.onload = checkImg;
window.onresize = checkImg;

function checkImg(){
    if(window.innerWidth>720){
        img.src = "images/kally-main1.webp";
    }
    else{
        img.src = "images/kally-main.webp";
    }
};