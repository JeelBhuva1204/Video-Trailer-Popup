const btnE1 = document.querySelector(".btn");
const closeIconE1 = document.querySelector(".close-icon");
const trailerContainerE1 = document.querySelector(".trailer-container");
const videoE1 = document.querySelector("video")


btnE1.addEventListener("click",() => {
    trailerContainerE1.classList.remove("active");
});
closeIconE1.addEventListener("click",()=>{
    trailerContainerE1.classList.add("active")
    videoE1.pause();
    videoE1.currentTime = 0;

})


const btnE2 = document.querySelector(".btn2");
const closeIconE2 = document.querySelector(".close-icon2");
const trailerContainerE2 = document.querySelector(".trailer-container2");
const videoE2 = document.querySelector(".video2")



btnE2.addEventListener("click",() => {
    trailerContainerE2.classList.remove("active2");
});
closeIconE2.addEventListener("click",()=>{
    trailerContainerE2.classList.add("active2")
    videoE2.pause();
    videoE2.currentTime = 0;

})

const btnE3 = document.querySelector(".btn3");
const closeIconE3 = document.querySelector(".close-icon3");
const trailerContainerE3 = document.querySelector(".trailer-container3");
const videoE3 = document.querySelector(".video3")



btnE3.addEventListener("click",() => {
    trailerContainerE3.classList.remove("active3");
});
closeIconE3.addEventListener("click",()=>{
    trailerContainerE3.classList.add("active3")
    videoE3.pause();
    videoE3.currentTime = 0;

})
