
//issue where 2 object need to be observe at same time, and only 1 is detected

const observer = new IntersectionObserver((entries) => {
    console.log(entries);

    var e1 = entries[0];
    
    //check if itemRight
    if(e1.target.id == "display-right"){
        if(e1.isIntersecting == true){
            console.log("item display opacity");
            e1.target.classList.add("opacity-fade");
        }
        if(e1.isIntersecting == false){
            console.log("item display hiding");
            e1.target.classList.remove("opacity-fade");
        }
    }


    if(e1.isIntersecting == true){
        //intersection ratio ni bapak susahnya nak main
        e1.target.classList.replace("img-top-before","img-top");
        console.log("replacing");
    }
    if(e1.isIntersecting == false){
        e1.target.classList.replace("img-top","img-top-before");
        console.log("nope");
    }
    },

    {  //anonymous options object
        rootMargin: '0px',
        threshold: 0.1
      });
      

const hiddenElement = document.querySelector("#top");
console.log(hiddenElement);
observer.observe(hiddenElement);



const itemDisplay = document.getElementsByClassName("item-display");

const itemRight = document.querySelectorAll('[id=display-right]');

console.log("right: "+ itemRight);

newArray = Array.from(itemDisplay);
rightArray = Array.from(itemRight);


console.log("item display: " + itemDisplay);

const observer2 = new IntersectionObserver((entries) => {
    console.log("entries");

    var e1 = entries[0];
    console.log(e1);
    //accessing value
    if(e1.isIntersecting == true){
        console.log("item display opacity");
        e1.target.classList.add("opacity-fade");
    }
    if(e1.isIntersecting == false){
        console.log("item display hiding");
        e1.target.classList.remove("opacity-fade");
    }
    },

    {  //anonymous options object
        threshold: 0.1
      });      

//separating into 2 observer, since some of them are observed at same point. left and center
//observer 2, right observer 1 (just observer)


for(i in newArray){
    //console.log("observing");
    observer2.observe(newArray[i]);
    //console.log('success observed');
}

console.log("right: " + itemRight[0]);

for(i in rightArray){
    console.log("observing right");
    observer.observe(rightArray[i]);
    console.log('success observed right');
}