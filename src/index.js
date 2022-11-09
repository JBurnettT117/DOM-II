import { buildQueries } from '@testing-library/dom'
import './less/index.less'

// Your code goes here!

document.addEventListener("scroll", evt => (setTimeout(evt => {
    document.querySelector(".content-section .text-content h2").textContent = "I'm so glad that you've decided to stay! A very good decision indeed!"
},10000)));

document.addEventListener("dblclick", evt => {
    document.querySelector("img").remove();
});

document.addEventListener("mouseover", evt => {
    document.querySelector("body").classList.toggle("blue");
})

document.addEventListener("keydown", evt => {
    document.querySelectorAll("h2").forEach(element => element.classList.toggle("orange"));
})

document.addEventListener("wheel", evt => {
    document.querySelectorAll("p").forEach(element => element.classList.toggle("italic"));
})

document.addEventListener("mouseout", (evt) => {
    document.querySelector("h1").textContent = "How much fun would a fun bus have if a fun bus could have fun?";
});

document.addEventListener("mouseleave", evt => {
    document.querySelector("h2").textContent = "Please dont leave, I want to be your only window!"
})

document.addEventListener("cut", evt => {
    evt.preventDefault();
    document.querySelector(".inverse-content .text-content h2").textContent = "OW! give me those scissors and I'll show you how it feels!";
})


document.addEventListener("copy", evt => document.querySelector(".content-destination h2").textContent = "Hey thats plagarism! Give it back!")

document.addEventListener("paste", evt => document.querySelector(".content-destination h2").textContent = "Ooh yeah, thats better. Thank you!");
