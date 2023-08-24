"use strict"

console.log(document.querySelectorAll("*"));


window.addEventListener("load", () => {
    document.body.innerHTML += "<h1>Loaded!</h1>";
    const div = document.createElement("div");
    document.body.appendChild(div);
    let int = 0;

    setInterval(() => {
        div.textContent = int;
        int++;
    }, 1000);
})