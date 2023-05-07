var sideBarVisible = false;


window.onresize = resizeNavBar;

function changeNav(x) {
    x.classList.toggle("change");
    if (sideBarVisible){
        document.getElementById("nav-bar").style.width = "0";
        document.getElementById("nav-bar").style.visibility="hidden";
        sideBarVisible = false;
    }
    else{
        document.getElementById("nav-bar").style.width = "100%";
        document.getElementById("nav-bar").style.visibility="visible";
        sideBarVisible = true;
    }
}

function resizeNavBar(){
    if(window.innerWidth > 720)
    {
        document.getElementById("nav-bar").style.width = "100%";
        document.getElementById("nav-bar").style.visibility="visible";
    }
    else{
        if(sideBarVisible){
            document.getElementById("nav-bar").style.width = "100%";
            document.getElementById("nav-bar").style.visibility="visible";
        }
        else{
            document.getElementById("nav-bar").style.width = "0";
            document.getElementById("nav-bar").style.visibility="hidden";
        }
    }
}