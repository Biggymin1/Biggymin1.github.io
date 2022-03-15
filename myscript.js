

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

function change_page_paypal(){
    window.location.href = "https://www.paypal.com/paypalme/AminWali360";
}



function changeImageForSmallScreen(){

    if(window.innerWidth <500){
        console.log("changing");
        document.getElementById("imageFirst").className = "image-mod";
        console.log('hello');
    }
    else{
        console.log("changing");
        document.getElementById("imageFirst").className = "image";
        console.log('hello');
    }
}
 
// Attaching the event listener function to window's resize event
window.addEventListener("resize", changeImageForSmallScreen);

// Calling the function for the first time
