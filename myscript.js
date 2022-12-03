

function change_page_instagram(){
    window.location.href = "https://www.instagram.com/min.tote/";
}

function change_page_github(){
    window.location.href = "https://github.com/Biggymin1";
}

function change_page_cgtrader(){
    window.location.href = "https://www.cgtrader.com/biggymin";
}

function change_page_googleplay(){
    window.location.href = "https://play.google.com/store/apps/developer?id=Amin+Wali";
}

function change_page_youtube(){
    window.location.href = "https://www.youtube.com/channel/UCgcANGdMno-idPuRX0zxNoA";
}

function change_page_discord(){
    window.location.href = "https://discordapp.com/users/8275";
}

function change_page_wattpad(){
    window.location.href = "https://www.wattpad.com/user/Biggymin";
}

function change_page_paypal(){
    window.location.href = "https://www.paypal.com/paypalme/AminWali360";
}



function changeImageForSmallScreen(){

    if(window.innerWidth <500){
        console.log("changing image for small screen");
        console.log(window.innerWidth);
        document.getElementById("imageFirst").className = "image-mod";
    }
    else{
        console.log("changing for regular screen");
        console.log(window.innerWidth);
        document.getElementById("imageFirst").className = "image";
    }
}

function changeRowForSmallScreen(){

    if(window.innerWidth <600){
        console.log("showing");
        document.getElementById("mobileRow").style.display = 'block';
        document.getElementById("mobileRow1").style.display = 'block';
        document.getElementById("mobileRow2").style.display = 'block';
        var x = document.getElementsByClassName("iconRow3");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
    }
    else{
        console.log("hiding");
        document.getElementById("mobileRow").style.display = 'none';
        document.getElementById("mobileRow1").style.display = 'none';
        document.getElementById("mobileRow2").style.display = 'none';

        var x = document.getElementsByClassName("iconRow3");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'block';
        }
    }

}

function combined1(){
    console.log("resize is ran");
    changeImageForSmallScreen();
    changeRowForSmallScreen();
}

function combined2(){
    window.setTimeout(changeRowForSmallScreen,1000);
    console.log("load is ran");
    changeImageForSmallScreen();
    changeRowForSmallScreen();
}
// Calling the function for the first time
changeRowForSmallScreen();
changeImageForSmallScreen();
 
// Attaching the event listener function to window's resize event
window.addEventListener("resize", combined1);
window.addEventListener("load", combined2);

