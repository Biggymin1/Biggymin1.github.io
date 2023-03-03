
const observer = new IntersectionObserver((entries) => {
    console.log(entries);

    var e1 = entries[0];
    //accessing value
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

newArray = Array.from(itemDisplay);

console.log("item display: " + itemDisplay);
for(i in newArray){
    console.log(newArray[i]); //notice ada 2 element extra
}

//cleaning that 2 element


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

for(i in newArray){
    console.log("observing");
    observer2.observe(newArray[i]);
    console.log('success observed');
}