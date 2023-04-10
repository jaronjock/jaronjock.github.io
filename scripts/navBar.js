var sideBar = false;

window.onresize = resizeNavBar;

function changeNav(x) {
    x.classList.toggle("change");
    if (sideBar){
        document.getElementById("nav-bar").style.width = "0";
        sideBar = false;
    }
    else{
        document.getElementById("nav-bar").style.width = "60%";
        sideBar = true;
    }
}

function resizeNavBar(){
    if(window.innerWidth > 720)
    {
        document.getElementById("nav-bar").style.width = "100%";
        console.log("check")
    }
    else{
        if(sideBar){
            document.getElementById("nav-bar").style.width = "60%";
        }
        else{
            document.getElementById("nav-bar").style.width = "0";
        }
    }
}