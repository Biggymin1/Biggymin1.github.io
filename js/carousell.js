let isDown;
function determineIfClick(targetLink){
    console.log('determined if click initiated');
    isDown = true;
    x = targetLink;
    // wait 1 seconds
    setTimeout(function(){ testFunction(x)},100);
}

function testFunction(passedLink){
    console.log('test function initiated');
    if (isDown == false){ 
        // down less than a 100ms indicating a click
        console.log("click");
        top.window.location.href = passedLink;
    }
    else{
        // down more than a 100ms indicating a scroll
        console.log("scroll");
    }
}

function onUp(){
    console.log('button release initiated');
    isDown = false;
}