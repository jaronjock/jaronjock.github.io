var sideBar = false;

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